var express = require('express');
var connectionString = ""
    // const { MongoClient } = require('mongodb');
var app = express();
app.get('/', function(req, res) {
    res.send("Hello")
});
var server = app.listen(8000, function() {});




const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://karimarakji:hihello1234@cluster0.6xdhq.mongodb.net/karimdata?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
    3
    const collection = client.db().collection("tasks");

    if (err) {
        console.log("error")
    } else {
        console.log("no error")
    }
    client.close();
});

app.set('view engine', 'ejs')

app.get("/task", (req, res) => {
    const db = client.db().collection("tasks");
    return db.find().toArray();

})

app.post("/task", (req, res) => {


    var dbo = db.db("mydb");
    var myobj = { id: "Company Inc", description: "Highway 37", isComplete: false };
    client.db().collection("tasks").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });

})

app.delete("/task/:id", (req, res) => {
    var myquery = { id: ids };
    client.db().collection("tasks").deleteOne(myquery, function(err, obj) {
        if (err) {
            console.log("task not found error");
            return;
        }
        console.log("1 document deleted");
        db.close();
    });
})

app.put("/task/toggle/:id")

async function updateListingByName(client, nameOfListing, valuee) {
    const result = await client.db().collection("tasks")
        .updateOne({ name: nameOfListing }, { $set: { "isComplete": valuee } });
    console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

async function findOneListingByName(client, idToUpdate) {
    const result = await client.db().collection("tasks").findOne({ id: idToUpdate });

    if (result.isComplete) {

        updateListingByName(client, nameOfListing, false)
        console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
        console.log(result);
    } else {
        updateListingByName(client, nameOfListing, true)
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}