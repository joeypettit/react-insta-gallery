import ListItem from './ListItem/ListItem.jsx'
import './GalleryList.css'

function GalleryList({galleryList, getGallery, setAddFormShown}){
    console.log('in GalleryList: galleryList:', galleryList);

    return(
        <>
            <div id="gallery-holder">
                <button className="add-btn" onClick = {()=>setAddFormShown(true)}>Add New Photo</button>
                <ul id="gallery-ul">
                    {galleryList.map((photo) => (
                        console.log('Photo Id is:', photo.id),
                        console.log("ID:" + photo.id),
                        <ListItem key={photo.id} getGallery={getGallery} photo={photo}/> 
                    ))}
                </ul>
            </div>
        </>
    )
}

export default GalleryList;