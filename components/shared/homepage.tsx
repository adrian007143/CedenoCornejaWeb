import Link from "next/link";
const HomePage = () => {
  return (
    <div>
      <div className="bg-cover bg-center select-none">
        <h1 className="p-8 text-center text-[#1b4a1bf9] font-extrabold text-[50px]">
          Cedeno Corneja CPAs Co.
        </h1>
        <div className="text-center text-[26px] text-[#194219] font-semibold ">
          Compliance is better than Compromise
        </div>
        <div className="flex flex-col items-center p-20 ">
          <Link
            href="/team"
            className=" rounded-full py-3 px-6 bg-[#1b381b] text-white hover:bg-slate-100 transition-colors hover:text-black shadow-inherit"
          >
            Learn More
          </Link>
        </div>
        <div className="text-center  container mx-auto">
          <h1 className="text-[40px] font-serif font-extrabold">
            All About Us
          </h1>

          <div className="m-auto mx-10 mt-14 text-[15px] text-justify transition-transform">
            <p>
              <span className="text-lg font-extrabold">
                CEDENO CORNEJA CPAS CO.
              </span>{" "}
              is an audit and accounting firm that offers a wide range of
              services; including audit, accounting, tax, consulting, and
              business advisory. With a team coming from diverse industries and
              different generations, the firm possessed a spectrum of knowledge,
              skills and experiences where it can bring out solutions to
              challenges.
            </p>
            <p className="mt-5">
              A General Professional Partnership registered with the Securities
              and Exchange Commission in November 2018, Cedeno Corneja CPAs Co.
              operates from its business address at{" "}
              <span className="font-semibold">
                Unit 2-C 2nd Floor of GV Square Building, Casa Milan,
                Commonwealth Avenue in Quezon City.
              </span>
              The firm commitment to upholding industry standards is evident
              through its membership in the Philippine Institute of Certified
              Public Accountants and its accreditations with BOA, BIR, and CDA.
              Backed by a wealth of experiences and a track record of delivered
              engagements, Cedeno Corneja CPAs Co. is an alternative partner of
              businesses seeking to achieve financial stability and growth. The
              firm dedication to delivering quality services and personalized
              attention to its clients sets it apart from the competition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
