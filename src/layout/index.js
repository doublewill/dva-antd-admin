import React, { Component } from 'react'
import { Icon, Avatar } from 'antd'
import { Link } from 'dva/router'
import { SideMenu } from './SideMenu'

class Layout extends  Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main-app">
        <SideMenu/>

        <div className="nav-bar">
          管理平台
          <div className="nav-funcs">
            <Avatar size="small" icon="user" />
            <Link to='/login'>
              <span className="logout">
                <Icon type="logout" />
              </span>
            </Link>
          </div>
        </div>

        <div className="app-container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout