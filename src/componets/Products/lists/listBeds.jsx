import { beds } from '../../UI/images/beds/listBeds'
import styles from '../Catalog.module.css'
import { Link } from 'react-router-dom'

const ListBeds = () => {
  return (
    <div className={styles.stuff}>
      {beds.map((item) => {
        return (
          <Link key={item.id} to={`${item.id}`} className={styles.items}>
            <ul>
              <li>{item.name}</li>
              <li>{item.price}$</li>
            </ul>
            <img src={item.fileName} alt={item.name} />
          </Link>
        )
      })}
    </div>
  )
}

export default ListBeds
