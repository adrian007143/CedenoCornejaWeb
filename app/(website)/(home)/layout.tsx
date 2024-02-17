import AcctgImage from "@/public/assets/wallpaperacctg.jpg";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <div className="pt-16 bg-opacity-50 relative z-1">
        {children}
      </div>

      {/* Background Image */}
      <div
        className="fixed top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${AcctgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25, // Adjust opacity as needed
          zIndex: -1, // Make sure it stays behind other content
        }}
      />

      {/* Content */}
    </div>
  );
};

export default layout;
