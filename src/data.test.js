import { describe, it, expect, vi } from "vitest";
import { generateReportData } from "./data";

describe("generateReportdata()", () => {
	it("should execute logFn if provided", () => {
		const logger = vi.fn();
		generateReportData(logger);
		expect(logger).toBeCalled();
	});
});
