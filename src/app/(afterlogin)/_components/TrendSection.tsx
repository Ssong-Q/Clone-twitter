import Trend from './Trend';

export default function TrendSection() {
  return (
    <div className="bg-[rgb(247, 249, 249)] rounded-[16px] mt-12pxr">
      <div className="text-20pxr font-bold py-12pxr">
        <h3 className="mb-12pxr px-16pxr">나를 위한 트렌드</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  );
}
