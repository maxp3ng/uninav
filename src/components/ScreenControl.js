import {useState} from 'react';
import NextScreenButton from "./NextScreenButton.js";

export default function ScreenControl(){
    const [screen, setScreen] = useState(0);
        
    return(
                    <NextScreenButton/>
    );
}