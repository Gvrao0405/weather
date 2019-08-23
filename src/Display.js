import React from "react";

class Display extends React.Component{
    render(){
        return(<div>
         <h1> Location:  { this.props.city} ,{this.props.country }</h1>
         <h1>Temperature:  { this.props.temparature }</h1>
         <h1>Humidity: { this.props.humidity }</h1>
        <h1>Weather condition: { this.props.description }</h1>
        <h1>Timezone: { this.props.timezone }</h1>
        <h1>Wind-Speed: { this.props.wind }</h1>
        <h1>Wind-Direction(Degree): { this.props.winddir } </h1>
        {this.suggestions}
        {this.onSuggestionsFetchRequested}
        {this.onSuggestionsClearRequested}
        {this.getSuggestionValue}
        {this.renderSuggestion}
        {this.inputProps}



        
        </div>
        )
    }
}

export default Display;