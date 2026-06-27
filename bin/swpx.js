#!/usr/bin/env node
// somewhere-cli is just a friendlier install name. All logic lives in
// @somewhere-tech/cli — we resolve its install dir and run its real `swpx` bin
// in-process (it reads process.argv itself). Resolving via package.json works
// regardless of the dependency's `exports` map.
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = dirname(createRequire(import.meta.url).resolve('@somewhere-tech/cli/package.json'));
await import(pathToFileURL(join(root, 'bin', 'swpx.js')).href);
