declare namespace API {
  type CategoryListItem = {
    id: number;
    name: string;
    thumbnail: string;
    type: number;
  };
  type PostListItem = {
    id: number;
    title: string;
    url?: string;
    modifiedDate: Date;
    view: number;
  };
  type UserListItem = {
    id: string;
    email: string;
  };
  type RoleListItem = {
    id: string;
    name: string;
    normalizedName: string;
    concurrencyStamp: string;
  };
  type FileListItem = {
    id: string;
    name: string;
    size: number;
    type: string;
    uploadedDate: Date;
    url: string;
  };
  type FileRecentParams = {
    current?: number;
    pageSize?: number;
    name: string;
  };
  type MenuListItem = {
    id: string;
    name: string;
    icon: string;
    url: string;
    modifiedDate: Date;
  };
  type BillingListItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
  };
  type ProductListItem = {
    id: number;
    title: string;
    thumbnail: string;
    createdDate: Date;
    url: string;
    modifiedDate: Date;
  };
  type User = {
    id: string;
    name: string;
    avatar: string;
    roles: string[];
    email: string;
    emailConfirmed: boolean;
    userName: string;
    phoneNumber: string;
  };
  type Post = PostListItem & {
    createdDate: Date;
    thumbnail: string;
    tags: string;
    description: string;
    content: string;
    status: string;
  };
  type PostBody = {
    post: Post;
    categories: Category;
  };
}
