/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ErrorCodeResponseDto {
  /** @example [{"code":0,"message":"Server error. Please contact server developer"},{"code":1,"message":"Invalid request parameter. Please check your request."},{"code":2,"message":"Api not found. Please check your request"},{"code":3,"message":"This token is invalid."},{"code":4,"message":"You don't have permission to access it."},{"code":5,"message":"The resource you're trying to access doesn't exist."},{"code":6,"message":"At least one update field must exist."}] */
  common: {
    code: ErrorCodeResponseDtoCodeEnum;
    message: ErrorCodeResponseDtoMessageEnum;
  }[];
  /** @example [{"code":1000,"message":"The account was not found."},{"code":1001,"message":"Your account information doesn't match."}] */
  auth: {
    code: ErrorCodeResponseDtoCodeEnum1;
    message: ErrorCodeResponseDtoMessageEnum1;
  }[];
  /** @example [{"code":2000,"message":"An email that already exists."},{"code":2001,"message":"A cell phone number that already exists."},{"code":2002,"message":"A sns id that already exists"}] */
  user: {
    code: ErrorCodeResponseDtoCodeEnum2;
    message: ErrorCodeResponseDtoMessageEnum2;
  }[];
  /** @example [{"code":3000,"message":"Major name that already exists"},{"code":3001,"message":"Major code that already exists."}] */
  major: {
    code: ErrorCodeResponseDtoCodeEnum3;
    message: ErrorCodeResponseDtoMessageEnum3;
  }[];
  /** @example [{"code":4000,"message":"You've already liked it."},{"code":4001,"message":"You haven't liked it yet."}] */
  reaction: {
    code: ErrorCodeResponseDtoCodeEnum4;
    message: ErrorCodeResponseDtoMessageEnum4;
  }[];
}

export type ValidationError = object;

export interface SignInRequestBodyDto {
  /** 로그인 타입 */
  loginType: UserLoginType;
  /** SNS 토큰 */
  snsToken: string;
}

export interface UserDto {
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
  majorId: number;
  /** 유저 로그인 타입 */
  loginType: UserDtoLoginTypeEnum;
  snsId: string | null;
  /** SNS 토큰 */
  snsToken: string;
  studentNumber: string | null;
  /** 유저 이름 */
  name: string;
  nickname: string | null;
  /**
   * 이메일
   * @format email
   */
  email: string;
  /**
   * 핸드폰 번호
   * @format /^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/
   * @example "010-0000-0000"
   */
  phoneNumber: string | null;
  /**
   * 학년 (0이면 졸업)
   * @min 0
   * @max 4
   */
  grade: number | null;
  /** 성별 */
  gender: UserDtoGenderEnum;
  /**
   * profile image path
   * @example "path/user-image.jpeg"
   */
  profilePath: string | null;
  /** 유저 role */
  role: UserDtoRoleEnum;
}

export interface UserDetailResponseDto {
  user: UserDto;
}

export interface CreateUserDto {
  /** login type */
  loginType: CreateUserDtoLoginTypeEnum;
  /** snsId */
  snsId: string;
  /**
   * name
   * @minLength 2
   * @maxLength 20
   */
  name: string;
  /**
   * email
   * @format email
   */
  email: string;
  /** role */
  role: CreateUserDtoRoleEnum;
  /**
   * phone number
   * @pattern /^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/
   * @example "010-0000-0000"
   */
  phoneNumber: string | null;
  /**
   * grade 0은 졸업생
   * @min 0
   * @max 4
   */
  grade: number | null;
  /** gender */
  gender: CreateUserDtoGenderEnum;
  /**
   * url 이 아닌 profile path
   * @example "user_image.jpg"
   */
  profilePath: string | null;
}

export interface PutUpdateUserDto {
  /**
   * name
   * @minLength 2
   * @maxLength 20
   */
  name: string;
  /**
   * grade 0은 졸업생
   * @min 0
   * @max 4
   */
  grade: number | null;
  /** gender */
  gender: PutUpdateUserDtoGenderEnum;
  /**
   * url 이 아닌 profile path
   * @example "user_image.jpg"
   */
  profilePath: string | null;
}

export interface MajorDto {
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
   * 전공 코드
   * @minLength 1
   * @maxLength 20
   */
  code: string;
  /**
   * 전공 이름
   * @minLength 1
   * @maxLength 50
   */
  name: string;
  /**
   * 전공 메모
   * @minLength 0
   * @maxLength 255
   */
  memo: string;
}

export interface MajorsCommonResponseDto {
  majors: MajorDto[];
}

export interface CreateMajorRequestBodyDto {
  /**
   * 전공 코드
   * @minLength 1
   * @maxLength 20
   */
  code: string;
  /**
   * 전공 이름
   * @minLength 1
   * @maxLength 50
   */
  name: string;
  /**
   * 전공 생성한 이유 메모
   * @minLength 0
   * @maxLength 255
   */
  memo: string;
}

