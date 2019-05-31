//create library
const express = require(`express`);

//assign express to app
const app = express();

//create routes
app.get(`/`,(request, response) => {
    response.send(
        `<html>
            <body>
                <h4>JS Node Server App & Heroku Deployment </h4>
                <p>-Main</p>
                <p>-About</p>
                <p>-Contact</p>
            </body>
        </hmtl>`)  
});

app.get(`/about`,(request, response) => {
    response.send(`Group 15: Cynthia MD Publico SN200386616`)
});

app.get(`/contact`, (request, response) => {
    response.send(`Contact: Cynthia.Dejesus-Publico@MyGeorgian.ca`)
});

//create dynamic listening port
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));


