import "dotenv/config";

import fs from "fs";
import pdf from "pdf-parse";

import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { MistralAIEmbeddings } from "@langchain/mistralai";

import { Pinecone } from "@pinecone-database/pinecone";

// ===============================
// 1. LOAD PDF
// ===============================

const dataBuffer = fs.readFileSync("./story.pdf");

const data = await pdf(dataBuffer);

console.log("PDF loaded");

// ===============================
// 2. SPLIT TEXT
// ===============================

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 500,
  chunkOverlap: 50,
});

const texts = await splitter.splitText(data.text);

console.log(`Created ${texts.length} chunks`);

// ===============================
// 3. CREATE EMBEDDINGS
// ===============================

const embeddings = new MistralAIEmbeddings({
  model: "mistral-embed",
});

const vectors = await embeddings.embedDocuments(texts);

console.log("Embeddings generated");

console.log("Vector dimension:", vectors[0].length);

// ===============================
// 4. CONNECT PINECONE
// ===============================

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});

const index = pc.index("demo");

// ===============================
// 5. PREPARE RECORDS
// ===============================

const records = texts.map((text, i) => ({
  id: `story-chunk-${i}`,

  values: vectors[i],

  metadata: {
    source: "story.pdf",
    chunkIndex: i,
    text,
  },
}));

// ===============================
// 6. UPSERT
// ===============================

const result = await index.upsert(records);

console.log("Uploaded to Pinecone");

console.log(result);
