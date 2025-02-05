import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const categories = [
  { name: "Breaking News", description: "Latest and urgent news updates" },
  { name: "Politics", description: "Political news and updates" },
  { name: "Business & Economy", description: "Business and economic news" },
  { name: "Technology", description: "Technology and innovation news" },
  { name: "Health & Medicine", description: "Health and medical news" },
  { name: "Science", description: "Scientific discoveries and research" },
  { name: "Sports", description: "Sports news and updates" },
  { name: "Entertainment", description: "Entertainment industry news" },
  { name: "Lifestyle", description: "Lifestyle and culture news" },
  { name: "Education", description: "Education sector news" },
  { name: "Crime & Law", description: "Crime and legal news" },
  { name: "World News", description: "International news coverage" },
  {
    name: "Opinion & Editorials",
    description: "Opinion pieces and editorials",
  },
  { name: "Environment & Climate", description: "Environmental news" },
  { name: "Automobile", description: "Automotive industry news" },
  { name: "Real Estate", description: "Real estate market news" },
  { name: "Social Issues", description: "Social issues and society news" },
  { name: "Religion & Faith", description: "Religious and faith-based news" },
  { name: "Fact-Check", description: "Fact-checking and verification" },
];

async function main() {
  // First seed categories
  console.log("Seeding categories...");
  for (const category of categories) {
    await prisma.category.create({
      data: {
        name: category.name,
        slug: category.name.toLowerCase().replace(/[&\s]+/g, "-"),
        description: category.description,
      },
    });
  }
  console.log("✅ Categories seeded successfully!");

  // Then seed news
  console.log("Seeding news...");
  await prisma.news.createMany({
    data: [
      {
        title: "AI Revolution in 2025",
        slug: "ai-revolution-2025",
        content:
          "Artificial Intelligence is transforming industries at a rapid pace...",
        category: "Technology",
        image:
          "https://i.ibb.co.com/whM9dFh3/programming-background-with-person-working-with-codes-computer.jpg",
        createdAt: new Date("2025-02-01T10:00:00.000Z"),
        updatedAt: new Date("2025-02-01T12:00:00.000Z"),
        status: "PUBLISHED",
      },
      {
        title: "Top Programming Trends in 2025",
        slug: "top-programming-trends-2025",
        content:
          "The programming industry is shifting towards AI-driven development...",
        category: "Programming",
        image:
          "https://i.ibb.co.com/whM9dFh3/programming-background-with-person-working-with-codes-computer.jpg",
        createdAt: new Date("2025-01-30T14:30:00.000Z"),
        updatedAt: new Date("2025-01-30T15:00:00.000Z"),
        status: "PRIVATE",
      },
      {
        title: "Future of Web Development",
        slug: "future-of-web-development",
        content:
          "Web development is evolving with Next.js and AI-powered design tools...",
        category: "Web Development",
        image:
          "https://i.ibb.co.com/KxFM5pxR/programming-background-with-person-working-with-codes-computer.jpg",
        createdAt: "2025-01-29T08:45:00.000Z",
        updatedAt: "2025-01-29T10:15:00.000Z",
        status: "PUBLISHED",
      },
      {
        title: "The Role of Cybersecurity in AI",
        slug: "role-of-cybersecurity-in-ai",
        content:
          "AI is creating new security challenges, making cybersecurity crucial...",
        category: "Cybersecurity",
        image: "https://i.ibb.co.com/9VCbZsv/salmon-518032-1280-3.jpg",
        createdAt: "2025-01-28T11:20:00.000Z",
        updatedAt: "2025-01-28T13:30:00.000Z",
        status: "PRIVATE",
      },
      {
        title: "JavaScript's Evolution in 2025",
        slug: "javascript-evolution-2025",
        content:
          "New JavaScript features like pattern matching are changing the game...",
        category: "Programming",
        image: "https://i.ibb.co.com/FNyXJrj/11-Screenshot-3.png",
        createdAt: "2025-01-27T09:00:00.000Z",
        updatedAt: "2025-01-27T11:00:00.000Z",
        status: "PUBLISHED",
      },
      {
        title: "The Rise of Remote Work",
        slug: "rise-of-remote-work",
        content:
          "Remote work continues to grow with better collaboration tools...",
        category: "Business",
        image:
          "https://i.ibb.co.com/whM9dFh3/programming-background-with-person-working-with-codes-computer.jpg",
        createdAt: "2025-01-26T13:45:00.000Z",
        updatedAt: "2025-01-26T15:20:00.000Z",
        status: "PRIVATE",
      },
      {
        title: "Next.js 15: What's New?",
        slug: "nextjs-15-new-features",
        content:
          "Next.js 15 introduces faster SSR and improved server components...",
        category: "Web Development",
        image:
          "https://i.ibb.co.com/KxFM5pxR/programming-background-with-person-working-with-codes-computer.jpg",
        createdAt: "2025-01-25T12:10:00.000Z",
        updatedAt: "2025-01-25T14:00:00.000Z",
        status: "PUBLISHED",
      },
      {
        title: "Cloud Computing in 2025",
        slug: "cloud-computing-2025",
        content: "Cloud providers are innovating with AI-powered automation...",
        category: "Technology",
        image: "https://i.ibb.co.com/9VCbZsv/salmon-518032-1280-3.jpg",
        createdAt: "2025-01-24T10:30:00.000Z",
        updatedAt: "2025-01-24T11:50:00.000Z",
        status: "PRIVATE",
      },
      {
        title: "The Impact of Blockchain on Finance",
        slug: "blockchain-impact-finance",
        content:
          "Blockchain is revolutionizing how financial transactions work...",
        category: "Finance",
        image: "https://i.ibb.co.com/FNyXJrj/11-Screenshot-3.png",
        createdAt: "2025-01-23T08:00:00.000Z",
        updatedAt: "2025-01-23T09:30:00.000Z",
        status: "PUBLISHED",
      },
      {
        title: "5G Expansion Worldwide",
        slug: "5g-expansion-worldwide",
        content: "5G networks are being deployed at a record pace in 2025...",
        category: "Technology",
        image:
          "https://i.ibb.co.com/whM9dFh3/programming-background-with-person-working-with-codes-computer.jpg",
        createdAt: "2025-01-22T07:30:00.000Z",
        updatedAt: "2025-01-22T09:00:00.000Z",
        status: "PRIVATE",
      },
      {
        title: "The Future of Electric Vehicles",
        slug: "future-of-electric-vehicles",
        content:
          "EV technology is improving with better batteries and charging...",
        category: "Automobile",
        image:
          "https://i.ibb.co.com/KxFM5pxR/programming-background-with-person-working-with-codes-computer.jpg",
        createdAt: "2025-01-21T06:40:00.000Z",
        updatedAt: "2025-01-21T08:10:00.000Z",
        status: "PUBLISHED",
      },
      {
        title: "Quantum Computing Breakthrough",
        slug: "quantum-computing-breakthrough",
        content:
          "Scientists have achieved a new milestone in quantum computing...",
        category: "Science",
        image: "https://i.ibb.co.com/9VCbZsv/salmon-518032-1280-3.jpg",
        createdAt: "2025-01-20T05:30:00.000Z",
        updatedAt: "2025-01-20T07:00:00.000Z",
        status: "PRIVATE",
      },
    ],
  });
  console.log("✅ News seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
