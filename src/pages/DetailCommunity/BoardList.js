import {Icon} from '../../components'
import {BoardLists, BoardListsDiv, Title} from '../../styled'

export const BoardList = ({id, title, write, date, heart, view}) => {
  return (
    <BoardLists>
      <BoardListsDiv width="10%" iscenter={true} style={id ? {} : {color: 'red'}}>
        {id ? id : '공지사항'}
      </BoardListsDiv>
      <BoardListsDiv width="60%" style={{paddingLeft: '10px'}}>
        {title}
      </BoardListsDiv>
      <BoardListsDiv width="10%" iscenter={true}>
        {write}
      </BoardListsDiv>
      <BoardListsDiv width="10%" iscenter={true}>
        {date}
      </BoardListsDiv>
      <BoardListsDiv width="10%" iscenter={true}>
        <Icon name="favorite" style={{color: 'red'}} />
        {heart}
      </BoardListsDiv>
      <BoardListsDiv width="10%" iscenter={true}>
        {view}
      </BoardListsDiv>
    </BoardLists>
  )
}
