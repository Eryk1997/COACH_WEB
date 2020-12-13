import React from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import { Switch, Route } from "react-router-dom";
import Login from "./views/login/Login";
import About from "./views/about/About";
import Registration from "./views/registration/Registration";
import PageNotFound from "./views/pageNotFound/PageNotFound";
import AddPerson from "./views/addPerson/AddPerson";
import Proteges from "./views/proteges/Proteges";
import Settings from "./views/settings/Settings";
import ProtegesInfo from "./views/protegesInfo/ProtegesInfo";
import HistoryTraining from "./views/historyTraining/HistoryTraining";
import HistoryInfo from "./views/historyInfo/HistoryInfo";
import AddTraining from "./views/addTraining/AddTraining";

import { ProtectedRoute } from "./configuration/ProtectedRoute";
function App() {
  return (
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <ProtectedRoute path="/addPerson" component={AddPerson} />
          <ProtectedRoute path="/proteges" component={Proteges} />
          <ProtectedRoute path="/settings" component={Settings} />
          <ProtectedRoute path="/pupilInfo" component={ProtegesInfo} />
          <ProtectedRoute path="/historyTraining" component={HistoryTraining} />
          <ProtectedRoute path="/historyInfo" component={HistoryInfo} />
          <ProtectedRoute path="/addTraining" component={AddTraining} />
          <Route component={PageNotFound} />
        </Switch>

      <Footer />
    </div>
  );
}

export default App;
