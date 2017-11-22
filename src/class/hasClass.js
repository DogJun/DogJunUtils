/**
 * @desc 判断元素是否有某个class
 * @param {HtmlElement} ele 
 * @param {String} cls
 * @return {Boolean}  
 */
function hasClass(ele, cls) {
  return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(ele.className)
}

module.exports = hasClass