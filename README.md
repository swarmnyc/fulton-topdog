## How to setup a new project using fulton-server
```
npm init
npm install fulton-server --save-dev

npm install typescript -g
tsc --init
```

Edit tsconfig.json:
```
{
    "compilerOptions": {
        /* Basic Options */
        "target": "es6",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'. */
        "module": "commonjs",                     /* Specify module code generation: 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
        "sourceMap": true,                     /* Generates corresponding '.map' file. */
        "outDir": "./build",                        /* Redirect output structure to the directory. */

        /* Strict Type-Checking Options */
        "strict": true,                            /* Enable all strict type-checking options. */
        "strictNullChecks": false,              /* Disable strict null checks. */

        /* Source Map Options */
        "sourceRoot": "./src"                    /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    }
}
```

Edit package.json:
```
    ...
    "main": "./build/app.js",
    "scripts": {
        "build": "tsc -p ./",
        "start": "ts-node ./src/app.ts",
    }
    ...
```

Create a file ./src/app.ts:
```
import { FultonApp, FultonAppOptions } from "fulton-server"

export class TopDogApp extends FultonApp {
    protected onInit(options: FultonAppOptions): void | Promise<void> {
        options.index.message = "Hello World!\n"
    }
}

let app = new TopDogApp();

app.start();
```

Start a HelloWorld:
```
npm start &
curl http://localhost:3000
```
