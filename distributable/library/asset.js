"use strict";

var _parcelBundler = require("parcel-bundler");

var _prettier = require("prettier");

var _path = _interopRequireDefault(require("path"));

var _pug = _interopRequireDefault(require("pug"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Asset extends _parcelBundler.Asset {
  constructor(...parameter) {
    super(...parameter);
    this.type = 'js';
  }

  async generate() {
    // let configuration = await this.getConfig()
    let source = null;
    source = _pug.default.compileClient(this.contents, {
      'filename': this.relativeName,
      'basedir': _path.default.dirname(this.name),
      'name': 'templateFn'
    });
    source = `export default function(locals) { ${source} return templateFn(locals) }`;
    source = (0, _prettier.format)(source, {
      'bracketSpacing': true,
      'parser': 'babel',
      'printWidth': 100,
      'singleQuote': true,
      'tabWidth': 2,
      'trailingComma': 'none'
    });
    return [{
      type: 'js',
      value: source
    }];
  }

}

module.exports = Asset;
//# sourceMappingURL=asset.js.map