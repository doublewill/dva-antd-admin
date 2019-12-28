import React, {Component} from 'react'
import {Menu} from 'antd'
import BaseCharts from '../../components/BaseCharts'

import setRadarOption from './modules/echarts/radar'
import setLineOption from './modules/echarts/line'
import setAreaOption from './modules/echarts/area'
import setBarOption from './modules/echarts/bar'
import setPieOption from './modules/echarts/pie'
import setFunnelOption from './modules/echarts/funnel'

import './index.less'

class Charts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartType: 'line',
      chartHeight: 300
    }
  }

  handleChartHeight = () => {
    this.setState({
      chartHeight: document.body.clientHeight - 105
    })
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.handleChartHeight()
    })
    this.handleChartHeight()
  }

  handleClick = ({item, key, keyPath, domEvent}) => {
    this.setState({chartType: key})
  }
  render() {
    const {
      chartType = "line",
      chartHeight = 300
    } = this.state
    return (
      <div>
        <div
          className="chart-container"
          style={{
          height: chartHeight + 'px'
        }}>
          <div className="chart-container-type">
            <Menu
              onClick={this.handleClick}
              style={{
              width: 150
            }}
              defaultSelectedKeys={['line']}
              defaultOpenKeys={['sub1']}
              mode="inline">
              <Menu.Item key="line">折线图</Menu.Item>
              <Menu.Item key="area">区域图</Menu.Item>
              <Menu.Item key="bar">柱状图</Menu.Item>
              <Menu.Item key="pie">饼图</Menu.Item>
              <Menu.Item key="radar">雷达图</Menu.Item>
              <Menu.Item key="funnel">漏斗图</Menu.Item>
            </Menu>
          </div>
          <div className="chart-container-content">
            {chartType === 'line' && <BaseCharts option={setLineOption()}/>}
            {chartType === 'area' && <BaseCharts option={setAreaOption()}/>}
            {chartType === 'radar' && <BaseCharts option={setRadarOption()}/>}
            {chartType === 'bar' && <BaseCharts option={setBarOption()}/>}
            {chartType === 'pie' && <BaseCharts option={setPieOption()}/>}
            {chartType === 'funnel' && <BaseCharts option={setFunnelOption()}/>}
          </div>
        </div>
      </div>
    )
  }
}

export default Charts
