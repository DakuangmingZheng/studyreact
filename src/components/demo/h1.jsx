import React from "react";

export default class H1 extends React.Component{
    render() {
        const {showCount,count} = this.props
        if(showCount){
            return (
                <h1> 自增计数器 ： {count}</h1>
            )
        }else{
            return (<h1>

            </h1>)
        }

    }
}
