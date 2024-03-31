async function main() {
    const IgoToken = await ethers.getContractFactory("Token");
    const igo_token = await IgoToken.deploy();
    console.log("Contract Deployed to Address:", igo_token.address);
  }
  main()
    // .then(() => process.exit(0))
    // .catch(error => {
    //   console.error(error);
    //   process.exit(1);
    // });