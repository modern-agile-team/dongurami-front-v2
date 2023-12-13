declare global {
  namespace Swagger {
    export interface ValidationError {
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

    export interface SignInRequestBodyDto {
      /** login type 현재 email 만 */
      loginType: SignInRequestBodyDtoLoginTypeEnum;
      /**
       * email
       * @format email
       */
      email: string;
      /** password (email 로그인시에만 패턴 검사를 진행합니다.) */
      password: string | null;
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
      freePosts: FreePostsItemDto[];
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

    export interface NoticePostDeleteResponseDto {
      count: number;
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
      noticeBoards: NoticePostsItemDto[];
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

    /** login type 현재 email 만 */
    export type SignInRequestBodyDtoLoginTypeEnum = "email";

    /** 유저 로그인 타입 */
    export type UserDtoLoginTypeEnum = "email";

    /** 유저 role */
    export type UserDtoRoleEnum = "admin" | "student";

    /** 성별 */
    export type UserDtoGenderEnum = "male" | "female";

    /** login type 현재 email 만 */
    export type CreateUserRequestBodyDtoLoginTypeEnum = "email";

    /** role */
    export type CreateUserRequestBodyDtoRoleEnum = "admin" | "student";

    /** gender */
    export type CreateUserRequestBodyDtoGenderEnum = "male" | "female";

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
    export type UsersCreateMessageEnum =
      "Invalid request parameter. Please check your request.";

    /**
     * error code
     * @example 2000
     */
    export type UsersCreateCodeEnum1 = 2000 | 2001;

    /** error message */
    export type UsersCreateMessageEnum1 =
      | "An email that already exists."
      | "A cell phone number that already exists.";

    /**
     * error code
     * @example 0
     */
    export type UsersCreateCodeEnum2 = 0;

    /** error message */
    export type UsersCreateMessageEnum2 =
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
     * @example 0
     */
    export type GetAllMajorsCodeEnum = 0;

    /** error message */
    export type GetAllMajorsMessageEnum =
      "Server error. Please contact server developer";

    /**
     * error code
     * @example 1
     */
    export type CreateNewMajorCodeEnum = 1;

    /** error message */
    export type CreateNewMajorMessageEnum =
      "Invalid request parameter. Please check your request.";

    /**
     * error code
     * @example 3000
     */
    export type CreateNewMajorCodeEnum1 = 3000 | 3001;

    /** error message */
    export type CreateNewMajorMessageEnum1 =
      | "Major name that already exists"
      | "Major code that already exists.";

    /**
     * error code
     * @example 0
     */
    export type CreateNewMajorCodeEnum2 = 0;

    /** error message */
    export type CreateNewMajorMessageEnum2 =
      "Server error. Please contact server developer";

    /**
     * error code
     * @example 1
     */
    export type NoticePostCreateCodeEnum = 1;

    /** error message */
    export type NoticePostCreateMessageEnum =
      "Invalid request parameter. Please check your request.";

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
    export type NoticePostCreateMessageEnum2 =
      "Server error. Please contact server developer";

    /**
     * error code
     * @example 1
     */
    export type NoticePostFindAllAndCountCodeEnum = 1;

    /** error message */
    export type NoticePostFindAllAndCountMessageEnum =
      "Invalid request parameter. Please check your request.";

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
    export type NoticePostFindAllAndCountParams1IsAllowCommentEnum =
      | "true"
      | "false";

    /**
     * error code
     * @example 1
     */
    export type NoticePostFindOneOrNotFoundCodeEnum = 1;

    /** error message */
    export type NoticePostFindOneOrNotFoundMessageEnum =
      "Invalid request parameter. Please check your request.";

    /**
     * error code
     * @example 5
     */
    export type NoticePostFindOneOrNotFoundCodeEnum1 = 5;

    /** error message */
    export type NoticePostFindOneOrNotFoundMessageEnum1 =
      "The resource you're trying to access doesn't exist.";

    /**
     * error code
     * @example 0
     */
    export type NoticePostFindOneOrNotFoundCodeEnum2 = 0;

    /** error message */
    export type NoticePostFindOneOrNotFoundMessageEnum2 =
      "Server error. Please contact server developer";

    /**
     * error code
     * @example 1
     */
    export type NoticePostsControllerPutUpdateCodeEnum = 1;

    /** error message */
    export type NoticePostsControllerPutUpdateMessageEnum =
      "Invalid request parameter. Please check your request.";

    /**
     * error code
     * @example 3
     */
    export type NoticePostsControllerPutUpdateCodeEnum1 = 3;

    /** error message */
    export type NoticePostsControllerPutUpdateMessageEnum1 =
      "This token is invalid.";

    /**
     * error code
     * @example 4
     */
    export type NoticePostsControllerPutUpdateCodeEnum2 = 4;

    /** error message */
    export type NoticePostsControllerPutUpdateMessageEnum2 =
      "You don't have permission to access it.";

    /**
     * error code
     * @example 5
     */
    export type NoticePostsControllerPutUpdateCodeEnum3 = 5;

    /** error message */
    export type NoticePostsControllerPutUpdateMessageEnum3 =
      "The resource you're trying to access doesn't exist.";

    /**
     * error code
     * @example 0
     */
    export type NoticePostsControllerPutUpdateCodeEnum4 = 0;

    /** error message */
    export type NoticePostsControllerPutUpdateMessageEnum4 =
      "Server error. Please contact server developer";

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
       * @summary 자유게시글 삭제 (현재 내부 사정으로 서버에러가 무조건적으로 발생합니다.
       * @request DELETE:/api/free-posts/{freePostId}
       * @deprecated
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
       * @name NoticePostsControllerPutUpdate
       * @request PUT:/api/notice-posts/{noticePostId}
       * @secure
       */
      export namespace NoticePostsControllerPutUpdate {
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
       * @name NoticePostRemove
       * @summary 자유게시글 삭제 (현재 내부 사정으로 서버에러가 무조건적으로 발생합니다.
       * @request DELETE:/api/free-posts/{freePostId}
       * @deprecated
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
    }
  }
}
export {};
