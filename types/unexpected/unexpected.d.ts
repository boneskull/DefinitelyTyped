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
    flags: Record<Flag, boolean>;

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

export function failFn<A extends any[] = []>(format: string, ...args: A): void;
export function failFn(error: Error): void;

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

type Empty = '';

type TypedArray =
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

type AnyFunction = (...args: any[]) => any;

type Expand<S extends string> = S extends `${infer A}|${infer Rest}` ? Trim<A> | Expand<Rest> : Trim<S>;

type ParsedChoice<Value extends string, Rest extends string = Empty, Pre extends string = Empty> = Pre extends Empty
    ? `${Expand<Value>} ${Desc<Rest>}`
    : Rest extends Empty
    ? `${Desc<Pre>} ${Expand<Value>}`
    : `${Desc<Pre>} ${Expand<Value>} ${Desc<Rest>}`;

type ParsedFlag<Value extends Flag, Rest extends string, Pre extends string = Empty> = Pre extends Empty
    ? `${Value} ${Desc<Rest>}` | Desc<Rest>
    : `${Desc<Pre>} ${Value} ${Desc<Rest>}` | `${Pre} ${Desc<Rest>}`;

type ParsedType<Pre extends string = Empty> = Pre extends Empty ? UnexpectedKind : `${Desc<Pre>} ${UnexpectedKind}`;

/**
 * Converts an assertion description string (e.g., `to be (a map|a hash|an object) whose values [exhaustively] satisfy`) into a type for matching the description (2nd parameter) of an `expect()` overload.
 */
type Desc<S extends string> = S extends `${infer Pre}(${infer Value})${infer Rest}`
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

type KindToType = {
    function: AnyFunction;
    array: any[];
    'array-like': ArrayLike<any>;
    any: any;
    Set: Set<any>;
    object: object;
    Error: Error;
    Buffer: Buffer;
    binaryArray: TypedArray;
    BigInt: BigInt;
    number: number;
    string: string;
    boolean: boolean;
    assertion: any;
    NaN: number;
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
