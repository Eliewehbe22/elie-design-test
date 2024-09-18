'use client'
import React from 'react';
import styles, { ImageDropType } from "./ImageDropShaddow.type";
import Image from "next/image";

const ImageDropShaddow = ({ src,alt, width , height }: ImageDropType) => {
    return (
        <div>
             <Image src={src} alt={alt} width={width} height={height} className={styles.img} />
        </div>
    );
};

export default ImageDropShaddow;
