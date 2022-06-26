import { useState, useEffect } from "react";

const FetchApi = (url, initialValue) => {
  const [data, setData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
    return () => {
      isMounted = false;
    };
  }, [url]);
  return [data, setData, isLoading];
};
export default FetchApi;
