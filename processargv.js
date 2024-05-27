// user give input you are use input as  parameter
// console.log(process.argv)

let arg=process.argv;

for(let i=2;i<arg.length;i++){
    console.log("heeloo", arg[i] )
}