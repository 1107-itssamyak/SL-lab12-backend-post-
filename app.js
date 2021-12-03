const express = require("express")
const app = express()
const mongoose = require("mongoose")
const url = "mongodb+srv://samyak:ssss1234@cluster0.8jkcm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mySchema = require('./schema');
mongoose.connect(url).then(() => console.log("connected to Database"))
app.use(express.json())
app.post("/add-new-book", async (req, res) => {
    const bookName = req.body.bookName;
    const nameofIssuer = req.body.nameofIssuer;
    const dueDate = req.body.dueDate;

    try {
        const newproject = new mySchema({
            bookName: bookName,
            nameofIssuer: nameofIssuer,
            dueDate: dueDate
        })
        const savedproject = await newproject.save()
        res.json({ "message": "Library details is saved", "data": savedproject })
    } catch (err) {
        res.json(err);
    }
})

app.use("/", (req, res) => {
    //res.send("Hello");
    res.json({ "message": "Express server started" })
})

app.listen(3001, () => console.log("Express Server Started"))