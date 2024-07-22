import Link from "next/link"

export default function Homepage(){
    return (<div>
        <h1>Bienvenue sur mon projet</h1>
        <div><Link href={"/mods"}>Accèder aux mods</Link></div>
        </div>)
}