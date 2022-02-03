const Election = artifacts.require('./Election.sol')

contract('Election', function(accounts) { //  gets all accounts from users on the blockchain
  
  it('initializes with two candidates', () => {
    return Election.deployed().then( instance => {
      return instance.candidatesCount()
    }).then(count => {
      assert.equal(count,2)
    })
  })

  it('Each Candidate has correct values', async () => {
    const electionInstance = await Election.deployed()
    const candidate1 = await electionInstance.candidates(1)
    const candidate2 = await electionInstance.candidates(2)

    assert.equal(candidate1[0], 1, 'contains the correct ID')
    assert.equal(candidate1[1], 'Frankie Offenheimer', 'contains the correct name')
    assert.equal(candidate1[2], 0, 'contains the correct votes count')
    assert.equal(candidate2[0], 2, 'contains the correct ID')
    assert.equal(candidate2[1], 'Tabitha Schmidt', 'contains the correct name')
    assert.equal(candidate2[2], 0, 'contains the correct votes count')
  })
}) 