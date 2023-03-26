// Type definitions for unexpected 13.0
// Project: https://github.com/unexpectedjs/unexpected#readme
// Definitions by: Christopher Hiller <https://github.com/boneskull>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ParsedDeclaration } from "./assertions";

export interface expect {
    <T extends string, P extends ParsedDeclaration<T>>(...args: P): Promise<void>;

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
    | 'null'    ;

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
 