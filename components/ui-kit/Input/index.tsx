import styled from 'styled-components';

type Props = {
  placeholder?: string;
};
const Input: React.FC<Props> = ({ placeholder }) => {
  return <InputItem placeholder={placeholder} />;
};

const InputItem = styled.input`
  font-family: 'Poppins', sans-serif;
  padding: 12px 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #777e91;
  border: 2px solid #e6e8ec;
  border-radius: 8px;
  outline: none;
`;

export default Input;
