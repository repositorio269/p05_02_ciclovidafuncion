import React, { useRef } from 'react'

export default function AsideMenu() {

    const asideRef = useRef(); // Hook para referenciar un elemento del DOM

    const handleToggleAsideMenu = () => {
        asideRef.current.classList.toggle('open');
    }

    return (
        <aside ref={asideRef}>
            <div id="burger" onClick={() => handleToggleAsideMenu()}>
                <div className="bar top"></div>
                <div className="bar center"></div>
                <div className="bar bottom"></div>
            </div>
        </aside>
    )
}
