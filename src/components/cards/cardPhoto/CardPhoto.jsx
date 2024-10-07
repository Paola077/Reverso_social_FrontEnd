import './_CardPhoto.scss'
import { FaLinkedin } from 'react-icons/fa'

const CardPhoto = ({ imageUrl, name, title, linkedinUrl }) => {
    return (
      <div className='cardPhoto'>
        <div className='cardPhotoCircle'>
          <img src={imageUrl} alt={name} className='cardPhotoImage' />
        </div>
        <div className='cardPhotoInfo'>
          <div className='cardTitleContainer'>
          <h4 className='cardPhotoName'>{name}</h4>
          <a href={linkedinUrl} target='_blank' rel='noopener noreferrer'>
            <FaLinkedin className="linkedin-icon" />
          </a>
          </div>
          <p className='cardPhotoTitle'>{title}</p>
        </div>
      </div>
    );
  };
  
  export default CardPhoto;