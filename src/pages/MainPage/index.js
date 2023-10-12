/** 메인 페이지 */
import {Title, StyledButton} from '../../styled'
import {Modal} from '../../components'
import {useState} from 'react'

export const MainPage = () => {
  const [open, setOpen] = useState(true)

  return (
    <main>
      <Title font="RedRose" bold="300">
        테스트
      </Title>
      <StyledButton color="white" background="#7929FF">
        hihi
      </StyledButton>
      <Modal open={open} closeModal={setOpen} isCloseIcon={true}>
        <div>모달 테스트입니다.</div>
      </Modal>
    </main>
  )
}
