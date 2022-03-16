const os = require('os')

// console.log('Op. system:', os.platform())

// console.log('Arch. processor:', os.arch())

// console.log('Processor inf.:', os.cpus())

// console.log('Free memory:', os.freemem())

// console.log('all rmemory:', os.totalmem())

console.log('percentage of free memory:', os.freemem*100/os.totalmem)

console.log('Home dir:', os.homedir())

console.log('Swith on:', os.uptime())