import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  message?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type Career = {
  __typename?: 'Career';
  category?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  experience?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  skills?: Maybe<Scalars['String']['output']>;
};

export type Dashboard = {
  __typename?: 'Dashboard';
  id?: Maybe<Scalars['ID']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  loginTime?: Maybe<Scalars['String']['output']>;
  logoutTime?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Scalars['ID']['output']>;
};

export type Image = {
  __typename?: 'Image';
  id?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type JobApplication = {
  __typename?: 'JobApplication';
  cv?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  github?: Maybe<Scalars['String']['output']>;
  linkedin?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  others?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

export type MessageType = {
  __typename?: 'MessageType';
  message?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  applyJob?: Maybe<MessageType>;
  createCareer?: Maybe<Career>;
  createPage?: Maybe<Page>;
  createPost?: Maybe<Post>;
  createUser?: Maybe<User>;
  deleteCareer?: Maybe<Career>;
  deleteImage?: Maybe<Scalars['String']['output']>;
  deletePage?: Maybe<Page>;
  deletePost?: Maybe<Post>;
  deleteUser?: Maybe<User>;
  logLogin?: Maybe<Dashboard>;
  logLogout?: Maybe<Dashboard>;
  login?: Maybe<AuthPayload>;
  logout?: Maybe<MessageType>;
  updateCareer?: Maybe<Career>;
  updatePage?: Maybe<Page>;
  updatePost?: Maybe<Post>;
  updateUser?: Maybe<User>;
  uploadImage?: Maybe<Image>;
};


export type MutationApplyJobArgs = {
  cv?: InputMaybe<Scalars['Upload']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  github?: InputMaybe<Scalars['String']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  others?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateCareerArgs = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  experience: Scalars['String']['input'];
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  skills: Scalars['String']['input'];
};


export type MutationCreatePageArgs = {
  breadcrumbsTitle?: InputMaybe<Scalars['String']['input']>;
  canonicalURL?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  hsRadioGroup?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaRobots?: InputMaybe<Scalars['String']['input']>;
  page_name: Scalars['String']['input'];
  page_router?: InputMaybe<Scalars['String']['input']>;
  searchEngines?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seoTitle?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  sub_description?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreatePostArgs = {
  breadcrumbsTitle?: InputMaybe<Scalars['String']['input']>;
  canonicalURL?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  feature_img?: InputMaybe<Scalars['Upload']['input']>;
  hsRadioGroup?: InputMaybe<Scalars['String']['input']>;
  metaRobots?: InputMaybe<Scalars['String']['input']>;
  picture_img?: InputMaybe<Scalars['Upload']['input']>;
  post_name: Scalars['String']['input'];
  post_router?: InputMaybe<Scalars['String']['input']>;
  searchEngines?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seometadescription?: InputMaybe<Scalars['String']['input']>;
  seotitle?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  sub_description?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: Scalars['String']['input'];
  username: Scalars['String']['input'];
  website?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteCareerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteImageArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePageArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLogLoginArgs = {
  userId: Scalars['String']['input'];
};


export type MutationLogLogoutArgs = {
  userId: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdateCareerArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  experience?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdatePageArgs = {
  breadcrumbsTitle?: InputMaybe<Scalars['String']['input']>;
  canonicalURL?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  hsRadioGroup?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaRobots?: InputMaybe<Scalars['String']['input']>;
  page_name?: InputMaybe<Scalars['String']['input']>;
  page_router?: InputMaybe<Scalars['String']['input']>;
  searchEngines?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seoTitle?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  sub_description?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdatePostArgs = {
  breadcrumbsTitle?: InputMaybe<Scalars['String']['input']>;
  canonicalURL?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  feature_img?: InputMaybe<Scalars['Upload']['input']>;
  hsRadioGroup?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  metaRobots?: InputMaybe<Scalars['String']['input']>;
  picture_img?: InputMaybe<Scalars['Upload']['input']>;
  post_name?: InputMaybe<Scalars['String']['input']>;
  post_router?: InputMaybe<Scalars['String']['input']>;
  searchEngines?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seometadescription?: InputMaybe<Scalars['String']['input']>;
  seotitle?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  sub_description?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUploadImageArgs = {
  file?: InputMaybe<Scalars['Upload']['input']>;
};

export type Page = {
  __typename?: 'Page';
  author?: Maybe<User>;
  breadcrumbsTitle?: Maybe<Scalars['String']['output']>;
  canonicalURL?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  current_date?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  hsRadioGroup?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaRobots?: Maybe<Scalars['String']['output']>;
  page_name?: Maybe<Scalars['String']['output']>;
  page_router?: Maybe<Scalars['String']['output']>;
  searchEngines?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  seoTitle?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  sub_description?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  breadcrumbsTitle?: Maybe<Scalars['String']['output']>;
  canonicalURL?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  feature_img?: Maybe<Scalars['String']['output']>;
  hsRadioGroup?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  metaRobots?: Maybe<Scalars['String']['output']>;
  picture_img?: Maybe<Scalars['String']['output']>;
  post_name?: Maybe<Scalars['String']['output']>;
  post_router?: Maybe<Scalars['String']['output']>;
  searchEngines?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  seometadescription?: Maybe<Scalars['String']['output']>;
  seotitle?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  sub_description?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  updated_date?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  allUsers?: Maybe<Array<Maybe<User>>>;
  getAllCareers?: Maybe<Array<Maybe<Career>>>;
  getAllImage?: Maybe<Array<Maybe<Image>>>;
  getAllJobApplications?: Maybe<Array<Maybe<JobApplication>>>;
  getAllPages?: Maybe<Array<Maybe<Page>>>;
  getAllPosts?: Maybe<Array<Maybe<Post>>>;
  getCareerById?: Maybe<Career>;
  getCareersByCategory?: Maybe<Array<Maybe<Career>>>;
  getImageById?: Maybe<Image>;
  getPageById?: Maybe<Page>;
  getPageByRouter?: Maybe<Page>;
  getPostById?: Maybe<Post>;
  getPostByRouter?: Maybe<Post>;
  getUserById?: Maybe<User>;
  getUserLogs?: Maybe<Array<Maybe<Dashboard>>>;
  hello?: Maybe<Scalars['String']['output']>;
};


export type QueryGetCareerByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetCareersByCategoryArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetImageByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetPageByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetPageByRouterArgs = {
  page_router?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetPostByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetPostByRouterArgs = {
  post_router?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetUserByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserLogsArgs = {
  userId: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'AuthPayload', message?: string | null, token?: string | null } | null };


export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    message
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export type AuthPayloadKeySpecifier = ('message' | 'token' | AuthPayloadKeySpecifier)[];
export type AuthPayloadFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CareerKeySpecifier = ('category' | 'description' | 'experience' | 'id' | 'location' | 'name' | 'skills' | CareerKeySpecifier)[];
export type CareerFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	experience?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	skills?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DashboardKeySpecifier = ('id' | 'location' | 'loginTime' | 'logoutTime' | 'user' | DashboardKeySpecifier)[];
export type DashboardFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	location?: FieldPolicy<any> | FieldReadFunction<any>,
	loginTime?: FieldPolicy<any> | FieldReadFunction<any>,
	logoutTime?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ImageKeySpecifier = ('id' | 'url' | ImageKeySpecifier)[];
export type ImageFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type JobApplicationKeySpecifier = ('cv' | 'description' | 'email' | 'github' | 'linkedin' | 'name' | 'others' | 'phone' | JobApplicationKeySpecifier)[];
export type JobApplicationFieldPolicy = {
	cv?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	github?: FieldPolicy<any> | FieldReadFunction<any>,
	linkedin?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	others?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MessageTypeKeySpecifier = ('message' | MessageTypeKeySpecifier)[];
export type MessageTypeFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('applyJob' | 'createCareer' | 'createPage' | 'createPost' | 'createUser' | 'deleteCareer' | 'deleteImage' | 'deletePage' | 'deletePost' | 'deleteUser' | 'logLogin' | 'logLogout' | 'login' | 'logout' | 'updateCareer' | 'updatePage' | 'updatePost' | 'updateUser' | 'uploadImage' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	applyJob?: FieldPolicy<any> | FieldReadFunction<any>,
	createCareer?: FieldPolicy<any> | FieldReadFunction<any>,
	createPage?: FieldPolicy<any> | FieldReadFunction<any>,
	createPost?: FieldPolicy<any> | FieldReadFunction<any>,
	createUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCareer?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteImage?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePage?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePost?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUser?: FieldPolicy<any> | FieldReadFunction<any>,
	logLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	logLogout?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	logout?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCareer?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePage?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePost?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUser?: FieldPolicy<any> | FieldReadFunction<any>,
	uploadImage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageKeySpecifier = ('author' | 'breadcrumbsTitle' | 'canonicalURL' | 'created_at' | 'current_date' | 'description' | 'hsRadioGroup' | 'id' | 'metaDescription' | 'metaRobots' | 'page_name' | 'page_router' | 'searchEngines' | 'seoTitle' | 'status' | 'sub_description' | 'updated_at' | PageKeySpecifier)[];
export type PageFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	breadcrumbsTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	canonicalURL?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	current_date?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	hsRadioGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	metaDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	metaRobots?: FieldPolicy<any> | FieldReadFunction<any>,
	page_name?: FieldPolicy<any> | FieldReadFunction<any>,
	page_router?: FieldPolicy<any> | FieldReadFunction<any>,
	searchEngines?: FieldPolicy<any> | FieldReadFunction<any>,
	seoTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	sub_description?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostKeySpecifier = ('author' | 'breadcrumbsTitle' | 'canonicalURL' | 'created_at' | 'description' | 'feature_img' | 'hsRadioGroup' | 'id' | 'metaRobots' | 'picture_img' | 'post_name' | 'post_router' | 'searchEngines' | 'seometadescription' | 'seotitle' | 'status' | 'sub_description' | 'updated_at' | 'updated_date' | PostKeySpecifier)[];
export type PostFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	breadcrumbsTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	canonicalURL?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	feature_img?: FieldPolicy<any> | FieldReadFunction<any>,
	hsRadioGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	metaRobots?: FieldPolicy<any> | FieldReadFunction<any>,
	picture_img?: FieldPolicy<any> | FieldReadFunction<any>,
	post_name?: FieldPolicy<any> | FieldReadFunction<any>,
	post_router?: FieldPolicy<any> | FieldReadFunction<any>,
	searchEngines?: FieldPolicy<any> | FieldReadFunction<any>,
	seometadescription?: FieldPolicy<any> | FieldReadFunction<any>,
	seotitle?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	sub_description?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_date?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('allUsers' | 'getAllCareers' | 'getAllImage' | 'getAllJobApplications' | 'getAllPages' | 'getAllPosts' | 'getCareerById' | 'getCareersByCategory' | 'getImageById' | 'getPageById' | 'getPageByRouter' | 'getPostById' | 'getPostByRouter' | 'getUserById' | 'getUserLogs' | 'hello' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	allUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllCareers?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllImage?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllJobApplications?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllPages?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllPosts?: FieldPolicy<any> | FieldReadFunction<any>,
	getCareerById?: FieldPolicy<any> | FieldReadFunction<any>,
	getCareersByCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	getImageById?: FieldPolicy<any> | FieldReadFunction<any>,
	getPageById?: FieldPolicy<any> | FieldReadFunction<any>,
	getPageByRouter?: FieldPolicy<any> | FieldReadFunction<any>,
	getPostById?: FieldPolicy<any> | FieldReadFunction<any>,
	getPostByRouter?: FieldPolicy<any> | FieldReadFunction<any>,
	getUserById?: FieldPolicy<any> | FieldReadFunction<any>,
	getUserLogs?: FieldPolicy<any> | FieldReadFunction<any>,
	hello?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('email' | 'id' | 'role' | 'username' | 'website' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>,
	website?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AuthPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthPayloadKeySpecifier | (() => undefined | AuthPayloadKeySpecifier),
		fields?: AuthPayloadFieldPolicy,
	},
	Career?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CareerKeySpecifier | (() => undefined | CareerKeySpecifier),
		fields?: CareerFieldPolicy,
	},
	Dashboard?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DashboardKeySpecifier | (() => undefined | DashboardKeySpecifier),
		fields?: DashboardFieldPolicy,
	},
	Image?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ImageKeySpecifier | (() => undefined | ImageKeySpecifier),
		fields?: ImageFieldPolicy,
	},
	JobApplication?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | JobApplicationKeySpecifier | (() => undefined | JobApplicationKeySpecifier),
		fields?: JobApplicationFieldPolicy,
	},
	MessageType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MessageTypeKeySpecifier | (() => undefined | MessageTypeKeySpecifier),
		fields?: MessageTypeFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Page?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageKeySpecifier | (() => undefined | PageKeySpecifier),
		fields?: PageFieldPolicy,
	},
	Post?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostKeySpecifier | (() => undefined | PostKeySpecifier),
		fields?: PostFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;