const express = require("express");
const app = express();

//Middleware
const validateZip = require("./middleware/validateZip");
const validateAdmin = require("./middleware/validateAdmin");
const getZoos = require("./utils/getZoos");

//Routes
app.get("/zoos/all", validateAdmin, (req, res, next) => {
  const allZoos = `All zoos: ${getZoos().join("; ")}`;
  res.send(allZoos);
});

app.get("/check/:zip", validateZip, (req, res, next) => {
  const zip = req.params.zip;
  const zoos = getZoos(zip);
  const response = zoos
    ? `${zip} exists in our records.`
    : `${zip} does not exist in our records.`;
  res.send(response);
});

app.get("/zoos/:zip", validateZip, (req, res, next) => {
  const zip = req.params.zip;
  const zoos = getZoos(zip);
  const response =
    zoos.length > 0 ? `${zip} zoos: ${zoos.join("; ")}` : `${zip} has no zoos.`;
  res.send(response);
});

//Errorhandlers
app.use((req, res, next) => {
  res.send("That route could not be found!");
});

app.use((err, req, res, next) => {
  res.send(err);
});

module.exports = app;
