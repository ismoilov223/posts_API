import express from "express";
import { getLimitPosts, getPagePosts, getPosts, getSerchPosts, getSortPosts, postPosts } from "../controller/posts.controller";

const postsRouter = express.Router()

postsRouter.get("/", getPosts)
postsRouter.get("/page/:page", getPagePosts)
postsRouter.get("/limit/:limit", getLimitPosts)
postsRouter.get("/sort/:sort", getSortPosts)
postsRouter.get("/search/:search", getSerchPosts)
postsRouter.post("/", postPosts)

export default postsRouter