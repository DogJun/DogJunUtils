/**
 * @desc 为元素添加class
 * @param {HtmlElement} els 
 * @param {String} cls 
 */
let hasClass = require('./hasClass')

function addClass (ele, cls) {
  if (!hasClass(ele, cls)) {
    ele.className += ' ' + cls
  }
}

module.exports = addClass