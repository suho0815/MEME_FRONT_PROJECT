import * as U from './util'

/**
 *
 * @param width picsum사이트에 요청할 이미지의 가로 길이
 * @param height picsum사이트에 요청할 이미지의 세로 길이
 * @returns 가로세로 길이가 파라미터에 포함되어있는 완성된 picsum사이트 URL
 */
export const picsumURL = (width, height) => `https://picsum.photos/${width}/${height}`
/**
 * 랜덤한 사이즈의 이미지를 picsum 사이트에 요청
 * @param width 이미지의 최소 가로 길이
 * @param height 이미지의 최소 세로 길이
 * @param delta 이미지 가로 세로 길이의 최대길이가 width+delta, height+delta
 * @returns 가로세로 길이가 파라미터에 포함되어있는 완성된 picsum사이트 URL
 */
export const randomImage = (width = 1000, height = 800, delta = 200) =>
  picsumURL(U.random(width, width + delta), U.random(height, height + delta))
