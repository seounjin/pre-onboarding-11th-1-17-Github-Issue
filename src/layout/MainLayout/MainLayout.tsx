import { ReactNode } from 'react';
import { Wrapper, Wireframe } from './MainLayout.style';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Wrapper>
      <Wireframe>{children}</Wireframe>
    </Wrapper>
  );
};

export default MainLayout;
