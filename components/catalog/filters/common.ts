import styled from 'styled-components';

const Filter = styled.div`
  margin-bottom: 17px;
  width: 100%;
`;

const FilterTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
`;

const FilterBody = styled.div<any>`
  margin-top: 16px;
`;

export { Filter, FilterBody, FilterTitle };
