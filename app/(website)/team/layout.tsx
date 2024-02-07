import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Cedeno Corneja CPAs Co.",
  description: "Our Team",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
