import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  max-width: 1150px;
  width: 100%;
  margin: auto;
  padding: 0 15px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PageContainer = styled.main`
  padding-top: 81px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 32px;
`;

const FormItemTitle = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #b1b5c4;
`;

export {
  FlexContainer,
  ContentContainer,
  PageContainer,
  FormItem,
  FormItemTitle,
};
