'use client';

import Image from 'next/image';

export default function FollowRecommend() {
  const onFollow = () => {};

  const user = {
    id: 'elonmusk',
    nickname: 'Elon Musk',
    image: '/yRsRRjGO.jpg',
  };

  return (
    <div className="py-12pxr h-66pxr flex">
      <div>
        <div className="w-40pxr h-40pxr mr-12pxr rounded-[20px]">
          <Image src={user.image} alt={user.id} width={40} height={40} style={{ borderRadius: '20px' }} />
        </div>
      </div>
      <div className="flex-1">
        <div className="text-15pxr font-bold leading-[20px]">{user.nickname}</div>
        <div className="text-[rgb(83, 100, 113)] text-13pxr leading-[16px]">@{user.id}</div>
      </div>
      <div className="w-76pxr">
        <button
          className="border-none cursor-pointer w-full text-white bg-black text-14pxr font-bold h-32pxr rounded-[16px] hover:bg-[rgb(39, 44, 48)]"
          onClick={onFollow}
        >
          팔로우
        </button>
      </div>
    </div>
  );
}
