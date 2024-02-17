interface containerProps {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: containerProps) {
  return <div className={`max-auto w-full ${className}`}>{children}</div>;
}
export default Container;
