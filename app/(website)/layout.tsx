import AcctgImage from "@/public/assets/wallpaperacctg.jpg";
import NextImg from "next/image";
import Container from "@/components/shared/container";

interface childProps {
  children: React.ReactNode;
}

const Pagelayout = ({ children }: childProps) => {
  return (
    <div>
      <div className="h-full pt-16 bg-stone-200 bg-opacity-50">
        <Container>{children}</Container>
        <NextImg
          src={AcctgImage}
          alt="background"
          quality={100}
          className="-z-10 object-cover opacity-25 "
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Pagelayout;
