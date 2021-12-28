import React from "react";

export default class OnDemo extends React.Component{
    constructor(props) {
        super(props);
        this.state={isHot:true,wind:true}
        this.changeWeather =this.changeWeather.bind(this)
    }
    render() {
      return(
          <div>
            <h1 onClick={this.changeWeather}>
                当前天气是{this.state.isHot?'炎热':'寒冷'}风力{this.state.wind?'强劲':'微弱'}
            </h1>
          </div>
          )

    }
    changeWeather(){
        this.setState({
            isHot:!this.state.isHot,
            wind:!this.state.wind
        })
    }
}
