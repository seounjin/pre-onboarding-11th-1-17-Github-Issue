import { ReactNode } from 'react';
import { Wrapper, Wireframe, Title } from './MainLayout.style';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Wrapper>
      <Wireframe>
        <Title>Angular/Angular-cli</Title>
        {children}
      </Wireframe>
    </Wrapper>
  );
};

export default MainLayout;
