import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Alert } from "react-native";

const useFetch = <T = unknown>(
  endpoint: string,
  query: Record<string, unknown>
) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const options = useMemo(
    () => ({
      method: "GET",
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      params: { ...query },
      headers: {
        "X-RapidAPI-Key": process.env.EXPO_PUBLIC_RAPID_API_KEY!,
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      }
    }),
    [endpoint, query]
  );

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await axios.request<{ data: T[] }>(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      setError(errorMessage);
      Alert.alert("Error", errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = () => {
    fetchData();
  };

    
  return { data, isLoading, error, refetch };
};

export default useFetch;
