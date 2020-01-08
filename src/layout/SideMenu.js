import React, { Component } from 'react'
import { Link } from 'dva/router'
import { Menu, Icon } from 'antd'
const MenuItem = Menu.Item
const { SubMenu }= Menu
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

        <SubMenu
          key="3"
          title={
            <span>
              <Icon type="appstore" />
              <span>图表</span>
            </span>
          }
        >
          <MenuItem key="4">
            <Link to='/echarts'>Echarts</Link>
          </MenuItem>
          <MenuItem key="5">
            <Link to='/d3-charts'>D3-echarts</Link>
          </MenuItem>
          <MenuItem key="6">
            <Link to='/three-charts'>Three-echarts</Link>
          </MenuItem>
          <MenuItem key="7">
            <Link to='/g2-charts'>G2-echarts</Link>
          </MenuItem>
        </SubMenu> 
      </Menu>
    )
  }
}

export default SideMenu