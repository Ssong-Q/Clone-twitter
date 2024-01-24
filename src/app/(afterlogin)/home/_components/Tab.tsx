'use client';

import { useState } from 'react';

export default function Tab() {
  const [tab, setTab] = useState('rec');

  const onClickRec = () => {
    setTab('rec');
  };
  const onClickFol = () => {
    setTab('fol');
  };

  return (
    <div className="fixed z-[1] w-598pxr bg-[rgba(255, 255, 255, 0.85)] backdrop-blur-[12px] border-[rgb(239, 243, 244)] border-b-[1px] border-b-solid">
      <div className="text-20pxr leading-[24px] font-bold py-12pxr px-16pxr">홈</div>
      <div className="h-53pxr flex">
        <div
          className="flex flex-1 items-center justify-center text-15pxr cursor-pointer relative"
          onClick={onClickRec}
        >
          추천
          <div
            className="h-4pxr self-center bg-[rgb(29, 155, 240)] min-w-56pxr w-56pxr absolute bottom-0 rounded-[9999px]"
            hidden={tab === 'fol'}
          ></div>
        </div>
        <div
          className="flex flex-1 items-center justify-center text-15pxr cursor-pointer relative"
          onClick={onClickFol}
        >
          팔로우 중
          <div
            className="h-4pxr self-center bg-[rgb(29, 155, 240)] min-w-56pxr w-56pxr absolute bottom-0 rounded-[9999px]"
            hidden={tab === 'rec'}
          ></div>
        </div>
      </div>
    </div>
  );
}
