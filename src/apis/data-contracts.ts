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
  /** 고유 ID */
  id: GLint64;
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

export interface ClubCategoryDto {
  /** 고유 ID */
  id: GLint64;
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
   * @format GLint64
   */
  userId: string;
  /** 카테고리 명 */
  name: string;
}

export interface ClubTagDto {
  /** 고유 ID */
  id: GLint64;
  /**
   * 생성일자
   * @format date-time
   */
  createdAt: string;
  /**
   * 태그 생성 유저 고유 ID
   * @format GLint64
   */
  userId: string;
  /** 태그 명 */
  name: string;
}

export interface ClubWithCategoryAndTagDto {
  /** 고유 ID */
  id: GLint64;
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
  /** 동아리 소개 */
  introduce: string | null;
  /** 동아리 로고 path */
  logoPath: string | null;
  /** 동아리 상태 */
  status: ClubWithCategoryAndTagDtoStatusEnum;
  /** 클럽 카테고리 item */
  clubCategories: ClubCategoryDto[];
  /** 클럽 태그 item */
  clubTags: ClubTagDto[];
}

export interface CreateClubRequestBodyDto {
  /**
   * 동아리 명
   * @minLength 1
   * @maxLength 255
   */
  name: string;
  /** 동아리 소개 */
  introduce: string | null;
  /**
   * 동아리 로고 (url이 아닌 path)
   * @minLength 1
   * @maxLength 255
   */
  logoPath: string | null;
  /**
   * 동아리 태그 명
   * @uniqueItems true
   * @default []
   */
  tagNames?: string[];
  /**
   * 동아리 카테고리 명(존재하는 카테고리 명을 보내야 함.)
   * @minItems 1
   * @uniqueItems true
   */
  categoryNames: string[];
}

export interface ClubDetailResponseDto {
  club: ClubDto;
}

export interface CreateClubCategoryRequestBodyDto {
  /**
   * 동아리 카테고리 이름
   * @minLength 1
   * @maxLength 20
   */
  name: string;
  /**
   * 메모
   * @minLength 1
   * @maxLength 255
   */
  memo: string;
}

export interface ClubCategoryDetailResponseDto {
  clubCategory: ClubCategoryDto;
}

export interface MajorsCommonResponseDto {
  majors: MajorDto[];
}

