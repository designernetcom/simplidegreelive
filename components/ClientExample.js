"use client";

import { useEffect, useState } from "react";

export default function ClientExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/example")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Client-Side Fetching</h1>
      <p>{data ? `Message: ${data.message}` : "Loading..."}</p>
    </div>
  );
}
