import {useState} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase-config";

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState({})
  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(false)


  const submit = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess(true)
      setFailure(false)

      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
      })

    } catch (error) {
      setFailure(true)
      setSuccess(false)
    }
  }

  return (
    <>
      <label>
        Email :
      </label> <input onChange={(e) => setEmail(e.target.value)}/>
      <br/>
      <label>
        Password :
      </label>
      <input onChange={(e) => setPassword(e.target.value)}/>
      <br/>
      <button onClick={submit}>Register</button>
      <br/>
      {success && <p>Registration Done</p>}
      {failure && <p>Invalid Email</p>}
    </>
  )
}
export default Register
