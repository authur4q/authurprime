import mongoose from "mongoose"

export const connectMongoDb = async () => {
    try {
          await mongoose.connect(process.env.MONGO_DB as string)
          console.log("connection successful")
    } catch (error) {
        console.log("connection unsuccessful",error)
    }

}