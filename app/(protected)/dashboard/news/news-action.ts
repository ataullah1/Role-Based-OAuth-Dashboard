"use server";

import client from "@/prisma";

export const postNews = async ({
  title,
  content,
  category,
  image,
}: {
  title: string;
  content: string;
  category: string;
  image: string;
}) => {
  try {
    const slug = title.toLowerCase().replace(/\s+/g, "-");

    const news = await client.news.create({
      data: {
        title,
        slug,
        content,
        category,
        image,
      },
    });
    return news;
  } catch (error) {
    throw new Error(`Failed to create news: ${error}`);
  }
};

export const getAllNews = async () => {
  try {
    const news = await client.news.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        slug: true,
        content: true,
        category: true,
        image: true,
        createdAt: true,
        updatedAt: true,
        status: true, // This should now work
      },
    });
    return news;
  } catch (error) {
    throw new Error(`Failed to fetch news: ${error}`);
  }
};
