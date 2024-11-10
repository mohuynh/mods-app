
const backendBaseUrl = "https://www.cefii-developpements.fr/morgane1412/mods-app"; // Prod
// const backendBaseUrl = "http://localhost:8000/Router.php?REQUEST_URI="; // Dev only

// Table Mods
export async function getModsList() {
      const reponse = await fetch(`${backendBaseUrl}/mods`);

      const data = await reponse.json();
      return data;
}

export async function getMod(modId) {
      const reponse = await fetch(`${backendBaseUrl}/mods/` + modId);

      const data = await reponse.json();
      return data;
}

export async function deleteMod(accessToken, modId) {
      const reponse = await fetch(`${backendBaseUrl}/mods/` + modId, {
            method: "DELETE", mode: "cors", headers: { Authorization: `Bearer ${accessToken}` }
      });

      const data = await reponse.json();
      return data;
}

export async function updateMod(accessToken, modId, formDataMod) {
      const reponse = await fetch(`${backendBaseUrl}/mods/` + modId, {
            method: "PUT", mode: "cors", body: JSON.stringify(formDataMod), headers: { Authorization: `Bearer ${accessToken}` }
      });

      const data = await reponse.json();
      return data;
}

export async function createMod(accessToken, formDataMod) {
      const reponse = await fetch(`${backendBaseUrl}/mods/`, {
            method: "POST", mode: "cors", body: JSON.stringify(formDataMod), headers: { Authorization: `Bearer ${accessToken}` }
      });

      const data = await reponse.json();
      return data;
}

// Table Modders

export async function getModdersList() {
      const reponse = await fetch(`${backendBaseUrl}/modders`);

      const data = await reponse.json();
      return data;
}

export async function getModder(modderId) {
      const reponse = await fetch(`${backendBaseUrl}/modders/` + modderId);

      const data = await reponse.json();
      return data;
}

export async function deleteModder(accessToken, modderId) {
      const reponse = await fetch(`${backendBaseUrl}/modders/` + modderId, {
            method: "DELETE", mode: "cors", headers: { Authorization: `Bearer ${accessToken}` }
      });

      const data = await reponse.json();
      return data;
}

export async function createModder(formDataModder) {
      const reponse = await fetch(`${backendBaseUrl}/signup/`, {
            method: "POST", mode: "cors", body: JSON.stringify(formDataModder)
      });

      const data = await reponse.json();
      return data;
}

export async function updateModder(accessToken, modderId, formDataModder) {
      const reponse = await fetch(`${backendBaseUrl}/modders/` + modderId, {
            method: "PUT", mode: "cors", body: JSON.stringify(formDataModder), headers: { Authorization: `Bearer ${accessToken}` }
      });

      const data = await reponse.json();
      return data;
}

export async function loginModder(formDataModder) {
      const reponse = await fetch(`${backendBaseUrl}/signin/`, {
            method: "POST", mode: "cors", body: JSON.stringify(formDataModder)
      });

      const data = await reponse.json();
      return data;
}
