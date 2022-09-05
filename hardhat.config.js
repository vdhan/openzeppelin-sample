require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');
require('hardhat-gas-reporter');

const {mnemonic, infura, coinMarketCap, reportGas} = require('./env.json');

module.exports = {
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${infura}`,
      accounts: {mnemonic: mnemonic},
      gasPrice: 5000000000
    }
  },

  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true
      }
    }
  },

  gasReporter: {
    enabled: reportGas ? true : false,
    currency: 'VND',
    token: 'BNB',
    gasPrice: 5,
    coinmarketcap: coinMarketCap
  }
};
