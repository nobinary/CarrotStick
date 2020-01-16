import React from "react";
import "./../styles/Overview.css";
import Footer from "./../components/Footer";
import Header from "./../components/Header";
import "./../styles/Habit.css";
import axios from "axios";
import Form from "./../components/Form";
import Input from "./../components/Input";
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
        `http://localhost:3000/habits/${this.props.match.params.habit_id}`
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
        `http://localhost:3000/habits/${this.props.match.params.habit_id}`
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
        `http://localhost:3000/habits/${this.props.match.params.habit_id}`,obj)
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

  //   handleUpdate (event, formInputs) {
  //     event.preventDefault()
  //     console.log('in it to win it')
  //     fetch(`/notices/${formInputs.id}`, {
  //       body: JSON.stringify(formInputs),
  //       method: 'PUT',
  //    headers: {
  //      'Accept': 'application/json, text/plain, */*',
  //      'Content-Type': 'application/json'
  //    }
  //   })
  //    .then(updatedNotice => {
  //      this.getNotices()
  //    })
  //    .catch(error => console.log(error))
  //   }

  render() {
      console.log(this.state.formInput.name)
    return (
      <div className="habit">
        <Header header={this.state.habit}/>
        <p className="habit_body">{this.state.habit}</p>
        <button className="delete_btn" onClick={() => this.handleDelete()}>
          Delete habit
        </button>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            placeholder="type new name"
            name={"name"}
            type="text"
            value={this.state.formInput.name}
          ></input>
          <input className="delete_btn" type="submit" value="Rename habit" />
        </form>
        <NavLink to="/habits">
          <button className="delete_btn"> Back to list</button>
        </NavLink>
        <Footer />
      </div>
    );
  }
}

export default Habit;
