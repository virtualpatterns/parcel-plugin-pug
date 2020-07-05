import Bundler from 'parcel-bundler'
import Pug from 'pug'
import Test from 'ava'

import Plugin from '../../index.js'

Test('Bundler(require.resolve(\'./source/source.js\'), { ... })', async (test) => {

  let bundler = new Bundler(require.resolve('./source/source.js'), {
    'cache': false,
    'outDir': `${__dirname}/target`,
    'outFile': 'target.js',
    'target': 'node',
    'watch': false,
    'logLevel': 0
  })

  await Plugin(bundler)
  await bundler.bundle()

  let { default: bundledContentFn } = await import(require.resolve('./target/target.js'))
  let unbundledContentFn = Pug.compileFile(require.resolve('./source/source.pug'))
  let data = { 'name': 'Bob' }

  test.is(bundledContentFn(data), unbundledContentFn(data))

})
