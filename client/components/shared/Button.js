import styles from '../../styles/Button.module.css'

const Button = ({ value }) => {
    const sendPosition = (e) => {
        e.preventDefault();

        console.log(value)
    }

    return (
        <span className={styles.btn}><a href="#" onClick={sendPosition}></a></span>
    );
}

export default Button;