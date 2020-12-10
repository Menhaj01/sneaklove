const express = require("express");
const SneakerModel = require("../models/Sneaker");
const router = express.Router(); /* ); */

console.log(`\n\n
-----------------------------
-----------------------------
     wax on / wax off !
-----------------------------
-----------------------------\n\n`);
router.get("/", (req, res) => {
  res.send("foo");
});
router.get("/sneakers/:cat", async (req, res) => {
  if (req.params.cat === "collection") {
    try {
      const sneakers = await SneakerModel.find();
      res.render("products", { sneakers });
    } catch (err) {
      next(err);
    }
  } else if (req.params.cat === "men") {
    try {
      const sneakers = await SneakerModel.find({ category: "men" });
      res.render("products", { sneakers });
    } catch (err) {
      next(err);
    }
  } else if (req.params.cat === "women") {
    try {
      const sneakers = await SneakerModel.find({ category: "women" });
      res.render("products", { sneakers });
    } catch (err) {
      next(err);
    }
  } else if (req.params.cat === "kids") {
    try {
      const sneakers = await SneakerModel.find({ category: "kids" });
      res.render("products", { sneakers });
    } catch (err) {
      next(err);
    }
  }

  console.log(req.params.cat);
});

router.get("/one-product/:id", async (req, res) => {
  try {
    const sneaker = await SneakerModel.findById(req.params.id);
    console.log(sneaker);
    res.render("one_product", { sneaker });
  } catch (err) {
    next(err);
  }
});

router.get("/prod-add" , (req, res, next) => {
  res.render("products_add")
})

 router.post("/prod-add" , async (req, res, next) => {
   try{
     const newSneaker = req.body;
    //  console.log(req.body); 
     await SneakerModel.create(newSneaker);
     res.redirect("/prod-add");
   }catch(err){
     next(err)
   }
  })


router.get("/prod-edit/:id" , async (req, res, next) => {
    const sneaker = await SneakerModel.findById(req.params.id);
    console.log(sneaker);
    res.render("product_edit", {sneaker} )
  })

//here i cant find the edit btn ???? 
router.post("/prod-edit/:id" , async (req, res, next) => {
    try{
      console.log("here");
      const updateSneaker = req.body ///may use syntax{...req.body}???
      console.log(updateSneaker); 
      await SneakerModel.findByIdAndUpdate(req.params.id, updateSneaker);
      res.send("good here");
    }catch(err){
      next(err)
    }
   })
 

  

router.get("/signup", (req, res) => {
  res.send("sneak");
});

router.get("/signin", (req, res) => {
  res.send("love");
});

module.exports = router;
