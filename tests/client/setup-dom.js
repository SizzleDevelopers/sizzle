require('babel-register')

const { JSDOM } = require('jsdom')

const dom = new JSDOM('<body></body>')

const localStorage = {}
dom.window.localStorage = {
  getItem: (key) => localStorage[key],
  setItem: (key, value) => localStorage[key] = value,
  removeItem: (key) => {delete localStorage[key]}
}

global.window = dom.window
global.document = dom.window.document
global.navigator = dom.window.navigator
