const mkdirs = require('jm-mkdirs')
const path = require('path')
const config = require('config')
const generateTemplate = require('./generate-template')
const CONSTANTS = require('./constants')

const moduleRoot = CONSTANTS.moduleRoot

module.exports = (moduleName) => {
  const actionsPath = path.resolve(moduleRoot, moduleName, CONSTANTS.ACTIONS)
  mkdirs.sync(actionsPath)
  generateTemplate(actionsPath, moduleName, CONSTANTS.ACTIONS)

  const reducersPath = path.resolve(moduleRoot, moduleName, CONSTANTS.REDUCERS)
  mkdirs.sync(reducersPath, CONSTANTS.REDUCERS)
  generateTemplate(reducersPath, moduleName, CONSTANTS.REDUCERS)

  const componentsPath = path.resolve(moduleRoot, moduleName, CONSTANTS.COMPONENTS)
  mkdirs.sync(componentsPath)
  generateTemplate(componentsPath, moduleName, CONSTANTS.COMPONENTS)

  const constantsPath = path.resolve(moduleRoot, moduleName, CONSTANTS.CONSTANTS)
  mkdirs.sync(constantsPath)
  generateTemplate(constantsPath, moduleName, CONSTANTS.CONSTANTS)

  generateTemplate(path.resolve(moduleRoot, moduleName), moduleName, 'index')
}
