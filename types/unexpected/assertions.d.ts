/// <reference types="node"/>

import { Flag, UnexpectedType } from './unexpected';

export type Choice<S extends string = string> = S extends `${infer A}|${infer Rest}` ? A | Choice<Rest> : S;
// <object> to be (a map|a hash|an object) whose values [exhaustively] satisfy <assertion>
// <any> [not] to be (a|an) <type>
// <any> [not] to be (ok|truthy) <string>
// <string> to be (the empty|an empty|a non-empty) string
// <object> to have (enumerable|unenumerable|configurable|unconfigurable|writable|unwritable|readonly) property <string|Symbol>
// <object> [not] to [only] have [own] properties <array>
// <BigInt> [not] to be positive

type Voidable<S extends string, T = S> = S extends '' ? void : T;

interface ParsedChoice<Value extends string, Rest extends string = '', Pre extends string = ''> {
    kind: 'choice';
    pre: Voidable<Pre>;
    value: Choice<Value>;
    next?: Voidable<Rest, ParsedDeclaration<Rest>>;
}

interface ParsedSubject<Value extends UnexpectedType, Rest extends string = ''> {
    kind: 'subject';
    value: UnexpectedTypeToType[Value];
    next?: Voidable<Rest, ParsedDeclaration<Rest>>;
}

interface ParsedFlag<Value extends Flag, Pre extends string, Rest extends string = ''> {
    kind: 'flag';
    pre: Voidable<Pre>;
    value: Value;
    next?: Voidable<Rest, ParsedDeclaration<Rest>>;
}

interface ParsedType<Value extends UnexpectedType, Pre extends string = ''> {
    kind: 'type';
    pre: Voidable<Pre>;
    value: UnexpectedTypeToType[Value];
}

export type ParsedDeclaration<S extends string> = S extends `<${Choice<
    infer Value extends UnexpectedType
>}> ${infer Rest}`
    ? ParsedSubject<Value, Rest>
    : S extends `${infer Pre}(${infer Value})${infer Rest}`
    ? ParsedChoice<Value, Pre, Rest>
    : S extends `${infer Pre}[${infer Value extends Flag}] ${infer Rest}`
    ? ParsedFlag<Value, Pre, Rest>
    : S extends `${infer Pre}(${infer Value}) ${infer Rest}`
    ? ParsedChoice<Value, Pre, Rest>
    : S extends `${infer Pre}<${infer Value extends UnexpectedType}>`
    ? ParsedType<Value, Pre>
    : never;

type ArrayToTuple<T extends ReadonlyArray<string>, V = string> = keyof {
    [K in T extends ReadonlyArray<infer U> ? U : never]: V;
};

// export type AssertionParams<Subj, Rest> = ParsedDeclaration<S>

export type DeclarationText = Readonly<
    [
        '<object> to be (a map|a hash|an object) whose values [exhaustively] satisfy <assertion>',
        '<any> [not] to be (ok|truthy) <string>',
        '<any|object> to [exhaustively] satisfy [assertion] <expect.it>'
    ]
>;


export type DeclarationSubject<S extends string> = S extends `<${Choice<
    infer Value extends UnexpectedType
>}>${string}`
    ? Extract<Value, UnexpectedTypeToType[Value]> : never;

type Butts = DeclarationSubject<'string|number'>
// export type DeclarationsForType<T> = T extends ParsedDeclarations['value'] ? 
//     UnexpectedTypeToType[ParsedDeclarations['value']]
// >;

type UnexpectedTypeToType = Readonly<{
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
    assertion: { text: string };
    NaN: typeof NaN;
    'expect.it': { (...args: any[]): any; _expectIt: any };
    Promise: PromiseLike<any>;
    wrapperObject: object;
    undefined: undefined;
    null: null;
}>;

type ValueOf<T> = T[keyof T];


// export interface Declaration<
//     Subject extends Choice<UnexpectedType>,
//     Desc extends string,
//     OneOf extends Choice<string> | void = void,
//     F extends Flag | void = void,
//     Actual extends UnexpectedType | void = void,
// > {
//     subject: Subject;
//     flag?: F;
//     oneOf?: OneOf;
//     type?: Actual;
//     desc: Desc;
// }
// > = `<${Subject}> ${F extends Flag ? `[${F}] ` : ''}${Choice<Desc>}${Actual extends UnexpectedType
//     ? ` <${Actual}>`
//     : ''}>`;
