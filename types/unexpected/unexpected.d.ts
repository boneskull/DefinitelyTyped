// Type definitions for unexpected 13.0
// Project: https://github.com/unexpectedjs/unexpected#readme
// Definitions by: Christopher Hiller <https://github.com/boneskull>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

export interface expect {
    /**
     * @see http://unexpected.js.org/api/use/
     */
    use: (plugin: PluginDefinition) => expect;

    /**
     * @see http://unexpected.js.org/api/clone/
     */
    clone: () => expect;

    /**
     * @see http://unexpected.js.org/api/addAssertion/
     */
    addAssertion: <T, A extends Array<any> = []>(
        pattern: string,
        handler: (unexpected: expect, subject: T, ...args: A) => void,
    ) => expect;

    /**
     * @see http://unexpected.js.org/api/addType/
     */
    addType: <T>(typeDefinition: UnexpectedTypeDef<T>) => expect;

    /**
     * @see http://unexpected.js.org/api/fail/
     */
    fail: typeof failFn;

    /**
     * @see http://unexpected.js.org/api/freeze/
     */
    freeze: () => expect;

    assertions: Record<string, Assertion[]>;
}

export interface Assertion {
    handler: (unexpected: expect, subject: any, ...args: any[]) => void;
    alternations: string[];
    flags: FlagRecord;

    subject: Subject;
}

export interface Subject {
    minimum: number;
    maximum: number;
    type: `type: ${UnexpectedKind}`;
    args: Subject[];
    testDescriptionString: string;
    declaration: string;
    expect?: expect;
    specificity: number[];
}

export type UnexpectedKind =
    | 'function'
    | 'array'
    | 'array-like'
    | 'any'
    | 'Set'
    | 'object'
    | 'Error'
    | 'Buffer'
    | 'binaryArray'
    | 'BigInt'
    | 'number'
    | 'string'
    | 'boolean'
    // | 'assertion'
    | 'NaN'
    // | 'expect.it'
    | 'Promise'
    // | 'wrapperObject'
    | 'undefined'
    | 'null';

export type Flag =
    | 'exhaustively'
    | 'not'
    | 'when'
    | 'async'
    | 'numerically'
    | 'constructor'
    | 'assertion'
    | 'only'
    | 'own';

export type FlagRecord = Record<Flag, boolean>;

export function failFn<A extends Array<any> = []>(format: string, ...args: A): void;
export function failFn<E extends Error>(error: E): void;

export interface PluginDefinition {
    name?: string;
    version?: string;
    dependencies?: Array<string>;
    installInto(unexpected: expect): void;
}

export interface UnexpectedTypeDef<T> {
    name: string;
    identify(value: any): value is T;
    base?: string;
    equal?(a: T, b: T, equal: (a: any, b: any) => boolean): boolean;
    inspect?(value: T, depth: number, output: any, inspect: (value: any, depth: number) => any): void;
}

type Trim<S extends string> = S extends ` ${infer Rest}` ? Trim<Rest> : S extends `${infer Pre} ` ? Trim<Pre> : S;

type Compact<S extends string> = S extends `${infer A}  ${infer B}` ? Compact<`${A} ${B}`> : Trim<S>;

type Join<T extends readonly string[], D extends string = ' '> = T extends readonly [
    infer Head extends string,
    ...infer Tail extends readonly string[],
]
    ? Compact<`${Head}${D}${Join<Tail>}`>
    : T extends readonly [infer Head extends string]
    ? Compact<Head>
    : '';

type Empty = '';

export type Choice<S extends string> = S extends `${infer A}|${infer Rest}` ? Trim<A> | Choice<Rest> : Trim<S>;

type ParsedChoice<Value extends string, Rest extends string = Empty, Pre extends string = Empty> = Pre extends Empty
    ? `${Choice<Value>} ${Desc<Rest>}`
    : Rest extends Empty
    ? `${Desc<Pre>} ${Choice<Value>}`
    : `${Desc<Pre>} ${Choice<Value>} ${Desc<Rest>}`;

export type ParsedFlag<Value extends Flag, Rest extends string, Pre extends string = Empty> = Pre extends Empty
    ? `${Value} ${Desc<Rest>}` | Desc<Rest>
    : `${Desc<Pre>} ${Value} ${Desc<Rest>}` | `${Pre} ${Desc<Rest>}`;

type KindToType = {
    function: (...args: any[]) => any;
    'array-like': ArrayLike<any>;
    any: any;
    Set: Set<any>;
    object: object;
    Error: Error;
    Buffer: Buffer;
    binaryArray: Uint8Array | Uint16Array | Uint32Array | Int8Array | Int16Array | Int32Array;
    BigInt: BigInt;
    number: number;
    string: string;
    boolean: boolean;
    assertion: KindToType['expect.it'];
    NaN: typeof NaN;
    'expect.it': ExpectIt;
    Promise: PromiseLike<any>;
    wrapperObject: object;
    undefined: undefined;
    null: null;
};

export interface ExpectIt {
    (...args: any[]): any;
    _expectIt: any;
}

type FromKind<K extends UnexpectedKind> = KindToType[K];

type Foo = TypeToKind<string[]>;

export type TypeToKind<T> = T extends (...args: any[]) => any
    ? 'function'
    : T extends any[]
    ? 'array'
    : T extends ArrayLike<any>
    ? 'array-like'
    : T extends Set<any>
    ? 'Set'
    : T extends Error
    ? 'Error'
    : T extends Buffer
    ? 'Buffer'
    : T extends TypedArray
    ? 'binaryArray'
    : T extends BigInt
    ? 'BigInt'
    : T extends number
    ? 'number' | 'NaN'
    : T extends string
    ? 'string'
    : T extends boolean
    ? 'boolean'
    : // T extends KindToType['assertion'] ? 'assertion' :
    // T extends KindToType['NaN'] ? 'NaN' :
    // T extends KindToType['expect.it'] ? 'expect.it' :
    T extends Promise<any>
    ? 'Promise'
    : // T extends KindToType['wrapperObject'] ? 'wrapperObject' :
    T extends undefined
    ? 'undefined'
    : T extends null
    ? 'null'
    : T extends object
    ? 'object'
    : never;


type ParsedType<Pre extends string = Empty> = Pre extends Empty ? UnexpectedKind : `${Desc<Pre>} ${UnexpectedKind}`;

export type Desc<S extends string> = S extends `${infer Pre}(${infer Value})${infer Rest}`
    ? ParsedChoice<Trim<Value>, Trim<Rest>, Trim<Pre>>
    : S extends `${infer Pre}[${infer Value extends Flag}]${infer Rest}`
    ? ParsedFlag<Value, Trim<Rest>, Trim<Pre>>
    : S extends `${infer Pre}(${infer Value})${infer Rest}`
    ? ParsedChoice<Trim<Value>, Trim<Rest>, Trim<Pre>>
    : S extends `${infer Pre}<type>`
    ? ParsedType<Trim<Pre>>
    : S extends Empty
    ? ''
    : S;


export type TypedArray =
| Int8Array
| Uint8Array
| Uint8ClampedArray
| Int16Array
| Uint16Array
| Int32Array
| Uint32Array
| Float32Array
| Float64Array
| BigInt64Array
| BigUint64Array;

type AnyFunction = (...args: any[]) => any
