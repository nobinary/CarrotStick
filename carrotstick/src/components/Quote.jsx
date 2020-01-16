import React from "react";
import axios from 'axios'
import "./../styles/Quote.css";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ""
    };
  }

  fetchQuote = async () => {
    try {
      const quote = await axios.get(
        `https://api.paperquotes.com/apiv1/quotes/?tags=work`
      );
      //   key: Authorization
      // value: Token {0585f3630b422c4950042c5f69c6ed214d4c0774}
      // console.log(quote)
      //   this.setState({
      //     quote: habits.data
      //   });
      // console.log(this.state);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  render() {
    return (
      <div className="quote">
        {/* {this.fetchQuote()} */}
        <h3>QUOTE OF THE DAY</h3>
        <p>Direct your attention to people; love, help, and care for them.</p>
      </div>
    );
  }
}

export default Quote;
