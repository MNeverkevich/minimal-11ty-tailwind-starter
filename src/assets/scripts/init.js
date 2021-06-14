import { domReady } from "./utils"

export default function( activeModules ) {
    domReady( () => {
        Object.keys( activeModules ).forEach( moduleName => {
            if ( !! activeModules[ moduleName ].init ) {
                activeModules[ moduleName ].init()
            }
        } )
    } )
}