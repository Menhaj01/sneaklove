// create a test data set of valid users
require("dotenv").config();
require("./../config/mongo"); // fetch the db connection
const SneakerModel = require("./../models/Sneaker"); // fetch the model to validate our user document before insertion (in database)

const sneakers = [
  {
    name: "nike",
    ref: "nikeRef",
    size: 40,
    description: "abc",
    price: 100,
    category: "men",
  },
  {
    name: "pumma",
    ref: "pummaRef",
    size: 35,
    description: "def",
    price: 150,
    category: "women",
  },
  {
    name: "addidas",
    ref: "addidasRef",
    size: 12,
    description: "ghi",
    price: 180,
    category: "kids",
  },
];

async function insertLabels() {
  try {
    await SneakerModel.deleteMany(); // empty the styles db collection
    const inserted = await SneakerModel.insertMany(sneakers); // insert docs in db
    console.log(`seed artists done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
}

insertLabels();
