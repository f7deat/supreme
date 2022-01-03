declare namespace API {
  type CategoryListItem = {
    id: number;
    name?: string;
  };
  type PostListItem = {
    id: number;
    url?: string;
    modifiedDate: Date;
    view: number;
  };
  type UserListItem = {
    id: string;
    email: string;
  };
}
