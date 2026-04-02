import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['src/index.ts'],
    tsconfig: 'tsconfig.build.json',
    outDir: 'dist',
    dts: true,
    clean: true,
    sourcemap: true,
    format: ['esm', 'cjs'],
  },
  {
    entry: ['src/jsx-runtime.ts'],
    tsconfig: '../../tsconfig.build.json',
    outDir: 'dist/jsx-runtime',
    dts: true,
    clean: true,
    sourcemap: true,
    format: ['esm', 'cjs'],
  },
])
