import Image from 'next/image';
import Link from 'next/link';
import zLogo from '../../../../public/zlogo.png';

export default function Main() {
  return (
    <>
      <div className="flex flex-1 justify-center items-center">
        <Image src={zLogo} alt="logo" priority />
      </div>
      <div className="flex flex-col flex-1 justify-center">
        <h1 className="font-bold text-64pxr my-30pxr">지금 일어나고 있는 일</h1>
        <h2 className="font-bold text-31pxr mb-15pxr">지금 가입하세요.</h2>
        <Link
          href="/i/flow/signup"
          className="w-300pxr h-40pxr rounded-btn px-16pxr text-15pxr bg-blue-light text-white border-none flex items-center justify-center hover:bg-blue-hoverLight"
        >
          계정 만들기
        </Link>
        <h3 className="font-bold text-17pxr mt-40pxr mb-15pxr">이미 트위터에 가입하셨나요?</h3>
        <Link
          href="/login"
          className="w-300pxr h-40pxr rounded-btn px-16pxr text-15pxr text-blue-light border-[1px] border-solid border-[#cfd9de] flex items-center justify-center hover:bg-[#054966]"
        >
          로그인
        </Link>
      </div>
    </>
  );
}
