/** @fontsource/material-icons 패키지의 구글 머티리얼 아이콘 컴포넌트
 * @param name: 아이콘 이름
 * @param className: 클래스 설정
 * @param style: inline 스타일 설정
 * @param onClick: 클릭 이벤트 함수
 */
export const Icon = ({name, className, style, onClick}) => {
  const iconClassName = ['material-icons', className].join(' ')
  return (
    <span className={iconClassName} style={style} onClick={onClick}>
      {name}
    </span>
  )
}
