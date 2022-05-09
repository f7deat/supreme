declare namespace API {
  type CategoryListItem = {
    id: number;
    name?: string;
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
    extension: string;
    id: string;
    name: string;
    size: number;
    uploadedDate: Date;
  };
  type FileRecentParams = {
    current?: number;
    pageSize?: number;
    name: string;
  };
  type MenuListItem = {
    id: number;
    name: string;
    url: string;
  };
  type BillingListItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
  };
}
