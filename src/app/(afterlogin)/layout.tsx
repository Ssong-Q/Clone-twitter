import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import ZLogo from '../../../public/zlogo.png';
import NavMenu from './_components/NavMenu';
import LogoutButton from './_components/LogOutButton';
import TrendSection from './_components/TrendSection';
import FollowRecommend from './_components/FollowRecommend';

interface Props {
  children: ReactNode;
}

function AfterLoginLayout({ children }: Props) {
  return (
    <div className="flex items-stretch bg-white">
      <header className="flex flex-col items-end grow">
        <section className="w-275pxr h-dvh">
          <div className="fixed w-275pxr h-dvh flex flex-col">
            <Link className="inline-block h-56pxr mt-2pxr" href={'/home'}>
              <div className="w-50pxr h-50pxr rounded-[50%] flex justify-center items-center hover:bg-[#0f14191a]">
                <Image src={ZLogo} alt="z.com로고" width={40} height={40} />
              </div>
            </Link>
            <nav className="flex-1">
              <ul>
                <NavMenu />
              </ul>
              <Link
                href={'/compose/tweet'}
                className="my-16pxr flex justify-center items-center h-52pxr shadow-postButton bg-[#1d9bf0] w-234pxr border-none text-white font-[700] text-17pxr rounded-[26px] hover:bg-[#1a8cd8]"
              >
                게시하기
              </Link>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>
      <div className="flex flex-col items-start grow h-dvh">
        <div className="flex justify-between w-990pxr h-full">
          <main className="w-600pxr">{children}</main>
          <section className="w-350pxr h-full">
            <div style={{ marginBottom: 60, width: 'inherit' }}>
              <form className="fixed top-6pxr bottom-12pxr flex items-center gap-8pxr w-350pxr h-42pxr rounded-btn bg-[#eff3f4]">
                <svg width={20} viewBox="0 0 24 24" aria-hidden="true" className="fill-[#536471] ml-20pxr">
                  <g>
                    <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                  </g>
                </svg>
                <input className="bg-transparent" type="search" />
              </form>
            </div>
            <TrendSection />
            <div className="text-20pxr font-bold bg-[rgb(247, 249, 249)] rounded-[16px] my-12pxr py-12pxr px-16pxr">
              <h3 className="pb-12pxr">팔로우 추천</h3>
              <FollowRecommend />
              <FollowRecommend />
              <FollowRecommend />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AfterLoginLayout;
