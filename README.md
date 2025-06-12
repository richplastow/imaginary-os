# imaginary-os

**Transforms markdown files into an interactive desktop and mobile OS**

- Version: 0.0.1
- Created: 12th June 2025 by Rich Plastow
- Updated: 12th June 2025 by Rich Plastow
- <https://github.com/richplastow/imaginary-os>

---

## Install

```bash
# Clone the repository and change into the directory.
git clone git@github.com:richplastow/imaginary-os.git && cd imaginary-os
# Cloning into 'imaginary-os'...
# remote: Enumerating objects: 61, done.
# remote: Counting objects: 100% (61/61), done.
# remote: Compressing objects: 100% (55/55), done.
# remote: Total 61 (delta 2), reused 57 (delta 2), pack-reused 0 (from 0)
# Receiving objects: 100% (61/61), 21.63 KiB | 425.00 KiB/s, done.
# Resolving deltas: 100% (2/2), done.

# Install all NPM dependencies and dev-dependencies.
npm install
# npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
# npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
# npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
# npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
#
# > imaginary-os@0.0.1 prepare
# > husky
#
#
# added 759 packages, and audited 765 packages in 1m
#
# found 0 vulnerabilities
```

## Check everything works

```bash
# Run 'format', 'lint', 'check-types' and the unit and e2e tests.
npm run ok
# > imaginary-os@0.0.1 ok
# > npm run format && turbo run --parallel lint check-types && npm test
#
#
# > imaginary-os@0.0.1 format
# > prettier --write **/*.{css,json,md,ts,tsx}
#
# apps/imaginary-os-main/app/globals.css 13ms (unchanged)
# apps/imaginary-os-main/package.json 13ms (unchanged)
# apps/imaginary-os-main/tsconfig.json 2ms (unchanged)
# package-lock.json 41ms (unchanged)
# package.json 1ms (unchanged)
# packages/eslint-config/package.json 0ms (unchanged)
# packages/tailwind-config/package.json 0ms (unchanged)
# packages/tailwind-config/tsconfig.json 0ms (unchanged)
# packages/typescript-config/base.json 2ms (unchanged)
# packages/typescript-config/nextjs.json 1ms (unchanged)
# packages/typescript-config/package.json 1ms (unchanged)
# packages/typescript-config/react-library.json 0ms (unchanged)
# packages/vitest-config/package.json 0ms (unchanged)
# packages/vitest-config/tsconfig.json 0ms (unchanged)
# packages/vitest-config/turbo.json 0ms (unchanged)
# turbo.json 1ms (unchanged)
# packages/eslint-config/README.md 8ms (unchanged)
# README.md 3ms (unchanged)
# apps/imaginary-os-main/next-env.d.ts 36ms (unchanged)
# apps/imaginary-os-main/next.config.ts 15ms (unchanged)
# apps/imaginary-os-main/tailwind.config.ts 10ms (unchanged)
# apps/imaginary-os-main/vitest.config.ts 4ms (unchanged)
# commitlint.config.ts 4ms (unchanged)
# packages/tailwind-config/tailwind.config.ts 6ms (unchanged)
# packages/vitest-config/configs/base-config.ts 9ms (unchanged)
# packages/vitest-config/configs/react-config.ts 6ms (unchanged)
# packages/vitest-config/configs/ui-config.ts 8ms (unchanged)
# packages/vitest-config/configs/vitest-setup.ts 6ms (unchanged)
# apps/imaginary-os-main/app/layout.tsx 10ms (unchanged)
# apps/imaginary-os-main/app/page.tsx 4ms (unchanged)
# apps/imaginary-os-main/tmp.test.tsx 6ms (unchanged)
# turbo 2.5.4
#
# • Packages in scope: @repo/eslint-config, @repo/tailwind-config, @repo/typescript-config, @repo/vitest-config, imaginary-os-main
# • Running lint, check-types in 5 packages
# • Remote caching disabled
# ┌─ imaginary-os-main#check-types > cache miss, executing 19885f01f51be2d1
#
#
# > imaginary-os-main@1.0.0 check-types
# > tsc --noEmit
# └─ imaginary-os-main#check-types ──
# ┌─ imaginary-os-main#lint > cache miss, executing 1a8d28dcc5ebd01a
#
#
# > imaginary-os-main@1.0.0 lint
# > next lint --max-warnings 0
#
# ✔ No ESLint warnings or errors
# └─ imaginary-os-main#lint ──
#
#  Tasks:    2 successful, 2 total
# Cached:    0 cached, 2 total
#   Time:    2.897s
#
#
# > imaginary-os@0.0.1 test
# > npm run test:unit && npm run test:e2e
#
#
# > imaginary-os@0.0.1 test:unit
# > turbo run test:unit
#
# turbo 2.5.4
#
# • Packages in scope: @repo/eslint-config, @repo/tailwind-config, @repo/typescript-config, @repo/vitest-config, imaginary-os-main
# • Running test:unit in 5 packages
# • Remote caching disabled
# ┌─ imaginary-os-main#test:unit > cache miss, executing a58acb4eb6577c0b
#
#
# > imaginary-os-main@1.0.0 test:unit
# > vitest --run
#
# (node:17773) ExperimentalWarning: Type Stripping is an expe
# rimental feature and might change at any time
# (Use `node --trace-warnings ...` to show where the warning
# was created)
#
#  RUN  v3.2.3 /Users/.../imaginary-os/apps/imaginary-os-main
#       Coverage enabled with istanbul
#
#  ✓ tmp.test.tsx (1 test) 1ms
#    ✓ adds 1 + 1 to equal 2 0ms
#
#  Test Files  1 passed (1)
#       Tests  1 passed (1)
#    Start at  11:52:05
#    Duration  253ms (transform 22ms, setup 0ms, collect 11ms
# , tests 1ms, environment 0ms, prepare 50ms)
# └─ imaginary-os-main#test:unit ──
#
#  Tasks:    1 successful, 1 total
# Cached:    0 cached, 1 total
#   Time:    1.251s
#
#
# > imaginary-os@0.0.1 test:e2e
# > turbo run test:e2e
#
# turbo 2.5.4
#
# • Packages in scope: @repo/eslint-config, @repo/tailwind-config, @repo/typescript-config, @repo/vitest-config, imaginary-os-main
# • Running test:e2e in 5 packages
# • Remote caching disabled
#
# No tasks were executed as part of this run.
#
#  Tasks:    0 successful, 0 total
# Cached:    0 cached, 0 total
#   Time:    61ms

# Start a developer session.
npm run dev
# > imaginary-os@0.0.1 dev
# > turbo run dev
#
# turbo 2.5.4
#
# • Packages in scope: @repo/eslint-config, @repo/tailwind-config, @repo/typescript-config, @repo/vitest-config, imaginary-os-main
# • Running dev in 5 packages
# • Remote caching disabled
#
# Tasks               │ imaginary-os-main#dev > cache bypass, force executing 0d08
# imaginary-os-main#d»│
#                     │> imaginary-os-main@1.0.0 dev
#                     │> next dev --port 3000 --turbopack
#                     │
#                     │   ▲ Next.js 15.3.3 (Turbopack)
#                     │   - Local:        http://localhost:3000
#                     │   - Network:      http://192.168.1.247:3000
#                     │
#                     │ ✓ Starting...
#                     │ ✓ Ready in 658ms
#                     │█
# ↑ ↓ - Select        │
# m - More binds      │   i - Interact   u/d - Scroll logs   U/D - Page logs   t/b
```

