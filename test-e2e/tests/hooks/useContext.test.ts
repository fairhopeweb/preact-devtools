import { newTestPage, getText, checkNotPresent } from "../../test-utils";
import { expect } from "chai";
import { clickText } from "pentf/browser_utils";

export const description = "Inspect useContext hook";

export async function run(config: any) {
	const { devtools } = await newTestPage(config, "hooks", {
		preact: "hook",
	});

	const hooksPanel = '[data-testid="props-row"]';

	await clickText(devtools, "ContextComponent", {
		elementXPath: "//*",
		timeout: 2000,
	});
	await devtools.waitForSelector(hooksPanel, { timeout: 2000 });

	let name = await getText(devtools, '[data-testid="prop-name"]');
	let value = await getText(devtools, '[data-testid="prop-value"]');

	expect(name).to.equal("useContext");
	expect(value).to.equal('"foobar"');

	// Should not be collapsable
	await checkNotPresent(devtools, '[data-testid="props-row"] > button');

	// Should not be editable
	await checkNotPresent(devtools, '[data-testid="prop-value"] input');

	// Check if default value is read when no Provider is present
	await clickText(devtools, "ContextNoProvider", {
		elementXPath: "//*",
		timeout: 2000,
	});
	await devtools.waitForSelector(hooksPanel, { timeout: 2000 });

	name = await getText(devtools, '[data-testid="prop-name"]');
	value = await getText(devtools, '[data-testid="prop-value"]');

	expect(name).to.equal("useContext");
	expect(value).to.equal("0");
}
