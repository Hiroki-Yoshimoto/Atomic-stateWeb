import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLayoiut } from "../components/templates/DefaultLayoiut";
import { HederOnly } from "../components/templates/HederOnly";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayoiut>
            <Top />
          </DefaultLayoiut>
        </Route>

        <Route path="/users">
          <HederOnly>
            <Users />
          </HederOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
