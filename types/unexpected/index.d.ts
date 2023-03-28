// Type definitions for unexpected 13.0
// Project: https://github.com/unexpectedjs/unexpected#readme
// Definitions by: Christopher Hiller <https://github.com/boneskull>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { AnyFunction, Desc, ExpectIt, TypedArray, UnexpectedTypeDef } from './unexpected';

declare function expect<T extends object>(
    subject: T,
    desc: Desc<'to be (a map|a hash|an object) whose values [exhaustively] satisfy'>,
    expected: any,
): void;
declare function expect<T>(subject: T, desc: Desc<'[not] to be (ok|truthy)'>, message?: string): void;
declare function expect<T>(subject: T, desc: Desc<`[not] to be (a|an) <type>`>): void;
declare function expect<T, U>(
    subject: T,
    desc: Desc<'[not] to be (a|an)'>,
    expected: AnyFunction | UnexpectedTypeDef<U>,
): void;
declare function expect<T>(subject: T, desc: Desc<'[not] to be'>, expected: any): void;
declare function expect<T extends boolean>(subject: T, desc: Desc<'[not] to be (true|false)'>): void;
declare function expect<T>(subject: T, desc: Desc<'[not] to be falsy'>, message?: string): void;
declare function expect<T>(subject: T, desc: Desc<'[not] to be (null|undefined|defined|NaN)'>): void;
declare function expect<T, U extends T[]>(subject: T, desc: Desc<'[not] to be one of'>, expected: U): void;
declare function expect<T>(subject: T, desc: Desc<'[not] to be a (object|array)'>): void;
declare function expect<T>(
    subject: T,
    desc: Desc<'[not] to be a (boolean|number|string|function|regexp|regex|regular expression|date)'>,
): void;
declare function expect<T extends ArrayLike<any>>(
    subject: T,
    desc: Desc<'[not] to be (the empty|an empty|non-empty)'>,
): void;
declare function expect<T extends ArrayLike<any>>(
    subject: T,
    desc: Desc<'to be (the empty|an empty|non-empty) array'>,
): void;
declare function expect<T extends string>(subject: T, desc: Desc<'to be (the empty|an empty|non-empty) string'>): void;
declare function expect<T extends string>(subject: T, desc: Desc<'[not] to match'>, regexp: RegExp): void;
declare function expect<T extends object>(
    subject: T,
    desc: Desc<'to have (enumerable|unenumerable|configurable|unconfigurable|writable|unwritable|readonly) property'>,
    expected: PropertyKey,
): void;
declare function expect<T extends object>(
    subject: T,
    desc: Desc<'[not] to have property'>,
    expected: PropertyKey,
): void;
declare function expect<T extends object, U extends keyof T>(
    subject: T,
    desc: Desc<'to have [own] property'>,
    expected: U,
    value: T[U],
): void;
declare function expect<T extends object>(
    subject: T,
    desc: Desc<'[not] to have own property'>,
    expected: PropertyKey,
): void;
declare function expect<T extends number>(
    subject: T,
    desc: Desc<'[not] to be close to'>,
    expected: number,
    delta?: number,
): void;
declare function expect<T extends object>(
    subject: T,
    desc: Desc<'[not] to [only] have [own] properties'>,
    expected: PropertyKey[],
): void;
declare function expect<T extends object, U extends object>(
    subject: T,
    desc: Desc<'[not] to have [own] properties'>,
    expected: U,
): void;
declare function expect<T extends string | ArrayLike<any>>(
    subject: T,
    desc: Desc<'[not] to have length'>,
    expected: number,
): void;
declare function expect<T extends string | ArrayLike<any>>(subject: T, desc: Desc<'[not] to be empty'>): void;
declare function expect<T extends string | ArrayLike<any> | object>(subject: T, desc: Desc<'to be non-empty'>): void;
declare function expect<T extends object>(
    subject: T,
    desc: Desc<'to [not] [only] have keys'>,
    expected: PropertyKey,
    ...keys: PropertyKey[]
): void;
declare function expect<T extends object>(subject: T, desc: Desc<'[not] to be empty'>): void;
declare function expect<T extends object>(
    subject: T,
    desc: Desc<'not to have keys'>,
    expected: PropertyKey,
    ...keys: PropertyKey[]
): void;
declare function expect<T extends object>(subject: T, desc: Desc<'not to have key'>, expected: PropertyKey): void;
declare function expect<T extends object>(
    subject: T,
    desc: Desc<'to [not] [only] have key'>,
    expected: PropertyKey,
): void;
declare function expect<T extends string>(
    subject: T,
    desc: Desc<'[not] to contain'>,
    expected: string,
    ...strings: string[]
): void;
declare function expect<T extends ArrayLike<any>>(
    subject: T,
    desc: Desc<'to [only] contain'>,
    expected: any,
    ...values: any[]
): void;
// '<array-like> [not] to contain <any+>'
declare function expect<T extends ArrayLike<any>>(
    subject: T,
    desc: Desc<'[not] to contain'>,
    expected: any,
    ...values: any[]
): void;
declare function expect<T extends string>(
    subject: T,
    desc: Desc<'[not] to (begin|start) with'>,
    expected: string,
): void;
declare function expect<T extends string>(subject: T, desc: Desc<'[not] to end with'>, expected: string): void;
declare function expect<T extends number>(subject: T, desc: Desc<'[not] to be finite'>): void;
declare function expect<T extends number>(subject: T, desc: Desc<'[not] to be infinite'>): void;
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
declare function expect<T>(subject: T, desc: Desc<'[not] to equal'>, expected: T): void;
declare function expect<T extends AnyFunction>(subject: T, desc: Desc<'to error [with]'>, expected: any): void;
declare function expect<T extends AnyFunction>(subject: T, desc: Desc<'not to (error|throw)'>, expected: any): void;
declare function expect<T extends AnyFunction>(
    subject: T,
    desc: Desc<'to (throw|throw exception|throw error)'>,
    expected?: any,
): void;
declare function expect<T extends object>(subject: T, desc: Desc<'to satisfy'>, expected: (...args: any) => any): void;

