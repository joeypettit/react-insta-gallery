import './ListItem.css';
import axios from 'axios';
import { useState } from 'react';

function ListItem({photo, getGallery}){

    const [isLiked, setIsLiked] = useState(false);


    
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
    console.log(isLiked);

    return (
        <>
            <li className = "pic-list-item">
                <div className="pic-descript hidden">{photo.description}</div>
                <img className="pic" src={photo.path}/>
                <div className="pic-likes">Likes:{photo.likes}</div>
                <div className="btn-box"><button className= {isLiked === true ? "liked" : "like-btn" }
                    onClick={()=> toggleLike(photo.id)}>👍</button>
                </div>
            </li>
        </>
    )


}

export default ListItem;