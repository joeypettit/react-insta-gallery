import './FullScreen.css';


function FullScreen({setIsFullScreen, pic}){



    return (
        <div className ="full-screen-background" onClick={()=> setIsFullScreen(false)}>
            {/* e.stopPropagation keeps click of anything but background from closing modal */}
            <div className="full-screen-window" onClick={(e)=>{e.stopPropagation()}}>
                <img className = "full-screen-img" src={pic} />
                <button className="full-screen-exit" onClick={()=> setIsFullScreen(false)}>Exit</button>
            </div>
        </div>
        
    )

}

export default FullScreen;