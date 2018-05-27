require('level-packager/abstract/test')(require('tape'), require('./'), {
  skipRepairTest: true,
  skipErrorIfExistsTest: true,
  skipDestroyTest: true
})
