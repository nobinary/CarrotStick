import React, { Component } from "react";
import Moment from "react-moment";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./../styles/HabitGrid.css";

const data = [
  { id: 1, name: "One" },
  { id: 2, name: "Two" },
  { id: 3, name: "Three" },
  { id: 4, name: "Four" },
  { id: 5, name: "Five" },
  { id: 6, name: "Six" }
];

export default class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      buttons: [],
      data: [],
      habits: [],
      formInput: {
        check_in: ""
      }
    };
  }

  componentDidMount() {
    this.createDates();
    this.setState({ data });
  }

  handleButtonClick = () => {};
  createDates = () => {
    let currentDay = new Date();
    let week = [];
    let buttons = [];
    for (let i = 1; i <= 7; i++) {
      let first = currentDay.getDate() - currentDay.getDate() + i;
      let day = `${new Date(currentDay.setDate(first))
        .toString()
        .slice(0, 3)} ${new Date(currentDay.setDate(first))
        .toISOString()
        .slice(6, 10)}`;
      week.push({ day, id: i });
      buttons.push(i);
      // console.log(day);
      // console.log(currentDay)
    }
    this.setState({ dates: week, buttons });
  };

  componentWillMount() {
    this.testData();
  }

  testData = async () => {
    try {
      const habits = await axios.get(`http://localhost:3000/habits`);
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

    }
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

  async handleSubmit(event, value) {
    event.preventDefault();
    const obj = {
      name: this.state.formInput.name
    };
    console.log(obj);
    await axios
      .put(
        `http://localhost:3000/habits/${this.props.match.params.habit_id}`,
        obj
      )
      .then(
        response => {
          console.log(response);
          this.getHabit();
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
              style={{ listStyle: "none", width: "6.5em" }}
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
      </div>
    );
  }
}
