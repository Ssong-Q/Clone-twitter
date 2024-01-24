import Link from 'next/link';

export default function Trend() {
  return (
    <Link href={`/search?q=트렌드`} className="py-12pxr px-16pxr h-82pxr block hover:bg-[#00000008]">
      <div className="text-[#536471] text-13pxr leading-[16px] font-light">실시간트렌드</div>
      <div className="text-15pxr font-bold leading-[20px] mt-2pxr mb-4pxr">제로초</div>
      <div className="text-[#536471] text-13pxr leading-[16px] font-light">1,234 posts</div>
    </Link>
  );
}
