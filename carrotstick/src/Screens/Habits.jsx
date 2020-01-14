import React, { Component } from "react";
import axios from "axios";
import Header from './../components/Header'
import Footer from './../components/Footer'
import HabitGrid from './../components/HabitGrid'
import './../styles/Habits.css'

class Habits extends Component {
  constructor() {
    super();
    this.state = {
    habits: [],
    formInput: {
        name: ""
    }
    };
  }

  async componentDidMount() {
    this.fetchHabits()
    console.log(this.state.data)
  }

  fetchHabits = async () => {
    try {
      const habits= await axios.get(
        `http://localhost:3000/users/1/habits`
      );
    //   console.log(names);
      this.setState({
        habits: habits.data
      });
      console.log(this.state);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  /* Definition of handleClick in component */
  handleClick = event => {
    const habit = prompt("Please enter the name of your habit");
    ///POST REQ
  };


  render() {
    return (
      <div className='habits'>
        {/* <div className="home">
          {this.state.habits.map((habit, index) => [(
            <p key={index}>{habit.name}</p>
          )])}
        </div> */}
        <Header header='Habits' />
        <div className='habits_body'>
        <HabitGrid/>
        <input className='add_habit' type="button" value="Add Habit" onClick={this.handleClick} />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Habits;
