#!/usr/bin/env node
// `sw` is the short alias — same target as `somewhere` (see swpx.js).
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = dirname(createRequire(import.meta.url).resolve('@somewhere-tech/cli/package.json'));
await import(pathToFileURL(join(root, 'bin', 'somewhere.js')).href);