export interface MajorDetailResponseDto {
  major: MajorDto;
}

export interface NoticePostDto {
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
   * 공지 게시글 제목
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /** 공지 게시글 본문 */
  description: string;
  /**
   * 게시글 작성자 고유 ID
   * @format integer
   */
  userId: number;
  /**
   * 공지 게시글 조회수
   * @format integer
   * @default 0
   */
  hit: number;
  /**
   * 댓글 허용 여부 (false: 비활성화, true: 허용)
   * @default true
   */
  isAllowComment: boolean;
}

export interface CreateNoticePostDto {
  /**
   * 공지 게시글 제목
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /** 공지 게시글 본문 */
  description: string;
  /**
   * 댓글 허용 여부 (false: 비활성화, true: 허용)
   * @default true
   */
  isAllowComment: boolean;
}

export interface NoticePostDetailResponseDto {
  noticePost: NoticePostDto;
}

export interface NoticePostsItemDto {
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
   * 공지 게시글 제목
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * 게시글 작성자 고유 ID
   * @format integer
   */
  userId: number;
  /**
   * 공지 게시글 조회수
   * @format integer
   * @default 0
   */
  hit: number;
  /**
   * 댓글 허용 여부 (false: 비활성화, true: 허용)
   * @default true
   */
  isAllowComment: boolean;
}

export interface NoticePostsPaginationResponseDto {
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
  contents: NoticePostsItemDto[];
}

export interface PutUpdateNoticePostDto {
  /**
   * 공지 게시글 제목
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /** 공지 게시글 본문 */
  description: string;
  /**
   * 댓글 허용 여부 (false: 비활성화, true: 허용)
   * @default true
   */
  isAllowComment: boolean;
}

export interface PatchUpdateNoticePostDto {
  /**
   * 공지 게시글 제목
   * @minLength 1
   * @maxLength 255
   */
  title?: string;
  /** 공지 게시글 본문 */
  description?: string;
  /** 댓글 허용 여부 (false: 비활성화, true: 허용) */
  isAllowComment?: boolean;
}

export interface NoticePostDeleteResponseDto {
  /**
   * 삭제된 리소스 개수
   * @format integer
   */
  count: number;
}

export interface FreePostDto {
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
   * 게시글 작성자 고유 ID
   * @format integer
   */
  userId: number;
  /**
   * 제목
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /** 본문 */
  description: string;
  /**
   * 조회수
   * @format integer
   * @default 0
   */
  hit: number;
  /** 익명 여부 */
  isAnonymous: boolean;
}

export interface CreateFreePostDto {
  /**
   * 제목
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /** 본문 */
  description: string;
  /**
   * 익명 여부
   * @default false
   */
  isAnonymous: boolean;
}

export interface FreePostDetailResponseDto {
  freePost: FreePostDto;
}

export interface FreePostsItemDto {
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
   * 게시글 작성자 고유 ID
   * @format integer
   */
  userId: number;
  /**
   * 제목
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /**
   * 조회수
   * @format integer
   * @default 0
   */
  hit: number;
  /** 익명 여부 */
  isAnonymous: boolean;
}

export interface FreePostsPaginationResponseDto {
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
  contents: FreePostsItemDto[];
}

export interface PutUpdateFreePostDto {
  /**
   * 제목
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /** 본문 */
  description: string;
  /** 익명 여부 */
  isAnonymous: boolean;
}

export interface PatchUpdateFreePostDto {
  /**
   * 제목
   * @minLength 1
   * @maxLength 255
   */
  title?: string;
  /** 본문 */
  description?: string;
  /** 익명 여부 */
  isAnonymous?: boolean;
}

export interface FreePostDeleteResponseDto {
  /**
   * 삭제된 리소스 개수
   * @format integer
   */
  count: number;
}

export interface CreateReactionDto {
  /** reaction type */
  type: CreateReactionDtoTypeEnum;
}

export interface RemoveReactionDto {
  /** reaction type */
  type: RemoveReactionDtoTypeEnum;
}

export interface FreePostCommentDto {
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
   * 게시글 고유 ID
   * @format integer
   */
  freePostId: number;
  /**
   * 댓글 작성자 고유 ID
   * @format integer
   */
  userId: number;
  /**
   * 본문
   * @minLength 1
   * @maxLength 255
   */
  description: string;
  /** 익명 여부 */
  isAnonymous: boolean;
}

export interface CreateFreePostCommentDto {
  /**
   * 본문
   * @minLength 1
   * @maxLength 255
   */
  description: string;
  /**
   * 익명 여부
   * @default false
   */
  isAnonymous?: boolean;
}

export interface FreePostCommentDetailResponseDto {
  freePostComment: FreePostCommentDto;
}

