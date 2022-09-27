import axios from "axios";
import {useState} from 'react';

function AddPicForm() {
    const [urlIn, setUrlIn] = useState('');
    const [descriptIn, setDescriptIn] = useState('');

    function postNewPic(){
        axios({
            method: "POST",
            url: "/gallery/",
            data: {path: urlIn, description: descriptIn}
        }).then((response)=> {
            getGallery();
        }).catch((error) => console.log("Error with POST", error));
    }
    
    return(
        <>
            <div id="add-pic-window">
                <h2>Add A New Photo</h2>
                <form>
                    <label for="new-pic-url">Photo URL:</label>
                    <input id="new-pic-url" type="url" placeholder="www.yourpicurl.com"
                        value={urlIn} onChange={(event)=> setUrlIn(event.target.value)}/>

                    <lable for="new-pic-descript">Description:</lable>
                    <textarea id="new-pic-descript" type="text" placeholder= "Describe your photo!"
                       value={descriptIn} onChange={(event)=> setDescriptIn(event.target.value)}/>
                    <button type="button" onClick={() => postNewPic()}>Add Photo</button>
                </form>

            </div>
        </>
    );
}

export default AddPicForm;