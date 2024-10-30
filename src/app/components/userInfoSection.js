import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

export default function UserInfo() {

      const [userToken, setUserToken] = useState("")

      useEffect(() => {
            const token = localStorage.getItem("jwt-token")

            try {
                  const decoded = jwtDecode(token)
                  console.log("decoded : ", decoded.username)
                  setUserToken(decoded.username)
            } catch (error) {
                  console.log("pas d'utilisateur")
                  setUserToken("invité")
            }

      }, [])

      return <div><p>Bonjour {userToken}</p></div>
}