import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const questionsDirectory = join(process.cwd(), "_questions");

export function getQuestionsSlug() {
  return fs.readdirSync(questionsDirectory);
}

export function  getQuestionBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(questionsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  let { data, content } = matter(fileContents);
  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;

    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllQuestions(fields = []) {
  const slugs = getQuestionsSlug();
  const questions = slugs
    .map((slug) => getQuestionBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.category > post2.category ? -1 : 1));
    console.log(questions, 'sorted')
  return questions;
}

export async function markdownToHtml(markdown) {
  const res = await remark().use(html).process(markdown);
  return res.toString();
}
