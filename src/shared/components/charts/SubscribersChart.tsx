"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useSubscribersAnalytics } from "@/shared/hooks/useSubscribersAnalytics";
import { ICONS } from "@/shared/utils/Icons";

interface subscribersAnalyticsData {
  month: string;
  count: string;
}

export const SubscribersChart = () => {
  const { subscribersData, loading } = useSubscribersAnalytics();

  const data: subscribersAnalyticsData[] = [];

  subscribersData &&
    subscribersData?.last7Months?.forEach((item: subscribersAnalyticsData) => {
      data.push({
        month: item?.month,
        count: item?.count,
      });
    });

  return (
    <div className="my-5 p-5 border rounded bg-white w-full md:h-[55vh] xl:h-[60vh]">
      <div className="w-full flex">
        <h3 className="font-medium">Active Subscribers</h3>
      </div>

      <div className="flex w-full items-center justify-between">
        <p className="opacity-[.5] text-sm">Shows all active subscribers</p>

        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-[#EB4898]" />
          <span className="pl-2 text-sm opacity-[.7]">Subscribers</span>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-[85%] w-full">
          <p className="animate-spin">{ICONS.spinner}</p>
          <p className="ml-2">Loading...</p>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={"85%"} className={"mt-5"}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#EB4898"
              fill="#EB4898"
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};
