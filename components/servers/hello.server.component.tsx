import { APP_VERSION, NEXT_PUBLIC_APP_NAME } from "@/env";

const HelloServerComponent = () => {
  return (
    <div>
      Hello from Server Component! - {NEXT_PUBLIC_APP_NAME} - v{APP_VERSION}
    </div>
  );
};

export default HelloServerComponent;