declare function expect<T extends AnyFunction>(
    subject: T,
    desc: Desc<'to throw (a|an)'>,
    expected: (...args: any) => any,
): void;
declare function expect<T extends AnyFunction>(subject: T, desc: Desc<'to have arity'>, expected: number): void;
declare function expect<T extends object>(
    subject: T,
    desc: Desc<'to have values [exhaustively] satisfying'>,
    expected: any,
): void;
declare function expect<T extends ArrayLike<any>>(
    subject: T,
    desc: Desc<'to have items [exhaustively] satisfying'>,
    expected: any,
): void;
declare function expect<T extends ArrayLike<any>>(
    subject: T,
    desc: Desc<'to be an array whose items [exhaustively] satisfy'>,
    expected: any,
): void;
declare function expect<T extends object>(subject: T, desc: Desc<'to have keys satisfying'>, expected: any): void;
declare function expect<T extends object>(
    subject: T,
    desc: Desc<'to be (a map|a hash|an object) whose (keys|properties) satisfy'>,
    expected: any,
): void;
declare function expect<T extends object>(
    subject: T,
    desc: Desc<'[not] to have a value [exhaustively] satisfying'>,
    expected: any,
): void;
declare function expect<T extends ArrayLike<any>>(
    subject: T,
    desc: Desc<'[not] to have an item [exhaustively] satisfying'>,
    expected: any,
): void;
declare function expect<T extends object>(subject: T, desc: Desc<'to be canonical'>): void;
declare function expect<T extends Error>(subject: T, desc: Desc<'to have message'>, expected: any): void;
declare function expect<T extends Error | object>(
    subject: T,
    desc: Desc<'to [exhaustively] satisfy'>,
    expected: Error | object,
): void;
declare function expect<T>(subject: T, desc: Desc<'to [exhaustively] satisfy'>, expected: any): void;
declare function expect<T extends Buffer>(
    subject: T,
    desc: Desc<'[when] decoded as'>,
    expected: string,
    assertion: any,
    ...assertions: any[]
): void;
declare function expect<T>(subject: T, desc: Desc<'[not] to [exhaustively] satisfy [assertion]'>, expected: any): void;
declare function expect<T extends AnyFunction>(
    subject: T,
    desc: Desc<'[when] called with'>,
    expected: ArrayLike<any>,
    assertion: any,
    ...assertions: any[]
): void;
declare function expect<T extends AnyFunction>(
    subject: T,
    desc: Desc<'[when] called'>,
    assertion: any,
    ...assertions: any[]
): void;
declare function expect<T extends ArrayLike<any>>(
    subject: T,
    desc: Desc<'[when] passed as parameters to [async]'>,
    expected: AnyFunction,
    assertion: any,
    ...assertions: any[]
): void;
declare function expect<T extends ArrayLike<any>>(
    subject: T,
    desc: Desc<'[when] passed as parameters to [constructor]'>,
    expected: AnyFunction,
    assertion: any,
    ...assertions: any[]
): void;
declare function expect<T>(
    subject: T,
    desc: Desc<'[when] passed as parameter to [constructor]'>,
    expected: AnyFunction,
    assertion: any,
    ...assertions: any[]
): void;
declare function expect<T>(
    subject: T,
    desc: Desc<'[when] passed as parameter to [async]'>,
    expected: AnyFunction,
    assertion: any,
    ...assertions: any[]
): void;
declare function expect<T extends ArrayLike<any>>(
    subject: T,
    desc: Desc<'[when] sorted [numerically]'>,
    assertion: any,
    ...assertions: any[]
): void;
declare function expect<T extends ArrayLike<any>>(
    subject: T,
    desc: Desc<'[when] sorted by'>,
    expected: AnyFunction,
    assertion: any,
    ...assertions: any[]
): void;
declare function expect<T extends Promise<any> | AnyFunction>(subject: T, desc: Desc<'to be rejected'>): Promise<void>;
declare function expect<T extends Promise<any> | AnyFunction>(
    subject: T,
    desc: Desc<'to be rejected with'>,
    expected: any,
): Promise<void>;
declare function expect<T extends Promise<any> | AnyFunction>(
    subject: T,
    desc: Desc<'to be rejected with error [exhaustively] satisfying'>,
    expected: any,
): Promise<void>;
declare function expect<T extends Promise<any> | AnyFunction>(subject: T, desc: Desc<'to be fulfilled'>): Promise<void>;
declare function expect<T extends Promise<any> | AnyFunction>(
    subject: T,
    desc: Desc<'to be fulfilled with'>,
    expected: any,
): Promise<void>;
declare function expect<T extends Promise<any> | AnyFunction>(
    subject: T,
    desc: Desc<'to be fulfilled with value [exhaustively] satisfying'>,
    expected: any,
): Promise<void>;
declare function expect<T extends Promise<any> | AnyFunction>(
    subject: T,
    desc: Desc<'when rejected'>,
    assertion: any,
): Promise<void>;
declare function expect<T extends Promise<any> | AnyFunction>(
    subject: T,
    desc: Desc<'when fulfilled'>,
    assertion: any,
): Promise<void>;
declare function expect<T extends AnyFunction>(subject: T, desc: Desc<'to call the callback'>): Promise<void>;
declare function expect<T extends AnyFunction>(
    subject: T,
    desc: Desc<'to call the callback without error'>,
): Promise<void>;
declare function expect<T extends AnyFunction>(
    subject: T,
    desc: Desc<'to call the callback with error'>,
): Promise<void>;
declare function expect<T extends AnyFunction>(
    subject: T,
    desc: Desc<'to call the callback with error'>,
    expected: any,
): Promise<void>;
declare function expect<T extends Set<U>, U>(
    subject: T,
    desc: Desc<'[not] to contain'>,
    expected: U,
    ...moreExpected: U[]
): void;
declare function expect<T extends Set<any>>(subject: T, desc: Desc<'[not] to be empty'>): void;
declare function expect<T extends Set<any>>(
    subject: T,
    desc: Desc<'to have items [exhaustively] satisfying'>,
    expected: any,
): void;
declare function expect<T extends Set<any>>(
    subject: T,
    desc: Desc<'to have an item [exhaustively] satisfying'>,
    expected: any,
): void;
declare function expect<T extends Set<any>, U extends T>(
    subject: T,
    desc: Desc<'to [exhaustively] satisfy'>,
    expected: U,
): void;
declare function expect<T extends Set<any>>(subject: T, desc: Desc<'[not] to have size'>, expected: number): void;




export default expect;

export as namespace unexpected;
