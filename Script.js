import Record from "./Record.js";

//Training exercise on a JS course I am working through.
//Challenge was to create 5 new objects based on another class (Record)

const Snake = new Record(
  "Snake",
  "SSS",
  "Otacon",
  "Brown",
  "Caucasian",
  "True",
  "28/07/2018"
);

console.log(Snake);

const Otacon = new Record(
  "Otacon",
  "AAS",
  "Snake",
  "Brown",
  "Caucasian",
  "True",
  "28/07/2018"
);

console.log(Otacon);

const Mantis = new Record(
  "Psycho Mantis",
  "SSA",
  "Unknown",
  "Unknown",
  "Unknown",
  "False",
  "28/09/2019"
);

console.log(Mantis);

const Liquid = new Record(
  "Liquid Snake",
  "SSS",
  "Foxhound",
  "Blonde",
  "Caucasian",
  "False",
  "29/10/2020"
);

console.log(Liquid);

const Solidus = new Record(
  "Solidus Snake",
  "SSS",
  "Patriots",
  "Grey",
  "Caucasian",
  "False",
  "30/12/2021"
);

console.log(Solidus);
