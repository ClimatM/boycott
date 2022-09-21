
function onDragOver(e) {
    e.preventDefault();
}

function onDragEnter(e) {
    e.preventDefault();
}

export default function Uploader(props) {

    function handleOnDrop(e) {
        e.preventDefault();

        let files;
        if (e.target?.files) {
            files = e.target.files;
        } else {
            files = e.dataTransfer.files;
        }

        let file = files[0];

        if (file && file.type.match('image.*')) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                props.handlePictureUploaded(reader.result);
            }
        }
    }

    return (
        <div
            className="uploader"
            onDragEnter={onDragEnter}
            onDragOver={onDragOver}
            onDrop={handleOnDrop}
        >
            <label className="upload-button">
                Choisir une photo
                <input
                    type="file"
                    onChange={handleOnDrop}
                    hidden
                />
            </label>
        </div>
    )
}
