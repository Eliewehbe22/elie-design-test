import {StaticRequire} from "next/dist/shared/lib/get-img-props";
import {StaticImageData} from "next/dist/client/legacy/image";

export interface ImageDropType {
    //This prop is for src
    src:  string | StaticRequire | StaticImageData | any;
    //This prop is for Image Alt
    alt:string;
    //This prop is for the width of image
    width?: number;
//This prop is for the height of image
    height?: number;
}


const styles: {
    img: string;
} = require('./ImageDropShaddow.module.css');

export default styles;