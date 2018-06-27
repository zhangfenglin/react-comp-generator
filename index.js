const commander = require('commander')
const generate = require('./lib/generate')

const pkg = require('./package.json')

commander
  .version(pkg.version)
  .option('-m, --module <module>', 'create modules')
  .parse(process.argv)

if (commander.module) {
  generate(commander.module)
}
