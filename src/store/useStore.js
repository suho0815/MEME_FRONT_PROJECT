import {configureStore} from '@reduxjs/toolkit'
import {rootReducer} from './rootReducer'
import {useMemo} from 'react'

/** 스토어 생성 함수 */
const initializeStore = () => {
  const store = configureStore({reducer: {rootReducer}, middleware: []})
  // console.log(store.getState()) // 현재 store 안에 들어있는 상태를 조회합니다.
  return store
}

/** 리덕스 스토어 사용 커스텀 훅 */
export function useStore() {
  const store = useMemo(() => initializeStore(), [])
  return store
}
