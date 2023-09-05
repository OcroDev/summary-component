import styles from './CSS/summary.module.css'
import { MemorySvg } from './memory-svg'
import { VerbalSvg } from './verbal-svg'
import { VisualSvg } from './visual-svg'
import { ReactionSvg } from './reaction-svg'
import { type Data, Category } from '../types.d';

interface Props {
  summary: Data[]
}

export function Summary({ summary }: Props) {
  console.log('sumary \n', summary)
  return (
    <div className={styles.summary}>
      <header>
        <h3>Summary</h3>
      </header>
      <section>
        {summary.map(data => {
          return (
            <div className={styles[`${data.category.toLocaleLowerCase()}`]}>
              <p>
                <span className={styles.icon}>
                  {data.category === Category.Reaction && <ReactionSvg />}
                  {data.category === Category.Memory && <MemorySvg />}
                  {data.category === Category.Verbal && <VerbalSvg />}
                  {data.category === Category.Visual && <VisualSvg />}
                </span>
                {data.category}
              </p>
              <p className={styles.total}>
                {data.score} <span>/ 100 </span>
              </p>
            </div>
          )
        })}
      </section>
      <button className={styles.button}>
        Continue
      </button>
    </div>
  )
}
