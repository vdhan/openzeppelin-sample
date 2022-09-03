const {ethers, upgrades} = require('hardhat');

async function main() {
  const CONTRACT = 'Box';
  const ADDRESS = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'; // Contract address
  console.log(`${CONTRACT} upgrading to ${ADDRESS}`);

  const Contract = await ethers.getContractFactory(CONTRACT);
  await upgrades.upgradeProxy(ADDRESS, Contract);
  console.log(`${CONTRACT} upgraded`);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
