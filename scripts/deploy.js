async function main() {
  const CONTRACT = 'Box';
  console.log('Deploying contract:', CONTRACT);

  const Box = await ethers.getContractFactory(CONTRACT);
  const box = await Box.deploy();
  console.log('Contract deployed to address:', box.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
