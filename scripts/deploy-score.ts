import "@nomiclabs/hardhat-ethers"
import { ethers } from "hardhat"

async function deploy() {
    const Score = await ethers.getContractFactory('Score');

    const s = Score.deploy();
    await (await s).deployed();

    return s;
}

// @ts-ignore
async function printScore(s) {
    await s.setScore(8)
    console.log('Say s', await s.getScore());
}

deploy().then(printScore)