var assert = require("assert")
describe('Another Test Suite', function(){
  describe('TestCase1', function(){
    it('should always fail', function(){
      assert.equal(3, 3);
      assert.equal(4, 3);
    })
  })
})

