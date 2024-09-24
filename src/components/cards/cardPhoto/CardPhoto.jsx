import './_CardPhoto.scss'
import { FaLinkedin } from 'react-icons/fa'

const CardPhoto = ({ imageUrl, name, title, linkedinUrl }) => {
    return (
      <div className='cardPhoto'>
        <img src={imageUrl} alt={name} className='cardPhotoImage' />
        <div className='cardPhotoInfo'>
          <h4 className='cardPhotoName'>{name}</h4>
          <div className='cardTitleContainer'>
          <p className='cardPhotoTitle'>{title}</p>
          <a href={linkedinUrl} target='_blank' rel='noopener noreferrer'>
            <FaLinkedin className="linkedin-icon" />
          </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default CardPhoto;