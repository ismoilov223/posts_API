import mongoose, { Schema } from "mongoose";

export interface IPosts {
    title: string,
    body: string
}

const postsSchema = new Schema<IPosts>({
    title: {
        type: String,
    },
    body: String
},
    {
        timestamps: true,
    },
)
const poststModel = mongoose.model<IPosts>(
    "posts",
    postsSchema
)
export default poststModel