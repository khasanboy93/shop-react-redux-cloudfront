import React from "react";
import API_PATHS from "constants/apiPaths";
import ProductsTable from "components/pages/admin/PageProductImport/components/ProductsTable";
import CSVFileImport from "components/pages/admin/PageProductImport/components/CSVFileImport";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

export default function PageProductImport() {
  return (
    <div style={{ padding: "1.5rem 0" }}>
      <Box display="flex" alignItems="center">
        <CSVFileImport url={`${API_PATHS.import}/import`} title="Import Products CSV" />
        <Button size="small" color="primary" variant="contained" component={Link} to={"/admin/product-form/"}>
          create product
        </Button>
      </Box>
      <ProductsTable />
    </div>
  );
}