export interface FreePostCommentsItemDto {
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
   * 게시글 고유 ID
   * @format integer
   */
  freePostId: number;
  /**
   * 댓글 작성자 고유 ID
   * @format integer
   */
  userId: number;
  /**
   * 본문
   * @minLength 1
   * @maxLength 255
   */
  description: string;
  /** 익명 여부 */
  isAnonymous: boolean;
}

export interface FreePostCommentsPaginationResponseDto {
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
  contents: FreePostCommentsItemDto[];
}

export interface PutUpdateFreePostCommentDto {
  /**
   * 본문
   * @minLength 1
   * @maxLength 255
   */
  description: string;
  /** 익명 여부 */
  isAnonymous: boolean;
}

export interface FreePostReplyCommentDto {
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
   * 게시글 댓글 고유 ID
   * @format integer
   */
  freePostCommentId: number;
  /**
   * 대댓글 작성자 고유 ID
   * @format integer
   */
  userId: number;
  /**
   * 본문
   * @minLength 1
   * @maxLength 255
   */
  description: string;
  /** 익명 여부 */
  isAnonymous: boolean;
}

export interface CreateFreePostReplyCommentDto {
  /**
   * 본문
   * @minLength 1
   * @maxLength 255
   */
  description: string;
  /**
   * 익명 여부
   * @default false
   */
  isAnonymous?: boolean;
}

export interface FreePostReplyCommentDetailResponseDto {
  freePostReplyComment: FreePostReplyCommentDto;
}

export interface FreePostReplyCommentsItemDto {
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
   * 게시글 댓글 고유 ID
   * @format integer
   */
  freePostCommentId: number;
  /**
   * 대댓글 작성자 고유 ID
   * @format integer
   */
  userId: number;
  /**
   * 본문
   * @minLength 1
   * @maxLength 255
   */
  description: string;
  /** 익명 여부 */
  isAnonymous: boolean;
}

export interface FreePostReplyCommentsPaginationResponseDto {
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
  contents: FreePostReplyCommentsItemDto[];
}

export interface PutUpdateFreePostReplyCommentDto {
  /**
   * 본문
   * @minLength 1
   * @maxLength 255
   */
  description: string;
  /** 익명 여부 */
  isAnonymous: boolean;
}

export type UserLoginType = "KAKAO" | "GOOGLE" | "NAVER";

export interface CheckRegistrationRequestBodyDto {
  /** 로그인 타입 */
  loginType: UserLoginType;
  /** SNS 토큰 */
  snsToken: string;
}

export interface SignUpRequestBodyDto {
  /** 로그인 타입 */
  loginType: UserLoginType;
  /** SNS 토큰 */
  snsToken: string;
  /**
   * name
   * @minLength 2
   * @maxLength 20
   */
  name: string | null;
  /**
   * email
   * @format email
   */
  email: string | null;
  /** role */
  role: SignUpRequestBodyDtoRoleEnum;
  /**
   * phone number
   * @pattern /^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/
   * @example "010-0000-0000"
   */
  phoneNumber: string | null;
  /**
   * grade 0은 졸업생
   * @min 0
   * @max 4
   */
  grade: number | null;
  /** gender */
  gender: SignUpRequestBodyDtoGenderEnum;
  /**
   * url 이 아닌 profile path
   * @example "user_image.jpg"
   */
  profilePath: string | null;
}

export type ErrorCodeResponseDtoCodeEnum =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6";

export type ErrorCodeResponseDtoMessageEnum =
  | "Server error. Please contact server developer"
  | "Invalid request parameter. Please check your request."
  | "Api not found. Please check your request"
  | "This token is invalid."
  | "You don't have permission to access it."
  | "The resource you're trying to access doesn't exist."
  | "At least one update field must exist.";

export type ErrorCodeResponseDtoCodeEnum1 = "1000" | "1001";

export type ErrorCodeResponseDtoMessageEnum1 =
  | "The account was not found."
  | "Your account information doesn't match.";

export type ErrorCodeResponseDtoCodeEnum2 = "2000" | "2001" | "2002";

export type ErrorCodeResponseDtoMessageEnum2 =
  | "An email that already exists."
  | "A cell phone number that already exists."
  | "A sns id that already exists";

export type ErrorCodeResponseDtoCodeEnum3 = "3000" | "3001";

export type ErrorCodeResponseDtoMessageEnum3 =
  | "Major name that already exists"
  | "Major code that already exists.";

export type ErrorCodeResponseDtoCodeEnum4 = "4000" | "4001";

export type ErrorCodeResponseDtoMessageEnum4 =
  | "You've already liked it."
  | "You haven't liked it yet.";

/** 유저 로그인 타입 */
export type UserDtoLoginTypeEnum = "KAKAO" | "GOOGLE" | "NAVER";

/** 성별 */
export type UserDtoGenderEnum = "male" | "female";

/** 유저 role */
export type UserDtoRoleEnum = "admin" | "student";

/** login type */
export type CreateUserDtoLoginTypeEnum = "KAKAO" | "GOOGLE" | "NAVER";

