# somewhere-cli

The friendly install name for the [somewhere.tech](https://somewhere.tech) CLI.

```bash
npm i -g somewhere-cli
```

Gives you the `somewhere`, `sw`, `swpx`, and `swpm` commands. This is a thin
wrapper — all the code lives in [`@somewhere-tech/cli`](https://www.npmjs.com/package/@somewhere-tech/cli),
which this package installs and re-execs. Use either name; they're the same tool.

- `swpx <pkg>` — run a package with `npx` after a security verdict check
- `swpm install` — `npm install` with an install-time verdict check
- `somewhere deploy` / `login` / `db` / … — the platform CLI

MIT © somewhere.tech
