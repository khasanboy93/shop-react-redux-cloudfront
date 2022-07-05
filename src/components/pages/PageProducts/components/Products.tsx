import React, { useEffect, useState } from "react";
import { Product } from "models/Product";
import { formatAsPrice } from "utils/utils";
import AddProductToCart from "components/AddProductToCart/AddProductToCart";
// import axios from 'axios';
// import API_PATHS from "constants/apiPaths";
import productList from "./productList.json";
import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import "components/pages/PageProducts/components/Products.css";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // axios.get(`${API_PATHS.bff}/product/available/`)
    //   .then(res => setProducts(res.data));
    setProducts(productList);
  }, []);

  return (
    <Grid container spacing={4}>
      {products.map((product: Product, index: number) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card className={"card"}>
            <CardMedia
              className={"cardMedia"}
              image={`https://source.unsplash.com/random?sig=${index}`}
              title="Image title"
            />
            <CardContent className={"cardContent"}>
              <Typography gutterBottom variant="h5" component="h2">
                {product.title}
              </Typography>
              <Typography>{formatAsPrice(product.price)}</Typography>
            </CardContent>
            <CardActions>
              <AddProductToCart product={product} />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
