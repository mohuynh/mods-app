import { useEffect, useState } from "react";
import { getModder, updateModder } from "../services/api";
import { useRouter } from "next/router";


export default function FormModder({ modderId }) {
      const [formDataModder, setFormDataModder] = useState([])
      const router = useRouter()

      useEffect(() => {
            getModder(modderId).then((formDataModder) => {
                  setFormDataModder(formDataModder)
            })
      }, [])

      const handleChange = (event) => {
            const { name, value } = event.target
            setFormDataModder((prevFormaDataModder) => ({ ...prevFormaDataModder, [name]: value }))
      }

      const handleSubmit = (event) => {
            event.preventDefault()
            updateModder(modderId, formDataModder)
                  .then((result) => {
                        if (!result.hasOwnProperty('message')) {
                              alert("Entréé modifiée")
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
                  <button type="submit">Modifier</button>
            </div>
      </form>
}