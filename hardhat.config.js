require("@nomiclabs/hardhat-waffle");
//require('dotenv').config({ path: __dirname + '/.env' });
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const ALCHEMY_API_KEY = "EmQroN4Zy5EYBbcD5m1YodQJNZdAz4OV";
const PRIVATE_KEY = "c51713e305ea54587e21af9f14b9a8e6b8c25f5f1923f25d3f7fd92176c532b4";

module.exports = {
  solidity: "0.8.0",
  paths: {
    artifacts: "./client/src/artifacts",
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/EmQroN4Zy5EYBbcD5m1YodQJNZdAz4OV`,
      accounts: [`c51713e305ea54587e21af9f14b9a8e6b8c25f5f1923f25d3f7fd92176c532b4`]
    },
  }
}
