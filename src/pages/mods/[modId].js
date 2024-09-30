import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getMod } from "@/app/services/api";


export default function ModsDetailsPage() {
    const router = useRouter();
    const modId = router.query.modId

    const [mod, setMod] = useState(null)

    useEffect(() => {
        getMod(modId).then((result) => {
            setMod(result)
        })
    }, [])

    return <div>
        {mod ?
            <div><ul>
                {Object.entries(mod).map((keyValue, index) => {
                    return <li key={index}>{keyValue[0]} : {keyValue[1]}</li>
                })}
            </ul></div> :
            <div />
        }
        <div><Link href={"/"}>Accueil</Link></div>
        <div><Link href={"/mods"}>Mods</Link></div>
    </div>
}
