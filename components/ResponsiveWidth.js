export  function Responsive({children}) {
    return (
        <div className="w-full mt-0 md:mx-auto md:max-w-full md:min-w-2xl lg:max-w-2xl lg:min-w-2xl">
            {children}
        </div>
    )
}