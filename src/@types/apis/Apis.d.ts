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
      /**
       * password
       * @pattern /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/
       */
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
       * password
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
    export type AuthSignInCodeEnum = "1" | "1000" | "1001";

    /** error message */
    export type AuthSignInMessageEnum =
      | "Invalid request parameter. Please check your request."
      | "The account was not found."
      | "Your account information doesn't match.";

    /**
     * error code
     * @example 0
     */
    export type AuthSignInCodeEnum1 = "0";

    /** error message */
    export type AuthSignInMessageEnum1 =
      "Server error. Please contact server developer";

    /**
     * error code
     * @example 3
     */
    export type AuthGetProfileCodeEnum = "3";

    /** error message */
    export type AuthGetProfileMessageEnum = "This token is invalid.";

    /**
     * error code
     * @example 3
     */
    export type AuthGetAccessTokenCodeEnum = "3";

    /** error message */
    export type AuthGetAccessTokenMessageEnum = "This token is invalid.";

    /**
     * error code
     * @example 1
     */
    export type UsersCreateCodeEnum = "1";

    /** error message */
    export type UsersCreateMessageEnum =
      "Invalid request parameter. Please check your request.";

    /**
     * error code
     * @example 2000
     */
    export type UsersCreateCodeEnum1 = "2000" | "2001";

    /** error message */
    export type UsersCreateMessageEnum1 =
      | "An email that already exists."
      | "A cell phone number that already exists.";

    /**
     * error code
     * @example 0
     */
    export type UsersCreateCodeEnum2 = "0";

    /** error message */
    export type UsersCreateMessageEnum2 =
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
        export type RequestParams = {
          loginType: "email";
          name: string;
          email: string;
          role: "admin" | "일반회원";
          password: stinrg;
          phoneNumber: string;
          grade: number;
          gender: string;
          profilePath: string;
        };
        export type RequestQuery = {};
        export type RequestBody = CreateUserRequestBodyDto;
        export type RequestHeaders = {};
        export type ResponseBody = UserDetailResponseDto;
      }
    }
  }
}
export {};
