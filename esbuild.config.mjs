import * as esbuild from 'esbuild'

const watch = process.argv.includes('--watch')

const ctx = await esbuild.context({
  entryPoints: ['src/client/main.js'],
  bundle: true,
  outfile: 'public/bundle.js',
})

if (watch) {
  await ctx.watch()
  console.log('Watching...')
} else {
  await ctx.rebuild()
  await ctx.dispose()
}