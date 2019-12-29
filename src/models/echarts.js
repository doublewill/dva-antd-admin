import modelExtend from 'dva-model-extend'
import { pageModel } from './common'

export default modelExtend(pageModel, {
  namespace: 'echarts',
  state: {
    page:1
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
});