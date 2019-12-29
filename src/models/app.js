import * as dashboard from '../services/dashboard'
import { routes } from '../router'

export default {
  namespace: 'app',
  state: {
    menu: routes
  },
  subscriptions: {
    setup({ dispatch, history }) {
      dispatch({
        type: 'init'
      })
    },
  },

  effects: {
    *init({ payload }, { select, put, call }) {
      let user =  yield call(dashboard.query)
      yield put({
        type: 'querySuccess',
        payload: {
          ...yield select(state => state.app),
          ...user.data
        }
      })
    },
  },

  reducers: {
    querySuccess(state, action) {
      return { ...state, ...action.payload}
    }
  },

};
