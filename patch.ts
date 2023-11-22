
import { readFileSync, writeFileSync } from 'node:fs'

const indexPath = 'dist/index.js'
let code = readFileSync(indexPath, 'utf-8')

const matchMixed = code.match(/\nexports.default = (\w+);/)
if (matchMixed) {
    const name = matchMixed[1]

    const lines = code.trimEnd().split('\n')

    // search from the end to prepend `modules.` to `export[xxx]`
    for (let i = lines.length - 1; i > 0; i--) {
        if (lines[i].startsWith('exports')) lines[i] = 'module.' + lines[i]
        else {
            // at the beginning of exports, export the default function
            lines[i] += `\nmodule.exports = ${name};`
            break
        }
    }

    writeFileSync(indexPath.replace('.js', '.cjs'), lines.join('\n'))

    console.log(`${indexPath} CJS patched`)
    process.exit(0)
}

const matchDefault = code.match(/\nmodule.exports = (\w+);/)

if (matchDefault) {
    code += `module.exports.default = ${matchDefault[1]};\n`
    writeFileSync(indexPath, code)
    console.log(`${indexPath} CJS patched`)
    process.exit(0)
}

console.error(`${indexPath} CJS patch failed`)
process.exit(1)