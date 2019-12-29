import * as service from '../services/table'

export default {
  namespace: 'table',
  state: {
    initRecords: [],
    records: [],
    complexRecords: []
  },

  subscriptions: {
    setup({ dispatch, history }) {
      dispatch({
        type: 'queryTable'
      })
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({ type: 'save' });
    },
    *queryTable({ payload }, { call, put }) {
      let data = yield call(service.query)
      let records = data.data.records
      yield put({
        type: 'querySuccess',
        payload: {
          records,
          initRecords: records,
          complexRecords: records
        }
      });
    },
    *queryComplexTable({ payload }, { call, put, select }) {
      let initRecords = yield select(state=> state.table.initRecords)
      if(!payload) {
        yield put({
          type: 'queryComplexSuccess',
          payload: initRecords
        })
      }
      else {
        yield put({
          type: 'queryComplexSuccess',
          payload: initRecords.filter((opt) => {
            if(payload['userName'] && payload['userAddress']) {
              return opt.name.indexOf(payload['userName']) > -1 && opt.address.indexOf(payload['userAddress']) > -1
            }

            if(payload['userName']) {
              return opt.name.indexOf(payload['userName']) > -1
            }

            if(payload['userAddress']) {
              return opt.address.indexOf(payload['userAddress']) > -1
            }
            return ''
          })
        })
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    queryComplexSuccess(state, action) {
      return { ...state, ...action.payload, complexRecords: action.payload };
    },
    querySuccess(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
