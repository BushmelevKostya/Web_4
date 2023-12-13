import { useNavigate } from 'react-router-dom';
function SubmitClick(event) {
    event.preventDefault();
    window.location.assign('http://localhost:3000/app');
}

export default SubmitClick;