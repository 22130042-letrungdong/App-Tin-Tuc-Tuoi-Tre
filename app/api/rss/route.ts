import { NextResponse } from "next/server";
import Parser from "rss-parser";

const parser = new Parser();

function formatDate(dateString: string){
  const date = new Date(dateString);
  return date.toLocaleDateString("vi-VN",{
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    
  }, )
}

export async function GET() {
  const RSS_URL = "https://tuoitre.vn/rss/tin-moi-nhat.rss";

  try{
    const feed = await parser.parseURL(RSS_URL);
    return NextResponse.json({
      status: "success",
      items: feed.items,
      date: formatDate(feed.pubDate),
    });
  }catch(error){
    console.error(error);
    return NextResponse.json({
      status: "error",
      message: "nub"
    })
  }
  

}
