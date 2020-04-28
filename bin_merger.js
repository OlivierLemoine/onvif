//@ts-check
/**
 * @typedef Buffer
 * @property _
 */

/**
 * @typedef FS
 * @property {function(string): Buffer} readFileSync
 * @property {function(string, string | Buffer)} writeFileSync
 * @property {function(string)} mkdirSync
 * @property {function(string): boolean} existsSync
 */

/**
* @type {FS}
*/
//@ts-ignore
const fs = require('fs');

//@ts-ignore
if (process.argv.length < 4) {
    console.log("Use 'node bin_merger.js <dir> <file>'");
    //@ts-ignore
    process.exit();
}

/**
 * @type {string}
 */
//@ts-ignore
const file_dir = process.argv[2];
/**
 * @type {string}
 */
//@ts-ignore
const file_path = process.argv[3];

let file = [];
let index = 0;
while (fs.existsSync(`${file_dir}/part_${index}`)) {
    //@ts-ignore
    file = [...file, ...fs.readFileSync(`${file_dir}/part_${index}`)];
    index += 1;
}

//@ts-ignore
let content = Buffer.from(file);
fs.writeFileSync(file_path, content);