import React, { Component } from "react";
import {NavLink} from 'react-router-dom'
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
    // console.log(this.state.data)
  }

  fetchHabits = async () => {
    try {
      const habits= await axios.get(
        `http://carrotstick-api.herokuapp.com/habits`
      );
    //   console.log(names);
      this.setState({
        habits: habits.data
      });
    //   console.log(this.state);
    } catch (error) {
      console.log("Error: ", error);
    }
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
        <NavLink to='./createhabit'>
        <input className='add_habit' type="button" value="Add Habit"/>
        </NavLink>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Habits;



