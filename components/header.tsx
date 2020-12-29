import { SITE_NAME } from '../lib/util'
import styles from './header.module.css'

const HeaderComponent = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{SITE_NAME}</h1>
    </div>
  )
}

export default HeaderComponent
