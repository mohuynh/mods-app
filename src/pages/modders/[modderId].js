import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getModder } from "@/app/services/api";


export default function ModdersDetailsPage() {
      const router = useRouter();
      const modderId = router.query.modderId

      const [modder, setModder] = useState(null)

      useEffect(() => {
            getModder(modderId).then((result) => {
                  setModder(result)
            })
      }, [])

      return <div>
            {modder ?
                  <div><ul>
                        {Object.entries(modder).map((keyValue, index) => {
                              return <li key={index}>{keyValue[0]} : {keyValue[1]}</li>
                        })}
                  </ul></div> :
                  <div />
            }
            <div><Link href={"/"}>Accueil</Link></div>
            <div><Link href={"/modders"}>Modders</Link></div>
      </div>
}
