require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');

const {mnemonic, apiKey} = require('./env.json');

module.exports = {
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${apiKey}`,
      accounts: {mnemonic: mnemonic}
    }
  },

  solidity: '0.8.9',
};
