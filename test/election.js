const Election = artifacts.require('./Election.sol')

contract('Election', function(accounts) { //  gets all accounts from users on the blockchain
  
  it('initializes with two candidates', () => {
    return Election.deployed().then( instance => {
      return instance.candidatesCount()
    }).then(count => {
      assert.equal(count,2)
    })
  })

  it('Each Candidate has unique ID', () => {
    return Election.deployed().then(async instance => {
      const idOne = await instance.candidates(1).then(i => i[0].toString())
      const idTwo = await instance.candidates(2).then(i => i[0].toString())
      return idOne != idTwo ? true : false
    }).then(ids => {
      assert.isTrue(ids)
    })
  })

  it('Each Candidate vote count starts at 0', () => {
    return Election.deployed().then(async instance => {
      const voteCount1 = await instance.candidates(1).then(i => parseInt(i[2]))
      const voteCount2 = await instance.candidates(2).then(i => parseInt(i[2]))
      return voteCount1 === 0 && voteCount2 === 0 ? true : false
    }).then(votes => {
      assert.isTrue(votes)
    })
  })
}) 