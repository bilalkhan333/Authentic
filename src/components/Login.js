import {useState} from "react"
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase-config";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(false)

  const submit = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
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
        Enter Email :
      </label>
      <input onChange={(e) => {
        setEmail(e.target.value)
      }}/>
      <br/>
      <label>Enter Password :</label>
      <input onChange={(event) => {
        setPassword(event.target.value)
      }}/>
      <br/>
      <button onClick={submit}>login</button>
      <br/>
      {success && <p> Login successfully</p>}
      {failure && <p>Invalid login </p>}
    </>
  )
}
export default Login
