const rollup = require('rollup')
const rollupJson = require('rollup-plugin-json')

let inputOptions = {
    input: 'src/entry.js',
    plugins: [
        rollupJson()
    ]
}
let outputOptions = {
    file: 'dest/bundle.js',
    format: 'umd'
}
let watchOptions = Object.assign({
    output: [outputOptions],
    watch: {
        chokidar: true
    }
}, inputOptions);

const rollupBuild = () => {
    return rollup.rollup(inputOptions).then((bundle) => {
        // return bundle.generate(outputOptions)  // { code, map }
        return bundle.write(outputOptions)
    }).then(() => {
        console.log('rollup build success.')
    }).catch((err) => {
        throw err;
    });
}

const rollupWatch = () => {
    const watcher = rollup.watch(watchOptions).on('event', (event) => {
        // event.code: START, BUNDLE_START, BUNDLE_END, END, ERROR, FATAL
        console.log(event);
    });
    // watcher.close();
    return watcher;
}

// rollupBuild();
rollupWatch();