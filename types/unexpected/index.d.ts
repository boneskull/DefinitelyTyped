// Type definitions for unexpected 13.0
// Project: https://github.com/unexpectedjs/unexpected#readme
// Definitions by: Christopher Hiller <https://github.com/boneskull>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import * as Promise from 'bluebird';

import { AnyFunction, Desc, UnexpectedKind as _UnexpectedKind, UnexpectedTypeDef, FindPromises } from './internal';

// boolean handlers
declare function unexpected(subject: boolean, desc: Desc<'[not] to be (true|false)'>): void;

// string handlers
declare function unexpected(subject: string, desc: Desc<'to be (the empty|an empty|non-empty) string'>): void;
declare function unexpected(subject: string, desc: Desc<'[not] to match'>, regexp: RegExp): void;
declare function unexpected(
    subject: string,
    desc: Desc<'[not] to contain'>,
    expected: string,
    ...strings: string[]
): void;
declare function unexpected(subject: string, desc: Desc<'[not] to (begin|start) with'>, expected: string): void;
declare function unexpected(subject: string, desc: Desc<'[not] to end with'>, expected: string): void;

// string or array handlers
declare function unexpected(
    subject: string | ArrayLike<any>,
    desc: Desc<'[not] to have length'>,
    expected: number,
): void;
declare function unexpected(
    subject: string | ArrayLike<any> | object | Set<any>,
    desc: Desc<'[not] to be empty'>,
): void;
declare function unexpected(subject: string | ArrayLike<any> | object, desc: Desc<'to be non-empty'>): void;

// number handlers
declare function unexpected(
    subject: number,
    desc: Desc<'[not] to be close to'>,
    expected: number,
    delta?: number,
): void;
declare function unexpected(subject: number, desc: Desc<'[not] to be finite'>): void;
declare function unexpected(subject: number, desc: Desc<'[not] to be infinite'>): void;

// number, bigint, or string handlers
declare function unexpected<T extends number | BigInt | string>(
    subject: T,
    desc: Desc<'[not] to be within'>,
    start: T,
    end: T,
): void;
declare function unexpected<T extends number | BigInt | string>(
    subject: T,
    desc: Desc<'[not] to be (less than|below|less than or equal to|greater than|above|greater than or equal to)'>,
    expected: T,
): void;
declare function unexpected<T extends number | BigInt>(subject: T, desc: Desc<'[not] to be (positive|negative)'>): void;

// array handlers
declare function unexpected(subject: ArrayLike<any>, desc: Desc<'[not] to be (the empty|an empty|non-empty)'>): void;
declare function unexpected(subject: ArrayLike<any>, desc: Desc<'to be (the empty|an empty|non-empty) array'>): void;
declare function unexpected<T extends ArrayLike<U>, U>(
    subject: T,
    desc: Desc<'to [only] contain'>,
    expected: U,
    ...values: U[]
): void;
declare function unexpected(
    subject: ArrayLike<any>,
    desc: Desc<'[not] to contain'>,
    expected: any,
    ...values: any[]
): void;
declare function unexpected(
    subject: ArrayLike<any>,
    desc: Desc<'to have items [exhaustively] satisfying'>,
    expected: any,
): void;
declare function unexpected(
    subject: ArrayLike<any>,
    desc: Desc<'to be an array whose items [exhaustively] satisfy'>,
    expected: any,
): void;
declare function unexpected(
    subject: ArrayLike<any>,
    desc: Desc<'[not] to have an item [exhaustively] satisfying'>,
    expected: any,
): void;
declare function unexpected(
    subject: ArrayLike<any>,
    desc: Desc<'[when] passed as parameters to [async]'>,
    expected: AnyFunction,
    assertion: any,
    ...assertions: any[]
): void;
declare function unexpected(
    subject: ArrayLike<any>,
    desc: Desc<'[when] passed as parameters to [constructor]'>,
    expected: AnyFunction,
    assertion: any,
    ...assertions: any[]
): void;
declare function unexpected(
    subject: ArrayLike<any>,
    desc: Desc<'[when] passed as parameter to [constructor]'>,
    expected: AnyFunction,
    assertion: any,
    ...assertions: any[]
): void;
declare function unexpected(
    subject: ArrayLike<any>,
    desc: Desc<'[when] sorted [numerically]'>,
    assertion: any,
    ...assertions: any[]
): void;
declare function unexpected(
    subject: ArrayLike<any>,
    desc: Desc<'[when] sorted by'>,
    expected: AnyFunction,
    assertion: any,
    ...assertions: any[]
): void;

