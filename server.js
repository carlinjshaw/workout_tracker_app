const express = require("express");
const controllers = require("./controllers");
const sequelize = require("./config/connection");
const path = require("path");
const fs = require("fs");
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes

app.get("/workout/home", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/workout/login", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

app.get("/workout/calendar", (req, res) => {
  res.sendFile(path.join(__dirname, "calendar.html"));
});

app.get("/workout/goals", (req, res) => {
  res.sendFile(path.join(__dirname, "goals.html"));
});

app.post("/api/goals", (req, res) => {
  let savedNotes = JSON.parse(
    fs.readFileSync("./db/db.json", "utf8", () => {
      if (!savedNotes) {
        savedNotes = [];
      }
    })
  );
  let writeNote = req.body;
  writeNote.id = savedNotes.length.toString();
  savedNotes.push(writeNote);

  fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
  console.log("Note has been created!");
  res.json(savedNotes);
});

app.delete("/api/goals:id", (req, res) => {
  const savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  const noteDelete = req.params.id;

  const deletedNotes = savedNotes.filter((value) => value.id !== noteDelete);
  console.log("Deleting note");

  fs.writeFileSync("./db/db.json", JSON.stringify(deletedNotes));
  res.json(deletedNotes);
});

app.use(controllers);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
