function ListItem({photo}){


    return (
        <>
            <li className = "pic-list-item">
                <div className="pic-descript hidden">{photo.description}</div>
                <img className="pic" src={photo.path}/>
                <div className="pic-likes">Likes: {photo.likes}</div>
            </li>
        </>
    )


}

export default ListItem;