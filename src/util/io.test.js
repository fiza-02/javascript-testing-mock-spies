import { it, expect, vi } from "vitest";
import writeData from "./io";
import { promises as fs } from "fs";

// arguments as name of the module or the path of the module that should be mocked
vi.mock("fs");
// it will trigger vitest auto-mocking algorithm it will find this module and replace all functions in there with empty spy  functions

it("should execute the writeFile method", () => {
	const testData = "test";
	const testFilename = "test.txt";
	writeData(testData, testFilename);
	// return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
	expect(fs.writeFile).toBeCalled();
});
