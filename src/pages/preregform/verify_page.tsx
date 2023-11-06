import Form from "./components/form";
import Header from "../../components/header";
import Verify from "./components/verify";
import "./prereg.css";
import React from "react";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Quincy&display=swap');
</style>;

const VerifyPage = () => {
  React.useEffect(() => { document.title = "Verification | RDV" }, []);
  return (
    <div className="pre-reg-page">
      <Header />
      <Verify />
    </div>
  );
};

export default VerifyPage;