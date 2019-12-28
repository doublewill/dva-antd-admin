import React, { Component } from 'react'
import { Link } from 'dva/router'
import { Menu, Icon } from 'antd'
const MenuItem = Menu.Item

export class SideMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }
  render() {
    return (
      <Menu
        className="side-bar"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={this.state.collapsed}
      >
      <MenuItem key="1">
        <Icon type="dashboard" />
        <Link to='/dashboard'>主页</Link>
      </MenuItem>
      <MenuItem key="2">
        <Icon type="pie-chart" />
        <Link to='/table'>表格</Link>
      </MenuItem>
    </Menu>
    )
  }
}
