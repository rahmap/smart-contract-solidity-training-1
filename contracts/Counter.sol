// SPDX-license-Identifier: Unlicense

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    uint private counter;

    function count() public returns(uint) {
        counter++;
        console.log("Counter", counter);
        return counter;
    }
}