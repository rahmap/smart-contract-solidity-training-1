import "@nomiclabs/hardhat-ethers"
import { ethers } from "hardhat"

async function deploy() {
    const HelloWorld = await ethers.getContractFactory('HelloWorld');

    const hello = HelloWorld.deploy();
    await (await hello).deployed();

    return hello;
}

// @ts-ignore
async function sayHello(hello) {
    console.log('Say Hello', await hello.hello());
}

deploy().then(sayHello)