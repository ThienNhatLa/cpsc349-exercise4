import * as React from 'react'
import * as Server from 'react-dom/server'

let Greet = () => <h1>Hello, world!</h1>
console.log(Server.renderToString(<Greet />))

require('esbuild').build({
    entryPoints: ['app.jsx'],
    bundle: true,
    outfile: 'out.js',
}).catch(() => process.exit(1))