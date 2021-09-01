/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import '../styles/Button.css'
import axios from 'axios'

const Button = ({ value }) => {
    const sendPosition = async (e) => {
        e.preventDefault();

        const response = await axios.post(`http://localhost:8080/eval/${value}`)
        console.log(response.data)
    }

    return (
        <span className="btn"><a href="#" onClick={sendPosition}></a></span>
    );
}

export default Button;