// function handlers
declare function unexpected(subject: AnyFunction, desc: Desc<'to error [with]'>, expected: any): void;
declare function unexpected(subject: AnyFunction, desc: Desc<'not to (error|throw)'>, expected: any): void;
declare function unexpected(
    subject: AnyFunction,
    desc: Desc<'to (throw|throw exception|throw error)'>,
    expected?: any,
): void;
declare function unexpected(subject: AnyFunction, desc: Desc<'to throw (a|an)'>, expected: (...args: any) => any): void;
declare function unexpected(subject: AnyFunction, desc: Desc<'to have arity'>, expected: number): void;
declare function unexpected(
    subject: AnyFunction,
    desc: Desc<'[when] called with'>,
    expected: ArrayLike<any>,
    assertion: any,
    ...assertions: any[]
): void;
declare function unexpected(
    subject: AnyFunction,
    desc: Desc<'[when] called'>,
    assertion: any,
    ...assertions: any[]
): void;

declare function unexpected(subject: AnyFunction, desc: Desc<'to call the callback'>): Promise<void>;
declare function unexpected(subject: AnyFunction, desc: Desc<'to call the callback without error'>): Promise<void>;
declare function unexpected(subject: AnyFunction, desc: Desc<'to call the callback with error'>): Promise<void>;
declare function unexpected(
    subject: AnyFunction,
    desc: Desc<'to call the callback with error'>,
    expected: any,
): Promise<void>;

// Error handlers
declare function unexpected(subject: Error, desc: Desc<'to have message'>, expected: any): void;
declare function unexpected(subject: Error, desc: Desc<'to [exhaustively] satisfy'>, expected: Error | object): void;
declare function unexpected(
    subject: Buffer,
    desc: Desc<'[when] decoded as'>,
    expected: string,
    assertion: any,
    ...assertions: any[]
): void;

// Set handlers
declare function unexpected(subject: Set<any>, desc: Desc<'[not] to have size'>, expected: number): void;
declare function unexpected<T extends Set<U>, U>(
    subject: T,
    desc: Desc<'[not] to contain'>,
    expected: U,
    ...moreExpected: U[]
): void;
declare function unexpected(
    subject: Set<any>,
    desc: Desc<'to have items [exhaustively] satisfying'>,
    expected: any,
): void;
declare function unexpected(
    subject: Set<any>,
    desc: Desc<'to have an item [exhaustively] satisfying'>,
    expected: any,
): void;
declare function unexpected<T extends Set<any>, U extends T>(
    subject: T,
    desc: Desc<'to [exhaustively] satisfy'>,
    expected: U,
): void;

// Promise handlers
declare function unexpected(subject: Promise<any> | AnyFunction, desc: Desc<'to be rejected'>): Promise<void>;
declare function unexpected(
    subject: Promise<any> | AnyFunction,
    desc: Desc<'to be rejected with'>,
    expected: any,
): Promise<void>;
declare function unexpected(
    subject: Promise<any> | AnyFunction,
    desc: Desc<'to be rejected with error [exhaustively] satisfying'>,
    expected: any,
): Promise<void>;
declare function unexpected(subject: Promise<any> | AnyFunction, desc: Desc<'to be fulfilled'>): Promise<void>;
declare function unexpected(
    subject: Promise<any> | AnyFunction,
    desc: Desc<'to be fulfilled with'>,
    expected: any,
): Promise<void>;
declare function unexpected(
    subject: Promise<any> | AnyFunction,
    desc: Desc<'to be fulfilled with value [exhaustively] satisfying'>,
    expected: any,
): Promise<void>;
declare function unexpected(
    subject: Promise<any> | AnyFunction,
    desc: Desc<'when rejected'>,
    assertion: any,
): Promise<void>;
declare function unexpected(
    subject: Promise<any> | AnyFunction,
    desc: Desc<'when fulfilled'>,
    assertion: any,
): Promise<void>;

