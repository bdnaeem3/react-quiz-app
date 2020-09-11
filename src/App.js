import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import Header from './components/Header';
import Home from './pages/home/Index';
import Registration from './pages/auth/Register';
import AddQuiz from './pages/quiz/AddQuiz';
import Results from './pages/result/Result';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
        <Header/>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/register">
                    <Registration />
                </Route>
                <Route path="/add-quiz">
                    <AddQuiz />
                </Route>
                <Route path="/results">
                    <Results />
                </Route>
            </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
