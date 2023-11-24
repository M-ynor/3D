import { proxy } from "valtio";
import { logo, threejs } from "../assets/index"
const state = proxy({
    intro: true,
    color: '#B983FF',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: logo,
    fullDecal: threejs
});

export default state;