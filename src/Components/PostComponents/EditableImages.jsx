import ImageMap from "../ImageMap";
export default function EditableImages({isEditing, value, onValueChange}) {

    return (
        !isEditing ?

             <figure className=" carousel rounded-box">
                <ImageMap images={value} /> 
                
                
            </figure>

            :

            <>
                <figure className=" carousel rounded-box">
                    <ImageMap images={value} />
                </figure>
                
                <div className="imageInput">
                    <input
                        className="file-input my-2 file-input-bordered w-full max-w-xs"
                        placeholder="image"
                        multiple
                        type="file"
                        accept=".png, .jpg, .heic"
                        onChange={(event) => {
                            onValueChange(event.target.files)
                        }}
                    />
                </div>
            </>
    )


}