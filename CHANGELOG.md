# Changelog

## [Unreleased]

## [2.0.0-rc1] - 2018-05-29

### Changed
* Upgrade `leveldown` from `^3.0.0` to `^4.0.0` (@greenkeeper)
* Upgrade `level-packager` from `~1.2.0` to `~3.1.0` (@ralphtheninja)
* Upgrade `level-js` from `~2.1.6` to `3.0.0-rc1` (@ralphtheninja)
* Use proper version range for `tape` (@ralphtheninja)
* Homogenize README headers, add table of contents and document the api (@ralphtheninja)
* Separate tests into node and browser specific versions (@ralphtheninja)
* Import `levelup` integration tests from `level-js` (@ralphtheninja)
* Be explicit when running tests from `level-packager` (@ralphtheninja)

### Added
* Add node 9 and 10 to Travis (@ralphtheninja)
* Add `airtap` for local browser testing (@ralphtheninja)
* Add `standard` for linting (@ralphtheninja)

### Removed
* Remove node 0.12, 4, 5 and 7 from Travis (@ralphtheninja)

## [1.1.2] - 2018-03-20

### Changed
* Upgrade `leveldown` from `^1.4.1` to `^3.0.0` (@ralphtheninja)
* Simplify `level-packager` call for `level-js` (@rh0)
* Ignore `package-lock.json` (@ralphtheninja)

### Added
* Add Greenkeeper badge (@ralphtheninja)
* Add node 8 to Travis (@ralphtheninja)

## [1.1.1] - 2017-05-19

### Added
* Add gcc-4.8 to Travis (@ralphtheninja)
* Add node 6 and 7 to Travis (@ralphtheninja)
* Update copyright year (@ralphtheninja)

### Removed
* Remove node 0.10, 1.0, 1.8, 2 and 3 from Travis (@ralphtheninja)

## [1.1.0] - 2015-12-10

### Changed
* Upgrade `level-packager` from `~1.1.0` to `~1.2.0` (@ralphtheninja)

### Added
* Add node 1.0, 2, 3, 4 and 5 to Travis (@ralphtheninja)
* Add dependency badge (@ralphtheninja)

### Removed
* Remove `node-gyp-install` from Travis (@ralphtheninja)

## [1.0.2] - 2015-12-10

### Changed
* Use `^` to track `level-js` (@mafintosh)

## [1.0.1] - 2015-09-20

### Changed
* Upgrade `leveldown` from `~1.2.2` to `^1.4.1` (@jimkang)

## [1.0.0] - 2015-06-09

### Changed
* Upgrade `level-packager` from `~0.19.0` to `~1.1.0` (@mcollina)
* Upgrade `leveldown` from `~0.10.0` to `~1.2.2` (@mcollina)
* Make sure dependencies use `~` range (@mcollina)
* Update nodei.co links in README (@mcollina)
* Put back `nvm` on Travis and use `node-gyp-install` to get correct headers (@ralphtheninja)

## [0.19.1] - 2015-05-05

### Changed
* Change license from MIT +no-false-attribs to MIT (@ralphtheninja)
* Update `Level` -> `Level-browserify` in README (@ralphtheninja)
* Use `n` instead of `nvm` for iojs support and native modules (@ralphtheninja)

### Added
* Add node 0.12 and iojs to Travis (@ralphtheninja)

## [0.19.0] - 2015-05-04

### Changed
* Update logo and copyright (@ralphtheninja)
* Upgrade `level-js` from `~1.1.2` to `^2.1.6` (@mafintosh)
* Upgrade `level-packager` from `~0.18.0` to `~0.19.0` (@ralphtheninja)

### Added
* Add support for node 0.8 (@mafintosh)

## [0.18.1] - 2014-04-17

### Changed
* Update README (@maxogden, @mcollina)
* Skip tests not runnable in the browser (@mcollina)

### Fixed
* Make `browserify` work properly (@JamesKyburz)

## 0.18.0 - 2013-11-18

:seedling: Initial release.

[Unreleased]: https://github.com/level/level-browserify/compare/v2.0.0-rc1...HEAD
[2.0.0-rc1]: https://github.com/level/level-browserify/compare/v1.1.2...v2.0.0-rc1
[1.1.2]: https://github.com/level/level-browserify/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/level/level-browserify/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/level/level-browserify/compare/v1.0.2...v1.1.0
[1.0.2]: https://github.com/level/level-browserify/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/level/level-browserify/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/level/level-browserify/compare/v0.19.1...v1.0.0
[0.19.1]: https://github.com/level/level-browserify/compare/v0.19.0...v0.19.1
[0.19.0]: https://github.com/level/level-browserify/compare/v0.18.1...v0.19.0
[0.18.1]: https://github.com/level/level-browserify/compare/v0.18.0...v0.18.1