/** role */
export type CreateUserDtoRoleEnum = "admin" | "student";

/** gender */
export type CreateUserDtoGenderEnum = "male" | "female";

/** gender */
export type PutUpdateUserDtoGenderEnum = "male" | "female";

/** reaction type */
export type CreateReactionDtoTypeEnum = "like";

/** reaction type */
export type RemoveReactionDtoTypeEnum = "like";

/** role */
export type SignUpRequestBodyDtoRoleEnum = "admin" | "student";

/** gender */
export type SignUpRequestBodyDtoGenderEnum = "male" | "female";

/**
 * error code
 * @example 1
 */
export type AuthSignInCodeEnum = 1 | 1000 | 1001;

/** error message */
export type AuthSignInMessageEnum =
  | "Invalid request parameter. Please check your request."
  | "The account was not found."
  | "Your account information doesn't match.";

/**
 * error code
 * @example 0
 */
export type AuthSignInCodeEnum1 = 0;

/** error message */
export type AuthSignInMessageEnum1 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 3
 */
export type AuthGetProfileCodeEnum = 3;

/** error message */
export type AuthGetProfileMessageEnum = "This token is invalid.";

/**
 * error code
 * @example 0
 */
export type AuthGetProfileCodeEnum1 = 0;

/** error message */
export type AuthGetProfileMessageEnum1 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 3
 */
export type AuthGetAccessTokenCodeEnum = 3;

/** error message */
export type AuthGetAccessTokenMessageEnum = "This token is invalid.";

/**
 * error code
 * @example 0
 */
export type AuthGetAccessTokenCodeEnum1 = 0;

/** error message */
export type AuthGetAccessTokenMessageEnum1 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type UserCreateCodeEnum = 1;

/** error message */
export type UserCreateMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 2000
 */
export type UserCreateCodeEnum1 = 2000 | 2001;

/** error message */
export type UserCreateMessageEnum1 =
  | "An email that already exists."
  | "A cell phone number that already exists.";

/**
 * error code
 * @example 0
 */
export type UserCreateCodeEnum2 = 0;

/** error message */
export type UserCreateMessageEnum2 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type UserFindOneUserOrNotFoundCodeEnum = 1;

/** error message */
export type UserFindOneUserOrNotFoundMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type UserFindOneUserOrNotFoundCodeEnum1 = 5;

/** error message */
export type UserFindOneUserOrNotFoundMessageEnum1 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type UserFindOneUserOrNotFoundCodeEnum2 = 0;

/** error message */
export type UserFindOneUserOrNotFoundMessageEnum2 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type UserPutUpdateCodeEnum = 1;

/** error message */
export type UserPutUpdateMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type UserPutUpdateCodeEnum1 = 3;

/** error message */
export type UserPutUpdateMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type UserPutUpdateCodeEnum2 = 4;

/** error message */
export type UserPutUpdateMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type UserPutUpdateCodeEnum3 = 5;

/** error message */
export type UserPutUpdateMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type UserPutUpdateCodeEnum4 = 0;

/** error message */
export type UserPutUpdateMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 0
 */
export type MajorFindAllMajorsCodeEnum = 0;

/** error message */
export type MajorFindAllMajorsMessageEnum =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type MajorCreateNewMajorCodeEnum = 1;

/** error message */
export type MajorCreateNewMajorMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3000
 */
export type MajorCreateNewMajorCodeEnum1 = 3000 | 3001;

/** error message */
export type MajorCreateNewMajorMessageEnum1 =
  | "Major name that already exists"
  | "Major code that already exists.";

/**
 * error code
 * @example 0
 */
export type MajorCreateNewMajorCodeEnum2 = 0;

/** error message */
export type MajorCreateNewMajorMessageEnum2 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type NoticepostCreateCodeEnum = 1;

/** error message */
export type NoticepostCreateMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type NoticepostCreateCodeEnum1 = 3;

/** error message */
export type NoticepostCreateMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 0
 */
export type NoticepostCreateCodeEnum2 = 0;

/** error message */
export type NoticepostCreateMessageEnum2 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type NoticepostFindAllAndCountCodeEnum = 1;

/** error message */
export type NoticepostFindAllAndCountMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 0
 */
export type NoticepostFindAllAndCountCodeEnum1 = 0;

/** error message */
export type NoticepostFindAllAndCountMessageEnum1 =
  "Server error. Please contact server developer";

