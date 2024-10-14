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
                              alert("Entréé ajouté")
                              router.push("/modders/" + result.id)
                        }
                  })
      }

      return <form onSubmit={handleSubmit}>

            <div hidden>
                  <label htmlFor="id">Id</label>
                  <input type="text" id="id" name="id" value={formDataModder.id} onChange={handleChange} />
            </div>

            <div>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" value={formDataModder.name} onChange={handleChange} />
            </div>
            <div>
                  <button type="submit">Créer</button>
            </div>
      </form>
}