import React from "react";
import Header from "components/MainLayout/components/Header";
import { Container, Link, Typography } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        My CloudX Store
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Container style={{ paddingBottom: "4rem" }} maxWidth="md">
          {children!}
        </Container>
      </main>
      <footer style={{ backgroundColor: "#fff", padding: "3rem" }}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Thank you for your attention!
        </Typography>
        <Copyright />
      </footer>
    </>
  );
};

export default MainLayout;
