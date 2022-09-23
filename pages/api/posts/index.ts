// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Pageable from "../../../models/Pageable";
import Post from "../../../models/Post";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Pageable<Post>>
) {
  const post = new Post();
  post.id = 1;
  post.title = "This is a post";
  post.description = "My post description is amazing!";
  post.image = "https://picsum.photos/400";

  const secondPost = new Post();
  secondPost.id = 2;
  secondPost.title = "This is another post";
  secondPost.description = "My second post description is amazing!";
  secondPost.image = "https://picsum.photos/400";

  const thirdPost = new Post();
  thirdPost.id = 3;
  thirdPost.title = "This is another and another post";
  thirdPost.description = "My third post description is amazing!";
  thirdPost.image = "https://picsum.photos/400";

  res.status(200).json(mockPage([post, secondPost, thirdPost]));
}

function mockPage<T>(content: Array<T>): Pageable<T> {
  return {
    content,
    pageable: {
      sort: {
        empty: false,
        sorted: false,
        unsorted: false,
      },
      offset: 0,
      pageNumber: 0,
      pageSize: 10,
      paged: true,
      unpaged: false,
    },
    totalPages: 1,
    totalElements: 8,
    last: true,
    size: 8,
    number: 0,
    sort: {
      empty: false,
      sorted: false,
      unsorted: true,
    },
    numberOfElements: 8,
    first: false,
    empty: true,
  };
}
