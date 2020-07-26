/**
 * @author 18级计科一班 雷晨龙
 */

import marked from 'marked'

/**
 * Rendering configuration for marked
 * In order to facilitate use the following functions, it is recommended to add your own class name
 * @param {object} param0
 * @returns {object}
 */
export const renderConfigMarked = ({
  hClassName = 'markdown-h',
  pClassName = 'markdown-p',
  imgClassName = 'markdown-img',
  aClassName = 'markdown-a',
  strongClassName = 'markdown-strong'
}) => ({
  heading (text, level, raw, slugger) {
    text = text.replace(/<(\/)?u>/g, '')
    return `<h${level} class="${hClassName}${level}">${text}</h${level}>`
  },
  paragraph (text) {
    text = text.replace(/<(\/)?u>/g, '')
    return `<p class="${pClassName}">${text}</p>`
  },
  image (href, title, text) {
    return `<img class="${imgClassName}" src="${href}"></img>`
  },
  link (href, title, text) {
    return `<a class="${aClassName}" href="${href}">${text}</a>`
  },
  strong (text) {
    text = text.replace(/<(\/)?u>/g, '')
    return `<strong class="${strongClassName}">${text}</strong>`
  }
})

/**
 * Get checked list and html
 * @param {object} renderer
 * @param {string} markdown Markdown string
 * @param {string} checkKey The key you need
 * @param {string} route The route you want to go
 * @param {string} pClassName paragraph class name
 * @return {string}
 */
export const getCheckInfo = (renderer, markdown, checkKey, path, pClassName, pageName) => {
  const re = new RegExp(checkKey, 'g')
  let index = -1
  const checked = []
  marked.use({ renderer })
  const tokens = marked.lexer(markdown)
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i].type === 'paragraph') {
      index++
      const tmp = tokens[i].tokens
      for (let j = 0; j < tmp.length; j++) {
        let text = tmp[j].text
        if (tmp[j].type === 'text' && re.test(text)) {
          text = text.replace(re, `<mark>${checkKey}</mark>`)
          tmp[j].text = text
          checked.push({
            path,
            pClassName,
            index,
            text,
            pageName
          })
        }
      }
    }
  }
  console.log(checked)
  return {
    html: marked.parser(tokens),
    checkedList: checked
  }
}

/**
 * Window scroll to the position of checked key
 * @param {object} that A Vue object
 * @param {Array} checkedList The value returned by the getcheckinfo function
 * @param {number} checkedIndex
 */
export const scrollToChecked = (that, checkedList, checkedIndex) => {
  that.$nextTick(() => {
    that.$router.push(checkedList[checkedIndex].path)
    window.scrollTo(0, document.querySelectorAll(`.${checkedList[checkedIndex].pClassName}`)[checkedList[checkedIndex].index].offsetTop)
  })
}
