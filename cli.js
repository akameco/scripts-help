#!/usr/bin/env node
/* eslint no-console: 0 */
const meow = require('meow')
const { create, help } = require('.')

const cli = meow(
  `
	Usage
	  $ scripts-help [input]

	Options
	  --create  create .scripts-help.json

	Examples
    $ scripts-help "build*"
      build       Build our main app
      build:demo  You can use JavaScript to write to task script too!
`,
  {
    flags: {
      create: {
        type: 'boolean',
      },
    },
  }
)

if (cli.flags.create) {
  create().catch(err => {
    console.error(err)
    process.exit(1) // eslint-disable-line no-process-exit
  })
} else {
  help(cli.input[0]).catch(err => {
    console.error(err)
    process.exit(1) // eslint-disable-line no-process-exit
  })
}
