import './ListItem.css';
import axios from 'axios';
import { useState } from 'react';
import FullScreen from './FullScreen';

function ListItem({photo, getGallery}){

    const [isLiked, setIsLiked] = useState(false);
    const [descriptShown, setDescriptShown] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);




    
    function toggleLike(photoId){
        axios({
            method: 'PUT',
            url: `/gallery/like/${photoId}`,
        }).then((response) => {
            getGallery();
            setIsLiked(!isLiked);
            console.log('liked image:', photoId);
        }).catch(error => {
            console.log('error in axios PUT (like)', error);
        })

    }

    return (
        <>
            <li className = "pic-list-item">
                {/* conditionally render full screen */}
                {isFullScreen && <FullScreen setIsFullScreen={setIsFullScreen} pic={photo.path}/>}
                {/* conditionally render pic description */}
                <div className="pic-holder" onClick={()=> setDescriptShown(!descriptShown)}>
                    <div className={ descriptShown===true ? "pic-descript" : "hidden"}>{photo.description}</div>
                    <img className="pic" src={photo.path} />
                </div>
                <div className="like-functions">
                    <div className="btn-box">
                        <button className= {isLiked === true ? "liked" : "like-btn" }
                            onClick={()=> toggleLike(photo.id)}>👍</button>
                        <button className="fullscreen-btn" onClick={()=> setIsFullScreen(true)}>Full</button>
                    </div>
                    <div className="pic-likes">
                        Likes:{photo.likes}
                    </div>  
                </div>
            </li>
        </>
    )


}

export default ListItem;