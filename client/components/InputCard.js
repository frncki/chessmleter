import * as React from 'react'

const InputCard = () => {
    const [fenPos, setFenPos] = React.useState('');

    const sendPosition = (e) => {
        e.preventDefault();

        console.log(fenPos)
    }
    return (
        <div>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="input FEN position" aria-label="input FEN position" value={fenPos} onInput={e => setFenPos(e.target.value)} />
                <button className="btn btn-outline-success" onClick={sendPosition}>Search</button>
            </form>
        </div>
    );
}
 
export default InputCard;