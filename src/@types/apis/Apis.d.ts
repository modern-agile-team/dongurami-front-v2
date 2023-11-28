declare global {
  namespace Swagger {
    export interface UserResponseDto {
  /**
   * 고유 ID
   * @min 1
   */
  id: number;
  /**
   * 생성일자
   * @format date-time
   */
  createdAt: string;
  /**
   * 수정일자
   * @format date-time
   */
  updatedAt: string;
  /** 로그인 타입 */
  loginType: UserResponseDtoLoginTypeEnum;
  /**
   * 이메일
   * @format email
   */
  email: string;
  /**
   * 닉네임
   * @minLength 2
   * @maxLength 255
   */
  nickname: string;
}

export interface UserDetailResponseDto {
  user: UserResponseDto;
}

export interface SignInDtoRequestBody {
  /** 이메일 */
  email: string;
  /** 패스워드 */
  password: string;
}

export interface UsersPaginationResponseDto {
  /**
   * 총 페이지 수
   * @format integer
   * @min 1
   */
  totalCount: number;
  /**
   * 한 요청에 대한 data 수
   * @format integer
   * @min 1
   */
  pageSize: number;
  /**
   * 현재 페이지 번호
   * @format integer
   * @min 1
   */
  currentPage: number;
  /**
   * 다음 페이지 번호, 다음 페이지가 없다면 null 반환
   * @format integer
   * @min 2
   */
  nextPage: number | null;
  /**
   * 다음 페이지 존재 여부
   * @min 1
   */
  hasNext: boolean;
  /**
   * 마지막 페이지 번호
   * @format integer
   * @min 1
   */
  lastPage: number;
  users: UserResponseDto[];
}

export interface CreateUserRequestBodyDto {
  /** 로그인 타입 */
  loginType: CreateUserRequestBodyDtoLoginTypeEnum;
  /**
   * user password
   * @example "password"
   */
  password: string;
  /**
   * user email
   * @format email
   * @example "example@example.com"
   */
  email: string;
  /**
   * user 닉네임
   * @minLength 2
   * @maxLength 255
   * @example "홍길동"
   */
  nickname: string;
}

export interface PatchUpdateUserRequestBodyDto {
  /**
   * user email
   * @format email
   * @example "example@example.com"
   */
  email?: string;
  /**
   * users 이름
   * @minLength 2
   * @maxLength 255
   * @example "홍길동"
   */
  nickname?: string;
}

export interface PutUpdateUserRequestBodyDto {
  /**
   * user email
   * @format email
   * @example "example@example.com"
   */
  email: string;
  /**
   * user 닉네임
   * @minLength 2
   * @maxLength 255
   * @example "홍길동"
   */
  nickname: string;
}

export interface UserDeleteResponseDto {
  /**
   * 삭제된 리소스 개수
   * @format integer
   */
  count: number;
}

export interface PostResponseDto {
  /**
   * 고유 ID
   * @min 1
   */
  id: number;
  /**
   * 생성일자
   * @format date-time
   */
  createdAt: string;
  /**
   * 수정일자
   * @format date-time
   */
  updatedAt: string;
  /**
   * user 고유 ID
   * @min 1
   */
  userId: number;
  /**
   * title
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /** description */
  description: string;
  /**
   * 조회수
   * @format integer
   */
  hit: number;
}

export interface PostsPaginationResponseDto {
  /**
   * 총 페이지 수
   * @format integer
   * @min 1
   */
  totalCount: number;
  /**
   * 한 요청에 대한 data 수
   * @format integer
   * @min 1
   */
  pageSize: number;
  /**
   * 현재 페이지 번호
   * @format integer
   * @min 1
   */
  currentPage: number;
  /**
   * 다음 페이지 번호, 다음 페이지가 없다면 null 반환
   * @format integer
   * @min 2
   */
  nextPage: number | null;
  /**
   * 다음 페이지 존재 여부
   * @min 1
   */
  hasNext: boolean;
  /**
   * 마지막 페이지 번호
   * @format integer
   * @min 1
   */
  lastPage: number;
  posts: PostResponseDto[];
}

export interface PostDetailResponseDto {
  post: PostResponseDto;
}

export interface CreatePostRequestBodyDto {
  /**
   * title
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /** description */
  description: string;
}

export interface PutUpdatePostBodyDto {
  /**
   * title
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /** description */
  description: string;
}

export interface PatchUpdatePostBodyDto {
  /**
   * title
   * @minLength 1
   * @maxLength 255
   */
  title?: string;
  /** description */
  description?: string;
}

export interface PostDeleteResponseDto {
  /**
   * 삭제된 리소스 개수
   * @format integer
   */
  count: number;
}

export interface PostCommentResponseDto {
  /**
   * 고유 ID
   * @min 1
   */
  id: number;
  /**
   * 생성일자
   * @format date-time
   */
  createdAt: string;
  /**
   * 수정일자
   * @format date-time
   */
  updatedAt: string;
  /**
   * post 고유 ID
   * @min 1
   */
  postId: number;
  /**
   * user 고유 ID
   * @min 1
   */
  userId: number;
  /** 내용 */
  description: string;
}

export interface PostCommentsPaginationResponseDto {
  /**
   * 총 페이지 수
   * @format integer
   * @min 1
   */
  totalCount: number;
  /**
   * 한 요청에 대한 data 수
   * @format integer
   * @min 1
   */
  pageSize: number;
  /**
   * 현재 페이지 번호
   * @format integer
   * @min 1
   */
  currentPage: number;
  /**
   * 다음 페이지 번호, 다음 페이지가 없다면 null 반환
   * @format integer
   * @min 2
   */
  nextPage: number | null;
  /**
   * 다음 페이지 존재 여부
   * @min 1
   */
  hasNext: boolean;
  /**
   * 마지막 페이지 번호
   * @format integer
   * @min 1
   */
  lastPage: number;
  postComments: PostCommentResponseDto[];
}

export interface PostCommentDetailResponseDto {
  postComment: PostCommentResponseDto;
}

export interface CreatePostCommentRequestBodyDto {
  /** description */
  description: string;
}

export interface PutUpdatePostCommentRequestBodyDto {
  /** description */
  description: string;
}

export interface PatchUpdatePostCommentRequestBodyDto {
  /** description */
  description?: string;
}

export interface PostCommentDeleteResponseDto {
  /**
   * 삭제된 리소스 개수
   * @format integer
   */
  count: number;
}

/** 로그인 타입 */
export type UserResponseDtoLoginTypeEnum = "EMAIL" | "KAKAO" | "NAVER" | "GOOGLE" | "APPLE" | "GITHUB";

/** 로그인 타입 */
export type CreateUserRequestBodyDtoLoginTypeEnum = "EMAIL" | "KAKAO" | "NAVER" | "GOOGLE" | "APPLE" | "GITHUB";

/**
 * error code
 * @example "CODE004"
 */
export type AuthControllerGetProfileErrorCodeEnum = "CODE004";

/**
 * error reason
 * @example "invalid token"
 */
export type AuthControllerGetProfileReasonEnum = "invalid token";

/**
 * error code
 * @example "CODE001"
 */
export type AuthControllerGetProfileErrorCodeEnum1 = "CODE001";

/**
 * error reason
 * @example "server error"
 */
export type AuthControllerGetProfileReasonEnum1 = "server error";

/**
 * error code
 * @example "CODE003"
 */
export type AuthControllerSignInErrorCodeEnum = "CODE003";

/**
 * error reason
 * @example "invalid request parameter"
 */
export type AuthControllerSignInReasonEnum = "invalid request parameter";

/**
 * error code
 * @example "CODE004"
 */
export type AuthControllerSignInErrorCodeEnum1 = "CODE004";

/**
 * error reason
 * @example "invalid token"
 */
export type AuthControllerSignInReasonEnum1 = "invalid token";

/**
 * error code
 * @example "CODE006"
 */
export type AuthControllerSignInErrorCodeEnum2 = "CODE006";

/**
 * error reason
 * @example "permission denied"
 */
export type AuthControllerSignInReasonEnum2 = "permission denied";

/**
 * error code
 * @example "CODE001"
 */
export type AuthControllerSignInErrorCodeEnum3 = "CODE001";

/**
 * error reason
 * @example "server error"
 */
export type AuthControllerSignInReasonEnum3 = "server error";

/**
 * error code
 * @example "CODE004"
 */
export type AuthControllerSignOutErrorCodeEnum = "CODE004";

/**
 * error reason
 * @example "invalid token"
 */
export type AuthControllerSignOutReasonEnum = "invalid token";

/**
 * error code
 * @example "CODE001"
 */
export type AuthControllerSignOutErrorCodeEnum1 = "CODE001";

/**
 * error reason
 * @example "server error"
 */
export type AuthControllerSignOutReasonEnum1 = "server error";

/**
 * error code
 * @example "CODE004"
 */
export type AuthControllerRefreshErrorCodeEnum = "CODE004";

/**
 * error reason
 * @example "invalid token"
 */
export type AuthControllerRefreshReasonEnum = "invalid token";

/**
 * error code
 * @example "CODE001"
 */
export type AuthControllerRefreshErrorCodeEnum1 = "CODE001";

/**
 * error reason
 * @example "server error"
 */
export type AuthControllerRefreshReasonEnum1 = "server error";

/**
 * error code
 * @example "CODE003"
 */
export type AuthControllerSetAccessTokenForDevelopErrorCodeEnum = "CODE003";

/**
 * error reason
 * @example "invalid request parameter"
 */
export type AuthControllerSetAccessTokenForDevelopReasonEnum = "invalid request parameter";

/**
 * error code
 * @example "CODE001"
 */
export type AuthControllerSetAccessTokenForDevelopErrorCodeEnum1 = "CODE001";

/**
 * error reason
 * @example "server error"
 */
export type AuthControllerSetAccessTokenForDevelopReasonEnum1 = "server error";

/**
 * error code
 * @example "CODE003"
 */
export type UsersControllerFindAllAndCountErrorCodeEnum = "CODE003";

/**
 * error reason
 * @example "invalid request parameter"
 */
export type UsersControllerFindAllAndCountReasonEnum = "invalid request parameter";

/**
 * error code
 * @example "CODE001"
 */
export type UsersControllerFindAllAndCountErrorCodeEnum1 = "CODE001";

/**
 * error reason
 * @example "server error"
 */
export type UsersControllerFindAllAndCountReasonEnum1 = "server error";

export interface UsersControllerFindAllAndCountParams {
  /**
   * 페이지번호
   * @format integer
   */
  page?: number;
  /**
   * 페이지당 아이템 수
   * @format integer
   */
  pageSize?: number;
  /**
   * user 고유 Id
   * @format integer
   */
  id?: number;
  /** 로그인 타입 */
  loginType?: LoginTypeEnum;
  /**
   * 이메일
   * @format email
   */
  email?: string;
  /** nickname */
  nickname?: string;
  /**
   * 정렬 필드<br>공백을 제거한 csv 형태로 보내야합니다.<br>- 가 붙으면 내림차순 - 가 붙지 않으면 오름차순<br>허용된 filed: id loginType email nickname
   * @default "id"
   * @example "-id,updatedAt"
   */
  orderBy?: string;
}

/** 로그인 타입 */
export type LoginTypeEnum = "EMAIL" | "KAKAO" | "NAVER" | "GOOGLE" | "APPLE" | "GITHUB";

/** 로그인 타입 */
export type UsersControllerFindAllAndCountParams1LoginTypeEnum =
  | "EMAIL"
  | "KAKAO"
  | "NAVER"
  | "GOOGLE"
  | "APPLE"
  | "GITHUB";

/**
 * error code
 * @example "CODE003"
 */
export type UsersControllerCreateErrorCodeEnum = "CODE003";

/**
 * error reason
 * @example "invalid request parameter"
 */
export type UsersControllerCreateReasonEnum = "invalid request parameter";

/**
 * error code
 * @example "CODE001"
 */
export type UsersControllerCreateErrorCodeEnum1 = "CODE001";

/**
 * error reason
 * @example "server error"
 */
export type UsersControllerCreateReasonEnum1 = "server error";

/**
 * error code
 * @example "CODE003"
 */
export type UsersControllerFindOneErrorCodeEnum = "CODE003";

/**
 * error reason
 * @example "invalid request parameter"
 */
export type UsersControllerFindOneReasonEnum = "invalid request parameter";

/**
 * error code
 * @example "CODE005"
 */
export type UsersControllerFindOneErrorCodeEnum1 = "CODE005";

/**
 * error reason
 * @example "resource not found"
 */
export type UsersControllerFindOneReasonEnum1 = "resource not found";

/**
 * error code
 * @example "CODE001"
 */
export type UsersControllerFindOneErrorCodeEnum2 = "CODE001";

/**
 * error reason
 * @example "server error"
 */
export type UsersControllerFindOneReasonEnum2 = "server error";

/**
 * error code
 * @example "CODE003"
 */
export type UsersControllerPatchUpdateErrorCodeEnum = "CODE003";

/**
 * error reason
 * @example "invalid request parameter"
 */
export type UsersControllerPatchUpdateReasonEnum = "invalid request parameter";

/**
 * error code
 * @example "CODE004"
 */
export type UsersControllerPatchUpdateErrorCodeEnum1 = "CODE004";

/**
 * error reason
 * @example "invalid token"
 */
export type UsersControllerPatchUpdateReasonEnum1 = "invalid token";

/**
 * error code
 * @example "CODE006"
 */
export type UsersControllerPatchUpdateErrorCodeEnum2 = "CODE006";

/**
 * error reason
 * @example "permission denied"
 */
export type UsersControllerPatchUpdateReasonEnum2 = "permission denied";

/**
 * error code
 * @example "CODE005"
 */
export type UsersControllerPatchUpdateErrorCodeEnum3 = "CODE005";

/**
 * error reason
 * @example "resource not found"
 */
export type UsersControllerPatchUpdateReasonEnum3 = "resource not found";

/**
 * error code
 * @example "CODE001"
 */
export type UsersControllerPatchUpdateErrorCodeEnum4 = "CODE001";

/**
 * error reason
 * @example "server error"
 */
export type UsersControllerPatchUpdateReasonEnum4 = "server error";

/**
 * error code
 * @example "CODE003"
 */
export type UsersControllerPutUpdateErrorCodeEnum = "CODE003";

/**
 * error reason
 * @example "invalid request parameter"
 */
export type UsersControllerPutUpdateReasonEnum = "invalid request parameter";

/**
 * error code
 * @example "CODE004"
 */
export type UsersControllerPutUpdateErrorCodeEnum1 = "CODE004";

/**
 * error reason
 * @example "invalid token"
 */
export type UsersControllerPutUpdateReasonEnum1 = "invalid token";

/**
 * error code
 * @example "CODE006"
 */
export type UsersControllerPutUpdateErrorCodeEnum2 = "CODE006";

/**
 * error reason
 * @example "permission denied"
 */
export type UsersControllerPutUpdateReasonEnum2 = "permission denied";

/**
 * error code
 * @example "CODE005"
 */
export type UsersControllerPutUpdateErrorCodeEnum3 = "CODE005";

/**
 * error reason
 * @example "resource not found"
 */
export type UsersControllerPutUpdateReasonEnum3 = "resource not found";

/**
 * error code
 * @example "CODE001"
 */
export type UsersControllerPutUpdateErrorCodeEnum4 = "CODE001";

/**
 * error reason
 * @example "server error"
 */
export type UsersControllerPutUpdateReasonEnum4 = "server error";

/**
 * error code
 * @example "CODE003"
 */
export type UsersControllerRemoveErrorCodeEnum = "CODE003";

/**
 * error reason
 * @example "invalid request parameter"
 */
export type UsersControllerRemoveReasonEnum = "invalid request parameter";

/**
 * error code
 * @example "CODE004"
 */
export type UsersControllerRemoveErrorCodeEnum1 = "CODE004";

/**
 * error reason
 * @example "invalid token"
 */
export type UsersControllerRemoveReasonEnum1 = "invalid token";

/**
 * error code
 * @example "CODE006"
 */
export type UsersControllerRemoveErrorCodeEnum2 = "CODE006";

/**
 * error reason
 * @example "permission denied"
 */
export type UsersControllerRemoveReasonEnum2 = "permission denied";

/**
 * error code
 * @example "CODE005"
 */
export type UsersControllerRemoveErrorCodeEnum3 = "CODE005";

/**
 * error reason
 * @example "resource not found"
 */
export type UsersControllerRemoveReasonEnum3 = "resource not found";

/**
 * error code
 * @example "CODE001"
 */
export type UsersControllerRemoveErrorCodeEnum4 = "CODE001";

/**
 * error reason
 * @example "server error"
 */
export type UsersControllerRemoveReasonEnum4 = "server error";

/**
 * error code
 * @example "CODE003"
 */
export type PostsControllerFindAllAndCountErrorCodeEnum = "CODE003";

/**
 * error reason
 * @example "invalid request parameter"
 */
export type PostsControllerFindAllAndCountReasonEnum = "invalid request parameter";

/**
 * error code
 * @example "CODE001"
 */
export type PostsControllerFindAllAndCountErrorCodeEnum1 = "CODE001";

/**
 * error reason
 * @example "server error"
 */
export type PostsControllerFindAllAndCountReasonEnum1 = "server error";

export interface PostsControllerFindAllAndCountParams {
  /**
   * 페이지번호
   * @format integer
   */
  page?: number;
  /**
   * 페이지당 아이템 수
   * @format integer
   */
  pageSize?: number;
  /**
   * posts 고유 Id
   * @format integer
   */
  id?: number;
  /**
   * 게시한 유저 고유 id
   * @format integer
   */
  userId?: number;
  /**
   * title
   * @maxLength 255
   */
  title?: string;
  /** description */
  description?: string;
  /**
   * 정렬 필드<br>공백을 제거한 csv 형태로 보내야합니다.<br>- 가 붙으면 내림차순 - 가 붙지 않으면 오름차순<br>허용된 filed: id title userId createdAt updatedAt
   * @default "id"
   * @example "-id,updatedAt"
   */
  orderBy?: string;
}

/**
 * error code
 * @example "CODE003"
 */
export type PostsControllerCreateErrorCodeEnum = "CODE003";

/**
 * error reason
 * @example "invalid request parameter"
 */
export type PostsControllerCreateReasonEnum = "invalid request parameter";

/**
 * error code
 * @example "CODE004"
 */
export type PostsControllerCreateErrorCodeEnum1 = "CODE004";

/**
 * error reason
 * @example "invalid token"
 */
export type PostsControllerCreateReasonEnum1 = "invalid token";

/**
 * error code
 * @example "CODE001"
 */
export type PostsControllerCreateErrorCodeEnum2 = "CODE001";

/**
 * error reason
 * @example "server error"
 */
export type PostsControllerCreateReasonEnum2 = "server error";

/**
 * error code
 * @example "CODE003"
 */
export type PostsControllerFindOneErrorCodeEnum = "CODE003";

/**
 * error reason
 * @example "invalid request parameter"
 */
export type PostsControllerFindOneReasonEnum = "invalid request parameter";

/**
 * error code
 * @example "CODE005"
 */
export type PostsControllerFindOneErrorCodeEnum1 = "CODE005";

/**
 * error reason
 * @example "resource not found"
 */
export type PostsControllerFindOneReasonEnum1 = "resource not found";

/**
 * error code
 * @example "CODE001"
 */
export type PostsControllerFindOneErrorCodeEnum2 = "CODE001";

/**
 * error reason
 * @example "server error"
 */
export type PostsControllerFindOneReasonEnum2 = "server error";

/**
 * error code
 * @example "CODE003"
 */
export type PostsControllerPutUpdateErrorCodeEnum = "CODE003";

/**
 * error reason
 * @example "invalid request parameter"
 */
export type PostsControllerPutUpdateReasonEnum = "invalid request parameter";

/**
 * error code
 * @example "CODE004"
 */
export type PostsControllerPutUpdateErrorCodeEnum1 = "CODE004";

/**
 * error reason
 * @example "invalid token"
 */
export type PostsControllerPutUpdateReasonEnum1 = "invalid token";

/**
 * error code
 * @example "CODE006"
 */
export type PostsControllerPutUpdateErrorCodeEnum2 = "CODE006";

/**
 * error reason
 * @example "permission denied"
 */
export type PostsControllerPutUpdateReasonEnum2 = "permission denied";

/**
 * error code
 * @example "CODE005"
 */
export type PostsControllerPutUpdateErrorCodeEnum3 = "CODE005";

/**
 * error reason
 * @example "resource not found"
 */
export type PostsControllerPutUpdateReasonEnum3 = "resource not found";

/**
 * error code
 * @example "CODE001"
 */
export type PostsControllerPutUpdateErrorCodeEnum4 = "CODE001";

/**
 * error reason
 * @example "server error"
 */
export type PostsControllerPutUpdateReasonEnum4 = "server error";

/**
 * error code
 * @example "CODE003"
 */
export type PostsControllerPatchUpdateErrorCodeEnum = "CODE003";

/**
 * error reason
 * @example "invalid request parameter"
 */
export type PostsControllerPatchUpdateReasonEnum = "invalid request parameter";

/**
 * error code
 * @example "CODE004"
 */
export type PostsControllerPatchUpdateErrorCodeEnum1 = "CODE004";

/**
 * error reason
 * @example "invalid token"
 */
export type PostsControllerPatchUpdateReasonEnum1 = "invalid token";

/**
 * error code
 * @example "CODE006"
 */
export type PostsControllerPatchUpdateErrorCodeEnum2 = "CODE006";

/**
 * error reason
 * @example "permission denied"
 */
export type PostsControllerPatchUpdateReasonEnum2 = "permission denied";

/**
 * error code
 * @example "CODE005"
 */
export type PostsControllerPatchUpdateErrorCodeEnum3 = "CODE005";

/**
 * error reason
 * @example "resource not found"
 */
export type PostsControllerPatchUpdateReasonEnum3 = "resource not found";

/**
 * error code
 * @example "CODE001"
 */
export type PostsControllerPatchUpdateErrorCodeEnum4 = "CODE001";

/**
 * error reason
 * @example "server error"
 */
export type PostsControllerPatchUpdateReasonEnum4 = "server error";

/**
 * error code
 * @example "CODE003"
 */
export type PostsControllerRemoveErrorCodeEnum = "CODE003";

/**
 * error reason
 * @example "invalid request parameter"
 */
export type PostsControllerRemoveReasonEnum = "invalid request parameter";

/**
 * error code
 * @example "CODE004"
 */
export type PostsControllerRemoveErrorCodeEnum1 = "CODE004";

/**
 * error reason
 * @example "invalid token"
 */
export type PostsControllerRemoveReasonEnum1 = "invalid token";

/**
 * error code
 * @example "CODE006"
 */
export type PostsControllerRemoveErrorCodeEnum2 = "CODE006";

/**
 * error reason
 * @example "permission denied"
 */
export type PostsControllerRemoveReasonEnum2 = "permission denied";

/**
 * error code
 * @example "CODE005"
 */
export type PostsControllerRemoveErrorCodeEnum3 = "CODE005";

/**
 * error reason
 * @example "resource not found"
 */
export type PostsControllerRemoveReasonEnum3 = "resource not found";

/**
 * error code
 * @example "CODE001"
 */
export type PostsControllerRemoveErrorCodeEnum4 = "CODE001";

/**
 * error reason
 * @example "server error"
 */
export type PostsControllerRemoveReasonEnum4 = "server error";

/**
 * error code
 * @example "CODE003"
 */
export type PostsControllerIncreaseHitErrorCodeEnum = "CODE003";

/**
 * error reason
 * @example "invalid request parameter"
 */
export type PostsControllerIncreaseHitReasonEnum = "invalid request parameter";

/**
 * error code
 * @example "CODE005"
 */
export type PostsControllerIncreaseHitErrorCodeEnum1 = "CODE005";

/**
 * error reason
 * @example "resource not found"
 */
export type PostsControllerIncreaseHitReasonEnum1 = "resource not found";

/**
 * error code
 * @example "CODE001"
 */
export type PostsControllerIncreaseHitErrorCodeEnum2 = "CODE001";

/**
 * error reason
 * @example "server error"
 */
export type PostsControllerIncreaseHitReasonEnum2 = "server error";

/**
 * error code
 * @example "CODE003"
 */
export type PostCommentsControllerFindAllAndCountErrorCodeEnum = "CODE003";

/**
 * error reason
 * @example "invalid request parameter"
 */
export type PostCommentsControllerFindAllAndCountReasonEnum = "invalid request parameter";

/**
 * error code
 * @example "CODE001"
 */
export type PostCommentsControllerFindAllAndCountErrorCodeEnum1 = "CODE001";

/**
 * error reason
 * @example "server error"
 */
export type PostCommentsControllerFindAllAndCountReasonEnum1 = "server error";

export interface PostCommentsControllerFindAllAndCountParams {
  /**
   * 페이지번호
   * @format integer
   */
  page?: number;
  /**
   * 페이지당 아이템 수
   * @format integer
   */
  pageSize?: number;
  /**
   * postComment 고유 Id
   * @format integer
   */
  id?: number;
  /**
   * 게시한 유저 고유 id
   * @format integer
   */
  userId?: number;
  /** description */
  description?: string;
  /**
   * 정렬 필드<br>공백을 제거한 csv 형태로 보내야합니다.<br>- 가 붙으면 내림차순 - 가 붙지 않으면 오름차순<br>허용된 filed: id description postId userId createdAt updatedAt
   * @default "id"
   * @example "-id,updatedAt"
   */
  orderBy?: string;
  postId: number;
}

/**
 * error code
 * @example "CODE003"
 */
export type PostCommentsControllerCreateErrorCodeEnum = "CODE003";

/**
 * error reason
 * @example "invalid request parameter"
 */
export type PostCommentsControllerCreateReasonEnum = "invalid request parameter";

/**
 * error code
 * @example "CODE004"
 */
export type PostCommentsControllerCreateErrorCodeEnum1 = "CODE004";

/**
 * error reason
 * @example "invalid token"
 */
export type PostCommentsControllerCreateReasonEnum1 = "invalid token";

/**
 * error code
 * @example "CODE001"
 */
export type PostCommentsControllerCreateErrorCodeEnum2 = "CODE001";

/**
 * error reason
 * @example "server error"
 */
export type PostCommentsControllerCreateReasonEnum2 = "server error";

/**
 * error code
 * @example "CODE003"
 */
export type PostCommentsControllerFindOneErrorCodeEnum = "CODE003";

/**
 * error reason
 * @example "invalid request parameter"
 */
export type PostCommentsControllerFindOneReasonEnum = "invalid request parameter";

/**
 * error code
 * @example "CODE005"
 */
export type PostCommentsControllerFindOneErrorCodeEnum1 = "CODE005";

/**
 * error reason
 * @example "resource not found"
 */
export type PostCommentsControllerFindOneReasonEnum1 = "resource not found";

/**
 * error code
 * @example "CODE001"
 */
export type PostCommentsControllerFindOneErrorCodeEnum2 = "CODE001";

/**
 * error reason
 * @example "server error"
 */
export type PostCommentsControllerFindOneReasonEnum2 = "server error";

/**
 * error code
 * @example "CODE003"
 */
export type PostCommentsControllerPutUpdateErrorCodeEnum = "CODE003";

/**
 * error reason
 * @example "invalid request parameter"
 */
export type PostCommentsControllerPutUpdateReasonEnum = "invalid request parameter";

/**
 * error code
 * @example "CODE004"
 */
export type PostCommentsControllerPutUpdateErrorCodeEnum1 = "CODE004";

/**
 * error reason
 * @example "invalid token"
 */
export type PostCommentsControllerPutUpdateReasonEnum1 = "invalid token";

/**
 * error code
 * @example "CODE006"
 */
export type PostCommentsControllerPutUpdateErrorCodeEnum2 = "CODE006";

/**
 * error reason
 * @example "permission denied"
 */
export type PostCommentsControllerPutUpdateReasonEnum2 = "permission denied";

/**
 * error code
 * @example "CODE005"
 */
export type PostCommentsControllerPutUpdateErrorCodeEnum3 = "CODE005";

/**
 * error reason
 * @example "resource not found"
 */
export type PostCommentsControllerPutUpdateReasonEnum3 = "resource not found";

/**
 * error code
 * @example "CODE001"
 */
export type PostCommentsControllerPutUpdateErrorCodeEnum4 = "CODE001";

/**
 * error reason
 * @example "server error"
 */
export type PostCommentsControllerPutUpdateReasonEnum4 = "server error";

/**
 * error code
 * @example "CODE003"
 */
export type PostCommentsControllerPatchUpdateErrorCodeEnum = "CODE003";

/**
 * error reason
 * @example "invalid request parameter"
 */
export type PostCommentsControllerPatchUpdateReasonEnum = "invalid request parameter";

/**
 * error code
 * @example "CODE004"
 */
export type PostCommentsControllerPatchUpdateErrorCodeEnum1 = "CODE004";

/**
 * error reason
 * @example "invalid token"
 */
export type PostCommentsControllerPatchUpdateReasonEnum1 = "invalid token";

/**
 * error code
 * @example "CODE006"
 */
export type PostCommentsControllerPatchUpdateErrorCodeEnum2 = "CODE006";

/**
 * error reason
 * @example "permission denied"
 */
export type PostCommentsControllerPatchUpdateReasonEnum2 = "permission denied";

/**
 * error code
 * @example "CODE005"
 */
export type PostCommentsControllerPatchUpdateErrorCodeEnum3 = "CODE005";

/**
 * error reason
 * @example "resource not found"
 */
export type PostCommentsControllerPatchUpdateReasonEnum3 = "resource not found";

/**
 * error code
 * @example "CODE001"
 */
export type PostCommentsControllerPatchUpdateErrorCodeEnum4 = "CODE001";

/**
 * error reason
 * @example "server error"
 */
export type PostCommentsControllerPatchUpdateReasonEnum4 = "server error";

/**
 * error code
 * @example "CODE003"
 */
export type PostCommentsControllerRemoveErrorCodeEnum = "CODE003";

/**
 * error reason
 * @example "invalid request parameter"
 */
export type PostCommentsControllerRemoveReasonEnum = "invalid request parameter";

/**
 * error code
 * @example "CODE004"
 */
export type PostCommentsControllerRemoveErrorCodeEnum1 = "CODE004";

/**
 * error reason
 * @example "invalid token"
 */
export type PostCommentsControllerRemoveReasonEnum1 = "invalid token";

/**
 * error code
 * @example "CODE006"
 */
export type PostCommentsControllerRemoveErrorCodeEnum2 = "CODE006";

/**
 * error reason
 * @example "permission denied"
 */
export type PostCommentsControllerRemoveReasonEnum2 = "permission denied";

/**
 * error code
 * @example "CODE005"
 */
export type PostCommentsControllerRemoveErrorCodeEnum3 = "CODE005";

/**
 * error reason
 * @example "resource not found"
 */
export type PostCommentsControllerRemoveReasonEnum3 = "resource not found";

/**
 * error code
 * @example "CODE001"
 */
export type PostCommentsControllerRemoveErrorCodeEnum4 = "CODE001";

/**
 * error reason
 * @example "server error"
 */
export type PostCommentsControllerRemoveReasonEnum4 = "server error";

export namespace Health {
  /**
   * No description
   * @tags health
   * @name HealthControllerCheck
   * @request GET:/health
   */
  export namespace HealthControllerCheck {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = {
      /** @example "ok" */
      status?: string;
      /** @example {"database":{"status":"up"}} */
      info?: Record<
        string,
        {
          status?: string;
          [key: string]: any;
        }
      >;
      /** @example {} */
      error?: Record<
        string,
        {
          status?: string;
          [key: string]: any;
        }
      >;
      /** @example {"database":{"status":"up"}} */
      details?: Record<
        string,
        {
          status?: string;
          [key: string]: any;
        }
      >;
    };
  }
}

export namespace Api {
  /**
   * No description
   * @tags auth
   * @name AuthControllerGetProfile
   * @summary 로그인한 유저 프로필
   * @request GET:/api/v1/auth/profile
   */
  export namespace AuthControllerGetProfile {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserDetailResponseDto;
  }
  /**
   * @description cookie 를 통해 session 을 제어합니다.
   * @tags auth
   * @name AuthControllerSignIn
   * @summary 로그인
   * @request POST:/api/v1/auth/sign-in
   */
  export namespace AuthControllerSignIn {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SignInDtoRequestBody;
    export type RequestHeaders = {};
    export type ResponseBody = UserDetailResponseDto;
  }
  /**
   * @description cookie 를 제거하여 session 을 제거합니다.
   * @tags auth
   * @name AuthControllerSignOut
   * @summary 로그아웃
   * @request POST:/api/v1/auth/sign-out
   */
  export namespace AuthControllerSignOut {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description cookie 내에 refresh token 을 이용하여 access token 을 갱신합니다.
   * @tags auth
   * @name AuthControllerRefresh
   * @summary refresh token 을 이용한 access token 재발급
   * @request POST:/api/v1/auth/refresh
   */
  export namespace AuthControllerRefresh {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description 상용 서버에서는 존재하지 않습니다. id 를 기준으로 cookie 에 token 을 추가합니다.
   * @tags auth
   * @name AuthControllerSetAccessTokenForDevelop
   * @summary 개발용으로 생성된 access token 발급 api
   * @request POST:/api/v1/auth/set-token/{userId}
   */
  export namespace AuthControllerSetAccessTokenForDevelop {
    export type RequestParams = {
      userId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description pagination
   * @tags users
   * @name UsersControllerFindAllAndCount
   * @summary 유저 리스트 조회
   * @request GET:/api/v1/users
   */
  export namespace UsersControllerFindAllAndCount {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * 페이지번호
       * @format integer
       */
      page?: number;
      /**
       * 페이지당 아이템 수
       * @format integer
       */
      pageSize?: number;
      /**
       * user 고유 Id
       * @format integer
       */
      id?: number;
      /** 로그인 타입 */
      loginType?: UsersControllerFindAllAndCountParams1LoginTypeEnum;
      /**
       * 이메일
       * @format email
       */
      email?: string;
      /** nickname */
      nickname?: string;
      /**
       * 정렬 필드<br>공백을 제거한 csv 형태로 보내야합니다.<br>- 가 붙으면 내림차순 - 가 붙지 않으면 오름차순<br>허용된 filed: id loginType email nickname
       * @default "id"
       * @example "-id,updatedAt"
       */
      orderBy?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UsersPaginationResponseDto;
  }
  /**
   * No description
   * @tags users
   * @name UsersControllerCreate
   * @summary 유저 생성(회원가입)
   * @request POST:/api/v1/users
   */
  export namespace UsersControllerCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateUserRequestBodyDto;
    export type RequestHeaders = {};
    export type ResponseBody = UserDetailResponseDto;
  }
  /**
   * No description
   * @tags users
   * @name UsersControllerFindOne
   * @summary 유저 단일 조회
   * @request GET:/api/v1/users/{userId}
   */
  export namespace UsersControllerFindOne {
    export type RequestParams = {
      userId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserDetailResponseDto;
  }
  /**
   * No description
   * @tags users
   * @name UsersControllerPatchUpdate
   * @summary 유저 부분 수정
   * @request PATCH:/api/v1/users/{userId}
   */
  export namespace UsersControllerPatchUpdate {
    export type RequestParams = {
      userId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = PatchUpdateUserRequestBodyDto;
    export type RequestHeaders = {};
    export type ResponseBody = UserDetailResponseDto;
  }
  /**
   * No description
   * @tags users
   * @name UsersControllerPutUpdate
   * @summary 유저 수정
   * @request PUT:/api/v1/users/{userId}
   */
  export namespace UsersControllerPutUpdate {
    export type RequestParams = {
      userId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = PutUpdateUserRequestBodyDto;
    export type RequestHeaders = {};
    export type ResponseBody = UserDetailResponseDto;
  }
  /**
   * No description
   * @tags users
   * @name UsersControllerRemove
   * @summary 유저 삭제
   * @request DELETE:/api/v1/users/{userId}
   */
  export namespace UsersControllerRemove {
    export type RequestParams = {
      userId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserDeleteResponseDto;
  }
  /**
   * No description
   * @tags posts
   * @name PostsControllerFindAllAndCount
   * @summary post 전체 조회
   * @request GET:/api/v1/posts
   * @secure
   */
  export namespace PostsControllerFindAllAndCount {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * 페이지번호
       * @format integer
       */
      page?: number;
      /**
       * 페이지당 아이템 수
       * @format integer
       */
      pageSize?: number;
      /**
       * posts 고유 Id
       * @format integer
       */
      id?: number;
      /**
       * 게시한 유저 고유 id
       * @format integer
       */
      userId?: number;
      /**
       * title
       * @maxLength 255
       */
      title?: string;
      /** description */
      description?: string;
      /**
       * 정렬 필드<br>공백을 제거한 csv 형태로 보내야합니다.<br>- 가 붙으면 내림차순 - 가 붙지 않으면 오름차순<br>허용된 filed: id title userId createdAt updatedAt
       * @default "id"
       * @example "-id,updatedAt"
       */
      orderBy?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PostsPaginationResponseDto;
  }
  /**
   * No description
   * @tags posts
   * @name PostsControllerCreate
   * @summary post 생성
   * @request POST:/api/v1/posts
   * @secure
   */
  export namespace PostsControllerCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreatePostRequestBodyDto;
    export type RequestHeaders = {};
    export type ResponseBody = PostDetailResponseDto;
  }
  /**
   * No description
   * @tags posts
   * @name PostsControllerFindOne
   * @summary post 상세 조회
   * @request GET:/api/v1/posts/{postId}
   * @secure
   */
  export namespace PostsControllerFindOne {
    export type RequestParams = {
      postId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PostDetailResponseDto;
  }
  /**
   * No description
   * @tags posts
   * @name PostsControllerPutUpdate
   * @summary post 수정
   * @request PUT:/api/v1/posts/{postId}
   * @secure
   */
  export namespace PostsControllerPutUpdate {
    export type RequestParams = {
      postId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = PutUpdatePostBodyDto;
    export type RequestHeaders = {};
    export type ResponseBody = PostDetailResponseDto;
  }
  /**
   * No description
   * @tags posts
   * @name PostsControllerPatchUpdate
   * @summary post 부분 수정
   * @request PATCH:/api/v1/posts/{postId}
   * @secure
   */
  export namespace PostsControllerPatchUpdate {
    export type RequestParams = {
      postId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = PatchUpdatePostBodyDto;
    export type RequestHeaders = {};
    export type ResponseBody = PostDetailResponseDto;
  }
  /**
   * No description
   * @tags posts
   * @name PostsControllerRemove
   * @summary post 삭제
   * @request DELETE:/api/v1/posts/{postId}
   * @secure
   */
  export namespace PostsControllerRemove {
    export type RequestParams = {
      postId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PostDeleteResponseDto;
  }
  /**
   * @description 조회수를 1 증가시킵니다.
   * @tags posts
   * @name PostsControllerIncreaseHit
   * @summary 조회수 증가
   * @request PUT:/api/v1/posts/{postId}/hit
   * @secure
   */
  export namespace PostsControllerIncreaseHit {
    export type RequestParams = {
      postId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description 페이지네이션
   * @tags postComments
   * @name PostCommentsControllerFindAllAndCount
   * @summary post comment 전체 조회
   * @request GET:/api/v1/posts/{postId}/post-comments
   * @secure
   */
  export namespace PostCommentsControllerFindAllAndCount {
    export type RequestParams = {
      postId: number;
    };
    export type RequestQuery = {
      /**
       * 페이지번호
       * @format integer
       */
      page?: number;
      /**
       * 페이지당 아이템 수
       * @format integer
       */
      pageSize?: number;
      /**
       * postComment 고유 Id
       * @format integer
       */
      id?: number;
      /**
       * 게시한 유저 고유 id
       * @format integer
       */
      userId?: number;
      /** description */
      description?: string;
      /**
       * 정렬 필드<br>공백을 제거한 csv 형태로 보내야합니다.<br>- 가 붙으면 내림차순 - 가 붙지 않으면 오름차순<br>허용된 filed: id description postId userId createdAt updatedAt
       * @default "id"
       * @example "-id,updatedAt"
       */
      orderBy?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PostCommentsPaginationResponseDto;
  }
  /**
   * No description
   * @tags postComments
   * @name PostCommentsControllerCreate
   * @summary postComment 생성
   * @request POST:/api/v1/posts/{postId}/post-comments
   * @secure
   */
  export namespace PostCommentsControllerCreate {
    export type RequestParams = {
      postId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = CreatePostCommentRequestBodyDto;
    export type RequestHeaders = {};
    export type ResponseBody = PostCommentDetailResponseDto;
  }
  /**
   * No description
   * @tags postComments
   * @name PostCommentsControllerFindOne
   * @summary postComment 단일 조회
   * @request GET:/api/v1/posts/{postId}/post-comments/{postCommentId}
   * @secure
   */
  export namespace PostCommentsControllerFindOne {
    export type RequestParams = {
      postId: number;
      postCommentId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PostCommentDetailResponseDto;
  }
  /**
   * No description
   * @tags postComments
   * @name PostCommentsControllerPutUpdate
   * @summary postComment 수정
   * @request PUT:/api/v1/posts/{postId}/post-comments/{postCommentId}
   * @secure
   */
  export namespace PostCommentsControllerPutUpdate {
    export type RequestParams = {
      postId: number;
      postCommentId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = PutUpdatePostCommentRequestBodyDto;
    export type RequestHeaders = {};
    export type ResponseBody = PostCommentDetailResponseDto;
  }
  /**
   * No description
   * @tags postComments
   * @name PostCommentsControllerPatchUpdate
   * @summary postComment 부분 수정
   * @request PATCH:/api/v1/posts/{postId}/post-comments/{postCommentId}
   * @secure
   */
  export namespace PostCommentsControllerPatchUpdate {
    export type RequestParams = {
      postId: number;
      postCommentId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = PatchUpdatePostCommentRequestBodyDto;
    export type RequestHeaders = {};
    export type ResponseBody = PostCommentDetailResponseDto;
  }
  /**
   * No description
   * @tags postComments
   * @name PostCommentsControllerRemove
   * @summary postComment 삭제
   * @request DELETE:/api/v1/posts/{postId}/post-comments/{postCommentId}
   * @secure
   */
  export namespace PostCommentsControllerRemove {
    export type RequestParams = {
      postId: string;
      postCommentId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PostCommentDeleteResponseDto;
  }
}
	
    }
  }
  export {};
