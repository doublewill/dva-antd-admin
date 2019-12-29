import modelExtend from 'dva-model-extend'

const model = {
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}

const pageModel = modelExtend(model, {

  state: {
    funcs: [],
    errorMsg: "",
    errorVisible: false,
    isExistInPanes: false,
  },

  effects: {
    *getPanelList({ payload }, { select, call, put }) {
      const panes = yield select(state => state.app.panes);
      yield put({ type: 'querySuccess', payload: { isExistInPanes: false } })
      for (let i = 0; i < panes.length; i++) {
        let path = panes[i].key;
        if (payload === path) {
          yield put({ type: 'querySuccess', payload: { isExistInPanes: true } })
          break;
        }
      }
    },
  },

  reducers: {
    querySuccess(state, { payload }) {
      const { isExistInPanes } = payload
      return {
        ...state,
        isExistInPanes,
        ...payload,
      }
    },
    setFunc(state, payload) {
      return {
        ...state,
        funcs: payload.payload,
      }
    },
    setError(state, payload) {
      return {
        ...state,
        errorMsg: payload.errorMsg,
        errorVisible: payload.errorVisible,
      }
    }
  },

})


module.exports = {
  model,
  pageModel,
}
