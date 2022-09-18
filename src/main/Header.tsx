import logo from "./GloboLogo.png";


const Header = () => {
    return (
        <header className="row mb-4">
            <div className="col-5">
                <img src={logo} className="logo" alt="logo"/>
            </div>
            <div className="col-7 mt-5 subtitle"></div>
        </header>
    )
}

export default Header;