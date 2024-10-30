// Table Mods
export async function getModsList() {
      const reponse = await fetch("http://localhost:8000/mods");

      const data = await reponse.json();
      return data;
}

export async function getMod(modId) {
      const reponse = await fetch("http://localhost:8000/mods/" + modId);

      const data = await reponse.json();
      return data;
}

export async function deleteMod(accessToken, modId) {
      const reponse = await fetch("http://localhost:8000/mods/" + modId, {
            method: "DELETE", mode: "cors", headers: { Authorization: `Bearer ${accessToken}` }
      });

      const data = await reponse.json();
      return data;
}

export async function updateMod(accessToken, modId, formDataMod) {
      const reponse = await fetch("http://localhost:8000/mods/" + modId, {
            method: "PUT", mode: "cors", body: JSON.stringify(formDataMod), headers: { Authorization: `Bearer ${accessToken}` }
      });

      const data = await reponse.json();
      return data;
}

export async function createMod(accessToken, formDataMod) {
      const reponse = await fetch("http://localhost:8000/mods/", {
            method: "POST", mode: "cors", body: JSON.stringify(formDataMod), headers: { Authorization: `Bearer ${accessToken}` }
      });

      const data = await reponse.json();
      return data;
}

// Table Modders

export async function getModdersList() {
      const reponse = await fetch("http://localhost:8000/modders");

      const data = await reponse.json();
      return data;
}

export async function getModder(modderId) {
      const reponse = await fetch("http://localhost:8000/modders/" + modderId);

      const data = await reponse.json();
      return data;
}

export async function deleteModder(accessToken, modderId) {
      const reponse = await fetch("http://localhost:8000/modders/" + modderId, {
            method: "DELETE", mode: "cors", headers: { Authorization: `Bearer ${accessToken}` }
      });

      const data = await reponse.json();
      return data;
}

export async function createModder(formDataModder) {
      const reponse = await fetch("http://localhost:8000/signup/", {
            method: "POST", mode: "cors", body: JSON.stringify(formDataModder)
      });

      const data = await reponse.json();
      return data;
}

export async function updateModder(accessToken, modderId, formDataModder) {
      const reponse = await fetch("http://localhost:8000/modders/" + modderId, {
            method: "PUT", mode: "cors", body: JSON.stringify(formDataModder), headers: { Authorization: `Bearer ${accessToken}` }
      });

      const data = await reponse.json();
      return data;
}

export async function loginModder(formDataModder) {
      const reponse = await fetch("http://localhost:8000/signin/", {
            method: "POST", mode: "cors", body: JSON.stringify(formDataModder)
      });

      const data = await reponse.json();
      return data;
}
