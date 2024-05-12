"use client";

import Block from "@/components/editorComponents/FormComponents/Block";
import { MaincomponentPropWithId } from "@/types/editorTypes";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { page_id: string } }) {
  const [pageData, setPageData] = useState<MaincomponentPropWithId[]>([{}]);
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const _pageData = JSON.parse(localStorage.getItem(params.page_id) || "");
      setPageData(_pageData);
    }
  }, []);

  return (
    <div className="grid rounded-lg overflow-visible w-[100%]">
      {pageData.map((item, index) => (
        <Block {...item} key={item.id || index} renderIn="page" />
      ))}
    </div>
  );
}
