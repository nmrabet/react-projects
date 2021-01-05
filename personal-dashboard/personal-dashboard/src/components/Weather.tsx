import React, { useEffect, useState } from "react";
import { Index } from "../types/index";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "a6741493b9a33c844a5b272ca05f9c1d";
let city = "Tunis, Tunisia";

export default function Weather() {
  const [weather, setWeather] = useState<Index | null>();

  useEffect(() => {
    let api = `${apiUrl}?q=${city}&appid=${apiKey}&units=imperial`;
    fetch(api)
      .then((res) => res.json())
      .then((data: Index) => {
        console.log(data.main.temp);
        setWeather(data);
      });
  }, []);

  return (
    <div>
      <h2>
        It is currently {weather && weather.main.temp}° in {city}.
      </h2>
    </div>
  );
}
