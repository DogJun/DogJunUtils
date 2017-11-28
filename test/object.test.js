console.log(dogjunutils)
describe('Object API:', function () {
  describe('#isEmptyObject()', function () {
    it('dogjunutils.isEmptyObject({}) should return true', function () {
      assert(dogjunutils.isEmptyObject({}))
    })

    it('dogjunutils.isEmptyObject({ one: 1}) should return false', function () {
      assert.notEqual(dogjunutils.isEmptyObject({one: 1}))
    })

    it('dogjunutils.isEmptyObject([]) should return false', function () {
      assert.notEqual(dogjunutils.isEmptyObject([]))
    })
  })
})
