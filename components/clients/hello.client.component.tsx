"use client";

const HelloClientComponent = () => {
  // test access to env vars in client component
  const NEXT_PUBLIC_APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;

  return <div>Hello from {NEXT_PUBLIC_APP_NAME}</div>;
};

export default HelloClientComponent;
