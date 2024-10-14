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

export async function deleteMod(modId) {
      const reponse = await fetch("http://localhost:8000/mods/" + modId, { method: "DELETE", mode: "cors" });

      const data = await reponse.json();
      return data;
}

export async function updateMod(modId, formDataMod) {
      const reponse = await fetch("http://localhost:8000/mods/" + modId, {
            method: "PUT", mode: "cors", body: JSON.stringify(formDataMod)
      });

      const data = await reponse.json();
      return data;
}

export async function createMod(formDataMod) {
      const reponse = await fetch("http://localhost:8000/mods/", {
            method: "POST", mode: "cors", body: JSON.stringify(formDataMod)
      });

      const data = await reponse.json();
      return data;
}

//

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

export async function deleteModder(modderId) {
      const reponse = await fetch("http://localhost:8000/modders/" + modderId, { method: "DELETE", mode: "cors" });

      const data = await reponse.json();
      return data;
}

export async function createModder(formDataModder) {
      const reponse = await fetch("http://localhost:8000/modders/", {
            method: "POST", mode: "cors", body: JSON.stringify(formDataModder)
      });

      const data = await reponse.json();
      return data;
}

export async function updateModder(modderId, formDataModder) {
      const reponse = await fetch("http://localhost:8000/modders/" + modderId, {
            method: "PUT", mode: "cors", body: JSON.stringify(formDataModder)
      });

      const data = await reponse.json();
      return data;
}
