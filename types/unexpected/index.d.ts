// Type definitions for unexpected 13.0
// Project: https://github.com/unexpectedjs/unexpected#readme
// Definitions by: Christopher Hiller <https://github.com/boneskull>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { AnyFunction, Desc, UnexpectedTypeDef } from './unexpected';

// boolean handlers
declare function expect(subject: boolean, desc: Desc<'[not] to be (true|false)'>): void;

// string handlers
declare function expect(subject: string, desc: Desc<'to be (the empty|an empty|non-empty) string'>): void;
declare function expect(subject: string, desc: Desc<'[not] to match'>, regexp: RegExp): void;
declare function expect(subject: string, desc: Desc<'[not] to contain'>, expected: string, ...strings: string[]): void;
declare function expect(subject: string, desc: Desc<'[not] to (begin|start) with'>, expected: string): void;
declare function expect(subject: string, desc: Desc<'[not] to end with'>, expected: string): void;

// string or array handlers
declare function expect(subject: string | ArrayLike<any>, desc: Desc<'[not] to have length'>, expected: number): void;
declare function expect(subject: string | ArrayLike<any> | object | Set<any>, desc: Desc<'[not] to be empty'>): void;
declare function expect(subject: string | ArrayLike<any> | object, desc: Desc<'to be non-empty'>): void;

// number handlers
declare function expect(subject: number, desc: Desc<'[not] to be close to'>, expected: number, delta?: number): void;
declare function expect(subject: number, desc: Desc<'[not] to be finite'>): void;
declare function expect(subject: number, desc: Desc<'[not] to be infinite'>): void;

// number, bigint, or string handlers
declare function expect<T extends number | BigInt | string>(
    subject: T,
    desc: Desc<'[not] to be within'>,
    start: T,
    end: T,
): void;
declare function expect<T extends number | BigInt | string>(
    subject: T,
    desc: Desc<'[not] to be (less than|below|less than or equal to|greater than|above|greater than or equal to)'>,
    expected: T,
): void;
declare function expect<T extends number | BigInt>(subject: T, desc: Desc<'[not] to be (positive|negative)'>): void;

// array handlers
declare function expect(subject: ArrayLike<any>, desc: Desc<'[not] to be (the empty|an empty|non-empty)'>): void;
declare function expect(subject: ArrayLike<any>, desc: Desc<'to be (the empty|an empty|non-empty) array'>): void;
declare function expect<T extends ArrayLike<U>, U>(
    subject: T,
    desc: Desc<'to [only] contain'>,
    expected: U,
    ...values: U[]
): void;
declare function expect(subject: ArrayLike<any>, desc: Desc<'[not] to contain'>, expected: any, ...values: any[]): void;
declare function expect(
    subject: ArrayLike<any>,
    desc: Desc<'to have items [exhaustively] satisfying'>,
    expected: any,
): void;
declare function expect(
    subject: ArrayLike<any>,
    desc: Desc<'to be an array whose items [exhaustively] satisfy'>,
    expected: any,
): void;
declare function expect(
    subject: ArrayLike<any>,
    desc: Desc<'[not] to have an item [exhaustively] satisfying'>,
    expected: any,
): void;
declare function expect(
    subject: ArrayLike<any>,
    desc: Desc<'[when] passed as parameters to [async]'>,
    expected: AnyFunction,
    assertion: any,
    ...assertions: any[]
): void;
declare function expect(
    subject: ArrayLike<any>,
    desc: Desc<'[when] passed as parameters to [constructor]'>,
    expected: AnyFunction,
    assertion: any,
    ...assertions: any[]
): void;
declare function expect(
    subject: ArrayLike<any>,
    desc: Desc<'[when] passed as parameter to [constructor]'>,
    expected: AnyFunction,
    assertion: any,
    ...assertions: any[]
): void;
declare function expect(
    subject: ArrayLike<any>,
    desc: Desc<'[when] sorted [numerically]'>,
    assertion: any,
    ...assertions: any[]
): void;
declare function expect(
    subject: ArrayLike<any>,
    desc: Desc<'[when] sorted by'>,
    expected: AnyFunction,
    assertion: any,
    ...assertions: any[]
): void;

// function handlers
declare function expect(subject: AnyFunction, desc: Desc<'to error [with]'>, expected: any): void;
declare function expect(subject: AnyFunction, desc: Desc<'not to (error|throw)'>, expected: any): void;
declare function expect(
    subject: AnyFunction,
    desc: Desc<'to (throw|throw exception|throw error)'>,
    expected?: any,
): void;
declare function expect(subject: AnyFunction, desc: Desc<'to throw (a|an)'>, expected: (...args: any) => any): void;
declare function expect(subject: AnyFunction, desc: Desc<'to have arity'>, expected: number): void;
declare function expect(
    subject: AnyFunction,
    desc: Desc<'[when] called with'>,
    expected: ArrayLike<any>,
    assertion: any,
    ...assertions: any[]
): void;
declare function expect(subject: AnyFunction, desc: Desc<'[when] called'>, assertion: any, ...assertions: any[]): void;

declare function expect(subject: AnyFunction, desc: Desc<'to call the callback'>): Promise<void>;
declare function expect(subject: AnyFunction, desc: Desc<'to call the callback without error'>): Promise<void>;
declare function expect(subject: AnyFunction, desc: Desc<'to call the callback with error'>): Promise<void>;
declare function expect(
    subject: AnyFunction,
    desc: Desc<'to call the callback with error'>,
    expected: any,
): Promise<void>;

// Error handlers
declare function expect(subject: Error, desc: Desc<'to have message'>, expected: any): void;
declare function expect(subject: Error, desc: Desc<'to [exhaustively] satisfy'>, expected: Error | object): void;
declare function expect(
    subject: Buffer,
    desc: Desc<'[when] decoded as'>,
    expected: string,
    assertion: any,
    ...assertions: any[]
): void;

