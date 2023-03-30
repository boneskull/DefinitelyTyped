import * as unexpected from './';
// import { ParsedSubject, ParsedDeclaration, Declaration, Choice } from './';

/**
 * The `expectType` function from https://www.npmjs.com/package/tsd,
 * except instead of returning `void`, it returns `T`.
 */
declare function expectType<T>(value: T): T;


//<object> to be (a map|a hash|an object) whose values [exhaustively] satisfy <assertion>

// type baz = AssertionParams<'<object> to be (a map|a hash|an object) whose values [exhaustively] satisfy <assertion>'>
// type bar = ParsedDeclaration<'<any> [not] to be (ok|truthy) <string>'>;

// type baz = ParsedSubject<'any', '[not] to be (ok|truthy) <string>'>;
// type blah =
//     ParsedDeclaration<'<object> to be (a map|a hash|an object) whose values [exhaustively] satisfy <assertion>'>;
// type z = bar[1]
    
// function myExpect<T> (subject: T, ...args: AssertionParams<T>): void {}

// expect(true, 'to be ok');

unexpected('foo', 'to be ok');

unexpected({foo: 'bar'}, 'to be a map whose values exhaustively satisfy', {foo: 'bar'});
unexpected(false, 'not to be ok');
unexpected('false', 'not to be truthy');
unexpected({foo: 'bar'}, 'to have own property', 'foo', 'bar');
unexpected(100, 'to be within', 90, 110);
unexpected('foo', 'to match', /o/);
unexpected('foo', 'to be within', 'afoo', 'foob');
unexpected('foo', 'to be a string');
unexpected('foo', 'to be one of', ['foo', 'bar', 'baz']);
unexpected(['foo'], 'to be an array');
unexpected.fail('foo');
