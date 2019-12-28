
import { Mock, mock, Random } from 'mockjs'

const statisticList = ['新增用户', '日活跃', '月活跃', '取关量'].map((opt, index) => {
  return {
    title: opt,
    value: 4465436,
    trend: [ 'increase', 'decrease' ][index % 2],
    suffix: '个'
  }
})

const tableList = mock({
  'records|30-300': [
    {     
      key: ()=> mock('@natural'),
      id: ()=> mock('@increment'),
      name: ()=> mock('@cname()'),
      age: ()=> mock('@integer(10, 80)'),
      level: ()=> mock({ "level|1-5": "★" }).level,      
      email: ()=> mock('@email()'),      
      birthday: ()=> Random.datetime(),            
      address: () => mock('@county(true)'),
      tags: () => ['nice', 'developer']
    }
  ]
})

const articleList = mock({
  'articleList|5': [
    {
      key: ()=> mock('@natural'),
      avtar: ()=> Random.image('100x100'),
      title: ()=> mock('@ctitle'),
      description: ()=> mock('@cparagraph')
    }
  ]
})

export default {
  '/api/dashboard': {
    statistics: statisticList,
    userList: tableList.records.slice(0, 20),
    articleList: articleList.articleList
  },
  '/api/table': {
    records: tableList.records
  },
};
