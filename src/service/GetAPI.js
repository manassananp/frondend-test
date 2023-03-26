import { useEffect, useState, useRef } from "react";

const GetAPI = async (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const loadData = async () => {
    try {
      setLoading(true);
      setErrors(null);
      setData(null);

      const result = await fetch(url);
      const json = await result.json();
      console.log(json);
      setData(json);
    } catch (err) {
      setErrors(err.toString());
    } finally {
      setLoading(false);
    }
  };

  // const ref = useRef(null);
  // ref.current = () => {
  //   loadData();
  // };
  // useEffect(() => {
  //   ref.current();
  // }, []);

  return [data, loading, errors];
};

export default GetAPI;
