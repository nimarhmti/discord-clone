import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-appBase h-full flex items-center justify-center flex-col gap-y-6">
      <h1 className="text-white text-2xl  font-bold">Discord</h1>
      {children}
    </div>
  );
}
