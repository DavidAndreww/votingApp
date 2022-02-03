// Migration files will migrate the Smart Contract TO the Blockchain (created locally by truffle, in this case)
// We always prefix the files in migration directory with a number, so truffle knows what order to run them in 

// reading contract that we need from the contract directory
// 'artifcats' represents the contract abstraction, specific to truffle
const Election = artifacts.require('./Election.sol');

module.exports = function(deployer) {
  deployer.deploy(Election);
};

// run tuffle migrate in CLI to migrate the contracts (by way of migration files) to the blockchain