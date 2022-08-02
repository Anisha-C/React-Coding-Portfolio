export default function NavBar(props){

    return(
        <nav style={{ display: "flex", listStyle: "none"}} className="navbar">
            <p className="navItem" onClick={() => props.changePage('aboutMe')}>About Me</p>
            <p className="navItem" onClick={() => props.changePage('project')}>Projects</p>
            <p className="navItem" onClick={() => props.changePage('contact')}>Contact</p>
        </nav>
    )
}
