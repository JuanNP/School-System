import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Sidebar from "../Sidebar/Sidebar";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <>
      <Sidebar />
      <main id='main-content'>
        <Container maxW='-webkit-fill-available' p='0' centerContent>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Layout;
