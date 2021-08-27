import * as React from 'react';

const Navbar = () => {
    const [fenPos, setFenPos] = React.useState('');

    const sendPosition = (pos) => {
        console.log(pos)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <h1 className="navbar-brand" href="/">Szachomierz</h1>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="input FEN position" aria-label="input FEN position" />
                    <button className="btn btn-outline-success" onClick={setFenPos}>Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;