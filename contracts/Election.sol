// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;

contract Election {
  // Model a candidate
  struct Candidate { // struct is like a class
    uint id;
    string name;
    uint voteCount;
  }
  
  // Store candidates
  // Fetch candidates
  // creating a map(associative array) - each key is a uint with value being a candidate - publicly accessible - name of the map is 'candidates'
  // when adding candidate to map, we are changing the state of our smart contract, and writing to the data layer of the blockchain
  mapping(uint => Candidate) public candidates;
  // Store number of candidates to allow us to fetch each from the mapping
  uint public candidatesCount;

  constructor() public {
    addCandidate('Frankie Offenheimer');
    addCandidate('Tabitha Schmidt');
  }

  // _name in parameter so as not to clash with name in Candidate struct. it's a local var, not state var
  // private - can only be called by this Election contract
  function addCandidate(string memory _name) private {
    candidatesCount++;
    candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
  }

}