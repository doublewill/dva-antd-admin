import React, { Component } from 'react'
import { Table } from 'antd'
class TableHome extends Component {
  constructor(props) {
    super(props)

    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
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
        title: 'Birthday',
        dataIndex: 'birthday',
        key: 'birthday',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Level',
        dataIndex: 'level',
        key: 'level',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      }
    ]

    this.state = {
      columns,
    }
  } 
   
  render() {
    const { columns } = this.state
    const { records = [] } = {}
    const pagination = {
      showSizeChanger: true,
      showQuickJumper: true,
      pageSizeOptions: ['10', '20', '30', '40']
    }    
    return (
      <Table columns={columns}
        pagination={pagination}
        dataSource={records || []} bordered />
    )
  }
}

export default TableHome