// Type definitions for unexpected 13.0
// Project: https://github.com/unexpectedjs/unexpected#readme
// Definitions by: Christopher Hiller <https://github.com/boneskull>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Declaration, ParsedDeclaration } from './assertions';
import {expect} from './unexpected';
// export * from './assertions';


declare function expect<P extends Declaration>(...args: P): Promise<void>;

export default expect;

export as namespace unexpected;

