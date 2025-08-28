import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Protected() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const res = await API.get("/auth/protected", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setData(res.data.message);
    };
    fetchData();
  }, []);

  return <h2>{data}</h2>;
}
