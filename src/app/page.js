'use client';

import FooterUser from "./components/footerUser";
import HeaderUser from "./components/headerUser";
import Homepage from "./components/homepage";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

  return (
    <>
      <header><HeaderUser /></header>
      <main>
        <Homepage />
      </main>
      <footer><FooterUser /></footer>
    </>
  )
}