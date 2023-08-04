import { Request, Response } from "express";
import restaurantModel from "../models/posts.model";
import poststModel from "../models/posts.model";

export const getPosts = async (req: Request, res: Response) => {

    try {
        const posts = await poststModel.find({})
        res.status(200).send(posts)
    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}
export const getPagePosts = async (req: Request, res: Response) => {
    var perPage = 10, page = Math.max(0, req.params.page as any)
    try {
        const posts = await poststModel.find({}).limit(perPage).skip(perPage * page)
        res.status(200).send(posts)
    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}

export const getLimitPosts = async (req: Request, res: Response) => {
    const pageOptions = {
        page: req.params.page || 10,
        limit: req.params.limit || 10
    }
    try {
        const posts = await poststModel.find({}).limit(pageOptions.limit as any)
        res.send(posts)
    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}
export const getSortPosts = async (req: Request, res: Response) => {
    let sort_index: Number = 0;
    let sort_type: String = req.params.sort;
    if (sort_type == "ASC") {
        sort_index = 1;
    } else if (sort_type == "DESC") {
        sort_index = -1;
    }

    try {
        const posts = await poststModel.find({}).sort({ title: sort_index, body: sort_index })
        res.send(posts)
    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}
export const getSerchPosts = async (req: Request, res: Response) => {
    const serch = req.params.search
    try {
        const posts = await poststModel.find({ $or: [{ title: { $regex: serch, $options: 'si' } }, { body: { $regex: serch, $options: 'si' } }] })
        res.send(posts)
    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}
export const postPosts = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const posts = await poststModel.create(data)
        res.json(posts)
    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}
