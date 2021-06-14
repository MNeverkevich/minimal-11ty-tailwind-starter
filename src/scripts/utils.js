export function domReady( fn ) {
    if ( document.readyState === "interactive" || document.readyState === "complete" ) {
        return fn()
    }

    document.addEventListener( "DOMContentLoaded", fn, false )
}