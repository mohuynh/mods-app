import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getMod, getModdersList } from "@/app/services/api";
import { deleteMod } from "@/app/services/api";
import { jwtDecode } from "jwt-decode";

export default function ModsDetailsPage() {
    const router = useRouter();
    const modId = router.query.modId

    const [mod, setMod] = useState(null)
    const [idToNameMap, setIdToNameMap] = useState(new Map())

    useEffect(() => {
        getMod(modId).then((result) => {
            setMod(result)
        })
    }, [modId])

    useEffect(() => {
        getModdersList().then((result) => {
            var map = new Map(result.map((e) => [e.id, e.name]))
            setIdToNameMap(map)
        })
    }, [])

    const RenderEditButtons = () => {
        const token = localStorage.getItem("jwt-token")
        if (token == null) {
            return <></>
        }

        var loggedInUserId;
        try {
            const decoded = jwtDecode(token)
            loggedInUserId = decoded.userid;
        } catch (error) {
            return <></>
        }

        if (loggedInUserId != mod.id_author) {
            return <></>
        }

        return <><div><Link href={`/mods/update/${mod.id}`}>Modfier</Link></div>
            <div><button onClick={() => {
                var accessToken = localStorage.getItem("jwt-token")
                deleteMod(accessToken, mod.id)
            }}>supprimer</button></div></>;
    };

    const keyBlackList = ["id", "id_author"];
    return <div>
        {mod ?
            <><div><ul>
                {Object.entries(mod).filter((keyValue) => {
                    if (keyBlackList.includes(keyValue[0])) {
                        return false;
                    }
                    return true;
                }).map((keyValue, index) => {
                    return <li key={index}>{keyValue[0]} : {keyValue[1]}</li>
                })}
                <li key="name">author&apos;s name: {idToNameMap.get(mod.id_author)}</li>
            </ul></div>
                {RenderEditButtons()}
            </>
            :
            <div />
        }
        <div><Link href={"/"}>Accueil</Link></div>
        <div><Link href={"/mods"}>Mods</Link></div>
    </div>
}
