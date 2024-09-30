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