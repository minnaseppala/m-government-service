import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { PersonOutline, PersonAdd } from "@material-ui/icons";

import "../css/FrontPage.css";
import Layout from "./Layout";
import Help from "./Help";

const FrontPage = props => {
  const { setShow } = props;

  const Footer = () => (
    <h3>
      If you need help, tap{" "}
      <Help>This icon will give you help. Tap elsewhere to close it.</Help> at
      any time.
    </h3>
  );

  return (
    <Layout header="M2 government report">
      <div>
        <Card className="icon-card" onClick={() => setShow("birthpage")}>
          <CardContent>
            <PersonAdd className="card-icon" />
            <div className="card-text">Report a birth</div>
          </CardContent>
        </Card>
        <Card onClick={() => setShow("deathpage")}>
          <CardContent>
            <PersonOutline className="card-icon" />
            <div className="card-text">Report a death</div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </Layout>
  );
};

export default FrontPage;
