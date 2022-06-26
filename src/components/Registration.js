import {useState} from "react"
import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import {auth} from "../firebase-config"

const Registration = () => {

  const [emails, setEmails] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState({})
  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(false)

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  const Register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, emails, password);
      setSuccess(true)
      setFailure(false)
    } catch (error) {
      setFailure(true)
      setSuccess(false)
    }

  }

  return (
    <>
      <label>
        Email :
      </label>
      <input onChange={(e) => {
        console.log(setEmails(e.target.value))
      }}/>
      <br/>
      <label>
        Password :
      </label>

      <input onChange={(e) => {
        setPassword(e.target.value)
      }}/>
      <br/>
      <button onClick={Register}>Register</button>
      <br/>
      {success && <p>Registration Done</p>}
      {failure && <p>Invalid Email</p>}
    </>
  )
}
export default Registration
