import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import './App.css';

const cities=[
  'Las Palmas de Gran Canaria,es',
  'London,gb',
  'Tokyo,jp',
  'Helsinki,fi',
  'Madrid,es'
];

class App extends Component {
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList
            cities={cities}
            onSelectedLocation={this.handleSelectedLocation}
           />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
