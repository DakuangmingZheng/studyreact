import React from "react";

export default class FormDemo2 extends React.Component{
    handelSubmit = (e)=>{
        e.preventDefault();
        const {username,password,validCode} = this.state
        console.log(`用户名：${username}  密码：${password}  验证码：${validCode}` )
    }
    changeFormDate=(name)=>{
        return (e)=>{
            this.setState({
                [name]:e.target.value
            })
        }
    }
    render() {
        return(
            <form onSubmit={this.handelSubmit} method="post">
                <h1>受控组件</h1>
                用户名<input onChange={this.changeFormDate('username')} placeholder="请输入用户名"/>
                密码<input onChange={this.changeFormDate('password')} type="password" placeholder="请输入密码"/>
                验证码：0+7=?<input onChange={this.changeFormDate('validCode')}   placeholder="请输入验证码"/>
                <button>登录</button>
            </form>
        )
    }
}
