"use client"

import React, { useState, useEffect } from 'react'
import { ChevronDown , CloudSun} from "lucide-react";
import {cities} from "@/app/data/cities"

function WeatherWidget( {date} ) {
  const [city, setCity] = useState(cities[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [weather, setWeather] = useState(null)
  
  useEffect(() =>{

    fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=c10b57576e559c50559cf147b8beef1d")
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      })
  }, [])


  return (
    <div>
      <a className="text-sm font-semibold" href=""> {date}</a>
      <div className="flex cursor-pointer items-center">
        <span className="text-sm font-semibold">{city.name}</span>
        <ChevronDown className="text-gray-400"/>
        <span className="mx-2">22° - 22°C</span>
        <CloudSun className="text-gray-400"/>
      </div>




    </div>
  )
}

export default WeatherWidget