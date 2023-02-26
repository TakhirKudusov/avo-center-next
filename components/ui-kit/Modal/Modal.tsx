import styled from 'styled-components';
import { memo, useRef } from 'react';

import Button from '../Button/Button';
import { ButtonSize, ButtonType } from '../Button/enums';
import ReactPortal from '../ReactPortal';
// import { useOnClickOutside } from '../../common/hooks/useOnClickOutside';

import { ModalContent, ModalFooter, ModalTitle } from './components';
import { devices } from '../../../common/constants';

type Props = {
  title: string;
  open: boolean;
  children: JSX.Element;
  onClose: () => void;
  hasFooter?: boolean;
  confirmBtnName?: string;
  cancelBtnName?: string;
  dangerStyle?: boolean;
  disableConfirm?: boolean;
  onConfirm?: () => void;
};

const Modal = ({
  title,
  children,
  open,
  dangerStyle,
  disableConfirm = false,
  hasFooter = true,
  confirmBtnName,
  cancelBtnName,
  onConfirm,
  onClose,
}: Props) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // useOnClickOutside(wrapperRef, onClose);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <ShadowBoxWrapper open={open}>
        <Modal.Wrapper ref={wrapperRef}>
          <Modal.Title
            title={title}
            dangerStyle={dangerStyle}
            onClose={onClose}
          />
          <Modal.Content>{children}</Modal.Content>
          {hasFooter && (
            <Modal.Footer>
              <ModalFooterWrapper>
                {cancelBtnName && (
                  <Button
                    fullSize
                    size={ButtonSize.Large}
                    onClick={onClose}
                    style={{ borderWidth: '3px' }}
                  >
                    {cancelBtnName}
                  </Button>
                )}
                {confirmBtnName && (
                  <Button
                    dangerStyle={dangerStyle}
                    fullSize
                    disabled={disableConfirm}
                    btnType={ButtonType.Secondary}
                    size={ButtonSize.Large}
                    onClick={onConfirm}
                  >
                    {confirmBtnName}
                  </Button>
                )}
              </ModalFooterWrapper>
            </Modal.Footer>
          )}
        </Modal.Wrapper>
      </ShadowBoxWrapper>
    </ReactPortal>
  );
};

const ShadowBoxWrapper = styled.div<{ open: boolean }>`
  position: fixed;
  inset: 0;
  background-color: rgba(20, 20, 22, 0.9);
  display: 'flex';
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 999;
  padding: 40px 20px 20px;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: all linear 0.3s;
`;

const ModalWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  min-height: 150px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(12, 51, 60, 0.2) 0%,
      rgba(12, 55, 83, 0.0447917) 77.08%,
      rgba(255, 255, 255, 0) 100%
    );
  box-shadow: 0px 4px 16px rgba(2, 27, 9, 0.2);
  border: 2px solid #ffffff;
  color: #ffffff;
  z-index: 10;
  border-radius: 20px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 32px;
  position: absolute;
  z-index: 101;

  @media (${devices.mobile}) {
    padding: 16px;
  }
`;

const ModalFooterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

Modal.Wrapper = ModalWrapper;
Modal.Title = ModalTitle;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export default memo(Modal);
