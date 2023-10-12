/** Modal 컴포넌트 */
import {ModalBackdrop, ModalContent, ModalExit} from '../styled/Modal/StyledModal'
import {Icon} from './Icon'

/** Modal 컴포넌트
 * @param open: boolean형태로 true이면 modal창 열고, false값이면 modal창 닫음
 * @param closeModal: open 상태값을 관리하는 함수
 */
export const Modal = ({open, closeModal, isCloseIcon, children}) => {
  const handleModalClose = () => {
    closeModal(false)
  }

  return (
    <ModalBackdrop open={open}>
      <ModalContent width="30%" height="20%">
        {isCloseIcon && (
          <ModalExit onClick={handleModalClose}>
            <Icon name="close" />{' '}
          </ModalExit>
        )}
        {children}
      </ModalContent>
    </ModalBackdrop>
  )
}
