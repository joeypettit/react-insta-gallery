import './ListItem.css';
import axios from 'axios';
import { useState } from 'react';
import FullScreen from './FullScreen';

function ListItem({photo, getGallery}){

    const [isLiked, setIsLiked] = useState(false);
    const [descriptShown, setDescriptShown] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);

    function toggleLike(photoId){
        // assign variable to opposite of current like value (prior to rerender)
        // this will be sent via data in the PUT request
        const isLikedToPut = !isLiked
        axios({
            method: 'PUT',
            url: `/gallery/like/${photoId}`,
            data: {isLiked: isLikedToPut}
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
                <div className="btn-functions">
                    <div className="btn-box">
                        <button className= {isLiked === true ? "liked" : "like-btn" }
                            onClick={()=> toggleLike(photo.id)}>👍</button>
                    </div>
                    <div className="pic-likes">
                        Likes:{photo.likes}
                    </div>
                    <button className={isFullScreen === false ? "fullscreen-btn" : "pressed-fullscreen" }onClick={()=> setIsFullScreen(true)}>[ ]</button>
                </div>
            </li>
        </>
    )
}

export default ListItem;