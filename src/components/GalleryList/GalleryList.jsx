import ListItem from './ListItem/ListItem.jsx'

function GalleryList({galleryList, getGallery}){
    console.log('in GalleryList: galleryList:', galleryList);

    return(
        <>
            <h1>In GalleryList</h1>
            <ul>
                {galleryList.map((photo) => (
                    console.log("ID:" + photo.id),
                    <ListItem key={"ID:" + photo.id} getGallery={getGallery} photo={photo}/> 
                ))}
            </ul>
        </>
    )
}
export default GalleryList;