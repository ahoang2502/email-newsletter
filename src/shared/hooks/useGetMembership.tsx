"use client";

import { useEffect, useState } from "react";

import { getMembership } from "@/actions/get.membership";

export const useGetMembership = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleGetMembership();
  }, []);

  const handleGetMembership = async () => {
    await getMembership()
      .then((res) => {
        setData(res);
      })
      .catch((error) => console.log("🔴 [GET_MEMBERSHIP] ", error))
      .finally(() => setLoading(false));
  };

  return { data, loading };
};
