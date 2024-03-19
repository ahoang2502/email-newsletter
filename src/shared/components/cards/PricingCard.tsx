import { ICONS } from "@/shared/utils/Icons";
import { Button } from "@nextui-org/button";

import { GrowPlan, freePlan, scalePlan } from "@/app/configs/constants";

type Props = {
  active: string;
};

export const PricingCard = ({ active }: Props) => {
  const handleSubscription = () => {};

  return (
    <div className="w-full md:flex items-start justify-around py-8">
      {/* Free Plan */}
      <div className="md:w-[400px] bg-white rounded-xl p-5 my-5 md:my-0 border-2 border-[#000]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="33"
          fill="string"
          className="mb-4"
        >
          <path
            fill="#fff"
            stroke="#3843D0"
            strokeWidth="3"
            d="M33.398 13.25a6.512 6.512 0 0 1 0 6.5l-4.887 8.487a6.512 6.512 0 0 1-5.643 3.263h-9.736a6.512 6.512 0 0 1-5.643-3.263L2.602 19.75a6.512 6.512 0 0 1 0-6.498l4.887-8.488A6.512 6.512 0 0 1 13.132 1.5h9.736a6.512 6.512 0 0 1 5.643 3.263l4.887 8.488Z"
          ></path>
        </svg>

        <h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl pb-8 border-b border-black">
          Launch
        </h5>

        <br />
        <div className="border-b pb-6 border-[#000]">
          <h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl">
            $0
          </h5>

          <p className="text-lg text-zinc-500">No commitment</p>
        </div>

        <div className="py-6 ">
          <p className="text-lg">What&apos;s included...</p>
        </div>

        {freePlan.map((i: PlanType, index: number) => (
          <div key={index} className="flex w-full items-center py-3">
            <span className="text-xl ">{ICONS.right}</span>

            <p className="pl-2 text-lg">{i.title}</p>
          </div>
        ))}

        <br />
        <div className="flex items-center justify-center ">
          <Button
            color="primary"
            className="absolute text-xl !py-6 hover:-translate-x-1.5 hover:-translate-y-1.5 z-[999] hover:!opacity-100 border-2 border-[#000]"
          >
            Get Started
          </Button>

          <Button className="relative rounded-2xl bg-pink-500 text-xl !py-6 border-2 border-[#000] ">
            Get Started
          </Button>
        </div>
        <p className="pt-4 opacity-[.7] text-center font-light">
          30-day free trial of Scale features, then $70/mo
        </p>
      </div>

      {/* Grow Plan */}
      <div className="md:w-[400px] bg-white rounded-xl p-5 my-5 md:my-0 border-2 border-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="33"
          fill="string"
          className="mb-4"
        >
          <path
            fill="#fff"
            stroke="#3843D0"
            strokeWidth="3"
            d="M33.398 13.25a6.512 6.512 0 0 1 0 6.5l-4.887 8.487a6.512 6.512 0 0 1-5.643 3.263h-9.736a6.512 6.512 0 0 1-5.643-3.263L2.602 19.75a6.512 6.512 0 0 1 0-6.498l4.887-8.488A6.512 6.512 0 0 1 13.132 1.5h9.736a6.512 6.512 0 0 1 5.643 3.263l4.887 8.488Z"
          ></path>
        </svg>

        <h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl pb-8 border-b border-[#000]">
          GROW
        </h5>

        <br />
        <div className="border-b pb-6 border-black">
          <h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl">
            ${active === "Monthly" ? "42" : "49"}/month
          </h5>

          <p className="text-lg text-zinc-500">Billed {active}</p>
        </div>

        <div className=" py-6">
          <p className="text-lg ">Everything in Launch, plus...</p>
        </div>

        {GrowPlan.map((i: PlanType, index: number) => (
          <div key={index} className="flex w-full items-center py-3">
            <span className="text-xl">{ICONS.right}</span>

            <p className="text-lg pl-2">{i.title}</p>
          </div>
        ))}

        <br />
        <div className="flex items-center justify-center ">
          <Button
            color="primary"
            className="absolute text-xl !py-6 hover:-translate-x-1.5 hover:-translate-y-1.5 z-[999] hover:!opacity-100 border-2 border-[#000]"
          >
            Get Started
          </Button>

          <Button className="relative rounded-2xl bg-pink-500 text-xl !py-6 border-2 border-[#000] ">
            Get Started
          </Button>
        </div>

        <p className=" opacity-[.7] text-center font-light pt-4">
          30-day free trial of Scale features, then $
          {active === "Monthly" ? "49" : "42"}/mo
        </p>
      </div>

      {/* Scale Plan */}
      <div className="md:w-[400px] bg-white rounded-xl p-5 my-5 md:my-0 border-2 border-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="33"
          fill="string"
          className="mb-4"
        >
          <path
            fill="#fff"
            stroke="#3843D0"
            stroke-width="3"
            d="M33.398 13.25a6.512 6.512 0 0 1 0 6.5l-4.887 8.487a6.512 6.512 0 0 1-5.643 3.263h-9.736a6.512 6.512 0 0 1-5.643-3.263L2.602 19.75a6.512 6.512 0 0 1 0-6.498l4.887-8.488A6.512 6.512 0 0 1 13.132 1.5h9.736a6.512 6.512 0 0 1 5.643 3.263l4.887 8.488Z"
          ></path>
        </svg>
        <h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl pb-8 border-b border-[#000]">
          SCALE
        </h5>

        <br />
        <div className="border-b pb-6 border-[#000]">
          <h5 className="font-clashDisplay uppercase text-cyber-ink text-3xl">
            ${active === "Monthly" ? "99" : "84"} /month
          </h5>
          <p className="text-lg text-zinc-500">Billed {active}</p>
        </div>

        <div className="py-6">
          <p className="text-lg">Everything in Grow, plus...</p>
        </div>

        {scalePlan.map((i: PlanType, index: number) => (
          <div key={index} className="flex w-full items-center py-3">
            <span className="text-xl">{ICONS.right}</span>
            <p className="pl-2 text-lg">{i.title}</p>
          </div>
        ))}

        <br />
        <div className="flex items-center justify-center ">
          <Button
            color="primary"
            className="absolute text-xl !py-6 hover:-translate-x-1.5 hover:-translate-y-1.5 z-[999] hover:!opacity-100 border-2 border-[#000]"
          >
            Get Started
          </Button>

          <Button
            className="relative rounded-2xl bg-pink-500 text-xl !py-6 border-2 border-[#000] "
            onClick={() =>
              handleSubscription(
              //   {
              //   price:
              //     active === "Monthly"
              //       ? "price_1On2H2SA1WAzNgKlV64Zj6gE"
              //       : "price_1Onf9gSA1WAzNgKlg8NLBP4r",
              // }
              )
            }
          >
            Get Started
          </Button>
        </div>

        <p className="pt-4 opacity-[.7] text-center">
          30-day free trial of Scale features, then $
          {active === "Monthly" ? "99" : "84"}/mo
        </p>
      </div>
    </div>
  );
};
