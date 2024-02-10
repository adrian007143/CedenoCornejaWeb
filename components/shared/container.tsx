
interface containerProps{
    children: React.ReactNode,
    classNames?: string,
    }


function Container({children, classNames}:containerProps) {
  return (
    <div className={`max-auto w-full px-4${classNames}`}>{children}</div>
  )
}
export default Container