import _ from "@nomiclabs/hardhat-ethers"
import { ethers } from "hardhat"


async function deploy(){
    const C = ethers.getContractFactory("Counter")
    const counter = await (await C).deploy();
    console.log(await counter.count());
}

deploy();