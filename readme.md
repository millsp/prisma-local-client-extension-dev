# Example setup to test and develop a Prisma Client extension locally

## Build the extension first

```sh
cd simple-ext
pnpm install
pnpm run build
pnpm pack
ls -l
```

## Install the extension in the example app

```sh
cd ../my-app
pnpm install
pnpm exec prisma db push --force-reset
pnpm exec prisma generate
pnpm exec prisma -v
```

## Test the extension

```sh
ts-node src/index.ts
pnpm exec tsc
```
