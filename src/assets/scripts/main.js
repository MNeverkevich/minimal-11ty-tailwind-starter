import '../fonts/fonts.css';
import '../styles/main.css';

import init from "./init"

import log from "./modules/log"

const activeModules = {
	log,
}

window.project = {}

function setFeatures() {
    project.touch = !! ( "ontouchstart" in document.documentElement )
    project.IE11 = navigator.userAgent.indexOf( "MSIE" ) !== -1 || navigator.appVersion.indexOf( "Trident/" ) > -1
    project.Edge = window.navigator.userAgent.indexOf( "Edge" ) > -1

    project.passiveSupported = false
    
    try {
        window.addEventListener( "test", null, Object.defineProperty( {}, "passive", {
            get: () => project.passiveSupported = true
        } ) )
    } catch( err ) {}
}

setFeatures()

init( activeModules )