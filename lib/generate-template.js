const fs = require('fs')
const path = require('path')
const ejs = require('ejs')
const _ = require('lodash')
const log = (...args) => console.log('component-generator:', ...args)

module.exports = (root, moduleName, type) => {
  const cmpTemplate = fs.readFileSync(path.join(__dirname, '../', `templates/${type}.tp`))
  const result = ejs.render(cmpTemplate.toString(), {name: _.upperFirst(moduleName)})

  const filePath = path.join(root, 'index.js')
  log(filePath)

  fs.writeFile(filePath, result, (err) => {
    if (err) {
      log(err)
    }
  })
}
