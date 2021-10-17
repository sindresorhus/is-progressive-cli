import fs from 'node:fs';
import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['fixture/progressive.jpg']);
	t.regex(stdout, /✔/);
});

test('stdin', async t => {
	const {stdout} = await execa('./cli.js', {
		input: fs.readFileSync('fixture/progressive.jpg'),
	});

	t.regex(stdout, /✔/);
});
