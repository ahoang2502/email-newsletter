import { Slider } from "@nextui-org/slider";

import { ICONS } from "@/shared/utils/Icons";
import { useSubscribersData } from "@/shared/hooks/useSubscribersData";

export const UserPlan = () => {
  const { data, loading } = useSubscribersData();

  return (
    <div className="w-full min-w-[200px] my-3 p-3 bg-[#FDF1F8] rounded-2xl hover:shadow-xl cursor-pointer ">
      <div className="w-full flex items-center justify-between">
        <h5 className="text-base md:text-lg font-medium">Launch Plan</h5>

        <div className="w-[95px] shadow cursor-pointer h-[32px] flex justify-center items-center space-x-1 rounded-lg bg-[#E77CAE] pl-1 pr-2">
          <span className="text-white text-base md:text-lg">
            {ICONS.electric}
          </span>
          <span className="text-white text-xs md:text-sm font-medium">
            Upgrade
          </span>
        </div>
      </div>

      <h5 className="text-[#831743] mt-3 text-sm md:text-base">
        Total subscribers
      </h5>
      <Slider
        aria-label="Player progress"
        hideThumb={true}
        defaultValue={data?.length}
        className="max-w-md"
      />
      <h6 className="text-[#831743] text-sm md:text-base">
        {loading ? "..." : data?.length} of 2500 added
      </h6>
    </div>
  );
};
