import { useState } from "react";
import { loginModder } from "../services/api";
import { useRouter } from "next/router";


export default function FormModderLogin() {
      const [formDataModder, setFormDataModder] = useState([])
      //const router = useRouter()

      const handleChange = (event) => {
            const { name, value } = event.target
            setFormDataModder((prevFormaDataModder) => ({ ...prevFormaDataModder, [name]: value }))
      }

      const handleSubmit = (event) => {
            event.preventDefault()
            loginModder(formDataModder).then((result) => {
                  if (!result.hasOwnProperty('message')) {
                        alert("Connexion réussie")
                        localStorage.setItem("jwt-token", result)
                        //router.push("/modders/" + result.id)
                  } else {
                        alert("échec")
                  }
            })
      }

      return <form onSubmit={handleSubmit}>
            <div>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" value={formDataModder.name} onChange={handleChange} />
            </div>
            <div>
                  <label htmlFor="mdp">Mot de passe</label>
                  <input type="text" id="mdp" name="mdp" value={formDataModder.mdp} onChange={handleChange} />
            </div>
            <div>
                  <button type="submit">Connexion</button>
            </div>
      </form>
}