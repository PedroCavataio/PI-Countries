import './nav.styles.css';

let vacio = '';

function nav() {
    const abrir_cerrar_menu = () => {
        let menu_desplegable = document.getElementById('menu');
        let boton_cerrar = document.getElementById('x');
        menu_desplegable.classList.toggle('abrir_menu');
        boton_cerrar.classList.toggle('colocar_x');
    }


    return(
        <>
        <header>
            <div className='barras'>
                <button onClick = {abrir_cerrar_menu} className='boton_menu' id = 'x'></button>
            </div>
            <nav id = 'menu' className='desplegable'>
                <ul>
                    <li><a href={vacio}>Home</a></li>
                    <li><a href={vacio}>Galería</a></li>
                    <li><a href={vacio}>Proyectos</a></li>
                    <li><a href={vacio}>Sobre Mi</a></li>
                    <li><a href={vacio}>Contacto</a></li>
                    <li><a href={vacio}>Salir</a></li>
                    
                </ul>
            </nav>
        </header>
        </>
    )
}

export default nav;