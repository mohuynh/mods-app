import { useEffect, useState } from "react";
import TableMods from "../app/components/tableMods";
import { getModsList } from "@/app/services/api";
import HeaderUser from "@/app/components/headerUser";
import { Container } from "react-bootstrap";
import FooterUser from "@/app/components/footerUser";

import 'bootstrap/dist/css/bootstrap.min.css';



export default function mods() {

  const [dataMods, setDataMods] = useState([])

  var ModList = () => {
    getModsList().then((result) => {
      setDataMods(result)
      console.log(result)
    })
  };

  useEffect(ModList, [])

  // const thead = ["name", "expansion"]

  return <>
    <header><HeaderUser /></header>
    <main><div>
      <Container className="mt-5">
        <TableMods ModList={dataMods} />
      </Container >
    </div></main>
    <footer className="mt-5">
      <FooterUser />
    </footer>
  </>

}

