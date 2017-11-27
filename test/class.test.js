describe('Class API:', function () {
  describe('#addClass()', function () {
    let $ele = null
    before(function () {
      let div = document.createElement('div')
      div.id = 'addClass-hook'
      document.body.appendChild(div)
      $ele = document.querySelector('#addClass-hook')
    })
    it(`dogjunutils.addClass($ele, 'test') should return true`, function () {
      dogjunutils.addClass($ele, 'test')
      assert(dogjunutils.hasClass($ele, 'test'))
    })
    after(function () {
      document.body.removeChild($ele)
    })
  })

  describe('#hasClass()', function () {
    let $ele = null
    before(function () {
      let div = document.createElement('div')
      div.id = 'hasClass-hook'
      document.body.appendChild(div)
      $ele = document.querySelector('#hasClass-hook')
      dogjunutils.addClass($ele, 'test')
    })
    it(`dogjunutils.hasClass($ele, 'test') should return true`, function () {
      dogjunutils.hasClass($ele, 'test')
      assert(dogjunutils.hasClass($ele, 'test'))
    })
    after(function () {
      document.body.removeChild($ele)
    })
  })

  describe('#removeClass()', function () {
    let $ele = null
    before(function () {
      let div = document.createElement('div')
      div.id = 'removeClass-hook'
      document.body.appendChild(div)
      $ele = document.querySelector('#removeClass-hook')
    })
    it(`dogjunutils.removeClass($ele, 'test') should return false`, function () {
      dogjunutils.removeClass($ele, 'test')
      assert.notEqual(dogjunutils.hasClass($ele, 'test'))
    })
    after(function () {
      document.body.removeChild($ele)
    })
  })
})