import React from "react";
import "./../styles/Quote.css";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      badges: []
    };
  }

  fetchQuote = () => {
    // retrieve quote
  };

  render() {
    return (
      <div className="quote">
        <p> QUOTE OF THE DAY</p>
        <p>Direct your attention to people; love, help, and care for them.</p>
      </div>
    );
  }
}

export default Quote;
