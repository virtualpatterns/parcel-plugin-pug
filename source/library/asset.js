import { Asset as BaseAsset } from 'parcel-bundler'
import Pug from 'pug'

class Asset extends BaseAsset {

  constructor(...parameter) {
    super(...parameter)
    this.type = 'js'
  }

  async generate() {

    // let configuration = await this.getConfig()

    let compiledFnSource = Pug.compileFileClient(this.name, { 'name': 'templateFn' })

    return [{
      type: 'js',
      value: `export default function(locals) { ${compiledFnSource} return templateFn(locals) }`
    }] 
  
  }

}

module.exports = Asset