import Header from "../../components/header";
import VerifyPass from "./components/verify";
import "../preregform/prereg.css";
import React from "react";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Quincy&display=swap');
</style>;

const VerifyPagePass = () => {
  React.useEffect(()=>{document.title = "Verify | RDV"}, []);
  return (
    <div className="pre-reg-page">
      
      <VerifyPass />
    </div>
  );
};

export default VerifyPagePass;