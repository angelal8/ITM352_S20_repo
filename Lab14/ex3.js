var fs = require('fs');
var express = require('express');
var app = express();
var myParser = require("body-parser");

var user_info_file = './user_data.json';

if (fs.existsSync(user_info_file)) {
    var file_stats = fs.statSync(user_info_file);

    var data = fs.readFileSync(user_info_file, '.utf-8');
    var userdata = JSON.parse(data);

    console.log(userdata["kazman"]["password"], userdata.kazman.email);
    
    console.log(`${user_info_file} has ${file_stats.size} characters`);
} else {
    console.log("Hey! " + user_info_file + " doesn't exist!");
}

app.use(myParser.urlencoded({ extended: true }));

app.get("/login", function (request, response) {
    // Give a simple login form
    str = `
<body>
<form action="/check_login" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
 });

app.post("/check_login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not
    console.log(request.body, data);
    var login_username = request.body["username"];
    // Check if username exists in reg data. If so, check if password matches
    if(typeof userdata[login_username] != 'undefined') {
        var user_info = userdata[login_username];
        // Check is password stored for username matches what user typed in
        if(user_info["password"] == request.body["password"]) {
            response.end(`${request.body["password"]} is not the right password!`);    
        } else {
            response.end(`${login_username} is logged in.`);
        }
        
    } else {
        err_str = `${login_username} does not exist! Please register.`;
    }
        response.redirect(`./login?${username}=${login_username}&error=${err_str}');
});

app.listen(8080, () => console.log(`listening on port 8080`));
