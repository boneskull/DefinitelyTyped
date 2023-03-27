// Type definitions for unexpected 13.0
// Project: https://github.com/unexpectedjs/unexpected#readme
// Definitions by: Christopher Hiller <https://github.com/boneskull>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
    addType: <T>(typeDefinition: TypeDefinition<T>) => expect;

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
    | 'array-like'
    | 'any'
    | 'Set'
    | 'object'
    | 'map'
    | 'hash'
    | 'Error'
    | 'Buffer'
    | 'binaryArray'
    | 'BigInt'
    | 'number'
    | 'string'
    | 'boolean'
    | 'assertion'
    | 'NaN'
    | 'expect.it'
    | 'Promise'
    | 'wrapperObject'
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

export interface TypeDefinition<T> {
    name: string;
    identify(value: any): value is T;
    base?: string;
    equal?(a: T, b: T, equal: (a: any, b: any) => boolean): boolean;
    inspect?(value: T, depth: number, output: any, inspect: (value: any, depth: number) => any): void;
}

type Trim<S extends string> = S extends ` ${infer Rest}` ? Trim<Rest> : S extends `${infer Pre} ` ? Trim<Pre> : S;

type Desc<S extends string> = S extends `${infer A}  ${infer B}` ? Desc<`${A} ${B}`> : Trim<S>;

type Maybe<S extends string> = `${S | Empty}`;

type Choice<T extends readonly string[]> = T extends readonly [
    infer Head extends string,
    ...infer Tail extends readonly string[],
]
    ? Head | Choice<Tail>
    : never;

type Join<T extends readonly string[], D extends string = ' '> = T extends readonly [
    infer Head extends string,
    ...infer Tail extends readonly string[],
]
    ? Desc<`${Head}${D}${Join<Tail>}`>
    : T extends readonly [infer Head extends string]
    ? Desc<Head>
    : '';

type Empty = '';
type DTrue = 'true';
type DFalse = 'false';
type DFalsy = 'falsy';
type DEmpty = 'empty';
type DNull = 'null';
type DUndefined = 'undefined';
type DDefined = 'defined';
type DOneOf = 'one of';
type DNaN = 'NaN';

type DIsOk = `is ${DOk}`;
type DToBe = 'to be';
type DExhaustively = 'exhaustively';
type DSatisfy = 'satisfy';
type DWhoseValues = 'whose values';

type DAMap = `${DA} map`;
type DAHash = `${DA} hash`;
type DAnObject = `${DAn} object`;
type DOk = 'ok';
type DTruthy = 'truthy';
type DA = 'a';
type DAn = 'an';
type DNot = 'not';

type DObject = 'object';
type DArray = 'array';
type DBoolean = 'boolean';
type DNumber = 'number';
type DString = 'string';
type DFunction = 'function';
type DRegExp = 'regexp' | 'regex' | 'regular expression';
type DDate = 'date';
type DTheEmpty = `the ${Empty}`;
type DNonEmpty = `${DA} non-${Empty}`;
type DAnEmpty = `${DAn} ${Empty}`;
type DToMatch = 'to match';
type DToHave = 'to have';
type DProperty = 'property';
type DOwn = 'own';
type DToHaveOwnProperty = `${DToHave} ${DOwn} ${DProperty}`;
type DPropAttr =
    | 'enumerable'
    | 'unenumerabloe'
    | 'configurable'
    | 'unconfigurable'
    | 'writable'
    | 'unwritable'
    | 'readonly';
type MaybeNot = Maybe<DNot>;
type MaybeExhaustively = Maybe<DExhaustively>;
