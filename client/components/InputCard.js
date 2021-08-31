import * as React from 'react'
import Button from './shared/Button'
import Input from './shared/Input'

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