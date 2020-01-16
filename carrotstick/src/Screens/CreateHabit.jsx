import React from "react";
import "./../styles/Overview.css";
import Form from "./../components/Form";
import Footer from "./../components/Footer";
import Header from "./../components/Header";
import "./../styles/CreateHabit.css";

const CreateHabit = props => {
  return (
    <div className="create_habit">
      <Header header="Create Habit" />
      <div className="create_habit_body">
        <Form className="habit_form" props={props} />
      </div>
      <Footer />
    </div>
  );
};

export default CreateHabit;
