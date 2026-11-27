# tt-factory-sandbox

> **Testing repository — not production code.**
> Owned by Sergio Ballestero for trying out [TT Factory](https://github.com/lickybuay/TheFactory),
> TurboTenant's software factory. Branches named `factory/*` and their pull requests are opened by
> the factory's agents during those tests. Nothing here ships anywhere; it is safe to ignore, and it
> can be deleted once the factory is set up.

A tiny library with tests, small enough for an agent to change end to end in a few minutes.

## Use

```js
import { truncateWords } from "./index.js";

truncateWords("The quick brown fox jumps", 3); // "The quick brown…"
truncateWords("The quick brown fox jumps", 3, { ellipsis: "..." }); // "The quick brown..."
truncateWords("The quick brown fox jumps", 3, { ellipsis: "" }); // "The quick brown"
```

## Develop

```sh
npm test
```

Node 20 or newer; no dependencies.

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to contribute.
Prod check: filed from factory.web507.com on 2026-11-26.
UPDATE: 2026-11-26 17:08
Merge steps check: 2026-11-26.
UPDATE 2026-11-26 17:51
Deploy check: d634f5a on 2026-11-26.
Screenshots check: 2026-11-26.
UPDATE 2026-11-26 18:26
UPDATE 2026-11-26 18:23
