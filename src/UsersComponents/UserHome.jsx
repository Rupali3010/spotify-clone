import React from "react";
import UserLeftBlock from "./UserLeftBlock";
import UserRightBlock from "./UserRightBlock";
import "./userBlock.css";
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";

const UserHome = () => {
  let { path } = useRouteMatch();
  return (
    <section id="userBlock">
      <article>
        <UserLeftBlock />

        <Switch>
          <Route path={`${path}/:id`}>
            <UserRightBlock />
          </Route>
        </Switch>
      </article>
    </section>
  );
};

export default UserHome;