export interface NoticepostFindAllAndCountParams {
  /**
   * 페이지번호
   * @format integer
   * @min 1
   * @default 1
   */
  page?: number;
  /**
   * 페이지당 아이템 수
   * @format integer
   * @min 1
   * @max 100
   * @default 20
   */
  pageSize?: number;
  /**
   * 공지게시글 고유 ID 필터링
   * @format integer
   */
  id?: number;
  /**
   * 공지게시글 작성자 고유 ID 필터링
   * @format integer
   */
  userId?: number;
  /**
   * title 필터링
   * @minLength 1
   * @maxLength 255
   */
  title?: string;
  /** 댓글 허용 여부 */
  isAllowComment?: IsAllowCommentEnum;
  /**
   * 정렬 필드<br>csv 형태로 보내야합니다.<br>- 가 붙으면 내림차순 - 가 붙지 않으면 오름차순<br>허용된 filed: [id, userId, title, hit, isAllowComment, createdAt, updatedAt]
   * @format csv
   * @default "id"
   * @example "-id,updatedAt"
   */
  order?: string;
}

/** 댓글 허용 여부 */
export type IsAllowCommentEnum = "true" | "false";

/** 댓글 허용 여부 */
export type NoticepostFindAllAndCountParams1IsAllowCommentEnum =
  | "true"
  | "false";

/**
 * error code
 * @example 1
 */
export type NoticepostFindOneOrNotFoundCodeEnum = 1;

/** error message */
export type NoticepostFindOneOrNotFoundMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type NoticepostFindOneOrNotFoundCodeEnum1 = 5;

/** error message */
export type NoticepostFindOneOrNotFoundMessageEnum1 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type NoticepostFindOneOrNotFoundCodeEnum2 = 0;

/** error message */
export type NoticepostFindOneOrNotFoundMessageEnum2 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type NoticepostPutUpdateCodeEnum = 1;

/** error message */
export type NoticepostPutUpdateMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type NoticepostPutUpdateCodeEnum1 = 3;

/** error message */
export type NoticepostPutUpdateMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type NoticepostPutUpdateCodeEnum2 = 4;

/** error message */
export type NoticepostPutUpdateMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type NoticepostPutUpdateCodeEnum3 = 5;

/** error message */
export type NoticepostPutUpdateMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type NoticepostPutUpdateCodeEnum4 = 0;

/** error message */
export type NoticepostPutUpdateMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type NoticepostPatchUpdateCodeEnum = 1;

/** error message */
export type NoticepostPatchUpdateMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type NoticepostPatchUpdateCodeEnum1 = 3;

/** error message */
export type NoticepostPatchUpdateMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type NoticepostPatchUpdateCodeEnum2 = 4;

/** error message */
export type NoticepostPatchUpdateMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type NoticepostPatchUpdateCodeEnum3 = 5;

/** error message */
export type NoticepostPatchUpdateMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type NoticepostPatchUpdateCodeEnum4 = 0;

/** error message */
export type NoticepostPatchUpdateMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type NoticepostRemoveCodeEnum = 1;

/** error message */
export type NoticepostRemoveMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type NoticepostRemoveCodeEnum1 = 3;

/** error message */
export type NoticepostRemoveMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type NoticepostRemoveCodeEnum2 = 4;

/** error message */
export type NoticepostRemoveMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type NoticepostRemoveCodeEnum3 = 5;

/** error message */
export type NoticepostRemoveMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type NoticepostRemoveCodeEnum4 = 0;

/** error message */
export type NoticepostRemoveMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type NoticepostIncreaseHitCodeEnum = 1;

/** error message */
export type NoticepostIncreaseHitMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type NoticepostIncreaseHitCodeEnum1 = 5;

/** error message */
export type NoticepostIncreaseHitMessageEnum1 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type NoticepostIncreaseHitCodeEnum2 = 0;

/** error message */
export type NoticepostIncreaseHitMessageEnum2 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreepostCreateCodeEnum = 1;

/** error message */
export type FreepostCreateMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreepostCreateCodeEnum1 = 3;

/** error message */
export type FreepostCreateMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 0
 */
export type FreepostCreateCodeEnum2 = 0;

/** error message */
export type FreepostCreateMessageEnum2 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreepostFindAllAndCountCodeEnum = 1;

/** error message */
export type FreepostFindAllAndCountMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 0
 */
export type FreepostFindAllAndCountCodeEnum1 = 0;

/** error message */
export type FreepostFindAllAndCountMessageEnum1 =
  "Server error. Please contact server developer";

export interface FreepostFindAllAndCountParams {
  /**
   * 페이지번호
   * @format integer
   * @min 1
   * @default 1
   */
  page?: number;
  /**
   * 페이지당 아이템 수
   * @format integer
   * @min 1
   * @max 100
   * @default 20
   */
  pageSize?: number;
  /**
   * 자유게시글 고유 ID 필터링
   * @format integer
   */
  id?: number;
  /**
   * 자유게시글 작성자 고유 ID 필터링
   * @format integer
   */
  userId?: number;
  /**
   * title 필터링
   * @maxLength 255
   */
  title?: string;
  /** 익명여부 필터링 */
  isAnonymous?: IsAnonymousEnum;
  /**
   * 정렬 필드<br>csv 형태로 보내야합니다.<br>- 가 붙으면 내림차순 - 가 붙지 않으면 오름차순<br>허용된 filed: [id, userId, title, hit, isAnonymous, createdAt, updatedAt]
   * @format csv
   * @default "id"
   * @example "-id,updatedAt"
   */
  order?: string;
}

