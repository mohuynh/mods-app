import { useEffect, useState } from "react";
import TableMods from "../app/components/tableMods";
import { getModsList } from "@/app/services/api";
import { deleteMod } from "@/app/services/api";
import Link from "next/link";


export default function mods() {

  const [dataMods, setDataMods] = useState([])

  var refreshModsList = () => {
    getModsList().then((result) => {
      setDataMods(result)
    })
  };

  useEffect(refreshModsList, [])

  const thead = ["name", "expansion"]
  return <div><TableMods theadData={thead} tbodyData={dataMods} tableName={"mods"} onRowDelete={(row) => {
    var accessToken = localStorage.getItem("jwt-token")
    deleteMod(accessToken, row.id).then(refreshModsList);
  }} />
    <div><Link href={`/mods/create/`}>Créer nouvelle entrée</Link></div></div>
}

