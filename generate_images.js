#!/usr/bin/env node

'use strict'

const fs   =  require('fs')
const path = require('path')

const imagesPath = path.join('docs', 'modules', 'ROOT', 'images')
let count = process.argv[2] || 80000

// clear out any previously copied images
let files = fs.readdirSync(imagesPath)
files.map((file) => {
  if (file.match(/p-.*\.gif/)) {
    const imgPath = path.join(imagesPath, file)
    fs.rmSync(imgPath)
  }
})

// Copy the include image the specified number of times
const pPath = path.join(imagesPath, 'p.gif')
for (let x = 1; x <= count; x++) {
  let num = `0000000${x}`.slice(0 - count.toString().length)
  const imgPath = path.join(imagesPath, `p-${num}.gif`)
  fs.copyFileSync(pPath, imgPath)
}
