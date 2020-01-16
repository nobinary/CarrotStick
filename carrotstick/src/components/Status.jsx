import React from "react";
import axios from "axios";
import "./../styles/Status.css";

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 20
    };
  }

  componentDidMount() {
    // this.getPoints();
  }

  getPoints = async () => {
    try {
      const points = await axios.get(`http://localhost:3000/logs`);
      console.log(points.data.length);
      //   this.setState({
      //     habits: habits.data
      //   });
      // console.log(this.state);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  renderStatus = () => {
      console.log(this.state.points)
    if ((this.state.points <= 5)) {
      return (
        <div className="status">
          <img src={require("./../media/amoeba.png")} alt="status" className="status_img" />
          <div className="status_txt">
            <h4>Amoeba </h4>
            <p>You still have a lot of work to do, my young friend.</p>
          </div>
        </div>
      );
    }
    if ((this.state.points <= 10)) {
      return (
        <div className="status">
 <img src={require("./../media/gnat.png")} alt="status" className="status_img" />
          <div className="status_txt">
            <h4>Gnat </h4>
            <p>Still nearly a bottom-feeder. Keep going!</p>
          </div>
        </div>
      );
    }
    if ((this.state.points <= 15)) {
      return (
        <div className="status">
 <img src={require("./../media/maggot.jpg")} alt="status" className="status_img" />
          <div className="status_txt">
            <h4>Maggot </h4>
            <p>You may have conquered some habits, but don't get cocky. Go on!</p>
          </div>
        </div>
      );
    }
    if ((this.state.points <= 25)) {
        return (
          <div className="status">
   <img src={require("./../media/fly.png")} alt="status" className="status_img" />
            <div className="status_txt">
              <h4>Fly </h4>
              <p>Okay, so you're flying. Big deal. Go for the win!</p>
            </div>
          </div>
        );
      }
      if ((this.state.points <= 50)) {
        return (
          <div className="status">
   <img src={require("./../media/dung_beetle.gif")} alt="status" className="status_img" />
            <div className="status_txt">
              <h4>Dung Beetle </h4>
              <p>At last, you have achieved the pinnacle of existence. Well done, friend. Well done.</p>
            </div>
          </div>
        );
      }
  };

  render() {
    return (
      <div className="status_main">
        <h3 className="status_txt">STATUS</h3>
        {this.renderStatus()}
      </div>
    );
  }
}

export default Status;
