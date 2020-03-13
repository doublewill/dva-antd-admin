import React, { Component } from 'react'
import { Menu } from 'antd'

import './index.less'
import DrawG2 from './modules/g2/draw'
import setLine from './modules/g2/line'

class G2Charts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartType: 'line',
      chartHeight: 300
    }
  }

  handleChartHeight = (callback) => {
    const chartHeight = document.body.clientHeight - 105
    this.setState({
      chartHeight
    }, callback && callback(chartHeight))
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.handleChartHeight()
    })
    this.handleChartHeight((chartHeight) => {
      const data = [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 },
      ]
      let rect = document.getElementsByClassName('chart-container-content')[0]
      let width = rect.getBoundingClientRect().width
      setLine({
        el: 'js-line',
        height: chartHeight,
        width,
      })

      new DrawG2({
        el: 'c1',
        height: chartHeight,
        width,
        data
      })
    })
  }

  handleClick = ({ item, key, keyPath, domEvent }) => {
    this.setState({ chartType: key })
  }
  render() {
    const {
      chartType = "line",
      chartHeight = 300
    } = this.state

    return (
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
            defaultSelectedKeys={['bar']}
            defaultOpenKeys={['sub1']}
            mode="inline">
            <Menu.Item key="line">折线图</Menu.Item>
            <Menu.Item key="area">区域图</Menu.Item>
            <Menu.Item key="bar">柱状图</Menu.Item>
            <Menu.Item key="pie">饼图</Menu.Item>
            <Menu.Item key="radar">雷达图</Menu.Item>
            <Menu.Item key="funnel">漏斗图</Menu.Item>
            <a href="https://g2.antv.vision/zh" style={{ marginLeft: '25px' }} target="_blank" rel="noopener noreferrer">g2 API</a>
          </Menu>
        </div>
        <div className="chart-container-content">
         <div className='chart-g2-ele' style={{display: chartType === "bar" ? "block" : "none" }} id="c1"></div>
         <div className='chart-g2-ele' style={{display: chartType === "line" ? "block" : "none" }} id="js-line"></div>
        </div>
      </div>
    )
  }
}

export default G2Charts
