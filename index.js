const commander = require('commander')
// const compGenerate = require('./lib/comp-generate')

// compGenerate()

const log = (...args) => console.log('gen-code:', ...args)

const pkg = require('./package.json')

commander
  .version(pkg.version)
  .option('--init', 'Init Component')
  .parse(process.argv)

if (commander.init) {
  log('init ....')
}
