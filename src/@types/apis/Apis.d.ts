declare global {
  namespace Swagger {
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
    export type FreePostCreateCodeEnum = 1;

    /** error message */
    export type FreePostCreateMessageEnum =
      "Invalid request parameter. Please check your request.";

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
    export type FreePostCreateMessageEnum2 =
      "Server error. Please contact server developer";

    /**
     * error code
     * @example 1
     */
    export type FreePostFindAllAndCountCodeEnum = 1;

    /** error message */
    export type FreePostFindAllAndCountMessageEnum =
      "Invalid request parameter. Please check your request.";

    /**
     * error code
     * @example 0
     */
    export type FreePostFindAllAndCountCodeEnum1 = 0;

    /** error message */
    export type FreePostFindAllAndCountMessageEnum1 =
      "Server error. Please contact server developer";

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
    export type FreePostFindAllAndCountParams1IsAnonymousEnum =
      | "true"
      | "false"
      | "0"
      | "1";

    /**
     * error code
     * @example 1
     */
    export type FreePostFindOneOrNotFoundCodeEnum = 1;

    /** error message */
    export type FreePostFindOneOrNotFoundMessageEnum =
      "Invalid request parameter. Please check your request.";

    /**
     * error code
     * @example 5
     */
    export type FreePostFindOneOrNotFoundCodeEnum1 = 5;

    /** error message */
    export type FreePostFindOneOrNotFoundMessageEnum1 =
      "The resource you're trying to access doesn't exist.";

    /**
     * error code
     * @example 0
     */
    export type FreePostFindOneOrNotFoundCodeEnum2 = 0;

    /** error message */
    export type FreePostFindOneOrNotFoundMessageEnum2 =
      "Server error. Please contact server developer";

    /**
     * error code
     * @example 1
     */
    export type FreePostPutUpdateCodeEnum = 1;

    /** error message */
    export type FreePostPutUpdateMessageEnum =
      "Invalid request parameter. Please check your request.";

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
    export type FreePostPutUpdateMessageEnum2 =
      "You don't have permission to access it.";

    /**
     * error code
     * @example 5
     */
    export type FreePostPutUpdateCodeEnum3 = 5;

    /** error message */
    export type FreePostPutUpdateMessageEnum3 =
      "The resource you're trying to access doesn't exist.";

    /**
     * error code
     * @example 0
     */
    export type FreePostPutUpdateCodeEnum4 = 0;

    /** error message */
    export type FreePostPutUpdateMessageEnum4 =
      "Server error. Please contact server developer";

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
    export type FreePostPatchUpdateMessageEnum2 =
      "You don't have permission to access it.";

    /**
     * error code
     * @example 5
     */
    export type FreePostPatchUpdateCodeEnum3 = 5;

    /** error message */
    export type FreePostPatchUpdateMessageEnum3 =
      "The resource you're trying to access doesn't exist.";

    /**
     * error code
     * @example 0
     */
    export type FreePostPatchUpdateCodeEnum4 = 0;

    /** error message */
    export type FreePostPatchUpdateMessageEnum4 =
      "Server error. Please contact server developer";

    /**
     * error code
     * @example 1
     */
    export type FreePostRemoveCodeEnum = 1;

    /** error message */
    export type FreePostRemoveMessageEnum =
      "Invalid request parameter. Please check your request.";

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
    export type FreePostRemoveMessageEnum2 =
      "You don't have permission to access it.";

    /**
     * error code
     * @example 5
     */
    export type FreePostRemoveCodeEnum3 = 5;

    /** error message */
    export type FreePostRemoveMessageEnum3 =
      "The resource you're trying to access doesn't exist.";

    /**
     * error code
     * @example 0
     */
    export type FreePostRemoveCodeEnum4 = 0;

    /** error message */
    export type FreePostRemoveMessageEnum4 =
      "Server error. Please contact server developer";

    /**
     * error code
     * @example 1
     */
    export type FreePostIncrementHitCodeEnum = 1;

    /** error message */
    export type FreePostIncrementHitMessageEnum =
      "Invalid request parameter. Please check your request.";

    /**
     * error code
     * @example 5
     */
    export type FreePostIncrementHitCodeEnum1 = 5;

    /** error message */
    export type FreePostIncrementHitMessageEnum1 =
      "The resource you're trying to access doesn't exist.";

    /**
     * error code
     * @example 0
     */
    export type FreePostIncrementHitCodeEnum2 = 0;

    /** error message */
    export type FreePostIncrementHitMessageEnum2 =
      "Server error. Please contact server developer";

    /**
     * error code
     * @example 1
     */
    export type FreePostCreateReactionCodeEnum = 1;

    /** error message */
    export type FreePostCreateReactionMessageEnum =
      "Invalid request parameter. Please check your request.";

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
    export type FreePostCreateReactionMessageEnum2 =
      "The resource you're trying to access doesn't exist.";

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
    export type FreePostCreateReactionMessageEnum4 =
      "Server error. Please contact server developer";

    /**
     * error code
     * @example 1
     */
    export type FreePostRemoveReactionCodeEnum = 1;

    /** error message */
    export type FreePostRemoveReactionMessageEnum =
      "Invalid request parameter. Please check your request.";

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
    export type FreePostRemoveReactionMessageEnum2 =
      "The resource you're trying to access doesn't exist.";

    /**
     * error code
     * @example 4001
     */
    export type FreePostRemoveReactionCodeEnum3 = 4001;

    /** error message */
    export type FreePostRemoveReactionMessageEnum3 =
      "You haven't liked it yet.";

    /**
     * error code
     * @example 0
     */
    export type FreePostRemoveReactionCodeEnum4 = 0;

    /** error message */
    export type FreePostRemoveReactionMessageEnum4 =
      "Server error. Please contact server developer";

    /**
     * error code
     * @example 1
     */
    export type FreePostcommentCreateCodeEnum = 1;

    /** error message */
    export type FreePostcommentCreateMessageEnum =
      "Invalid request parameter. Please check your request.";

    /**
     * error code
     * @example 3
     */
    export type FreePostcommentCreateCodeEnum1 = 3;

    /** error message */
    export type FreePostcommentCreateMessageEnum1 = "This token is invalid.";

    /**
     * error code
     * @example 5
     */
    export type FreePostcommentCreateCodeEnum2 = 5;

    /** error message */
    export type FreePostcommentCreateMessageEnum2 =
      "The resource you're trying to access doesn't exist.";

    /**
     * error code
     * @example 0
     */
    export type FreePostcommentCreateCodeEnum3 = 0;

    /** error message */
    export type FreePostcommentCreateMessageEnum3 =
      "Server error. Please contact server developer";

    /**
     * error code
     * @example 1
     */
    export type FreePostcommentFindAllAndCountCodeEnum = 1;

    /** error message */
    export type FreePostcommentFindAllAndCountMessageEnum =
      "Invalid request parameter. Please check your request.";

    /**
     * error code
     * @example 5
     */
    export type FreePostcommentFindAllAndCountCodeEnum1 = 5;

    /** error message */
    export type FreePostcommentFindAllAndCountMessageEnum1 =
      "The resource you're trying to access doesn't exist.";

    /**
     * error code
     * @example 0
     */
    export type FreePostcommentFindAllAndCountCodeEnum2 = 0;

    /** error message */
    export type FreePostcommentFindAllAndCountMessageEnum2 =
      "Server error. Please contact server developer";

    export interface FreePostcommentFindAllAndCountParams {
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
    export type FreePostcommentPutUpdateCodeEnum = 1;

    /** error message */
    export type FreePostcommentPutUpdateMessageEnum =
      "Invalid request parameter. Please check your request.";

    /**
     * error code
     * @example 3
     */
    export type FreePostcommentPutUpdateCodeEnum1 = 3;

    /** error message */
    export type FreePostcommentPutUpdateMessageEnum1 = "This token is invalid.";

    /**
     * error code
     * @example 4
     */
    export type FreePostcommentPutUpdateCodeEnum2 = 4;

    /** error message */
    export type FreePostcommentPutUpdateMessageEnum2 =
      "You don't have permission to access it.";

    /**
     * error code
     * @example 5
     */
    export type FreePostcommentPutUpdateCodeEnum3 = 5;

    /** error message */
    export type FreePostcommentPutUpdateMessageEnum3 =
      "The resource you're trying to access doesn't exist.";

    /**
     * error code
     * @example 0
     */
    export type FreePostcommentPutUpdateCodeEnum4 = 0;

    /** error message */
    export type FreePostcommentPutUpdateMessageEnum4 =
      "Server error. Please contact server developer";

    /**
     * error code
     * @example 1
     */
    export type FreePostcommentRemoveCodeEnum = 1;

    /** error message */
    export type FreePostcommentRemoveMessageEnum =
      "Invalid request parameter. Please check your request.";

    /**
     * error code
     * @example 3
     */
    export type FreePostcommentRemoveCodeEnum1 = 3;

    /** error message */
    export type FreePostcommentRemoveMessageEnum1 = "This token is invalid.";

    /**
     * error code
     * @example 4
     */
    export type FreePostcommentRemoveCodeEnum2 = 4;

    /** error message */
    export type FreePostcommentRemoveMessageEnum2 =
      "You don't have permission to access it.";

    /**
     * error code
     * @example 5
     */
    export type FreePostcommentRemoveCodeEnum3 = 5;

    /** error message */
    export type FreePostcommentRemoveMessageEnum3 =
      "The resource you're trying to access doesn't exist.";

    /**
     * error code
     * @example 0
     */
    export type FreePostcommentRemoveCodeEnum4 = 0;

    /** error message */
    export type FreePostcommentRemoveMessageEnum4 =
      "Server error. Please contact server developer";

    /**
     * error code
     * @example 1
     */
    export type FreePostcommentCreateReactionCodeEnum = 1;

    /** error message */
    export type FreePostcommentCreateReactionMessageEnum =
      "Invalid request parameter. Please check your request.";

    /**
     * error code
     * @example 3
     */
    export type FreePostcommentCreateReactionCodeEnum1 = 3;

    /** error message */
    export type FreePostcommentCreateReactionMessageEnum1 =
      "This token is invalid.";

    /**
     * error code
     * @example 5
     */
    export type FreePostcommentCreateReactionCodeEnum2 = 5;

    /** error message */
    export type FreePostcommentCreateReactionMessageEnum2 =
      "The resource you're trying to access doesn't exist.";

    /**
     * error code
     * @example 4000
     */
    export type FreePostcommentCreateReactionCodeEnum3 = 4000;

    /** error message */
    export type FreePostcommentCreateReactionMessageEnum3 =
      "You've already liked it.";

    /**
     * error code
     * @example 0
     */
    export type FreePostcommentCreateReactionCodeEnum4 = 0;

    /** error message */
    export type FreePostcommentCreateReactionMessageEnum4 =
      "Server error. Please contact server developer";

    /**
     * error code
     * @example 1
     */
    export type FreePostcommentRemoveReactionCodeEnum = 1;

    /** error message */
    export type FreePostcommentRemoveReactionMessageEnum =
      "Invalid request parameter. Please check your request.";

    /**
     * error code
     * @example 3
     */
    export type FreePostcommentRemoveReactionCodeEnum1 = 3;

    /** error message */
    export type FreePostcommentRemoveReactionMessageEnum1 =
      "This token is invalid.";

    /**
     * error code
     * @example 5
     */
    export type FreePostcommentRemoveReactionCodeEnum2 = 5;

    /** error message */
    export type FreePostcommentRemoveReactionMessageEnum2 =
      "The resource you're trying to access doesn't exist.";

    /**
     * error code
     * @example 4001
     */
    export type FreePostcommentRemoveReactionCodeEnum3 = 4001;

    /** error message */
    export type FreePostcommentRemoveReactionMessageEnum3 =
      "You haven't liked it yet.";

    /**
     * error code
     * @example 0
     */
    export type FreePostcommentRemoveReactionCodeEnum4 = 0;

    /** error message */
    export type FreePostcommentRemoveReactionMessageEnum4 =
      "Server error. Please contact server developer";

    /**
     * error code
     * @example 1
     */
    export type FreePostreplycommentCreateCodeEnum = 1;

    /** error message */
    export type FreePostreplycommentCreateMessageEnum =
      "Invalid request parameter. Please check your request.";

    /**
     * error code
     * @example 3
     */
    export type FreePostreplycommentCreateCodeEnum1 = 3;

    /** error message */
    export type FreePostreplycommentCreateMessageEnum1 =
      "This token is invalid.";

    /**
     * error code
     * @example 5
     */
    export type FreePostreplycommentCreateCodeEnum2 = 5;

    /** error message */
    export type FreePostreplycommentCreateMessageEnum2 =
      "The resource you're trying to access doesn't exist.";

    /**
     * error code
     * @example 0
     */
    export type FreePostreplycommentCreateCodeEnum3 = 0;

    /** error message */
    export type FreePostreplycommentCreateMessageEnum3 =
      "Server error. Please contact server developer";

    /**
     * error code
     * @example 1
     */
    export type FreePostreplycommentFindAllAndCountCodeEnum = 1;

    /** error message */
    export type FreePostreplycommentFindAllAndCountMessageEnum =
      "Invalid request parameter. Please check your request.";

    /**
     * error code
     * @example 5
     */
    export type FreePostreplycommentFindAllAndCountCodeEnum1 = 5;

    /** error message */
    export type FreePostreplycommentFindAllAndCountMessageEnum1 =
      "The resource you're trying to access doesn't exist.";

    /**
     * error code
     * @example 0
     */
    export type FreePostreplycommentFindAllAndCountCodeEnum2 = 0;

    /** error message */
    export type FreePostreplycommentFindAllAndCountMessageEnum2 =
      "Server error. Please contact server developer";

    export interface FreePostreplycommentFindAllAndCountParams {
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
    export type FreePostreplycommentPutUpdateCodeEnum = 1;

    /** error message */
    export type FreePostreplycommentPutUpdateMessageEnum =
      "Invalid request parameter. Please check your request.";

    /**
     * error code
     * @example 3
     */
    export type FreePostreplycommentPutUpdateCodeEnum1 = 3;

    /** error message */
    export type FreePostreplycommentPutUpdateMessageEnum1 =
      "This token is invalid.";

    /**
     * error code
     * @example 4
     */
    export type FreePostreplycommentPutUpdateCodeEnum2 = 4;

    /** error message */
    export type FreePostreplycommentPutUpdateMessageEnum2 =
      "You don't have permission to access it.";

    /**
     * error code
     * @example 5
     */
    export type FreePostreplycommentPutUpdateCodeEnum3 = 5;

    /** error message */
    export type FreePostreplycommentPutUpdateMessageEnum3 =
      "The resource you're trying to access doesn't exist.";

    /**
     * error code
     * @example 0
     */
    export type FreePostreplycommentPutUpdateCodeEnum4 = 0;

    /** error message */
    export type FreePostreplycommentPutUpdateMessageEnum4 =
      "Server error. Please contact server developer";

    /**
     * error code
     * @example 1
     */
    export type FreePostreplycommentRemoveCodeEnum = 1;

    /** error message */
    export type FreePostreplycommentRemoveMessageEnum =
      "Invalid request parameter. Please check your request.";

    /**
     * error code
     * @example 3
     */
    export type FreePostreplycommentRemoveCodeEnum1 = 3;

    /** error message */
    export type FreePostreplycommentRemoveMessageEnum1 =
      "This token is invalid.";

    /**
     * error code
     * @example 4
     */
    export type FreePostreplycommentRemoveCodeEnum2 = 4;

    /** error message */
    export type FreePostreplycommentRemoveMessageEnum2 =
      "You don't have permission to access it.";

    /**
     * error code
     * @example 5
     */
    export type FreePostreplycommentRemoveCodeEnum3 = 5;

    /** error message */
    export type FreePostreplycommentRemoveMessageEnum3 =
      "The resource you're trying to access doesn't exist.";

    /**
     * error code
     * @example 0
     */
    export type FreePostreplycommentRemoveCodeEnum4 = 0;

    /** error message */
    export type FreePostreplycommentRemoveMessageEnum4 =
      "Server error. Please contact server developer";

    /**
     * error code
     * @example 1
     */
    export type FreePostreplycommentCreateReactionCodeEnum = 1;

    /** error message */
    export type FreePostreplycommentCreateReactionMessageEnum =
      "Invalid request parameter. Please check your request.";

    /**
     * error code
     * @example 3
     */
    export type FreePostreplycommentCreateReactionCodeEnum1 = 3;

    /** error message */
    export type FreePostreplycommentCreateReactionMessageEnum1 =
      "This token is invalid.";

    /**
     * error code
     * @example 5
     */
    export type FreePostreplycommentCreateReactionCodeEnum2 = 5;

    /** error message */
    export type FreePostreplycommentCreateReactionMessageEnum2 =
      "The resource you're trying to access doesn't exist.";

    /**
     * error code
     * @example 4000
     */
    export type FreePostreplycommentCreateReactionCodeEnum3 = 4000;

    /** error message */
    export type FreePostreplycommentCreateReactionMessageEnum3 =
      "You've already liked it.";

    /**
     * error code
     * @example 0
     */
    export type FreePostreplycommentCreateReactionCodeEnum4 = 0;

    /** error message */
    export type FreePostreplycommentCreateReactionMessageEnum4 =
      "Server error. Please contact server developer";

    /**
     * error code
     * @example 1
     */
    export type FreePostreplycommentRemoveReactionCodeEnum = 1;

    /** error message */
    export type FreePostreplycommentRemoveReactionMessageEnum =
      "Invalid request parameter. Please check your request.";

    /**
     * error code
     * @example 3
     */
    export type FreePostreplycommentRemoveReactionCodeEnum1 = 3;

    /** error message */
    export type FreePostreplycommentRemoveReactionMessageEnum1 =
      "This token is invalid.";

    /**
     * error code
     * @example 5
     */
    export type FreePostreplycommentRemoveReactionCodeEnum2 = 5;

    /** error message */
    export type FreePostreplycommentRemoveReactionMessageEnum2 =
      "The resource you're trying to access doesn't exist.";

    /**
     * error code
     * @example 4001
     */
    export type FreePostreplycommentRemoveReactionCodeEnum3 = 4001;

    /** error message */
    export type FreePostreplycommentRemoveReactionMessageEnum3 =
      "You haven't liked it yet.";

    /**
     * error code
     * @example 0
     */
    export type FreePostreplycommentRemoveReactionCodeEnum4 = 0;

    /** error message */
    export type FreePostreplycommentRemoveReactionMessageEnum4 =
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

    export namespace Api {
      /**
       * @description 서버에서 관리하는 에러코드를 조회합니다.
       * @tags root
       * @name RootFindAllErrorCode
       * @summary 개발용으로 생성된 에러코드 전체조회
       * @request GET:/api/error-code
       */
      export namespace RootFindAllErrorCode {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = ErrorCodeResponseDto;
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
       * @tags user
       * @name UserCreate
       * @summary 유저 생성(회원가입)
       * @request POST:/api/users
       */
      export namespace UserCreate {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = CreateUserDto;
        export type RequestHeaders = {};
        export type ResponseBody = UserDetailResponseDto;
      }
      /**
       * No description
       * @tags user
       * @name UserFindOneUserOrNotFound
       * @summary 유저 정보 단일 조회
       * @request GET:/api/users/{userId}
       */
      export namespace UserFindOneUserOrNotFound {
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
       * @tags user
       * @name UserPutUpdate
       * @summary 유저 정보 업데이트
       * @request PUT:/api/users/{userId}
       * @secure
       */
      export namespace UserPutUpdate {
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
       * @name MajorFindAllMajors
       * @summary 전공 목록 전체 조회
       * @request GET:/api/major
       */
      export namespace MajorFindAllMajors {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = MajorsCommonResponseDto;
      }
      /**
       * No description
       * @tags majors
       * @name MajorCreateNewMajor
       * @summary 전공 코드 및 이름 생성
       * @request POST:/api/major
       */
      export namespace MajorCreateNewMajor {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = CreateMajorRequestBodyDto;
        export type RequestHeaders = {};
        export type ResponseBody = MajorDetailResponseDto;
      }
      /**
       * No description
       * @tags notice-post
       * @name NoticepostCreate
       * @summary 공지 게시글 생성 API
       * @request POST:/api/notice-posts
       * @secure
       */
      export namespace NoticepostCreate {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = CreateNoticePostDto;
        export type RequestHeaders = {};
        export type ResponseBody = NoticePostDetailResponseDto;
      }
      /**
       * No description
       * @tags notice-post
       * @name NoticepostFindAllAndCount
       * @summary 공지 게시글 전체조회(pagination)
       * @request GET:/api/notice-posts
       */
      export namespace NoticepostFindAllAndCount {
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
          isAllowComment?: NoticepostFindAllAndCountParams1IsAllowCommentEnum;
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
       * @tags notice-post
       * @name NoticepostFindOneOrNotFound
       * @summary 공지게시글 상세조회
       * @request GET:/api/notice-posts/{postId}
       */
      export namespace NoticepostFindOneOrNotFound {
        export type RequestParams = {
          postId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = NoticePostDetailResponseDto;
      }
      /**
       * No description
       * @tags notice-post
       * @name NoticepostPutUpdate
       * @summary 공지게시글 수정
       * @request PUT:/api/notice-posts/{postId}
       * @secure
       */
      export namespace NoticepostPutUpdate {
        export type RequestParams = {
          postId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = PutUpdateNoticePostDto;
        export type RequestHeaders = {};
        export type ResponseBody = NoticePostDetailResponseDto;
      }
      /**
       * No description
       * @tags notice-post
       * @name NoticepostPatchUpdate
       * @summary 공지게시글 patch 수정
       * @request PATCH:/api/notice-posts/{postId}
       * @secure
       */
      export namespace NoticepostPatchUpdate {
        export type RequestParams = {
          postId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = PatchUpdateNoticePostDto;
        export type RequestHeaders = {};
        export type ResponseBody = NoticePostDetailResponseDto;
      }
      /**
       * No description
       * @tags notice-post
       * @name NoticepostRemove
       * @summary 공지 게시글 삭제
       * @request DELETE:/api/notice-posts/{postId}
       * @secure
       */
      export namespace NoticepostRemove {
        export type RequestParams = {
          postId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = NoticePostDeleteResponseDto;
      }
      /**
       * No description
       * @tags notice-post
       * @name NoticepostIncreaseHit
       * @summary 조회수 1 증가
       * @request PUT:/api/notice-posts/{postId}/hit
       */
      export namespace NoticepostIncreaseHit {
        export type RequestParams = {
          postId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = void;
      }
      /**
       * No description
       * @tags free-post
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
       * @tags free-post
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
       * @tags free-post
       * @name FreePostFindOneOrNotFound
       * @summary 자유게시글 상세조회
       * @request GET:/api/free-posts/{postId}
       */
      export namespace FreePostFindOneOrNotFound {
        export type RequestParams = {
          postId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = FreePostDetailResponseDto;
      }
      /**
       * No description
       * @tags free-post
       * @name FreePostPutUpdate
       * @summary 자유게시글 수정
       * @request PUT:/api/free-posts/{postId}
       * @secure
       */
      export namespace FreePostPutUpdate {
        export type RequestParams = {
          postId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = PutUpdateFreePostDto;
        export type RequestHeaders = {};
        export type ResponseBody = FreePostDetailResponseDto;
      }
      /**
       * No description
       * @tags free-post
       * @name FreePostPatchUpdate
       * @summary 자유게시글 부분 수정
       * @request PATCH:/api/free-posts/{postId}
       * @secure
       */
      export namespace FreePostPatchUpdate {
        export type RequestParams = {
          postId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = PatchUpdateFreePostDto;
        export type RequestHeaders = {};
        export type ResponseBody = FreePostDetailResponseDto;
      }
      /**
       * No description
       * @tags free-post
       * @name FreePostRemove
       * @summary 자유게시글 삭제
       * @request DELETE:/api/free-posts/{postId}
       * @secure
       */
      export namespace FreePostRemove {
        export type RequestParams = {
          postId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = FreePostDeleteResponseDto;
      }
      /**
       * No description
       * @tags free-post
       * @name FreePostIncrementHit
       * @summary 조회수 증가(1)
       * @request PUT:/api/free-posts/{postId}/hit
       */
      export namespace FreePostIncrementHit {
        export type RequestParams = {
          postId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = void;
      }
      /**
       * No description
       * @tags free-post
       * @name FreePostCreateReaction
       * @summary 자유 게시글 reaction 생성
       * @request POST:/api/free-posts/{postId}/reaction
       * @secure
       */
      export namespace FreePostCreateReaction {
        export type RequestParams = {
          postId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = CreateReactionDto;
        export type RequestHeaders = {};
        export type ResponseBody = void;
      }
      /**
       * No description
       * @tags free-post
       * @name FreePostRemoveReaction
       * @summary 자유 게시글 reaction 삭제
       * @request DELETE:/api/free-posts/{postId}/reaction
       * @secure
       */
      export namespace FreePostRemoveReaction {
        export type RequestParams = {
          postId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = RemoveReactionDto;
        export type RequestHeaders = {};
        export type ResponseBody = void;
      }
      /**
       * No description
       * @tags free-post-comment
       * @name FreePostcommentCreate
       * @summary 자유 게시글 댓글 생성
       * @request POST:/api/free-posts/{postId}/comments
       * @secure
       */
      export namespace FreePostcommentCreate {
        export type RequestParams = {
          postId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = CreateFreePostCommentDto;
        export type RequestHeaders = {};
        export type ResponseBody = FreePostCommentDetailResponseDto;
      }
      /**
       * No description
       * @tags free-post-comment
       * @name FreePostcommentFindAllAndCount
       * @summary 자유 게시글 댓글 전체조회(pagination)
       * @request GET:/api/free-posts/{postId}/comments
       */
      export namespace FreePostcommentFindAllAndCount {
        export type RequestParams = {
          postId: number;
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
       * @tags free-post-comment
       * @name FreePostcommentPutUpdate
       * @summary 자유게시글 댓글 수정
       * @request PUT:/api/free-posts/{postId}/comments/{commentId}
       * @secure
       */
      export namespace FreePostcommentPutUpdate {
        export type RequestParams = {
          postId: number;
          commentId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = PutUpdateFreePostCommentDto;
        export type RequestHeaders = {};
        export type ResponseBody = FreePostCommentDetailResponseDto;
      }
      /**
       * No description
       * @tags free-post-comment
       * @name FreePostcommentRemove
       * @summary 자유게시글 댓글 삭제
       * @request DELETE:/api/free-posts/{postId}/comments/{commentId}
       * @secure
       */
      export namespace FreePostcommentRemove {
        export type RequestParams = {
          postId: number;
          commentId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = FreePostDeleteResponseDto;
      }
      /**
       * No description
       * @tags free-post-comment
       * @name FreePostcommentCreateReaction
       * @summary 자유 게시글 댓글 reaction 생성
       * @request POST:/api/free-posts/{postId}/comments/{commentId}/reaction
       * @secure
       */
      export namespace FreePostcommentCreateReaction {
        export type RequestParams = {
          postId: number;
          commentId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = CreateReactionDto;
        export type RequestHeaders = {};
        export type ResponseBody = void;
      }
      /**
       * No description
       * @tags free-post-comment
       * @name FreePostcommentRemoveReaction
       * @summary 자유 게시글 댓글 reaction 삭제
       * @request DELETE:/api/free-posts/{postId}/comments/{commentId}/reaction
       * @secure
       */
      export namespace FreePostcommentRemoveReaction {
        export type RequestParams = {
          postId: number;
          commentId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = RemoveReactionDto;
        export type RequestHeaders = {};
        export type ResponseBody = void;
      }
      /**
       * No description
       * @tags free-post-reply-comment
       * @name FreePostreplycommentCreate
       * @summary 자유 게시글 대댓글 생성
       * @request POST:/api/free-posts/{postId}/comments/{commentId}/reply
       * @secure
       */
      export namespace FreePostreplycommentCreate {
        export type RequestParams = {
          postId: number;
          commentId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = CreateFreePostReplyCommentDto;
        export type RequestHeaders = {};
        export type ResponseBody = FreePostReplyCommentDetailResponseDto;
      }
      /**
       * No description
       * @tags free-post-reply-comment
       * @name FreePostreplycommentFindAllAndCount
       * @summary 자유 게시글 대댓글 전체조회(pagination)
       * @request GET:/api/free-posts/{postId}/comments/{commentId}/reply
       */
      export namespace FreePostreplycommentFindAllAndCount {
        export type RequestParams = {
          postId: number;
          commentId: number;
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
       * @tags free-post-reply-comment
       * @name FreePostreplycommentPutUpdate
       * @summary 자유게시글 대댓글 수정
       * @request PUT:/api/free-posts/{postId}/comments/{commentId}/reply/{replyId}
       * @secure
       */
      export namespace FreePostreplycommentPutUpdate {
        export type RequestParams = {
          postId: number;
          commentId: number;
          replyId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = PutUpdateFreePostReplyCommentDto;
        export type RequestHeaders = {};
        export type ResponseBody = FreePostReplyCommentDetailResponseDto;
      }
      /**
       * No description
       * @tags free-post-reply-comment
       * @name FreePostreplycommentRemove
       * @summary 자유게시글 대댓글 삭제
       * @request DELETE:/api/free-posts/{postId}/comments/{commentId}/reply/{replyId}
       * @secure
       */
      export namespace FreePostreplycommentRemove {
        export type RequestParams = {
          postId: number;
          commentId: number;
          replyId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = FreePostDeleteResponseDto;
      }
      /**
       * No description
       * @tags free-post-reply-comment
       * @name FreePostreplycommentCreateReaction
       * @summary 자유 게시글 대댓글 reaction 생성
       * @request POST:/api/free-posts/{postId}/comments/{commentId}/reply/{replyId}/reaction
       * @secure
       */
      export namespace FreePostreplycommentCreateReaction {
        export type RequestParams = {
          postId: number;
          commentId: number;
          replyId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = CreateReactionDto;
        export type RequestHeaders = {};
        export type ResponseBody = void;
      }
      /**
       * No description
       * @tags free-post-reply-comment
       * @name FreePostreplycommentRemoveReaction
       * @summary 자유 게시글 대댓글 reaction 삭제
       * @request DELETE:/api/free-posts/{postId}/comments/{commentId}/reply/{replyId}/reaction
       * @secure
       */
      export namespace FreePostreplycommentRemoveReaction {
        export type RequestParams = {
          postId: number;
          commentId: number;
          replyId: number;
        };
        export type RequestQuery = {};
        export type RequestBody = RemoveReactionDto;
        export type RequestHeaders = {};
        export type ResponseBody = void;
      }
      /**
       * No description
       * @tags auth-social
       * @name AuthsocialCheckRegistration
       * @summary 소셜 유저 프로필 유무 조회
       * @request POST:/api/auth/social/check-registration
       */
      export namespace AuthsocialCheckRegistration {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = CheckRegistrationRequestBodyDto;
        export type RequestHeaders = {};
        export type ResponseBody = boolean;
      }
      /**
       * No description
       * @tags auth-social
       * @name AuthsocialSignUp
       * @summary 소셜 회원가입
       * @request POST:/api/auth/social/signup
       */
      export namespace AuthsocialSignUp {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = SignUpRequestBodyDto;
        export type RequestHeaders = {};
        export type ResponseBody = UserDetailResponseDto;
      }
      /**
       * No description
       * @tags auth-social
       * @name AuthsocialSignIn
       * @summary 소셜 로그인
       * @request POST:/api/auth/social/signin
       */
      export namespace AuthsocialSignIn {
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