1. Open <http://localhost:3000> in your browser to see the app running.
2. Try changing something in apps/imaginary-os-main/app/page.tsx to check that
   the browser updates in real-time.
3. Use [Ctrl]+[c] to stop the dev server.

```bash
# After making any changes, eg adding a file, check that Husky is working.
git add .
git commit -am 'check that husky rejects bad commit messages'
# > imaginary-os@0.0.1 ok
# > npm run format && turbo run --parallel lint check-types && npm test
#
#
# > imaginary-os@0.0.1 format
# > prettier --write **/*.{css,json,md,ts,tsx}
#
# apps/imaginary-os-main/app/globals.css 12ms (unchanged)
# apps/imaginary-os-main/package.json 9ms (unchanged)
# apps/imaginary-os-main/tsconfig.json 2ms (unchanged)
# package-lock.json 42ms (unchanged)
# package.json 0ms (unchanged)
# packages/eslint-config/package.json 1ms (unchanged)
# packages/tailwind-config/package.json 1ms (unchanged)
# packages/tailwind-config/tsconfig.json 1ms (unchanged)
# packages/typescript-config/base.json 1ms (unchanged)
# packages/typescript-config/nextjs.json 1ms (unchanged)
# packages/typescript-config/package.json 0ms (unchanged)
# packages/typescript-config/react-library.json 1ms (unchanged)
# packages/vitest-config/package.json 1ms (unchanged)
# packages/vitest-config/tsconfig.json 1ms (unchanged)
# packages/vitest-config/turbo.json 1ms (unchanged)
# turbo.json 1ms (unchanged)
# packages/eslint-config/README.md 8ms (unchanged)
# README.md 7ms (unchanged)
# apps/imaginary-os-main/next-env.d.ts 37ms (unchanged)
# apps/imaginary-os-main/next.config.ts 18ms (unchanged)
# apps/imaginary-os-main/tailwind.config.ts 10ms (unchanged)
# apps/imaginary-os-main/vitest.config.ts 5ms (unchanged)
# commitlint.config.ts 4ms (unchanged)
# packages/tailwind-config/tailwind.config.ts 7ms (unchanged)
# packages/vitest-config/configs/base-config.ts 9ms (unchanged)
# packages/vitest-config/configs/react-config.ts 6ms (unchanged)
# packages/vitest-config/configs/ui-config.ts 9ms (unchanged)
# packages/vitest-config/configs/vitest-setup.ts 4ms (unchanged)
# apps/imaginary-os-main/app/layout.tsx 9ms (unchanged)
# apps/imaginary-os-main/app/page.tsx 3ms (unchanged)
# apps/imaginary-os-main/tmp.test.tsx 5ms (unchanged)
# turbo 2.5.4
#
# • Packages in scope: @repo/eslint-config, @repo/tailwind-config, @repo/typescript-config, @repo/vitest-config, imaginary-os-main
# • Running lint, check-types in 5 packages
# • Remote caching disabled
# ┌─ imaginary-os-main#check-types > cache hit, replaying logs 59d53feda3fd2dbb
#
#
# > imaginary-os-main@1.0.0 check-types
# > tsc --noEmit
# └─ imaginary-os-main#check-types ──
# ┌─ imaginary-os-main#lint > cache hit, replaying logs 1920798ea3be1c7d
#
#
# > imaginary-os-main@1.0.0 lint
# > next lint --max-warnings 0
#
# ✔ No ESLint warnings or errors
# └─ imaginary-os-main#lint ──
#
#  Tasks:    2 successful, 2 total
# Cached:    2 cached, 2 total
#   Time:    57ms >>> FULL TURBO
#
#
# > imaginary-os@0.0.1 test
# > npm run test:unit && npm run test:e2e
#
#
# > imaginary-os@0.0.1 test:unit
# > turbo run test:unit
#
# turbo 2.5.4
#
# • Packages in scope: @repo/eslint-config, @repo/tailwind-config, @repo/typescript-config, @repo/vitest-config, imaginary-os-main
# • Running test:unit in 5 packages
# • Remote caching disabled
# ┌─ imaginary-os-main#test:unit > cache hit, replaying logs a54dca922952c66f
#
#
# > imaginary-os-main@1.0.0 test:unit
# > vitest --run
#
# (node:18541) ExperimentalWarning: Type Stripping is an experimental feature and might change at any time
# (Use `node --trace-warnings ...` to show where the warning was created)
#
#  RUN  v3.2.3 /Users/.../imaginary-os/apps/imaginary-os-main
#       Coverage enabled with istanbul
#
#  ✓ tmp.test.tsx (1 test) 1ms
#    ✓ adds 1 + 1 to equal 2 0ms
#
#  Test Files  1 passed (1)
#       Tests  1 passed (1)
#    Start at  11:59:53
#    Duration  230ms (transform 25ms, setup 0ms, collect 10ms, tests 1ms, environment 0ms, prepare 47ms)
# └─ imaginary-os-main#test:unit ──
#
#  Tasks:    1 successful, 1 total
# Cached:    1 cached, 1 total
#   Time:    60ms >>> FULL TURBO
#
#
# > imaginary-os@0.0.1 test:e2e
# > turbo run test:e2e
#
# turbo 2.5.4
#
# • Packages in scope: @repo/eslint-config, @repo/tailwind-config, @repo/typescript-config, @repo/vitest-config, imaginary-os-main
# • Running test:e2e in 5 packages
# • Remote caching disabled
#
# No tasks were executed as part of this run.
#
#  Tasks:    0 successful, 0 total
# Cached:    0 cached, 0 total
#   Time:    36ms
#
# ⧗   input: check that husky rejects bad commit messages
# ✖   subject may not be empty [subject-empty]
# ✖   type may not be empty [type-empty]
#
# ✖   found 2 problems, 0 warnings
# ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint
#
# husky - commit-msg script failed (code 1)
```

Husky runs `npm run ok` before every commit, and also enforces standard
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for
commit messages.

> [!NOTE]  
> `>>> FULL TURBO` in the output shows that Turbo's cache is working.

<!-- TODO continue README.md -->
