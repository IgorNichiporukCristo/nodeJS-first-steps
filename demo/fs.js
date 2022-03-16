const fs = require('fs')
const path = require('path')


// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if(err){
//     throw err
//   }
//   console.log('Папка создана')
// })  
const filePath = path.join(__dirname, "test", 'text.txt')

// fs.writeFile(filePath, 'hello nodeJs!', err =>{
//   if (err) {
//     throw err
//   }

//   console.log('Файл создан')
// })

// fs.appendFile(filePath, '\nhello again', err =>{
//   if (err) {
//     throw err
//   }

//   console.log('Файл изменён')
// })

fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    throw err
  }
  console.log(content)
  // const data = Buffer.from(content)
  // console.log('Content:' , data.toString())
})