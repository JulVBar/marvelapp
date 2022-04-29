
//Если доступ нужен к статичному файлу из папки public
//плохая редкая практика

// const ErrorMessage = () => {
//     return (
//         <img src={process.env.PUBLIC_URL + '/error.gif'} />
//     )
// }

import img from './error.gif';

const ErrorMessage = () => {
    return (
        <img style={{ display: 'block', width: "250px", height: "250px",objectFit: 'contain', margin: "0 auto"}}  src={img} alt="Error"/>
    )
}

export default ErrorMessage;