"use strict";

var _parcelBundler = require("parcel-bundler");

var _pug = _interopRequireDefault(require("pug"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Asset extends _parcelBundler.Asset {
  constructor(...parameter) {
    super(...parameter);
    this.type = 'js';
  }

  async generate() {
    // let configuration = await this.getConfig()
    let compiledFnSource = _pug.default.compileFileClient(this.name, {
      'name': 'templateFn'
    });

    return [{
      type: 'js',
      value: `export default function(locals) { ${compiledFnSource} return templateFn(locals) }`
    }];
  }

}

module.exports = Asset;
//# sourceMappingURL=asset.js.map