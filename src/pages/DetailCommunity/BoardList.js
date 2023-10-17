// 게시글 세부목록 컴포넌트(mypage(내가 등록한 게시글), community 에 사용)
import {Icon} from '../../components'
import {BoardLists, BoardListsDiv} from '../../styled'
import {useNavigate} from 'react-router-dom'

export const BoardList = ({id, noticeid, title, write, date, heart, view, style}) => {
  const Navigate = useNavigate()
  const ListClicked = () => {
    if (id) Navigate(`/community/${id}`)
    else if (noticeid) Navigate(`/community/${noticeid}`)
  }

  return (
    <BoardLists onClick={ListClicked} style={style}>
      <BoardListsDiv width="10%" iscenter="center" style={id ? {} : {color: 'red'}}>
        {id ? id : '공지사항'}
      </BoardListsDiv>
      <BoardListsDiv width="60%" style={{paddingLeft: '10px'}}>
        {title}
      </BoardListsDiv>
      <BoardListsDiv width="10%" iscenter="center">
        {write}
      </BoardListsDiv>
      <BoardListsDiv width="10%" iscenter="center">
        {date}
      </BoardListsDiv>
      <BoardListsDiv width="10%" iscenter="center">
        <Icon name="favorite" style={{color: 'red'}} />
        {heart}
      </BoardListsDiv>
      <BoardListsDiv width="10%" iscenter="center">
        {view}
      </BoardListsDiv>
    </BoardLists>
  )
}
