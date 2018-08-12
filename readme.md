# scripts-help

[![Build Status](https://travis-ci.org/akameco/scripts-help.svg?branch=master)](https://travis-ci.org/akameco/scripts-help)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> help for npm scripts

<img src="./media/demo.png"/>

## Install

```
$ npm i -g scripts-help
```

## Usage

package.json

```json
{
  "scripts": {
    "start": "...",
    "build": "...",
    "build:dev": "...",
    "help": "npx scripts-help"
  }
}
```

```
npm run help
```

## Locale

`.scripts-help.ja.json`

```json
{
  "start": "アプリケーションを実行します。先にbuildを実行してください",
  "build": "ビルドを実行",
  "build:dev": "dev環境向けにビルドを実行",
  "help": "ヘルプを表示"
}
```

## Create

create `.scripts-help.json` from `package.json`.

```
npm run help --create
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub>akameco</sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/scripts-help/commits?author=akameco "Code") [📖](https://github.com/akameco/scripts-help/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/scripts-help/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
