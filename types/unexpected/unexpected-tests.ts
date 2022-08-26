import {AssertionParams, ParsedDeclaration, Declaration, Choice} from 'unexpected';

//<object> to be (a map|a hash|an object) whose values [exhaustively] satisfy <assertion>
type Foo = ParsedDeclaration<'<object> to be (a map|a hash|an object) whose values [exhaustively] satisfy <assertion>'>;

type baz = AssertionParams<'<object> to be (a map|a hash|an object) whose values [exhaustively] satisfy <assertion>'>
type bar = ParsedDeclaration<'<any> [not] to be (ok|truthy) <string>'>
