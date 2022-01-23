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
  type RoleListItem = {
    id: string;
    name: string;
    normalizedName: string;
    concurrencyStamp: string;
  };
  type FileListItem = {
    extension: string;
    id: string;
    name: string;
    size: number;
    uploadedDate: Date;
  };
}
