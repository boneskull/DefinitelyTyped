// Type definitions for unexpected 13.0
// Project: https://github.com/unexpectedjs/unexpected#readme
// Definitions by: Christopher Hiller <https://github.com/boneskull>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import * as _ from 'ts-toolbelt';
import * as Promise from 'bluebird';
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

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
type LastOf<T> = UnionToIntersection<T extends any ? () => T : never> extends () => infer R ? R : never;

// TS4.0+
type Push<T extends any[], V> = [...T, V];

// TS4.1+
type TuplifyUnion<T, L = LastOf<T>, N = [T] extends [never] ? true : false> = true extends N
    ? []
    : Push<TuplifyUnion<Exclude<T, L>>, L>;

type ObjValueTuple<T, KS extends any[] = TuplifyUnion<keyof T>, R extends any[] = []> = KS extends [
    infer K,
    ...infer KT,
]
    ? ObjValueTuple<T, KT, [...R, T[K & keyof T]]>
    : R;

type NestedPromiseTuple<T> = [
    T extends Promise<any>
        ? T
        : T extends readonly any[]
        ? { [K in keyof T]: [...NestedPromiseTuple<T[K]>] }
        : T extends object
        ? [...NestedPromiseTuple<ObjValueTuple<T>>]
        : [],
];

export type FindPromises<T> = _.List.Flatten<NestedPromiseTuple<T>>;
