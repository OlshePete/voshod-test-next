"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { updateStatus } from "@/lib/features/history/historySlice";

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstView = useAppSelector((state) => state.first_view);
  const dispatch = useAppDispatch();
  const [history, setHistory] = useState([]);
  
  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    if (isFirstView ) setHistory((p) => !p.includes(url)?[...p, url]:p);
  }, [pathname, searchParams, isFirstView]);

  useEffect(() => {
    if (history.join("").includes("list")) {
      dispatch(updateStatus());
    }
  }, [history, dispatch]);

  return null;
}
