import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MovieShowcase from './MovieShowcase';
import ChessShowcase from './ChessShowcase';
export default function App() {
  return (
    <Router>
      <div>
        <p>OK so I went to this link <a href="https://reacttraining.com/react-router/web/guides/quick-start">here</a> and downloaded React Router so I could preserve the original website and then also add in my own stuff that mimics the original just to mess around & learn how things work.</p>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movieshowcase">MovieShowcase</Link>
            </li>
            <li>
              <Link to="/burd">burd</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/movieshowcase">
            <MovieShowcase />
          </Route>
          <Route path="/burd">
            <ChessShowcase />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>movieshowcase</h2>;
}

function Burd() {
  return <h2>burd</h2>;
}
