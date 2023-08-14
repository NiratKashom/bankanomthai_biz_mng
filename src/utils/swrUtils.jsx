import { useSWRConfig, mutate } from "swr";

export const updateCacheWithKey = async (
  key,
  newData,
  fetchWithNewKey = () => {}
) => {
  console.log("updateCacheWithKey");
  const { cache } = useSWRConfig();
  console.log("wall");
  try {
    const cachedData = cache.get(key);
    console.log("=== cachedData", cachedData);
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

// import { useSWRConfig } from "swr";

// export const updateCacheWithKey = (
//   key,
//   newData,
//   fetchWithNewKey = () => {}
// ) => {
//   console.log('updateCacheWithKey')
//   const { cache, mutate } = useSWRConfig();
//   console.log("wall")
//   try {
//     const cachedData = cache.get(key);
//     console.log('=== cachedData', cachedData)
//     if (cachedData) {
//       const updatedCachedData = updateExpDataWithNewData(
//         cachedData.data,
//         newData.data
//       );
//       mutate(key, updatedCachedData, false);
//     } else {
//       const newKeyRes = fetchWithNewKey();
//       mutate(key, newKeyRes, false);
//     }
//   } catch (error) {
//     console.log("ERR:" + error);
//   }
// };
