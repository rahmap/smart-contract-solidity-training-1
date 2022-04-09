// SPDX-license-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Score {
    uint private score = 5;
    address owner;

    constructor(){
        score = 1;
        owner = msg.sender;
    }

    modifier Fee(uint fee){
        if(msg.value == fee){
            _;
        }
    }

    modifier onlyOwner {
        if(msg.sender == owner){
            _;
         }
    }

    function getScore() public returns (uint) {
        console.log("Score", score);
        return score;
    }

    function setScore(uint newScore) public onlyOwner {
        score = newScore;
    }
}