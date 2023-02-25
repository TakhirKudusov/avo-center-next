import styled from 'styled-components';
import { memo, useRef } from 'react';
import { Form, FormItem } from '../../../../ui-kit';
import Textarea from '../../../../ui-kit/Textarea';
import { devices } from '../../../../../common/constants';

type Props = {
  name: string;
  placeholder: string;
  formRef: React.MutableRefObject<any>;
  formSchema: any;
  handleMesageSend: (values: any) => void;
};

const CommentField: React.FC<Props> = ({
  placeholder,
  name,
  formRef,
  formSchema,
  handleMesageSend,
}) => {
  return (
    <StyledForm
      innerRef={formRef}
      initialValues={{}}
      formSchema={formSchema}
      onSubmit={handleMesageSend}
    >
      <TextAreaContainer>
        <FormItem
          style={{ width: '100%' }}
          name={name}
          placeholder={placeholder}
          component={StyledTextarea}
          marginTop={0}
          hasResize
          height={52}
        />
        <SendButton type="submit">
          <p>Send</p>
        </SendButton>
      </TextAreaContainer>
    </StyledForm>
  );
};

const StyledForm = styled(Form)`
  width: 100%;
`;

const StyledTextarea = styled(Textarea)`
  resize: auto;
`;

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${devices.tablet}) {
    width: 100%;
  }

  @media (${devices.mobile}) {
    width: 100%;
  }
`;

const SendButton = styled.button`
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 62px;
  height: 28px;
  background: #ffffff;
  border-radius: 6px;
  position: relative;
  bottom: 40px;
  right: 16px;
  cursor: pointer;
  border: none;
  & p {
    font-family: 'Nasalization';
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: #141416;
    position: relative;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

export default memo(CommentField);
