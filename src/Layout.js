import React from "react";


class Layout extends    React.Component{
    render(){
        return(
            <div align = "center" >
                
            <h1>Hello!!!Have a Nice Day</h1>
            <h4>Weather Condition </h4>
            <form onSubmit={this.props.getWeather}>
                <input type ="text" name="city" placeholder="City"/>
                <button>Get Weather</button>

            </form>
            </div>
        );
    };
};

export default Layout;