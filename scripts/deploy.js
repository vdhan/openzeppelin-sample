async function main() {
  const CONTRACT = 'Box'; // Contract for deploying
  console.log(CONTRACT, 'deploying...');

  const Contract = await ethers.getContractFactory(CONTRACT);
  const smartContract = await Contract.deploy();
  console.log('Contract deployed to address:', smartContract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
