
# mount-dmg

Mount a `.dmg` file in macOS.

## Example

```js
const mount = require('mount-dmg')

const { diskPath, volumePath, unmount } = await mount('./app.dmg')

console.log({ diskPath, volumePath })
// { diskPath: '/dev/disk3s3', volumePath: '/Volumes/Nightly' }

await unmount()
```

## Installation

```bash
$ npm install mount-dmg
```

## API

### mount(path) => { diskPath, volumePath, unmount }

## License

MIT
