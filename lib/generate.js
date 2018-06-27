const path = require('path')
const fs = require('fs')
const createModule = require('./create-module')
const constants = require('./constants')
const moduleRoot = constants.moduleRoot

module.exports = (moduleName) => {
  const moduleRootPath = path.resolve(moduleRoot, moduleName)
  if (fs.existsSync(moduleRootPath)) {
    throw new Error(`module ${moduleName} exists.`)
  }

  createModule(moduleName)
}
