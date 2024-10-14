import FormModder from "@/app/components/formModder";
import { useRouter } from "next/router";

export default function ModdersUpdatePage() {
      const router = useRouter();
      const modderId = router.query.modderId

      return <FormModder modderId={modderId} />
}