/** 익명여부 필터링 */
export type IsAnonymousEnum = "true" | "false" | "0" | "1";

/** 익명여부 필터링 */
export type FreepostFindAllAndCountParams1IsAnonymousEnum =
  | "true"
  | "false"
  | "0"
  | "1";

/**
 * error code
 * @example 1
 */
export type FreepostFindOneOrNotFoundCodeEnum = 1;

/** error message */
export type FreepostFindOneOrNotFoundMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type FreepostFindOneOrNotFoundCodeEnum1 = 5;

/** error message */
export type FreepostFindOneOrNotFoundMessageEnum1 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreepostFindOneOrNotFoundCodeEnum2 = 0;

/** error message */
export type FreepostFindOneOrNotFoundMessageEnum2 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreepostPutUpdateCodeEnum = 1;

/** error message */
export type FreepostPutUpdateMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreepostPutUpdateCodeEnum1 = 3;

/** error message */
export type FreepostPutUpdateMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type FreepostPutUpdateCodeEnum2 = 4;

/** error message */
export type FreepostPutUpdateMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type FreepostPutUpdateCodeEnum3 = 5;

/** error message */
export type FreepostPutUpdateMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreepostPutUpdateCodeEnum4 = 0;

/** error message */
export type FreepostPutUpdateMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreepostPatchUpdateCodeEnum = 1 | 6;

/** error message */
export type FreepostPatchUpdateMessageEnum =
  | "Invalid request parameter. Please check your request."
  | "At least one update field must exist.";

/**
 * error code
 * @example 3
 */
export type FreepostPatchUpdateCodeEnum1 = 3;

/** error message */
export type FreepostPatchUpdateMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type FreepostPatchUpdateCodeEnum2 = 4;

/** error message */
export type FreepostPatchUpdateMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type FreepostPatchUpdateCodeEnum3 = 5;

/** error message */
export type FreepostPatchUpdateMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreepostPatchUpdateCodeEnum4 = 0;

/** error message */
export type FreepostPatchUpdateMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreepostRemoveCodeEnum = 1;

/** error message */
export type FreepostRemoveMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreepostRemoveCodeEnum1 = 3;

/** error message */
export type FreepostRemoveMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type FreepostRemoveCodeEnum2 = 4;

/** error message */
export type FreepostRemoveMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type FreepostRemoveCodeEnum3 = 5;

/** error message */
export type FreepostRemoveMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreepostRemoveCodeEnum4 = 0;

/** error message */
export type FreepostRemoveMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreepostIncrementHitCodeEnum = 1;

/** error message */
export type FreepostIncrementHitMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type FreepostIncrementHitCodeEnum1 = 5;

/** error message */
export type FreepostIncrementHitMessageEnum1 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreepostIncrementHitCodeEnum2 = 0;

/** error message */
export type FreepostIncrementHitMessageEnum2 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreepostCreateReactionCodeEnum = 1;

/** error message */
export type FreepostCreateReactionMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreepostCreateReactionCodeEnum1 = 3;

/** error message */
export type FreepostCreateReactionMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type FreepostCreateReactionCodeEnum2 = 5;

/** error message */
export type FreepostCreateReactionMessageEnum2 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 4000
 */
export type FreepostCreateReactionCodeEnum3 = 4000;

/** error message */
export type FreepostCreateReactionMessageEnum3 = "You've already liked it.";

/**
 * error code
 * @example 0
 */
export type FreepostCreateReactionCodeEnum4 = 0;

/** error message */
export type FreepostCreateReactionMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreepostRemoveReactionCodeEnum = 1;

/** error message */
export type FreepostRemoveReactionMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreepostRemoveReactionCodeEnum1 = 3;

/** error message */
export type FreepostRemoveReactionMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type FreepostRemoveReactionCodeEnum2 = 5;

/** error message */
export type FreepostRemoveReactionMessageEnum2 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 4001
 */
export type FreepostRemoveReactionCodeEnum3 = 4001;

/** error message */
export type FreepostRemoveReactionMessageEnum3 = "You haven't liked it yet.";

/**
 * error code
 * @example 0
 */
export type FreepostRemoveReactionCodeEnum4 = 0;

/** error message */
export type FreepostRemoveReactionMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreepostcommentCreateCodeEnum = 1;

/** error message */
export type FreepostcommentCreateMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreepostcommentCreateCodeEnum1 = 3;

/** error message */
export type FreepostcommentCreateMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type FreepostcommentCreateCodeEnum2 = 5;

/** error message */
export type FreepostcommentCreateMessageEnum2 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreepostcommentCreateCodeEnum3 = 0;

/** error message */
export type FreepostcommentCreateMessageEnum3 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreepostcommentFindAllAndCountCodeEnum = 1;

