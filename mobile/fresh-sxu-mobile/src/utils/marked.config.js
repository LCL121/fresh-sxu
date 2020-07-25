/**
 * Rendering configuration for marked
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
    return `<h${level} class="${hClassName}">${text}</h${level}>`
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
