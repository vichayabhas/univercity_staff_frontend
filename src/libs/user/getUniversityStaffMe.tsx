import { getBackendUrl, userPath } from "@/components/utility/setup";
import { InterUniversityStaff } from "../../../interface";

export default async function getUniversityStaffMe(
  token: string
): Promise<InterUniversityStaff> {
  const response = await fetch(
    `${getBackendUrl()}/${userPath}/getUniversityStaffMe/`,
    {
      cache: "no-store",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return await response.json();
}
