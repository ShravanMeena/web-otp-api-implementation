import React from "react";
import "./App.css"
export default class App extends React.Component {
  state = {
    otp: "",
  };

  componentDidMount() {
    if ("OTPCredential" in window) {
      const ac = new AbortController();

      navigator.credentials
        .get({
          otp: { transport: ["sms"] },
          signal: ac.signal,
        })
        .then((otp) => {
          this.setState({ otp: otp.code });
          ac.abort();
        })
        .catch((err) => {
          ac.abort();
          console.log(err);
        });
    }
  }

  render() {
    return (
      <div className="App">
        <h2>Your OTP is: {this.state.otp}</h2>
      </div>
    );
  }
}


// time to test in mobile phone