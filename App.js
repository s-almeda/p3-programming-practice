/*
PROJECT 2
Template code for CS160 Summer 2022
Prepared by Shm Garanganao Almeda 

Code referenced from: 
CS160 Summer 2021
https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module"
https://expressjs.com/en/starter/hello-world.html
https://codeforgeek.com/render-html-file-expressjs/
https://stackoverflow.com/questions/32257736/app-use-express-serve-multiple-html

Photo Credits:
Bunny by Satyabratasm on Unsplash <https://unsplash.com/photos/u_kMWN-BWyU>
*/

//Node modules to *require*
//if these cause errors, be sure you've installed them, ex: 'npm install express'
const express = require('express');
const app = express();
const path = require('path');

//specify that we want to run our website on 'http://localhost:8000/'
const host = 'localhost';
const port = 8000;

var publicPath = path.join(__dirname, 'public'); //get the path to use our "public" folder where we stored our html, css, images, etc
app.use(express.static(publicPath));  //tell express to use that folder



//here's where we specify what to send to users that connect to our web server...
//if there's no url extension, it will show "index.html"
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/"));
});

// -- URL NAVIGATION -- //
//depending on what url extension the user navigates to, send them the respective html file. 

/** You can add your own URLS here **/

app.get('/t1', function (req, res) {
    res.sendFile(publicPath + '/t1.html');
});
app.get('/t2', function (req, res) {
    res.sendFile(publicPath + '/t2.html');
});
app.get('/t3', function (req, res) {
    res.sendFile(publicPath + '/t3.html');
});
app.get('/t4', function (req, res) {
    res.sendFile(publicPath + '/t4.html');
});
app.get('/t6', function (req, res) {
    res.sendFile(publicPath + '/t6.html');
});
app.get('/t7', function (req, res) {
    res.sendFile(publicPath + '/t7.html');
});


// -- Task 5 Navigation -- //
app.get('/t5', function (req, res) {
    res.sendFile(publicPath + '/t5/index.html');
});
app.get('/t5/a', function (req, res) {
    res.sendFile(publicPath + '/t5/a.html');
});
app.get('/t5/b', function (req, res) {
    res.sendFile(publicPath + '/t5/b.html');
});
app.get('/t5/c', function (req, res) {
    res.sendFile(publicPath + '/t5/c.html');
});
app.get('/t5/d', function (req, res) {
    res.sendFile(publicPath + '/t5/d.html');
});
app.get('/t5/e', function (req, res) {
    res.sendFile(publicPath + '/t5/e.html');
});
app.get('/t5/f', function (req, res) {
    res.sendFile(publicPath + '/t5/f.html');
});

// -- Task 8 Navigation -- //
app.get('/t8', function (req, res) {
    res.sendFile(publicPath + '/t8/index.html');
});
app.get('/t8/a', function (req, res) {
    res.sendFile(publicPath + '/t8/a.html');
});
app.get('/t8/b', function (req, res) {
    res.sendFile(publicPath + '/t8/b.html');
});
app.get('/t8/c', function (req, res) {
    res.sendFile(publicPath + '/t8/c.html');
});
app.get('/t8/d', function (req, res) {
    res.sendFile(publicPath + '/t8/d.html');
});
app.get('/t8/e', function (req, res) {
    res.sendFile(publicPath + '/t8/e.html');
});
app.get('/t8/f', function (req, res) {
    res.sendFile(publicPath + '/t8/f.html');
});
app.get('/t8/g', function (req, res) {
    res.sendFile(publicPath + '/t8/g.html');
});
app.get('/t8/h', function (req, res) {
    res.sendFile(publicPath + '/t8/h.html');
});




//run this server by entering "node App.js" using your command line. 
   app.listen(port, () => {
     console.log(`Server is running on http://${host}:${port}`);
   });