// object handlers
declare function unexpected<T extends object, U extends keyof T>(
    subject: T,
    desc: Desc<'to have [own] property'>,
    expected: U,
    value: T[U],
): void;
declare function unexpected(
    subject: object,
    desc: Desc<'to be (a map|a hash|an object) whose values [exhaustively] satisfy'>,
    expected: any,
): void;
declare function unexpected(
    subject: object,
    desc: Desc<'to have (enumerable|unenumerable|configurable|unconfigurable|writable|unwritable|readonly) property'>,
    expected: PropertyKey,
): void;
declare function unexpected(subject: object, desc: Desc<'[not] to have property'>, expected: PropertyKey): void;
declare function unexpected(subject: object, desc: Desc<'[not] to have own property'>, expected: PropertyKey): void;
declare function unexpected(
    subject: object,
    desc: Desc<'[not] to [only] have [own] properties'>,
    expected: PropertyKey[],
): void;
declare function unexpected(subject: object, desc: Desc<'[not] to have [own] properties'>, expected: object): void;
declare function unexpected(
    subject: object,
    desc: Desc<'to [not] [only] have keys'>,
    expected: PropertyKey,
    ...keys: PropertyKey[]
): void;
declare function unexpected(
    subject: object,
    desc: Desc<'not to have keys'>,
    expected: PropertyKey,
    ...keys: PropertyKey[]
): void;
declare function unexpected(subject: object, desc: Desc<'not to have key'>, expected: PropertyKey): void;
declare function unexpected(subject: object, desc: Desc<'to [not] [only] have key'>, expected: PropertyKey): void;
declare function unexpected(subject: object, desc: Desc<'to satisfy'>, expected: AnyFunction): void;
declare function unexpected(
    subject: object,
    desc: Desc<'to have values [exhaustively] satisfying'>,
    expected: any,
): void;
declare function unexpected(subject: object, desc: Desc<'to have keys satisfying'>, expected: any): void;
declare function unexpected(
    subject: object,
    desc: Desc<'to be (a map|a hash|an object) whose (keys|properties) satisfy'>,
    expected: any,
): void;
declare function unexpected(
    subject: object,
    desc: Desc<'[not] to have a value [exhaustively] satisfying'>,
    expected: any,
): void;
declare function unexpected(subject: object, desc: Desc<'to be canonical'>): void;

// "any" handlers
declare function unexpected(subject: any, desc: Desc<'[not] to be one of'>, expected: any[]): void;
declare function unexpected(
    subject: any,
    desc: Desc<'[not] to be (a|an)'>,
    expected: AnyFunction | UnexpectedTypeDef<any>,
): void;
declare function unexpected(subject: any, desc: Desc<'[not] to equal'>, expected: any): void;
declare function unexpected(subject: any, desc: Desc<'[not] to be (ok|truthy)'>, message?: string): void;
declare function unexpected(subject: any, desc: Desc<'[not] to be'>, expected: any): void;
declare function unexpected(subject: any, desc: Desc<'[not] to be falsy'>, message?: string): void;
declare function unexpected(subject: any, desc: Desc<'[not] to be (null|undefined|defined|NaN)'>): void;
declare function unexpected(subject: any, desc: Desc<'[not] to be an (object|array)'>): void;
declare function unexpected(subject: any, desc: Desc<`[not] to be (a|an) <type>`>): void;
declare function unexpected(
    subject: any,
    desc: Desc<'[not] to [exhaustively] satisfy [assertion]'>,
    expected: any,
): void;
declare function unexpected(subject: any, desc: Desc<'to [exhaustively] satisfy'>, expected: any): void;
declare function unexpected(
    subject: any,
    desc: Desc<'[when] passed as parameter to [async]'>,
    expected: AnyFunction,
    assertion: any,
    ...assertions: any[]
): void;

