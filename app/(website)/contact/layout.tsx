import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Cedeno Corneja CPAs Co.",
  description: "Contact us",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
