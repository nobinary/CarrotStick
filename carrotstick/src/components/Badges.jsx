import React from 'react'
import './../styles/Badges.css'
import axios from 'axios'

class Badges extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            points: 0
        }
    }

    componentDidMount() {
        this.getPoints();
      }
    
      getPoints = async () => {
        try {
          const points = await axios.get(`http://carrotstick-api.herokuapp.com/logs`);
          console.log(points.data.length);
            this.setState({
              points: points.data.length
            });
          console.log(this.state);
        } catch (error) {
          console.log("Error: ", error);
        }
      };

    renderBadges = () => {
        console.log(this.state.points)
        if ((this.state.points >= 5)) {
            return (
              <div className="badges">
                <img src={require("./../media/SVG/SVG/badge_1.svg")} alt="status" className="badge_img" />
                {/* <div className="status_txt">
                  <h4>Amoeba </h4>
                  <p>You still have a lot of work to do, my young friend.</p>
                </div> */}
              </div>
            );
          }
    }

    render() {
        return(
        <div className='badges'>
        <h3>BADGES</h3>
        {this.renderBadges()}
        </div>
        )
    }

}

export default Badges