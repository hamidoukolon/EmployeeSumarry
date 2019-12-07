// by creating a function which takes in an argument of the data we want to replace
// in our template, and using a template literal to define HTML
// we can easily replace parts of our HTML with the data that we want
function generateHTML(person) {
    return `<html>
            <head>
                <title>Template Example</title>
            </head>
            <body> 
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title">${person.name}</h2>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${person.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${person.email}">${person.email}</a></li>
                            <li class="list-group-item">School: ${person.school}</li>
                        </ul>
                    </div>
                </div>
            </body>
        </html> `;
}

// create a person object that we can pass into our template literal
const person = {
    name  : "David Allen",
    id    : 42,
    email : "dave@davidrallen.com",
    school: "Plymouth State University"
};

// get the HTML of the page that we want by calling the function and passing
// in the data we want replaced
const html = getTemplateHTML(person);

// console log our HTML
console.log(html);

// now that we have our HTML, we can store it

const fs = require("fs");
fs.writeFile("person.html", html, (error) => {
    if (error) {
        console.error(error);
    }

    console.log("File saved successfully!");
})
