// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.7;

contract Inbox {
    string public message;

    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    function setMessage(string memory newNessage) public {
        message = newNessage;
    }
}