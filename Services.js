import {API_KEY, endpoint, country} from './config';

export async function services(category = 'general') {
  let articles = await fetch(
    `${endpoint}?country=${country}&category=${category}`,
    {
      headers: {
        'X-API-KEY': API_KEY,
      },
    },
  );
  console.log('API Called with category: ' + category);
  let result = await articles.json();
  articles = null;

  return result.articles;
}
