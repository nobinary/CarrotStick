import React, { Component } from "react";
import Moment from "react-moment";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./../styles/HabitGrid.css";


export default class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      buttons: [],
      habits: [],
      formInput: {
        check_in: [{}]
      }
    };
  }

  componentDidMount() {
    this.createDates();
  }

  handleButtonClick = () => {};
  createDates = () => {
    let currentDay = new Date();
    let week = [];
    let buttons = [];
    for (let i = 1; i <= 7; i++) {
      let first = currentDay.getDate() - currentDay.getDay() + i;
      console.log(first);
      console.log(new Date(currentDay.setDate(first)).toString());
      let day = `${new Date(currentDay.setDate(first))
        .toString()
        .slice(0, 3)} ${first}`;
      week.push({ day, id: i });
      buttons.push(i);
      console.log(day)
      // console.log(day);
    }
    this.setState({ dates: week, buttons });
  };

  componentWillMount() {
    this.testData();
  }

  testData = async () => {
    try {
      const habits = await axios.get(`http://carrotstick-api.herokuapp.com/habits`);
      // console.log(habits)
      this.setState({
        habits: habits.data
      });
      // console.log(this.state);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  createGrid = (x, y) => {
    const { habits, dates } = this.state;
    const coords = { x, y };
    const values = {
      habit: habits[coords.x],
      date: dates[coords.y]
    };
    console.log(values);
    this.setState = {
      formInput: {
        check_in: {values}
      }
      ///ISSUES SENDING CHECK-IN TO STATE
    }
    this.handleSubmit(values)
    // send values to API
  };

  renderButtons = rowId =>
    this.state.buttons.map(columnIndex => (
      <div key={columnIndex} style={{ width: "3em" }}>
        <input
          className="checkbox"
          type="checkbox"
          onClick={() => this.createGrid(rowId - 1, columnIndex - 1)}
        ></input>
      </div>
    ));

    // handleDelete = async () => {
    //   try {
    //     await axios.delete(
    //       `http://localhost:3000/logs/3`
    //     )
    //   } catch (error) {
    //     console.log("Error: ", error);
    //   }
    // };

  async handleSubmit(values) {
    // event.preventDefault();
    console.log(values);
    const obj = {
      check_in: values.date.day
    };
    console.log(obj);
    await axios
      .post(
        `http://carrotstick-api.herokuapp.com/logs`,
        obj
      )
      .then(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }

  renderData = () => {
    if (this.state.dates.length) {
      return this.state.habits.map((entry, index) => (
        <div
          className="habit_row"
          key={entry.id}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <NavLink to={`habits/${entry.id}`}>
            <li
              className="habit_item"
              key={entry.name}
              style={{ listStyle: "none", width: "6.5em", textDecoration: "none" }}
            >
              {entry.name}
            </li>
          </NavLink>
          {this.renderButtons(entry.id)}
        </div>
      ));
    }
  };

  renderDates = () => {
    return this.state.dates.map(date => (
      <li
        key={date.id}
        className="date"
        // style={{
        //   listStyle: "none",
        //   width: "6em",
        //   whiteSpace: "pre-line",
        //   // margin: "0 .4em"
        // }}
      >
        {date.day}
      </li>
    ));
  };

  render() {
    return (
      <div className="habit_grid">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginLeft: "6em"
          }}
        >
          {this.renderDates()}
        </div>
        {this.renderData()}
        {/* <button className="btn" onClick={() => this.handleDelete()}>
          delete habit
        </button> */}
      </div>
    );
  }
}
