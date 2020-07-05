"use strict";

var _parcelBundler = _interopRequireDefault(require("parcel-bundler"));

var _prettier = require("prettier");

var _pug = _interopRequireDefault(require("pug"));

var _ava = _interopRequireDefault(require("ava"));

var _index = _interopRequireDefault(require("../../index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(0, _ava.default)('import(require.resolve(\'./target/target.js\')', async test => {
  let unbundledContentFn = _pug.default.compileFile(require.resolve('./source/source.pug'));

  let data = {
    'name': 'Bob'
  };
  test.log(`unbundledContentFn(...) = '${unbundledContentFn(data)}'`);
  let bundler = new _parcelBundler.default(require.resolve('./source/source.js'), {
    'cache': false,
    'outDir': `${__dirname}/target`,
    'outFile': 'target.js',
    'target': 'node',
    'watch': false,
    'logLevel': 0
  });
  await (0, _index.default)(bundler);
  await bundler.bundle();
  let {
    default: bundledContentFn
  } = await Promise.resolve(`${require.resolve('./target/target.js')}`).then(s => _interopRequireWildcard(require(s)));
  test.log(`bundledContentFn(...) = '${bundledContentFn(data)}'`);
  test.is(bundledContentFn(data), unbundledContentFn(data));
});
//# sourceMappingURL=asset.test.js.map