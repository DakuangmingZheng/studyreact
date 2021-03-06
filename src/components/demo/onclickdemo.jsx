import React from "react";

export default class OnDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isHot:true,wind:true}
    }
    render() {
        const {temperature} = this.props
        const {isHot,wind} = this.state
        return (
            <div>
                <h1 onClick={this.changeWeather}>
                    当前天气是{isHot ? '炎热' : '寒冷'}风力{wind ? '强劲' : '微弱'},温度是{temperature}
                </h1>
            </div>
        )

    }

    changeWeather = () => {
        this.setState({
            isHot: !this.state.isHot,
            wind: !this.state.wind,
            temperature:this.state.temperature+1
        })
    }
}
