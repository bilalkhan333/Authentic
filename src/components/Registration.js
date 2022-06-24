import {useState} from "react"
import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import {auth} from "../firebase-config"

const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState({})
  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(false)
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })
  const Register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess(true)
      setFailure(false)
    } catch (error) {
      setFailure(true)
      setSuccess(false)
    }
  }
  const handleChange = event => {
    setEmail(event.target.value)
  }
  return (
    <>
      <label>
        Email :
      </label>
      <input onChange={handleChange} value={email}/>
      <br/>
      <label>
        Password :
      </label>
      <input onChange={(e) => setPassword(e.target.value)} value={password}/>
      <br/>
      <button onClick={Register}>Register</button>
      <br/>
      {success && <p>Registration Done</p>}
      {failure && <p>Invalid Email</p>}
    </>
  )
}
export default Registration
