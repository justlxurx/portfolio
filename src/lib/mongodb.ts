const { MongoClient, ServerApiVersion } = require('mongodb')

const uri = process.env.MONGODB_URI

const clientPromise = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

export default clientPromise
