import React from "react";
import CartItems from "components/CartItems/CartItems";
import { FormikValues } from "formik";
import { CartItem } from "models/CartItem";
import { Grid, Typography } from "@mui/material";

type ReviewOrderProps = {
  address: FormikValues;
  items: CartItem[];
};

export default function ReviewOrder({ address, items }: ReviewOrderProps) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <CartItems items={items} isEditable={false} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom style={{ marginTop: "1rem" }}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {address.firstName} {address.lastName}
          </Typography>
          <Typography gutterBottom>{address.address}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom style={{ marginTop: "1rem" }}>
            Comment
          </Typography>
          <Typography gutterBottom>{address.comment}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
