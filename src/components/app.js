import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Home from '../routes/home';
import Grid from './grid';
import Hero from './hero';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Grid />
        <Hero />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
        </Router>
        <Footer />
      </div>
    );
  }
}
