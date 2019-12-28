import React, { Component } from 'react'
import { Link } from 'dva/router'
import { Menu, Icon, SubMenu } from 'antd'
const MenuItem = Menu.Item

class SideMenu extends Component {
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
        <MenuItem key="3">
          <Icon type="appstore" />
          <Link to='/echarts'>Echarts</Link>
        </MenuItem>
      </Menu>
    )
  }
}

export default SideMenu