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

export interface CustomValidationError {
  /**
   * property name
   * @example "id"
   */
  property: string;
  /**
   * value
   * @example "unknown"
   */
  value: object;
  /** error reason */
  reason: string;
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

export interface MajorsCommonResponseDto {
  majors: MajorDto[];
}

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

export interface NoticePostCommentDto {
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
  noticePostId: number;
  /**
   * 댓글 작성자 고유 ID
   * @format integer
   */
  userId: number;
  /**
   * 부모 댓글 ID 해당 값을 주지 않을 경우 최상위 댓글임
   * @format integer
   */
  parentId: number | null;
  /**
   * 댓글 깊이 0부터 시작
   * @format integer
   */
  depth: number;
  /**
   * 본문
   * @minLength 1
   * @maxLength 255
   */
  description: string;
  /** 익명 여부 */
  isAnonymous: boolean;
}

export interface CreateNoticePostCommentDto {
  /**
   * 부모 댓글 ID 해당 값을 주지 않을 경우 최상위 댓글로 안식함
   * @format integer
   */
  parentId?: number;
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

export interface NoticePostCommentDetailResponseDto {
  noticePostComment: NoticePostCommentDto;
}

export interface NoticePostCommentsItemDto {
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
  noticePostId: number;
  /**
   * 댓글 작성자 고유 ID
   * @format integer
   */
  userId: number;
  /**
   * 부모 댓글 ID 해당 값을 주지 않을 경우 최상위 댓글임
   * @format integer
   */
  parentId: number | null;
  /**
   * 댓글 깊이 0부터 시작
   * @format integer
   */
  depth: number;
  /**
   * 본문
   * @minLength 1
   * @maxLength 255
   */
  description: string;
  /** 익명 여부 */
  isAnonymous: boolean;
  /** 댓글의 하위 댓글 nested 구조 */
  children: NoticePostCommentDto[];
}

export interface NoticePostCommentsPaginationResponseDto {
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
  contents: NoticePostCommentsItemDto[];
}

export interface PutUpdateNoticePostCommentDto {
  /**
   * 부모 댓글 ID 해당 값을 주지 않을 경우 최상위 댓글로 안식함
   * @format integer
   */
  parentId?: number;
  /**
   * 본문
   * @minLength 1
   * @maxLength 255
   */
  description: string;
  /** 익명 여부 */
  isAnonymous: boolean;
}

export interface CreateReactionDto {
  /** reaction type */
  type: CreateReactionDtoTypeEnum;
}

export interface RemoveReactionDto {
  /** reaction type */
  type: RemoveReactionDtoTypeEnum;
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
   * 부모 댓글 ID 해당 값을 주지 않을 경우 최상위 댓글임
   * @format integer
   */
  parentId: number | null;
  /**
   * 댓글 깊이 0부터 시작
   * @format integer
   */
  depth: number;
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
   * 부모 댓글 ID 해당 값을 주지 않을 경우 최상위 댓글로 안식함
   * @format integer
   */
  parentId?: number;
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
   * 부모 댓글 ID 해당 값을 주지 않을 경우 최상위 댓글임
   * @format integer
   */
  parentId: number | null;
  /**
   * 댓글 깊이 0부터 시작
   * @format integer
   */
  depth: number;
  /**
   * 본문
   * @minLength 1
   * @maxLength 255
   */
  description: string;
  /** 익명 여부 */
  isAnonymous: boolean;
  /** 댓글의 하위 댓글 nested 구조 */
  children: FreePostCommentDto[];
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
   * 부모 댓글 ID 해당 값을 주지 않을 경우 최상위 댓글로 안식함
   * @format integer
   */
  parentId?: number;
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

export interface ClubCategoryDto {
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
   * 카테고리 생성 유저 고유 ID
   * @format integer
   */
  userId: number;
  /** 카테고리 명 */
  name: string;
}

export interface ClubTagDto {
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
   * 태그 생성 유저 고유 ID
   * @format integer
   */
  userId: number;
  /** 태그 명 */
  name: string;
}

export interface ClubsItemDto {
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
  /** 동아리 명 */
  name: string;
  /** 동아리 로고 path */
  logoPath: string | null;
  /** 동아리 상태 */
  status: ClubsItemDtoStatusEnum;
  /** 동아리 카테고리 리스트 */
  clubCategories: ClubCategoryDto[];
  /** 동아리 태그 리스트 */
  clubTags: ClubTagDto[];
}

export interface ClubsPaginationResponseDto {
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
  contents: ClubsItemDto[];
}

export interface AttachmentDto {
  /**
   * 첨부 파일 고유 ID
   * @format int64
   */
  id: string;
  /**
   * 업로더 고유 ID
   * @format integer
   */
  userId: number;
  /** file url */
  url: string;
  /** domain을 제외한 path */
  path: string;
  /** MIME-Type */
  mimeType: string;
  /**
   * 파일 용량(byte)
   * @format int64
   */
  capacity: string;
  /**
   * 생성 일자
   * @format timestamp
   */
  createdAt: string;
}

export interface AttachmentsCommonResponseDto {
  attachments: AttachmentDto[];
}

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

export interface PostsItemDto {
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
  /** 게시글 타입 */
  type: PostsItemDtoTypeEnum;
  /**
   * 게시글 작성자 고유 ID
   * @format integer
   */
  userId: number;
  /** 게시글 제목 */
  title: string;
  /**
   * 게시글 조회수
   * @format integer
   * @default 0
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
  contents: PostsItemDto[];
}

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

/** 동아리 상태 */
export type ClubsItemDtoStatusEnum = "pending" | "active" | "inactive";

export type ErrorCodeResponseDtoCodeEnum = "0" | "1" | "2" | "3" | "4" | "5" | "6";

export type ErrorCodeResponseDtoMessageEnum =
  | "Server error. Please contact server developer"
  | "Invalid request parameter. Please check your request."
  | "Api not found. Please check your request"
  | "This token is invalid."
  | "You don't have permission to access it."
  | "The resource you're trying to access doesn't exist."
  | "At least one update field must exist.";

export type ErrorCodeResponseDtoCodeEnum1 = "1000" | "1001";

export type ErrorCodeResponseDtoMessageEnum1 = "The account was not found." | "Your account information doesn't match.";

export type ErrorCodeResponseDtoCodeEnum2 = "2000" | "2001" | "2002";

export type ErrorCodeResponseDtoMessageEnum2 =
  | "An email that already exists."
  | "A cell phone number that already exists."
  | "A sns id that already exists";

export type ErrorCodeResponseDtoCodeEnum3 = "3000" | "3001";

export type ErrorCodeResponseDtoMessageEnum3 = "Major name that already exists" | "Major code that already exists.";

export type ErrorCodeResponseDtoCodeEnum4 = "4000" | "4001";

export type ErrorCodeResponseDtoMessageEnum4 = "You've already liked it." | "You haven't liked it yet.";

/** 게시글 타입 */
export type PostsItemDtoTypeEnum = "free" | "notice";

/**
 * error code
 * @example 1
 */
export type AdminCreateNewMajorCodeEnum = 1;

/** error message */
export type AdminCreateNewMajorMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type AdminCreateNewMajorCodeEnum1 = 3;

/** error message */
export type AdminCreateNewMajorMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type AdminCreateNewMajorCodeEnum2 = 4;

/** error message */
export type AdminCreateNewMajorMessageEnum2 = "You don't have permission to access it.";

/**
 * error code
 * @example 3000
 */
export type AdminCreateNewMajorCodeEnum3 = 3000 | 3001;

/** error message */
export type AdminCreateNewMajorMessageEnum3 = "Major name that already exists" | "Major code that already exists.";

/**
 * error code
 * @example 0
 */
export type AdminCreateNewMajorCodeEnum4 = 0;

/** error message */
export type AdminCreateNewMajorMessageEnum4 = "Server error. Please contact server developer";

/**
 * error code
 * @example 0
 */
export type MajorFindAllMajorsCodeEnum = 0;

/** error message */
export type MajorFindAllMajorsMessageEnum = "Server error. Please contact server developer";

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
export type AuthSignInMessageEnum1 = "Server error. Please contact server developer";

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
export type AuthGetProfileMessageEnum1 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type UserCreateCodeEnum = 1;

/** error message */
export type UserCreateMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 2000
 */
export type UserCreateCodeEnum1 = 2000 | 2001;

/** error message */
export type UserCreateMessageEnum1 = "An email that already exists." | "A cell phone number that already exists.";

/**
 * error code
 * @example 0
 */
export type UserCreateCodeEnum2 = 0;

/** error message */
export type UserCreateMessageEnum2 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type UserFindOneUserOrNotFoundCodeEnum = 1;

/** error message */
export type UserFindOneUserOrNotFoundMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type UserFindOneUserOrNotFoundCodeEnum1 = 5;

/** error message */
export type UserFindOneUserOrNotFoundMessageEnum1 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type UserFindOneUserOrNotFoundCodeEnum2 = 0;

/** error message */
export type UserFindOneUserOrNotFoundMessageEnum2 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type UserPutUpdateCodeEnum = 1;

/** error message */
export type UserPutUpdateMessageEnum = "Invalid request parameter. Please check your request.";

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
export type UserPutUpdateMessageEnum2 = "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type UserPutUpdateCodeEnum3 = 5;

/** error message */
export type UserPutUpdateMessageEnum3 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type UserPutUpdateCodeEnum4 = 0;

/** error message */
export type UserPutUpdateMessageEnum4 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type NoticePostCreateCodeEnum = 1;

/** error message */
export type NoticePostCreateMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type NoticePostCreateCodeEnum1 = 3;

/** error message */
export type NoticePostCreateMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 0
 */
export type NoticePostCreateCodeEnum2 = 0;

/** error message */
export type NoticePostCreateMessageEnum2 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type NoticePostFindAllAndCountCodeEnum = 1;

/** error message */
export type NoticePostFindAllAndCountMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 0
 */
export type NoticePostFindAllAndCountCodeEnum1 = 0;

/** error message */
export type NoticePostFindAllAndCountMessageEnum1 = "Server error. Please contact server developer";

export interface NoticePostFindAllAndCountParams {
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
export type NoticePostFindAllAndCountParams1IsAllowCommentEnum = "true" | "false";

/**
 * error code
 * @example 1
 */
export type NoticePostFindOneOrNotFoundCodeEnum = 1;

/** error message */
export type NoticePostFindOneOrNotFoundMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type NoticePostFindOneOrNotFoundCodeEnum1 = 5;

/** error message */
export type NoticePostFindOneOrNotFoundMessageEnum1 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type NoticePostFindOneOrNotFoundCodeEnum2 = 0;

/** error message */
export type NoticePostFindOneOrNotFoundMessageEnum2 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type NoticePostPutUpdateCodeEnum = 1;

/** error message */
export type NoticePostPutUpdateMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type NoticePostPutUpdateCodeEnum1 = 3;

/** error message */
export type NoticePostPutUpdateMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type NoticePostPutUpdateCodeEnum2 = 4;

/** error message */
export type NoticePostPutUpdateMessageEnum2 = "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type NoticePostPutUpdateCodeEnum3 = 5;

/** error message */
export type NoticePostPutUpdateMessageEnum3 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type NoticePostPutUpdateCodeEnum4 = 0;

/** error message */
export type NoticePostPutUpdateMessageEnum4 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type NoticePostPatchUpdateCodeEnum = 1;

/** error message */
export type NoticePostPatchUpdateMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type NoticePostPatchUpdateCodeEnum1 = 3;

/** error message */
export type NoticePostPatchUpdateMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type NoticePostPatchUpdateCodeEnum2 = 4;

/** error message */
export type NoticePostPatchUpdateMessageEnum2 = "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type NoticePostPatchUpdateCodeEnum3 = 5;

/** error message */
export type NoticePostPatchUpdateMessageEnum3 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type NoticePostPatchUpdateCodeEnum4 = 0;

/** error message */
export type NoticePostPatchUpdateMessageEnum4 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type NoticePostRemoveCodeEnum = 1;

/** error message */
export type NoticePostRemoveMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type NoticePostRemoveCodeEnum1 = 3;

/** error message */
export type NoticePostRemoveMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type NoticePostRemoveCodeEnum2 = 4;

/** error message */
export type NoticePostRemoveMessageEnum2 = "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type NoticePostRemoveCodeEnum3 = 5;

/** error message */
export type NoticePostRemoveMessageEnum3 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type NoticePostRemoveCodeEnum4 = 0;

/** error message */
export type NoticePostRemoveMessageEnum4 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type NoticePostIncreaseHitCodeEnum = 1;

/** error message */
export type NoticePostIncreaseHitMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type NoticePostIncreaseHitCodeEnum1 = 5;

/** error message */
export type NoticePostIncreaseHitMessageEnum1 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type NoticePostIncreaseHitCodeEnum2 = 0;

/** error message */
export type NoticePostIncreaseHitMessageEnum2 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type NoticePostCommentCreateCodeEnum = 1;

/** error message */
export type NoticePostCommentCreateMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type NoticePostCommentCreateCodeEnum1 = 3;

/** error message */
export type NoticePostCommentCreateMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type NoticePostCommentCreateCodeEnum2 = 5;

/** error message */
export type NoticePostCommentCreateMessageEnum2 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type NoticePostCommentCreateCodeEnum3 = 0;

/** error message */
export type NoticePostCommentCreateMessageEnum3 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type NoticePostCommentFindAllAndCountCodeEnum = 1;

/** error message */
export type NoticePostCommentFindAllAndCountMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type NoticePostCommentFindAllAndCountCodeEnum1 = 5;

/** error message */
export type NoticePostCommentFindAllAndCountMessageEnum1 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type NoticePostCommentFindAllAndCountCodeEnum2 = 0;

/** error message */
export type NoticePostCommentFindAllAndCountMessageEnum2 = "Server error. Please contact server developer";

export interface NoticePostCommentFindAllAndCountParams {
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
   * 정렬 필드<br>csv 형태로 보내야합니다.<br>- 가 붙으면 내림차순 - 가 붙지 않으면 오름차순<br>허용된 filed: [id, userId, isAnonymous, createdAt, updatedAt]
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
export type NoticePostCommentPutUpdateCodeEnum = 1;

/** error message */
export type NoticePostCommentPutUpdateMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type NoticePostCommentPutUpdateCodeEnum1 = 3;

/** error message */
export type NoticePostCommentPutUpdateMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type NoticePostCommentPutUpdateCodeEnum2 = 4;

/** error message */
export type NoticePostCommentPutUpdateMessageEnum2 = "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type NoticePostCommentPutUpdateCodeEnum3 = 5;

/** error message */
export type NoticePostCommentPutUpdateMessageEnum3 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type NoticePostCommentPutUpdateCodeEnum4 = 0;

/** error message */
export type NoticePostCommentPutUpdateMessageEnum4 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type NoticePostCommentRemoveCodeEnum = 1;

/** error message */
export type NoticePostCommentRemoveMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type NoticePostCommentRemoveCodeEnum1 = 3;

/** error message */
export type NoticePostCommentRemoveMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type NoticePostCommentRemoveCodeEnum2 = 4;

/** error message */
export type NoticePostCommentRemoveMessageEnum2 = "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type NoticePostCommentRemoveCodeEnum3 = 5;

/** error message */
export type NoticePostCommentRemoveMessageEnum3 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type NoticePostCommentRemoveCodeEnum4 = 0;

/** error message */
export type NoticePostCommentRemoveMessageEnum4 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type NoticePostCommentCreateReactionCodeEnum = 1;

/** error message */
export type NoticePostCommentCreateReactionMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type NoticePostCommentCreateReactionCodeEnum1 = 3;

/** error message */
export type NoticePostCommentCreateReactionMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type NoticePostCommentCreateReactionCodeEnum2 = 5;

/** error message */
export type NoticePostCommentCreateReactionMessageEnum2 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 4000
 */
export type NoticePostCommentCreateReactionCodeEnum3 = 4000;

/** error message */
export type NoticePostCommentCreateReactionMessageEnum3 = "You've already liked it.";

/**
 * error code
 * @example 0
 */
export type NoticePostCommentCreateReactionCodeEnum4 = 0;

/** error message */
export type NoticePostCommentCreateReactionMessageEnum4 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type NoticePostCommentRemoveReactionCodeEnum = 1;

/** error message */
export type NoticePostCommentRemoveReactionMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type NoticePostCommentRemoveReactionCodeEnum1 = 3;

/** error message */
export type NoticePostCommentRemoveReactionMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type NoticePostCommentRemoveReactionCodeEnum2 = 5;

/** error message */
export type NoticePostCommentRemoveReactionMessageEnum2 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 4001
 */
export type NoticePostCommentRemoveReactionCodeEnum3 = 4001;

/** error message */
export type NoticePostCommentRemoveReactionMessageEnum3 = "You haven't liked it yet.";

/**
 * error code
 * @example 0
 */
export type NoticePostCommentRemoveReactionCodeEnum4 = 0;

/** error message */
export type NoticePostCommentRemoveReactionMessageEnum4 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreePostCreateCodeEnum = 1;

/** error message */
export type FreePostCreateMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreePostCreateCodeEnum1 = 3;

/** error message */
export type FreePostCreateMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 0
 */
export type FreePostCreateCodeEnum2 = 0;

/** error message */
export type FreePostCreateMessageEnum2 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreePostFindAllAndCountCodeEnum = 1;

/** error message */
export type FreePostFindAllAndCountMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 0
 */
export type FreePostFindAllAndCountCodeEnum1 = 0;

/** error message */
export type FreePostFindAllAndCountMessageEnum1 = "Server error. Please contact server developer";

export interface FreePostFindAllAndCountParams {
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
export type FreePostFindAllAndCountParams1IsAnonymousEnum = "true" | "false" | "0" | "1";

/**
 * error code
 * @example 1
 */
export type FreePostFindOneOrNotFoundCodeEnum = 1;

/** error message */
export type FreePostFindOneOrNotFoundMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type FreePostFindOneOrNotFoundCodeEnum1 = 5;

/** error message */
export type FreePostFindOneOrNotFoundMessageEnum1 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreePostFindOneOrNotFoundCodeEnum2 = 0;

/** error message */
export type FreePostFindOneOrNotFoundMessageEnum2 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreePostPutUpdateCodeEnum = 1;

/** error message */
export type FreePostPutUpdateMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreePostPutUpdateCodeEnum1 = 3;

/** error message */
export type FreePostPutUpdateMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type FreePostPutUpdateCodeEnum2 = 4;

/** error message */
export type FreePostPutUpdateMessageEnum2 = "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type FreePostPutUpdateCodeEnum3 = 5;

/** error message */
export type FreePostPutUpdateMessageEnum3 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreePostPutUpdateCodeEnum4 = 0;

/** error message */
export type FreePostPutUpdateMessageEnum4 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreePostPatchUpdateCodeEnum = 1 | 6;

/** error message */
export type FreePostPatchUpdateMessageEnum =
  | "Invalid request parameter. Please check your request."
  | "At least one update field must exist.";

/**
 * error code
 * @example 3
 */
export type FreePostPatchUpdateCodeEnum1 = 3;

/** error message */
export type FreePostPatchUpdateMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type FreePostPatchUpdateCodeEnum2 = 4;

/** error message */
export type FreePostPatchUpdateMessageEnum2 = "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type FreePostPatchUpdateCodeEnum3 = 5;

/** error message */
export type FreePostPatchUpdateMessageEnum3 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreePostPatchUpdateCodeEnum4 = 0;

/** error message */
export type FreePostPatchUpdateMessageEnum4 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreePostRemoveCodeEnum = 1;

/** error message */
export type FreePostRemoveMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreePostRemoveCodeEnum1 = 3;

/** error message */
export type FreePostRemoveMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type FreePostRemoveCodeEnum2 = 4;

/** error message */
export type FreePostRemoveMessageEnum2 = "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type FreePostRemoveCodeEnum3 = 5;

/** error message */
export type FreePostRemoveMessageEnum3 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreePostRemoveCodeEnum4 = 0;

/** error message */
export type FreePostRemoveMessageEnum4 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreePostIncrementHitCodeEnum = 1;

/** error message */
export type FreePostIncrementHitMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type FreePostIncrementHitCodeEnum1 = 5;

/** error message */
export type FreePostIncrementHitMessageEnum1 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreePostIncrementHitCodeEnum2 = 0;

/** error message */
export type FreePostIncrementHitMessageEnum2 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreePostCreateReactionCodeEnum = 1;

/** error message */
export type FreePostCreateReactionMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreePostCreateReactionCodeEnum1 = 3;

/** error message */
export type FreePostCreateReactionMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type FreePostCreateReactionCodeEnum2 = 5;

/** error message */
export type FreePostCreateReactionMessageEnum2 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 4000
 */
export type FreePostCreateReactionCodeEnum3 = 4000;

/** error message */
export type FreePostCreateReactionMessageEnum3 = "You've already liked it.";

/**
 * error code
 * @example 0
 */
export type FreePostCreateReactionCodeEnum4 = 0;

/** error message */
export type FreePostCreateReactionMessageEnum4 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreePostRemoveReactionCodeEnum = 1;

/** error message */
export type FreePostRemoveReactionMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreePostRemoveReactionCodeEnum1 = 3;

/** error message */
export type FreePostRemoveReactionMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type FreePostRemoveReactionCodeEnum2 = 5;

/** error message */
export type FreePostRemoveReactionMessageEnum2 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 4001
 */
export type FreePostRemoveReactionCodeEnum3 = 4001;

/** error message */
export type FreePostRemoveReactionMessageEnum3 = "You haven't liked it yet.";

/**
 * error code
 * @example 0
 */
export type FreePostRemoveReactionCodeEnum4 = 0;

/** error message */
export type FreePostRemoveReactionMessageEnum4 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreePostCommentCreateCodeEnum = 1;

/** error message */
export type FreePostCommentCreateMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreePostCommentCreateCodeEnum1 = 3;

/** error message */
export type FreePostCommentCreateMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type FreePostCommentCreateCodeEnum2 = 5;

/** error message */
export type FreePostCommentCreateMessageEnum2 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreePostCommentCreateCodeEnum3 = 0;

/** error message */
export type FreePostCommentCreateMessageEnum3 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreePostCommentFindAllAndCountCodeEnum = 1;

/** error message */
export type FreePostCommentFindAllAndCountMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type FreePostCommentFindAllAndCountCodeEnum1 = 5;

/** error message */
export type FreePostCommentFindAllAndCountMessageEnum1 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreePostCommentFindAllAndCountCodeEnum2 = 0;

/** error message */
export type FreePostCommentFindAllAndCountMessageEnum2 = "Server error. Please contact server developer";

export interface FreePostCommentFindAllAndCountParams {
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
   * 정렬 필드<br>csv 형태로 보내야합니다.<br>- 가 붙으면 내림차순 - 가 붙지 않으면 오름차순<br>허용된 filed: [id, userId, isAnonymous, createdAt, updatedAt]
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
export type FreePostCommentPutUpdateCodeEnum = 1;

/** error message */
export type FreePostCommentPutUpdateMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreePostCommentPutUpdateCodeEnum1 = 3;

/** error message */
export type FreePostCommentPutUpdateMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type FreePostCommentPutUpdateCodeEnum2 = 4;

/** error message */
export type FreePostCommentPutUpdateMessageEnum2 = "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type FreePostCommentPutUpdateCodeEnum3 = 5;

/** error message */
export type FreePostCommentPutUpdateMessageEnum3 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreePostCommentPutUpdateCodeEnum4 = 0;

/** error message */
export type FreePostCommentPutUpdateMessageEnum4 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreePostCommentRemoveCodeEnum = 1;

/** error message */
export type FreePostCommentRemoveMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreePostCommentRemoveCodeEnum1 = 3;

/** error message */
export type FreePostCommentRemoveMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type FreePostCommentRemoveCodeEnum2 = 4;

/** error message */
export type FreePostCommentRemoveMessageEnum2 = "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type FreePostCommentRemoveCodeEnum3 = 5;

/** error message */
export type FreePostCommentRemoveMessageEnum3 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreePostCommentRemoveCodeEnum4 = 0;

/** error message */
export type FreePostCommentRemoveMessageEnum4 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreePostCommentCreateReactionCodeEnum = 1;

/** error message */
export type FreePostCommentCreateReactionMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreePostCommentCreateReactionCodeEnum1 = 3;

/** error message */
export type FreePostCommentCreateReactionMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type FreePostCommentCreateReactionCodeEnum2 = 5;

/** error message */
export type FreePostCommentCreateReactionMessageEnum2 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 4000
 */
export type FreePostCommentCreateReactionCodeEnum3 = 4000;

/** error message */
export type FreePostCommentCreateReactionMessageEnum3 = "You've already liked it.";

/**
 * error code
 * @example 0
 */
export type FreePostCommentCreateReactionCodeEnum4 = 0;

/** error message */
export type FreePostCommentCreateReactionMessageEnum4 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreePostCommentRemoveReactionCodeEnum = 1;

/** error message */
export type FreePostCommentRemoveReactionMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreePostCommentRemoveReactionCodeEnum1 = 3;

/** error message */
export type FreePostCommentRemoveReactionMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type FreePostCommentRemoveReactionCodeEnum2 = 5;

/** error message */
export type FreePostCommentRemoveReactionMessageEnum2 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 4001
 */
export type FreePostCommentRemoveReactionCodeEnum3 = 4001;

/** error message */
export type FreePostCommentRemoveReactionMessageEnum3 = "You haven't liked it yet.";

/**
 * error code
 * @example 0
 */
export type FreePostCommentRemoveReactionCodeEnum4 = 0;

/** error message */
export type FreePostCommentRemoveReactionMessageEnum4 = "Server error. Please contact server developer";

/**
 * error code
 * @example 0
 */
export type AuthSocialCheckRegistrationCodeEnum = 0;

/** error message */
export type AuthSocialCheckRegistrationMessageEnum = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type AuthSocialSignUpCodeEnum = 1;

/** error message */
export type AuthSocialSignUpMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 2000
 */
export type AuthSocialSignUpCodeEnum1 = 2000 | 2001;

/** error message */
export type AuthSocialSignUpMessageEnum1 = "An email that already exists." | "A cell phone number that already exists.";

/**
 * error code
 * @example 0
 */
export type AuthSocialSignUpCodeEnum2 = 0;

/** error message */
export type AuthSocialSignUpMessageEnum2 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type AuthSocialSignInCodeEnum = 1 | 1000 | 1001;

/** error message */
export type AuthSocialSignInMessageEnum =
  | "Invalid request parameter. Please check your request."
  | "The account was not found."
  | "Your account information doesn't match.";

/**
 * error code
 * @example 0
 */
export type AuthSocialSignInCodeEnum1 = 0;

/** error message */
export type AuthSocialSignInMessageEnum1 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubFindAllAndCountCodeEnum = 1;

/** error message */
export type ClubFindAllAndCountMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 0
 */
export type ClubFindAllAndCountCodeEnum1 = 0;

/** error message */
export type ClubFindAllAndCountMessageEnum1 = "Server error. Please contact server developer";

export interface ClubFindAllAndCountParams {
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
  /** 동아리 명 */
  name?: string;
  /** 동아리 카테고리 ID */
  categoryId?: number;
  /** 동아리 태그 ID */
  tagId?: number;
  /**
   * 정렬 필드<br>csv 형태로 보내야합니다.<br>- 가 붙으면 내림차순 - 가 붙지 않으면 오름차순<br>허용된 filed: [id, name, createdAt]
   * @format csv
   * @default "id"
   * @example "-id,updatedAt"
   */
  order?: string;
}

/**
 * error code
 * @example 1
 */
export type AttachmentUploadFilesCodeEnum = 1;

/** error message */
export type AttachmentUploadFilesMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type AttachmentUploadFilesCodeEnum1 = 3;

/** error message */
export type AttachmentUploadFilesMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 0
 */
export type AttachmentUploadFilesCodeEnum2 = 0;

/** error message */
export type AttachmentUploadFilesMessageEnum2 = "Server error. Please contact server developer";

export interface AttachmentUploadFilesPayload {
  files?: File[];
}

/**
 * error code
 * @example 1
 */
export type DevGetAccessTokenCodeEnum = 1;

/** error message */
export type DevGetAccessTokenMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 0
 */
export type DevGetAccessTokenCodeEnum1 = 0;

/** error message */
export type DevGetAccessTokenMessageEnum1 = "Server error. Please contact server developer";

/**
 * error code
 * @example 0
 */
export type DevFindAllErrorCodeCodeEnum = 0;

/** error message */
export type DevFindAllErrorCodeMessageEnum = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type PostFindAllAndCountCodeEnum = 1;

/** error message */
export type PostFindAllAndCountMessageEnum = "Invalid request parameter. Please check your request.";

export interface PostFindAllAndCountParams {
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
   * 게시글 작성자 고유 ID 필터링
   * @format integer
   */
  userId?: number;
  /** title 필터링 */
  title?: string;
  /**
   * 정렬 필드<br>csv 형태로 보내야합니다.<br>- 가 붙으면 내림차순 - 가 붙지 않으면 오름차순<br>허용된 filed: [userId, title, hit, createdAt, updatedAt]
   * @format csv
   * @default "id"
   * @example "-id,updatedAt"
   */
  order?: string;
}
