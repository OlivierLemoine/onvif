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
    console.log("Use 'node bin_slicer.js <file> <max_size>'");
    //@ts-ignore
    process.exit();
}

/**
 * @type {string}
 */
//@ts-ignore
const file_path = process.argv[2];
//@ts-ignore
const max_size = parseInt(process.argv[3]);

const dest_dir = `${file_path}_parts`;
if (!fs.existsSync(dest_dir)) {
    fs.mkdirSync(dest_dir);
}

//@ts-ignore
let content = [...fs.readFileSync(file_path)];
let index = 0;
while (content.length > 0) {
    const part = content.splice(0, max_size);

    //@ts-ignore
    fs.writeFileSync(`${dest_dir}/part_${index}`, Buffer.from(part));
    index += 1;
}