// @remove-file-on-eject
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const babelJest = require('babel-jest');
const paths = require('../paths');

module.exports = babelJest.createTransformer({
  ...require(paths.babelrc),
  babelrc: false,
  configFile: false,
});
