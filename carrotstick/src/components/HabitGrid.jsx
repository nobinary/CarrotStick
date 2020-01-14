import React, { Component } from "react";
import "./../styles/HabitGrid.css";

const data = [
  { id: 1, name: "One" },
  { id: 2, name: "Two" },
  { id: 3, name: "Three" },
  { id: 4, name: "Four" },
  { id: 5, name: "Five" },
  { id: 6, name: "Six" }
];

export default class Graph extends Component {
  state = {
    dates: [],
    buttons: [],
    data: []
  };

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
      let day = new Date(currentDay.setDate(first)).toISOString().slice(0, 10);
      week.push({ day, id: i });
      buttons.push(i);
      console.log(week)
    }
    this.setState({ dates: week, buttons });
  };

  createGrid = (x, y) => {
    const { data, dates } = this.state;
    const coords = { x, y };
    const values = {
      habit: data[coords.x],
      date: dates[coords.y]
    };
    console.log(values);
    // send values to API
  };

  renderButtons = rowId =>
    this.state.buttons.map(columnIndex => (
      <div key={columnIndex} style={{ width: "3em" }}>
        <input type='checkbox' onClick={() => this.createGrid(rowId - 1, columnIndex - 1)}>
        </input>
      </div>
    ));

  renderData = () => {
    if (this.state.dates.length) {
      return this.state.data.map((entry, index) => (
        <div
          key={entry.id}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          {/* {console.log(entry.id)} */}
          <li key={entry.name} style={{ listStyle: "none", width: "3em" }}>
            {entry.name}
          </li>
          {this.renderButtons(entry.id)}
        </div>
      ));
    }
  };

  renderDates = () => {
    return this.state.dates.map(date => (
      <li
        key={date.id}
        style={{
          listStyle: "none",
          width: "6em",
          margin: "0 .4em"
        }}
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
