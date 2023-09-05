import styles from './CSS/results.module.css'

export function Results() {
  return (
    <div className={styles['results']}>
      <header>
        <h4>Your Result</h4>
      </header>
      <section className={styles['circle']}>
        <h2>76</h2>
        <p>of 100</p>
      </section>
      <footer>
        <h4>Great</h4>
        <p>You scored higher than 65% of the people who have taken these tests.</p>
      </footer>
    </div>
  )
}
