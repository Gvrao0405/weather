import React from "react";
import Layout from './Layout';
import Display from './Display';
import Autosuggest from 'react-autosuggest';


const API_KEY = "5ef55e245dfc55947e47204dee56eb11";


class App extends React.Component{  

  state = {
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    temparature: undefined,
    pressure: undefined,
    timezone: undefined,
    wind: undefined,
    winddir: undefined
}

  getWeather = async (e)=>{

    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      city: data.name,
      country:data.sys.country,
      temparature: data.main.temp,
      humidity: data.main.humidity,
      pressure:data.main.pressure,
      description: data.weather[0].description,
      timezone: data.timezone,
      wind: data.wind.speed,
      winddir: data.wind.deg,
       
    });

  }

  render(){
    return(<div>
      <Layout  getWeather={this.getWeather}/>
      <Display 
      city={this.state.city}
      country={this.state.country}
      temparature={this.state.temparature}
      humidity={this.state.humidity}
      description={this.state.description}  
      timezone={ this.state.timezone}
      wind={this.state.wind}
      winddir={this.state.winddir}

      />
    </div>
    );
  }
}

const languages = [
  {
    "id": "1",
    "name": "Mumbai",
    "state": "Maharashtra"
},
{
    "id": "2",
    "name": "Delhi",
    "state": "Delhi"
},
{
    "id": "3",    
    "name": "Bengaluru",
    "state": "Karnataka"
}
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

class Example extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type a programming language',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default App;