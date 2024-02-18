declare global {
  namespace Swagger {
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
  /** 유저 이름 */
  name: string;
  /**
   * 이메일
   * @format email
   */
  email: string;
  /** SNS 토큰 */
  snsToken: string;
  /** 유저 로그인 타입 */
  loginType: UserDtoLoginTypeEnum;
  /** 유저 role */
  role: UserDtoRoleEnum;
  /**
   * 학년 (0이면 졸업)
   * @min 0
   * @max 4
   */
  grade: number | null;
  /** 성별 */
  gender: UserDtoGenderEnum;
  /**
   * 핸드폰 번호
   * @format /^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/
   * @example "010-0000-0000"
   */
  phoneNumber: string | null;
  /**
   * profile image path
   * @example "path/user-image.jpeg"
   */
  profilePath: string | null;
}

export interface UserDetailResponseDto {
  user: UserDto;
}

export interface CreateUserRequestBodyDto {
  /** login type 현재 email 만 */
  loginType: CreateUserRequestBodyDtoLoginTypeEnum;
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
  role: CreateUserRequestBodyDtoRoleEnum;
  /**
   * password (email 로그인시에만 패턴 검사를 진행합니다.)
   * @pattern /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/
   */
  password: string | null;
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
  gender: CreateUserRequestBodyDtoGenderEnum;
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

export type UserLoginType = "email" | "KAKAO" | "GOOGLE" | "NAVER";

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
  name: string;
  /**
   * email
   * @format email
   */
  email: string;
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

/** 유저 로그인 타입 */
export type UserDtoLoginTypeEnum = "email" | "KAKAO" | "GOOGLE" | "NAVER";

/** 유저 role */
export type UserDtoRoleEnum = "admin" | "student";

/** 성별 */
export type UserDtoGenderEnum = "male" | "female";

/** login type 현재 email 만 */
export type CreateUserRequestBodyDtoLoginTypeEnum = "email" | "KAKAO" | "GOOGLE" | "NAVER";

/** role */
export type CreateUserRequestBodyDtoRoleEnum = "admin" | "student";

/** gender */
export type CreateUserRequestBodyDtoGenderEnum = "male" | "female";

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
 * @example 3
 */
export type AuthGetAccessTokenCodeEnum = 3;

/** error message */
export type AuthGetAccessTokenMessageEnum = "This token is invalid.";

/**
 * error code
 * @example 1
 */
export type UsersCreateCodeEnum = 1;

/** error message */
export type UsersCreateMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 2000
 */
export type UsersCreateCodeEnum1 = 2000 | 2001;

/** error message */
export type UsersCreateMessageEnum1 = "An email that already exists." | "A cell phone number that already exists.";

/**
 * error code
 * @example 0
 */
export type UsersCreateCodeEnum2 = 0;

/** error message */
export type UsersCreateMessageEnum2 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FindOneUserOrNotFoundCodeEnum = 1;

/** error message */
export type FindOneUserOrNotFoundMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type FindOneUserOrNotFoundCodeEnum1 = 5;

/** error message */
export type FindOneUserOrNotFoundMessageEnum1 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 1
 */
export type PutUpdateUserCodeEnum = 1;

/** error message */
export type PutUpdateUserMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type PutUpdateUserCodeEnum1 = 3;

/** error message */
export type PutUpdateUserMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type PutUpdateUserCodeEnum2 = 4;

/** error message */
export type PutUpdateUserMessageEnum2 = "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type PutUpdateUserCodeEnum3 = 5;

/** error message */
export type PutUpdateUserMessageEnum3 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type PutUpdateUserCodeEnum4 = 0;

/** error message */
export type PutUpdateUserMessageEnum4 = "Server error. Please contact server developer";

/**
 * error code
 * @example 0
 */
export type GetAllMajorsCodeEnum = 0;

/** error message */
export type GetAllMajorsMessageEnum = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type CreateNewMajorCodeEnum = 1;

/** error message */
export type CreateNewMajorMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3000
 */
export type CreateNewMajorCodeEnum1 = 3000 | 3001;

/** error message */
export type CreateNewMajorMessageEnum1 = "Major name that already exists" | "Major code that already exists.";

/**
 * error code
 * @example 0
 */
export type CreateNewMajorCodeEnum2 = 0;

/** error message */
export type CreateNewMajorMessageEnum2 = "Server error. Please contact server developer";

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
   * 정렬 필드<br>csv 형태로 보내야합니다.<br>- 가 붙으면 내림차순 - 가 붙지 않으면 오름차순<br>허용된 filed: [id, userId, title, hit, isAnonymous, createdAt, updatedAt]
   * @format csv
   * @default "id"
   * @example "-id,updatedAt"
   */
  order?: string;
  freePostId: number;
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
 * @example 1
 */
export type FreePostReplyCommentCreateCodeEnum = 1;

/** error message */
export type FreePostReplyCommentCreateMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreePostReplyCommentCreateCodeEnum1 = 3;

/** error message */
export type FreePostReplyCommentCreateMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type FreePostReplyCommentCreateCodeEnum2 = 5;

/** error message */
export type FreePostReplyCommentCreateMessageEnum2 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreePostReplyCommentCreateCodeEnum3 = 0;

/** error message */
export type FreePostReplyCommentCreateMessageEnum3 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreePostReplyCommentFindAllAndCountCodeEnum = 1;

/** error message */
export type FreePostReplyCommentFindAllAndCountMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type FreePostReplyCommentFindAllAndCountCodeEnum1 = 5;

/** error message */
export type FreePostReplyCommentFindAllAndCountMessageEnum1 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreePostReplyCommentFindAllAndCountCodeEnum2 = 0;

/** error message */
export type FreePostReplyCommentFindAllAndCountMessageEnum2 = "Server error. Please contact server developer";

export interface FreePostReplyCommentFindAllAndCountParams {
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
  freePostId: number;
  freePostCommentId: number;
}

/**
 * error code
 * @example 1
 */
export type FreePostReplyCommentPutUpdateCodeEnum = 1;

/** error message */
export type FreePostReplyCommentPutUpdateMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreePostReplyCommentPutUpdateCodeEnum1 = 3;

/** error message */
export type FreePostReplyCommentPutUpdateMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type FreePostReplyCommentPutUpdateCodeEnum2 = 4;

/** error message */
export type FreePostReplyCommentPutUpdateMessageEnum2 = "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type FreePostReplyCommentPutUpdateCodeEnum3 = 5;

/** error message */
export type FreePostReplyCommentPutUpdateMessageEnum3 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreePostReplyCommentPutUpdateCodeEnum4 = 0;

/** error message */
export type FreePostReplyCommentPutUpdateMessageEnum4 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreePostReplyCommentRemoveCodeEnum = 1;

/** error message */
export type FreePostReplyCommentRemoveMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreePostReplyCommentRemoveCodeEnum1 = 3;

/** error message */
export type FreePostReplyCommentRemoveMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type FreePostReplyCommentRemoveCodeEnum2 = 4;

/** error message */
export type FreePostReplyCommentRemoveMessageEnum2 = "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type FreePostReplyCommentRemoveCodeEnum3 = 5;

/** error message */
export type FreePostReplyCommentRemoveMessageEnum3 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreePostReplyCommentRemoveCodeEnum4 = 0;

/** error message */
export type FreePostReplyCommentRemoveMessageEnum4 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreePostReplyCommentCreateReactionCodeEnum = 1;

/** error message */
export type FreePostReplyCommentCreateReactionMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreePostReplyCommentCreateReactionCodeEnum1 = 3;

/** error message */
export type FreePostReplyCommentCreateReactionMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type FreePostReplyCommentCreateReactionCodeEnum2 = 5;

/** error message */
export type FreePostReplyCommentCreateReactionMessageEnum2 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 4000
 */
export type FreePostReplyCommentCreateReactionCodeEnum3 = 4000;

/** error message */
export type FreePostReplyCommentCreateReactionMessageEnum3 = "You've already liked it.";

/**
 * error code
 * @example 0
 */
export type FreePostReplyCommentCreateReactionCodeEnum4 = 0;

/** error message */
export type FreePostReplyCommentCreateReactionMessageEnum4 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreePostReplyCommentRemoveReactionCodeEnum = 1;

/** error message */
export type FreePostReplyCommentRemoveReactionMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreePostReplyCommentRemoveReactionCodeEnum1 = 3;

/** error message */
export type FreePostReplyCommentRemoveReactionMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type FreePostReplyCommentRemoveReactionCodeEnum2 = 5;

/** error message */
export type FreePostReplyCommentRemoveReactionMessageEnum2 = "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 4001
 */
export type FreePostReplyCommentRemoveReactionCodeEnum3 = 4001;

/** error message */
export type FreePostReplyCommentRemoveReactionMessageEnum3 = "You haven't liked it yet.";

/**
 * error code
 * @example 0
 */
export type FreePostReplyCommentRemoveReactionCodeEnum4 = 0;

/** error message */
export type FreePostReplyCommentRemoveReactionMessageEnum4 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type SignupCodeEnum = 1;

/** error message */
export type SignupMessageEnum = "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 2000
 */
export type SignupCodeEnum1 = 2000 | 2001;

/** error message */
export type SignupMessageEnum1 = "An email that already exists." | "A cell phone number that already exists.";

/**
 * error code
 * @example 0
 */
export type SignupCodeEnum2 = 0;

/** error message */
export type SignupMessageEnum2 = "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type AuthSignInCodeEnum2 = 1 | 1000 | 1001;

/** error message */
export type AuthSignInMessageEnum2 =
  | "Invalid request parameter. Please check your request."
  | "The account was not found."
  | "Your account information doesn't match.";

/**
 * error code
 * @example 0
 */
export type AuthSignInCodeEnum3 = 0;

/** error message */
export type AuthSignInMessageEnum3 = "Server error. Please contact server developer";

export namespace Api {
  /**
   * @description 서버에서 관리하는 에러코드를 조회합니다.
   * @tags root
   * @name GetFindAllErrorCode
   * @summary 개발용으로 생성된 에러코드 전체조회
   * @request GET:/api/error-code
   */
  export namespace GetFindAllErrorCode {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags auth
   * @name AuthSignIn
   * @summary 로그인
   * @request POST:/api/auth/sign-in
   */
  export namespace AuthSignIn {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SignInRequestBodyDto;
    export type RequestHeaders = {};
    export type ResponseBody = {
      /** access token */
      accessToken?: string;
    };
  }
  /**
   * No description
   * @tags auth
   * @name AuthGetProfile
   * @summary 로그인한 유저 정보 조회
   * @request GET:/api/auth/profile
   * @secure
   */
  export namespace AuthGetProfile {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserDetailResponseDto;
  }
  /**
   * No description
   * @tags auth
   * @name AuthGetAccessToken
   * @summary 개발용으로 생성된 accessToken 생성 api
   * @request GET:/api/auth/access-token/{userId}
   * @secure
   */
  export namespace AuthGetAccessToken {
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
   * @name UsersCreate
   * @summary 유저 생성(회원가입)
   * @request POST:/api/users
   */
  export namespace UsersCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateUserRequestBodyDto;
    export type RequestHeaders = {};
    export type ResponseBody = UserDetailResponseDto;
  }
  /**
   * No description
   * @tags users
   * @name FindOneUserOrNotFound
   * @summary 유저 정보 단일 조회
   * @request GET:/api/users/{userId}
   */
  export namespace FindOneUserOrNotFound {
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
   * @name PutUpdateUser
   * @summary 유저 정보 업데이트
   * @request PUT:/api/users/{userId}
   * @secure
   */
  export namespace PutUpdateUser {
    export type RequestParams = {
      userId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = PutUpdateUserDto;
    export type RequestHeaders = {};
    export type ResponseBody = UserDetailResponseDto;
  }
  /**
   * No description
   * @tags majors
   * @name GetAllMajors
   * @summary 전공 목록 전체 조회
   * @request GET:/api/majors
   */
  export namespace GetAllMajors {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MajorsCommonResponseDto;
  }
  /**
   * No description
   * @tags majors
   * @name CreateNewMajor
   * @summary 전공 코드 및 이름 생성
   * @request POST:/api/majors
   */
  export namespace CreateNewMajor {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateMajorRequestBodyDto;
    export type RequestHeaders = {};
    export type ResponseBody = MajorDetailResponseDto;
  }
  /**
   * No description
   * @tags notice-posts
   * @name NoticePostCreate
   * @summary 공지 게시글 생성 API
   * @request POST:/api/notice-posts
   * @secure
   */
  export namespace NoticePostCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateNoticePostDto;
    export type RequestHeaders = {};
    export type ResponseBody = NoticePostDetailResponseDto;
  }
  /**
   * No description
   * @tags notice-posts
   * @name NoticePostFindAllAndCount
   * @summary 공지 게시글 전체조회(pagination)
   * @request GET:/api/notice-posts
   */
  export namespace NoticePostFindAllAndCount {
    export type RequestParams = {};
    export type RequestQuery = {
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
      isAllowComment?: NoticePostFindAllAndCountParams1IsAllowCommentEnum;
      /**
       * 정렬 필드<br>csv 형태로 보내야합니다.<br>- 가 붙으면 내림차순 - 가 붙지 않으면 오름차순<br>허용된 filed: [id, userId, title, hit, isAllowComment, createdAt, updatedAt]
       * @format csv
       * @default "id"
       * @example "-id,updatedAt"
       */
      order?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = NoticePostsPaginationResponseDto;
  }
  /**
   * No description
   * @tags notice-posts
   * @name NoticePostFindOneOrNotFound
   * @summary 공지게시글 상세조회
   * @request GET:/api/notice-posts/{noticePostId}
   */
  export namespace NoticePostFindOneOrNotFound {
    export type RequestParams = {
      noticePostId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = NoticePostDetailResponseDto;
  }
  /**
   * No description
   * @tags notice-posts
   * @name NoticePostPutUpdate
   * @summary 공지게시글 수정
   * @request PUT:/api/notice-posts/{noticePostId}
   * @secure
   */
  export namespace NoticePostPutUpdate {
    export type RequestParams = {
      noticePostId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = PutUpdateNoticePostDto;
    export type RequestHeaders = {};
    export type ResponseBody = NoticePostDetailResponseDto;
  }
  /**
   * No description
   * @tags notice-posts
   * @name NoticePostPatchUpdate
   * @summary 공지게시글 patch 수정
   * @request PATCH:/api/notice-posts/{noticePostId}
   * @secure
   */
  export namespace NoticePostPatchUpdate {
    export type RequestParams = {
      noticePostId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = PatchUpdateNoticePostDto;
    export type RequestHeaders = {};
    export type ResponseBody = NoticePostDetailResponseDto;
  }
  /**
   * No description
   * @tags notice-posts
   * @name NoticePostRemove
   * @summary 공지 게시글 삭제
   * @request DELETE:/api/notice-posts/{noticePostId}
   * @secure
   */
  export namespace NoticePostRemove {
    export type RequestParams = {
      noticePostId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = NoticePostDeleteResponseDto;
  }
  /**
   * No description
   * @tags notice-posts
   * @name NoticePostIncreaseHit
   * @summary 조회수 1 증가
   * @request PUT:/api/notice-posts/{noticePostId}/hit
   */
  export namespace NoticePostIncreaseHit {
    export type RequestParams = {
      noticePostId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags free-posts
   * @name FreePostCreate
   * @summary 자유 게시글 생성
   * @request POST:/api/free-posts
   * @secure
   */
  export namespace FreePostCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateFreePostDto;
    export type RequestHeaders = {};
    export type ResponseBody = FreePostDetailResponseDto;
  }
  /**
   * No description
   * @tags free-posts
   * @name FreePostFindAllAndCount
   * @summary 자유 게시글 전체조회(pagination)
   * @request GET:/api/free-posts
   */
  export namespace FreePostFindAllAndCount {
    export type RequestParams = {};
    export type RequestQuery = {
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
      isAnonymous?: FreePostFindAllAndCountParams1IsAnonymousEnum;
      /**
       * 정렬 필드<br>csv 형태로 보내야합니다.<br>- 가 붙으면 내림차순 - 가 붙지 않으면 오름차순<br>허용된 filed: [id, userId, title, hit, isAnonymous, createdAt, updatedAt]
       * @format csv
       * @default "id"
       * @example "-id,updatedAt"
       */
      order?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FreePostsPaginationResponseDto;
  }
  /**
   * No description
   * @tags free-posts
   * @name FreePostFindOneOrNotFound
   * @summary 자유게시글 상세조회
   * @request GET:/api/free-posts/{freePostId}
   */
  export namespace FreePostFindOneOrNotFound {
    export type RequestParams = {
      freePostId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FreePostDetailResponseDto;
  }
  /**
   * No description
   * @tags free-posts
   * @name FreePostPutUpdate
   * @summary 자유게시글 수정
   * @request PUT:/api/free-posts/{freePostId}
   * @secure
   */
  export namespace FreePostPutUpdate {
    export type RequestParams = {
      freePostId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = PutUpdateFreePostDto;
    export type RequestHeaders = {};
    export type ResponseBody = FreePostDetailResponseDto;
  }
  /**
   * No description
   * @tags free-posts
   * @name FreePostPatchUpdate
   * @summary 자유게시글 부분 수정
   * @request PATCH:/api/free-posts/{freePostId}
   * @secure
   */
  export namespace FreePostPatchUpdate {
    export type RequestParams = {
      freePostId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = PatchUpdateFreePostDto;
    export type RequestHeaders = {};
    export type ResponseBody = FreePostDetailResponseDto;
  }
  /**
   * No description
   * @tags free-posts
   * @name FreePostRemove
   * @summary 자유게시글 삭제
   * @request DELETE:/api/free-posts/{freePostId}
   * @secure
   */
  export namespace FreePostRemove {
    export type RequestParams = {
      freePostId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FreePostDeleteResponseDto;
  }
  /**
   * No description
   * @tags free-posts
   * @name FreePostIncrementHit
   * @summary 조회수 증가(1)
   * @request PUT:/api/free-posts/{freePostId}/hit
   */
  export namespace FreePostIncrementHit {
    export type RequestParams = {
      freePostId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags free-posts
   * @name FreePostCreateReaction
   * @summary 자유 게시글 reaction 생성
   * @request POST:/api/free-posts/{freePostId}/reaction
   * @secure
   */
  export namespace FreePostCreateReaction {
    export type RequestParams = {
      freePostId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = CreateReactionDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags free-posts
   * @name FreePostRemoveReaction
   * @summary 자유 게시글 reaction 삭제
   * @request DELETE:/api/free-posts/{freePostId}/reaction
   * @secure
   */
  export namespace FreePostRemoveReaction {
    export type RequestParams = {
      freePostId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = RemoveReactionDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags free-posts
   * @name FreePostCommentCreate
   * @summary 자유 게시글 댓글 생성
   * @request POST:/api/free-posts/{freePostId}/comments
   * @secure
   */
  export namespace FreePostCommentCreate {
    export type RequestParams = {
      freePostId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = CreateFreePostCommentDto;
    export type RequestHeaders = {};
    export type ResponseBody = FreePostCommentDetailResponseDto;
  }
  /**
   * No description
   * @tags free-posts
   * @name FreePostCommentFindAllAndCount
   * @summary 자유 게시글 댓글 전체조회(pagination)
   * @request GET:/api/free-posts/{freePostId}/comments
   */
  export namespace FreePostCommentFindAllAndCount {
    export type RequestParams = {
      freePostId: number;
    };
    export type RequestQuery = {
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FreePostCommentsPaginationResponseDto;
  }
  /**
   * No description
   * @tags free-posts
   * @name FreePostCommentPutUpdate
   * @summary 자유게시글 댓글 수정
   * @request PUT:/api/free-posts/{freePostId}/comments/{freePostCommentId}
   * @secure
   */
  export namespace FreePostCommentPutUpdate {
    export type RequestParams = {
      freePostId: number;
      freePostCommentId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = PutUpdateFreePostCommentDto;
    export type RequestHeaders = {};
    export type ResponseBody = FreePostCommentDetailResponseDto;
  }
  /**
   * No description
   * @tags free-posts
   * @name FreePostCommentRemove
   * @summary 자유게시글 댓글 삭제
   * @request DELETE:/api/free-posts/{freePostId}/comments/{freePostCommentId}
   * @secure
   */
  export namespace FreePostCommentRemove {
    export type RequestParams = {
      freePostId: number;
      freePostCommentId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FreePostDeleteResponseDto;
  }
  /**
   * No description
   * @tags free-posts
   * @name FreePostCommentCreateReaction
   * @summary 자유 게시글 댓글 reaction 생성
   * @request POST:/api/free-posts/{freePostId}/comments/{freePostCommentId}/reaction
   * @secure
   */
  export namespace FreePostCommentCreateReaction {
    export type RequestParams = {
      freePostId: number;
      freePostCommentId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = CreateReactionDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags free-posts
   * @name FreePostCommentRemoveReaction
   * @summary 자유 게시글 댓글 reaction 삭제
   * @request DELETE:/api/free-posts/{freePostId}/comments/{freePostCommentId}/reaction
   * @secure
   */
  export namespace FreePostCommentRemoveReaction {
    export type RequestParams = {
      freePostId: number;
      freePostCommentId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = RemoveReactionDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags free-posts
   * @name FreePostReplyCommentCreate
   * @summary 자유 게시글 대댓글 생성
   * @request POST:/api/free-posts/{freePostId}/comments/{freePostCommentId}/reply
   * @secure
   */
  export namespace FreePostReplyCommentCreate {
    export type RequestParams = {
      freePostId: number;
      freePostCommentId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = CreateFreePostReplyCommentDto;
    export type RequestHeaders = {};
    export type ResponseBody = FreePostReplyCommentDetailResponseDto;
  }
  /**
   * No description
   * @tags free-posts
   * @name FreePostReplyCommentFindAllAndCount
   * @summary 자유 게시글 대댓글 전체조회(pagination)
   * @request GET:/api/free-posts/{freePostId}/comments/{freePostCommentId}/reply
   */
  export namespace FreePostReplyCommentFindAllAndCount {
    export type RequestParams = {
      freePostId: number;
      freePostCommentId: number;
    };
    export type RequestQuery = {
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
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FreePostReplyCommentsPaginationResponseDto;
  }
  /**
   * No description
   * @tags free-posts
   * @name FreePostReplyCommentPutUpdate
   * @summary 자유게시글 대댓글 수정
   * @request PUT:/api/free-posts/{freePostId}/comments/{freePostCommentId}/reply/{freePostReplyCommentId}
   * @secure
   */
  export namespace FreePostReplyCommentPutUpdate {
    export type RequestParams = {
      freePostId: number;
      freePostCommentId: number;
      freePostReplyCommentId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = PutUpdateFreePostReplyCommentDto;
    export type RequestHeaders = {};
    export type ResponseBody = FreePostReplyCommentDetailResponseDto;
  }
  /**
   * No description
   * @tags free-posts
   * @name FreePostReplyCommentRemove
   * @summary 자유게시글 대댓글 삭제
   * @request DELETE:/api/free-posts/{freePostId}/comments/{freePostCommentId}/reply/{freePostReplyCommentId}
   * @secure
   */
  export namespace FreePostReplyCommentRemove {
    export type RequestParams = {
      freePostId: number;
      freePostCommentId: number;
      freePostReplyCommentId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FreePostDeleteResponseDto;
  }
  /**
   * No description
   * @tags free-posts
   * @name FreePostReplyCommentCreateReaction
   * @summary 자유 게시글 대댓글 reaction 생성
   * @request POST:/api/free-posts/{freePostId}/comments/{freePostCommentId}/reply/{freePostReplyCommentId}/reaction
   * @secure
   */
  export namespace FreePostReplyCommentCreateReaction {
    export type RequestParams = {
      freePostId: number;
      freePostCommentId: number;
      freePostReplyCommentId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = CreateReactionDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags free-posts
   * @name FreePostReplyCommentRemoveReaction
   * @summary 자유 게시글 대댓글 reaction 삭제
   * @request DELETE:/api/free-posts/{freePostId}/comments/{freePostCommentId}/reply/{freePostReplyCommentId}/reaction
   * @secure
   */
  export namespace FreePostReplyCommentRemoveReaction {
    export type RequestParams = {
      freePostId: number;
      freePostCommentId: number;
      freePostReplyCommentId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = RemoveReactionDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags auth-social
   * @name CheckRegistration
   * @summary 소셜 유저 프로필 유무 조회
   * @request POST:/api/auth/social/check-registration
   */
  export namespace CheckRegistration {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CheckRegistrationRequestBodyDto;
    export type RequestHeaders = {};
    export type ResponseBody = boolean;
  }
  /**
   * No description
   * @tags auth-social
   * @name Signup
   * @summary 소셜 회원가입
   * @request POST:/api/auth/social/signup
   */
  export namespace Signup {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SignUpRequestBodyDto;
    export type RequestHeaders = {};
    export type ResponseBody = UserDetailResponseDto;
  }
  /**
   * No description
   * @tags auth-social
   * @name AuthSignIn2
   * @summary 소셜 로그인
   * @request POST:/api/auth/social/signin
   * @originalName authSignIn
   * @duplicate
   */
  export namespace AuthSignIn2 {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SignInRequestBodyDto;
    export type RequestHeaders = {};
    export type ResponseBody = {
      /** access token */
      accessToken?: string;
    };
  }
}
	
    }
  }
  export {};
