import React, { useEffect, useState } from 'react'

const apiUrl = 'https://api.nytimes.com/svc/topstories/v2';
const apiKey = 'YVTxeUkGnvjuFtiCL6myAPogBH0i9dAd';
let type = 'world.json';

export default function News() {
    const [news, setNews] = useState(null);

    useEffect(() => {
        let api = `${apiUrl}/${type}?api-key=${apiKey}`;
        fetch(api)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setNews(data);
            })
    }, []);

    return (
        news && news.results.splice(0,5).map((article, index) => {
            return (
            <article key={article.url}>
              <img alt={index} height="100px" src={article.multimedia[0].url} />
              <a href={article.url}>{article.title}</a> 
            </article>
            )
          })
    )
}
