// Type definitions for unexpected 13.0
// Project: https://github.com/unexpectedjs/unexpected#readme
// Definitions by: Christopher Hiller <https://github.com/boneskull>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {
    Choice,
    DA,
    DAHash,
    DAMap,
    DAn,
    DAnObject,
    DArray,
    DDefined,
    DFalse,
    DFalsy,
    DNaN,
    DNull,
    DOk,
    DOneOf,
    DSatisfy,
    DToBe,
    DTrue,
    DTruthy,
    DUndefined,
    DWhoseValues,
    DExhaustively,
    Join,
    Maybe,
    MaybeNot,
    MaybeExhaustively,
    DObject,
    DBoolean,
    DNumber,
    DString,
    DFunction,
    DRegExp,
    DDate,
    DTheEmpty,
    DAnEmpty,
    DNonEmpty,
    DToMatch,
    DToHaveOwnProperty,
    DToHave,
    DPropAttr,
    DProperty,
    DOwn,
} from './unexpected';

declare function expect<T extends object, U>(
    subject: T,
    desc: Join<[DToBe, Choice<[DAMap | DAHash | DAnObject]>, DWhoseValues, MaybeExhaustively, DSatisfy]>,
    assertion: U,
): Promise<void>;
declare function expect<T>(
    subject: T,
    desc: Join<[MaybeNot, DToBe, Choice<[DOk, DTruthy]>]>,
    message?: string,
): Promise<void>;
declare function expect<T, U>(subject: T, desc: Join<[MaybeNot, DToBe]>, expected: U): Promise<void>;
declare function expect<T extends boolean>(
    subject: T,
    desc: Join<[MaybeNot, DToBe, Choice<[DTrue, DFalse]>]>,
): Promise<void>;
declare function expect<T>(subject: T, desc: Join<[MaybeNot, DToBe, DFalsy]>, message?: string): Promise<void>;
declare function expect<T>(
    subject: T,
    desc: Join<[MaybeNot, DToBe, Choice<[DNull, DUndefined, DDefined, DNaN]>]>,
): Promise<void>;
declare function expect<T, U>(subject: T, desc: Join<[MaybeNot, DToBe, Choice<[DA, DAn]>]>, expected: U): Promise<void>;
declare function expect<T, U extends any[]>(
    subject: T,
    desc: Join<[MaybeNot, DToBe, DOneOf]>,
    expected: U,
): Promise<void>;
declare function expect<T>(subject: T, desc: Join<[MaybeNot, DToBe, DAn, Choice<[DObject, DArray]>]>): Promise<void>;
declare function expect<T>(
    subject: T,
    desc: Join<[MaybeNot, DToBe, DA, Choice<[DBoolean, DNumber, DString, DFunction, DRegExp, DDate]>]>,
): Promise<void>;
declare function expect<T extends ArrayLike<any>>(
    subject: T,
    desc: Join<[MaybeNot, DToBe, Choice<[DTheEmpty, DAnEmpty, DNonEmpty]>, DArray]>,
): Promise<void>;
//<string> to match <regexp>
//<string> not to match <regexp>
declare function expect<T extends string, U extends RegExp>(
    subject: T,
    desc: Join<[MaybeNot, DToMatch]>,
    regexp: U,
): Promise<void>;
//<object> [not] to have own property <string|Symbol>
declare function expect<T extends object, U extends string | symbol>(
    subject: T,
    desc: Join<[MaybeNot, DToHaveOwnProperty]>,
    expected: U,
): Promise<void>;
//    '<object> to have (enumerable|unenumerable|configurable|unconfigurable|writable|unwritable|readonly) property <string|Symbol>',
declare function expect<T extends object, U extends string | symbol>(
    subject: T,
    desc: Join<[DToHave, DPropAttr]>,
    expected: U,
): Promise<void>;
// <object> [not] to have property <string|Symbol>
declare function expect<T extends object, U extends string | symbol>(
    subject: T,
    desc: Join<[DToHave, DProperty]>,
    expected: U,
): Promise<void>;
//<object> to have [own] property <string|Symbol> <any>
declare function expect<T extends object, U extends string | symbol>(
    subject: T,
    desc: Join<[DToHave, Maybe<DOwn>, DProperty]>,
    expected: U,
    value: any
): Promise<void>;
export default expect;

export as namespace unexpected;
