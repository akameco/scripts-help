// @flow
const fs = require('fs')
const readPkgUp = require('read-pkg-up')
const findUp = require('find-up')
const chalk = require('chalk')
const osLocale = require('os-locale')
const mm = require('micromatch')

const CONFIG_NAME = 'scripts-help'
const DEFAULT_CONFIG_FILE = `.${CONFIG_NAME}.json`

const getLocale = async () => {
  const locale = await osLocale()
  return locale.length < 2 ? locale : locale.slice(0, 2)
}

const getConfigName = async () => {
  const locale = await getLocale()
  return `.${CONFIG_NAME}.${locale}.json`
}

const create = async () => {
  const {
    pkg: { scripts },
  } = await readPkgUp()
  const keys = Object.keys(scripts).reduce(
    (acc, key) => Object.assign(acc, { [key]: '' }),
    {}
  )
  fs.writeFileSync(DEFAULT_CONFIG_FILE, JSON.stringify(keys, null, 2), 'utf8')
}

const help = async (patterns /* : string[] */ = ['*']) => {
  patterns = [].concat(patterns)
  const config = await getConfigName()
  const configPath =
    (await findUp(config)) || (await findUp(DEFAULT_CONFIG_FILE))
  const json = JSON.parse(fs.readFileSync(configPath, 'utf8'))
  const tasks = Object.keys(json)
    .reduce((acc, v) => [...acc, { name: v, description: json[v] }], [])
    .filter(task => mm.some(task.name, patterns))

  if (tasks.length === 0) {
    throw new Error(`No tasks for pattern "${patterns.join(' ')}" was found.`)
  }

  // eslint-disable-next-line no-console
  console.log(
    `${tasks
      .map(
        task =>
          `  ${chalk.bold(task.name)}\n${chalk.dim(
            task.description
              ? task.description
                  .split('\n')
                  .map(v => `      ${v.trim()}`)
                  .join('\n')
              : '      No description'
          )}`
      )
      .join('\n\n')}\n`
  )
}

module.exports = {
  help,
  create,
}
