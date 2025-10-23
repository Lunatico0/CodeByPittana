"use client";

import React from "react";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div className="
        absolute inset-0
        bottom-0 -z-10 left-0 right-0 top-0
        bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0d_1px,transparent_1px)]
        bg-[size:14px_24px]
        opacity-60 pointer-events-none
        "/>

      <div className="
        absolute -z-10
        left-1/5 -top-1/16
        size-[900px] md:size-[1200px]
        rounded-full
        bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#0E0E10)] pointer-events-none
        "/>
    </div>

  );
}
