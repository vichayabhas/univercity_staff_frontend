import { getBackendUrl } from "@/components/utility/setup";
import { GetFoodForUpdate, Id } from "../../../interface";

export default async function getFoodForUpdate(
  foodId: Id,
  token: string
): Promise<GetFoodForUpdate> {
  const response = await fetch(
    `${getBackendUrl()}/randomthing/getFoodForUpdate/params/${foodId}`,
    {
      cache: "no-store",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return await response.json();
}
