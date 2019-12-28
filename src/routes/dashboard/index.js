import React, { Component } from 'react'
import { Row, Icon, Col, Table, List, Avatar, Statistic, Card } from 'antd'
import BaseCharts from '../../components/BaseCharts'
import PianoCharts from './PianoCharts'
import RadarCharts from './RadarCharts'
import AreaCharts from './AreaCharts'
import MultipleYCharts from './MultipleYCharts'

const ListItem = List.Item
 
class Dashboard extends Component {
  constructor(props) {
    super(props)

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      }
    ];

    this.state = {
      collapsed: false,
      columns,
      listData: [
        { title: 'Ant Design Title 1' },
        { title: 'Ant Design Title 2' },
        { title: 'Ant Design Title 3' },
        { title: 'Ant Design Title 4' },
      ]
    }    
  }
   
  render() {
    const { columns } = this.state

    const { statistics = [], userList = [], articleList = [] } = {}
    const pagination = {
      showSizeChanger: false,
      showQuickJumper: false,
      pageSizeOptions: ['10', '20', '30', '40']
    }
    let cards = statistics.map(opt => {
      return <Col className="gutter-row" span={6}>
        <Card>
          <Statistic
            title={opt.title}
            value={opt.value}
            precision={2}
            valueStyle={opt.trend === 'increase' ? { color: '#fa541c' } : { color: '#3f8600' }}
            prefix={opt.trend === 'increase' ? <Icon type="arrow-up" /> : <Icon type="arrow-down" />}
            suffix={opt.suffix}
          />
        </Card>
      </Col>
    })

    return (
      <div>
        <Row gutter={8} className="statistic-cards">
          {cards}
        </Row>

        <div style={{ height: "400px" }}>
          <BaseCharts option={PianoCharts()} />
        </div>

        <Row gutter={16} className="charts-list">
          <Col className="charts-list-item" span={8}>
            <BaseCharts option={RadarCharts()} />
          </Col>
          <Col className="charts-list-item" span={8}>
            <BaseCharts option={MultipleYCharts()} />
          </Col>
          <Col className="charts-list-item" span={8}>
            <BaseCharts option={AreaCharts()} />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col className="gutter-row" span={12}>
            <div className="gutter-box">
              <Table columns={columns} pagination={pagination} dataSource={userList} bordered />
            </div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div className="gutter-box">
              <List
                itemLayout="horizontal"
                dataSource={articleList}
                renderItem={item => (
                  <ListItem>
                    <ListItem.Meta
                      avatar={<Avatar src={item.avtar} />}
                      title={item.title}
                      description={item.description}
                    />
                  </ListItem>
                )}
              />,
                </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Dashboard