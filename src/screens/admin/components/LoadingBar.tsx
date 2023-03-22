interface IntroLoadingBarProp{
    introActive: number
}

export const IntroLoadingBar = ({introActive}:IntroLoadingBarProp) =>{
    return(
        <div className="bg-gray-300 w-full h-2 relative">
            <div className={("absolute top-0 left-0 bg-primary_100 h-2 z-1")+(introActive === 0? " w-1/2 ":" w-full ")}></div>
        </div>
    )
}