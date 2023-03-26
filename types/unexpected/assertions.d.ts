/// <reference types="node"/>

import { Flag, UnexpectedKind } from './unexpected';

type IndefiniteArticle = 'a' | 'an';
type Empty = '' | ' ';

type Trimmed<S extends string> = S extends ` ${infer Rest}` ? never : S extends `${infer Pre} ` ? never : S;

type Trim<S extends string> = S extends ` ${infer Rest}` ? Trim<Rest> : S extends `${infer Pre} ` ? Trim<Pre> : S;

export type Choice<S extends string> = S extends `${infer A}|${infer Rest}` ? Trim<A> | Choice<Rest> : Trim<S>;

type ParsedChoice<Value extends string, Rest extends string = Empty, Pre extends string = Empty> = Pre extends Empty
    ? [Choice<Value>, ...ParsedDeclaration<Rest>]
    : [...ParsedDeclaration<Pre>, Choice<Value>, ...ParsedDeclaration<Rest>];

type ParsedSubject<Value extends UnexpectedKind, Rest extends string> = [FromKind<Value>, ...ParsedDeclaration<Rest>];

export type ParsedFlag<Value extends Flag, Rest extends string, Pre extends string = Empty> = Pre extends Empty
    ? [Value, ...ParsedDeclaration<Rest>] | ParsedDeclaration<Rest>
    : [...ParsedDeclaration<Pre>, Value, ...ParsedDeclaration<Rest>] | [Pre, ...ParsedDeclaration<Rest>];



type ParsedType<Value extends UnexpectedKind, Pre extends string = Empty> = [...ParsedDeclaration<Pre>, FromKind<Value>];

export type ParsedDeclaration<S extends string> = S extends `<${infer Value extends UnexpectedKind}>${infer Rest}`
    ? ParsedSubject<Value, Trim<Rest>>
    : S extends `${infer Pre}(${infer Value})${infer Rest}`
    ? ParsedChoice<Trim<Value>, Trim<Rest>, Trim<Pre>>
    : S extends `${infer Pre}[${infer Value extends Flag}]${infer Rest}`
    ? ParsedFlag<Value, Trim<Rest>, Trim<Pre>>
    : S extends `${infer Pre}(${infer Value})${infer Rest}`
    ? ParsedChoice<Trim<Value>, Trim<Rest>, Trim<Pre>>
    : S extends `${infer Pre}<${infer Value extends UnexpectedKind}>`
    ? ParsedType<Value, Trim<Pre>>
    : S extends Empty ? [] : [S];

type ArrayToTuple<T extends ReadonlyArray<string>, V = string> = keyof {
    [K in T extends ReadonlyArray<infer U> ? U : never]: V;
};

// export type AssertionParams<Subj, Rest> = ParsedDeclaration<S>

// <object> to be (a map|a hash|an object) whose values [exhaustively] satisfy <assertion>
// <any> [not] to be (a|an) <type>
// <any> [not] to be (ok|truthy) <string>
// <string> to be (the empty|an empty|a non-empty) string
// <object> to have (enumerable|unenumerable|configurable|unconfigurable|writable|unwritable|readonly) property <string|Symbol>
// <object> [not] to [only] have [own] properties <array>
// <BigInt> [not] to be positive

type DeclarationTexts = [
    '<object> to be (a map|a hash|an object) whose values [exhaustively] satisfy <assertion>',
    '<any> [not] to be (ok|truthy) <string>',
    '<any|object> to [exhaustively] satisfy [assertion] <expect.it>',
    '<any> [not] to be (a|an) <type>',
    '<any> to be ok'
];

type DeclarationArgs<S extends string, D extends ParsedDeclaration<S>> = D extends [infer Subject, infer Rest] ? [Subject, Rest] : D extends [infer Subject, ...infer Rest] ? ...idk;

export type Declaration = ParsedDeclaration<DeclarationTexts[number]>;

export interface ExpectIt {
    (...args: any[]): any; 
    _expectIt: any
}

type KindToType = {
    function: (...args: any[]) => any;
    'array-like': ArrayLike<any>;
    any: any;
    Set: Set<any>;
    object: object;
    map: KindToType['object'];
    hash: KindToType['object'];
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

type FromKind<K extends UnexpectedKind> = KindToType[K];

// export interface Declaration<
//     Subject extends Choice<UnexpectedKind>,
//     Desc extends string,
//     OneOf extends Choice<string> | void = void,
//     F extends Flag | void = void,
//     Actual extends UnexpectedKind | void = void,
// > {
//     subject: Subject;
//     flag?: F;
//     oneOf?: OneOf;
//     type?: Actual;
//     desc: Desc;
// }

// export type DeclarationTemplate<Subject extends Choice<UnexpectedType>, Desc extends string, F extends Flag | void = void, Actual extends UnexpectedType|void = void> = `<${Subject}> ${F extends Flag ? `[${F}] ` : ''}${Choice<Desc>}${Actual extends UnexpectedType
//     ? ` <${Actual}>`
//     : ''}>`;
