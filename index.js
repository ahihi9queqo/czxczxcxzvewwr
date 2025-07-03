import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState({ temp: 0, time: "" });

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/api/net")
        .then((res) => res.json())
        .then(setData);
    }, 2000); // fetch mỗi 2 giây
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Nhiệt độ: {data.temp}°C</h1>
      <p>Thời gian: {data.time}</p>
    </div>
  );
}
