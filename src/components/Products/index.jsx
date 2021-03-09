import React from "react";

import { Grid } from "@material-ui/core";

import Product from "./Product";

const products = [
  {
    id: 1,
    name: "Nintendo Switch",
    description: "Videogame",
    price: "R$300",
    image: "https://images-na.ssl-images-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg"
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple Macbook Pro",
    price: "R$300",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011?wid=892&hei=820&&qlt=80&.v=1613672894000",
  },
  {
    id: 3,
    name: "Alexa",
    description: "Echo Dot Alexa",
    price: "R$300",
    image: "https://ibcdn.canaltech.com.br/7oULYUGvYykI1YX55Kp0fWQNjWU=/fit-in/400x400/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i413657.png",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
