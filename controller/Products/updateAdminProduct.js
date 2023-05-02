const Product = require("../../modles/ProductData");
const updateProducts = async (req, res) => {
  const {
    SKU,
    name,
    price,
    size,
    productDetails,
    catagory,
    colour,
    audience,
    quantity,
  } = req.body;
  const updates = {
    name: name,
    price: price,
    size: size,
    productDetails: productDetails,
    catagory: catagory,
    colour: colour,
    audience: audience,
    quantity: quantity,
  };
  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { SKU: SKU },
      updates,
      { new: true }
    );
    res.send({
      status: "success",
      data: updatedProduct,
      message: "Your data has been updated",
    });
    console.log(updatedProduct);
  } catch (err) {
    res.send({ status: "fail", message: `An error has occurred ${err}` });
  }
};
module.exports = { updateProducts };