declare namespace unexpected {
    type AssertionHandler<S extends string, A extends readonly any[] = any[]> = (
        expect: typeof unexpected,
        subject: S,
        ...args: A
    ) => void;

    type MagicPen = any;

    type StyleHandler = (this: MagicPen, text: string, rainbowColors: string[]) => void;
    type Flag =
        | 'exhaustively'
        | 'not'
        | 'when'
        | 'async'
        | 'numerically'
        | 'constructor'
        | 'assertion'
        | 'only'
        | 'own';
    interface Assertion {
        handler: <S extends string, TArgs extends readonly any[] = any[]>(
            expect: typeof unexpected,
            subject: Desc<S>,
            ...args: TArgs
        ) => void;
        alternations: string[];
        flags: Record<Partial<Flag>, boolean>;
        subject: Subject;
    }

    interface Subject {
        minimum: number;
        maximum: number;
        type: `type: ${UnexpectedKind}`;
        args: Subject[];
        testDescriptionString: string;
        declaration: string;
        expect?: typeof unexpected;
        specificity: number[];
    }

    interface PluginDefinition {
        name?: string;
        version?: string;
        dependencies?: string[];
        installInto(expect: typeof unexpected): void;
    }

    type OutputOptions =
        | {
              isMagicPen: boolean;
          }
        | {
              format: string;
          }
        | {
              output: MagicPen;
          };

    type UnexpectedKind = _UnexpectedKind;

    /**
     * @see {@link http://unexpected.js.org/api/use/}
     */
    function use(plugin: PluginDefinition): typeof unexpected;

    /**
     * Clones the {@link unexpected} instance.
     *
     * Before extending the {@link unexpected} instance with new functionality it is usually a good idea to clone it, so you don't change the global instance.
     *
     * Adding new functionality to the cloned instance will not affect the original instance.
     *
     * @see {@link http://unexpected.js.org/api/clone/}
     * @returns A new {@link unexpected} instance
     */
    function clone(): typeof unexpected;

    /**
     * Adds a new assertion to the {@link unexpected} instance.
     *
     * @param pattern - A string pattern (or an array of patterns) that describes the assertion.
     * @param handler - A handler function that is called when the assertion is invoked.
     * @returns `expect` instance
     * @see {@link http://unexpected.js.org/api/addAssertion/}
     */
    function addAssertion<T, A extends readonly any[] = any[]>(
        pattern: string,
        handler: AssertionHandler<T, A>,
    ): typeof unexpected;

    /**
     * Install a single [MagicPen](https://github.com/sunesimonsen/magicpen) style into the {@link unexpected} instance.
     *
     * Proxies to MagicPen's `addStyle` method.
     *
     * @param name - Style name
     * @param style - Style handler
     * @returns `expect` instance
     * @see {@link http://unexpected.js.org/api/addStyle/}
     */
    function addStyle(name: string, style: StyleHandler): typeof unexpected;

    /**
     * Adds a new type definition to the {@link unexpected} instance.
     *
     * @returns `expect` instance
     * @see {@link http://unexpected.js.org/api/addType/}
     */
    function addType<T>(typeDefinition: UnexpectedTypeDef<T>): typeof unexpected;

    /**
     * Create a new {@link unexpected} instance that maintains a close relationship to the instance it is created from.
     * @returns Child `expect` instance
     * @see {@link http://unexpected.js.org/api/child/}
     */
    function child(): typeof unexpected;

