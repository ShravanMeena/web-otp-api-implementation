import React from "react";
import "./App.css";
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
        <br />
        <br />
        <br />
        <br />
        <h2>Your OTP is: {this.state.otp}</h2>
        <br />
        <br />
        <br />
        <br />
        <h3>The Web OTP API Docs</h3>
        <div>
          Send an SMS that includes
          <pre>
            <code>@web-otp-shravan.netlify.app #12345</code>
          </pre>
          at the last line to this phone.
          <pre>
            <code>please don't use https:// and / end of the url</code>
          </pre>
          <pre style={{ color: "green" }}>
            <code>example for use @www.google.com</code>
          </pre>
          <pre style={{ color: "red" }}>
            <code>example for not use XXXXX @https://www.google.com XXXXX</code>
          </pre>
        </div>
      </div>
    );
  }
}

// time to test in mobile phone
