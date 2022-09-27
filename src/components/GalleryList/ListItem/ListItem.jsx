import './ListItem.css';
import axios from 'axios';
import { useState } from 'react';
import FullScreen from './FullScreen';

function ListItem({photo, getGallery}){

    // states to set if ListItem is liked, whether description is shown, is full screen component is shown
    const [isLiked, setIsLiked] = useState(false);
    const [descriptShown, setDescriptShown] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);

    function toggleLike(photoId){
        // assign variable to opposite of current like value (prior to rerender)
        // this will be sent via data in the PUT request
        const isLikedToPut = !isLiked;
        // axios request sends id (req.params) and body with isLiked: true/false
        axios({
            method: 'PUT',
            url: `/gallery/like/${photoId}`,
            data: {isLiked: isLikedToPut}
        }).then((response) => {
            // refresh gallery and update isLiked state
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
                {/* conditionally render full screen component */}
                {isFullScreen && <FullScreen setIsFullScreen={setIsFullScreen} pic={photo.path}/>}

                <div className="pic-holder" onClick={()=> setDescriptShown(!descriptShown)}>
                    {/* conditionally render pic description */}
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