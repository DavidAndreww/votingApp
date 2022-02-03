// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;

contract Election {
  // Constructor to 1: Store candidate, 2: Read candidate
  string public candidate;
  constructor() public {
    candidate = 'Frankie Offenheim';
  }
}