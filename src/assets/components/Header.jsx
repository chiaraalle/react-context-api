import { Link, NavLink } from "react-router-dom";
/* Link crea un collegamento tra le pagine dell'applicazione. Quando viene cliccato, cambia la rotta e visualizza il componente associato a quella rotta, senza ricaricare l'intera pagina. */
/* NavLink è simile a Link, ma ti permette di aggiungere una classe CSS quando il link è attivo. Si può usare prop className per applicare uno stile speciale ai link quando la rotta corrisponde alla rotta attiva */

function Header() {
    return (
        <header>
           <nav>
                <ul>
                     <li><NavLink to={'/'}>Home</NavLink></li>
                     <li><NavLink to={'/about-us'}>About us</NavLink></li>
                     <li><NavLink to={'/posts'}>Posts</NavLink></li>
                </ul>
           </nav>
        </header>
    )
}

export default Header