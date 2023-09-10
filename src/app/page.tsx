
import "bootstrap/dist/css/bootstrap.css"
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <div className="form-group">
        <input type='text'/>
        <input type='phone'/>
      </div> */}
    <div className="form-group">
      <label htmlFor="exampleFormControlInput1">姓名</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="姓名" />
     </div>
    </main>
  )
}
