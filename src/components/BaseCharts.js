import React from 'react'
import ReactEcharts from 'echarts-for-react'

const BaseCharts = (props) => {
  let { option = {} } = props
  return (
    <ReactEcharts
      option={ option }
      height = {'400px'}
      notMerge={true}
      lazyUpdate={true}
      style={{width: '100%',height:'100%'}}
    />
  )
}

export default BaseCharts
