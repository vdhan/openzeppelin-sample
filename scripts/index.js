async function main() {
  const CONTRACT_ADDRESS = '0x5fbdb2315678afecb367f032d93f642f64180aa3';

  const Box = await ethers.getContractFactory('Box');
  const box = await Box.attach(CONTRACT_ADDRESS);
  let box_value = await box.retrieve();
  console.log('Box value is:', box_value.toString());

  const new_value = Math.floor(Math.random() * 100) + 1; // random in [1, 100]
  await box.store(new_value);
  box_value = await box.retrieve();
  console.log('New box value is:', box_value.toString());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
