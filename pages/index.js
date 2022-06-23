import Head from "next/head";
import FaqCard from "../components/FaqCard";
import { useState } from "react";
import { getAllQuestions, markdownToHtml } from "./api/questions";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
export default function Home({ questions }) {
  const categories = [];
  questions.map((question) => {
    if (!categories.includes(question.category)) {
      categories.push(question.category);
    }
  });
  const [activeIndex, setActiveIndex] = useState(categories[0] + 0);
  console.log(categories);
  return (
    <div>
      <Head>
        <title>Contentrain FAQ Template</title>
        <meta
          name="description"
          content="Contentrain Frequently asked questions template with NextJS and TailwindCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero className="mt-32 mb-12 max-w-3xl mx-auto" />
        <div>
          {categories.map((category) => (
            <div
              key={category}
              className="flex max-w-3xl mx-auto flex-col justify-center items-center mt-12"
            >
             <div className="w-full text-left">
             <h1 className="font-semibold text-xl mb-4">{category}</h1>
             </div>
              {questions
                .filter((filteredQuestion) => filteredQuestion.category === category)
                .map((question, index) => (
                  <div className="w-full mb-8" key={index}>
                    <FaqCard
                      title={question.title}
                      index={category + index}
                      activeIndex={activeIndex}
                      setActiveIndex={setActiveIndex}
                      content={question.content}
                      slug={question.slug}
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>
        <Banner />
      </main>
    </div>
  );
}
export async function getStaticProps() {
  const questions = await getAllQuestions([
    "tags",
    "createdAt",
    "slug",
    "publish",
    "title",
    "content",
    "category",
  ]);
  for await (const question of questions) {
    question.content = (await markdownToHtml(question.content)) || "";
  }
  return {
    props: { questions },
  };
}

