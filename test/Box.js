require("@nomicfoundation/hardhat-chai-matchers");
const { expect } = require('chai');

describe('Box', function () {
  before(async function () {
    this.Box = await ethers.getContractFactory('Box');
  });

  beforeEach(async function () {
    this.box = await this.Box.deploy();
  });

  it('Retrieve previous value stored', async function () {
    await this.box.store(43);
    expect(await this.box.retrieve()).to.equal(43);
  });

  it('store emits an event', async function () {
    await expect(this.box.store(17)).to.emit(this.box, 'ValueChanged').withArgs(17);
  });

  it('non owner cannot store a value', async function () {
    const [_, other] = await ethers.getSigners();
    await expect(this.box.connect(other).store(71)).to.be.revertedWith('Ownable: caller is not the owner');
  });
});
