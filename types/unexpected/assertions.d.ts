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

type Voidable<S extends string, T=S> = S extends '' ? void : T;

interface ParsedChoice<Value extends string, Rest extends string, Pre extends string> {
    kind: 'choice';
    pre: Voidable<Pre>
    value: Choice<Value>;
    next?: Voidable<Rest, ParsedDeclaration<Rest>>
}

interface ParsedSubject<Value, Rest extends string> {
    kind: 'subject';
    value: Value;
    next?: Voidable<Rest, ParsedDeclaration<Rest>>
}

interface ParsedFlag<Value extends Flag, Pre extends string, Rest extends string> {
    kind: 'flag';
    pre: Voidable<Pre>;
    value: Value;
    next?: Voidable<Rest, ParsedDeclaration<Rest>>;
}

interface ParsedType<Value extends UnexpectedType, Pre extends string> {
    kind: 'type';
    pre: Voidable<Pre>;
    value: TypeMap[Value];
}

export type ParsedDeclaration<S extends string> = S extends `<${Choice<
    infer Value extends UnexpectedType
>}> ${infer Rest}`
    ? ParsedSubject<TypeMap[Value], Rest>
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
      [K in (T extends ReadonlyArray<infer U> ? U : never)]: V
  };

export type AssertionParams<S extends string> = ParsedDeclaration<S> extends ParsedSubject<infer Value, infer SubjNext> ? [Value, ParsedDeclaration<S>['next']] : never;

type TypeMap = {
  'function': (...args: any[]) => any;
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
  assertion: {text: string},
  NaN: typeof NaN;
  'expect.it': {(...args: any[]): any, _expectIt: any};
  Promise: PromiseLike<any>;
  wrapperObject: object;
  undefined: undefined;
  null: null
}

export interface Declaration<
    Subject extends Choice<UnexpectedType>,
    Desc extends string,
    OneOf extends Choice<string> | void = void,
    F extends Flag | void = void,
    Actual extends UnexpectedType | void = void,
> {
    subject: Subject;
    flag?: F;
    oneOf?: OneOf;
    type?: Actual;
    desc: Desc;
}
// > = `<${Subject}> ${F extends Flag ? `[${F}] ` : ''}${Choice<Desc>}${Actual extends UnexpectedType
//     ? ` <${Actual}>`
//     : ''}>`;
