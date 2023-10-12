import {DateTime} from 'luxon'

export const makeRandomPastDate = () => {
  const value = new Date().valueOf()
  const n = 100000
  return new Date(value - Math.floor(Math.random() * n * n))
}

// luxon 패키지의 '19시간 전' 형태로 날짜를 만들 때 필요한 DateTime 객체 사용
// fromJSDate함수로 DateTime객체로 변환 후 입력된 날짜와 현재 시간 간의 상대적인 시간을 계산하고 반환
export const makeRelativeDate = date => DateTime.fromJSDate(date).startOf('day').toRelative()
export const randomRelativeDate = () => makeRelativeDate(makeRandomPastDate())

export const makeDayMonthYear = date => DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_FULL)
export const randomDayMonthYear = () => makeDayMonthYear(makeRandomPastDate())
