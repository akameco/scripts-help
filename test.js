// @flow
const fs = require('fs')
const { help, create } = require('.')

const spyLog = jest.spyOn(console, 'log').mockImplementation(v => v)
const writeSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(v => v)

test('help snapshot', async () => {
  await help()
  expect(spyLog.mock.calls[0][0]).toMatchSnapshot()
})

test('create snapshot', async () => {
  await create()
  expect(writeSpy.mock.calls[0][1]).toMatchSnapshot()
})
