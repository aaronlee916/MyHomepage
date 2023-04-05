import React, { Component } from 'react'
import './UserInfo.css'
import { Avatar, Button } from 'antd'
import pic from './images/IMG_0520.PNG'
class UserInfo extends Component {
    render() {
        return (
            <div className='avatarComponent'>
                <Avatar src={pic} size={256}></Avatar>
                <div className='userName'>Aaron Lee</div>
                <Button className='enter' onClick={handleEnterClick} block type='primary' style={{height:'50px', top:'50px'}}>进入</Button>
            </div>
        )
    }
    

}
function handleEnterClick(){
    
}
export default UserInfo