    /**
     * Explicitly forces failure.
     *
     * @see {@link http://unexpected.js.org/api/fail/}
     */
    function fail(format: string, ...args: any[]): void;
    function fail(error: Error): void;
    function fail(options: { message?: MagicPen | string | ((output: MagicPen) => void); diff?: DiffMethod }): void;

    /**
     * Prevents further assertions, types, styles, plugins, and themes from
     * being added to the {@link unexpected} instance.
     *
     * Once frozen, the {@link addAssertion}, {@link addType}, {@link addStyle}, {@link installTheme}, and {@link use} methods will throw an exception.
     * @see http://unexpected.js.org/api/freeze/
     */
    function freeze(): typeof unexpected;

    /**
     * Install a [MagicPen](https://github.com/sunesimonsen/magicpen) theme into the {@link unexpected} instance.
     *
     * Proxies to MagicPen's `installTheme` method.
     * @param theme - MagicPen theme
     */
    function installTheme(theme: object): typeof unexpected;

    /**
     * Creates a `Promise` with the given function body.
     *
     * When the body takes no arguments, the body will be executed.
     * When the body takes a single argument, it acts like a Node.js-style callback.
     * When the body takes two arguments, it acts like `new Promise(resolve, reject)`.
     * @see http://unexpected.js.org/api/promise/
     */
    function promise<T>(handler: () => T | Promise<T> | PromiseLike<T>): Promise<typeof unexpected>;
    function promise<T>(resolve: (value: T) => void, reject: (reason: any) => void): Promise<typeof unexpected>;
    function promise(handler: (run: (err?: any, result?: any) => void) => void): Promise<typeof unexpected>;

    namespace promise {
        /**
         * Find all promises in the given structure and return a promise that will be fulfilled when all of the promises in the structure have been fulfilled.
         * @param value Structure containing Promises
         * @returns Promise fulfilling with array of fulfilled Promises
         */
        function all<T>(value: T): Promise<FindPromises<T>>;
        /**
         * Find all promises in the given structure and return a promise that will be fulfilled when any of the promises in the structure have been fulfilled.
         * @param value Structure containing Promises
         * @returns Promise fulfilling with the first fulfilled Promise from the structure
         */
        function any<T>(value: T): Promise<FindPromises<T>[number]>;
        /**
         * Find all promises in the given structure and return a promise that will be fulfilled when all of the promises have been rejected or fulfilled.
         * @param value
         */
        function settle<T>(value: T): Promise<FindPromises<T>>;
    }

    // XXX this is wrong
    function shift<T, A extends Assertion>(this: A, newSubject: T, assertionIndex?: -1): typeof unexpected;
    function shift<T, A extends Assertion>(this: A, newSubject: T, assertionIndex: number): typeof unexpected;
    function shift<A extends Assertion>(this: A): A['subject'];

    /**
     * Returns a description of all registered assertions
     */
    function toString(): string;

    class UnexpectedError extends Error {
        isUnexpected: true;
        parent?: UnexpectedError;
        getErrorMessage(): MagicPen;
        getParents(): UnexpectedError[]|undefined;
        getAllErrors(): UnexpectedError[];
        getDiff(options: OutputOptions): string;
        getDiffMethod(): DiffMethod;
        getLabel(): string;
    }

    type DiffMethod = (
        output: MagicPen,
        diff: string,
        inspect: (value: any, depth?: number|null, outputOrFormat?: MagicPen | string) => string,
        equal: <T>(a: T, b: unknown) => b is T,
    ) => void;

    function withError<A extends Assertion>(
        this: A,
        run: () => typeof unexpected,
        handler: (e: UnexpectedError) => void,
    ): typeof unexpected;

    const assertions: Record<string, Assertion[]>;

    interface Context {
        level: number;
        child(): Context;
    }

    type WrappedExpect<A extends Assertion> = typeof unexpected & {
        context: Context;
        execute: WrappedExpect<A>;
        alternations: 
    }
}

export = unexpected;

export as namespace unexpected;
