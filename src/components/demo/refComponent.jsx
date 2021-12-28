import React from "react";

export default class RefComponent extends React.Component {
    input1Ref = React.createRef()
    input2Ref = React.createRef()
    showData1 = ()=>{
        const input1 = this.input1Ref.current
        alert(input1.value)
    }
    showData2 = ()=>{
        const input2 = this.input2Ref.current
        alert(input2.value)
    }
    showData3 = ()=>{
        const input3 = this.input3Ref
        alert(input3.value)
    }
    render() {
        return(
            <div>
                <input ref={this.input1Ref} placeholder='左侧输入框'/>
                <button onClick={this.showData1}>弹出左侧输入框内容</button>
                <input ref={this.input2Ref} onBlur={this.showData2} placeholder='右侧输入框（绑定blur）'/>
                <input ref={(currentNode)=>{this.input3Ref = currentNode}} onBlur={this.showData3} placeholder='回调绑定（绑定blur）'/>
            </div>
            )

    }
}
