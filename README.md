# Nested Comments

## Note

1. Prisma에서 Seed 추가하기

- package.json에 먼저 추가

```json
 ...
 "prisma": {
    "seed": "ts-node-esm --transpileOnly --experimental-specifier-resolution=node prisma/seed.ts"
  }
 ...
```

- 명령어 호출

```sh
npx prisma db seed
```
