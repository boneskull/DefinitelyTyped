// Type definitions for unexpected 13.0
// Project: https://github.com/unexpectedjs/unexpected#readme
// Definitions by: Christopher Hiller <https://github.com/boneskull>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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

export type AnyFunction = (...args: any[]) => any;

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
