import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, Radio, WhiteSpace,Button } from 'antd-mobile';

class Register extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      type: 'genius',
      user: '',
      pwd: '',
      repeatpwd: ''
    }
    this.handleRegister = this.handleRegister.bind(this)
  }
  handleChange (key, val) {
    this.setState({
      [key]: val
    })
  }
  handleRegister () {
    console.log(this.state)
  }
  render () {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        <Logo></Logo>
        <List>
          <InputItem
            onChange={v => this.handleChange('user', v)}
          >用户名</InputItem>
          <WhiteSpace/>
          <InputItem
            onChange={v => this.handleChange('pwd', v)}
            type="password"
          >密码</InputItem>
          <WhiteSpace/>
          <InputItem
            onChange={v => this.handleChange('repeatpwd', v)}
            type="password"
          >确认密码</InputItem>
          <WhiteSpace/>
          <RadioItem
            checked={this.state.type === 'genius'}
            onChange={() => {this.handleChange('type', 'genius')}}
          >牛人</RadioItem>
          <WhiteSpace/>
          <RadioItem
            checked={this.state.type === 'boss'}
            onChange={() => {this.handleChange('type', 'boss')}}
          >BOSS</RadioItem>
          <WhiteSpace/>
          <Button type="primary" onClick={this.handleRegister}>注册</Button>
        </List>
      </div>
   )
  }
}

export default Register