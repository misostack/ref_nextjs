const HelloServerComponent = () => {
  const APP_VERSION = process.env.APP_VERSION ?? "";
  const NEXT_PUBLIC_APP_NAME = process.env.NEXT_PUBLIC_APP_NAME ?? "";
  return (
    <div>
      Hello from Server Component! - {NEXT_PUBLIC_APP_NAME} - v{APP_VERSION}
    </div>
  );
};

export default HelloServerComponent;
