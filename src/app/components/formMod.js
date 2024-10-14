import { useEffect, useState } from "react";
import { getMod, updateMod } from "../services/api";
import { useRouter } from "next/router";

export default function FormMod({ modId }) {
      const [formDataMod, setFormDataMod] = useState([])
      const router = useRouter()

      useEffect(() => {
            getMod(modId).then((formDataMod) => {
                  setFormDataMod(formDataMod)
            })
      }, [])

      const handleChange = (event) => {
            const { name, value } = event.target
            setFormDataMod((prevFormaDataMod) => ({ ...prevFormaDataMod, [name]: value }))
      }

      const handleSubmit = (event) => {
            event.preventDefault()
            updateMod(modId, formDataMod)
                  .then((result) => {
                        if (!result.hasOwnProperty('message')) {
                              alert("Entréé modifiée")
                              router.push("/mods/" + result.id)
                        }
                  })
      }

      return <form onSubmit={handleSubmit}>

            <div hidden>
                  <label htmlFor="id">Id</label>
                  <input type="text" id="id" name="id" value={formDataMod.id} onChange={handleChange} />
            </div>

            <div>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" value={formDataMod.name} onChange={handleChange} />
            </div>

            <div>
                  <label htmlFor="author">Author</label>
                  <input type="text" id="author" name="author" value={formDataMod.author} onChange={handleChange} />
            </div>

            <div>
                  <label htmlFor="expansion">Expansion</label>
                  <input type="text" id="expansion" name="expansion" value={formDataMod.expansion} onChange={handleChange} />
            </div>

            <div>
                  <label htmlFor="type">Type</label>
                  <input type="text" id="type" name="type" value={formDataMod.type} onChange={handleChange} />
            </div>

            <div>
                  <label htmlFor="age">Age</label>
                  <input type="text" id="age" name="age" value={formDataMod.age} onChange={handleChange} />
            </div>

            <div>
                  <label htmlFor="gender">Gender</label>
                  <input type="text" id="gender" name="gender" value={formDataMod.gender} onChange={handleChange} />
            </div>

            <div>
                  <label htmlFor="clothing_category">Clothing Category</label>
                  <input type="text" id="clothing_category" name="clothing_category" value={formDataMod.clothing_category} onChange={handleChange} />
            </div>

            <div>
                  <label htmlFor="size">Size</label>
                  <input type="text" id="size" name="size" value={formDataMod.size} onChange={handleChange} />
            </div>

            <div>
                  <button type="submit">Modifier</button>
            </div>
      </form>
}