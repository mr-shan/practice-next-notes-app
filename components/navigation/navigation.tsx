import Link from 'next/link'
import styles from './navigation.module.css'

const Navigation = () => {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <h1>Quicky Notes</h1>
        <p>A notes app no one asked.</p>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href='/newNote'>Add New Note</Link>
          </li>
          <li className={styles.listItem}>
            <Link href='/archived'>Archived</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation