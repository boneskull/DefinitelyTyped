import {ParsedSubject, ParsedDeclaration, Declaration, Choice, expect} from 'unexpected';

//<object> to be (a map|a hash|an object) whose values [exhaustively] satisfy <assertion>

// type baz = AssertionParams<'<object> to be (a map|a hash|an object) whose values [exhaustively] satisfy <assertion>'>
type bar = ParsedDeclaration<'<any> [not] to be (ok|truthy) <string>'>

// type blah = ParsedSubject<{}>['value']

// type shuff = TypeToParsedDeclarations<object>

type blah = ParsedDeclaration<'<object> to be (a map|a hash|an object) whose values [exhaustively] satisfy <assertion>'>;

// function myExpect<T> (subject: T, ...args: AssertionParams<T>): void {}

expect(true, 'to be ok');
