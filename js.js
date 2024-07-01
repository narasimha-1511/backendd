const fs = require("fs");
const path = require("path");
// const data = fs.readFileSync("data.txt", "utf8");

// console.log("hehw" + data);

// fs.appendFileSync(
//   "data.txt",
//   " \n Hello World class is not going on",
//   "utf8",
//   (err) => {
//     console.log("error while writng the file");
//   }
// );

// fs.mkdir("hehe", (err) => {
//   if (err) console.log("error while creating the directory");
//   else console.log("directory created");
// });




//get the path of the folder 
const pathod = path.resolve();
const filePath = `${pathod}/hello.txt`;

// console.log(path.dirname(filePath));
// console.log(path.extname(filePath));


// fs.rename(filePath , `${pathod}/newDir/hello.txt` , (err) => {
//     if(err) console.log("error while renaming the file");
//     else console.log("file renamed");
// })

fs.copyFileSync(filePath , `${pathod}/newDir/hello.txt` , (err) => {
    if(err) console.log("error while copying the file");
    else console.log("file copied");
});

fs.unlink(filePath , (err) => {
    if(err) console.log("error while deleting the file");
    else console.log("file deleted");
})

