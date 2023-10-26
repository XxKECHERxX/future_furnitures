import { chairs } from '../UI/images/chairs/listChairs'
import { tables } from '../UI/images/tables/listTables'
import { beds } from '../UI/images/beds/listBeds'
import { closets } from '../UI/images/closets/listClosets'
import { lamps } from '../UI/images/lamps/listLamps'
import styles from './Catalog.module.css'
import { useState } from 'react'

const fullCatalog = [...chairs, ...tables, ...beds, ...closets, ...lamps]

const PageFullCatalog = () => {
  const firstPage = fullCatalog.slice(0, 12)
  const secondPage = fullCatalog.slice(12, 24)
  const thirdPage = fullCatalog.slice(24, 36)
  const fourPage = fullCatalog.slice(36, 43)

  const [displayPage, setDisplayPage] = useState(firstPage)

  const handleLoadFirstPage = () => {
    setDisplayPage(firstPage)
  }
  const handleLoadSecondPage = () => {
    setDisplayPage(secondPage)
  }
  const handleLoadThirdPage = () => {
    setDisplayPage(thirdPage)
  }
  const handleLoadFourPage = () => {
    setDisplayPage(fourPage)
  }

  return (
    <div>
      <div className={styles.stuff}>
        {displayPage.map((item) => {
          return (
            <div key={item.id} className={styles.items}>
              <ul>
                <li>{item.name}</li>
                <li>{item.price}$</li>
              </ul>
              <img src={item.fileName} alt={item.name} />
            </div>
          )
        })}
      </div>
      <div className={styles.btnPage}>
        <button onClick={handleLoadFirstPage}>1</button>
        <button onClick={handleLoadSecondPage}>2</button>
        <button onClick={handleLoadThirdPage}>3</button>
        <button onClick={handleLoadFourPage}>4</button>
      </div>
    </div>
  )
}

export default PageFullCatalog
