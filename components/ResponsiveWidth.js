export  function Responsive({children}) {
    return (
        <div className="w-full mt-0 md:mx-auto md:max-w-xl lg:max-w-lg">
            {children}
        </div>
    )
}