'use client';

import Image from 'next/image';

export default function LogoutButton() {
  const me = {
    // 임시로 내 정보 있는것처럼
    id: 'song',
    nickname: 'Ssong-Q',
    image: '/하니.jpeg',
  };

  const onLogout = () => {};

  return (
    <button
      className="w-258pxr h-66pxr p-12pxr flex my-12pxr cursor-pointer border-none items-center bg-white text-left hover:bg-[#0f14191a] hover:rounded-[33px]"
      onClick={onLogout}
    >
      <div className="flex items-center">
        <Image src={me.image} alt={me.id} width={40} height={40} style={{ borderRadius: '50%' }} />
      </div>
      <div className="mx-12pxr">
        <div className="font-bold">{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}
