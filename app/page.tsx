"use client"

import HomeHeader from "@/app/components/HomeHeader"
import HomeNav from "@/app/components/HomeNav"
import WeatherWidget from "@/app/components/WeatherWidget";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RssItem } from "@/app/types/rss";

export default function Home() {
  const [news, setNews] = useState<RssItem[]>([]);
  const [currentDate, setCurrentDate] = useState("");


  useEffect(() => {

    // fetch data
    fetch("/api/rss")
      .then((res) => res.json())
      .then((data) => {
        setNews(data.items); 
        setCurrentDate(data.date);
      })
      .catch(console.error);
  }, []);

  

  return (
    <div>
      <HomeHeader />
      <HomeNav />
      <WeatherWidget date={currentDate}/>
      <div>
        <div className="">
          <ul>
            {news.map((item, i) => (
              <li key={i}>{item.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

