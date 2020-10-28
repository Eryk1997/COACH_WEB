import React from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import { Switch, Route } from 'react-router-dom';
import Login from "./views/login/Login";
import About from "./views/about/About";
import Registration from "./views/registration/Registration";
import PageNotFound from "./views/pageNotFound/PageNotFound";
import AddPerson from "./views/addPerson/AddPerson";
import Proteges from "./views/proteges/Proteges";
import Settings from "./views/settings/Settings";
import ProtegesInfo from "./views/protegesInfo/ProtegesInfo";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/addPerson" component={AddPerson} />
          <Route path="/proteges" component={Proteges} />
          <Route path="/settings" component={Settings} />
          <Route path="/protegesInfo" component={ProtegesInfo} />
          <Route component={PageNotFound} />
        </Switch>
        
      <Footer />
    </div>
  );
}

export default App;
