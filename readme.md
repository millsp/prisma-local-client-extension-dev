cd simple-ext
pnpm install
pnpm run build
pnpm pack
ls -l

cd ../my-app
pnpm install
pnpm exec prisma db push --force-reset
pnpm exec prisma generate

pnpm exec prisma -v
ts-node src/index.ts
pnpm exec tsc
