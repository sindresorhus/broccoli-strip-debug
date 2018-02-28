import fs from 'fs';
import test from 'ava';
import del from 'del';

test.afterEach(() => {
	del.sync('temp');
});

test('strips debug statements', t => {
	t.is(
		fs.readFileSync('temp/fixture.js', 'utf8'),
		fs.readFileSync('fixture/expected.js', 'utf8')
	);
});