export interface ClubsItemDto {
  /** 고유 ID */
  id: GLint64;
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

export interface ClubDto {
  /** 고유 ID */
  id: GLint64;
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
  /** 동아리 소개 */
  introduce: string | null;
  /** 동아리 로고 path */
  logoPath: string | null;
  /** 동아리 상태 */
  status: ClubDtoStatusEnum;
}

export interface ClubMemberItemDto {
  majorId: string;
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
  gender: ClubMemberItemDtoGenderEnum;
  /**
   * profile image path
   * @example "path/user-image.jpeg"
   */
  profilePath: string | null;
  /** 고유 ID */
  id: GLint64;
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
  /** 동아리원의 역할 리스트 */
  roles: ClubMemberItemDtoRolesEnum[];
}

export interface ClubMembersCommonResponseDto {
  clubMembers: ClubMemberItemDto[];
}

export interface ClubTagsCommonResponseDto {
  clubTags: ClubTagDto[];
}

export interface BulkAppendClubTagDto {
  /**
   * 동아리 태그 리스트
   * @uniqueItems true
   */
  tagNames: string[];
}

export interface ClubTagDeleteResponseDto {
  /**
   * 삭제된 리소스 개수
   * @format integer
   */
  count: number;
}

export interface ClubCategoriesCommonResponseDto {
  clubCategories: ClubCategoryDto[];
}

export interface UserDto {
  /** 고유 ID */
  id: GLint64;
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
  majorId: string;
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

export interface PostTagDto {
  /** 고유 ID */
  id: GLint64;
  /**
   * 생성일자
   * @format date-time
   */
  createdAt: string;
  /**
   * 태그 생성 유저 고유 ID
   * @format GLint64
   */
  userId: string;
  /** 태그 명 */
  name: string;
}

export interface AttachmentDto {
  /**
   * 첨부 파일 고유 ID
   * @format GLint64
   */
  id: string;
  /**
   * 업로더 고유 ID
   * @format GLint64
   */
  userId: string;
  /** file url */
  url: string;
  /** domain을 제외한 path */
  path: string;
  /** MIME-Type */
  mimeType: string;
  /**
   * 파일 용량(byte)
   * @format GLint64
   */
  capacity: string;
  /**
   * 생성 일자
   * @format timestamp
   */
  createdAt: string;
}

export interface ClubPostDto {
  /** 고유 ID */
  id: GLint64;
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
   * 동아리 고유 ID
   * @format GLint64
   */
  clubId: string;
  /**
   * 동아리 게시글 작성 유저 고유 ID
   * @format GLint64
   */
  userId: string;
  /** 동아리 게시글 작성 유저 정보 */
  user: UserDto;
  /**
   * 동아리 게시글 본문
   * @minLength 1
   */
  description: string;
  /**
   * 동아리 게시글 해시태그
   * @maxItems 10
   * @minItems 0
   */
  tags: PostTagDto[];
  /** 동아리 게시글 첨부파일 */
  attachments: AttachmentDto[];
}

export interface CreateClubPostRequestBodyDto {
  /**
   * 동아리 게시글 본문
   * @minLength 1
   */
  description: string;
  /**
   * 동아리 게시글 해시 태그
   * @maxItems 10
   * @minItems 0
   * @default []
   */
  tagNames?: string[];
  /**
   * 동아리 게시글 첨부파일. url이 아닌 path <br>허용하는 MIME-Type: image/png,image/jpeg,video/mp4,video/quicktime
   * @maxItems 10
   * @minItems 0
   * @default []
   */
  attachmentPaths?: string[];
}

export interface ClubPostCommonResponseDto {
  clubPost: ClubPostDto;
}

export interface ClubPostCommentsItemDto {
  /** 고유 ID */
  id: GLint64;
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
   * 댓글 작성자 고유 ID
   * @format GLint64
   */
  userId: string;
  /** 댓글 작성 유저 정보 */
  user: UserDto;
  /**
   * 게시글 고유 ID
   * @format GLint64
   */
  clubPostId: string;
  /**
   * 부모 댓글 ID 해당 값을 주지 않을 경우 최상위 댓글임
   * @format GLint64
   */
  parentId: string | null;
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
  children?: ClubPostCommentsItemDto[];
}

export interface ClubPostsItemDto {
  /** 고유 ID */
  id: GLint64;
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
   * 동아리 고유 ID
   * @format GLint64
   */
  clubId: string;
  /**
   * 동아리 게시글 작성 유저 고유 ID
   * @format GLint64
   */
  userId: string;
  /** 게시글 작성 유저 정보 */
  user: UserDto;
  /**
   * 동아리 게시글 본문
   * @minLength 1
   */
  description: string;
  /**
   * 동아리 게시글 해시태그
   * @maxItems 10
   * @minItems 0
   */
  tags: PostTagDto[];
  /** 동아리 게시글 첨부파일 */
  attachments: AttachmentDto[];
  /** 게시글에 달린 댓글 */
  clubPostComments: ClubPostCommentsItemDto[];
  /**
   * 게시글에 달린 좋아요 개수
   * @format integer
   */
  likeCount: number;
  /**
   * 게시글에 달린 댓글 개수
   * @format integer
   */
  commentCount: number;
}

export interface ClubPostsPaginationResponseDto {
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
  contents: ClubPostsItemDto[];
}

export interface PatchUpdateClubPostRequestBodyDto {
  /**
   * 동아리 게시글 본문
   * @minLength 1
   */
  description?: string;
  /**
   * 동아리 게시글 해시 태그
   * @maxItems 10
   * @minItems 0
   * @default []
   */
  tagNames?: string[];
  /**
   * 동아리 게시글 첨부파일. url이 아닌 path <br>허용하는 MIME-Type: image/png,image/jpeg,video/mp4,video/quicktime
   * @maxItems 10
   * @minItems 0
   * @default []
   */
  attachmentPaths?: string[];
}

export interface ClubPostDetailResponseDto {
  clubPost: ClubPostDto;
}

export interface ClubPostDeleteResponseDto {
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

export interface ClubPostCommentDto {
  /** 고유 ID */
  id: GLint64;
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
   * 댓글 작성자 고유 ID
   * @format GLint64
   */
  userId: string;
  /** 동아리 게시글 댓글 작성 유저 정보 */
  user: UserDto;
  /**
   * 게시글 고유 ID
   * @format GLint64
   */
  clubPostId: string;
  /**
   * 부모 댓글 ID 해당 값을 주지 않을 경우 최상위 댓글임
   * @format GLint64
   */
  parentId: string | null;
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

export interface CreateClubPostCommentRequestBodyDto {
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
  /**
   * 부모 댓글 ID 해당 값을 주지 않을 경우 최상위 댓글로 인식함
   * @format GLint64
   */
  parentId?: string;
}

export interface ClubPostCommentDetailResponseDto {
  clubPostComment: ClubPostCommentDto;
}

export interface ClubPostCommentsPaginationResponseDto {
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
  contents: ClubPostCommentsItemDto[];
}

export interface PatchUpdateClubPostCommentRequestBodyDto {
  /**
   * 본문
   * @minLength 1
   * @maxLength 255
   */
  description?: string;
  /** 익명 여부 */
  isAnonymous?: boolean;
  /**
   * 부모 댓글 ID 해당 값을 주지 않을 경우 최상위 댓글로 인식함
   * @format GLint64
   */
  parentId?: string;
}

export interface ClubPostCommentDeleteResponseDto {
  /**
   * 삭제된 리소스 개수
   * @format integer
   */
  count: number;
}

export interface ClubApplicationFormQuestionItemDto {
  /** 지원서 폼 질문 고유 ID */
  id: string;
  /** 질문 */
  question: string;
  /** 입력 타입 */
  inputType: ClubApplicationFormQuestionItemDtoInputTypeEnum;
  /** 필수 항목 여부 */
  isRequired: boolean;
  /** 허용되는 값 리스트, inputType이 text, file이라면 해당 값은 무시됨 */
  allowValues: string[];
}

export interface ClubApplicationFormDto {
  /** 고유 ID */
  id: GLint64;
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
  /** 공통 기본 지원서 질문항목 */
  commonQuestion: ClubApplicationFormQuestionItemDto[];
  /** 커스텀 질문 항목 */
  customQuestion: ClubApplicationFormQuestionItemDto[];
  /**
   * 지원서 시작일자
   * @format date-time
   */
  startsAt: string | null;
  /**
   * 지원서 종료일자
   * @format date-time
   */
  endsAt: string | null;
}

export interface ClubApplicationFormDetailResponseDto {
  clubApplicationForm: ClubApplicationFormDto;
}

export interface PutUpdateClubApplicationFormCustomQuestionDto {
  /** 질문 */
  question: string;
  /** 입력 타입 */
  inputType: PutUpdateClubApplicationFormCustomQuestionDtoInputTypeEnum;
  /** 필수 항목 여부 */
  isRequired: boolean;
  /** 허용되는 값 리스트, inputType이 text, file이라면 해당 값은 무시됨 */
  allowValues: string[];
}

export interface PutUpdateClubApplicationFormDto {
  /** 커스텀 질문 항목 */
  customQuestion: PutUpdateClubApplicationFormCustomQuestionDto[];
  /**
   * 지원서 시작일자, 종료일자보다 이후일 수 없음
   * @format date-time
   */
  startsAt: string | null;
  /**
   * 지원서 종료 일자, 시작일자보다 이전일 수 없음
   * @format date-time
   */
  endsAt: string | null;
}

export interface ClubReviewDto {
  /** 고유 ID */
  id: GLint64;
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
   * 동아리 고유 ID
   * @format GLint64
   */
  clubId: string;
  /** 후기 작성자, isAnonymous 여부에 따라 null 값을 가짐 */
  user: UserDto | null;
  /** 후기 작성자 고유 ID, isAnonymous 여부에 따라 null 값을 가짐 */
  userId: string | null;
  /**
   * 동아리 후기 본문
   * @minLength 1
   * @maxLength 255
   */
  description: string | null;
  /**
   * 별점
   * @format integer
   * @min 1
   * @max 5
   */
  starRate: number;
  /**
   * 익명 여부
   * @default true
   */
  isAnonymous: boolean;
}

export interface CreateClubReviewRequestBodyDto {
  /**
   * 동아리 후기 본문
   * @minLength 1
   * @maxLength 255
   */
  description: string | null;
  /**
   * 별점
   * @format integer
   * @min 1
   * @max 5
   */
  starRate: number;
  /**
   * 익명 여부
   * @default true
   */
  isAnonymous?: boolean;
}

export interface ClubReviewDetailResponseDto {
  clubReview: ClubReviewDto;
}

export interface ClubReviewsItemDto {
  /** 고유 ID */
  id: GLint64;
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
   * 동아리 고유 ID
   * @format GLint64
   */
  clubId: string;
  /** 동아리 후기 작성 유저 정보 */
  user: UserDto | null;
  /** 후기 작성자 고유 ID, isAnonymous 여부에 따라 null 값을 가짐 */
  userId: string | null;
  /**
   * 동아리 후기 본문
   * @minLength 1
   * @maxLength 255
   */
  description: string | null;
  /**
   * 별점
   * @format integer
   * @min 1
   * @max 5
   */
  starRate: number;
  /**
   * 익명 여부
   * @default true
   */
  isAnonymous: boolean;
}

export interface ClubReviewsPaginationResponseDto {
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
  contents: ClubReviewsItemDto[];
}

export interface PatchUpdateClubReviewRequestDto {
  /**
   * 동아리 후기 본문
   * @minLength 1
   * @maxLength 255
   */
  description?: string | null;
  /**
   * 별점
   * @format integer
   * @min 1
   * @max 5
   */
  starRate?: number;
  /** 익명 여부 */
  isAnonymous?: boolean;
}

export interface CountDeleteResponseDto {
  /**
   * 삭제된 리소스 개수
   * @format integer
   */
  count: number;
}

export interface ScoreDto {
  /**
   * 별점 5의 개수
   * @format integer
   */
  five: number;
  /**
   * 별점 4의 개수
   * @format integer
   */
  four: number;
  /**
   * 별점 3의 개수
   * @format integer
   */
  three: number;
  /**
   * 별점 2의 개수
   * @format integer
   */
  two: number;
  /**
   * 별점 1의 개수
   * @format integer
   */
  one: number;
  /**
   * 별점의 평균 값
   * @format float
   */
  average: number;
}

export interface ScoreDetailResponseDto {
  score: ScoreDto;
}

export interface ClubApplicationAnswerItemDto {
  /** 질문 */
  question: string;
  /** 입력 타입 */
  inputType: ClubApplicationAnswerItemDtoInputTypeEnum;
  /** 필수 항목 여부 */
  isRequired: boolean;
  /** 허용되는 값 리스트, inputType이 text, file이라면 해당 값은 무시됨 */
  allowValues: string[];
  /** 동아리 지원서 답변 고유 ID */
  id: string;
  /** 동아리 지원서 답변 */
  answer: string;
}

export interface ClubApplicationDto {
  /** 고유 ID */
  id: GLint64;
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
   * 동아리 고유 ID
   * @format GLint64
   */
  clubId: string;
  /**
   * 지원 유저 고유 ID
   * @format GLint64
   */
  userId: string;
  /** 지원서 답변 */
  answers: ClubApplicationAnswerItemDto[];
  /** 지원서 상태 */
  status: string;
}

export interface ClubApplicationAnswersItemRequestDto {
  /** 질문 고유번호 */
  questionId: string;
  /** 답변 */
  answer: string;
}

export interface CreateClubApplicationRequestBodyDto {
  /** 답변 리스트 */
  answers: ClubApplicationAnswersItemRequestDto[];
}

export interface ClubApplicationDetailResponseDto {
  clubApplication: ClubApplicationDto;
}

export interface ClubApplicationsItemDto {
  /** 고유 ID */
  id: GLint64;
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
   * 동아리 고유 ID
   * @format GLint64
   */
  clubId: string;
  /**
   * 지원 유저 고유 ID
   * @format GLint64
   */
  userId: string;
  /** 지원서 상태 */
  status: string;
  /** 동아리 지원 유저 정보 */
  user: UserDto;
}

export interface ClubApplicationsPaginationResponseDto {
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
  contents: ClubApplicationsItemDto[];
}

export interface PatchUpdateClubApplicationDto {
  /** 답변 리스트 */
  answers?: ClubApplicationAnswersItemRequestDto[];
}

export type UpdateStatusClubApplicationStatusEnum = "accept" | "reject";

export interface UpdateClubApplicationStatusDto {
  /** 지원서 상태 */
  status: UpdateStatusClubApplicationStatusEnum;
}

export interface AttachmentsCommonResponseDto {
  attachments: AttachmentDto[];
}

export interface CreatePostTagDto {
  /**
   * 태그 명
   * @minLength 1
   * @maxLength 15
   */
  name: string;
}

export interface PostTagDetailResponseDto {
  postTag: PostTagDto;
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

export interface UserDetailResponseDto {
  user: UserDto;
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

export interface SignInRequestBodyDto {
  /** 로그인 타입 */
  loginType: UserLoginType;
  /** SNS 토큰 */
  snsToken: string;
}

export interface NoticePostDto {
  /** 고유 ID */
  id: GLint64;
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
   * @format GLint64
   */
  userId: string;
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
  /** 게시글 태그 리스트 */
  postTags: PostTagDto[];
  /** 게시글 작성자 */
  user: UserDto;
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
  /**
   * 태그 명
   * @maxItems 10
   * @minItems 0
   */
  tagNames: string[];
}

export interface NoticePostDetailResponseDto {
  noticePost: NoticePostDto;
}

export interface NoticePostsItemDto {
  /** 고유 ID */
  id: GLint64;
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
   * @format GLint64
   */
  userId: string;
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
  /** 게시글 작성 유저 정보 */
  user: UserDto;
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
  /**
   * 태그 명
   * @maxItems 10
   * @minItems 0
   */
  tagNames: string[];
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
  /**
   * 태그 명
   * @maxItems 10
   * @minItems 0
   */
  tagNames?: string[];
}

export interface NoticePostDeleteResponseDto {
  /**
   * 삭제된 리소스 개수
   * @format integer
   */
  count: number;
}

export interface NoticePostReactionsItemDto {
  /** 고유 ID */
  id: GLint64;
  /**
   * 생성일자
   * @format date-time
   */
  createdAt: string;
  /**
   * reaction 등록 유저 고유 ID
   * @format GLint64
   */
  userId: string;
  /**
   * 공지 게시글 고유 ID
   * @format GLint64
   */
  noticePostId: string;
  /** reaction type */
  type: NoticePostReactionsItemDtoTypeEnum;
}

export interface ReactionsPaginationResponseDto {
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
  contents: FreePostReactionsItemDto[];
}

export interface NoticePostCommentDto {
  /** 고유 ID */
  id: GLint64;
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
   * @format GLint64
   */
  noticePostId: string;
  /**
   * 댓글 작성자 고유 ID
   * @format GLint64
   */
  userId: string;
  /**
   * 부모 댓글 ID 해당 값을 주지 않을 경우 최상위 댓글임
   * @format GLint64
   */
  parentId: string | null;
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
   * @format GLint64
   */
  parentId?: string;
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
  /** 고유 ID */
  id: GLint64;
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
   * @format GLint64
   */
  noticePostId: string;
  /**
   * 댓글 작성자 고유 ID
   * @format GLint64
   */
  userId: string;
  /**
   * 부모 댓글 ID 해당 값을 주지 않을 경우 최상위 댓글임
   * @format GLint64
   */
  parentId: string | null;
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
  /** 댓글 작성 유저 정보 */
  user: UserDto;
  /** 댓글의 하위 댓글 nested 구조 */
  children: NoticePostCommentsItemDto[];
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
   * @format GLint64
   */
  parentId?: string;
  /**
   * 본문
   * @minLength 1
   * @maxLength 255
   */
  description: string;
  /** 익명 여부 */
  isAnonymous: boolean;
}

export interface FreePostDto {
  /** 고유 ID */
  id: GLint64;
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
   * 게시글 작성자 고유 ID, isAnonymous 여부에 따라 null 값을 가짐
   * @format GLint64
   */
  userId: string | null;
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
  /** 게시글 태그 리스트 */
  postTags: PostTagDto[];
  /** 게시글 작성자, isAnonymous 여부에 따라 null 값을 가짐 */
  user: UserDto | null;
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
  /**
   * 태그 명
   * @maxItems 10
   * @minItems 0
   */
  tagNames: string[];
}

export interface FreePostDetailResponseDto {
  freePost: FreePostDto;
}

export interface FreePostsItemDto {
  /** 고유 ID */
  id: GLint64;
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
   * 게시글 작성자 고유 ID, isAnonymous 여부에 따라 null 값을 가짐
   * @format GLint64
   */
  userId: string | null;
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
  /** 게시글 작성자, isAnonymous 여부에 따라 null 값을 가짐 */
  user: UserDto | null;
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
  /**
   * 태그 명
   * @maxItems 10
   * @minItems 0
   */
  tagNames: string[];
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
  /**
   * 태그 명
   * @maxItems 10
   * @minItems 0
   */
  tagNames?: string[];
}

export interface FreePostDeleteResponseDto {
  /**
   * 삭제된 리소스 개수
   * @format integer
   */
  count: number;
}

export interface FreePostReactionsItemDto {
  /** 고유 ID */
  id: GLint64;
  /**
   * 생성일자
   * @format date-time
   */
  createdAt: string;
  /**
   * reaction 등록 유저 고유 ID
   * @format GLint64
   */
  userId: string;
  /**
   * 자유 게시글 고유 ID
   * @format GLint64
   */
  freePostId: string;
  /** reaction type */
  type: FreePostReactionsItemDtoTypeEnum;
}

export interface FreePostCommentDto {
  /** 고유 ID */
  id: GLint64;
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
   * @format GLint64
   */
  freePostId: string;
  /**
   * 댓글 작성자 고유 ID
   * @format GLint64
   */
  userId: string;
  /**
   * 부모 댓글 ID 해당 값을 주지 않을 경우 최상위 댓글임
   * @format GLint64
   */
  parentId: string | null;
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
  parentId?: string;
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
  /** 고유 ID */
  id: GLint64;
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
   * @format GLint64
   */
  freePostId: string;
  /**
   * 댓글 작성자 고유 ID
   * @format GLint64
   */
  userId: string;
  /**
   * 부모 댓글 ID 해당 값을 주지 않을 경우 최상위 댓글임
   * @format GLint64
   */
  parentId: string | null;
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
  /** 댓글 작성 유저 정보 */
  user: UserDto;
  /** 댓글의 하위 댓글 nested 구조 */
  children: FreePostCommentsItemDto[];
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
  parentId?: string;
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
  /** 고유 ID */
  id: GLint64;
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
   * 게시글 작성자 고유 ID, isAnonymous 여부에 따라 null 값을 가짐
   * @format GLint64
   */
  userId: string | null;
  /** 게시글 제목 */
  title: string;
  /**
   * 게시글 조회수
   * @format integer
   * @default 0
   */
  hit: number;
  /** 익명 여부 */
  isAnonymous: boolean;
  /** 댓글 허용 여부 (false: 비활성화, true: 허용) */
  isAllowComment: boolean;
  /** 게시글 작성자, isAnonymous 여부에 따라 null 값을 가짐 */
  user: UserDto | null;
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

/** 동아리 상태 */
export type ClubWithCategoryAndTagDtoStatusEnum =
  | "pending"
  | "active"
  | "inactive";

/** 동아리 상태 */
export type ClubsItemDtoStatusEnum = "pending" | "active" | "inactive";

/** 동아리 상태 */
export type ClubDtoStatusEnum = "pending" | "active" | "inactive";

/** 성별 */
export type ClubMemberItemDtoGenderEnum = "male" | "female";

export type ClubMemberItemDtoRolesEnum = "member" | "president";

/** 유저 로그인 타입 */
export type UserDtoLoginTypeEnum = "KAKAO" | "GOOGLE" | "NAVER";

/** 성별 */
export type UserDtoGenderEnum = "male" | "female";

/** 유저 role */
export type UserDtoRoleEnum = "admin" | "student";

/** reaction type */
export type CreateReactionDtoTypeEnum = "like";

/** reaction type */
export type RemoveReactionDtoTypeEnum = "like";

/** 입력 타입 */
export type ClubApplicationFormQuestionItemDtoInputTypeEnum =
  | "text"
  | "checkBox"
  | "radio"
  | "file";

/** 입력 타입 */
export type PutUpdateClubApplicationFormCustomQuestionDtoInputTypeEnum =
  | "text"
  | "checkBox"
  | "radio"
  | "file";

/** 입력 타입 */
export type ClubApplicationAnswerItemDtoInputTypeEnum =
  | "text"
  | "checkBox"
  | "radio"
  | "file";

/** login type */
export type CreateUserDtoLoginTypeEnum = "KAKAO" | "GOOGLE" | "NAVER";

/** role */
export type CreateUserDtoRoleEnum = "admin" | "student";

/** gender */
export type CreateUserDtoGenderEnum = "male" | "female";

/** gender */
export type PutUpdateUserDtoGenderEnum = "male" | "female";

/** reaction type */
export type NoticePostReactionsItemDtoTypeEnum = "like";

/** reaction type */
export type FreePostReactionsItemDtoTypeEnum = "like";

/** role */
export type SignUpRequestBodyDtoRoleEnum = "admin" | "student";

/** gender */
export type SignUpRequestBodyDtoGenderEnum = "male" | "female";

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

/** 게시글 타입 */
export type PostsItemDtoTypeEnum = "free" | "notice";

/**
 * error code
 * @example 1
 */
export type AdminCreateNewMajorCodeEnum = 1;

/** error message */
export type AdminCreateNewMajorMessageEnum =
  "Invalid request parameter. Please check your request.";

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
export type AdminCreateNewMajorMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 3000
 */
export type AdminCreateNewMajorCodeEnum3 = 3000 | 3001;

/** error message */
export type AdminCreateNewMajorMessageEnum3 =
  | "Major name that already exists"
  | "Major code that already exists.";

/**
 * error code
 * @example 0
 */
export type AdminCreateNewMajorCodeEnum4 = 0;

/** error message */
export type AdminCreateNewMajorMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type AdminCreateNewClubCodeEnum = 1;

/** error message */
export type AdminCreateNewClubMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type AdminCreateNewClubCodeEnum1 = 3;

/** error message */
export type AdminCreateNewClubMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type AdminCreateNewClubCodeEnum2 = 4;

/** error message */
export type AdminCreateNewClubMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type AdminCreateNewClubCodeEnum3 = 5;

/** error message */
export type AdminCreateNewClubMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 1
 */
export type AdminCreateNewClubCodeEnum4 = 1;

/** error message */
export type AdminCreateNewClubMessageEnum4 =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 0
 */
export type AdminCreateNewClubCodeEnum5 = 0;

/** error message */
export type AdminCreateNewClubMessageEnum5 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type AdminCreateNewClubCategoryCodeEnum = 1;

/** error message */
export type AdminCreateNewClubCategoryMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type AdminCreateNewClubCategoryCodeEnum1 = 3;

/** error message */
export type AdminCreateNewClubCategoryMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type AdminCreateNewClubCategoryCodeEnum2 = 4;

/** error message */
export type AdminCreateNewClubCategoryMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5000
 */
export type AdminCreateNewClubCategoryCodeEnum3 = 5000;

/** error message */
export type AdminCreateNewClubCategoryMessageEnum3 =
  "A category name that already exists.";

/**
 * error code
 * @example 0
 */
export type AdminCreateNewClubCategoryCodeEnum4 = 0;

/** error message */
export type AdminCreateNewClubCategoryMessageEnum4 =
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
export type ClubFindAllAndCountCodeEnum = 1;

/** error message */
export type ClubFindAllAndCountMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 0
 */
export type ClubFindAllAndCountCodeEnum1 = 0;

/** error message */
export type ClubFindAllAndCountMessageEnum1 =
  "Server error. Please contact server developer";

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
  /**
   * 동아리 카테고리 ID
   * @format GLint64
   */
  categoryId?: string;
  /**
   * 동아리 태그 ID
   * @format GLint64
   */
  tagId?: string;
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
export type ClubFindOneOrNotFoundCodeEnum = 1;

/** error message */
export type ClubFindOneOrNotFoundMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type ClubFindOneOrNotFoundCodeEnum1 = 5;

/** error message */
export type ClubFindOneOrNotFoundMessageEnum1 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type ClubFindOneOrNotFoundCodeEnum2 = 0;

/** error message */
export type ClubFindOneOrNotFoundMessageEnum2 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubFindAllMembersCodeEnum = 1;

/** error message */
export type ClubFindAllMembersMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type ClubFindAllMembersCodeEnum1 = 5;

/** error message */
export type ClubFindAllMembersMessageEnum1 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type ClubFindAllMembersCodeEnum2 = 0;

/** error message */
export type ClubFindAllMembersMessageEnum2 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubFindAllTagsCodeEnum = 1;

/** error message */
export type ClubFindAllTagsMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type ClubFindAllTagsCodeEnum1 = 5;

/** error message */
export type ClubFindAllTagsMessageEnum1 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type ClubFindAllTagsCodeEnum2 = 0;

/** error message */
export type ClubFindAllTagsMessageEnum2 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubAppendTagsCodeEnum = 1;

/** error message */
export type ClubAppendTagsMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type ClubAppendTagsCodeEnum1 = 3;

/** error message */
export type ClubAppendTagsMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type ClubAppendTagsCodeEnum2 = 4;

/** error message */
export type ClubAppendTagsMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type ClubAppendTagsCodeEnum3 = 5;

/** error message */
export type ClubAppendTagsMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type ClubAppendTagsCodeEnum4 = 0;

/** error message */
export type ClubAppendTagsMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubRemoveTagsCodeEnum = 1;

/** error message */
export type ClubRemoveTagsMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type ClubRemoveTagsCodeEnum1 = 3;

/** error message */
export type ClubRemoveTagsMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type ClubRemoveTagsCodeEnum2 = 4;

/** error message */
export type ClubRemoveTagsMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type ClubRemoveTagsCodeEnum3 = 5;

/** error message */
export type ClubRemoveTagsMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type ClubRemoveTagsCodeEnum4 = 0;

/** error message */
export type ClubRemoveTagsMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubFindAllCategoriesCodeEnum = 1;

/** error message */
export type ClubFindAllCategoriesMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type ClubFindAllCategoriesCodeEnum1 = 5;

/** error message */
export type ClubFindAllCategoriesMessageEnum1 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type ClubFindAllCategoriesCodeEnum2 = 0;

/** error message */
export type ClubFindAllCategoriesMessageEnum2 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubCreateClubPostCodeEnum = 1;

/** error message */
export type ClubCreateClubPostMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type ClubCreateClubPostCodeEnum1 = 3;

/** error message */
export type ClubCreateClubPostMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type ClubCreateClubPostCodeEnum2 = 4;

/** error message */
export type ClubCreateClubPostMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type ClubCreateClubPostCodeEnum3 = 5;

/** error message */
export type ClubCreateClubPostMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type ClubCreateClubPostCodeEnum4 = 0;

/** error message */
export type ClubCreateClubPostMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubFindAllAndCountClubPostsCodeEnum = 1;

/** error message */
export type ClubFindAllAndCountClubPostsMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type ClubFindAllAndCountClubPostsCodeEnum1 = 5;

/** error message */
export type ClubFindAllAndCountClubPostsMessageEnum1 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type ClubFindAllAndCountClubPostsCodeEnum2 = 0;

/** error message */
export type ClubFindAllAndCountClubPostsMessageEnum2 =
  "Server error. Please contact server developer";

export interface ClubFindAllAndCountClubPostsParams {
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
   * 게시글 본문 필터링
   * @minLength 1
   */
  description?: string;
  /**
   * 정렬 필드<br>csv 형태로 보내야합니다.<br>- 가 붙으면 내림차순 - 가 붙지 않으면 오름차순<br>허용된 filed: [id, userId, createdAt, updatedAt]
   * @format csv
   * @default "id"
   * @example "-id,updatedAt"
   */
  order?: string;
  clubId: string;
}

/**
 * error code
 * @example 1
 */
export type ClubPatchUpdateClubPostCodeEnum = 1 | 6;

/** error message */
export type ClubPatchUpdateClubPostMessageEnum =
  | "Invalid request parameter. Please check your request."
  | "At least one update field must exist.";

/**
 * error code
 * @example 3
 */
export type ClubPatchUpdateClubPostCodeEnum1 = 3;

/** error message */
export type ClubPatchUpdateClubPostMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type ClubPatchUpdateClubPostCodeEnum2 = 4;

/** error message */
export type ClubPatchUpdateClubPostMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type ClubPatchUpdateClubPostCodeEnum3 = 5;

/** error message */
export type ClubPatchUpdateClubPostMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type ClubPatchUpdateClubPostCodeEnum4 = 0;

/** error message */
export type ClubPatchUpdateClubPostMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubRemoveClubPostCodeEnum = 1;

/** error message */
export type ClubRemoveClubPostMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type ClubRemoveClubPostCodeEnum1 = 3;

/** error message */
export type ClubRemoveClubPostMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type ClubRemoveClubPostCodeEnum2 = 4;

/** error message */
export type ClubRemoveClubPostMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type ClubRemoveClubPostCodeEnum3 = 5;

/** error message */
export type ClubRemoveClubPostMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type ClubRemoveClubPostCodeEnum4 = 0;

/** error message */
export type ClubRemoveClubPostMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubCreateClubPostReactionCodeEnum = 1;

/** error message */
export type ClubCreateClubPostReactionMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type ClubCreateClubPostReactionCodeEnum1 = 3;

/** error message */
export type ClubCreateClubPostReactionMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type ClubCreateClubPostReactionCodeEnum2 = 5;

/** error message */
export type ClubCreateClubPostReactionMessageEnum2 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 4000
 */
export type ClubCreateClubPostReactionCodeEnum3 = 4000;

/** error message */
export type ClubCreateClubPostReactionMessageEnum3 = "You've already liked it.";

/**
 * error code
 * @example 0
 */
export type ClubCreateClubPostReactionCodeEnum4 = 0;

/** error message */
export type ClubCreateClubPostReactionMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubRemoveClubPostReactionCodeEnum = 1;

/** error message */
export type ClubRemoveClubPostReactionMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type ClubRemoveClubPostReactionCodeEnum1 = 3;

/** error message */
export type ClubRemoveClubPostReactionMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type ClubRemoveClubPostReactionCodeEnum2 = 5;

/** error message */
export type ClubRemoveClubPostReactionMessageEnum2 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 4001
 */
export type ClubRemoveClubPostReactionCodeEnum3 = 4001;

/** error message */
export type ClubRemoveClubPostReactionMessageEnum3 =
  "You haven't liked it yet.";

/**
 * error code
 * @example 0
 */
export type ClubRemoveClubPostReactionCodeEnum4 = 0;

/** error message */
export type ClubRemoveClubPostReactionMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubCreateClubPostCommentCodeEnum = 1;

/** error message */
export type ClubCreateClubPostCommentMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type ClubCreateClubPostCommentCodeEnum1 = 3;

/** error message */
export type ClubCreateClubPostCommentMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type ClubCreateClubPostCommentCodeEnum2 = 4;

/** error message */
export type ClubCreateClubPostCommentMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type ClubCreateClubPostCommentCodeEnum3 = 5;

/** error message */
export type ClubCreateClubPostCommentMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type ClubCreateClubPostCommentCodeEnum4 = 0;

/** error message */
export type ClubCreateClubPostCommentMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubFindAllAndCountClubPostCommentsCodeEnum = 1;

/** error message */
export type ClubFindAllAndCountClubPostCommentsMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type ClubFindAllAndCountClubPostCommentsCodeEnum1 = 5;

/** error message */
export type ClubFindAllAndCountClubPostCommentsMessageEnum1 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type ClubFindAllAndCountClubPostCommentsCodeEnum2 = 0;

/** error message */
export type ClubFindAllAndCountClubPostCommentsMessageEnum2 =
  "Server error. Please contact server developer";

export interface ClubFindAllAndCountClubPostCommentsParams {
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
   * 정렬 필드<br>csv 형태로 보내야합니다.<br>- 가 붙으면 내림차순 - 가 붙지 않으면 오름차순<br>허용된 filed: [id, isAnonymous, createdAt, updatedAt]
   * @format csv
   * @default "id"
   * @example "-id,updatedAt"
   */
  order?: string;
  clubId: string;
  postId: string;
}

/**
 * error code
 * @example 1
 */
export type ClubPatchUpdateClubPostCommentCodeEnum = 1 | 6;

/** error message */
export type ClubPatchUpdateClubPostCommentMessageEnum =
  | "Invalid request parameter. Please check your request."
  | "At least one update field must exist.";

/**
 * error code
 * @example 3
 */
export type ClubPatchUpdateClubPostCommentCodeEnum1 = 3;

/** error message */
export type ClubPatchUpdateClubPostCommentMessageEnum1 =
  "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type ClubPatchUpdateClubPostCommentCodeEnum2 = 4;

/** error message */
export type ClubPatchUpdateClubPostCommentMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type ClubPatchUpdateClubPostCommentCodeEnum3 = 5;

/** error message */
export type ClubPatchUpdateClubPostCommentMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type ClubPatchUpdateClubPostCommentCodeEnum4 = 0;

/** error message */
export type ClubPatchUpdateClubPostCommentMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubRemoveClubPostCommentCodeEnum = 1;

/** error message */
export type ClubRemoveClubPostCommentMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type ClubRemoveClubPostCommentCodeEnum1 = 3;

/** error message */
export type ClubRemoveClubPostCommentMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type ClubRemoveClubPostCommentCodeEnum2 = 4;

/** error message */
export type ClubRemoveClubPostCommentMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type ClubRemoveClubPostCommentCodeEnum3 = 5;

/** error message */
export type ClubRemoveClubPostCommentMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type ClubRemoveClubPostCommentCodeEnum4 = 0;

/** error message */
export type ClubRemoveClubPostCommentMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubFindLatestApplicationFormCodeEnum = 1;

/** error message */
export type ClubFindLatestApplicationFormMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type ClubFindLatestApplicationFormCodeEnum1 = 5;

/** error message */
export type ClubFindLatestApplicationFormMessageEnum1 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type ClubFindLatestApplicationFormCodeEnum2 = 0;

/** error message */
export type ClubFindLatestApplicationFormMessageEnum2 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubPutUpdateApplicationFormCodeEnum = 1;

/** error message */
export type ClubPutUpdateApplicationFormMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type ClubPutUpdateApplicationFormCodeEnum1 = 3;

/** error message */
export type ClubPutUpdateApplicationFormMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type ClubPutUpdateApplicationFormCodeEnum2 = 4;

/** error message */
export type ClubPutUpdateApplicationFormMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type ClubPutUpdateApplicationFormCodeEnum3 = 5;

/** error message */
export type ClubPutUpdateApplicationFormMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type ClubPutUpdateApplicationFormCodeEnum4 = 0;

/** error message */
export type ClubPutUpdateApplicationFormMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubCreateClubReviewCodeEnum = 1;

/** error message */
export type ClubCreateClubReviewMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type ClubCreateClubReviewCodeEnum1 = 3;

/** error message */
export type ClubCreateClubReviewMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type ClubCreateClubReviewCodeEnum2 = 4;

/** error message */
export type ClubCreateClubReviewMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type ClubCreateClubReviewCodeEnum3 = 5;

/** error message */
export type ClubCreateClubReviewMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 6000
 */
export type ClubCreateClubReviewCodeEnum4 = 6000;

/** error message */
export type ClubCreateClubReviewMessageEnum4 =
  "You've already reviewed this club.";

/**
 * error code
 * @example 0
 */
export type ClubCreateClubReviewCodeEnum5 = 0;

/** error message */
export type ClubCreateClubReviewMessageEnum5 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubFindAllAndCountClubReviewsCodeEnum = 1;

/** error message */
export type ClubFindAllAndCountClubReviewsMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type ClubFindAllAndCountClubReviewsCodeEnum1 = 5;

/** error message */
export type ClubFindAllAndCountClubReviewsMessageEnum1 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type ClubFindAllAndCountClubReviewsCodeEnum2 = 0;

/** error message */
export type ClubFindAllAndCountClubReviewsMessageEnum2 =
  "Server error. Please contact server developer";

export interface ClubFindAllAndCountClubReviewsParams {
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
   * 정렬 필드<br>csv 형태로 보내야합니다.<br>- 가 붙으면 내림차순 - 가 붙지 않으면 오름차순<br>허용된 filed: [id, starRate, isAnonymous, createdAt, updatedAt]
   * @format csv
   * @default "id"
   * @example "-id,updatedAt"
   */
  order?: string;
  clubId: string;
}

/**
 * error code
 * @example 1
 */
export type ClubFindBestClubReviewCodeEnum = 1;

/** error message */
export type ClubFindBestClubReviewMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type ClubFindBestClubReviewCodeEnum1 = 5;

/** error message */
export type ClubFindBestClubReviewMessageEnum1 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type ClubFindBestClubReviewCodeEnum2 = 0;

/** error message */
export type ClubFindBestClubReviewMessageEnum2 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubPatchUpdateClubReviewCodeEnum = 1 | 6;

/** error message */
export type ClubPatchUpdateClubReviewMessageEnum =
  | "Invalid request parameter. Please check your request."
  | "At least one update field must exist.";

/**
 * error code
 * @example 3
 */
export type ClubPatchUpdateClubReviewCodeEnum1 = 3;

/** error message */
export type ClubPatchUpdateClubReviewMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type ClubPatchUpdateClubReviewCodeEnum2 = 4;

/** error message */
export type ClubPatchUpdateClubReviewMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type ClubPatchUpdateClubReviewCodeEnum3 = 5;

/** error message */
export type ClubPatchUpdateClubReviewMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type ClubPatchUpdateClubReviewCodeEnum4 = 0;

/** error message */
export type ClubPatchUpdateClubReviewMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubRemoveClubReviewCodeEnum = 1;

/** error message */
export type ClubRemoveClubReviewMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type ClubRemoveClubReviewCodeEnum1 = 3;

/** error message */
export type ClubRemoveClubReviewMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type ClubRemoveClubReviewCodeEnum2 = 4;

/** error message */
export type ClubRemoveClubReviewMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type ClubRemoveClubReviewCodeEnum3 = 5;

/** error message */
export type ClubRemoveClubReviewMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type ClubRemoveClubReviewCodeEnum4 = 0;

/** error message */
export type ClubRemoveClubReviewMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubGetClubReviewsScoreCodeEnum = 1;

/** error message */
export type ClubGetClubReviewsScoreMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type ClubGetClubReviewsScoreCodeEnum1 = 5;

/** error message */
export type ClubGetClubReviewsScoreMessageEnum1 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type ClubGetClubReviewsScoreCodeEnum2 = 0;

/** error message */
export type ClubGetClubReviewsScoreMessageEnum2 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubCreateClubReviewReactionCodeEnum = 1;

/** error message */
export type ClubCreateClubReviewReactionMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type ClubCreateClubReviewReactionCodeEnum1 = 3;

/** error message */
export type ClubCreateClubReviewReactionMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type ClubCreateClubReviewReactionCodeEnum2 = 5;

/** error message */
export type ClubCreateClubReviewReactionMessageEnum2 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 4000
 */
export type ClubCreateClubReviewReactionCodeEnum3 = 4000;

/** error message */
export type ClubCreateClubReviewReactionMessageEnum3 =
  "You've already liked it.";

/**
 * error code
 * @example 0
 */
export type ClubCreateClubReviewReactionCodeEnum4 = 0;

/** error message */
export type ClubCreateClubReviewReactionMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubRemoveClubReviewReactionCodeEnum = 1;

/** error message */
export type ClubRemoveClubReviewReactionMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type ClubRemoveClubReviewReactionCodeEnum1 = 3;

/** error message */
export type ClubRemoveClubReviewReactionMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type ClubRemoveClubReviewReactionCodeEnum2 = 5;

/** error message */
export type ClubRemoveClubReviewReactionMessageEnum2 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 4001
 */
export type ClubRemoveClubReviewReactionCodeEnum3 = 4001;

/** error message */
export type ClubRemoveClubReviewReactionMessageEnum3 =
  "You haven't liked it yet.";

/**
 * error code
 * @example 0
 */
export type ClubRemoveClubReviewReactionCodeEnum4 = 0;

/** error message */
export type ClubRemoveClubReviewReactionMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubCreateClubApplicationCodeEnum = 1 | 8002 | 8005 | 8003 | 8004;

/** error message */
export type ClubCreateClubApplicationMessageEnum =
  | "Invalid request parameter. Please check your request."
  | "Not a club application period"
  | "Answer doesn't match the format of the club application."
  | "Missing answers to required questions."
  | "The answer to the question is not an allowed value.";

/**
 * error code
 * @example 3
 */
export type ClubCreateClubApplicationCodeEnum1 = 3;

/** error message */
export type ClubCreateClubApplicationMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type ClubCreateClubApplicationCodeEnum2 = 4;

/** error message */
export type ClubCreateClubApplicationMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type ClubCreateClubApplicationCodeEnum3 = 5;

/** error message */
export type ClubCreateClubApplicationMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 8000
 */
export type ClubCreateClubApplicationCodeEnum4 = 8000 | 8001;

/** error message */
export type ClubCreateClubApplicationMessageEnum4 =
  | "Can't submit a club application because you're already a member of a club."
  | "Application has been processing.";

/**
 * error code
 * @example 0
 */
export type ClubCreateClubApplicationCodeEnum5 = 0;

/** error message */
export type ClubCreateClubApplicationMessageEnum5 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubFindAllAndCountClubApplicationsCodeEnum = 1;

/** error message */
export type ClubFindAllAndCountClubApplicationsMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type ClubFindAllAndCountClubApplicationsCodeEnum1 = 3;

/** error message */
export type ClubFindAllAndCountClubApplicationsMessageEnum1 =
  "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type ClubFindAllAndCountClubApplicationsCodeEnum2 = 4;

/** error message */
export type ClubFindAllAndCountClubApplicationsMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type ClubFindAllAndCountClubApplicationsCodeEnum3 = 5;

/** error message */
export type ClubFindAllAndCountClubApplicationsMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type ClubFindAllAndCountClubApplicationsCodeEnum4 = 0;

/** error message */
export type ClubFindAllAndCountClubApplicationsMessageEnum4 =
  "Server error. Please contact server developer";

export interface ClubFindAllAndCountClubApplicationsParams {
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
  /** 동아리 지원서 상태 필터링 */
  status?: string;
  /**
   * 정렬 필드<br>csv 형태로 보내야합니다.<br>- 가 붙으면 내림차순 - 가 붙지 않으면 오름차순<br>허용된 filed: [id, status, createdAt, updatedAt]
   * @format csv
   * @default "id"
   * @example "-id,updatedAt"
   */
  order?: string;
  clubId: string;
}

/**
 * error code
 * @example 1
 */
export type ClubFindOneClubApplicationCodeEnum = 1 | 8006;

/** error message */
export type ClubFindOneClubApplicationMessageEnum =
  | "Invalid request parameter. Please check your request."
  | "Application has been processed.";

/**
 * error code
 * @example 3
 */
export type ClubFindOneClubApplicationCodeEnum1 = 3;

/** error message */
export type ClubFindOneClubApplicationMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type ClubFindOneClubApplicationCodeEnum2 = 4;

/** error message */
export type ClubFindOneClubApplicationMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type ClubFindOneClubApplicationCodeEnum3 = 5;

/** error message */
export type ClubFindOneClubApplicationMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type ClubFindOneClubApplicationCodeEnum4 = 0;

/** error message */
export type ClubFindOneClubApplicationMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubPatchUpdateClubApplicationCodeEnum =
  | 1
  | 8006
  | 8005
  | 8003
  | 8004;

/** error message */
export type ClubPatchUpdateClubApplicationMessageEnum =
  | "Invalid request parameter. Please check your request."
  | "Application has been processed."
  | "Answer doesn't match the format of the club application."
  | "Missing answers to required questions."
  | "The answer to the question is not an allowed value.";

/**
 * error code
 * @example 3
 */
export type ClubPatchUpdateClubApplicationCodeEnum1 = 3;

/** error message */
export type ClubPatchUpdateClubApplicationMessageEnum1 =
  "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type ClubPatchUpdateClubApplicationCodeEnum2 = 4;

/** error message */
export type ClubPatchUpdateClubApplicationMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type ClubPatchUpdateClubApplicationCodeEnum3 = 5;

/** error message */
export type ClubPatchUpdateClubApplicationMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type ClubPatchUpdateClubApplicationCodeEnum4 = 0;

/** error message */
export type ClubPatchUpdateClubApplicationMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubUpdateClubApplicationStatusCodeEnum = 1 | 8006;

/** error message */
export type ClubUpdateClubApplicationStatusMessageEnum =
  | "Invalid request parameter. Please check your request."
  | "Application has been processed.";

/**
 * error code
 * @example 3
 */
export type ClubUpdateClubApplicationStatusCodeEnum1 = 3;

/** error message */
export type ClubUpdateClubApplicationStatusMessageEnum1 =
  "This token is invalid.";

/**
 * error code
 * @example 4
 */
export type ClubUpdateClubApplicationStatusCodeEnum2 = 4;

/** error message */
export type ClubUpdateClubApplicationStatusMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type ClubUpdateClubApplicationStatusCodeEnum3 = 5;

/** error message */
export type ClubUpdateClubApplicationStatusMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 9000
 */
export type ClubUpdateClubApplicationStatusCodeEnum4 = 9000;

/** error message */
export type ClubUpdateClubApplicationStatusMessageEnum4 =
  "Already a member of the club.";

/**
 * error code
 * @example 0
 */
export type ClubUpdateClubApplicationStatusCodeEnum5 = 0;

/** error message */
export type ClubUpdateClubApplicationStatusMessageEnum5 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type ClubCategoryFindAllCodeEnum = 1;

/** error message */
export type ClubCategoryFindAllMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 0
 */
export type ClubCategoryFindAllCodeEnum1 = 0;

/** error message */
export type ClubCategoryFindAllMessageEnum1 =
  "Server error. Please contact server developer";

export interface ClubCategoryFindAllParams {
  /**
   * 카테고리 명 필터링
   * @minLength 1
   * @maxLength 20
   */
  name?: string;
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
export type AttachmentUploadFilesMessageEnum =
  "Invalid request parameter. Please check your request.";

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
export type AttachmentUploadFilesMessageEnum2 =
  "Server error. Please contact server developer";

export interface AttachmentUploadFilesPayload {
  files?: File[];
}

/**
 * error code
 * @example 1
 */
export type PostTagCreateCodeEnum = 1;

/** error message */
export type PostTagCreateMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type PostTagCreateCodeEnum1 = 3;

/** error message */
export type PostTagCreateMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 0
 */
export type PostTagCreateCodeEnum2 = 0;

/** error message */
export type PostTagCreateMessageEnum2 =
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

/**
 * error code
 * @example 0
 */
export type NoticePostFindAllAndCountCodeEnum1 = 0;

/** error message */
export type NoticePostFindAllAndCountMessageEnum1 =
  "Server error. Please contact server developer";

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
   * @format GLint64
   */
  id?: string;
  /**
   * 공지게시글 작성자 고유 ID 필터링
   * @format GLint64
   */
  userId?: string;
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
export type NoticePostPutUpdateCodeEnum = 1;

/** error message */
export type NoticePostPutUpdateMessageEnum =
  "Invalid request parameter. Please check your request.";

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
export type NoticePostPutUpdateMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type NoticePostPutUpdateCodeEnum3 = 5;

/** error message */
export type NoticePostPutUpdateMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type NoticePostPutUpdateCodeEnum4 = 0;

/** error message */
export type NoticePostPutUpdateMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type NoticePostPatchUpdateCodeEnum = 1;

/** error message */
export type NoticePostPatchUpdateMessageEnum =
  "Invalid request parameter. Please check your request.";

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
export type NoticePostPatchUpdateMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type NoticePostPatchUpdateCodeEnum3 = 5;

/** error message */
export type NoticePostPatchUpdateMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type NoticePostPatchUpdateCodeEnum4 = 0;

/** error message */
export type NoticePostPatchUpdateMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type NoticePostRemoveCodeEnum = 1;

/** error message */
export type NoticePostRemoveMessageEnum =
  "Invalid request parameter. Please check your request.";

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
export type NoticePostRemoveMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type NoticePostRemoveCodeEnum3 = 5;

/** error message */
export type NoticePostRemoveMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type NoticePostRemoveCodeEnum4 = 0;

/** error message */
export type NoticePostRemoveMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type NoticePostIncreaseHitCodeEnum = 1;

/** error message */
export type NoticePostIncreaseHitMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type NoticePostIncreaseHitCodeEnum1 = 5;

/** error message */
export type NoticePostIncreaseHitMessageEnum1 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type NoticePostIncreaseHitCodeEnum2 = 0;

/** error message */
export type NoticePostIncreaseHitMessageEnum2 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type NoticePostFindAllAndCountReactionsCodeEnum = 1;

/** error message */
export type NoticePostFindAllAndCountReactionsMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type NoticePostFindAllAndCountReactionsCodeEnum1 = 5;

/** error message */
export type NoticePostFindAllAndCountReactionsMessageEnum1 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type NoticePostFindAllAndCountReactionsCodeEnum2 = 0;

/** error message */
export type NoticePostFindAllAndCountReactionsMessageEnum2 =
  "Server error. Please contact server developer";

export interface NoticePostFindAllAndCountReactionsParams {
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
   * 리액션 생성 유저 고유 ID 필터링
   * @format GLint64
   * @min 1
   */
  userId?: string;
  /** 리액션 타입 필터링 */
  type?: TypeEnum;
  /**
   * 정렬 필드<br>csv 형태로 보내야합니다.<br>- 가 붙으면 내림차순 - 가 붙지 않으면 오름차순<br>허용된 filed: [id, type, userId, createdAt]
   * @format csv
   * @default "id"
   * @example "-id,updatedAt"
   */
  order?: string;
  postId: string;
}

/** 리액션 타입 필터링 */
export type TypeEnum = "like";

/** 리액션 타입 필터링 */
export type NoticePostFindAllAndCountReactionsParams1TypeEnum = "like";

/**
 * error code
 * @example 1
 */
export type NoticePostCreateReactionCodeEnum = 1;

/** error message */
export type NoticePostCreateReactionMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type NoticePostCreateReactionCodeEnum1 = 3;

/** error message */
export type NoticePostCreateReactionMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type NoticePostCreateReactionCodeEnum2 = 5;

/** error message */
export type NoticePostCreateReactionMessageEnum2 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 4000
 */
export type NoticePostCreateReactionCodeEnum3 = 4000;

/** error message */
export type NoticePostCreateReactionMessageEnum3 = "You've already liked it.";

/**
 * error code
 * @example 0
 */
export type NoticePostCreateReactionCodeEnum4 = 0;

/** error message */
export type NoticePostCreateReactionMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type NoticePostRemoveReactionCodeEnum = 1;

/** error message */
export type NoticePostRemoveReactionMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type NoticePostRemoveReactionCodeEnum1 = 3;

/** error message */
export type NoticePostRemoveReactionMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type NoticePostRemoveReactionCodeEnum2 = 5;

/** error message */
export type NoticePostRemoveReactionMessageEnum2 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 4001
 */
export type NoticePostRemoveReactionCodeEnum3 = 4001;

/** error message */
export type NoticePostRemoveReactionMessageEnum3 = "You haven't liked it yet.";

/**
 * error code
 * @example 0
 */
export type NoticePostRemoveReactionCodeEnum4 = 0;

/** error message */
export type NoticePostRemoveReactionMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type NoticePostCommentCreateCodeEnum = 1;

/** error message */
export type NoticePostCommentCreateMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type NoticePostCommentCreateCodeEnum1 = 3;

/** error message */
export type NoticePostCommentCreateMessageEnum1 = "This token is invalid.";

/**
 * error code
 * @example 7000
 */
export type NoticePostCommentCreateCodeEnum2 = 7000;

/** error message */
export type NoticePostCommentCreateMessageEnum2 =
  "Comments are disabled for this post.";

/**
 * error code
 * @example 5
 */
export type NoticePostCommentCreateCodeEnum3 = 5;

/** error message */
export type NoticePostCommentCreateMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type NoticePostCommentCreateCodeEnum4 = 0;

/** error message */
export type NoticePostCommentCreateMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type NoticePostCommentFindAllAndCountCodeEnum = 1;

/** error message */
export type NoticePostCommentFindAllAndCountMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type NoticePostCommentFindAllAndCountCodeEnum1 = 5;

/** error message */
export type NoticePostCommentFindAllAndCountMessageEnum1 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type NoticePostCommentFindAllAndCountCodeEnum2 = 0;

/** error message */
export type NoticePostCommentFindAllAndCountMessageEnum2 =
  "Server error. Please contact server developer";

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
  postId: string;
}

/**
 * error code
 * @example 1
 */
export type NoticePostCommentPutUpdateCodeEnum = 1;

/** error message */
export type NoticePostCommentPutUpdateMessageEnum =
  "Invalid request parameter. Please check your request.";

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
export type NoticePostCommentPutUpdateMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type NoticePostCommentPutUpdateCodeEnum3 = 5;

/** error message */
export type NoticePostCommentPutUpdateMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type NoticePostCommentPutUpdateCodeEnum4 = 0;

/** error message */
export type NoticePostCommentPutUpdateMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type NoticePostCommentRemoveCodeEnum = 1;

/** error message */
export type NoticePostCommentRemoveMessageEnum =
  "Invalid request parameter. Please check your request.";

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
export type NoticePostCommentRemoveMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type NoticePostCommentRemoveCodeEnum3 = 5;

/** error message */
export type NoticePostCommentRemoveMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type NoticePostCommentRemoveCodeEnum4 = 0;

/** error message */
export type NoticePostCommentRemoveMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type NoticePostCommentCreateReactionCodeEnum = 1;

/** error message */
export type NoticePostCommentCreateReactionMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type NoticePostCommentCreateReactionCodeEnum1 = 3;

/** error message */
export type NoticePostCommentCreateReactionMessageEnum1 =
  "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type NoticePostCommentCreateReactionCodeEnum2 = 5;

/** error message */
export type NoticePostCommentCreateReactionMessageEnum2 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 4000
 */
export type NoticePostCommentCreateReactionCodeEnum3 = 4000;

/** error message */
export type NoticePostCommentCreateReactionMessageEnum3 =
  "You've already liked it.";

/**
 * error code
 * @example 0
 */
export type NoticePostCommentCreateReactionCodeEnum4 = 0;

/** error message */
export type NoticePostCommentCreateReactionMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type NoticePostCommentRemoveReactionCodeEnum = 1;

/** error message */
export type NoticePostCommentRemoveReactionMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type NoticePostCommentRemoveReactionCodeEnum1 = 3;

/** error message */
export type NoticePostCommentRemoveReactionMessageEnum1 =
  "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type NoticePostCommentRemoveReactionCodeEnum2 = 5;

/** error message */
export type NoticePostCommentRemoveReactionMessageEnum2 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 4001
 */
export type NoticePostCommentRemoveReactionCodeEnum3 = 4001;

/** error message */
export type NoticePostCommentRemoveReactionMessageEnum3 =
  "You haven't liked it yet.";

/**
 * error code
 * @example 0
 */
export type NoticePostCommentRemoveReactionCodeEnum4 = 0;

/** error message */
export type NoticePostCommentRemoveReactionMessageEnum4 =
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
   * @format GLint64
   */
  id?: string;
  /**
   * 자유게시글 작성자 고유 ID 필터링
   * @format GLint64
   */
  userId?: string;
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
export type FreePostRemoveReactionMessageEnum3 = "You haven't liked it yet.";

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
export type FreePostFindAllAndCountReactionsCodeEnum = 1;

/** error message */
export type FreePostFindAllAndCountReactionsMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type FreePostFindAllAndCountReactionsCodeEnum1 = 5;

/** error message */
export type FreePostFindAllAndCountReactionsMessageEnum1 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreePostFindAllAndCountReactionsCodeEnum2 = 0;

/** error message */
export type FreePostFindAllAndCountReactionsMessageEnum2 =
  "Server error. Please contact server developer";

export interface FreePostFindAllAndCountReactionsParams {
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
   * 리액션 생성 유저 고유 ID 필터링
   * @format GLint64
   */
  userId?: string;
  /** 리액션 타입 필터링 */
  type?: TypeEnum1;
  /**
   * 정렬 필드<br>csv 형태로 보내야합니다.<br>- 가 붙으면 내림차순 - 가 붙지 않으면 오름차순<br>허용된 filed: [id, type, userId, createdAt]
   * @format csv
   * @default "id"
   * @example "-id,updatedAt"
   */
  order?: string;
  postId: string;
}

/** 리액션 타입 필터링 */
export type TypeEnum1 = "like";

/** 리액션 타입 필터링 */
export type FreePostFindAllAndCountReactionsParams1TypeEnum = "like";

/**
 * error code
 * @example 1
 */
export type FreePostCommentCreateCodeEnum = 1;

/** error message */
export type FreePostCommentCreateMessageEnum =
  "Invalid request parameter. Please check your request.";

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
export type FreePostCommentCreateMessageEnum2 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreePostCommentCreateCodeEnum3 = 0;

/** error message */
export type FreePostCommentCreateMessageEnum3 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreePostCommentFindAllAndCountCodeEnum = 1;

/** error message */
export type FreePostCommentFindAllAndCountMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 5
 */
export type FreePostCommentFindAllAndCountCodeEnum1 = 5;

/** error message */
export type FreePostCommentFindAllAndCountMessageEnum1 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreePostCommentFindAllAndCountCodeEnum2 = 0;

/** error message */
export type FreePostCommentFindAllAndCountMessageEnum2 =
  "Server error. Please contact server developer";

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
  postId: string;
}

/**
 * error code
 * @example 1
 */
export type FreePostCommentPutUpdateCodeEnum = 1;

/** error message */
export type FreePostCommentPutUpdateMessageEnum =
  "Invalid request parameter. Please check your request.";

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
export type FreePostCommentPutUpdateMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type FreePostCommentPutUpdateCodeEnum3 = 5;

/** error message */
export type FreePostCommentPutUpdateMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreePostCommentPutUpdateCodeEnum4 = 0;

/** error message */
export type FreePostCommentPutUpdateMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreePostCommentRemoveCodeEnum = 1;

/** error message */
export type FreePostCommentRemoveMessageEnum =
  "Invalid request parameter. Please check your request.";

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
export type FreePostCommentRemoveMessageEnum2 =
  "You don't have permission to access it.";

/**
 * error code
 * @example 5
 */
export type FreePostCommentRemoveCodeEnum3 = 5;

/** error message */
export type FreePostCommentRemoveMessageEnum3 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 0
 */
export type FreePostCommentRemoveCodeEnum4 = 0;

/** error message */
export type FreePostCommentRemoveMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreePostCommentCreateReactionCodeEnum = 1;

/** error message */
export type FreePostCommentCreateReactionMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreePostCommentCreateReactionCodeEnum1 = 3;

/** error message */
export type FreePostCommentCreateReactionMessageEnum1 =
  "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type FreePostCommentCreateReactionCodeEnum2 = 5;

/** error message */
export type FreePostCommentCreateReactionMessageEnum2 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 4000
 */
export type FreePostCommentCreateReactionCodeEnum3 = 4000;

/** error message */
export type FreePostCommentCreateReactionMessageEnum3 =
  "You've already liked it.";

/**
 * error code
 * @example 0
 */
export type FreePostCommentCreateReactionCodeEnum4 = 0;

/** error message */
export type FreePostCommentCreateReactionMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type FreePostCommentRemoveReactionCodeEnum = 1;

/** error message */
export type FreePostCommentRemoveReactionMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 3
 */
export type FreePostCommentRemoveReactionCodeEnum1 = 3;

/** error message */
export type FreePostCommentRemoveReactionMessageEnum1 =
  "This token is invalid.";

/**
 * error code
 * @example 5
 */
export type FreePostCommentRemoveReactionCodeEnum2 = 5;

/** error message */
export type FreePostCommentRemoveReactionMessageEnum2 =
  "The resource you're trying to access doesn't exist.";

/**
 * error code
 * @example 4001
 */
export type FreePostCommentRemoveReactionCodeEnum3 = 4001;

/** error message */
export type FreePostCommentRemoveReactionMessageEnum3 =
  "You haven't liked it yet.";

/**
 * error code
 * @example 0
 */
export type FreePostCommentRemoveReactionCodeEnum4 = 0;

/** error message */
export type FreePostCommentRemoveReactionMessageEnum4 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 0
 */
export type AuthSocialCheckRegistrationCodeEnum = 0;

/** error message */
export type AuthSocialCheckRegistrationMessageEnum =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type AuthSocialSignUpCodeEnum = 1;

/** error message */
export type AuthSocialSignUpMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 2000
 */
export type AuthSocialSignUpCodeEnum1 = 2000 | 2001;

/** error message */
export type AuthSocialSignUpMessageEnum1 =
  | "An email that already exists."
  | "A cell phone number that already exists.";

/**
 * error code
 * @example 0
 */
export type AuthSocialSignUpCodeEnum2 = 0;

/** error message */
export type AuthSocialSignUpMessageEnum2 =
  "Server error. Please contact server developer";

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
export type AuthSocialSignInMessageEnum1 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type DevGetAccessTokenCodeEnum = 1;

/** error message */
export type DevGetAccessTokenMessageEnum =
  "Invalid request parameter. Please check your request.";

/**
 * error code
 * @example 0
 */
export type DevGetAccessTokenCodeEnum1 = 0;

/** error message */
export type DevGetAccessTokenMessageEnum1 =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 0
 */
export type DevFindAllErrorCodeCodeEnum = 0;

/** error message */
export type DevFindAllErrorCodeMessageEnum =
  "Server error. Please contact server developer";

/**
 * error code
 * @example 1
 */
export type PostFindAllAndCountCodeEnum = 1;

/** error message */
export type PostFindAllAndCountMessageEnum =
  "Invalid request parameter. Please check your request.";

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
   * @format GLint64
   */
  userId?: string;
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
