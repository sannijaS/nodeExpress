const express = require("express");
const app = express();
const fs = require("fs"); 

app.get("",(req,res)=> {
    res.send('NodeExpress App');
});
app.get("/books",(req,res)=> {
    fs.readFile("book.json", function(err, data) {
        // Check for errors
        if (err) throw err;
        // Converting to JSON
        const parsedData = JSON.parse(data);
        const books = parsedData[Object.keys(parsedData)[0]]; 
        console.log('Title:',books.title,': No.Of.Pages:',books.number_of_pages,': coverImage:',books.cover.medium);
        // Displaying in View
        res.send(`
        <h3><u>Books Data</u></h3>
        <p><b>Title:</b> ${books.title}</p>
        <p><b>No.Of.Pages:</b> ${books.number_of_pages}</p>
        <p><b>coverImage:</b></p>: <img src="${books.cover.medium}" alt="medium cover Image" width="200" height="200">
        `)
    });
});

app.listen(3000, () => 
console.log('Server started..')
);