/** error message */
export type FreepostcommentFindAllAndCountMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type FreepostcommentFindAllAndCountCodeEnum1 = 5;

/** error message */
export type FreepostcommentFindAllAndCountMessageEnum1 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreepostcommentFindAllAndCountCodeEnum2 = 0;

/** error message */
export type FreepostcommentFindAllAndCountMessageEnum2 =
  "Server error. Please contact server developer";

export interface FreepostcommentFindAllAndCountParams {
  /**
   * 페이지번호
   * @format integer
   * @min 1
   * @default 1
   */
  page?: number;
  /**
   * 페이지당 아이템 수
   * @format integer
   * @min 1
   * @max 100
   * @default 20
   */
  pageSize?: number;
  /**
   * 정렬 필드<br>csv 형태로 보내야합니다.<br>- 가 붙으면 내림차순 - 가 붙지 않으면 오름차순<br>허용된 filed: [id, userId, title, hit, isAnonymous, createdAt, updatedAt]
   * @format csv
   * @default "id"
   * @example "-id,updatedAt"
   */
  order?: string;
  postId: number;
}

/**
 * error code
 * @example 1
 */
export type FreepostcommentPutUpdateCodeEnum = 1;

/** error message */
export type FreepostcommentPutUpdateMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreepostcommentPutUpdateCodeEnum1 = 3;

/** error message */
export type FreepostcommentPutUpdateMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type FreepostcommentPutUpdateCodeEnum2 = 4;

/** error message */
export type FreepostcommentPutUpdateMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type FreepostcommentPutUpdateCodeEnum3 = 5;

/** error message */
export type FreepostcommentPutUpdateMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreepostcommentPutUpdateCodeEnum4 = 0;

/** error message */
export type FreepostcommentPutUpdateMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreepostcommentRemoveCodeEnum = 1;

/** error message */
export type FreepostcommentRemoveMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreepostcommentRemoveCodeEnum1 = 3;

/** error message */
export type FreepostcommentRemoveMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type FreepostcommentRemoveCodeEnum2 = 4;

/** error message */
export type FreepostcommentRemoveMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type FreepostcommentRemoveCodeEnum3 = 5;

/** error message */
export type FreepostcommentRemoveMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreepostcommentRemoveCodeEnum4 = 0;

/** error message */
export type FreepostcommentRemoveMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreepostcommentCreateReactionCodeEnum = 1;

/** error message */
export type FreepostcommentCreateReactionMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreepostcommentCreateReactionCodeEnum1 = 3;

/** error message */
export type FreepostcommentCreateReactionMessageEnum1 =
  "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type FreepostcommentCreateReactionCodeEnum2 = 5;

/** error message */
export type FreepostcommentCreateReactionMessageEnum2 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 4000
 */
export type FreepostcommentCreateReactionCodeEnum3 = 4000;

/** error message */
export type FreepostcommentCreateReactionMessageEnum3 =
  "You've already liked it.";

/**
 * error code
 * @example 0
 */
export type FreepostcommentCreateReactionCodeEnum4 = 0;

/** error message */
export type FreepostcommentCreateReactionMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreepostcommentRemoveReactionCodeEnum = 1;

/** error message */
export type FreepostcommentRemoveReactionMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreepostcommentRemoveReactionCodeEnum1 = 3;

/** error message */
export type FreepostcommentRemoveReactionMessageEnum1 =
  "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type FreepostcommentRemoveReactionCodeEnum2 = 5;

/** error message */
export type FreepostcommentRemoveReactionMessageEnum2 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 4001
 */
export type FreepostcommentRemoveReactionCodeEnum3 = 4001;

/** error message */
export type FreepostcommentRemoveReactionMessageEnum3 =
  "You haven't liked it yet.";

/**
 * error code
 * @example 0
 */
export type FreepostcommentRemoveReactionCodeEnum4 = 0;

/** error message */
export type FreepostcommentRemoveReactionMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreepostreplycommentCreateCodeEnum = 1;

/** error message */
export type FreepostreplycommentCreateMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreepostreplycommentCreateCodeEnum1 = 3;

/** error message */
export type FreepostreplycommentCreateMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type FreepostreplycommentCreateCodeEnum2 = 5;

/** error message */
export type FreepostreplycommentCreateMessageEnum2 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreepostreplycommentCreateCodeEnum3 = 0;

/** error message */
export type FreepostreplycommentCreateMessageEnum3 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreepostreplycommentFindAllAndCountCodeEnum = 1;

/** error message */
export type FreepostreplycommentFindAllAndCountMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type FreepostreplycommentFindAllAndCountCodeEnum1 = 5;

/** error message */
export type FreepostreplycommentFindAllAndCountMessageEnum1 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreepostreplycommentFindAllAndCountCodeEnum2 = 0;

/** error message */
export type FreepostreplycommentFindAllAndCountMessageEnum2 =
  "Server error. Please contact server developer";

