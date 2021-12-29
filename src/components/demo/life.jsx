import React from "react";
import H1 from './h1'
export default class Life extends React.Component{
    state = {count:0,showCount:true}
    componentDidMount() {
       this.timer= setInterval(()=>{
            let {count} = this.state
            count++
            this.setState({count:count})

        },1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    stopCount=()=>{
        this.setState({
            showCount:false
        })
    }
    restartCount=()=>{
        this.setState({
            showCount:true
        })
    }
    render() {
        let {count,showCount} = this.state
        return(
            <div>
                <H1 showCount={showCount} count={count}/>
                <button onClick={this.stopCount}>停止</button>
                <button onClick={this.restartCount}>重启</button>
            </div>
        )
    }
}
