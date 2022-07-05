import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import AddProductToCart from "components/AddProductToCart/AddProductToCart";
import { CartItem } from "models/CartItem";
import { formatAsPrice } from "utils/utils";

type CartItemsProps = {
  items: CartItem[];
  isEditable: boolean;
};

export default function CartItems({ items, isEditable }: CartItemsProps) {
  const listItem = {
    padding: "0.5rem 0",
  };
  const total = {
    fontWeight: 700,
  };

  const totalPrice: number = items.reduce((total, item) => item.count * item.product.price + total, 0);

  return (
    <>
      <List disablePadding>
        {items.map((cartItem: CartItem) => (
          <ListItem style={listItem} key={cartItem.product.id}>
            {isEditable && <AddProductToCart product={cartItem.product} />}
            <ListItemText primary={cartItem.product.title} secondary={cartItem.product.description} />
            <Typography variant="body2">
              {formatAsPrice(cartItem.product.price)} x {cartItem.count} ={" "}
              {formatAsPrice(cartItem.product.price * cartItem.count)}
            </Typography>
          </ListItem>
        ))}
        <ListItem style={listItem}>
          <ListItemText primary="Shipping" />
          <Typography variant="body2">Free</Typography>
        </ListItem>
        <ListItem style={listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" style={total}>
            {formatAsPrice(totalPrice)}
          </Typography>
        </ListItem>
      </List>
    </>
  );
}
