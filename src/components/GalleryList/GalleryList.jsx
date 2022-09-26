import ListItem from './ListItem/ListItem.jsx'
import './GalleryList.css'

function GalleryList({galleryList, getGallery}){
    console.log('in GalleryList: galleryList:', galleryList);

    return(
        <>
            <div id="gallery-holder">
                <ul id="gallery-ul">
                    {galleryList.map((photo) => (
                        console.log("ID:" + photo.id),
                        <ListItem key={"ID:" + photo.id} getGallery={getGallery} photo={photo}/> 
                    ))}
                </ul>
            </div>
        </>
    )
}
export default GalleryList;