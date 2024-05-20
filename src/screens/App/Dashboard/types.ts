export type PostData = Post[];

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PhotosData = Photo[];

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export interface NewPostData {
  data: PostNew[];
  total: number;
  page: number;
  limit: number;
}

export interface PostNew {
  id: string;
  image: string;
  likes: number;
  tags: string[];
  text: string;
  publishDate: string;
  owner: Owner;
}

export interface Owner {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}
