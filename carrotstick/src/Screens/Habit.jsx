import React from "react";
import "./../styles/Overview.css";
import Footer from "./../components/Footer";
import Header from "./../components/Header";
import "./../styles/Habit.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

class Habit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      habit: "",
      formInput: {
        name: ""
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getHabit();
  }

  getHabit = async () => {
    try {
      const habit = await axios.get(
        `http://carrotstick-api.herokuapp.com/habits/${this.props.match.params.habit_id}`
      );
      console.log(habit.data.name);
      this.setState({
        habit: habit.data.name
      });
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  handleDelete = async () => {
    try {
      await axios.delete(
        `http://carrotstick-api.herokuapp.com/habits/${this.props.match.params.habit_id}`
      )
      this.props.history.push('/habits');
      this.forceUpdate();
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  handleChange(event) {
    console.log(event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      formInput: {
        [name]: value
      }
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const obj = {
      name: this.state.formInput.name
    };
    console.log(obj)
    await axios.put(
        `http://carrotstick-api.herokuapp.com/habits/${this.props.match.params.habit_id}`,obj)
        .then(response => {
        console.log(response);
        this.getHabit()
      },
      error => {
        console.log(error);
      }
    );
    this.setState({
      formInputs: {
        name: ""
      }
    });
  }


  render() {
      console.log(this.state.formInput.name)
    return (
      <div className="habit">
        <Header header="habit"/>
        <div className="habit_body">
        <p className="habit_p">{this.state.habit}</p>
        <button className="btn" onClick={() => this.handleDelete()}>
          delete habit
        </button>
        <div >
        <form className="rename" onSubmit={this.handleSubmit}>
          <input
            className="habit_input"
            onChange={this.handleChange}
            placeholder="type new name"
            name={"name"}
            type="text"
            value={this.state.formInput.name}
          ></input>
          <input className="btn" type="submit" value="rename habit" />
       </form>
       </div>
        <NavLink to="/habits">
          <button className="btn"> back to list</button>
        </NavLink>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Habit;
