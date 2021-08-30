import * as React from 'react'
import Button from './shared/Button'

const InputCard = () => {
    const [fenPos, setFenPos] = React.useState('')

    const sendPosition = (e) => {
        e.preventDefault();

        console.log(fenPos)
    }

    return (
        <div className="card">
            <h5 className="">Input your FEN position here!</h5>
            <input className="" type="search" placeholder="rnbq1bnr/ppppkppp/8/4p3/4P3/8/PPPPKPPP/RNBQ1BNR w - - 2 3" aria-label="input FEN position" value={fenPos} onInput={e => setFenPos(e.target.value)} />
            <Button />
        </div>
    );
}
export default InputCard;