import './Background.css'
import assets from '../../assets/assets';
const Background = ({playStatus,heroCount}) => {
      if(playStatus)
      {
        return (
            <video className='background fade-in' autoPlay loop muted  preload="lazy" >
                <source src={assets.video1} type='video/mp4'  />
            </video>
        )
      }

      else if(heroCount===0)
      {
        return (
            <img src={assets.image1}  className="background fade-in" loading='eager' alt="" />
        )
      }
      else if(heroCount===1)
        {
          return (
              <img src={assets.image2}  className="background fade-in" loading='eager' alt="" />
          )
        }
        else if(heroCount===2)
            {
              return (
                  <img src={assets.image3}  className="background fade-in" loading='eager' alt="" />
              )
            }
}

export default Background
