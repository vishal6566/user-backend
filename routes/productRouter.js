const express = require("express");
const productRouter = express.Router();

const { WomenModel, MenModel, KidModel } = require("../models/productModel");

productRouter.get("/women", async (req, res) => {
  try {
    if (req.query) {
      let val = req.query.title;
      val = new RegExp(val);
      const products = await WomenModel.find({ title: val });
      res.send(products);
    } else {
      const products = await WomenModel.find();
      res.send(products);
    }
  } catch (err) {
    console.log(err);
    res.send({ err: "something went wrong" });
  }
});

productRouter.get("/women/:productID", async (req, res) => {
  const { productID } = req.params;
  if (productID) {
    try {
      const products = await WomenModel.find({ _id: productID });
      res.send(products);
    } catch (err) {
      console.log(err);
      res.send({ err: "something went wrong" });
    }
  } else {
    try {
      const products = await WomenModel.find({});
      res.send(products);
    } catch (err) {
      console.log(err);
      res.send({ err: "something went wrong" });
    }
  }
});

productRouter.post("/women/add", async (req, res) => {
  const payload = req.body;
  const product = new WomenModel(payload);
  await product.save();
  res.send({ msg: "Added Succeffully" });
});

productRouter.patch("/women/update/:productID", async (req, res) => {
  const productID = req.params.productID;
  const payload = req.body;
  try {
    const query = await WomenModel.findByIdAndUpdate(
      { _id: productID },
      payload
    );
    res.send({ msg: "upadted succesflly" });
  } catch (err) {
    res.send({ err: err });
    console.log(err);
  }
});
productRouter.delete("/women/delete/:productID", async (req, res) => {
  const productID = req.params.productID;
  try {
    await WomenModel.findByIdAndDelete({ _id: productID });
    res.send({ msg: "deleted succesffyll" });
  } catch (err) {
    res.send({ err: "something went worng" });
  }
});

////////////////////////////////////////////////////////////////////
productRouter.get("/men/:productID", async (req, res) => {
  const { productID } = req.params;
  if (productID) {
    try {
      const products = await MenModel.find({ _id: productID });
      res.send(products);
    } catch (err) {
      console.log(err);
      res.send({ err: "something went wrong" });
    }
  } else {
    try {
      const products = await MenModel.find({});
      res.send(products);
    } catch (err) {
      console.log(err);
      res.send({ err: "something went wrong" });
    }
  }
});

productRouter.get("/men", async (req, res) => {
  try {
    if (req.query) {
      let val = req.query.title;
      val = new RegExp(val);
      const products = await MenModel.find({ title: val });
      res.send(products);
    } else {
      const products = await MenModel.find({});
      res.send(products);
    }
  } catch (err) {
    console.log(err);
    res.send({ err: "something went wrong" });
  }
});

productRouter.post("/men/add", async (req, res) => {
  const payload = req.body;
  const product = new MenModel(payload);
  await product.save();
  res.send({ msg: "Added Succeffully" });
});

productRouter.patch("/men/update/:productID", async (req, res) => {
  const productID = req.params.productID;
  const payload = req.body;
  try {
    const query = await MenModel.findByIdAndUpdate({ _id: productID }, payload);
    res.send({ msg: "upadted succesflly" });
  } catch (err) {
    res.send({ err: err });
    console.log(err);
  }
});

productRouter.delete("/men/delete/:productID", async (req, res) => {
  const productID = req.params.productID;
  try {
    await MenModel.findByIdAndDelete({ _id: productID });
    res.send({ msg: "deleted succesffyll" });
  } catch (err) {
    res.send({ err: "something went worng" });
  }
});
///////////////////ccccccccHILDREN////////////////
productRouter.get("/kid/:productID", async (req, res) => {
  const { productID } = req.params;
  if (productID) {
    try {
      const products = await KidModel.find({ _id: productID });
      res.send(products);
    } catch (err) {
      console.log(err);
      res.send({ err: "something went wrong" });
    }
  } else {
    try {
      const products = await KidModel.find({});
      res.send(products);
    } catch (err) {
      console.log(err);
      res.send({ err: "something went wrong" });
    }
  }
});

productRouter.get("/kid", async (req, res) => {
  try {
    if (req.query) {
      let val = req.query.title;
      val = new RegExp(val);
      const products = await KidModel.find({ title: val });
      res.send(products);
    } else {
      const products = await KidModel.find({});
      res.send(products);
    }
  } catch (err) {
    console.log(err);
    res.send({ err: "something went wrong" });
  }
});

productRouter.post("/kid/add", async (req, res) => {
  const payload = req.body;
  const product = new KidModel(payload);
  await product.save();
  res.send({ msg: "Added Succeffully" });
});

productRouter.patch("/kid/update/:productID", async (req, res) => {
  const productID = req.params.productID;
  const payload = req.body;
  try {
    const query = await KidModel.findByIdAndUpdate({ _id: productID }, payload);
    res.send({ msg: "upadted succesflly" });
  } catch (err) {
    res.send({ err: err });
    console.log(err);
  }
});

productRouter.delete("/kid/delete/:productID", async (req, res) => {
  const productID = req.params.productID;
  try {
    await KidModel.findByIdAndDelete({ _id: productID });
    res.send({ msg: "deleted succesffyll" });
  } catch (err) {
    res.send({ err: "something went worng" });
  }
});

module.exports = { productRouter };
