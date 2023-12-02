import { NextResponse } from 'next/server'
import { PineconeClient } from '@pinecone-database/pinecone'
import { TextLoader } from 'langchain/document_loaders/fs/text'
import { DirectoryLoader } from 'langchain/document_loaders/fs/directory'
import { JSONLoader } from 'langchain/document_loaders/fs/json'
import { PDFLoader } from 'langchain/document_loaders/fs/pdf'
import { JSONLinesLoader } from 'langchain/document_loaders/fs/json'
import { CSVLoader } from 'langchain/document_loaders/fs/csv'
import {
    createPineconeIndex,
    updatePinecone
} from '../../../utils'
import { indexName } from '../../../config'

export async function POST() {
    const loader = new DirectoryLoader('./documents', {
        ".txt": (path) => new TextLoader(path),
        ".md": (path) => new TextLoader(path),
        ".pdf": (path) => new PDFLoader(path),
        '.json': (path) => new JSONLoader(path, '/texts'),
        '.jsonl': (path) => new JSONLinesLoader(path, '/html'),
        '.tsx': (path) => new TextLoader(path),
        '.ts': (path) => new TextLoader(path),
        '.csv': (path) => new CSVLoader(path, 'text'),

    })

    const docs = await loader.load()
    const vectorDimensions = 1536

    const client = new PineconeClient()
    await client.init({
        apiKey: process.env.PINECONE_API_KEY || '',
        environment: process.env.PINECONE_ENVIRONMENT || ''
    })

    try {
        await createPineconeIndex(client, indexName, vectorDimensions)
        await updatePinecone(client, indexName, docs)
    } catch (err) {
        console.log('error: ', err)
    }

    return NextResponse.json({
        data: 'successfully created index and loaded data into pinecone...'
    })
}