// import {PDFLoader} from "@langchain/community/document_loaders/fs/pdf";

// const loader = new PDFLoader("./story.pdf");

// const docs = await loader.load();

// console.log(docs);

import "dotenv/config";
import pdf from "pdf-parse";
import fs from "fs";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

// pdf load
const dataBuffer = fs.readFileSync("./story.pdf");

const data = await pdf(dataBuffer);

// chunking
const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 500,
  chunkOverlap: 0,
});

const texts = await splitter.splitText(data.text);

// embedding
import { MistralAIEmbeddings } from "@langchain/mistralai";

const embeddings = new MistralAIEmbeddings({
  model: "mistral-embed",
});

const docs = await Promise.all(
  texts.map(async (text) => {
    const embedding = await embeddings.embedQuery(text);
    return { pageContent: text, embedding };
  }),
);

// store embeddings in vector db
import { Pinecone } from "@pinecone-database/pinecone";

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});

const index = pc.index("demo");

// store in db
const result = await index.upsert({
  records: docs.map((doc, i) => ({
    id: `doc-${i}`,
    values: doc.embedding,
    metadata: doc.metadata,
  })),
});
console.log(result);
