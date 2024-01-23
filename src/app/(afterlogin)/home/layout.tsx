import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

async function HomeLayout({ children }: Props) {
  return <div>홈 레이아웃 {children}</div>;
}

export default HomeLayout;
