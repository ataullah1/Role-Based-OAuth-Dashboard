import React from "react";
import { Card } from "./ui/card";

const NotAccessPage = () => {
  return (
    <Card className="flex h-[90vh] flex-col items-center justify-center text-white">
      <h1 className="animate-pulse text-4xl font-bold text-red-600 sm:text-6xl">
        <code>Access Denied</code>
      </h1>
      <hr className="my-4 w-1/3 animate-pulse border-white" />
      <h3 className="animate-fadeIn text-xl sm:text-2xl">
        {`You don't have permission to view this site.`}
      </h3>
      <h3 className="mt-4 animate-pulse text-4xl">{`🚫🚫🚫🚫`}</h3>
      <h6 className="animate-fadeIn mt-4 text-xl text-red-600 underline">
        ERROR: 403 FORBIDDEN
      </h6>
    </Card>
  );
};

export default NotAccessPage;
