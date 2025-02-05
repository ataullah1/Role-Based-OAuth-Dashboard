"use server";

import client from "@/prisma";

export const getAllCategories = async () => {
  try {
    const categories = await client.category.findMany({
      orderBy: { createdAt: "desc" },
    });
    return categories;
  } catch (error) {
    throw new Error(`Failed to fetch categories: ${error}`);
  }
};

export const getEnabledCategories = async () => {
  try {
    const categories = await client.category.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { createdAt: "desc" },
    });
    return categories;
  } catch (error) {
    throw new Error(`Failed to fetch enabled categories: ${error}`);
  }
};

export const updateCategory = async (id: string, data: any) => {
  try {
    const category = await client.category.update({
      where: { id },
      data,
    });
    return category;
  } catch (error) {
    throw new Error(`Failed to update category: ${error}`);
  }
};

export const deleteCategory = async (id: string) => {
  try {
    await client.category.delete({
      where: { id },
    });
    return true;
  } catch (error) {
    throw new Error(`Failed to delete category: ${error}`);
  }
};

export const addCategory = async ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  try {
    const slug = name.toLowerCase().replace(/[&\s]+/g, "-");
    const category = await client.category.create({
      data: {
        name,
        slug,
        description,
      },
    });
    return category;
  } catch (error) {
    throw new Error(`Failed to create category: ${error}`);
  }
};
