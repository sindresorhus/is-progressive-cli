import fs from 'fs';
import path from 'path';
import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['fixture/progressive.jpg'], {cwd: __dirname});
	t.regex(stdout, /✔/);
});

test('stdin', async t => {
	const {stdout} = await execa('./cli.js', {
		input: fs.readFileSync(path.join(__dirname, 'fixture/progressive.jpg')),
		cwd: __dirname
	});

	t.regex(stdout, /✔/);
});
