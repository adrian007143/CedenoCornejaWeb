import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import AcctgImage from "@/public/assets/wallpaperacctg.jpg";
import NextImg from "next/image";

interface childProps {
  children: React.ReactNode;
}

const Pagelayout = ({ children }: childProps) => {
  return (
    <main>
      <Header />
      <div className="h-full pt-16 bg-stone-200 bg-opacity-50">
        {children}
        <NextImg
          src={AcctgImage}
          alt="background"
          quality={100}
          className="-z-10 object-cover opacity-25 "
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <Footer />
    </main>
  );
};

export default Pagelayout;
