import React from "react";
import { Route, Switch } from "react-router-dom";
import FrontPage from "./../Screens/FrontPage";
import Habits from "./../Screens/Habits";
import CreateHabit from "./../Screens/CreateHabit";
import Habit from "./../Screens/Habit";
import Overview from "./../Screens/Overview";

export const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={FrontPage} />
      <Route exact path="/habits" component={Habits} />
      <Route 
      exact path="/createhabit" 
      render={props => <CreateHabit {...props} />}
      />
      <Route exact path="/overview" component={Overview} />
      <Route
        exact
        path="/habits/:habit_id"
        render={props => <Habit {...props} />}
      />
    </Switch>
  );
};
