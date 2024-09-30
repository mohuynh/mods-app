import FormMod from "@/app/components/formMod";
import { useRouter } from "next/router";

export default function ModsUpdatePage() {
      const router = useRouter();
      const modId = router.query.modId

      return <FormMod modId={modId} />
}