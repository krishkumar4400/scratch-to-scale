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

// console.log(data);

// chunking
const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 500,
  chunkOverlap: 0,
});

const texts = await splitter.splitText(data.text);
// console.log(texts);
// console.log(texts.length);

// embedding
import { MistralAIEmbeddings } from "@langchain/mistralai";

const embeddings = new MistralAIEmbeddings({
  model: "mistral-embed",
});

const docs = await Promise.all(
  texts.map(async (text) => {
    const embedding = await embeddings.embedQuery(text);
    return { pageContent: text, metadata: {}, embedding };
  })
);
console.log(docs);

// store embeddings in vector db
import { PineconeStore } from "@langchain/pinecone";
import { Pinecone as PineconeClient } from "@pinecone-database/pinecone";

const pinecone = new PineconeClient();
const vectorStore = new PineconeStore(docs, {
  pineconeIndex,
  maxConcurrency: 5,
});
