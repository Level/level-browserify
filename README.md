# level-browserify

> Fast & simple storage. A Node.js-style `LevelDB` wrapper that works in the browser too!

[![level badge][level-badge]](https://github.com/level/awesome)
[![npm](https://img.shields.io/npm/v/level-browserify.svg)](https://www.npmjs.com/package/level-browserify)
[![Build Status](https://secure.travis-ci.org/Level/level-browserify.png)](http://travis-ci.org/Level/level-browserify)
[![dependencies](https://david-dm.org/Level/level-browserify.svg)](https://david-dm.org/level/level-browserify)
[![npm](https://img.shields.io/npm/dm/level-browserify.svg)](https://www.npmjs.com/package/level-browserify)

* exports a function that returns a [`levelup instance`](https://github.com/level/levelup#ctor) when invoked
* bundles the current release of [`levelup`][levelup] and [`leveldown`][leveldown]/[`level-js`][level-js]
* leverages encodings using [`encoding-down`][encoding-down]

Use this package to avoid having to explicitly install `leveldown`/`level-js` when you just want to use `levelup` in node and in the browser.

In node.js you get `leveldown`, while in the browser you get `level-js` (through use of browserify's `browser` field setting in `package.json`).

```js
var level = require('level-browserify')

// 1) Create our database, supply location and options.
//    This will create or open the underlying LevelDB store/Indexedb Database
var db = level('./mydb')

// 2) put a key & value
db.put('name', 'Level', function (err) {
  if (err) return console.log('Ooops!', err) // some kind of I/O error

  // 3) fetch by key
  db.get('name', function (err, value) {
    if (err) return console.log('Ooops!', err) // likely the key was not found

    // ta da!
    console.log('name=' + value)
  })
})
```

## Contributing

Level-browserify is an **OPEN Open Source Project**. This means that:

> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

See the [CONTRIBUTING.md](https://github.com/Level/level-browserify/blob/master/CONTRIBUTING.md) file for more details.

### Contributors

Level-browserify, including LevelUP & LevelDOWN, is only possible due to the excellent work of the following contributors:

<table><tbody>
<tr><th align="left">Rod Vagg</th><td><a href="https://github.com/rvagg">GitHub/rvagg</a></td><td><a href="http://twitter.com/rvagg">Twitter/@rvagg</a></td></tr>
<tr><th align="left">John Chesley</th><td><a href="https://github.com/chesles/">GitHub/chesles</a></td><td><a href="http://twitter.com/chesles">Twitter/@chesles</a></td></tr>
<tr><th align="left">Jake Verbaten</th><td><a href="https://github.com/raynos">GitHub/raynos</a></td><td><a href="http://twitter.com/raynos2">Twitter/@raynos2</a></td></tr>
<tr><th align="left">Dominic Tarr</th><td><a href="https://github.com/dominictarr">GitHub/dominictarr</a></td><td><a href="http://twitter.com/dominictarr">Twitter/@dominictarr</a></td></tr>
<tr><th align="left">Max Ogden</th><td><a href="https://github.com/maxogden">GitHub/maxogden</a></td><td><a href="http://twitter.com/maxogden">Twitter/@maxogden</a></td></tr>
<tr><th align="left">Lars-Magnus Skog</th><td><a href="https://github.com/ralphtheninja">GitHub/ralphtheninja</a></td><td><a href="http://twitter.com/ralphtheninja">Twitter/@ralphtheninja</a></td></tr>
<tr><th align="left">David Björklund</th><td><a href="https://github.com/kesla">GitHub/kesla</a></td><td><a href="http://twitter.com/david_bjorklund">Twitter/@david_bjorklund</a></td></tr>
<tr><th align="left">Julian Gruber</th><td><a href="https://github.com/juliangruber">GitHub/juliangruber</a></td><td><a href="http://twitter.com/juliangruber">Twitter/@juliangruber</a></td></tr>
<tr><th align="left">Paolo Fragomeni</th><td><a href="https://github.com/hij1nx">GitHub/hij1nx</a></td><td><a href="http://twitter.com/hij1nx">Twitter/@hij1nx</a></td></tr>
<tr><th align="left">Anton Whalley</th><td><a href="https://github.com/No9">GitHub/No9</a></td><td><a href="https://twitter.com/antonwhalley">Twitter/@antonwhalley</a></td></tr>
<tr><th align="left">Matteo Collina</th><td><a href="https://github.com/mcollina">GitHub/mcollina</a></td><td><a href="https://twitter.com/matteocollina">Twitter/@matteocollina</a></td></tr>
<tr><th align="left">Pedro Teixeira</th><td><a href="https://github.com/pgte">GitHub/pgte</a></td><td><a href="https://twitter.com/pgte">Twitter/@pgte</a></td></tr>
<tr><th align="left">James Halliday</th><td><a href="https://github.com/substack">GitHub/substack</a></td><td><a href="https://twitter.com/substack">Twitter/@substack</a></td></tr>
</tbody></table>


## Licence

Copyright (c) 2012-2018 `level-browserify` contributors (listed above).

`level-browserify` is licensed under the MIT license. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE.md file for more details.

[level-badge]: http://leveldb.org/img/badge.svg
[levelup]: https://github.com/level/levelup
[leveldown]: https://github.com/level/leveldown
[level-js]: https://github.com/level/level-js
