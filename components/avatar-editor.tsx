import { useEffect, useRef } from "react";
import { fabric } from "fabric";

import { dataURLtoBlob, addBannerToCanvas } from '../utils';

const linkedinProfileSize = 300;
const textSize = 24;
const bannerHeight = 40;
const textPadding = 11;

export default function AvatarEditor(props) {
    let avatarLinkedin = useRef(null);
    let linkedinRender;

    function initLoadedFabric() {
        linkedinRender = new fabric.Canvas(avatarLinkedin.current);
        linkedinRender.selection = false;
        linkedinRender.evented = false;
        linkedinRender.setWidth(linkedinProfileSize);
        linkedinRender.setHeight(linkedinProfileSize);
        linkedinRender.clipPath = new fabric.Circle({
            radius: linkedinProfileSize / 2,
            top: 0,
            left: 0
        });

        fabric.Image.fromURL(props.profilePicture, function (image) {
            if (image.width > image.height) {
                image.scaleToHeight(linkedinProfileSize);
            } else {
                image.scaleToWidth(linkedinProfileSize);
            }

            linkedinRender.add(image);
            image.center();
            image.set({
                selectable: false,
                evented: false,
                strokeWidth: 0
            });
            image.sendToBack();
        });

        addBannerToCanvas(linkedinRender, linkedinProfileSize, textSize, textPadding, bannerHeight);
        linkedinRender.requestRenderAll();
    }

    function downloadAsImage(event) {
        event.preventDefault();

        const link = document.createElement("a");
        const imgData = linkedinRender.toDataURL({
            format: 'jpeg',
            multiplier: 2
        });

        const blob = dataURLtoBlob(imgData);
        const objurl = URL.createObjectURL(blob);

        link.download = `avatar_boycott_2022.jpg`;
        link.href = objurl;
        link.click();
    }

    useEffect(() => {
        initLoadedFabric();
    }, [props.profilePicture]);

    return (
        <div className="avatar-editor">
            <div className="avatar-renders">
                <canvas ref={avatarLinkedin}/>
            </div>
            <ul className="controls">
                <li>
                    <button
                        className="button-primary"
                        type="button"
                        onClick={event => downloadAsImage(event)}
                    >
                        📥
                        Télécharger
                    </button>
                </li>
                <li>
                    <button
                        className="button-secondary"
                        type="button"
                        onClick={props.resetPicture}
                    >
                        🔃
                        Changer de photo
                    </button>
                </li>
            </ul>
        </div>
    );
}
