import {useState, useEffect} from "react";
import {testApi} from "../api/services/test.js";

export default function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    handleTestRequest();
  }, []);

  const handleTestRequest = async () => {
    try {
      const result = await testApi.getTest();

      setData(JSON.stringify(result));
    } catch (err) {
      console.error("Ошибка:", err);
    }
  };

  return <div>Тестовый API-response: {data ?? "Получаю данные ..."}</div>;
}
