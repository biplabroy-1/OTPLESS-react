import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    window.otpless = (otplessUser) => {
      alert(JSON.stringify(otplessUser));
    };
  }, []);

  return (
    <>
      {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
      <div id="otpless-login-page"></div>
    </>
  );
}

export default App;
