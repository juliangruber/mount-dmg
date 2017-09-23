'use strict'

const mount = require('.')

const path = process.argv[2]
if (!path) {
  console.error('Usage: node example.js DMG')
  process.exit(1)
}

mount(path).then(({ diskPath, volumePath, unmount }) => {
  console.log({ diskPath, volumePath })
  return unmount()
})
