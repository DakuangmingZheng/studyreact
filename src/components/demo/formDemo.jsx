import React from "react";

export default class FormDemo extends React.Component{
    handelSubmit = (e)=>{
        e.preventDefault();
        const {username,password,validCode} = this
        console.log(`用户名：${username.value}  密码：${password.value}  验证码：${validCode.current.value}` )
    }
    validCode=React.createRef()
    pwdRef=(e)=>{
      this.password = e
   }
    render() {
        return(
            <form onSubmit={this.handelSubmit} method="post">
                <h1>非受控组件</h1>
                用户名<input ref={(c)=>{this.username = c}} placeholder="请输入用户名"/>
                密码<input ref={this.pwdRef} type="password" placeholder="请输入密码"/>
                验证码：0+7=?<input ref={this.validCode} placeholder="请输入验证码"/>
                <button>登录</button>
            </form>
        )
    }
}
