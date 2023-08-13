import { useSWRConfig } from "swr";

const { cache, mutate } = useSWRConfig();

export const updateCacheWithKey = async (
  key,
  newData,
  fetchWithNewKey = async () => {}
) => {
  try {
    const cachedData = cache.get(key);

    if (cachedData) {
      const updatedCachedData = updateExpDataWithNewData(
        cachedData.data,
        newData.data
      );
      mutate(key, updatedCachedData, false);
    } else {
      const newKeyRes = await fetchWithNewKey();
      mutate(key, newKeyRes, false);
    }
  } catch (error) {
    console.log("ERR:" + error);
  }
};
