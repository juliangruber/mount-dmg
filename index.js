'use strict'

const cp = require('child_process')
const { promisify } = require('util')
const escape = require('shell-escape')

const exec = promisify(cp.exec)

module.exports = async path => {
  const { stdout } = await exec(escape(['hdiutil', 'attach', path]))
  const [diskPath, , volumePath] = stdout
    .trim()
    .split('\n')
    .pop()
    .split(/\t+/)
  const unmount = () => exec(escape(['hdiutil', 'detach', diskPath]))
  return { diskPath, volumePath, unmount }
}
