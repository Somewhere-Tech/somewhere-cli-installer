#!/usr/bin/env node
// Re-exec the real `swpm` bin from @somewhere-tech/cli (see swpx.js for why).
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = dirname(createRequire(import.meta.url).resolve('@somewhere-tech/cli/package.json'));
await import(pathToFileURL(join(root, 'bin', 'swpm.js')).href);
