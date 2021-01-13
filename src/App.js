import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [news, setNews] = useState([]);
  const fetNews = async () => {
    const res = await fetch("https://www.reddit.com/subreddits/popular.json");
    const data = await res.json();
    const newsData = data.data.children;
    setNews(newsData);
  };
  useEffect(() => {
    fetNews();
  }, []);

  return (
    <div className="news">
      {news.map((item) => (
        <div className="news-item">
          <h3>
            <img src={item.data.icon_img} alt="" /> {item.data.display_name}
          </h3>
          <img src={item.data.banner_img} alt="" />
          <div
            dangerouslySetInnerHTML={{ __html: item.data.public_description }}
          />
          <a href={`https://www.reddit.com${item.data.url}`} target="_blank">
            Read More
          </a>
        </div>
      ))}
    </div>
  );
}

export default App;
