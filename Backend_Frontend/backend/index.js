import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      image: "https://via.placeholder.com/150",
    },
  ];

  if (req.query.category) {
   const filterProducts = products.filter((product) =>
      product.name.includes(req.query.category)
    );
    res.send(filterProducts);
    return;
  } else {
    console.log("No category filter applied");
  }

  setTimeout(() => {
    res.send(products);
    console.log("Products fetched successfully");
  }, 2000); // Simulating a delay of 2 seconds
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
