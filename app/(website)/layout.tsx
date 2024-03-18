

interface childProps {
  children: React.ReactNode;
}

const Pagelayout = ({ children }: childProps) => {
  return (
    <div>
      <div className=" bg-stone-200 bg-opacity-30 pb-12">
        {children}
  
      </div>
    </div>
  );
};

export default Pagelayout;
