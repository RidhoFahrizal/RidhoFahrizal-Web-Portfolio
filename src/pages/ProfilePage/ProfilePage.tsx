import styles from './ProfilePage.module.css'
import profilePicture from '../../feature/profile/assets/gambar_ridho2.png'


function Profile() {
  return (
    <>
      <div className={styles['page-container']}>
        <div className={styles["text-container"]}>

          <h1 className={styles['profile-name']}>
            RIDHO FAHRIZAL
            <p className={styles['profile-description']}>
              I’m a Informatics Engineering student with a strong drive to solve real problems
              through software. I enjoy turning complex challenges into clear, practical
              solutions—whetherthrough clean backend architecture, efficient data processing, or thoughtful product design.
              I’m constantly learning, building,
              and refining my skills to create software that actually makes a difference.
            </p>
            <div className={`${styles['social-media-icons']} `}>
              <a href="https://www.facebook.com/ridho.fharizal/" target="_blank"><i className='bx bxl-facebook'></i></a>
              <a href="https://www.tiktok.com/@ridhofahrizal" target="_blank"><i className='bx bxl-tiktok'></i></a>
              <a href="https://www.instagram.com/ridho.fahrizal1/" target="_blank"><i className='bx bxl-instagram-alt'></i></a>
              <a href="https://www.linkedin.com/in/ridho-fahrizal-95a060244/" target="_blank"><i className='bx bxl-linkedin'></i></a>
            </div>
          </h1>
        </div>
        <div className={styles['profile-picture-container']}>
          <img
            src={profilePicture}
            alt='foto ridho'
            loading='lazy'
          />
        </div>
      </div>
    </>
  )
}

export default Profile