// Set handlers
declare function expect(subject: Set<any>, desc: Desc<'[not] to have size'>, expected: number): void;
declare function expect<T extends Set<U>, U>(
    subject: T,
    desc: Desc<'[not] to contain'>,
    expected: U,
    ...moreExpected: U[]
): void;
declare function expect(subject: Set<any>, desc: Desc<'to have items [exhaustively] satisfying'>, expected: any): void;
declare function expect(
    subject: Set<any>,
    desc: Desc<'to have an item [exhaustively] satisfying'>,
    expected: any,
): void;
declare function expect<T extends Set<any>, U extends T>(
    subject: T,
    desc: Desc<'to [exhaustively] satisfy'>,
    expected: U,
): void;

// Promise handlers
declare function expect(subject: Promise<any> | AnyFunction, desc: Desc<'to be rejected'>): Promise<void>;
declare function expect(
    subject: Promise<any> | AnyFunction,
    desc: Desc<'to be rejected with'>,
    expected: any,
): Promise<void>;
declare function expect(
    subject: Promise<any> | AnyFunction,
    desc: Desc<'to be rejected with error [exhaustively] satisfying'>,
    expected: any,
): Promise<void>;
declare function expect(subject: Promise<any> | AnyFunction, desc: Desc<'to be fulfilled'>): Promise<void>;
declare function expect(
    subject: Promise<any> | AnyFunction,
    desc: Desc<'to be fulfilled with'>,
    expected: any,
): Promise<void>;
declare function expect(
    subject: Promise<any> | AnyFunction,
    desc: Desc<'to be fulfilled with value [exhaustively] satisfying'>,
    expected: any,
): Promise<void>;
declare function expect(
    subject: Promise<any> | AnyFunction,
    desc: Desc<'when rejected'>,
    assertion: any,
): Promise<void>;
declare function expect(
    subject: Promise<any> | AnyFunction,
    desc: Desc<'when fulfilled'>,
    assertion: any,
): Promise<void>;

// object handlers
declare function expect<T extends object, U extends keyof T>(
    subject: T,
    desc: Desc<'to have [own] property'>,
    expected: U,
    value: T[U],
): void;
declare function expect(
    subject: object,
    desc: Desc<'to be (a map|a hash|an object) whose values [exhaustively] satisfy'>,
    expected: any,
): void;
declare function expect(
    subject: object,
    desc: Desc<'to have (enumerable|unenumerable|configurable|unconfigurable|writable|unwritable|readonly) property'>,
    expected: PropertyKey,
): void;
declare function expect(subject: object, desc: Desc<'[not] to have property'>, expected: PropertyKey): void;
declare function expect(subject: object, desc: Desc<'[not] to have own property'>, expected: PropertyKey): void;
declare function expect(
    subject: object,
    desc: Desc<'[not] to [only] have [own] properties'>,
    expected: PropertyKey[],
): void;
declare function expect(subject: object, desc: Desc<'[not] to have [own] properties'>, expected: object): void;
declare function expect(
    subject: object,
    desc: Desc<'to [not] [only] have keys'>,
    expected: PropertyKey,
    ...keys: PropertyKey[]
): void;
declare function expect(
    subject: object,
    desc: Desc<'not to have keys'>,
    expected: PropertyKey,
    ...keys: PropertyKey[]
): void;
declare function expect(subject: object, desc: Desc<'not to have key'>, expected: PropertyKey): void;
declare function expect(subject: object, desc: Desc<'to [not] [only] have key'>, expected: PropertyKey): void;
declare function expect(subject: object, desc: Desc<'to satisfy'>, expected: AnyFunction): void;
declare function expect(subject: object, desc: Desc<'to have values [exhaustively] satisfying'>, expected: any): void;
declare function expect(subject: object, desc: Desc<'to have keys satisfying'>, expected: any): void;
declare function expect(
    subject: object,
    desc: Desc<'to be (a map|a hash|an object) whose (keys|properties) satisfy'>,
    expected: any,
): void;
declare function expect(
    subject: object,
    desc: Desc<'[not] to have a value [exhaustively] satisfying'>,
    expected: any,
): void;
declare function expect(subject: object, desc: Desc<'to be canonical'>): void;

// "any" handlers
declare function expect(subject: any, desc: Desc<'[not] to be one of'>, expected: any[]): void;
declare function expect(
    subject: any,
    desc: Desc<'[not] to be (a|an)'>,
    expected: AnyFunction | UnexpectedTypeDef<any>,
): void;
declare function expect(subject: any, desc: Desc<'[not] to equal'>, expected: any): void;
declare function expect(subject: any, desc: Desc<'[not] to be (ok|truthy)'>, message?: string): void;
declare function expect(subject: any, desc: Desc<'[not] to be'>, expected: any): void;
declare function expect(subject: any, desc: Desc<'[not] to be falsy'>, message?: string): void;
declare function expect(subject: any, desc: Desc<'[not] to be (null|undefined|defined|NaN)'>): void;
declare function expect(subject: any, desc: Desc<'[not] to be an (object|array)'>): void;
declare function expect(subject: any, desc: Desc<`[not] to be (a|an) <type>`>): void;
declare function expect(subject: any, desc: Desc<'[not] to [exhaustively] satisfy [assertion]'>, expected: any): void;
declare function expect(subject: any, desc: Desc<'to [exhaustively] satisfy'>, expected: any): void;
declare function expect(
    subject: any,
    desc: Desc<'[when] passed as parameter to [async]'>,
    expected: AnyFunction,
    assertion: any,
    ...assertions: any[]
): void;

export default expect;

export as namespace unexpected;
