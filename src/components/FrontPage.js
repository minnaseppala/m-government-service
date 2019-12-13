import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { PersonOutline, PersonAdd } from "@material-ui/icons";

import "../css/FrontPage.css";
import Layout from "./Layout";
import Help from "./Help";

const FrontPage = props => {
  const { setShow, setType } = props;

  const Footer = () => (
    <h3>
      If you need help, tap{" "}
      <Help>This icon will give you help. Tap elsewhere to close it.</Help> at
      any time.
    </h3>
  );

  const handleClickBirth = () =>{
    setShow('birthpage')
    setType('birth')
  }

  const handleClickDeath = () =>{
    setShow('deathpage')
    setType('death')
  }

  return (
    <Layout header="M-government report">
      <div>
        <Card className="icon-card" onClick={handleClickBirth}>
          <CardContent>
            <PersonAdd className="card-icon" />
            <div className="card-text">Report a birth</div>
          </CardContent>
        </Card>
        <Card onClick={handleClickDeath}>
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
