import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Cedeno Corneja CPAs Co.",
  description: "Our services",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>
    {children}
    </div>;
};

export default layout;
