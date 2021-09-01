import * as React from 'react'
import '../styles/Card.css'
import Button from './Button'
import Input from './Input'

const InputCard = () => {
    const [fenPos, setFenPos] = React.useState('');
    

    return (
        <div className="card">
            <Input inputValue={fenPos} setValue={setFenPos}/>
            <Button value={fenPos} />
        </div>
    );
}
export default InputCard;