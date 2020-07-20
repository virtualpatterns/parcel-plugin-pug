import FileSystem from 'fs-extra'
import { format as Format } from 'prettier'
import Path from 'path'
import Pug from 'pug'
import Source from 'source-map-support'

Source.install({ 'environment': 'node', 'handleUncaughtExceptions': false, 'hookRequire': false })

async function main() {

  try {

    let path = require.resolve('../test/library/source/source.pug')
    let source = null

    // source = Pug.compileFileClient(path)
    // source = Format(source, {
    //   'bracketSpacing': true,
    //   'parser': 'babel',
    //   'printWidth': 100,
    //   'singleQuote': true,
    //   'tabWidth': 2,
    //   'trailingComma': 'none'
    // })

    // console.log('compileFileClient')
    // console.log(source)

    let content = await FileSystem.readFile(path, { 'encoding': 'utf-8' })

    source = Pug.compileClient(content, {
      'filename': Path.basename(path),
      'basedir': Path.dirname(path),
      'name': 'templateFn'
    })

    source = Format(source, {
      'bracketSpacing': true,
      'parser': 'babel',
      'printWidth': 100,
      'singleQuote': true,
      'tabWidth': 2,
      'trailingComma': 'none'
    })

    console.log('compileClient')
    console.log(source)

    // requires enclosin fn

  } catch (error) {
    console.error(error)
  }

}

main()
