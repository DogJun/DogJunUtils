describe('Random API:', function () {
  describe('#randomNum()', function () {
    it('10 <= dogjunutils.randomNum(10, 100) <= 100 should return true', function () {
      let num = dogjunutils.randomNum(10, 100)
      assert(num <= 100 && num > 10)
    })
  })
})