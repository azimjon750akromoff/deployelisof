// app/[locale]/news/[id]/page.tsx
import React from 'react';
import Image from 'next/image';

interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  image: string;
}

interface Params {
  locale: string;
  id: string;
}

// Mock function to fetch news details by ID
async function getNewsItem(id: string): Promise<NewsItem> {
  // Replace this with your actual data fetching logic (e.g., API call or database query)
  const newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'С 1 мая будут введены социальные нормы и изменены тарифы на электроэнергию и природный газ',
      content:
        'Согласно постановлению, определены новые цены на топливно-энергетические ресурсы, которые поэтапно будут меняться в ...',
      date: 'Jan 16, 2025',
      image: '/imgs/gaz.png',
    },
    {
      id: '2',
      title: 'Новости о новых технологиях в энергетике',
      content: 'Новые технологии в энергетике позволяют снизить затраты и улучшить экологию...',
      date: 'Jan 17, 2025',
      image: '/imgs/gaz.png',
    },
    {
      id: '3',
      title: 'Энергетические компании внедряют инновации',
      content: 'Энергетические компании активно внедряют инновации для повышения эффективности...',
      date: 'Jan 18, 2025',
      image: '/imgs/gaz.png',
    },
  ];

  const newsItem = newsItems.find((item) => item.id === id);
  if (!newsItem) {
    throw new Error('News item not found');
  }
  return newsItem;
}

export default async function NewsDetailPage({
  params,
}: {
  params: Params;
}) {
  const newsItem = await getNewsItem(params.id);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-[#0F1E3D]">{newsItem.title}</h1>
      <Image
        src={newsItem.image}
        alt={newsItem.title}
        width={800}
        height={450}
        className="rounded-lg mb-6"
      />
      <p className="text-lg text-gray-700 mb-6">{newsItem.content}</p>
      <p className="text-sm text-gray-500">Published on: {newsItem.date}</p>
    </div>
  );
}