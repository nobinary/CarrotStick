import React from "react";
import Input from "./Input";
import axios from "axios";
import  './../styles/Form.css'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formInputs: {
        name: ""
      }
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    console.log(props);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      formInputs: {
        [name]: value
      }
    });
  }

  async handleAdd(event) {
    event.preventDefault();
    console.log(this.state.formInputs);
    const obj = {
      name: this.state.formInputs.name
    };
    console.log(obj);
    await axios.post("http://localhost:3000/habits", obj).then(
      response => {
        console.log(response);
        console.log(this.props);
        this.props.props.history.push("/habits");
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
    return (
      <form onSubmit={this.handleAdd}>
        <Input
          className="add_input"
          handleChange={this.handleChange}
          name={"name"}
          placeholder={"habit name"}
          type={"text"}
          value={this.state.formInputs.name}
          id={"name"}
        />
        <input type="submit" value="add habit" className="add_btn"/>
      </form>
    );
  }
}

export default Form;
