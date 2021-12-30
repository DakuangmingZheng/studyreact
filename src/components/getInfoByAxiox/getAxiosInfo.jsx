import React, {Component} from 'react';
import axios from "axios";

class GetAxiosInfo extends Component {
    delRef=React.createRef()
    state = {
        users:[]
    }
    getUserInfo = () => {
            axios.get('http://localhost:3030/users').then(
               response => {
                            this.setState({users:response.data})
                               },
                               () => {
                                    console.log("获取信息失败")
                               }
            )
    }
    deleteInfo= () => {
            const id = this.delRef.current.value
            axios.delete('http://localhost:3030/users/'+id).then(
                  () => {
                                   this.getUserInfo()
                                  },
                                  () => {
                                      console.log("删除失败")
                                  }
            )
    }
    render() {
        const {users} = this.state
        const user = users.map((each) => {
            return <p key={each.id} > id为：{each.id}   创建时间为：  {each.CreateAt} </p>
        })
        return (
            <div>
                <input placeholder='删除该id的数据' ref={this.delRef} />
                <button onClick={this.deleteInfo}>删除</button>
                <button onClick={this.getUserInfo}>点我获取用户信息</button>
                {user}
            </div>
        );
    }
}

export default GetAxiosInfo;
