import React, { Component } from 'react'
import './UserInfo.css'
import { Avatar } from 'antd'
import pic from './images/IMG_0520.PNG'
class UserInfo extends Component {
    render() {
        return (
            <div className='avatarComponent'>
                <Avatar src={pic} size={256}></Avatar>
                <div className='userName'>你好</div>
            </div>
        )
    }
}
export default UserInfo