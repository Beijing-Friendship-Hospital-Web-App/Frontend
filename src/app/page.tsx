
import "bootstrap/dist/css/bootstrap.css"
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">姓名</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="姓名" />
      </div>

      <div>
        <label htmlFor="exampleFormControlInput1">手机号码</label>
        <input  className="form-control" id="exampleFormControlInput1" placeholder="手机号码" type="number" pattern="[0-9]*" inputMode="numeric" />
      </div>

    </main>
  )
}
