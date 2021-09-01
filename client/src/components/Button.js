/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import '../styles/Button.css'
import axios from 'axios'

const Button = ({ value }) => {
    const sendPosition = async (e) => {
        e.preventDefault();
        if (value === "") {
            value = "rnbq1bnr/ppppkppp/8/4p3/4P3/8/PPPPKPPP/RNBQ1BNR w - - 2 3"
        }

        const response = await axios.post(`${process.env.REACT_APP_API_URL}/eval/${encodeURIComponent(value)}`)
        // const response = await axios.post(`${process.env.REACT_APP_API_URL}/eval/`, encodeURIComponent(value))
        console.log(response.data)
    }

    return (
        <span className="btn"><a href="#" onClick={sendPosition}></a></span>
    );
}

export default Button;