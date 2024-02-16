import { it, expect, vi } from "vitest";
import writeData from "./io";
import { promises as fs } from "fs";

// arguments as name of the module or the path of the module that should be mocked
vi.mock("fs");
// it will trigger vitest auto-mocking algorithm it will find this module and replace all functions in there with empty spy  functions
// custom mock logic replace the join method in path with our own method since we have imported defualt we have to use default object to define the method
vi.mock("path", () => {
	return {
		default: {
			join: (...args) => {
				return args[args.length - 1];
			},
		},
	};
});

it("should execute the writeFile method", () => {
	const testData = "Test";
	const testFilename = "test.txt";

	writeData(testData, testFilename);

	// return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
	// expect(fs.writeFile).toBeCalled();
	expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});
