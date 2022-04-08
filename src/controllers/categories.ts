import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Category {
  id: Number;
  title: String;
  image: String;
}

// getting all posts
export const getCategories = async (req: Request, res: Response, next: NextFunction) => {
    let result = {
        data: [
          {
            id: 1,
            title: 'RESTAURANTES',
            image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
          },
          {
            id: 2,
            title: 'BARES',
            image: 'https://images.unsplash.com/photo-1525268323446-0505b6fe7778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2500&q=80',
          },
          {
            id: 3,
            title: 'PUBS',
            image: 'https://images.unsplash.com/photo-1593887937265-2a09787dcc19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
          },
          {
            id: 4,
            title: 'LOUNGE',
            image: 'https://placeimg.com/640/480/any',
          },
        ] as Category[]
    }
    let categories: Category[] = result.data;
    return res.status(200).json({
        message: categories
    });
};