import expect from './';
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

expect('foo', 'to be ok');

expect({foo: 'bar'}, 'to be a map whose values exhaustively satisfy', {foo: 'bar'});
expect(false, 'not to be ok');
expect('false', 'not to be truthy');
expect({foo: 'bar'}, 'to have own property', 'foo', 'bar');
expect(100, 'to be within', 90, 110);
expect('foo', 'to match', /o/);
expect('foo', 'to be within', 'afoo', 'foob');
expect('foo', 'to be a string');
expect('foo', 'to be one of', ['foo', 'bar', 'baz']);
expect(['foo'], 'to be an array');
