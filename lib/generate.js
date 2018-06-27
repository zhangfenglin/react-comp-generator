const path = require('path')
const fs = require('fs')
const config = require('config')
const createModule = require('./create-module')

const moduleRoot = config.get('moduleRoot')

module.exports = (moduleName) => {
  console.log(moduleName)
  console.log({moduleRoot})

  const moduleRootPath = path.resolve(moduleRoot, moduleName)
  if (fs.existsSync(moduleRootPath)) {
    throw new Error(`module ${moduleName} exists.`)
  }

  createModule(moduleName)
}
