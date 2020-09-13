
const express = require('express');
var bodyParser = require('body-parser');
const database = require('./database.json');

const app = express();
const port = process.env.PORT;

app.use(express.static(__dirname));
app.use(bodyParser.json())

app.get("/getdata",(request,response)=>{
    response.status(200);
    response.send(database);
})

app.put("/edit/:c",
    (request, response) => {

        let country = database.find(db => db.name == request.params.c);

        if (country != undefined) {
            country.counter = request.body.counter;
        }

        response.status(200); // 200 is OK
        response.send();
    }
);

app.listen(port, () => {
    //console.log(`Example app listening at http://localhost:${port}`)
  })