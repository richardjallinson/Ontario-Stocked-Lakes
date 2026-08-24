# Contributing

Thanks for helping out. Bug reports, data corrections and feature suggestions
are genuinely useful — please open an issue.

Code contributions are a different matter. This project is all rights reserved
(see [LICENSE](LICENSE)), so merged code would leave you holding copyright in
part of a proprietary application. Pull requests are therefore not being
accepted. If you want to propose a change, describe it in an issue.

The conventions below still apply to anyone reading the source or running it
locally for reference.

## Setup

```bash
./scripts/fetch-vendor.sh
python3 -m http.server 8080
```

## Checks the project runs

```bash
node --check app.js
node --check sw.js
```

CI runs the same checks on every push.

## Conventions

- No build step, no framework. Plain HTML, CSS and ES2020 — keep it that way
  unless there's a strong reason not to.
- Any user-facing string goes through `t()` and needs both an `en` and an `fr`
  entry in the `I18N` object at the top of `app.js`.
- Never interpolate API or user data into `innerHTML` without `esc()`.
- Regulation and advisory content is safety-relevant. Don't soften or remove a
  disclaimer, and don't present bundled data as authoritative — the app always
  links out to the official Ontario source for final verification.
- Bump the version in `sw.js` (`VERSION`) and `app.js` (`APP_VERSION`) together
  when you change cached assets, or users will be served a stale shell.

## Reporting a data problem

Open an issue with the lake name, the field that looks wrong, and the official
source that contradicts it. Please don't file issues about the accuracy of the
upstream government datasets themselves — those need to go to the publisher.
