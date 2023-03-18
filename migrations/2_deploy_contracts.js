const EcommerceStore = artifacts.require('EcommerceStore');
 
const { deployProxy } = require('../app/node_modules/@openzeppelin/truffle-upgrades'); 
module.exports = async function (deployer) {
  await deployProxy(EcommerceStore, [0], { deployer, initializer: 'store' });
};