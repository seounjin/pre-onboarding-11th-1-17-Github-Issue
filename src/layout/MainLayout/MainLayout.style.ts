import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wireframe = styled.div`
  width: 600px;
  height: 800px;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 1px 4px,
    rgb(51, 51, 51) 0px 0px 0px 3px;
  overflow: hidden;
`;

export const Title = styled.h2`
  text-align: center;
`;
