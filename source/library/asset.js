import { Asset as BaseAsset } from 'parcel-bundler'
import { format as Format } from 'prettier'
import Path from 'path'
import Pug from 'pug'

class Asset extends BaseAsset {

  constructor(...parameter) {
    super(...parameter)
    this.type = 'js'
  }

  async generate() {

    // let configuration = await this.getConfig()

    let source = null
    
    source = Pug.compileClient(this.contents, { 
      'filename': this.relativeName,      
      'basedir': Path.dirname(this.name),
      'name': 'templateFn' 
    })

    source = `export default function(locals) { ${source} return templateFn(locals) }`

    source = Format(source, {
      'bracketSpacing': true,
      'parser': 'babel',
      'printWidth': 100,
      'singleQuote': true,
      'tabWidth': 2,
      'trailingComma': 'none'
    })

    return [{
      type: 'js',
      value: source
    }] 
  
  }

}

module.exports = Asset