/**
 * 자바스크립트가 기본으로 제공하는 Array 클래스를 좀 더 간결하게 사용하는 함수
 * @param length 배열의 길이
 * @returns null 값이 들어있는 배열
 */
export const makeArray = length => new Array(length).fill(null)

/**
 * 범위 지정
 * @param min 이상
 * @param max 미만
 * @returns min이상 max미만의 정수 배열
 */
export const range = (min, max) => makeArray(max - min).map((_, index) => index + min)

/**
 * min 과 max 범위에서의 무작위 정수를 반환
 * @param min 이상
 * @param max 미만
 * @returns min이상 max미만의 랜덤한 정수
 */
export const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
