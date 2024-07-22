import Link from "next/link";
import { useRouter } from "next/router";
var db = require("../../app/db.json");

export default function ModsDetailsPage() {
    const router = useRouter();
    const modId = router.query.modId


    const mod = db.mods.find((elem, index) => {
        return (elem.name === modId)// return true ou false
    })

    return <div>
        {mod ?
            <div><p>{mod.author}</p>
                <p>{mod.name}</p></div> :
            <div />
        }
        <div><Link href={"/"}>Accueil</Link></div>
        <div><Link href={"/mods"}>Mods</Link></div>
    </div>
}

// Faire nouveau component pour tableau (sans slice()) ou modifier TableSlice?