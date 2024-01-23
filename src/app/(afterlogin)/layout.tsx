import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import ZLogo from '../../../public/zlogo.png';

interface Props {
  children: ReactNode;
}

function AfterLoginLayout({ children }: Props) {
  return (
    <div className="flex items-stretch bg-white">
      <header className="flex flex-col items-end grow">
        <section className="w-275pxr h-dvh bg-red">
          <div className="fixed w-275pxr h-full bg-blue">
            <Link className="" href={'/home'}>
              <div className="w-50pxr h-50pxr rounded-[50%] flex justify-center items-center hover:bg-[#0f14191a]">
                <Image src={ZLogo} alt="z.com로고" />
              </div>
            </Link>
          </div>
        </section>
      </header>
      <div className="flex flex-col items-start grow h-dvh">
        <div className="flex justify-between w-990pxr h-full">
          <main className="w-600pxr bg-green">{children}</main>
          <section className="w-350pxr h-full bg-purple">
            <form className="fixed top-6pxr bottom-12pxr flex items-center w-350pxr h-42pxr rounded-btn bg-[#eff3f4]">
              <svg width={20} viewBox="0 0 24 24" aria-hidden="true" className="fill-[#536471] ml-20pxr">
                <g>
                  <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                </g>
              </svg>
              <input type="search" />
            </form>
          </section>
        </div>
      </div>
      {children}
    </div>
  );
}

export default AfterLoginLayout;
