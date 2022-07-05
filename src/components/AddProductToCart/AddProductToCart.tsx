import React from "react";
import { Add, Remove, ShoppingCart } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { Product } from "models/Product";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, removeFromCart, addToCart } from "store/cartSlice";

type AddProductToCartProps = {
  product: Product;
};

export default function AddProductToCart({ product }: AddProductToCartProps) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartItem = cartItems.find((i) => i.product.id === product.id);

  return (
    <>
      {cartItem ? (
        <>
          <IconButton onClick={() => dispatch(removeFromCart(product) as any)}>
            <Remove color="secondary" />
          </IconButton>
          <Typography align="center">{cartItem.count}</Typography>
          <IconButton onClick={() => dispatch(addToCart(product) as any)}>
            <Add color="secondary" />
          </IconButton>
        </>
      ) : (
        <IconButton onClick={() => dispatch(addToCart(product) as any)}>
          <ShoppingCart color="secondary" />
        </IconButton>
      )}
    </>
  );
}
