describe('Class API:', function () {
  describe('#addClass()', function () {
    let $ele = null
    before(function () {
      let div = document.createElement('div')
      div.id = 'addClass-hook'
      document.body.appendChild(div)
      $ele = document.querySelector('#addClass-hook')
    })
    it(`outils.addClass($ele, 'test') should return true`, function () {
      outils.addClass($ele, 'test')
      assert(outils.hasClass($ele, 'test'))
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
    })
    it(`outils.hasClass($ele, 'test') should return true`, function () {
      outils.hasClass($ele, 'test')
      assert(outils.hasClass($ele, 'test'))
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
    it(`outils.removeClass($ele, 'test') should return false`, function () {
      outils.removeClass($ele, 'test')
      assert.notEqual(outils.hasClass($ele, 'test'))
    })
    after(function () {
      document.body.removeChild($ele)
    })
  })
})