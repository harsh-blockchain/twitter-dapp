var TwitterContract = artifacts.require("TwitterContract");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(TwitterContract);
};
