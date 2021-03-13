const Header = (props) => {
    return (
        <header className="header">
            <h2 style={HeaderStyle}>{props.title}</h2>
        </header>
    )
}

const HeaderStyle = {
    color: 'Black',
    textAlign: 'center',

}

Header.defaultProps = {
    title: 'Set Header Name',
}


export default Header
