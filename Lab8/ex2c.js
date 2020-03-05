var age = 21;
var count = 1;
while(count++ < age) {
    //stop executing the program entirely (exit the process)
    if(count > age/2) {
        process.exit();
        console.log("Don't ask how old I am!");
        continue;
    }
    console.log(count);
}
//if the number is greater than half your age.
//When terminating it should output the line “Don’t ask how old I am!”

//Hint : this will require a single if-statement to throw an error or do a process.exit() call.