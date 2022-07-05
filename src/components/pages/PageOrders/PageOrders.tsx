import React from "react";
import Orders from "components/pages/PageOrders/components/Orders";
import { Typography } from "@mui/material";

export default function PageOrders() {
  return (
    <div style={{ padding: "1.5rem 0" }}>
      <Typography variant="h6" gutterBottom>
        Manage orders
      </Typography>
      <Orders />
    </div>
  );
}
