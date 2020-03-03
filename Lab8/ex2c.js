var age = 21;
var count = 1;
while(count++ < age) {
    if((count > age/2) && (count < age*(3/4))) {
        throw new Error(count > age/2);
        process.exit();
    }
    console.log(count);
}
console.log("Don't ask me how old I am!");
//c) Rewrite your program in #2b to stop executing the program entirely (exit the process) 
//if the number is greater than half your age.
//When terminating it should output the line “Don’t ask how old I am!”

//Hint : this will require a single if-statement to throw an error or do a process.exit() call.