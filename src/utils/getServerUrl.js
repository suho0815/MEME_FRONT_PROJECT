/** 서버 url 가져오는 함수
 * @param path: uri 경로 ex) '/community/board'
 */

export const getServerUrl = path => {
  const host = 'http://localhost:8080'
  return [host, path].join('')
}
