const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const path = require("path");
const fs = require("fs");
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//uses express handlebars as template engine

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//session and sequelize stuff

const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

//routes for test html

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

app.use(routes);
//join the public styles and logic



sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
