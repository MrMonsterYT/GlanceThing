import React, { useEffect, useState } from 'react'

import { SleepState } from '@/contexts/SleepContext.tsx'

import styles from './Screensaver.module.css'

interface ScreensaverProps {
  type: SleepState
}

const Screensaver: React.FC<ScreensaverProps> = ({ type }) => {
    import React from 'react';
    import './Screensaver.module.css'; // Ensure your styles are imported

    // If the image is local and in src/assets
    import myImage from 'C:\Users\jd130\OneDrive\Documents\CustomGlancethingImage\GT Logo.PNG';

    const Screensaver: React.FC = () => {
      return (
        <div className="screensaver">
          {/* For a local image */}
          <img src={myImage} alt="Screensaver" className="image-class" />
        </div>
      );
    };

    export default Screensaver;
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (type === 'screensaver') {
      setLoaded(true)
    } else {
      setTimeout(() => {
        setLoaded(false)
      }, 500)
    }
  }, [type])

  return (
    <div className={styles.screensaver} data-active={type !== 'off'}>
      {loaded && (
        <>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
        </>
      )}
    </div>
  )
}

export default Screensaver
