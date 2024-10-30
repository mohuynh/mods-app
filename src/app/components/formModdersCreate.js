import { useState } from "react"
import { createModder } from "../services/api"
import { useRouter } from "next/router"


export default function FormModderCreate() {
      const [formDataModder, setFormDataModder] = useState([])
      const router = useRouter()

      const handleChange = (event) => {
            const { name, value } = event.target
            setFormDataModder((prevFormaDataModder) => ({ ...prevFormaDataModder, [name]: value }))
      }

      const handleSubmit = (event) => {
            event.preventDefault()
            createModder(formDataModder)
                  .then((result) => {
                        if (!result.hasOwnProperty('message')) {
                              alert("Inscription réussie")
                              //router.push("/")
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
                  <input type="password" id="mdp" name="mdp" value={formDataModder.mdp} onChange={handleChange} />
            </div>
            <div>
                  <button type="submit">Créer</button>
            </div>
      </form>
}