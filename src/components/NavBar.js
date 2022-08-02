export default function NavBar(props){

    return(
        <div style={{display:"flex"}}>
            <p onClick={() => props.changePage('aboutMe')}>About Me</p>
            <p onClick={() => props.changePage('project')}>Projects</p>
            <p onClick={() => props.changePage('contact')}>Contact</p>
        </div>
    )
}
