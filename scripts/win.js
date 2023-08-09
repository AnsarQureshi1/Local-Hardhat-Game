// add the game address here and update the contract name if necessary
const gameAddr = "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82";
const contractName = "Game5";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // Specify a reasonable gas limit (you can adjust this value)
   
    //Game2
    // await game.setX(40);
    // await game.setY(10);

    //Game3
    // const tx = await game.win(45);

    //Game4
    // const tx = await game.win(56);
    // 210 + 56 = 266
    // 266 % 256 = 10 (remainder after dividing by 256)


    //Game5
    await game.giveMeAllowance(10000);
    await game.mint(10000);
    // Call the win function with the specified gas limit
    const tx = await game.win();

    // Check the transaction receipt
    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
