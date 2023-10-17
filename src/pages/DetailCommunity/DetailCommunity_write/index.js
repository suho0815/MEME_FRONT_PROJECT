/**  게시글 쓰기 페이지 */
import {
  StyledTitle,
  StyledSection,
  StyledButton,
  NavBoxTest,
  StyledDiv,
  CommentInput,
  BoardContentWrite,
  BoardbtnDiv,
  ImgInputlabel
} from '../../../styled'
import {Icon} from '../../../components'
import {useNavigate} from 'react-router-dom'
import {useState, useRef} from 'react'

export const DetailCommunity_write = () => {
  const Navigate = useNavigate()
  const [imgFile, setImgFile] = useState('')
  const imgRef = useRef()
  const titleRef = useRef(null)
  const contentRef = useRef(null)

  const SubmitBtnClicked = () => {
    console.log(titleRef.current.value)
    console.log(contentRef.current.value)
  }
  const CancleBtnClicked = () => {
    Navigate(-1)
  }

  // 이미지 업로드 input의 onChange
  const ImgFileOnChange = () => {
    const file = imgRef.current?.files[0]

    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setImgFile(reader.result)
      }
    } else {
      console.error('이미지가 선택되지 않았습니다.')
    }
  }

  return (
    <StyledSection>
      <NavBoxTest></NavBoxTest>
      <StyledTitle font="RedRose">Community</StyledTitle>

      <StyledDiv width="70%" alignitems="left" style={{flexDirection: 'column'}}>
        <StyledDiv width="100%" justifycontents="left">
          <select style={{marginRight: '15px'}}>
            <Icon name="person" />
            <option>notice</option>
            <option>free</option>
          </select>
          <CommentInput
            ref={titleRef}
            width="60%"
            placeholder="게시글 제목 입력하셈!"
            style={{marginTop: '25px', marginBottom: '25px'}}
          />
        </StyledDiv>

        <ImgInputlabel htmlFor="imgupload">이미지 첨부</ImgInputlabel>
        <input
          type="file"
          accept="image/*"
          id="imgupload"
          onChange={ImgFileOnChange}
          ref={imgRef}
          style={{display: 'none'}}
        />
        <img src={imgFile ? imgFile : ``} alt="이미지 미리보기" />
        <BoardContentWrite ref={contentRef} placeholder="게시글 내용 입력하셈!" style={{marginTop: '25px'}} />
      </StyledDiv>
      <BoardbtnDiv justifycontents="center">
        <StyledButton color="" background="" style={{marginRight: '30px'}} onClick={SubmitBtnClicked}>
          등록하기
        </StyledButton>
        <StyledButton onClick={CancleBtnClicked}>취소하기</StyledButton>
      </BoardbtnDiv>
    </StyledSection>
  )
}
