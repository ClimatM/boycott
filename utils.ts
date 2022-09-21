import { fabric } from "fabric";
import constants from './constants';

export function getCirclePathFromSize(size, textPadding) {
    const pathString = `
        M ${textPadding} ${size / 2}
        a 1 1 0 0,0 ${size - (textPadding * 2)} 0
    `;
    const path = new fabric.Path(pathString);
    path.set({
        fill: 'transparent',
    });

    return path;
}

export function getBackgroundPathFromSize(size, bannerHeight) {
    const pathString = `
        M -1 ${size / 2}
        a 1 1 0 0,0 ${size + 2} 0
        l -${bannerHeight} 0
        a 1 1 0 1,1 -${size - bannerHeight * 2} 0
        Z
    `;
    const path = new fabric.Path(pathString);
    path.set({
        fill: new fabric.Gradient({
            type: 'radial',
            gradientUnits: 'pixels',
            coords: {
                x1: 100,
                y1: 260,
                x2: 150,
                y2: 150,
                r1: 50,
                r2: 360,
            },
            colorStops:[
                { offset: 0, color: '#222'},
                { offset: .25, color: '#444'},
                { offset: .5, color: 'transparent' }
            ]
        }),
    });

    return path;
}

export function addBannerToCanvas(canvas, size, textSize, textPadding, bannerHeight) {
    const path = getCirclePathFromSize(size, textPadding);
    const backgroundPath = getBackgroundPathFromSize(size, bannerHeight);
    const text = new fabric.Text(constants.hashtag, {
        fontSize: textSize,
        path,
        fill: 'white',
        top: path.top,
        left: path.left,
        fontFamily: 'sans-serif',
        selectable: false,
    });

    const circle1 = new fabric.Circle({
        radius: size / 2,
        fill: 'transparent'
    });
    const circle2 = new fabric.Circle({
        radius: size / 2,
        fill: 'transparent'
    });
    const groupText = new fabric.Group([text, circle1]);
    const groupBackground = new fabric.Group([backgroundPath, circle2]);
    groupText.center();
    groupText.selectable = false;

    groupBackground.center();
    groupBackground.rotate(40);
    groupBackground.selectable = false;

    canvas.add(groupText);
    canvas.add(groupBackground);
    canvas.remove(circle1);
    canvas.remove(circle2);

    groupBackground.sendBackwards();
}

export function dataURLtoBlob(dataUrl) {
    var arr = dataUrl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type: mime});
}
