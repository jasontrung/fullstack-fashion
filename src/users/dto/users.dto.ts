export class UserDto {
  name: string;
  email: string;
  phone: string;
}

export class GetAllUsersQueries {
  page: number;
  limit: number;
  offset: number;
  search: string;
}
