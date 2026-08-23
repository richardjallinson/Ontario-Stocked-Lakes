# Contributing

Thanks for helping out.

## Setup

```bash
./scripts/fetch-vendor.sh
python3 -m http.server 8080
```

## Before you open a pull request

```bash
node --check app.js
node --check sw.js
```

CI runs the same checks.

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
