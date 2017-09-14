import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'

export default {
    input: 'src/entry.js',
    plugins: [
        commonjs(),
        resolve(),
        json(),
        babel({
            exclude: 'node_modules/**',
            babelrc: false,
            presets: [
                ['env', {modules: false}]
            ]
        })
    ],
    external: id => { // Function or Array, ['lodash', 'jquery']
        return /lodash|jquery/.test(id)
    },
    banner: '/* begin */',
    footer: '/* end */',
    output: { // 有多个输出时为数组
        file: 'dest/bundle.js',
        format: 'umd', // amd, cjs, es, iife, umd
        // name: 'exportToGlobalName', // iife, umd 时输出名
        // globals: { // iife, umd
        //     jquery: '$'
        // },
        sourcemap: true
    },
    watch: {
        chokidar: true,
        // include: ['src/**'],
        exclude: [
            'node_modules/**'
        ]
    }
}