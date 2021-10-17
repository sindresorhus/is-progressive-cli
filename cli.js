#!/usr/bin/env node
import path from 'node:path';
import process from 'node:process';
import meow from 'meow';
import logSymbols from 'log-symbols';
import isProgressive from 'is-progressive';

const cli = meow(`
	Usage
	  $ is-progressive <file> ...
	  $ is-progressive < <file>

	Example
	  $ is-progressive baseline.jpg progressive.jpg
	  ✖ baseline.jpg
	  ✔ progressive.jpg
`, {
	importMeta: import.meta,
});

const log = (isImageProgressive, imagePath) => {
	console.log(isImageProgressive ? logSymbols.success : logSymbols.error, path.relative('.', imagePath));
};

const init = input => {
	let exitCode = 0;

	for (const element of [input].flat()) {
		const isImageProgressive = isProgressive.fileSync(element);
		if (!isImageProgressive) {
			exitCode = 1;
		}

		log(isImageProgressive, element);
	}

	process.exitCode = exitCode;
};

if (cli.input.length === 0 && process.stdin.isTTY) {
	console.error('Specify at least one filename');
	process.exit(2);
}

if (cli.input.length > 0) {
	init(cli.input);
} else {
	(async () => {
		const stdin = await isProgressive.stream(process.stdin);
		log(stdin, 'stdin');
	})();
}
