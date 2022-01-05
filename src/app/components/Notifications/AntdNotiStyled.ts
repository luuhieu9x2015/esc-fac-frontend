import styled from 'styled-components/macro';

interface IAntdNotiProps {
  bg?: string; // default red
}

export const AntdNotiStyled = styled.div<IAntdNotiProps>`
  .ant-badge-count {
    background-color: ${({ bg = 'red' }) => bg};
  }
`;
