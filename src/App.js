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
        <h2>Your OTP is: {this.state.otp}</h2>
        <br />
        <br />
        <br />
        <br />

        <h1>The Web OTP API Docs</h1>

        <div>
          Send an SMS that includes
          <pre>
            <code>@wyourdomain #12345</code>
          </pre>
          at the last line to this phone.
          <pre>
            <code>please don't use https:// and / end of the url</code>
          </pre>
          <pre>
            <code>example for use @www.google.com</code>
          </pre>
          <pre>
            <code>example for not use XXXXX @https://www.google.com XXXXX</code>
          </pre>
        </div>
      </div>
    );
  }
}

// time to test in mobile phone
