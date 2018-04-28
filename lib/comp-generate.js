const fs = require('fs')
const path = require('path')
const ejs = require('ejs')
const _ = require('lodash')
const mkdirs = require('jm-mkdirs')
const config = require('config')
const log = (...args) => console.log('component-generator:', ...args)

module.exports = function compGenerate() {
  const moduleName = process.argv[2]
  const name = process.argv[3]

  const cmpTemplate = fs.readFileSync(path.resolve('templates/cmp-template.tp'))
  const result = ejs.render(cmpTemplate.toString(), {name})

  const componentPath = path.resolve(config.moduleRoot, moduleName, 'components')
  if (!fs.existsSync(componentPath)) {
    log(componentPath)
    mkdirs.sync(componentPath)
  }

  const filePath = path.join(componentPath, `${_.kebabCase(name)}.js`)
  log(filePath)

  fs.writeFile(filePath, result, (err) => {
    if (err) {
      log(err)
    }
  })
}
