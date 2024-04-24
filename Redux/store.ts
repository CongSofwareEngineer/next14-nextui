import { WHITE_LIST_PERSIT_REDUX } from '@/Constant/redux'
import { configureStore } from '@reduxjs/toolkit'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

import appReducer from './appReducer'
import { IntlAction } from 'react-intl-redux'

const reducer = (state: Partial<unknown> | unknown, action: IntlAction) => {
  return appReducer(state || {}, action)
}

export const makeStore = () => {
  const isClient = typeof window !== 'undefined'

  const persistConfig = {
    key: 'nextjs',
    storage,
    whitelist: WHITE_LIST_PERSIT_REDUX,
    stateReconciler: autoMergeLevel2
  }
  const persistedReducer = persistReducer(persistConfig, reducer)
  const storeRedux = configureStore({
    reducer: {
      app: persistedReducer
    }
  })
  if (isClient) {
    // const intlReducerData = getPersistDataByKey(SLICES.local)
    // if (intlReducerData) {
    //   storeRedux.dispatch(setLanguage(intlReducerData))
    // }
    return storeRedux
  }

  return storeRedux
}
const persistor = persistStore(makeStore())
const storeRedux = makeStore()

export { persistor }
export default storeRedux