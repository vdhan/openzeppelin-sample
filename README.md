# Sample OpenZeppelin Project

## For deploying local:

```shell
pnpm install
npx hardhat compile
npx hardhat node
```

Open other terminal tab

```shell
npx hardhat run --network localhost scripts/deploy.js
npx hardhat console --network localhost
npx hardhat test
```

Upgrade contract

```shell
npx hardhat run --network localhost scripts/upgrade.js
```