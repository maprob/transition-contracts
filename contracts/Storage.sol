// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Storage is Ownable {

    mapping(address => uint256) public balance;

    function withdraw(uint256 amount) public onlyOwner {
        require(amount <= address(this).balance);
        (bool os, ) = payable(owner()).call{value: amount}("");
        require(os);
    }

    receive() external payable {
        balance[msg.sender] += msg.value;
    }
}

// 0x664A2AB46378028805822671D88626c0057663bB
// https://rinkeby.etherscan.io/address/0x664A2AB46378028805822671D88626c0057663bB#code