export interface FreepostreplycommentFindAllAndCountParams {
  /**
   * 페이지번호
   * @format integer
   * @min 1
   * @default 1
   */
  page?: number;
  /**
   * 페이지당 아이템 수
   * @format integer
   * @min 1
   * @max 100
   * @default 20
   */
  pageSize?: number;
  /**
   * 정렬 필드<br>csv 형태로 보내야합니다.<br>- 가 붙으면 내림차순 - 가 붙지 않으면 오름차순<br>허용된 filed: [id, userId, title, hit, isAnonymous, createdAt, updatedAt]
   * @format csv
   * @default "id"
   * @example "-id,updatedAt"
   */
  order?: string;
  postId: number;
  commentId: number;
}

/**
 * error code
 * @example 1
 */
export type FreepostreplycommentPutUpdateCodeEnum = 1;

/** error message */
export type FreepostreplycommentPutUpdateMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreepostreplycommentPutUpdateCodeEnum1 = 3;

/** error message */
export type FreepostreplycommentPutUpdateMessageEnum1 =
  "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type FreepostreplycommentPutUpdateCodeEnum2 = 4;

/** error message */
export type FreepostreplycommentPutUpdateMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type FreepostreplycommentPutUpdateCodeEnum3 = 5;

/** error message */
export type FreepostreplycommentPutUpdateMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreepostreplycommentPutUpdateCodeEnum4 = 0;

/** error message */
export type FreepostreplycommentPutUpdateMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreepostreplycommentRemoveCodeEnum = 1;

/** error message */
export type FreepostreplycommentRemoveMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreepostreplycommentRemoveCodeEnum1 = 3;

/** error message */
export type FreepostreplycommentRemoveMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type FreepostreplycommentRemoveCodeEnum2 = 4;

/** error message */
export type FreepostreplycommentRemoveMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type FreepostreplycommentRemoveCodeEnum3 = 5;

/** error message */
export type FreepostreplycommentRemoveMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreepostreplycommentRemoveCodeEnum4 = 0;

/** error message */
export type FreepostreplycommentRemoveMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreepostreplycommentCreateReactionCodeEnum = 1;

/** error message */
export type FreepostreplycommentCreateReactionMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreepostreplycommentCreateReactionCodeEnum1 = 3;

/** error message */
export type FreepostreplycommentCreateReactionMessageEnum1 =
  "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type FreepostreplycommentCreateReactionCodeEnum2 = 5;

/** error message */
export type FreepostreplycommentCreateReactionMessageEnum2 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 4000
 */
export type FreepostreplycommentCreateReactionCodeEnum3 = 4000;

/** error message */
export type FreepostreplycommentCreateReactionMessageEnum3 =
  "You've already liked it.";

/**
 * error code
 * @example 0
 */
export type FreepostreplycommentCreateReactionCodeEnum4 = 0;

/** error message */
export type FreepostreplycommentCreateReactionMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreepostreplycommentRemoveReactionCodeEnum = 1;

/** error message */
export type FreepostreplycommentRemoveReactionMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreepostreplycommentRemoveReactionCodeEnum1 = 3;

/** error message */
export type FreepostreplycommentRemoveReactionMessageEnum1 =
  "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type FreepostreplycommentRemoveReactionCodeEnum2 = 5;

/** error message */
export type FreepostreplycommentRemoveReactionMessageEnum2 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 4001
 */
export type FreepostreplycommentRemoveReactionCodeEnum3 = 4001;

/** error message */
export type FreepostreplycommentRemoveReactionMessageEnum3 =
  "You haven't liked it yet.";

/**
 * error code
 * @example 0
 */
export type FreepostreplycommentRemoveReactionCodeEnum4 = 0;

/** error message */
export type FreepostreplycommentRemoveReactionMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 0
 */
export type AuthsocialCheckRegistrationCodeEnum = 0;

/** error message */
export type AuthsocialCheckRegistrationMessageEnum =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type AuthsocialSignUpCodeEnum = 1;

/** error message */
export type AuthsocialSignUpMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 2000
 */
export type AuthsocialSignUpCodeEnum1 = 2000 | 2001;

/** error message */
export type AuthsocialSignUpMessageEnum1 =
  | "An email that already exists."
  | "A cell phone number that already exists.";

/**
 * error code
 * @example 0
 */
export type AuthsocialSignUpCodeEnum2 = 0;

/** error message */
export type AuthsocialSignUpMessageEnum2 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type AuthsocialSignInCodeEnum = 1 | 1000 | 1001;

/** error message */
export type AuthsocialSignInMessageEnum =
  | "Invalid request parameter. Please check your request."
  | "The account was not found."
  | "Your account information doesn't match.";

/**
 * error code
 * @example 0
 */
export type AuthsocialSignInCodeEnum1 = 0;

/** error message */
export type AuthsocialSignInMessageEnum1 =
  "Server error. Please contact server developer";
