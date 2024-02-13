import { render } from '@testing-library/react';
import mypic from '../../images/mypic.jpg';
import './index.css'

const UserProfile = (props) =>{
    const {userDetails} = props

    const {name,imgUrl,role} = userDetails;

    return (<li className='profile-card'>
    <div>
    <img src={imgUrl} alt="Tharun-profile" className='my-profile'/>

    </div>
    <div className='details'>
    <h1>{name}</h1>
    <p>{role}</p>
    </div>   
    
</li>)

} 



export default UserProfile;