import path from "path";
import { promises as fs } from "fs";

/* 
process.cwd()#
Added in: v0.1.8
Returns: <string>
The process.cwd() method returns the current working directory of the Node.js process.

const { cwd } = require('node:process');

console.log(`Current directory: ${cwd()}`);

The process object provides information about, and control over, the current Node.js process.


path.join([...paths])#
Added in: v0.1.16
...paths <string> A sequence of path segments
Returns: <string>
The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.

Zero-length path segments are ignored. If the joined path string is a zero-length string then '.' will be returned, representing the current working directory.

path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// Returns: '/foo/bar/baz/asdf'

path.join('foo', {}, 'bar');
// Throws 'TypeError: Path must be a string. Received {}' COPY
A TypeError is thrown if any of the path segments is not a string.


*/
export default function writeData(data, filename) {
	const storagePath = path.join(process.cwd(), "data", filename);
	return fs.writeFile(storagePath, data);
}
