require('@nomicfoundation/hardhat-chai-matchers');
const {loadFixture} = require('@nomicfoundation/hardhat-network-helpers');
const {expect} = require('chai');

describe('Box', function () {
  async function fixture() {
    const Box = await ethers.getContractFactory('Box');
    const box = await upgrades.deployProxy(Box, [], {initializer: 'initialize'});
    await box.deployed();

    const [owner, addr1, addr2] = await ethers.getSigners();
    return {box, owner, addr1, addr2};
  }

  it('Retrieve previous value stored', async function () {
    const {box} = await loadFixture(fixture);

    await box.store(43);
    expect(await box.retrieve()).to.equal(43);
  });

  it('store emits an event', async function () {
    const {box} = await loadFixture(fixture);
    await expect(box.store(17)).to.emit(box, 'ValueChanged').withArgs(17);
  });

  it('non owner cannot store a value', async function () {
    const {box, addr1} = await loadFixture(fixture);
    await expect(box.connect(addr1).store(71)).to.be.reverted;
  });
});
