"use client";

import { NEXT_PUBLIC_APP_NAME } from "@/env";

const HelloClientComponent = () => {
  // test access to env vars in client component

  return <div>Hello from {NEXT_PUBLIC_APP_NAME}</div>;
};

export default HelloClientComponent;
