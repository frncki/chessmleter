import '../styles/Input.scss'
import * as React from 'react'

const Input = ({ inputValue, setValue }) => {
    return (
        <div className="form__group">
            <input 
                type="input"
                className="form__field"
                placeholder="rnbq1bnr/ppppkppp/8/4p3/4P3/8/PPPPKPPP/RNBQ1BNR w - - 2 3"
                name="fen" id='fen'
                required value={inputValue}
                onInput={e => setValue(e.target.value)}
            />
            <label htmlFor="fen" className="form__label">FEN notation</label>
        </div>
    );
}

export default Input;