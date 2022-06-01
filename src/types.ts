/// <reference types="node" />

import { CSSProperties } from 'react';

export declare type Maybe<T> = T;
export declare type InputMaybe<T> = T;
export declare type Exact<
  T extends {
    [key: string]: unknown;
  },
> = {
  [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
  ID: string | number;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};
export declare type ActiveOrderResult = NoActiveOrderError | Order;
export declare type AddPaymentToOrderResult =
  | IneligiblePaymentMethodError
  | NoActiveOrderError
  | Order
  | OrderPaymentStateError
  | OrderStateTransitionError
  | PaymentDeclinedError
  | PaymentFailedError;
export declare type Address = Node & {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country: Country;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  defaultBillingAddress?: Maybe<Scalars['Boolean']>;
  defaultShippingAddress?: Maybe<Scalars['Boolean']>;
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  phoneNumber?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  streetLine1: Scalars['String'];
  streetLine2?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};
export declare type Adjustment = {
  __typename?: 'Adjustment';
  adjustmentSource: Scalars['String'];
  amount: Scalars['Int'];
  description: Scalars['String'];
  type: AdjustmentType;
};
export declare enum AdjustmentType {
  DISTRIBUTED_ORDER_PROMOTION = 'DISTRIBUTED_ORDER_PROMOTION',
  OTHER = 'OTHER',
  PROMOTION = 'PROMOTION',
}
/** 处方输入验证的规则返回params的类型定义. */
export declare type AllRuleProcessOptionEventParamsType = {
  __typename?: 'AllRuleProcessOptionEventParamsType';
  /** 当前根据流程选项条件动态产出的价格. */
  adjustPrice?: Maybe<Scalars['Int']>;
  /** 当前选项是否禁用, 为不可用状态. 需要将选项值强制设置为null */
  disabled?: Maybe<Scalars['Boolean']>;
};
/** 流程选项相关T1,T2,T3,T4事件类型名定义 */
export declare enum AllRuleProcessOptionEventTypes {
  /** 用来标识当前流程选项, 是否启用, 默认为禁用, 当且仅当为可用的时候才执行. */
  PROCESS_OPTION_ITEM_EVENT_TYPE_IS_AVAILABLE = 'PROCESS_OPTION_ITEM_EVENT_TYPE_IS_AVAILABLE',
  /** 用来标识当前流程选项, 是否启用, 如果启动才进行其他规则校验, 如果未启用, 则忽略其他规则校验. */
  PROCESS_OPTION_ITEM_EVENT_TYPE_IS_DISABLED = 'PROCESS_OPTION_ITEM_EVENT_TYPE_IS_DISABLED',
  /** 用来标识当前流程选项, 是否显示为推荐, 默认为false. */
  PROCESS_OPTION_ITEM_EVENT_TYPE_IS_RECOMMEND = 'PROCESS_OPTION_ITEM_EVENT_TYPE_IS_RECOMMEND',
}
/** 处方输入验证的规则返回params的类型定义. */
export declare type AllRuleRxEventParamsType = {
  __typename?: 'AllRuleRxEventParamsType';
  /** 当前选项是否禁用, 为不可用状态. 需要将选项值强制设置为null */
  disabled?: Maybe<Scalars['Boolean']>;
  /** 对应错误信息的i18n多国语言消息KEY. */
  messageKey?: Maybe<Scalars['String']>;
  /** 当前产生了验证错误信息, warn, error, info, label */
  messageType?: Maybe<RxItemMessageType>;
  /** 当前业务规则命中的默认值 */
  rxOptionDefaultValue?: Maybe<Scalars['String']>;
  /** 当前业务命中默认选项范围的key */
  rxOptionKey?: Maybe<LensProcessOptionKeys>;
  /** 某一些消息结果里面可能包含了一些数据内容, 比如需要跳转到专题页的页面地址等. */
  rxValidateAction?: Maybe<RxRuleDefineValidateAction>;
};
/** 处方规则相关的事件类型名定义 */
export declare enum AllRuleRxEventTypes {
  /** 当前验证规则标识用户当前需要popup弹窗提示让他选择特定的action行为执行. 比如跳转到专题页, 比如当前切换当前的T1,T2流程 */
  RX_OPTION_ITEM_EVENT_TYPE_FOR_USER_ACTION = 'RX_OPTION_ITEM_EVENT_TYPE_FOR_USER_ACTION',
  /** 用来标识所有的处方选项, 启用之后, 用户输入的数据不合法事件. */
  RX_OPTION_ITEM_EVENT_TYPE_INPUT_INVALID = 'RX_OPTION_ITEM_EVENT_TYPE_INPUT_INVALID',
  /** 用来标识处方选项指定的rxType下是此选项在其他输入条件下是否是可选输入, 还是必须要有值得, 不能为空(''|null|undefined) */
  RX_OPTION_ITEM_EVENT_TYPE_INPUT_REQUIRED = 'RX_OPTION_ITEM_EVENT_TYPE_INPUT_REQUIRED',
  /** 用来标识所有的处方选项, 是否启用, 如果启动才进行其他规则校验, 如果未启用, 则忽略其他规则校验. */
  RX_OPTION_ITEM_EVENT_TYPE_IS_DISABLED = 'RX_OPTION_ITEM_EVENT_TYPE_IS_DISABLED',
  /** 规则匹配动态数据源列表对应的事件类型. */
  RX_OPTION_ITEM_EVENT_TYPE_ITEMS_RANGE = 'RX_OPTION_ITEM_EVENT_TYPE_ITEMS_RANGE',
}
/** Returned when attempting to set the Customer for an Order when already logged in. */
export declare type AlreadyLoggedInError = ErrorResult & {
  __typename?: 'AlreadyLoggedInError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};
export declare type ApplyCouponCodeResult =
  | CouponCodeExpiredError
  | CouponCodeInvalidError
  | CouponCodeLimitError
  | Order;
export declare type Asset = Node & {
  __typename?: 'Asset';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  fileSize: Scalars['Int'];
  focalPoint?: Maybe<Coordinate>;
  height: Scalars['Int'];
  id: Scalars['ID'];
  mimeType: Scalars['String'];
  name: Scalars['String'];
  preview: Scalars['String'];
  source: Scalars['String'];
  type: AssetType;
  updatedAt: Scalars['DateTime'];
  width: Scalars['Int'];
};
export declare type AssetList = PaginatedList & {
  __typename?: 'AssetList';
  items: Array<Asset>;
  totalItems: Scalars['Int'];
};
export declare enum AssetType {
  BINARY = 'BINARY',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
}
export declare type AuthenticationInput = {
  native?: InputMaybe<NativeAuthInput>;
};
export declare type AuthenticationMethod = Node & {
  __typename?: 'AuthenticationMethod';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  strategy: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};
export declare type AuthenticationResult = CurrentUser | InvalidCredentialsError | NotVerifiedError;
export declare type Banner = Node & {
  __typename?: 'Banner';
  createdAt: Scalars['DateTime'];
  displayOrder: Scalars['Int'];
  id: Scalars['ID'];
  key: Scalars['String'];
  languageCode: LanguageCode;
  lgImage: Scalars['String'];
  link: Scalars['String'];
  name: Scalars['String'];
  position: BannerPosition;
  published: Scalars['Boolean'];
  shortDesc: Scalars['JSON'];
  translations: Array<BannerTranslation>;
  updatedAt: Scalars['DateTime'];
  xsImage: Scalars['String'];
};
export declare type BannerFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  displayOrder?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  key?: InputMaybe<StringOperators>;
  languageCode?: InputMaybe<StringOperators>;
  lgImage?: InputMaybe<StringOperators>;
  link?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  position?: InputMaybe<StringOperators>;
  published?: InputMaybe<BooleanOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  xsImage?: InputMaybe<StringOperators>;
};
export declare type BannerList = PaginatedList & {
  __typename?: 'BannerList';
  items: Array<Banner>;
  totalItems: Scalars['Int'];
};
export declare type BannerListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<BannerFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<BannerSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};
export declare enum BannerPosition {
  HomePage = 'HomePage',
}
export declare type BannerSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  displayOrder?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  lgImage?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  xsImage?: InputMaybe<SortOrder>;
};
export declare type BannerTranslation = Node & {
  __typename?: 'BannerTranslation';
  id: Scalars['ID'];
  /** 当前语言 */
  languageCode: LanguageCode;
  lgImage: Scalars['String'];
  link: Scalars['String'];
  /** 当前选项的名称 */
  name: Scalars['String'];
  shortDesc: Scalars['String'];
  xsImage: Scalars['String'];
};
export declare type BooleanCustomFieldConfig = CustomField & {
  __typename?: 'BooleanCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};
/** Operators for filtering on a list of Boolean fields */
export declare type BooleanListOperators = {
  inList: Scalars['Boolean'];
};
/** Operators for filtering on a Boolean field */
export declare type BooleanOperators = {
  eq?: InputMaybe<Scalars['Boolean']>;
};
export declare type Campaign = Node & {
  __typename?: 'Campaign';
  applyForBeforeData: CampaignApplyForBeforeData;
  /** 针对不需要领券的活动, 可能无resut配置 */
  applyForResultData?: Maybe<CampaignApplyForResultData>;
  campaignType: CampaignType;
  /** 活动唯一标识 */
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  /** PC活动bannner */
  lgImage?: Maybe<Scalars['String']>;
  /** ADMIN-UI collection编辑应该有BUG 针对translation字段, 暂时遗留此字段为optional #issues/1338 */
  name?: Maybe<Scalars['String']>;
  needClaimCoupon?: Maybe<Scalars['Boolean']>;
  periodOfValidity?: Maybe<Scalars['Int']>;
  promotion?: Maybe<Promotion>;
  shortDesc?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  /** Mobile活动bannner */
  xsImage?: Maybe<Scalars['String']>;
};
export declare type CampaignApplyForBeforeData = {
  __typename?: 'CampaignApplyForBeforeData';
  /** 按钮文字 */
  buttonText?: Maybe<Scalars['String']>;
  /** 政策小字 */
  policyText: Scalars['String'];
  /** 规则小字 */
  ruleText: Array<Scalars['String']>;
  /** 小字（标题下方） */
  subTitle: Array<Scalars['String']>;
  /** 文本框文字提示 */
  textBoxPlaceholder?: Maybe<Scalars['String']>;
  /** 标题（加粗文字） */
  title: Scalars['String'];
};
export declare type CampaignApplyForResultData = {
  __typename?: 'CampaignApplyForResultData';
  /** Expiry Date */
  expiryLabel: Scalars['String'];
  /** 规则小字 */
  ruleText: Array<Scalars['String']>;
  /** Terms条款label */
  termsCondition: Scalars['String'];
};
export declare type CampaignCoupon = Node & {
  __typename?: 'CampaignCoupon';
  campaign: Campaign;
  couponCode: Scalars['String'];
  createdAt: Scalars['DateTime'];
  emailAddress: Scalars['String'];
  endsAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};
export declare type CampaignCouponList = PaginatedList & {
  __typename?: 'CampaignCouponList';
  items: Array<CampaignCoupon>;
  totalItems: Scalars['Int'];
};
export declare type CampaignList = PaginatedList & {
  __typename?: 'CampaignList';
  items: Array<Campaign>;
  totalItems: Scalars['Int'];
};
export declare enum CampaignType {
  /** 所有用户, 固定金额拉新, 直降模式 */
  AllUserFixedAmount = 'AllUserFixedAmount',
  /** 买一送一+镜片打折 */
  BuyXGetYFreeWithLensDiscount = 'BuyXGetYFreeWithLensDiscount',
  /** 节假日直活动 */
  DirectDiscount = 'DirectDiscount',
  /** 新用户首单镜架1USD */
  NewUserFirstPair = 'NewUserFirstPair',
  /** 新用户固定金额拉新, 领券模式 */
  NewUserFixedAmount = 'NewUserFixedAmount',
}
export declare type Channel = Node & {
  __typename?: 'Channel';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  currencyCode: CurrencyCode;
  customFields?: Maybe<Scalars['JSON']>;
  defaultLanguageCode: LanguageCode;
  defaultShippingZone?: Maybe<Zone>;
  defaultTaxZone?: Maybe<Zone>;
  id: Scalars['ID'];
  pricesIncludeTax: Scalars['Boolean'];
  token: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};
export declare type Collection = Node & {
  __typename?: 'Collection';
  assets: Array<Asset>;
  breadcrumbs: Array<CollectionBreadcrumb>;
  /** 当前分类是否配置了campaign活动 */
  campaign?: Maybe<Campaign>;
  children?: Maybe<Array<Collection>>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<CollectionCustomFields>;
  description: Scalars['String'];
  featuredAsset?: Maybe<Asset>;
  filters: Array<ConfigurableOperation>;
  id: Scalars['ID'];
  languageCode?: Maybe<LanguageCode>;
  name: Scalars['String'];
  parent?: Maybe<Collection>;
  position: Scalars['Int'];
  productVariants: ProductVariantList;
  slug: Scalars['String'];
  translations: Array<CollectionTranslation>;
  updatedAt: Scalars['DateTime'];
};
export declare type CollectionProductVariantsArgs = {
  options?: InputMaybe<ProductVariantListOptions>;
};
export declare type CollectionBreadcrumb = {
  __typename?: 'CollectionBreadcrumb';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
};
export declare type CollectionCustomFields = {
  __typename?: 'CollectionCustomFields';
  campaign?: Maybe<Campaign>;
  collectionType?: Maybe<Scalars['String']>;
  invisible?: Maybe<Scalars['Boolean']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
};
export declare type CollectionFilterParameter = {
  collectionType?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  invisible?: InputMaybe<BooleanOperators>;
  isFeatured?: InputMaybe<BooleanOperators>;
  languageCode?: InputMaybe<StringOperators>;
  metaDescription?: InputMaybe<StringOperators>;
  metaTitle?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  position?: InputMaybe<NumberOperators>;
  slug?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};
export declare type CollectionList = PaginatedList & {
  __typename?: 'CollectionList';
  items: Array<Collection>;
  totalItems: Scalars['Int'];
};
export declare type CollectionListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CollectionFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CollectionSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};
/**
 * Which Collections are present in the products returned
 * by the search, and in what quantity.
 */
export declare type CollectionResult = {
  __typename?: 'CollectionResult';
  collection: Collection;
  count: Scalars['Int'];
};
export declare type CollectionSortParameter = {
  campaign?: InputMaybe<SortOrder>;
  collectionType?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  invisible?: InputMaybe<SortOrder>;
  isFeatured?: InputMaybe<SortOrder>;
  metaDescription?: InputMaybe<SortOrder>;
  metaTitle?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};
export declare type CollectionTranslation = {
  __typename?: 'CollectionTranslation';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<CollectionTranslationCustomFields>;
  description: Scalars['String'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};
export declare type CollectionTranslationCustomFields = {
  __typename?: 'CollectionTranslationCustomFields';
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
};
export declare type ConfigArg = {
  __typename?: 'ConfigArg';
  name: Scalars['String'];
  value: Scalars['String'];
};
export declare type ConfigArgDefinition = {
  __typename?: 'ConfigArgDefinition';
  defaultValue?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  required: Scalars['Boolean'];
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};
export declare type ConfigArgInput = {
  name: Scalars['String'];
  /** A JSON stringified representation of the actual value */
  value: Scalars['String'];
};
export declare type ConfigurableOperation = {
  __typename?: 'ConfigurableOperation';
  args: Array<ConfigArg>;
  code: Scalars['String'];
};
export declare type ConfigurableOperationDefinition = {
  __typename?: 'ConfigurableOperationDefinition';
  args: Array<ConfigArgDefinition>;
  code: Scalars['String'];
  description: Scalars['String'];
};
export declare type ConfigurableOperationInput = {
  arguments: Array<ConfigArgInput>;
  code: Scalars['String'];
};
export declare type Coordinate = {
  __typename?: 'Coordinate';
  x: Scalars['Float'];
  y: Scalars['Float'];
};
export declare type Country = Node & {
  __typename?: 'Country';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<CountryCustomFields>;
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  translations: Array<CountryTranslation>;
  updatedAt: Scalars['DateTime'];
};
export declare type CountryCustomFields = {
  __typename?: 'CountryCustomFields';
  displayOrder?: Maybe<Scalars['Int']>;
};
export declare type CountryList = PaginatedList & {
  __typename?: 'CountryList';
  items: Array<Country>;
  totalItems: Scalars['Int'];
};
export declare type CountryTranslation = {
  __typename?: 'CountryTranslation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};
/** Returned if the provided coupon code is invalid */
export declare type CouponCodeExpiredError = ErrorResult & {
  __typename?: 'CouponCodeExpiredError';
  couponCode: Scalars['String'];
  errorCode: ErrorCode;
  message: Scalars['String'];
};
/** Returned if the provided coupon code is invalid */
export declare type CouponCodeInvalidError = ErrorResult & {
  __typename?: 'CouponCodeInvalidError';
  couponCode: Scalars['String'];
  errorCode: ErrorCode;
  message: Scalars['String'];
};
/** Returned if the provided coupon code is invalid */
export declare type CouponCodeLimitError = ErrorResult & {
  __typename?: 'CouponCodeLimitError';
  couponCode: Scalars['String'];
  errorCode: ErrorCode;
  limit: Scalars['Int'];
  message: Scalars['String'];
};
export declare type CreateAddressInput = {
  city?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  countryCode: Scalars['String'];
  customFields?: InputMaybe<Scalars['JSON']>;
  defaultBillingAddress?: InputMaybe<Scalars['Boolean']>;
  defaultShippingAddress?: InputMaybe<Scalars['Boolean']>;
  fullName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  streetLine1: Scalars['String'];
  streetLine2?: InputMaybe<Scalars['String']>;
};
export declare type CreateCustomerCustomFieldsInput = {
  birthday?: InputMaybe<Scalars['String']>;
  faceshape?: InputMaybe<Scalars['String']>;
  languageCode?: InputMaybe<Scalars['String']>;
};
export declare type CreateCustomerInput = {
  customFields?: InputMaybe<CreateCustomerCustomFieldsInput>;
  emailAddress: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};
export declare type CreateInvoiceInput = {
  orderCode: Scalars['String'];
};
export declare type CreateProductQaInput = {
  productId: Scalars['ID'];
  question: Scalars['String'];
};
export declare type CreateProductReviewInput = {
  content: Scalars['String'];
  crop: Scalars['String'];
  customerNameIsPublic: Scalars['Boolean'];
  file?: InputMaybe<Array<Scalars['Upload']>>;
  productId: Scalars['ID'];
  rating: Scalars['Float'];
  suggestions?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  variantId: Scalars['ID'];
};
export declare type CreateRxInput = {
  /** 左右眼视力: 老花, Distance 不展示 */
  add?: InputMaybe<Scalars['String']>;
  /** 用户年龄 */
  age?: InputMaybe<Scalars['String']>;
  /** 针对游泳镜, 项链镜, 用户可以只输入度数即可加入购物车. */
  directDegrees?: InputMaybe<Scalars['String']>;
  /** 是否标记为默认处方 */
  isDefault?: InputMaybe<Scalars['Boolean']>;
  /** 处方单名称 */
  name?: InputMaybe<Scalars['String']>;
  /** 按照处方转换规则转换之后的处方内容 */
  normalizedRx?: InputMaybe<NormalizedRxInput>;
  /** 右眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  odAxis?: InputMaybe<Scalars['String']>;
  /** 右眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  odCyl?: InputMaybe<Scalars['String']>;
  /** 右眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  odSph?: InputMaybe<Scalars['String']>;
  /** 左眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  osAxis?: InputMaybe<Scalars['String']>;
  /** 左眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  osCyl?: InputMaybe<Scalars['String']>;
  /** 左眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  osSph?: InputMaybe<Scalars['String']>;
  /** 双眼PD,单位为1 */
  pd?: InputMaybe<Scalars['String']>;
  /** 左眼瞳距, 单眼PD, 单位为0.5 */
  pdLeft?: InputMaybe<Scalars['String']>;
  /** 右眼瞳距, 单眼PD, 单位为0.5 */
  pdRight?: InputMaybe<Scalars['String']>;
  /** 棱镜, 标准处方可选值 */
  prism?: InputMaybe<PrismItemInput>;
  /** 当针对老花的时候,可以允许用户直接选择一个度数, 用户也可以切换到标准处方自定义. */
  reading?: InputMaybe<Scalars['String']>;
  /** 处方的备注信息 */
  rxComments?: InputMaybe<Scalars['String']>;
  /** 处方类型, 老花处方/标准处方 */
  rxType: RxType;
};
export declare type CreateTicketInput = {
  issue: Scalars['String'];
  subject: Scalars['String'];
};
export declare type CreateTryonFaceModelInput = {
  crop: Array<Scalars['String']>;
  file: Array<Scalars['Upload']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  userPd?: InputMaybe<Scalars['Int']>;
};
/**
 * @description
 * ISO 4217 currency code
 *
 * @docsCategory common
 */
export declare enum CurrencyCode {
  /** United Arab Emirates dirham */
  AED = 'AED',
  /** Afghan afghani */
  AFN = 'AFN',
  /** Albanian lek */
  ALL = 'ALL',
  /** Armenian dram */
  AMD = 'AMD',
  /** Netherlands Antillean guilder */
  ANG = 'ANG',
  /** Angolan kwanza */
  AOA = 'AOA',
  /** Argentine peso */
  ARS = 'ARS',
  /** Australian dollar */
  AUD = 'AUD',
  /** Aruban florin */
  AWG = 'AWG',
  /** Azerbaijani manat */
  AZN = 'AZN',
  /** Bosnia and Herzegovina convertible mark */
  BAM = 'BAM',
  /** Barbados dollar */
  BBD = 'BBD',
  /** Bangladeshi taka */
  BDT = 'BDT',
  /** Bulgarian lev */
  BGN = 'BGN',
  /** Bahraini dinar */
  BHD = 'BHD',
  /** Burundian franc */
  BIF = 'BIF',
  /** Bermudian dollar */
  BMD = 'BMD',
  /** Brunei dollar */
  BND = 'BND',
  /** Boliviano */
  BOB = 'BOB',
  /** Brazilian real */
  BRL = 'BRL',
  /** Bahamian dollar */
  BSD = 'BSD',
  /** Bhutanese ngultrum */
  BTN = 'BTN',
  /** Botswana pula */
  BWP = 'BWP',
  /** Belarusian ruble */
  BYN = 'BYN',
  /** Belize dollar */
  BZD = 'BZD',
  /** Canadian dollar */
  CAD = 'CAD',
  /** Congolese franc */
  CDF = 'CDF',
  /** Swiss franc */
  CHF = 'CHF',
  /** Chilean peso */
  CLP = 'CLP',
  /** Renminbi (Chinese) yuan */
  CNY = 'CNY',
  /** Colombian peso */
  COP = 'COP',
  /** Costa Rican colon */
  CRC = 'CRC',
  /** Cuban convertible peso */
  CUC = 'CUC',
  /** Cuban peso */
  CUP = 'CUP',
  /** Cape Verde escudo */
  CVE = 'CVE',
  /** Czech koruna */
  CZK = 'CZK',
  /** Djiboutian franc */
  DJF = 'DJF',
  /** Danish krone */
  DKK = 'DKK',
  /** Dominican peso */
  DOP = 'DOP',
  /** Algerian dinar */
  DZD = 'DZD',
  /** Egyptian pound */
  EGP = 'EGP',
  /** Eritrean nakfa */
  ERN = 'ERN',
  /** Ethiopian birr */
  ETB = 'ETB',
  /** Euro */
  EUR = 'EUR',
  /** Fiji dollar */
  FJD = 'FJD',
  /** Falkland Islands pound */
  FKP = 'FKP',
  /** Pound sterling */
  GBP = 'GBP',
  /** Georgian lari */
  GEL = 'GEL',
  /** Ghanaian cedi */
  GHS = 'GHS',
  /** Gibraltar pound */
  GIP = 'GIP',
  /** Gambian dalasi */
  GMD = 'GMD',
  /** Guinean franc */
  GNF = 'GNF',
  /** Guatemalan quetzal */
  GTQ = 'GTQ',
  /** Guyanese dollar */
  GYD = 'GYD',
  /** Hong Kong dollar */
  HKD = 'HKD',
  /** Honduran lempira */
  HNL = 'HNL',
  /** Croatian kuna */
  HRK = 'HRK',
  /** Haitian gourde */
  HTG = 'HTG',
  /** Hungarian forint */
  HUF = 'HUF',
  /** Indonesian rupiah */
  IDR = 'IDR',
  /** Israeli new shekel */
  ILS = 'ILS',
  /** Indian rupee */
  INR = 'INR',
  /** Iraqi dinar */
  IQD = 'IQD',
  /** Iranian rial */
  IRR = 'IRR',
  /** Icelandic króna */
  ISK = 'ISK',
  /** Jamaican dollar */
  JMD = 'JMD',
  /** Jordanian dinar */
  JOD = 'JOD',
  /** Japanese yen */
  JPY = 'JPY',
  /** Kenyan shilling */
  KES = 'KES',
  /** Kyrgyzstani som */
  KGS = 'KGS',
  /** Cambodian riel */
  KHR = 'KHR',
  /** Comoro franc */
  KMF = 'KMF',
  /** North Korean won */
  KPW = 'KPW',
  /** South Korean won */
  KRW = 'KRW',
  /** Kuwaiti dinar */
  KWD = 'KWD',
  /** Cayman Islands dollar */
  KYD = 'KYD',
  /** Kazakhstani tenge */
  KZT = 'KZT',
  /** Lao kip */
  LAK = 'LAK',
  /** Lebanese pound */
  LBP = 'LBP',
  /** Sri Lankan rupee */
  LKR = 'LKR',
  /** Liberian dollar */
  LRD = 'LRD',
  /** Lesotho loti */
  LSL = 'LSL',
  /** Libyan dinar */
  LYD = 'LYD',
  /** Moroccan dirham */
  MAD = 'MAD',
  /** Moldovan leu */
  MDL = 'MDL',
  /** Malagasy ariary */
  MGA = 'MGA',
  /** Macedonian denar */
  MKD = 'MKD',
  /** Myanmar kyat */
  MMK = 'MMK',
  /** Mongolian tögrög */
  MNT = 'MNT',
  /** Macanese pataca */
  MOP = 'MOP',
  /** Mauritanian ouguiya */
  MRU = 'MRU',
  /** Mauritian rupee */
  MUR = 'MUR',
  /** Maldivian rufiyaa */
  MVR = 'MVR',
  /** Malawian kwacha */
  MWK = 'MWK',
  /** Mexican peso */
  MXN = 'MXN',
  /** Malaysian ringgit */
  MYR = 'MYR',
  /** Mozambican metical */
  MZN = 'MZN',
  /** Namibian dollar */
  NAD = 'NAD',
  /** Nigerian naira */
  NGN = 'NGN',
  /** Nicaraguan córdoba */
  NIO = 'NIO',
  /** Norwegian krone */
  NOK = 'NOK',
  /** Nepalese rupee */
  NPR = 'NPR',
  /** New Zealand dollar */
  NZD = 'NZD',
  /** Omani rial */
  OMR = 'OMR',
  /** Panamanian balboa */
  PAB = 'PAB',
  /** Peruvian sol */
  PEN = 'PEN',
  /** Papua New Guinean kina */
  PGK = 'PGK',
  /** Philippine peso */
  PHP = 'PHP',
  /** Pakistani rupee */
  PKR = 'PKR',
  /** Polish złoty */
  PLN = 'PLN',
  /** Paraguayan guaraní */
  PYG = 'PYG',
  /** Qatari riyal */
  QAR = 'QAR',
  /** Romanian leu */
  RON = 'RON',
  /** Serbian dinar */
  RSD = 'RSD',
  /** Russian ruble */
  RUB = 'RUB',
  /** Rwandan franc */
  RWF = 'RWF',
  /** Saudi riyal */
  SAR = 'SAR',
  /** Solomon Islands dollar */
  SBD = 'SBD',
  /** Seychelles rupee */
  SCR = 'SCR',
  /** Sudanese pound */
  SDG = 'SDG',
  /** Swedish krona/kronor */
  SEK = 'SEK',
  /** Singapore dollar */
  SGD = 'SGD',
  /** Saint Helena pound */
  SHP = 'SHP',
  /** Sierra Leonean leone */
  SLL = 'SLL',
  /** Somali shilling */
  SOS = 'SOS',
  /** Surinamese dollar */
  SRD = 'SRD',
  /** South Sudanese pound */
  SSP = 'SSP',
  /** São Tomé and Príncipe dobra */
  STN = 'STN',
  /** Salvadoran colón */
  SVC = 'SVC',
  /** Syrian pound */
  SYP = 'SYP',
  /** Swazi lilangeni */
  SZL = 'SZL',
  /** Thai baht */
  THB = 'THB',
  /** Tajikistani somoni */
  TJS = 'TJS',
  /** Turkmenistan manat */
  TMT = 'TMT',
  /** Tunisian dinar */
  TND = 'TND',
  /** Tongan paʻanga */
  TOP = 'TOP',
  /** Turkish lira */
  TRY = 'TRY',
  /** Trinidad and Tobago dollar */
  TTD = 'TTD',
  /** New Taiwan dollar */
  TWD = 'TWD',
  /** Tanzanian shilling */
  TZS = 'TZS',
  /** Ukrainian hryvnia */
  UAH = 'UAH',
  /** Ugandan shilling */
  UGX = 'UGX',
  /** United States dollar */
  USD = 'USD',
  /** Uruguayan peso */
  UYU = 'UYU',
  /** Uzbekistan som */
  UZS = 'UZS',
  /** Venezuelan bolívar soberano */
  VES = 'VES',
  /** Vietnamese đồng */
  VND = 'VND',
  /** Vanuatu vatu */
  VUV = 'VUV',
  /** Samoan tala */
  WST = 'WST',
  /** CFA franc BEAC */
  XAF = 'XAF',
  /** East Caribbean dollar */
  XCD = 'XCD',
  /** CFA franc BCEAO */
  XOF = 'XOF',
  /** CFP franc (franc Pacifique) */
  XPF = 'XPF',
  /** Yemeni rial */
  YER = 'YER',
  /** South African rand */
  ZAR = 'ZAR',
  /** Zambian kwacha */
  ZMW = 'ZMW',
  /** Zimbabwean dollar */
  ZWL = 'ZWL',
}
export declare type CurrentUser = {
  __typename?: 'CurrentUser';
  channels: Array<CurrentUserChannel>;
  id: Scalars['ID'];
  identifier: Scalars['String'];
};
export declare type CurrentUserChannel = {
  __typename?: 'CurrentUserChannel';
  code: Scalars['String'];
  id: Scalars['ID'];
  permissions: Array<Permission>;
  token: Scalars['String'];
};
export declare type CustomField = {
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};
export declare type CustomFieldConfig =
  | BooleanCustomFieldConfig
  | DateTimeCustomFieldConfig
  | FloatCustomFieldConfig
  | IntCustomFieldConfig
  | LocaleStringCustomFieldConfig
  | RelationCustomFieldConfig
  | StringCustomFieldConfig
  | TextCustomFieldConfig;
export declare type Customer = Node & {
  __typename?: 'Customer';
  addresses?: Maybe<Array<Address>>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<CustomerCustomFields>;
  emailAddress: Scalars['String'];
  favorites: FavoriteList;
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  orders: OrderList;
  phoneNumber?: Maybe<Scalars['String']>;
  /** Query customer property field rxList */
  rxList: RxList;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
};
export declare type CustomerFavoritesArgs = {
  options?: InputMaybe<FavoriteListOptions>;
  productVariantNameFilter?: InputMaybe<Scalars['String']>;
};
export declare type CustomerOrdersArgs = {
  options?: InputMaybe<OrderListOptions>;
};
export declare type CustomerRxListArgs = {
  options?: InputMaybe<RxListOptions>;
  rxName?: InputMaybe<Scalars['String']>;
};
export declare type CustomerCustomFields = {
  __typename?: 'CustomerCustomFields';
  birthday?: Maybe<Scalars['String']>;
  faceshape?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
};
export declare type CustomerFilterParameter = {
  birthday?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  emailAddress?: InputMaybe<StringOperators>;
  faceshape?: InputMaybe<StringOperators>;
  firstName?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  lastName?: InputMaybe<StringOperators>;
  phoneNumber?: InputMaybe<StringOperators>;
  title?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};
export declare type CustomerGroup = Node & {
  __typename?: 'CustomerGroup';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  customers: CustomerList;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};
export declare type CustomerGroupCustomersArgs = {
  options?: InputMaybe<CustomerListOptions>;
};
export declare type CustomerList = PaginatedList & {
  __typename?: 'CustomerList';
  items: Array<Customer>;
  totalItems: Scalars['Int'];
};
export declare type CustomerListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CustomerFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CustomerSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};
export declare type CustomerSortParameter = {
  birthday?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  emailAddress?: InputMaybe<SortOrder>;
  faceshape?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  languageCode?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};
/** Operators for filtering on a list of Date fields */
export declare type DateListOperators = {
  inList: Scalars['DateTime'];
};
/** Operators for filtering on a DateTime field */
export declare type DateOperators = {
  after?: InputMaybe<Scalars['DateTime']>;
  before?: InputMaybe<Scalars['DateTime']>;
  between?: InputMaybe<DateRange>;
  eq?: InputMaybe<Scalars['DateTime']>;
};
export declare type DateRange = {
  end: Scalars['DateTime'];
  start: Scalars['DateTime'];
};
/**
 * Expects the same validation formats as the `<input type="datetime-local">` HTML element.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#Additional_attributes
 */
export declare type DateTimeCustomFieldConfig = CustomField & {
  __typename?: 'DateTimeCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  max?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  step?: Maybe<Scalars['Int']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};
export declare type DeletionResponse = {
  __typename?: 'DeletionResponse';
  message?: Maybe<Scalars['String']>;
  result: DeletionResult;
};
export declare enum DeletionResult {
  /** The entity was successfully deleted */
  DELETED = 'DELETED',
  /** Deletion did not take place, reason given in message */
  NOT_DELETED = 'NOT_DELETED',
}
export declare type DimensionModelConfig = {
  __typename?: 'DimensionModelConfig';
  /** 中梁 */
  bridge: Array<Array<Scalars['String']>>;
  /** 框高 */
  lensHeight: Array<Array<Scalars['String']>>;
  /** 框宽 */
  lensWidth: Array<Array<Scalars['String']>>;
  /** 镜腿总长度 */
  templeLength: Array<Array<Scalars['String']>>;
  /** 整宽 */
  totalWidth: Array<Array<Scalars['String']>>;
};
export declare type DimensionModelData = {
  __typename?: 'DimensionModelData';
  /** 中梁 */
  bridge: DimensionModelDataItem;
  /** 框高 */
  lensHeight: DimensionModelDataItem;
  /** 框宽 */
  lensWidth: DimensionModelDataItem;
  /** 镜腿总长度 */
  templeLength: DimensionModelDataItem;
  /** 整宽 */
  totalWidth: DimensionModelDataItem;
};
export declare type DimensionModelDataItem = {
  __typename?: 'DimensionModelDataItem';
  /** 英寸单位下的值 */
  in: Scalars['String'];
  /** 毫米单位下的值 */
  mm: Scalars['String'];
};
export declare type Discount = {
  __typename?: 'Discount';
  adjustmentSource: Scalars['String'];
  amount: Scalars['Int'];
  amountWithTax: Scalars['Int'];
  description: Scalars['String'];
  type: AdjustmentType;
};
export declare type EmailAddInput = {
  email: Scalars['String'];
};
/** Returned when attempting to create a Customer with an email address already registered to an existing User. */
export declare type EmailAddressConflictError = ErrorResult & {
  __typename?: 'EmailAddressConflictError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};
export declare enum ErrorCode {
  ALREADY_LOGGED_IN_ERROR = 'ALREADY_LOGGED_IN_ERROR',
  COUPON_CODE_EXPIRED_ERROR = 'COUPON_CODE_EXPIRED_ERROR',
  COUPON_CODE_INVALID_ERROR = 'COUPON_CODE_INVALID_ERROR',
  COUPON_CODE_LIMIT_ERROR = 'COUPON_CODE_LIMIT_ERROR',
  EMAIL_ADDRESS_CONFLICT_ERROR = 'EMAIL_ADDRESS_CONFLICT_ERROR',
  IDENTIFIER_CHANGE_TOKEN_EXPIRED_ERROR = 'IDENTIFIER_CHANGE_TOKEN_EXPIRED_ERROR',
  IDENTIFIER_CHANGE_TOKEN_INVALID_ERROR = 'IDENTIFIER_CHANGE_TOKEN_INVALID_ERROR',
  INELIGIBLE_PAYMENT_METHOD_ERROR = 'INELIGIBLE_PAYMENT_METHOD_ERROR',
  INELIGIBLE_SHIPPING_METHOD_ERROR = 'INELIGIBLE_SHIPPING_METHOD_ERROR',
  INSUFFICIENT_STOCK_ERROR = 'INSUFFICIENT_STOCK_ERROR',
  INVALID_CREDENTIALS_ERROR = 'INVALID_CREDENTIALS_ERROR',
  MISSING_PASSWORD_ERROR = 'MISSING_PASSWORD_ERROR',
  NATIVE_AUTH_STRATEGY_ERROR = 'NATIVE_AUTH_STRATEGY_ERROR',
  NEGATIVE_QUANTITY_ERROR = 'NEGATIVE_QUANTITY_ERROR',
  NOT_VERIFIED_ERROR = 'NOT_VERIFIED_ERROR',
  NO_ACTIVE_ORDER_ERROR = 'NO_ACTIVE_ORDER_ERROR',
  ORDER_LIMIT_ERROR = 'ORDER_LIMIT_ERROR',
  ORDER_MODIFICATION_ERROR = 'ORDER_MODIFICATION_ERROR',
  ORDER_PAYMENT_STATE_ERROR = 'ORDER_PAYMENT_STATE_ERROR',
  ORDER_STATE_TRANSITION_ERROR = 'ORDER_STATE_TRANSITION_ERROR',
  PASSWORD_ALREADY_SET_ERROR = 'PASSWORD_ALREADY_SET_ERROR',
  PASSWORD_RESET_TOKEN_EXPIRED_ERROR = 'PASSWORD_RESET_TOKEN_EXPIRED_ERROR',
  PASSWORD_RESET_TOKEN_INVALID_ERROR = 'PASSWORD_RESET_TOKEN_INVALID_ERROR',
  PASSWORD_VALIDATION_ERROR = 'PASSWORD_VALIDATION_ERROR',
  PAYMENT_DECLINED_ERROR = 'PAYMENT_DECLINED_ERROR',
  PAYMENT_FAILED_ERROR = 'PAYMENT_FAILED_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  VERIFICATION_TOKEN_EXPIRED_ERROR = 'VERIFICATION_TOKEN_EXPIRED_ERROR',
  VERIFICATION_TOKEN_INVALID_ERROR = 'VERIFICATION_TOKEN_INVALID_ERROR',
}
export declare type ErrorResult = {
  errorCode: ErrorCode;
  message: Scalars['String'];
};
export declare type Facet = Node & {
  __typename?: 'Facet';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<FacetCustomFields>;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  translations: Array<FacetTranslation>;
  updatedAt: Scalars['DateTime'];
  values: Array<FacetValue>;
};
export declare type FacetCustomFields = {
  __typename?: 'FacetCustomFields';
  displayOrder?: Maybe<Scalars['Int']>;
  invisible?: Maybe<Scalars['Boolean']>;
};
export declare type FacetFilterParameter = {
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  displayOrder?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  invisible?: InputMaybe<BooleanOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};
export declare type FacetList = PaginatedList & {
  __typename?: 'FacetList';
  items: Array<Facet>;
  totalItems: Scalars['Int'];
};
export declare type FacetListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<FacetFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<FacetSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};
export declare type FacetSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayOrder?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  invisible?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};
export declare type FacetTranslation = {
  __typename?: 'FacetTranslation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};
export declare type FacetValue = Node & {
  __typename?: 'FacetValue';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<FacetValueCustomFields>;
  facet: Facet;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  translations: Array<FacetValueTranslation>;
  updatedAt: Scalars['DateTime'];
};
export declare type FacetValueCampaignConfigData = {
  __typename?: 'FacetValueCampaignConfigData';
  /** 直降活动结束时间 */
  endsAt?: Maybe<Scalars['DateTime']>;
  /** 直降专题, 镜架实际打折的比例 20%, 填字符串20 */
  frameDiscountPercent: Scalars['String'];
  /** 直降, 允许设置当前直降后的售价, 只针对镜架, 如果配置了此项目, 则覆盖会自动计算frameDiscountPercent, 此处$5填写为500 */
  frameFixedSaleAmount?: Maybe<Scalars['String']>;
  /** 直降专题, 镜架折扣显示标签 */
  framePromotionText: Scalars['String'];
  /** 直降专题, 镜架对应镜片实际打折的比例 20%, 填字符串填20 */
  lensDiscountPercent: Scalars['String'];
  /** 直降专题, 镜架对应的镜片折扣显示标签 */
  lensPromotionText: Scalars['String'];
};
export declare type FacetValueCustomFields = {
  __typename?: 'FacetValueCustomFields';
  campaignConfigData?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};
/**
 * Used to construct boolean expressions for filtering search results
 * by FacetValue ID. Examples:
 *
 * * ID=1 OR ID=2: `{ facetValueFilters: [{ or: [1,2] }] }`
 * * ID=1 AND ID=2: `{ facetValueFilters: [{ and: 1 }, { and: 2 }] }`
 * * ID=1 AND (ID=2 OR ID=3): `{ facetValueFilters: [{ and: 1 }, { or: [2,3] }] }`
 */
export declare type FacetValueFilterInput = {
  and?: InputMaybe<Scalars['ID']>;
  or?: InputMaybe<Array<Scalars['ID']>>;
};
/**
 * Which FacetValues are present in the products returned
 * by the search, and in what quantity.
 */
export declare type FacetValueResult = {
  __typename?: 'FacetValueResult';
  count: Scalars['Int'];
  facetValue: FacetValue;
};
export declare type FacetValueTranslation = {
  __typename?: 'FacetValueTranslation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};
export declare type Favorite = Node & {
  __typename?: 'Favorite';
  createdAt: Scalars['DateTime'];
  customer: Customer;
  id: Scalars['ID'];
  languageCode?: Maybe<LanguageCode>;
  productVariant?: Maybe<ProductVariant>;
  updatedAt: Scalars['DateTime'];
};
export declare type FavoriteFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};
export declare type FavoriteList = PaginatedList & {
  __typename?: 'FavoriteList';
  items: Array<Favorite>;
  totalItems: Scalars['Int'];
};
export declare type FavoriteListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<FavoriteFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<FavoriteSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};
export declare type FavoriteSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};
export declare type FloatCustomFieldConfig = CustomField & {
  __typename?: 'FloatCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  step?: Maybe<Scalars['Float']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};
export declare type Fulfillment = Node & {
  __typename?: 'Fulfillment';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  method: Scalars['String'];
  orderItems: Array<OrderItem>;
  state: Scalars['String'];
  trackingCode?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};
export declare enum GlobalFlag {
  FALSE = 'FALSE',
  INHERIT = 'INHERIT',
  TRUE = 'TRUE',
}
export declare type HelpCenter = Node & {
  __typename?: 'HelpCenter';
  body: Scalars['String'];
  collections: Array<HelpCenterCollection>;
  createdAt: Scalars['DateTime'];
  displayOrder: Scalars['Int'];
  helpfulNo: Scalars['Int'];
  helpfulYes: Scalars['Int'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  published: Scalars['Boolean'];
  /** 关联文章, 当前文章关联分类, 中的文章, 取上下文 */
  relatedArticles: Array<HelpCenter>;
  shortDesc?: Maybe<Scalars['String']>;
  showOnTop: Scalars['Boolean'];
  slug: Scalars['String'];
  tags: Array<HelpCenterTag>;
  title: Scalars['String'];
  translations: Array<HelpCenterTranslation>;
  updatedAt: Scalars['DateTime'];
};
export declare type HelpCenterCollection = Node & {
  __typename?: 'HelpCenterCollection';
  breadcrumbs: Array<HelpCenterCollectionBreadcrumb>;
  children?: Maybe<Array<HelpCenterCollection>>;
  coverImage?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  displayOrder: Scalars['Int'];
  /** 扩展文章分类, 查询指定页面articles */
  helpArticles: HelpCenterList;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  name: Scalars['String'];
  parent?: Maybe<HelpCenterCollection>;
  published: Scalars['Boolean'];
  shortDesc?: Maybe<Scalars['String']>;
  showOnTop: Scalars['Boolean'];
  slug: Scalars['String'];
  translations: Array<HelpCenterCollectionTranslation>;
  updatedAt: Scalars['DateTime'];
};
export declare type HelpCenterCollectionHelpArticlesArgs = {
  options?: InputMaybe<HelpCenterListOptions>;
};
export declare type HelpCenterCollectionBreadcrumb = {
  __typename?: 'HelpCenterCollectionBreadcrumb';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
};
export declare type HelpCenterCollectionFilterParameter = {
  coverImage?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  displayOrder?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  metaDescription?: InputMaybe<StringOperators>;
  metaTitle?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  published?: InputMaybe<BooleanOperators>;
  shortDesc?: InputMaybe<StringOperators>;
  showOnTop?: InputMaybe<BooleanOperators>;
  slug?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};
export declare type HelpCenterCollectionList = PaginatedList & {
  __typename?: 'HelpCenterCollectionList';
  items: Array<HelpCenterCollection>;
  totalItems: Scalars['Int'];
};
export declare type HelpCenterCollectionListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<HelpCenterCollectionFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<HelpCenterCollectionSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};
export declare type HelpCenterCollectionSortParameter = {
  coverImage?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayOrder?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metaDescription?: InputMaybe<SortOrder>;
  metaTitle?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  shortDesc?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};
export declare type HelpCenterCollectionTranslation = {
  __typename?: 'HelpCenterCollectionTranslation';
  coverImage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  name: Scalars['String'];
  redirectTo?: Maybe<Scalars['String']>;
  shortDesc?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
};
export declare type HelpCenterFilterParameter = {
  body?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  displayOrder?: InputMaybe<NumberOperators>;
  helpfulNo?: InputMaybe<NumberOperators>;
  helpfulYes?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  metaDescription?: InputMaybe<StringOperators>;
  metaTitle?: InputMaybe<StringOperators>;
  published?: InputMaybe<BooleanOperators>;
  shortDesc?: InputMaybe<StringOperators>;
  showOnTop?: InputMaybe<BooleanOperators>;
  slug?: InputMaybe<StringOperators>;
  title?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};
export declare type HelpCenterHotSearch = Node & {
  __typename?: 'HelpCenterHotSearch';
  createdAt: Scalars['DateTime'];
  displayOrder: Scalars['Int'];
  id: Scalars['ID'];
  keyword: Scalars['String'];
  languageCode: LanguageCode;
  published: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
};
export declare type HelpCenterHotSearchFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  displayOrder?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  keyword?: InputMaybe<StringOperators>;
  languageCode?: InputMaybe<StringOperators>;
  published?: InputMaybe<BooleanOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};
export declare type HelpCenterHotSearchList = PaginatedList & {
  __typename?: 'HelpCenterHotSearchList';
  items: Array<HelpCenterHotSearch>;
  totalItems: Scalars['Int'];
};
export declare type HelpCenterHotSearchListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<HelpCenterHotSearchFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<HelpCenterHotSearchSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};
export declare type HelpCenterHotSearchSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  displayOrder?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  keyword?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};
export declare type HelpCenterList = PaginatedList & {
  __typename?: 'HelpCenterList';
  items: Array<HelpCenter>;
  totalItems: Scalars['Int'];
};
export declare type HelpCenterListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<HelpCenterFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<HelpCenterSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};
export declare type HelpCenterSortParameter = {
  body?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayOrder?: InputMaybe<SortOrder>;
  helpfulNo?: InputMaybe<SortOrder>;
  helpfulYes?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metaDescription?: InputMaybe<SortOrder>;
  metaTitle?: InputMaybe<SortOrder>;
  shortDesc?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};
export declare type HelpCenterTag = Node & {
  __typename?: 'HelpCenterTag';
  createdAt: Scalars['DateTime'];
  displayOrder: Scalars['Int'];
  helpArticles: HelpCenterList;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  name: Scalars['String'];
  published: Scalars['Boolean'];
  slug: Scalars['String'];
  translations: Array<HelpCenterTagTranslation>;
  updatedAt: Scalars['DateTime'];
};
export declare type HelpCenterTagHelpArticlesArgs = {
  options?: InputMaybe<HelpCenterListOptions>;
};
export declare type HelpCenterTagFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  displayOrder?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  metaDescription?: InputMaybe<StringOperators>;
  metaTitle?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  published?: InputMaybe<BooleanOperators>;
  slug?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};
export declare type HelpCenterTagList = PaginatedList & {
  __typename?: 'HelpCenterTagList';
  items: Array<HelpCenterTag>;
  totalItems: Scalars['Int'];
};
export declare type HelpCenterTagListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<HelpCenterTagFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<HelpCenterTagSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};
export declare type HelpCenterTagSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  displayOrder?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metaDescription?: InputMaybe<SortOrder>;
  metaTitle?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};
export declare type HelpCenterTagTranslation = {
  __typename?: 'HelpCenterTagTranslation';
  id: Scalars['ID'];
  languageCode: LanguageCode;
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
};
export declare type HelpCenterTranslation = {
  __typename?: 'HelpCenterTranslation';
  body: Scalars['String'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  shortDesc?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
};
export declare type HelpSummarize = {
  __typename?: 'HelpSummarize';
  topArticles: Array<HelpCenter>;
  topCollections: Array<HelpCenterCollection>;
  topHotSearchWords: Array<HelpCenterHotSearch>;
};
export declare type HelpSummarizeOptions = {
  topArticleCount?: InputMaybe<Scalars['Int']>;
  topCollectionCount?: InputMaybe<Scalars['Int']>;
  topHotSearchWordCount?: InputMaybe<Scalars['Int']>;
};
export declare type HistoryEntry = Node & {
  __typename?: 'HistoryEntry';
  createdAt: Scalars['DateTime'];
  data: Scalars['JSON'];
  id: Scalars['ID'];
  type: HistoryEntryType;
  updatedAt: Scalars['DateTime'];
};
export declare type HistoryEntryFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  type?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};
export declare type HistoryEntryList = PaginatedList & {
  __typename?: 'HistoryEntryList';
  items: Array<HistoryEntry>;
  totalItems: Scalars['Int'];
};
export declare type HistoryEntryListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<HistoryEntryFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<HistoryEntrySortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};
export declare type HistoryEntrySortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};
export declare enum HistoryEntryType {
  CUSTOMER_ADDED_TO_GROUP = 'CUSTOMER_ADDED_TO_GROUP',
  CUSTOMER_ADDRESS_CREATED = 'CUSTOMER_ADDRESS_CREATED',
  CUSTOMER_ADDRESS_DELETED = 'CUSTOMER_ADDRESS_DELETED',
  CUSTOMER_ADDRESS_UPDATED = 'CUSTOMER_ADDRESS_UPDATED',
  CUSTOMER_DETAIL_UPDATED = 'CUSTOMER_DETAIL_UPDATED',
  CUSTOMER_EMAIL_UPDATE_REQUESTED = 'CUSTOMER_EMAIL_UPDATE_REQUESTED',
  CUSTOMER_EMAIL_UPDATE_VERIFIED = 'CUSTOMER_EMAIL_UPDATE_VERIFIED',
  CUSTOMER_NOTE = 'CUSTOMER_NOTE',
  CUSTOMER_PASSWORD_RESET_REQUESTED = 'CUSTOMER_PASSWORD_RESET_REQUESTED',
  CUSTOMER_PASSWORD_RESET_VERIFIED = 'CUSTOMER_PASSWORD_RESET_VERIFIED',
  CUSTOMER_PASSWORD_UPDATED = 'CUSTOMER_PASSWORD_UPDATED',
  CUSTOMER_REGISTERED = 'CUSTOMER_REGISTERED',
  CUSTOMER_REMOVED_FROM_GROUP = 'CUSTOMER_REMOVED_FROM_GROUP',
  CUSTOMER_VERIFIED = 'CUSTOMER_VERIFIED',
  ORDER_CANCELLATION = 'ORDER_CANCELLATION',
  ORDER_COUPON_APPLIED = 'ORDER_COUPON_APPLIED',
  ORDER_COUPON_REMOVED = 'ORDER_COUPON_REMOVED',
  ORDER_FULFILLMENT = 'ORDER_FULFILLMENT',
  ORDER_FULFILLMENT_TRANSITION = 'ORDER_FULFILLMENT_TRANSITION',
  ORDER_MODIFIED = 'ORDER_MODIFIED',
  ORDER_NOTE = 'ORDER_NOTE',
  ORDER_PAYMENT_TRANSITION = 'ORDER_PAYMENT_TRANSITION',
  ORDER_REFUND_TRANSITION = 'ORDER_REFUND_TRANSITION',
  ORDER_STATE_TRANSITION = 'ORDER_STATE_TRANSITION',
}
/** Operators for filtering on a list of ID fields */
export declare type IdListOperators = {
  inList: Scalars['ID'];
};
/** Operators for filtering on an ID field */
export declare type IdOperators = {
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  notEq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
};
/**
 * Returned if the token used to change a Customer's email address is valid, but has
 * expired according to the `verificationTokenDuration` setting in the AuthOptions.
 */
export declare type IdentifierChangeTokenExpiredError = ErrorResult & {
  __typename?: 'IdentifierChangeTokenExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};
/**
 * Returned if the token used to change a Customer's email address is either
 * invalid or does not match any expected tokens.
 */
export declare type IdentifierChangeTokenInvalidError = ErrorResult & {
  __typename?: 'IdentifierChangeTokenInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};
/** Returned when attempting to add a Payment using a PaymentMethod for which the Order is not eligible. */
export declare type IneligiblePaymentMethodError = ErrorResult & {
  __typename?: 'IneligiblePaymentMethodError';
  eligibilityCheckerMessage?: Maybe<Scalars['String']>;
  errorCode: ErrorCode;
  message: Scalars['String'];
};
/** Returned when attempting to set a ShippingMethod for which the Order is not eligible */
export declare type IneligibleShippingMethodError = ErrorResult & {
  __typename?: 'IneligibleShippingMethodError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};
/** Returned when attempting to add more items to the Order than are available */
export declare type InsufficientStockError = ErrorResult & {
  __typename?: 'InsufficientStockError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  order: Order;
  quantityAvailable: Scalars['Int'];
};
export declare type IntCustomFieldConfig = CustomField & {
  __typename?: 'IntCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  step?: Maybe<Scalars['Int']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};
/** Returned if the user authentication credentials are not valid */
export declare type InvalidCredentialsError = ErrorResult & {
  __typename?: 'InvalidCredentialsError';
  authenticationError: Scalars['String'];
  errorCode: ErrorCode;
  message: Scalars['String'];
};
export declare type Invoice = Node & {
  __typename?: 'Invoice';
  createdAt: Scalars['DateTime'];
  customerEmail: Scalars['String'];
  downloadUrl: Scalars['String'];
  id: Scalars['ID'];
  invoiceNumber: Scalars['Int'];
  orderCode: Scalars['String'];
  orderId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};
export declare type InvoiceConfig = Node & {
  __typename?: 'InvoiceConfig';
  channel: Channel;
  createdAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  templateOrderString?: Maybe<Scalars['String']>;
  templateString?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};
export declare type InvoiceConfigList = PaginatedList & {
  __typename?: 'InvoiceConfigList';
  items: Array<InvoiceConfig>;
  totalItems: Scalars['Int'];
};
export declare type InvoiceList = PaginatedList & {
  __typename?: 'InvoiceList';
  items: Array<Invoice>;
  totalItems: Scalars['Int'];
};
export declare enum InvoiceType {
  Invoice = 'Invoice',
  Order = 'Order',
}
/**
 * @description
 * Languages in the form of a ISO 639-1 language code with optional
 * region or script modifier (e.g. de_AT). The selection available is based
 * on the [Unicode CLDR summary list](https://unicode-org.github.io/cldr-staging/charts/37/summary/root.html)
 * and includes the major spoken languages of the world and any widely-used variants.
 *
 * @docsCategory common
 */
export declare enum LanguageCode {
  /** Afrikaans */
  af = 'af',
  /** Akan */
  ak = 'ak',
  /** Amharic */
  am = 'am',
  /** Arabic */
  ar = 'ar',
  /** Assamese */
  as = 'as',
  /** Azerbaijani */
  az = 'az',
  /** Belarusian */
  be = 'be',
  /** Bulgarian */
  bg = 'bg',
  /** Bambara */
  bm = 'bm',
  /** Bangla */
  bn = 'bn',
  /** Tibetan */
  bo = 'bo',
  /** Breton */
  br = 'br',
  /** Bosnian */
  bs = 'bs',
  /** Catalan */
  ca = 'ca',
  /** Chechen */
  ce = 'ce',
  /** Corsican */
  co = 'co',
  /** Czech */
  cs = 'cs',
  /** Church Slavic */
  cu = 'cu',
  /** Welsh */
  cy = 'cy',
  /** Danish */
  da = 'da',
  /** German */
  de = 'de',
  /** Austrian German */
  de_AT = 'de_AT',
  /** Swiss High German */
  de_CH = 'de_CH',
  /** Dzongkha */
  dz = 'dz',
  /** Ewe */
  ee = 'ee',
  /** Greek */
  el = 'el',
  /** English */
  en = 'en',
  /** Australian English */
  en_AU = 'en_AU',
  /** Canadian English */
  en_CA = 'en_CA',
  /** British English */
  en_GB = 'en_GB',
  /** American English */
  en_US = 'en_US',
  /** Esperanto */
  eo = 'eo',
  /** Spanish */
  es = 'es',
  /** European Spanish */
  es_ES = 'es_ES',
  /** Mexican Spanish */
  es_MX = 'es_MX',
  /** Estonian */
  et = 'et',
  /** Basque */
  eu = 'eu',
  /** Persian */
  fa = 'fa',
  /** Dari */
  fa_AF = 'fa_AF',
  /** Fulah */
  ff = 'ff',
  /** Finnish */
  fi = 'fi',
  /** Faroese */
  fo = 'fo',
  /** French */
  fr = 'fr',
  /** Canadian French */
  fr_CA = 'fr_CA',
  /** Swiss French */
  fr_CH = 'fr_CH',
  /** Western Frisian */
  fy = 'fy',
  /** Irish */
  ga = 'ga',
  /** Scottish Gaelic */
  gd = 'gd',
  /** Galician */
  gl = 'gl',
  /** Gujarati */
  gu = 'gu',
  /** Manx */
  gv = 'gv',
  /** Hausa */
  ha = 'ha',
  /** Hebrew */
  he = 'he',
  /** Hindi */
  hi = 'hi',
  /** Croatian */
  hr = 'hr',
  /** Haitian Creole */
  ht = 'ht',
  /** Hungarian */
  hu = 'hu',
  /** Armenian */
  hy = 'hy',
  /** Interlingua */
  ia = 'ia',
  /** Indonesian */
  id = 'id',
  /** Igbo */
  ig = 'ig',
  /** Sichuan Yi */
  ii = 'ii',
  /** Icelandic */
  is = 'is',
  /** Italian */
  it = 'it',
  /** Japanese */
  ja = 'ja',
  /** Javanese */
  jv = 'jv',
  /** Georgian */
  ka = 'ka',
  /** Kikuyu */
  ki = 'ki',
  /** Kazakh */
  kk = 'kk',
  /** Kalaallisut */
  kl = 'kl',
  /** Khmer */
  km = 'km',
  /** Kannada */
  kn = 'kn',
  /** Korean */
  ko = 'ko',
  /** Kashmiri */
  ks = 'ks',
  /** Kurdish */
  ku = 'ku',
  /** Cornish */
  kw = 'kw',
  /** Kyrgyz */
  ky = 'ky',
  /** Latin */
  la = 'la',
  /** Luxembourgish */
  lb = 'lb',
  /** Ganda */
  lg = 'lg',
  /** Lingala */
  ln = 'ln',
  /** Lao */
  lo = 'lo',
  /** Lithuanian */
  lt = 'lt',
  /** Luba-Katanga */
  lu = 'lu',
  /** Latvian */
  lv = 'lv',
  /** Malagasy */
  mg = 'mg',
  /** Maori */
  mi = 'mi',
  /** Macedonian */
  mk = 'mk',
  /** Malayalam */
  ml = 'ml',
  /** Mongolian */
  mn = 'mn',
  /** Marathi */
  mr = 'mr',
  /** Malay */
  ms = 'ms',
  /** Maltese */
  mt = 'mt',
  /** Burmese */
  my = 'my',
  /** Norwegian Bokmål */
  nb = 'nb',
  /** North Ndebele */
  nd = 'nd',
  /** Nepali */
  ne = 'ne',
  /** Dutch */
  nl = 'nl',
  /** Flemish */
  nl_BE = 'nl_BE',
  /** Norwegian Nynorsk */
  nn = 'nn',
  /** Nyanja */
  ny = 'ny',
  /** Oromo */
  om = 'om',
  /** Odia */
  or = 'or',
  /** Ossetic */
  os = 'os',
  /** Punjabi */
  pa = 'pa',
  /** Polish */
  pl = 'pl',
  /** Pashto */
  ps = 'ps',
  /** Portuguese */
  pt = 'pt',
  /** Brazilian Portuguese */
  pt_BR = 'pt_BR',
  /** European Portuguese */
  pt_PT = 'pt_PT',
  /** Quechua */
  qu = 'qu',
  /** Romansh */
  rm = 'rm',
  /** Rundi */
  rn = 'rn',
  /** Romanian */
  ro = 'ro',
  /** Moldavian */
  ro_MD = 'ro_MD',
  /** Russian */
  ru = 'ru',
  /** Kinyarwanda */
  rw = 'rw',
  /** Sanskrit */
  sa = 'sa',
  /** Sindhi */
  sd = 'sd',
  /** Northern Sami */
  se = 'se',
  /** Sango */
  sg = 'sg',
  /** Sinhala */
  si = 'si',
  /** Slovak */
  sk = 'sk',
  /** Slovenian */
  sl = 'sl',
  /** Samoan */
  sm = 'sm',
  /** Shona */
  sn = 'sn',
  /** Somali */
  so = 'so',
  /** Albanian */
  sq = 'sq',
  /** Serbian */
  sr = 'sr',
  /** Southern Sotho */
  st = 'st',
  /** Sundanese */
  su = 'su',
  /** Swedish */
  sv = 'sv',
  /** Swahili */
  sw = 'sw',
  /** Congo Swahili */
  sw_CD = 'sw_CD',
  /** Tamil */
  ta = 'ta',
  /** Telugu */
  te = 'te',
  /** Tajik */
  tg = 'tg',
  /** Thai */
  th = 'th',
  /** Tigrinya */
  ti = 'ti',
  /** Turkmen */
  tk = 'tk',
  /** Tongan */
  to = 'to',
  /** Turkish */
  tr = 'tr',
  /** Tatar */
  tt = 'tt',
  /** Uyghur */
  ug = 'ug',
  /** Ukrainian */
  uk = 'uk',
  /** Urdu */
  ur = 'ur',
  /** Uzbek */
  uz = 'uz',
  /** Vietnamese */
  vi = 'vi',
  /** Volapük */
  vo = 'vo',
  /** Wolof */
  wo = 'wo',
  /** Xhosa */
  xh = 'xh',
  /** Yiddish */
  yi = 'yi',
  /** Yoruba */
  yo = 'yo',
  /** Chinese */
  zh = 'zh',
  /** Simplified Chinese */
  zh_Hans = 'zh_Hans',
  /** Traditional Chinese */
  zh_Hant = 'zh_Hant',
  /** Zulu */
  zu = 'zu',
}
export declare type LensOptionUiComponents = {
  __typename?: 'LensOptionUiComponents';
  /** 当前选项的孩子节点展示的UI控件,如color_box */
  childComponentType?: Maybe<LensOptionUiComponentsType>;
  /** UI显示空间类型 */
  uiType?: Maybe<LensOptionUiComponentsType>;
  /** UI显示空间类型对应的显示值 */
  uiValue?: Maybe<Scalars['String']>;
};
export declare enum LensOptionUiComponentsType {
  COLOR_BOX = 'COLOR_BOX',
  TEXT = 'TEXT',
}
export declare type LensProcessConfigItem = Node & {
  __typename?: 'LensProcessConfigItem';
  disabled: Scalars['Boolean'];
  displayOrder: Scalars['Int'];
  id: Scalars['ID'];
  lensProcessOption: LensProcessOption;
  lensProcessOptionId: Scalars['ID'];
  lensProcessTemplate: LensProcessTemplate;
  lensProcessTemplateId: Scalars['ID'];
  overridePrice?: Maybe<Scalars['Int']>;
  overrideRecommendRuleConditions?: Maybe<Scalars['JSON']>;
  overrideRuleConditions?: Maybe<Scalars['JSON']>;
};
export declare type LensProcessConfigItemFilterParameter = {
  disabled?: InputMaybe<BooleanOperators>;
  displayOrder?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  lensProcessOptionId?: InputMaybe<IdOperators>;
  lensProcessTemplateId?: InputMaybe<IdOperators>;
  overridePrice?: InputMaybe<NumberOperators>;
};
export declare type LensProcessConfigItemList = PaginatedList & {
  __typename?: 'LensProcessConfigItemList';
  items: Array<LensProcessConfigItem>;
  totalItems: Scalars['Int'];
};
export declare type LensProcessConfigItemListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<LensProcessConfigItemFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<LensProcessConfigItemSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};
export declare type LensProcessConfigItemSortParameter = {
  displayOrder?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lensProcessOptionId?: InputMaybe<SortOrder>;
  lensProcessTemplateId?: InputMaybe<SortOrder>;
  overridePrice?: InputMaybe<SortOrder>;
};
export declare type LensProcessOption = Node & {
  __typename?: 'LensProcessOption';
  /** 当前选项默认的需要调整的价格. +, - */
  adjustPrice: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  /**
   * 针对购物车升级, 如果指定了依赖keys
   * 1. 先验证当前的升级包规则满足条件之后
   * 2. 我们从这个里面找到他T3的可能能够选择流程, 计算T3流程的价格.(从中选择最便宜并且价格比当前价格更高的一个选项)
   */
  dependentFromT3Key?: Maybe<LensProcessOptionKeys>;
  /** 当前选项的默认在流程模板配置中的初始化排序值 */
  displayOrder: Scalars['Int'];
  /** 功能特点标识, Up to 20% thinner */
  feature?: Maybe<Scalars['String']>;
  /** 小图标地址, 可以是背景图, base64等. */
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** 当前选项的详细注解, 详细标注当前选项包含的内容 */
  introduction?: Maybe<Array<Scalars['String']>>;
  /** 用来标识当前镜片流程模块的唯一ID值, 不是所有模块选项都需要模块标识, 核心稳定并且参与流程规则的模块才需要 */
  key?: Maybe<LensProcessOptionKeys>;
  languageCode: LanguageCode;
  /** 当前选项的名称 */
  name: Scalars['String'];
  parent?: Maybe<LensProcessOptionParent>;
  parentId?: Maybe<Scalars['ID']>;
  /** 可视化数据, 图片资源地址存储, 选择当前项可能有对应图片展示. */
  preview?: Maybe<LensProcessOptionPreview>;
  /** 通过推荐规则, 动态计算,是否为推荐选项, 如果是, 可能需要高亮处理. */
  recommend: Scalars['Boolean'];
  /** 推荐规则引擎json-rules-engine的推荐规则条件默认配置, 如果满足条件,当前显示推荐,如果当前套餐包下面多个满足, 则取第一个, kzfoo-next前端不应该显示, 规则运算放后端 */
  recommendRuleConditions?: Maybe<Scalars['JSON']>;
  /** 可选值, 针对T4(变种条件可能有1000个), 考虑性能, 可以设置他依赖的T1,T3作为条件, 在查询T4的时候数据提取过滤掉不需要的item */
  requiredPreSelectedKeys?: Maybe<Array<LensProcessOptionKeys>>;
  /** 规则引擎json-rules-engine的规则条件(选项可用/不可用)默认配置, kzfoo-next前端不应该显示, 规则运算放后端 */
  ruleConditions?: Maybe<Scalars['JSON']>;
  /** 当前选项的短描述 */
  shortDesc: Scalars['String'];
  /** 当前流程模版的步骤标签, step1, step2, step3, step4 */
  stepGroupName: LensStepGroups;
  translations: Array<LensProcessOptionTranslation>;
  uiComponents?: Maybe<LensOptionUiComponents>;
  updatedAt: Scalars['DateTime'];
  /** 升级选项名字, 可以在name基础上进行额外包装 */
  upgradeText?: Maybe<Scalars['String']>;
  /** T4套餐包升级到新的套餐包的KEY, 展示优先级, 就按照依赖KEY先后顺序 */
  upgradeToKeys?: Maybe<Array<LensProcessOptionKeys>>;
};
export declare type LensProcessOptionFilterParameter = {
  adjustPrice?: InputMaybe<NumberOperators>;
  createdAt?: InputMaybe<DateOperators>;
  dependentFromT3Key?: InputMaybe<StringOperators>;
  displayOrder?: InputMaybe<NumberOperators>;
  feature?: InputMaybe<StringOperators>;
  icon?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  key?: InputMaybe<StringOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  parentId?: InputMaybe<IdOperators>;
  recommend?: InputMaybe<BooleanOperators>;
  shortDesc?: InputMaybe<StringOperators>;
  stepGroupName?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  upgradeText?: InputMaybe<StringOperators>;
};
/** 镜片流程原子选项的唯一标识符号,部分无须参与规则运算的选项模块为可选项. */
export declare enum LensProcessOptionKeys {
  /** T1用途: 看远 */
  T1_DISTANCE = 'T1_DISTANCE',
  /** T1用途: 多焦点 */
  T1_MULTIFOCAL = 'T1_MULTIFOCAL',
  /** T1用途: 多焦点/双光 */
  T1_MULTIFOCAL_BIFOCAL = 'T1_MULTIFOCAL_BIFOCAL',
  /** T1用途: 多焦点/高级渐进 */
  T1_MULTIFOCAL_PREMIUM_PROGRESSIVE = 'T1_MULTIFOCAL_PREMIUM_PROGRESSIVE',
  /** T1用途: 多焦点/渐进 */
  T1_MULTIFOCAL_PROGRESSIVE = 'T1_MULTIFOCAL_PROGRESSIVE',
  /** T1用途: 平光 */
  T1_NON_PRESCRIPTION = 'T1_NON_PRESCRIPTION',
  /** T1用途: 老花 */
  T1_READING = 'T1_READING',
  /** T1用途: 老花/看中 */
  T1_READING_INTERMEDIATE = 'T1_READING_INTERMEDIATE',
  /** T1用途: 老花/看近 */
  T1_READING_READERS = 'T1_READING_READERS',
  /** T2游泳镜, 项链镜等直接选度数的处方模块 */
  T2_RX_DEGREES = 'T2_RX_DEGREES',
  /** T2直接选度数-项链镜-仅仅用到'DIRECT_DEGREES'规则动态选项数据源匹配 */
  T2_RX_DEGREES_NECK = 'T2_RX_DEGREES_NECK',
  /** T2直接选度数-游泳镜-仅仅用到'DIRECT_DEGREES'规则动态选项数据源匹配 */
  T2_RX_DEGREES_SWIMMING = 'T2_RX_DEGREES_SWIMMING',
  /** T2用户标准处方模块 */
  T2_RX_STANDARD = 'T2_RX_STANDARD',
  /** T3防蓝光 */
  T3_BLUE = 'T3_BLUE',
  /** T3防蓝光-普通 */
  T3_BLUE_BASIC = 'T3_BLUE_BASIC',
  /** T3透明镜片 */
  T3_CLEAR = 'T3_CLEAR',
  /** T3透明镜片-普通 */
  T3_CLEAR_BASIC = 'T3_CLEAR_BASIC',
  /** T3变色镜片 */
  T3_LIGHT = 'T3_LIGHT',
  /** T3普通变色 */
  T3_LIGHT_PHOTOCHROMIC = 'T3_LIGHT_PHOTOCHROMIC',
  /** T3普通变色-棕色 */
  T3_LIGHT_PHOTOCHROMIC_BROWN = 'T3_LIGHT_PHOTOCHROMIC_BROWN',
  /** T3普通变色-灰色 */
  T3_LIGHT_PHOTOCHROMIC_GRAY = 'T3_LIGHT_PHOTOCHROMIC_GRAY',
  /** T3全视线变色 */
  T3_LIGHT_TRANSPHOTO = 'T3_LIGHT_TRANSPHOTO',
  /** T3全视线变色-棕色 */
  T3_LIGHT_TRANSPHOTO_BROWN = 'T3_LIGHT_TRANSPHOTO_BROWN',
  /** T3全视线变色-灰色 */
  T3_LIGHT_TRANSPHOTO_GRAY = 'T3_LIGHT_TRANSPHOTO_GRAY',
  /** T3太阳镜 */
  T3_SUN = 'T3_SUN',
  /** T3太阳镜-普通全染镜片 */
  T3_SUN_BASIC = 'T3_SUN_BASIC',
  /** T3太阳镜-普通全染镜片-蓝色 */
  T3_SUN_BASIC_BLUE = 'T3_SUN_BASIC_BLUE',
  /** T3太阳镜-普通全染镜片-棕色 */
  T3_SUN_BASIC_BROWN = 'T3_SUN_BASIC_BROWN',
  /** T3太阳镜-普通全染镜片-灰色 */
  T3_SUN_BASIC_GRAY = 'T3_SUN_BASIC_GRAY',
  /** T3太阳镜-普通全染镜片-绿色 */
  T3_SUN_BASIC_GREEN = 'T3_SUN_BASIC_GREEN',
  /** T3太阳镜-普通全染镜片-橘色 */
  T3_SUN_BASIC_ORANGE = 'T3_SUN_BASIC_ORANGE',
  /** T3太阳镜-普通全染镜片-粉红色 */
  T3_SUN_BASIC_PINK = 'T3_SUN_BASIC_PINK',
  /** T3太阳镜-普通全染镜片-黄色 */
  T3_SUN_BASIC_YELLOW = 'T3_SUN_BASIC_YELLOW',
  /** T3太阳镜-梯度渐染镜片 */
  T3_SUN_GRADIENT = 'T3_SUN_GRADIENT',
  /** T3太阳镜-梯度渐染镜片-蓝色 */
  T3_SUN_GRADIENT_BLUE = 'T3_SUN_GRADIENT_BLUE',
  /** T3太阳镜-梯度渐染镜片-棕色 */
  T3_SUN_GRADIENT_BROWN = 'T3_SUN_GRADIENT_BROWN',
  /** T3太阳镜-梯度渐染镜片-灰色 */
  T3_SUN_GRADIENT_GRAY = 'T3_SUN_GRADIENT_GRAY',
  /** T3太阳镜-梯度渐染镜片-绿色 */
  T3_SUN_GRADIENT_GREEN = 'T3_SUN_GRADIENT_GREEN',
  /** T3太阳镜-梯度渐染镜片-紫色 */
  T3_SUN_GRADIENT_PURPLE = 'T3_SUN_GRADIENT_PURPLE',
  /** T3太阳镜-镜面镜片 */
  T3_SUN_MIRRORED = 'T3_SUN_MIRRORED',
  /** T3太阳镜-镜面镜片-琥珀色的玫瑰 */
  T3_SUN_MIRRORED_AMBERROSE = 'T3_SUN_MIRRORED_AMBERROSE',
  /** T3太阳镜-镜面镜片-蓝色 */
  T3_SUN_MIRRORED_BLUE = 'T3_SUN_MIRRORED_BLUE',
  /** T3太阳镜-镜面镜片-银色 */
  T3_SUN_MIRRORED_SLIVER = 'T3_SUN_MIRRORED_SLIVER',
  /** T3太阳镜-偏光镜片 */
  T3_SUN_POLARIZED = 'T3_SUN_POLARIZED',
  /** T3太阳镜-偏光镜片-普通染色 */
  T3_SUN_POLARIZED_BASIC = 'T3_SUN_POLARIZED_BASIC',
  /** T3太阳镜-偏光镜片-普通染色-棕色 */
  T3_SUN_POLARIZED_BASIC_BROWN = 'T3_SUN_POLARIZED_BASIC_BROWN',
  /** T3太阳镜-偏光镜片-普通染色-灰色 */
  T3_SUN_POLARIZED_BASIC_GRAY = 'T3_SUN_POLARIZED_BASIC_GRAY',
  /** T3太阳镜-偏光镜片-普通染色-绿色 */
  T3_SUN_POLARIZED_BASIC_GREEN = 'T3_SUN_POLARIZED_BASIC_GREEN',
  /** T3太阳镜-偏光镜片-镜面染色 */
  T3_SUN_POLARIZED_MIRRORED = 'T3_SUN_POLARIZED_MIRRORED',
  /** T3太阳镜-偏光镜片-镜面染色-琥珀色的玫瑰 */
  T3_SUN_POLARIZED_MIRRORED_AMBERROSE = 'T3_SUN_POLARIZED_MIRRORED_AMBERROSE',
  /** T3太阳镜-偏光镜片-镜面染色-蓝色 */
  T3_SUN_POLARIZED_MIRRORED_BLUE = 'T3_SUN_POLARIZED_MIRRORED_BLUE',
  /** T3太阳镜-偏光镜片-镜面染色-银色 */
  T3_SUN_POLARIZED_MIRRORED_SLIVER = 'T3_SUN_POLARIZED_MIRRORED_SLIVER',
  /** T4折射率套餐-premium-progressive-blue-1.56高级 */
  T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_56A = 'T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_56A',
  /** T4折射率套餐-premium-progressive-blue-1.56标准 */
  T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_56S = 'T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_56S',
  /** T4折射率套餐-premium-progressive-blue-1.60高级 */
  T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_60A = 'T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_60A',
  /** T4折射率套餐-premium-progressive-blue-1.60标准 */
  T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_60S = 'T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_60S',
  /** T4折射率套餐-premium-progressive-blue-1.67高级 */
  T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_67A = 'T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_67A',
  /** T4折射率套餐-premium-progressive-blue-1.67标准 */
  T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_67S = 'T4_PREMIUM_PROGRESSIVE_BLUE_BASIC_1_67S',
  /** T4折射率套餐-premium-progressive-clear-1.56高级 */
  T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_56A = 'T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_56A',
  /** T4折射率套餐-premium-progressive-clear-1.56标准 */
  T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_56S = 'T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_56S',
  /** T4折射率套餐-premium-progressive-clear-1.60高级 */
  T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_60A = 'T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_60A',
  /** T4折射率套餐-premium-progressive-clear-1.60标准 */
  T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_60S = 'T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_60S',
  /** T4折射率套餐-premium-progressive-clear-1.67高级 */
  T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_67A = 'T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_67A',
  /** T4折射率套餐-premium-progressive-clear-1.67标准 */
  T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_67S = 'T4_PREMIUM_PROGRESSIVE_CLEAR_BASIC_1_67S',
  /** T4折射率套餐-premium-progressive-photochromic-1.56高级 */
  T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_56A = 'T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_56A',
  /** T4折射率套餐-premium-progressive-photochromic-1.56标准 */
  T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_56S = 'T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_56S',
  /** T4折射率套餐-premium-progressive-photochromic-1.60高级 */
  T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_60A = 'T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_60A',
  /** T4折射率套餐-premium-progressive-photochromic-1.60标准 */
  T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_60S = 'T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_60S',
  /** T4折射率套餐-premium-progressive-photochromic-1.67高级 */
  T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_67A = 'T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_67A',
  /** T4折射率套餐-premium-progressive-photochromic-1.67标准 */
  T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_67S = 'T4_PREMIUM_PROGRESSIVE_PHOTOCHROMIC_1_67S',
  /** T4折射率套餐-premium-progressive-polarizedtint-1.56高级 */
  T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_56A = 'T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_56A',
  /** T4折射率套餐-premium-progressive-polarizedtint-1.56标准 */
  T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_56S = 'T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_56S',
  /** T4折射率套餐-premium-progressive-polarizedtint-1.60高级 */
  T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_60A = 'T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_60A',
  /** T4折射率套餐-premium-progressive-polarizedtint-1.60标准 */
  T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_60S = 'T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_60S',
  /** T4折射率套餐-premium-progressive-polarizedtint-1.67高级 */
  T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_67A = 'T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_67A',
  /** T4折射率套餐-premium-progressive-polarizedtint-1.67标准 */
  T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_67S = 'T4_PREMIUM_PROGRESSIVE_POLARIZEDTINT_1_67S',
  /** T4折射率套餐-premium-progressive-tint-1.56高级 */
  T4_PREMIUM_PROGRESSIVE_TINT_1_56A = 'T4_PREMIUM_PROGRESSIVE_TINT_1_56A',
  /** T4折射率套餐-premium-progressive-tint-1.56标准 */
  T4_PREMIUM_PROGRESSIVE_TINT_1_56S = 'T4_PREMIUM_PROGRESSIVE_TINT_1_56S',
  /** T4折射率套餐-premium-progressive-tint-1.60高级 */
  T4_PREMIUM_PROGRESSIVE_TINT_1_60A = 'T4_PREMIUM_PROGRESSIVE_TINT_1_60A',
  /** T4折射率套餐-premium-progressive-tint-1.60标准 */
  T4_PREMIUM_PROGRESSIVE_TINT_1_60S = 'T4_PREMIUM_PROGRESSIVE_TINT_1_60S',
  /** T4折射率套餐-premium-progressive-tint-1.67高级 */
  T4_PREMIUM_PROGRESSIVE_TINT_1_67A = 'T4_PREMIUM_PROGRESSIVE_TINT_1_67A',
  /** T4折射率套餐-premium-progressive-tint-1.67标准 */
  T4_PREMIUM_PROGRESSIVE_TINT_1_67S = 'T4_PREMIUM_PROGRESSIVE_TINT_1_67S',
  /** T4折射率套餐-premium-progressive-transphoto-1.50高级 */
  T4_PREMIUM_PROGRESSIVE_TRANSPHOTO_1_50A = 'T4_PREMIUM_PROGRESSIVE_TRANSPHOTO_1_50A',
  /** T4折射率套餐-premium-progressive-transphoto-1.50标准 */
  T4_PREMIUM_PROGRESSIVE_TRANSPHOTO_1_50S = 'T4_PREMIUM_PROGRESSIVE_TRANSPHOTO_1_50S',
  /** T4折射率套餐-premium-progressive-transphoto-1.60高级 */
  T4_PREMIUM_PROGRESSIVE_TRANSPHOTO_1_60A = 'T4_PREMIUM_PROGRESSIVE_TRANSPHOTO_1_60A',
  /** T4折射率套餐-premium-progressive-transphoto-1.60标准 */
  T4_PREMIUM_PROGRESSIVE_TRANSPHOTO_1_60S = 'T4_PREMIUM_PROGRESSIVE_TRANSPHOTO_1_60S',
  /** T4折射率套餐-progressive-blue-1.56高级 */
  T4_PROGRESSIVE_BLUE_BASIC_1_56A = 'T4_PROGRESSIVE_BLUE_BASIC_1_56A',
  /** T4折射率套餐-progressive-blue-1.56标准 */
  T4_PROGRESSIVE_BLUE_BASIC_1_56S = 'T4_PROGRESSIVE_BLUE_BASIC_1_56S',
  /** T4折射率套餐-progressive-blue-1.60高级 */
  T4_PROGRESSIVE_BLUE_BASIC_1_60A = 'T4_PROGRESSIVE_BLUE_BASIC_1_60A',
  /** T4折射率套餐-progressive-blue-1.60标准 */
  T4_PROGRESSIVE_BLUE_BASIC_1_60S = 'T4_PROGRESSIVE_BLUE_BASIC_1_60S',
  /** T4折射率套餐-progressive-blue-1.67高级 */
  T4_PROGRESSIVE_BLUE_BASIC_1_67A = 'T4_PROGRESSIVE_BLUE_BASIC_1_67A',
  /** T4折射率套餐-progressive-blue-1.67标准 */
  T4_PROGRESSIVE_BLUE_BASIC_1_67S = 'T4_PROGRESSIVE_BLUE_BASIC_1_67S',
  /** T4折射率套餐-progressive-clear-1.56高级 */
  T4_PROGRESSIVE_CLEAR_BASIC_1_56A = 'T4_PROGRESSIVE_CLEAR_BASIC_1_56A',
  /** T4折射率套餐-progressive-clear-1.56标准 */
  T4_PROGRESSIVE_CLEAR_BASIC_1_56S = 'T4_PROGRESSIVE_CLEAR_BASIC_1_56S',
  /** T4折射率套餐-progressive-clear-1.60高级 */
  T4_PROGRESSIVE_CLEAR_BASIC_1_60A = 'T4_PROGRESSIVE_CLEAR_BASIC_1_60A',
  /** T4折射率套餐-progressive-clear-1.60标准 */
  T4_PROGRESSIVE_CLEAR_BASIC_1_60S = 'T4_PROGRESSIVE_CLEAR_BASIC_1_60S',
  /** T4折射率套餐-progressive-clear-1.67高级 */
  T4_PROGRESSIVE_CLEAR_BASIC_1_67A = 'T4_PROGRESSIVE_CLEAR_BASIC_1_67A',
  /** T4折射率套餐-progressive-clear-1.67标准 */
  T4_PROGRESSIVE_CLEAR_BASIC_1_67S = 'T4_PROGRESSIVE_CLEAR_BASIC_1_67S',
  /** T4折射率套餐-progressive-photochromic-1.56高级 */
  T4_PROGRESSIVE_PHOTOCHROMIC_1_56A = 'T4_PROGRESSIVE_PHOTOCHROMIC_1_56A',
  /** T4折射率套餐-progressive-photochromic-1.56标准 */
  T4_PROGRESSIVE_PHOTOCHROMIC_1_56S = 'T4_PROGRESSIVE_PHOTOCHROMIC_1_56S',
  /** T4折射率套餐-progressive-photochromic-1.60高级 */
  T4_PROGRESSIVE_PHOTOCHROMIC_1_60A = 'T4_PROGRESSIVE_PHOTOCHROMIC_1_60A',
  /** T4折射率套餐-progressive-photochromic-1.60标准 */
  T4_PROGRESSIVE_PHOTOCHROMIC_1_60S = 'T4_PROGRESSIVE_PHOTOCHROMIC_1_60S',
  /** T4折射率套餐-progressive-photochromic-1.67高级 */
  T4_PROGRESSIVE_PHOTOCHROMIC_1_67A = 'T4_PROGRESSIVE_PHOTOCHROMIC_1_67A',
  /** T4折射率套餐-progressive-photochromic-1.67标准 */
  T4_PROGRESSIVE_PHOTOCHROMIC_1_67S = 'T4_PROGRESSIVE_PHOTOCHROMIC_1_67S',
  /** T4折射率套餐-progressive-polarizedtint-1.56高级 */
  T4_PROGRESSIVE_POLARIZEDTINT_1_56A = 'T4_PROGRESSIVE_POLARIZEDTINT_1_56A',
  /** T4折射率套餐-progressive-polarizedtint-1.56标准 */
  T4_PROGRESSIVE_POLARIZEDTINT_1_56S = 'T4_PROGRESSIVE_POLARIZEDTINT_1_56S',
  /** T4折射率套餐-progressive-polarizedtint-1.60高级 */
  T4_PROGRESSIVE_POLARIZEDTINT_1_60A = 'T4_PROGRESSIVE_POLARIZEDTINT_1_60A',
  /** T4折射率套餐-progressive-polarizedtint-1.60标准 */
  T4_PROGRESSIVE_POLARIZEDTINT_1_60S = 'T4_PROGRESSIVE_POLARIZEDTINT_1_60S',
  /** T4折射率套餐-progressive-polarizedtint-1.67高级 */
  T4_PROGRESSIVE_POLARIZEDTINT_1_67A = 'T4_PROGRESSIVE_POLARIZEDTINT_1_67A',
  /** T4折射率套餐-progressive-polarizedtint-1.67标准 */
  T4_PROGRESSIVE_POLARIZEDTINT_1_67S = 'T4_PROGRESSIVE_POLARIZEDTINT_1_67S',
  /** T4折射率套餐-progressive-tint-1.56高级 */
  T4_PROGRESSIVE_TINT_1_56A = 'T4_PROGRESSIVE_TINT_1_56A',
  /** T4折射率套餐-progressive-tint-1.56标准 */
  T4_PROGRESSIVE_TINT_1_56S = 'T4_PROGRESSIVE_TINT_1_56S',
  /** T4折射率套餐-progressive-tint-1.60高级 */
  T4_PROGRESSIVE_TINT_1_60A = 'T4_PROGRESSIVE_TINT_1_60A',
  /** T4折射率套餐-progressive-tint-1.60标准 */
  T4_PROGRESSIVE_TINT_1_60S = 'T4_PROGRESSIVE_TINT_1_60S',
  /** T4折射率套餐-progressive-tint-1.67高级 */
  T4_PROGRESSIVE_TINT_1_67A = 'T4_PROGRESSIVE_TINT_1_67A',
  /** T4折射率套餐-progressive-tint-1.67标准 */
  T4_PROGRESSIVE_TINT_1_67S = 'T4_PROGRESSIVE_TINT_1_67S',
  /** T4折射率套餐-progressive-transphoto-1.50高级 */
  T4_PROGRESSIVE_TRANSPHOTO_1_50A = 'T4_PROGRESSIVE_TRANSPHOTO_1_50A',
  /** T4折射率套餐-progressive-transphoto-1.50标准 */
  T4_PROGRESSIVE_TRANSPHOTO_1_50S = 'T4_PROGRESSIVE_TRANSPHOTO_1_50S',
  /** T4折射率套餐-progressive-transphoto-1.60高级 */
  T4_PROGRESSIVE_TRANSPHOTO_1_60A = 'T4_PROGRESSIVE_TRANSPHOTO_1_60A',
  /** T4折射率套餐-progressive-transphoto-1.60标准 */
  T4_PROGRESSIVE_TRANSPHOTO_1_60S = 'T4_PROGRESSIVE_TRANSPHOTO_1_60S',
  /** T4折射率套餐-single-blue-1.56高级 */
  T4_SINGLE_BLUE_BASIC_1_56A = 'T4_SINGLE_BLUE_BASIC_1_56A',
  /** T4折射率套餐-single-blue-1.56标准 */
  T4_SINGLE_BLUE_BASIC_1_56S = 'T4_SINGLE_BLUE_BASIC_1_56S',
  /** T4折射率套餐-single-blue-1.60高级 */
  T4_SINGLE_BLUE_BASIC_1_60A = 'T4_SINGLE_BLUE_BASIC_1_60A',
  /** T4折射率套餐-single-blue-1.60标准 */
  T4_SINGLE_BLUE_BASIC_1_60S = 'T4_SINGLE_BLUE_BASIC_1_60S',
  /** T4折射率套餐-single-blue-1.67高级 */
  T4_SINGLE_BLUE_BASIC_1_67A = 'T4_SINGLE_BLUE_BASIC_1_67A',
  /** T4折射率套餐-single-blue-1.67标准 */
  T4_SINGLE_BLUE_BASIC_1_67S = 'T4_SINGLE_BLUE_BASIC_1_67S',
  /** T4折射率套餐-single-blue-1.71高级 */
  T4_SINGLE_BLUE_BASIC_1_71A = 'T4_SINGLE_BLUE_BASIC_1_71A',
  /** T4折射率套餐-single-blue-1.71标准 */
  T4_SINGLE_BLUE_BASIC_1_71S = 'T4_SINGLE_BLUE_BASIC_1_71S',
  /** T4折射率套餐-single-clear-1.56高级 */
  T4_SINGLE_CLEAR_BASIC_1_56A = 'T4_SINGLE_CLEAR_BASIC_1_56A',
  /** T4折射率套餐-single-clear-1.56标准 */
  T4_SINGLE_CLEAR_BASIC_1_56S = 'T4_SINGLE_CLEAR_BASIC_1_56S',
  /** T4折射率套餐-single-clear-1.59高级 */
  T4_SINGLE_CLEAR_BASIC_1_59A = 'T4_SINGLE_CLEAR_BASIC_1_59A',
  /** T4折射率套餐-single-clear-1.59标准 */
  T4_SINGLE_CLEAR_BASIC_1_59S = 'T4_SINGLE_CLEAR_BASIC_1_59S',
  /** T4折射率套餐-single-clear-1.60高级 */
  T4_SINGLE_CLEAR_BASIC_1_60A = 'T4_SINGLE_CLEAR_BASIC_1_60A',
  /** T4折射率套餐-single-clear-1.60标准 */
  T4_SINGLE_CLEAR_BASIC_1_60S = 'T4_SINGLE_CLEAR_BASIC_1_60S',
  /** T4折射率套餐-single-clear-1.67高级 */
  T4_SINGLE_CLEAR_BASIC_1_67A = 'T4_SINGLE_CLEAR_BASIC_1_67A',
  /** T4折射率套餐-single-clear-1.67标准 */
  T4_SINGLE_CLEAR_BASIC_1_67S = 'T4_SINGLE_CLEAR_BASIC_1_67S',
  /** T4折射率套餐-single-clear-1.71高级 */
  T4_SINGLE_CLEAR_BASIC_1_71A = 'T4_SINGLE_CLEAR_BASIC_1_71A',
  /** T4折射率套餐-single-clear-1.71标准 */
  T4_SINGLE_CLEAR_BASIC_1_71S = 'T4_SINGLE_CLEAR_BASIC_1_71S',
  /** T4折射率套餐-single-clear-1.71高级 */
  T4_SINGLE_CLEAR_BASIC_1_74A = 'T4_SINGLE_CLEAR_BASIC_1_74A',
  /** T4折射率套餐-single-clear-1.71标准 */
  T4_SINGLE_CLEAR_BASIC_1_74S = 'T4_SINGLE_CLEAR_BASIC_1_74S',
  /** T4折射率套餐-single-gradient-1.56高级 */
  T4_SINGLE_GRADIENT_1_56A = 'T4_SINGLE_GRADIENT_1_56A',
  /** T4折射率套餐-single-gradient-1.56标准 */
  T4_SINGLE_GRADIENT_1_56S = 'T4_SINGLE_GRADIENT_1_56S',
  /** T4折射率套餐-single-gradient-1.60高级 */
  T4_SINGLE_GRADIENT_1_60A = 'T4_SINGLE_GRADIENT_1_60A',
  /** T4折射率套餐-single-gradient-1.60标准 */
  T4_SINGLE_GRADIENT_1_60S = 'T4_SINGLE_GRADIENT_1_60S',
  /** T4折射率套餐-single-gradient-1.67高级 */
  T4_SINGLE_GRADIENT_1_67A = 'T4_SINGLE_GRADIENT_1_67A',
  /** T4折射率套餐-single-gradient-1.67标准 */
  T4_SINGLE_GRADIENT_1_67S = 'T4_SINGLE_GRADIENT_1_67S',
  /** T4折射率套餐-single-mirrored-1.56高级 */
  T4_SINGLE_MIRRORED_1_56A = 'T4_SINGLE_MIRRORED_1_56A',
  /** T4折射率套餐-single-mirrored-1.56标准 */
  T4_SINGLE_MIRRORED_1_56S = 'T4_SINGLE_MIRRORED_1_56S',
  /** T4折射率套餐-single-mirrored-1.60高级 */
  T4_SINGLE_MIRRORED_1_60A = 'T4_SINGLE_MIRRORED_1_60A',
  /** T4折射率套餐-single-mirrored-1.60标准 */
  T4_SINGLE_MIRRORED_1_60S = 'T4_SINGLE_MIRRORED_1_60S',
  /** T4折射率套餐-single-mirrored-1.67高级 */
  T4_SINGLE_MIRRORED_1_67A = 'T4_SINGLE_MIRRORED_1_67A',
  /** T4折射率套餐-single-mirrored-1.67标准 */
  T4_SINGLE_MIRRORED_1_67S = 'T4_SINGLE_MIRRORED_1_67S',
  /** T4折射率套餐-single-photochromic-1.56高级 */
  T4_SINGLE_PHOTOCHROMIC_1_56A = 'T4_SINGLE_PHOTOCHROMIC_1_56A',
  /** T4折射率套餐-single-photochromic-1.56标准 */
  T4_SINGLE_PHOTOCHROMIC_1_56S = 'T4_SINGLE_PHOTOCHROMIC_1_56S',
  /** T4折射率套餐-single-photochromic-1.60高级 */
  T4_SINGLE_PHOTOCHROMIC_1_60A = 'T4_SINGLE_PHOTOCHROMIC_1_60A',
  /** T4折射率套餐-single-photochromic-1.60标准 */
  T4_SINGLE_PHOTOCHROMIC_1_60S = 'T4_SINGLE_PHOTOCHROMIC_1_60S',
  /** T4折射率套餐-single-photochromic-1.67高级 */
  T4_SINGLE_PHOTOCHROMIC_1_67A = 'T4_SINGLE_PHOTOCHROMIC_1_67A',
  /** T4折射率套餐-single-photochromic-1.67标准 */
  T4_SINGLE_PHOTOCHROMIC_1_67S = 'T4_SINGLE_PHOTOCHROMIC_1_67S',
  /** T4折射率套餐-single-photochromic-1.71高级 */
  T4_SINGLE_PHOTOCHROMIC_1_71A = 'T4_SINGLE_PHOTOCHROMIC_1_71A',
  /** T4折射率套餐-single-photochromic-1.71标准 */
  T4_SINGLE_PHOTOCHROMIC_1_71S = 'T4_SINGLE_PHOTOCHROMIC_1_71S',
  /** T4折射率套餐-single-polarizedmirrored-1.56高级 */
  T4_SINGLE_POLARIZEDMIRRORED_1_56A = 'T4_SINGLE_POLARIZEDMIRRORED_1_56A',
  /** T4折射率套餐-single-polarizedmirrored-1.56标准 */
  T4_SINGLE_POLARIZEDMIRRORED_1_56S = 'T4_SINGLE_POLARIZEDMIRRORED_1_56S',
  /** T4折射率套餐-single-polarizedmirrored-1.60高级 */
  T4_SINGLE_POLARIZEDMIRRORED_1_60A = 'T4_SINGLE_POLARIZEDMIRRORED_1_60A',
  /** T4折射率套餐-single-polarizedmirrored-1.60标准 */
  T4_SINGLE_POLARIZEDMIRRORED_1_60S = 'T4_SINGLE_POLARIZEDMIRRORED_1_60S',
  /** T4折射率套餐-single-polarizedmirrored-1.67高级 */
  T4_SINGLE_POLARIZEDMIRRORED_1_67A = 'T4_SINGLE_POLARIZEDMIRRORED_1_67A',
  /** T4折射率套餐-single-polarizedmirrored-1.67标准 */
  T4_SINGLE_POLARIZEDMIRRORED_1_67S = 'T4_SINGLE_POLARIZEDMIRRORED_1_67S',
  /** T4折射率套餐-single-polarizedtint-1.56高级 */
  T4_SINGLE_POLARIZEDTINT_1_56A = 'T4_SINGLE_POLARIZEDTINT_1_56A',
  /** T4折射率套餐-single-polarizedtint-1.56标准 */
  T4_SINGLE_POLARIZEDTINT_1_56S = 'T4_SINGLE_POLARIZEDTINT_1_56S',
  /** T4折射率套餐-single-polarizedtint-1.60高级 */
  T4_SINGLE_POLARIZEDTINT_1_60A = 'T4_SINGLE_POLARIZEDTINT_1_60A',
  /** T4折射率套餐-single-polarizedtint-1.60标准 */
  T4_SINGLE_POLARIZEDTINT_1_60S = 'T4_SINGLE_POLARIZEDTINT_1_60S',
  /** T4折射率套餐-single-polarizedtint-1.67高级 */
  T4_SINGLE_POLARIZEDTINT_1_67A = 'T4_SINGLE_POLARIZEDTINT_1_67A',
  /** T4折射率套餐-single-polarizedtint-1.67标准 */
  T4_SINGLE_POLARIZEDTINT_1_67S = 'T4_SINGLE_POLARIZEDTINT_1_67S',
  /** T4折射率套餐-single-tint-1.56高级 */
  T4_SINGLE_TINT_1_56A = 'T4_SINGLE_TINT_1_56A',
  /** T4折射率套餐-single-tint-1.56标准 */
  T4_SINGLE_TINT_1_56S = 'T4_SINGLE_TINT_1_56S',
  /** T4折射率套餐-single-tint-1.60高级 */
  T4_SINGLE_TINT_1_60A = 'T4_SINGLE_TINT_1_60A',
  /** T4折射率套餐-single-tint-1.60标准 */
  T4_SINGLE_TINT_1_60S = 'T4_SINGLE_TINT_1_60S',
  /** T4折射率套餐-single-tint-1.67高级 */
  T4_SINGLE_TINT_1_67A = 'T4_SINGLE_TINT_1_67A',
  /** T4折射率套餐-single-tint-1.67标准 */
  T4_SINGLE_TINT_1_67S = 'T4_SINGLE_TINT_1_67S',
  /** T4折射率套餐-single-transphoto-1.50高级 */
  T4_SINGLE_TRANSPHOTO_1_50A = 'T4_SINGLE_TRANSPHOTO_1_50A',
  /** T4折射率套餐-single-transphoto-1.50标准 */
  T4_SINGLE_TRANSPHOTO_1_50S = 'T4_SINGLE_TRANSPHOTO_1_50S',
  /** T4折射率套餐-single-transphoto-1.60高级 */
  T4_SINGLE_TRANSPHOTO_1_60A = 'T4_SINGLE_TRANSPHOTO_1_60A',
  /** T4折射率套餐-single-transphoto-1.60标准 */
  T4_SINGLE_TRANSPHOTO_1_60S = 'T4_SINGLE_TRANSPHOTO_1_60S',
}
export declare type LensProcessOptionList = PaginatedList & {
  __typename?: 'LensProcessOptionList';
  items: Array<LensProcessOption>;
  totalItems: Scalars['Int'];
};
export declare type LensProcessOptionListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<LensProcessOptionFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<LensProcessOptionSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};
export declare type LensProcessOptionParent = {
  __typename?: 'LensProcessOptionParent';
  id: Scalars['ID'];
};
export declare type LensProcessOptionPreview = {
  __typename?: 'LensProcessOptionPreview';
  isPhotochromic?: Maybe<Scalars['Boolean']>;
  opacity?: Maybe<Scalars['Float']>;
  visualMask?: Maybe<Scalars['String']>;
};
export declare type LensProcessOptionSortParameter = {
  adjustPrice?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayOrder?: InputMaybe<SortOrder>;
  feature?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  shortDesc?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  upgradeText?: InputMaybe<SortOrder>;
};
export declare type LensProcessOptionTranslation = Node & {
  __typename?: 'LensProcessOptionTranslation';
  /** 功能特点标识, Up to 20% thinner */
  feature?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** 当前选项的详细注解, 详细标注当前选项包含的内容 */
  introduction?: Maybe<Array<Scalars['String']>>;
  /** 当前语言 */
  languageCode: LanguageCode;
  /** 当前选项的名称 */
  name: Scalars['String'];
  /** 当前选项的短描述 */
  shortDesc: Scalars['String'];
  /** 升级选项名字, 可以在name基础上进行额外包装 */
  upgradeText?: Maybe<Scalars['String']>;
};
/** 针对专题集合页: 镜片流程中标识专题集合页面的唯一KEY, 如果特定专题页需要高光规则, 需要指定如下的1个或者多个KEY */
export declare enum LensProcessProductCollectionKeys {
  /** 专题页: T3_BLUE作为默认高光选项 */
  TOPIC_PAGE_BLUE_LIGHT = 'TOPIC_PAGE_BLUE_LIGHT',
  /** 专题页: T1_NON_PRESCRIPTION作为默认高光选项 */
  TOPIC_PAGE_NON_PRESCRIPTION = 'TOPIC_PAGE_NON_PRESCRIPTION',
  /** 专题页: T3_LIGHT作为默认高光选项 */
  TOPIC_PAGE_PHOTOCHROMIC = 'TOPIC_PAGE_PHOTOCHROMIC',
  /** 专题页: T1_MULTIFOCAL作为默认高光选项 */
  TOPIC_PAGE_PROGRESSIVE = 'TOPIC_PAGE_PROGRESSIVE',
  /** 专题页: T1_READING作为默认高光选项 */
  TOPIC_PAGE_READING = 'TOPIC_PAGE_READING',
}
export declare type LensProcessStepInputs = {
  /** T0镜架的商品基础信息 */
  T0: LensProcessT0Inputs;
  /** T1用途大类/用途子类途, 用户的选择数据输入 */
  T1?: InputMaybe<LensProcessT1Inputs>;
  /** T2填处方, 用户的输入数据输入 */
  T2?: InputMaybe<LensProcessT2Inputs>;
  /** T3功能大类/功能二级子类/功能三级子类 */
  T3?: InputMaybe<LensProcessT3Inputs>;
  /** T4折射率及膜层/自定义 */
  T4?: InputMaybe<LensProcessT4Inputs>;
};
export declare type LensProcessStepQueryResult = {
  __typename?: 'LensProcessStepQueryResult';
  /** Step1下面的流程选项 */
  T1?: Maybe<Array<LensProcessOption>>;
  /** Step2下面的流程选项 */
  T2?: Maybe<Array<LensProcessOption>>;
  /** Step3下面的流程选项 */
  T3?: Maybe<Array<LensProcessOption>>;
  /** Step4下面的流程选项 */
  T4?: Maybe<Array<LensProcessOption>>;
};
export declare type LensProcessT0Inputs = {
  /** 产品来源的那一个分类或者专题页的集合ID */
  collectionId?: InputMaybe<Scalars['ID']>;
  /** 镜架产品ID */
  productId: Scalars['ID'];
  /** 镜架产品变量ID */
  productVariantId: Scalars['ID'];
};
export declare type LensProcessT1Inputs = {
  /** 用户选择的用途选项模块对应的ID */
  lensProcessOptionId: Scalars['ID'];
  /** 用户选择的用户选项模块对应的选项Key */
  lensProcessOptionKey?: InputMaybe<LensProcessOptionKeys>;
};
export declare type LensProcessT2Inputs = {
  /** 左右眼视力: 老花, Distance 不展示 */
  add?: InputMaybe<Scalars['String']>;
  /** 用户年龄 */
  age?: InputMaybe<Scalars['String']>;
  /** 针对游泳镜, 项链镜, 用户可以只输入度数即可加入购物车. */
  directDegrees?: InputMaybe<Scalars['String']>;
  /** 右眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  odAxis?: InputMaybe<Scalars['String']>;
  /** 右眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  odCyl?: InputMaybe<Scalars['String']>;
  /** 右眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  odSph?: InputMaybe<Scalars['String']>;
  /** 左眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  osAxis?: InputMaybe<Scalars['String']>;
  /** 左眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  osCyl?: InputMaybe<Scalars['String']>;
  /** 左眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  osSph?: InputMaybe<Scalars['String']>;
  /** 双眼PD,单位为1 */
  pd?: InputMaybe<Scalars['String']>;
  /** 左眼瞳距, 单眼PD, 单位为0.5 */
  pdLeft?: InputMaybe<Scalars['String']>;
  /** 右眼瞳距, 单眼PD, 单位为0.5 */
  pdRight?: InputMaybe<Scalars['String']>;
  /** 棱镜, 标准处方可选值 */
  prism?: InputMaybe<PrismItemInput>;
  /** 当针对老花的时候,可以允许用户直接选择一个度数 */
  reading?: InputMaybe<Scalars['String']>;
  /** 处方的备注信息 */
  rxComments?: InputMaybe<Scalars['String']>;
  /** 处方类型, 老花处方/标准处方 */
  rxType: RxType;
};
export declare type LensProcessT2UserActionData = {
  __typename?: 'LensProcessT2UserActionData';
  /** 当前action项的名称, 如加钱, 当成唯一KEY来使用 */
  actionItemKey: Scalars['String'];
  /** 选择当前action行为的价格调整 */
  adjustPrice: Scalars['Int'];
  /** 当前action项的名称, 如加钱项, 多国语言的翻译名称, 会显示到加价理由上. 有的选项不需要消息提示. */
  i18nName?: Maybe<Scalars['String']>;
  /** 当前action 配置项目配置变量, 比如专题页面URL */
  variables: UserActionOptionItemsVariablesData;
};
export declare type LensProcessT2UserActionInput = {
  /** 当前action项的名称, 如加钱, 当成唯一KEY来使用 */
  actionItemKey: Scalars['String'];
  /** 选择当前action行为的价格调整 */
  adjustPrice: Scalars['Int'];
  /** 当前action项的名称, 如加钱项, 多国语言的翻译名称, 会显示到加价理由上. 有的选项不需要消息提示. */
  i18nName?: InputMaybe<Scalars['String']>;
  /** 当前action 配置项目配置变量, 比如专题页面URL */
  variables: UserActionOptionItemsVariablesInput;
};
export declare type LensProcessT2UserInputtedRxData = {
  __typename?: 'LensProcessT2UserInputtedRxData';
  /** 左右眼视力: 老花, Distance 不展示 */
  add?: Maybe<Scalars['String']>;
  /** 用户年龄 */
  age?: Maybe<Scalars['String']>;
  /** 针对游泳镜, 项链镜, 用户可以只输入度数即可加入购物车. */
  directDegrees?: Maybe<Scalars['String']>;
  /** 右眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  odAxis?: Maybe<Scalars['String']>;
  /** 右眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  odCyl?: Maybe<Scalars['String']>;
  /** 右眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  odSph?: Maybe<Scalars['String']>;
  /** 左眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  osAxis?: Maybe<Scalars['String']>;
  /** 左眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  osCyl?: Maybe<Scalars['String']>;
  /** 左眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  osSph?: Maybe<Scalars['String']>;
  /** 双眼PD,单位为1 */
  pd?: Maybe<Scalars['String']>;
  /** 左眼瞳距, 单眼PD, 单位为0.5 */
  pdLeft?: Maybe<Scalars['String']>;
  /** 右眼瞳距, 单眼PD, 单位为0.5 */
  pdRight?: Maybe<Scalars['String']>;
  /** 棱镜, 标准处方可选值 */
  prism?: Maybe<PrismItem>;
  /** 当针对老花的时候,可以允许用户直接选择一个度数 */
  reading?: Maybe<Scalars['String']>;
  /** 处方的备注信息 */
  rxComments?: Maybe<Scalars['String']>;
  /** 处方类型, 老花处方/标准处方 */
  rxType: RxType;
};
export declare type LensProcessT3Inputs = {
  /** 用户选择的用途选项模块对应的ID */
  lensProcessOptionId: Scalars['ID'];
  /** 用户选择的用户选项模块对应的选项Key */
  lensProcessOptionKey?: InputMaybe<LensProcessOptionKeys>;
};
export declare type LensProcessT4Inputs = {
  /** 用户选择的用途选项模块对应的ID */
  lensProcessOptionId: Scalars['ID'];
  /** 用户选择的用户选项模块对应的选项Key */
  lensProcessOptionKey?: InputMaybe<LensProcessOptionKeys>;
};
export declare type LensProcessTemplate = Node & {
  __typename?: 'LensProcessTemplate';
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};
export declare type LensProcessTemplateList = PaginatedList & {
  __typename?: 'LensProcessTemplateList';
  items: Array<LensProcessTemplate>;
  totalItems: Scalars['Int'];
};
/** 镜片流程步骤枚举T1...T4, PREVIEW */
export declare enum LensStepGroups {
  /** 最后一步, 预览, 确认页 */
  PREVIEW = 'PREVIEW',
  /** 上下文步骤, 当前镜片步骤, 前置信息 */
  T0 = 'T0',
  /** 用途大类/用途子类 */
  T1 = 'T1',
  /** 填处方模块 */
  T2 = 'T2',
  /** 功能大类/功能二级子类/功能三级子类 */
  T3 = 'T3',
  /** 折射率及膜层/自定义 */
  T4 = 'T4',
}
/** 查询并验证处方配置项输入参数 */
export declare type ListAndValidateRxConfigsInput = {
  /** T0镜架的商品基础信息 */
  T0: LensProcessT0Inputs;
  /** T1用途大类/用途子类途, 用户的选择数据输入 */
  T1?: InputMaybe<LensProcessT1Inputs>;
  /** T2填处方, 用户的输入数据输入 */
  T2?: InputMaybe<LensProcessT2Inputs>;
  /** 当前接口调用模式, 可选, 用来区别调用是点击了save 按钮还是其他 */
  eventType?: InputMaybe<ListAndValidateRxEventType>;
};
export declare enum ListAndValidateRxEventType {
  /** 当前处方选项onChange */
  ON_RX_ITEM_CHANGE = 'ON_RX_ITEM_CHANGE',
  /** 保存整个处方onSave */
  ON_RX_SAVE_VERIFICATION = 'ON_RX_SAVE_VERIFICATION',
}
export declare type LocaleStringCustomFieldConfig = CustomField & {
  __typename?: 'LocaleStringCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  length?: Maybe<Scalars['Int']>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  pattern?: Maybe<Scalars['String']>;
  readonly?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};
export declare type LocalizedString = {
  __typename?: 'LocalizedString';
  languageCode: LanguageCode;
  value: Scalars['String'];
};
export declare enum LogicalOperator {
  AND = 'AND',
  OR = 'OR',
}
/** Returned when attempting to register or verify a customer account without a password, when one is required. */
export declare type MissingPasswordError = ErrorResult & {
  __typename?: 'MissingPasswordError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};
export declare type Mutation = {
  __typename?: 'Mutation';
  /** Adds an item to the order. If custom fields are defined on the OrderLine entity, a third argument 'customFields' will be available. */
  addItemToOrder: UpdateOrderItemsResult;
  /** Add a Payment to the Order */
  addPaymentToOrder: AddPaymentToOrderResult;
  addSubscriptionEmail: Subscription;
  addSubscriptionPhone: Subscription;
  /** Adjusts an OrderLine. If custom fields are defined on the OrderLine entity, a third argument 'customFields' of type `OrderLineCustomFieldsInput` will be available. */
  adjustOrderLine: UpdateOrderItemsResult;
  /** Applies the given coupon code to the active Order */
  applyCouponCode: ApplyCouponCodeResult;
  /** 申请特定活动的优惠码, 返回申请的优惠券信息 */
  applyForCouponCode?: Maybe<CampaignCoupon>;
  /** Authenticates the user using a named authentication strategy */
  authenticate: AuthenticationResult;
  /** Create a new Customer Address */
  createCustomerAddress: Address;
  /** Create a new invoice */
  createInvoice?: Maybe<Invoice>;
  /** Create a new ProductQa */
  createProductQa: ProductQa;
  createProductReview?: Maybe<ProductReview>;
  createTicket?: Maybe<Ticket>;
  /** Create a new user tryon face model */
  createTryonFaceModels: Array<TryonFaceModel>;
  /** Delete an existing Address */
  deleteCustomerAddress: Success;
  /** Delete own rx item */
  deleteRx: DeletionResponse;
  /** Delete an existing user tryon face model */
  deleteTryonFaceModel: DeletionResponse;
  /** Authenticates the user using the native authentication strategy. This mutation is an alias for `authenticate({ native: { ... }})` */
  login: NativeAuthenticationResult;
  /** End the current authenticated session */
  logout: Success;
  /** Regenerate and send a verification token for a new Customer registration. Only applicable if `authOptions.requireVerification` is set to true. */
  refreshCustomerVerification: RefreshCustomerVerificationResult;
  /**
   * Register a Customer account with the given credentials. There are three possible registration flows:
   *
   * _If `authOptions.requireVerification` is set to `true`:_
   *
   * 1. **The Customer is registered _with_ a password**. A verificationToken will be created (and typically emailed to the Customer). That
   *    verificationToken would then be passed to the `verifyCustomerAccount` mutation _without_ a password. The Customer is then
   *    verified and authenticated in one step.
   * 2. **The Customer is registered _without_ a password**. A verificationToken will be created (and typically emailed to the Customer). That
   *    verificationToken would then be passed to the `verifyCustomerAccount` mutation _with_ the chosen password of the Customer. The Customer is then
   *    verified and authenticated in one step.
   *
   * _If `authOptions.requireVerification` is set to `false`:_
   *
   * 3. The Customer _must_ be registered _with_ a password. No further action is needed - the Customer is able to authenticate immediately.
   */
  registerCustomerAccount: RegisterCustomerAccountResult;
  /** Remove all OrderLine from the Order */
  removeAllOrderLines: RemoveOrderItemsResult;
  /** Removes the given coupon code from the active Order */
  removeCouponCode?: Maybe<Order>;
  /** Remove an OrderLine from the Order */
  removeOrderLine: RemoveOrderItemsResult;
  /** Requests a password reset email to be sent */
  requestPasswordReset?: Maybe<RequestPasswordResetResult>;
  /**
   * Request to update the emailAddress of the active Customer. If `authOptions.requireVerification` is enabled
   * (as is the default), then the `identifierChangeToken` will be assigned to the current User and
   * a IdentifierChangeRequestEvent will be raised. This can then be used e.g. by the EmailPlugin to email
   * that verification token to the Customer, which is then used to verify the change of email address.
   */
  requestUpdateCustomerEmailAddress: RequestUpdateCustomerEmailAddressResult;
  /** Resets a Customer's password based on the provided token */
  resetPassword: ResetPasswordResult;
  /** Create a new Rx */
  saveRx: Rx;
  /** 保存当前STEP的数据, 并返回激活订单的详细信息 */
  saveUserProcessConfigStep: UpdateOrderItemsResult;
  /** Set the Customer for the Order. Required only if the Customer is not currently logged in */
  setCustomerForOrder: SetCustomerForOrderResult;
  /** Sets the billing address for this order */
  setOrderBillingAddress: ActiveOrderResult;
  /** Allows any custom fields to be set for the active order */
  setOrderCustomFields: ActiveOrderResult;
  /** Sets the shipping address for this order */
  setOrderShippingAddress: ActiveOrderResult;
  /** Sets the shipping method by id, which can be obtained with the `eligibleShippingMethods` query */
  setOrderShippingMethod: SetOrderShippingMethodResult;
  settlePayment: Scalars['Boolean'];
  toggleFavorite?: Maybe<Favorite>;
  /** Transitions an Order to a new state. Valid next states can be found by querying `nextOrderStates` */
  transitionOrderToState?: Maybe<TransitionOrderToStateResult>;
  updateCrossSellingProducts: Scalars['Boolean'];
  /** Update an existing Customer */
  updateCustomer: Customer;
  /** Update an existing Address */
  updateCustomerAddress: Address;
  /**
   * Confirm the update of the emailAddress with the provided token, which has been generated by the
   * `requestUpdateCustomerEmailAddress` mutation.
   */
  updateCustomerEmailAddress: UpdateCustomerEmailAddressResult;
  /** Update the password of the active Customer */
  updateCustomerPassword: UpdateCustomerPasswordResult;
  /** Create a new help center helpful yes/no */
  updateHelpCenterHelpful: HelpCenter;
  /** Create a new product qa helpful yes/no */
  updateProductQaHelpful: ProductQa;
  updateProductReview?: Maybe<ProductReview>;
  /** Update an existing Rx */
  updateRx: Rx;
  /** Create a new Topic helpful yes/no */
  updateTopicHelpful: Topic;
  updateUpSellingProducts: Scalars['Boolean'];
  /**
   * Verify a Customer email address with the token sent to that address. Only applicable if `authOptions.requireVerification` is set to true.
   *
   * If the Customer was not registered with a password in the `registerCustomerAccount` mutation, the password _must_ be
   * provided here.
   */
  verifyCustomerAccount: VerifyCustomerAccountResult;
  voteOnReview: ProductReview;
};
export declare type MutationAddItemToOrderArgs = {
  customFields?: InputMaybe<OrderLineCustomFieldsInput>;
  productVariantId: Scalars['ID'];
  quantity: Scalars['Int'];
};
export declare type MutationAddPaymentToOrderArgs = {
  input: PaymentInput;
};
export declare type MutationAddSubscriptionEmailArgs = {
  input: EmailAddInput;
};
export declare type MutationAddSubscriptionPhoneArgs = {
  input: PhoneAddInput;
};
export declare type MutationAdjustOrderLineArgs = {
  customFields?: InputMaybe<OrderLineCustomFieldsInput>;
  orderLineId: Scalars['ID'];
  quantity: Scalars['Int'];
};
export declare type MutationApplyCouponCodeArgs = {
  couponCode: Scalars['String'];
};
export declare type MutationApplyForCouponCodeArgs = {
  code: Scalars['String'];
  emailAddress: Scalars['String'];
};
export declare type MutationAuthenticateArgs = {
  input: AuthenticationInput;
  rememberMe?: InputMaybe<Scalars['Boolean']>;
};
export declare type MutationCreateCustomerAddressArgs = {
  input: CreateAddressInput;
};
export declare type MutationCreateInvoiceArgs = {
  input: CreateInvoiceInput;
};
export declare type MutationCreateProductQaArgs = {
  input: CreateProductQaInput;
};
export declare type MutationCreateProductReviewArgs = {
  input: CreateProductReviewInput;
};
export declare type MutationCreateTicketArgs = {
  input: CreateTicketInput;
};
export declare type MutationCreateTryonFaceModelsArgs = {
  input: Array<CreateTryonFaceModelInput>;
};
export declare type MutationDeleteCustomerAddressArgs = {
  id: Scalars['ID'];
};
export declare type MutationDeleteRxArgs = {
  id: Scalars['ID'];
};
export declare type MutationDeleteTryonFaceModelArgs = {
  id: Scalars['ID'];
};
export declare type MutationLoginArgs = {
  password: Scalars['String'];
  rememberMe?: InputMaybe<Scalars['Boolean']>;
  username: Scalars['String'];
};
export declare type MutationRefreshCustomerVerificationArgs = {
  emailAddress: Scalars['String'];
};
export declare type MutationRegisterCustomerAccountArgs = {
  input: RegisterCustomerInput;
};
export declare type MutationRemoveCouponCodeArgs = {
  couponCode: Scalars['String'];
};
export declare type MutationRemoveOrderLineArgs = {
  orderLineId: Scalars['ID'];
};
export declare type MutationRequestPasswordResetArgs = {
  emailAddress: Scalars['String'];
};
export declare type MutationRequestUpdateCustomerEmailAddressArgs = {
  newEmailAddress: Scalars['String'];
  password: Scalars['String'];
};
export declare type MutationResetPasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};
export declare type MutationSaveRxArgs = {
  input: CreateRxInput;
};
export declare type MutationSaveUserProcessConfigStepArgs = {
  input: SaveUserProcessConfigStepInput;
};
export declare type MutationSetCustomerForOrderArgs = {
  input: CreateCustomerInput;
};
export declare type MutationSetOrderBillingAddressArgs = {
  input: CreateAddressInput;
};
export declare type MutationSetOrderCustomFieldsArgs = {
  input: UpdateOrderInput;
};
export declare type MutationSetOrderShippingAddressArgs = {
  input: CreateAddressInput;
};
export declare type MutationSetOrderShippingMethodArgs = {
  shippingMethodId: Scalars['ID'];
};
export declare type MutationSettlePaymentArgs = {
  input: SettlePaymentInput;
};
export declare type MutationToggleFavoriteArgs = {
  productVariantId: Scalars['ID'];
};
export declare type MutationTransitionOrderToStateArgs = {
  state: Scalars['String'];
};
export declare type MutationUpdateCrossSellingProductsArgs = {
  productId: Scalars['ID'];
  productIds: Array<Scalars['ID']>;
};
export declare type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};
export declare type MutationUpdateCustomerAddressArgs = {
  input: UpdateAddressInput;
};
export declare type MutationUpdateCustomerEmailAddressArgs = {
  token: Scalars['String'];
};
export declare type MutationUpdateCustomerPasswordArgs = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};
export declare type MutationUpdateHelpCenterHelpfulArgs = {
  input: UpdateHelpCenterHelpfulInput;
};
export declare type MutationUpdateProductQaHelpfulArgs = {
  input: UpdateProductQaHelpfulInput;
};
export declare type MutationUpdateProductReviewArgs = {
  input: UpdateProductReviewInput;
};
export declare type MutationUpdateRxArgs = {
  input: UpdateRxInput;
};
export declare type MutationUpdateTopicHelpfulArgs = {
  input: UpdateTopicHelpfulInput;
};
export declare type MutationUpdateUpSellingProductsArgs = {
  productId: Scalars['ID'];
  productIds: Array<Scalars['ID']>;
};
export declare type MutationVerifyCustomerAccountArgs = {
  password?: InputMaybe<Scalars['String']>;
  token: Scalars['String'];
};
export declare type MutationVoteOnReviewArgs = {
  id: Scalars['ID'];
  vote: Scalars['Boolean'];
};
export declare type NativeAuthInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};
/** Returned when attempting an operation that relies on the NativeAuthStrategy, if that strategy is not configured. */
export declare type NativeAuthStrategyError = ErrorResult & {
  __typename?: 'NativeAuthStrategyError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};
export declare type NativeAuthenticationResult =
  | CurrentUser
  | InvalidCredentialsError
  | NativeAuthStrategyError
  | NotVerifiedError;
/** Returned when attempting to set a negative OrderLine quantity. */
export declare type NegativeQuantityError = ErrorResult & {
  __typename?: 'NegativeQuantityError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};
/**
 * Returned when invoking a mutation which depends on there being an active Order on the
 * current session.
 */
export declare type NoActiveOrderError = ErrorResult & {
  __typename?: 'NoActiveOrderError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};
export declare type Node = {
  id: Scalars['ID'];
};
export declare type NormalizedRx = {
  __typename?: 'NormalizedRx';
  /** 左右眼视力: 老花, Distance 不展示 */
  add?: Maybe<Scalars['String']>;
  /** 用户年龄 */
  age?: Maybe<Scalars['String']>;
  /** 针对游泳镜, 项链镜, 用户可以只输入度数即可加入购物车. */
  directDegrees?: Maybe<Scalars['String']>;
  /** 是否为默认处方 */
  isDefault?: Maybe<Scalars['Boolean']>;
  /** 右眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  odAxis?: Maybe<Scalars['String']>;
  /** 右眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  odCyl?: Maybe<Scalars['String']>;
  /** 右眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  odSph?: Maybe<Scalars['String']>;
  /** 左眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  osAxis?: Maybe<Scalars['String']>;
  /** 左眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  osCyl?: Maybe<Scalars['String']>;
  /** 左眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  osSph?: Maybe<Scalars['String']>;
  /** 双眼PD,单位为1 */
  pd?: Maybe<Scalars['String']>;
  /** 左眼瞳距, 单眼PD, 单位为0.5 */
  pdLeft?: Maybe<Scalars['String']>;
  /** 右眼瞳距, 单眼PD, 单位为0.5 */
  pdRight?: Maybe<Scalars['String']>;
  /** 棱镜, 标准处方可选值 */
  prism?: Maybe<PrismItem>;
  /** 当针对老花的时候,可以允许用户直接选择一个度数 */
  reading?: Maybe<Scalars['String']>;
  /** 处方的备注信息 */
  rxComments?: Maybe<Scalars['String']>;
  /** 处方类型, 老花处方/标准处方 */
  rxType: RxType;
};
export declare type NormalizedRxInput = {
  /** 左右眼视力: 老花, Distance 不展示 */
  add?: InputMaybe<Scalars['String']>;
  /** 用户年龄 */
  age?: InputMaybe<Scalars['String']>;
  /** 针对游泳镜, 项链镜, 用户可以只输入度数即可加入购物车. */
  directDegrees?: InputMaybe<Scalars['String']>;
  /** 是否标记为默认处方 */
  isDefault?: InputMaybe<Scalars['Boolean']>;
  /** 右眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  odAxis?: InputMaybe<Scalars['String']>;
  /** 右眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  odCyl?: InputMaybe<Scalars['String']>;
  /** 右眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  odSph?: InputMaybe<Scalars['String']>;
  /** 左眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  osAxis?: InputMaybe<Scalars['String']>;
  /** 左眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  osCyl?: InputMaybe<Scalars['String']>;
  /** 左眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  osSph?: InputMaybe<Scalars['String']>;
  /** 双眼PD,单位为1 */
  pd?: InputMaybe<Scalars['String']>;
  /** 左眼瞳距, 单眼PD, 单位为0.5 */
  pdLeft?: InputMaybe<Scalars['String']>;
  /** 右眼瞳距, 单眼PD, 单位为0.5 */
  pdRight?: InputMaybe<Scalars['String']>;
  /** 棱镜, 标准处方可选值 */
  prism?: InputMaybe<PrismItemInput>;
  /** 当针对老花的时候,可以允许用户直接选择一个度数, 用户也可以切换到标准处方自定义. */
  reading?: InputMaybe<Scalars['String']>;
  /** 处方类型, 老花处方/标准处方 */
  rxType: RxType;
};
/**
 * Returned if `authOptions.requireVerification` is set to `true` (which is the default)
 * and an unverified user attempts to authenticate.
 */
export declare type NotVerifiedError = ErrorResult & {
  __typename?: 'NotVerifiedError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};
/** Operators for filtering on a list of Number fields */
export declare type NumberListOperators = {
  inList: Scalars['Float'];
};
/** Operators for filtering on a Int or Float field */
export declare type NumberOperators = {
  between?: InputMaybe<NumberRange>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
};
export declare type NumberRange = {
  end: Scalars['Float'];
  start: Scalars['Float'];
};
export declare type Order = Node & {
  __typename?: 'Order';
  /** An order is active as long as the payment process has not been completed */
  active: Scalars['Boolean'];
  /** 当前激活订单可用的优惠券列表 */
  availableCoupons: Array<CampaignCoupon>;
  billingAddress?: Maybe<OrderAddress>;
  /** A unique code for the Order */
  code: Scalars['String'];
  /** An array of all coupon codes applied to the Order */
  couponCodes: Array<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  currencyCode: CurrencyCode;
  customFields?: Maybe<OrderCustomFields>;
  customer?: Maybe<Customer>;
  discounts: Array<Discount>;
  fulfillments?: Maybe<Array<Fulfillment>>;
  history: HistoryEntryList;
  id: Scalars['ID'];
  /** Use this in your Storefront to show in order page if user order */
  invoice?: Maybe<Invoice>;
  lines: Array<OrderLine>;
  /**
   * The date & time that the Order was placed, i.e. the Customer
   * completed the checkout and the Order is no longer "active"
   */
  orderPlacedAt?: Maybe<Scalars['DateTime']>;
  payments?: Maybe<Array<Payment>>;
  /** Promotions applied to the order. Only gets populated after the payment process has completed. */
  promotions: Array<Promotion>;
  shipping: Scalars['Int'];
  shippingAddress?: Maybe<OrderAddress>;
  shippingLines: Array<ShippingLine>;
  shippingWithTax: Scalars['Int'];
  state: Scalars['String'];
  /**
   * The subTotal is the total of all OrderLines in the Order. This figure also includes any Order-level
   * discounts which have been prorated (proportionally distributed) amongst the OrderItems.
   * To get a total of all OrderLines which does not account for prorated discounts, use the
   * sum of `OrderLine.discountedLinePrice` values.
   */
  subTotal: Scalars['Int'];
  /** Same as subTotal, but inclusive of tax */
  subTotalWithTax: Scalars['Int'];
  /**
   * Surcharges are arbitrary modifications to the Order total which are neither
   * ProductVariants nor discounts resulting from applied Promotions. For example,
   * one-off discounts based on customer interaction, or surcharges based on payment
   * methods.
   */
  surcharges: Array<Surcharge>;
  /** A summary of the taxes being applied to this Order */
  taxSummary: Array<OrderTaxSummary>;
  /** Equal to subTotal plus shipping */
  total: Scalars['Int'];
  totalQuantity: Scalars['Int'];
  /** The final payable amount. Equal to subTotalWithTax plus shippingWithTax */
  totalWithTax: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};
export declare type OrderHistoryArgs = {
  options?: InputMaybe<HistoryEntryListOptions>;
};
export declare type OrderAddress = {
  __typename?: 'OrderAddress';
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  customFields?: Maybe<Scalars['JSON']>;
  fullName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  streetLine1?: Maybe<Scalars['String']>;
  streetLine2?: Maybe<Scalars['String']>;
};
export declare type OrderCustomFields = {
  __typename?: 'OrderCustomFields';
  languageCode?: Maybe<Scalars['String']>;
};
export declare type OrderFilterParameter = {
  active?: InputMaybe<BooleanOperators>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  currencyCode?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  orderPlacedAt?: InputMaybe<DateOperators>;
  shipping?: InputMaybe<NumberOperators>;
  shippingWithTax?: InputMaybe<NumberOperators>;
  state?: InputMaybe<StringOperators>;
  subTotal?: InputMaybe<NumberOperators>;
  subTotalWithTax?: InputMaybe<NumberOperators>;
  total?: InputMaybe<NumberOperators>;
  totalQuantity?: InputMaybe<NumberOperators>;
  totalWithTax?: InputMaybe<NumberOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};
export declare type OrderItem = Node & {
  __typename?: 'OrderItem';
  adjustments: Array<Adjustment>;
  cancelled: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  /**
   * The price of a single unit including discounts, excluding tax.
   *
   * If Order-level discounts have been applied, this will not be the
   * actual taxable unit price (see `proratedUnitPrice`), but is generally the
   * correct price to display to customers to avoid confusion
   * about the internal handling of distributed Order-level discounts.
   */
  discountedUnitPrice: Scalars['Int'];
  /** The price of a single unit including discounts and tax */
  discountedUnitPriceWithTax: Scalars['Int'];
  fulfillment?: Maybe<Fulfillment>;
  id: Scalars['ID'];
  /**
   * The actual unit price, taking into account both item discounts _and_ prorated (proportionally-distributed)
   * Order-level discounts. This value is the true economic value of the OrderItem, and is used in tax
   * and refund calculations.
   */
  proratedUnitPrice: Scalars['Int'];
  /** The proratedUnitPrice including tax */
  proratedUnitPriceWithTax: Scalars['Int'];
  refundId?: Maybe<Scalars['ID']>;
  taxLines: Array<TaxLine>;
  taxRate: Scalars['Float'];
  /** The price of a single unit, excluding tax and discounts */
  unitPrice: Scalars['Int'];
  /** The price of a single unit, including tax but excluding discounts */
  unitPriceWithTax: Scalars['Int'];
  unitTax: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};
/** Returned when the maximum order size limit has been reached. */
export declare type OrderLimitError = ErrorResult & {
  __typename?: 'OrderLimitError';
  errorCode: ErrorCode;
  maxItems: Scalars['Int'];
  message: Scalars['String'];
};
export declare type OrderLine = Node & {
  __typename?: 'OrderLine';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<OrderLineCustomFields>;
  /** The price of the line including discounts, excluding tax */
  discountedLinePrice: Scalars['Int'];
  /** The price of the line including discounts and tax */
  discountedLinePriceWithTax: Scalars['Int'];
  /**
   * The price of a single unit including discounts, excluding tax.
   *
   * If Order-level discounts have been applied, this will not be the
   * actual taxable unit price (see `proratedUnitPrice`), but is generally the
   * correct price to display to customers to avoid confusion
   * about the internal handling of distributed Order-level discounts.
   */
  discountedUnitPrice: Scalars['Int'];
  /** The price of a single unit including discounts and tax */
  discountedUnitPriceWithTax: Scalars['Int'];
  discounts: Array<Discount>;
  featuredAsset?: Maybe<Asset>;
  id: Scalars['ID'];
  items: Array<OrderItem>;
  /** 扩展的订单镜片流程配置流程, 可能为null */
  lensConfigs?: Maybe<OrderLineLensConfigs>;
  /** The total price of the line excluding tax and discounts. */
  linePrice: Scalars['Int'];
  /** The total price of the line including tax but excluding discounts. */
  linePriceWithTax: Scalars['Int'];
  /** The total tax on this line */
  lineTax: Scalars['Int'];
  order: Order;
  productVariant: ProductVariant;
  /**
   * The actual line price, taking into account both item discounts _and_ prorated (proportionally-distributed)
   * Order-level discounts. This value is the true economic value of the OrderLine, and is used in tax
   * and refund calculations.
   */
  proratedLinePrice: Scalars['Int'];
  /** The proratedLinePrice including tax */
  proratedLinePriceWithTax: Scalars['Int'];
  /**
   * The actual unit price, taking into account both item discounts _and_ prorated (proportionally-distributed)
   * Order-level discounts. This value is the true economic value of the OrderItem, and is used in tax
   * and refund calculations.
   */
  proratedUnitPrice: Scalars['Int'];
  /** The proratedUnitPrice including tax */
  proratedUnitPriceWithTax: Scalars['Int'];
  quantity: Scalars['Int'];
  taxLines: Array<TaxLine>;
  taxRate: Scalars['Float'];
  /** The price of a single unit, excluding tax and discounts */
  unitPrice: Scalars['Int'];
  /** Non-zero if the unitPrice has changed since it was initially added to Order */
  unitPriceChangeSinceAdded: Scalars['Int'];
  /** The price of a single unit, including tax but excluding discounts */
  unitPriceWithTax: Scalars['Int'];
  /** Non-zero if the unitPriceWithTax has changed since it was initially added to Order */
  unitPriceWithTaxChangeSinceAdded: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};
export declare type OrderLineCustomFields = {
  __typename?: 'OrderLineCustomFields';
  lensConfigs?: Maybe<Scalars['String']>;
};
export declare type OrderLineCustomFieldsInput = {
  lensConfigs?: InputMaybe<Scalars['String']>;
};
export declare type OrderLineLensCampaignView = {
  __typename?: 'OrderLineLensCampaignView';
  endsAt?: Maybe<Scalars['DateTime']>;
  framePromotionText?: Maybe<Scalars['String']>;
  lensPrice?: Maybe<Scalars['String']>;
  lensPromotionText?: Maybe<Scalars['String']>;
};
export declare type OrderLineLensConfigRxStep = {
  __typename?: 'OrderLineLensConfigRxStep';
  /** 当前STEP选项下的选中的ID列表 */
  lensOptionInputs: Array<UserProcessConfigStepLensOptionItem>;
  /** 当前STEP存储的用户选择的选项列表数据(价格override之后),显示在购物车, 包含prism加价, 以及偏心加价. */
  lensUserConfigItems: Array<OrderLineLensUserConfigItem>;
  /** 当前步骤 */
  step?: Maybe<LensStepGroups>;
  /** T2处方用户输入的数据 */
  t2LensRxInput?: Maybe<LensProcessT2UserInputtedRxData>;
  /** T2用户特殊的ACTION自定义选项, 如加偏心等行为的集合 */
  t2UserActionInputs?: Maybe<Array<LensProcessT2UserActionData>>;
};
export declare type OrderLineLensConfigStep = {
  __typename?: 'OrderLineLensConfigStep';
  /** 当前STEP选项下的选中的ID列表 */
  lensOptionInputs: Array<UserProcessConfigStepLensOptionItem>;
  /** 当前STEP存储的用户选择的选项列表数据(价格override之后), 显示在购物车 */
  lensUserConfigItems: Array<OrderLineLensUserConfigItem>;
  /** 当前步骤 */
  step?: Maybe<LensStepGroups>;
};
export declare type OrderLineLensConfigT0Context = {
  __typename?: 'OrderLineLensConfigT0Context';
  /** 产品来源的那一个分类或者专题页的集合ID */
  collectionId?: Maybe<Scalars['ID']>;
  /** 镜架产品ID */
  productId: Scalars['ID'];
  /** 镜架产品变量ID */
  productVariantId: Scalars['ID'];
  /** 当前步骤 */
  step?: Maybe<LensStepGroups>;
};
/** 镜片流程保存到OrderLine下的数据 */
export declare type OrderLineLensConfigs = {
  __typename?: 'OrderLineLensConfigs';
  T0?: Maybe<OrderLineLensConfigT0Context>;
  T1?: Maybe<OrderLineLensConfigStep>;
  T2?: Maybe<OrderLineLensConfigRxStep>;
  T3?: Maybe<OrderLineLensConfigStep>;
  T4?: Maybe<OrderLineLensConfigStep>;
  /** 当前配置了直降活动, 在镜片上的折扣, 显示信息 */
  campaignView?: Maybe<OrderLineLensCampaignView>;
  /** 当前镜片是否已经是配置完成状态. */
  lensStepsDone?: Maybe<Scalars['Boolean']>;
  /** 当前orderLine 镜片部分的单价 */
  lensUnitPrice?: Maybe<Scalars['Int']>;
};
export declare type OrderLineLensUserConfigItem = {
  __typename?: 'OrderLineLensUserConfigItem';
  adjustPrice: Scalars['Int'];
  i18nName: Scalars['String'];
  introduction?: Maybe<Array<Scalars['String']>>;
  preview?: Maybe<LensProcessOptionPreview>;
  shortDesc?: Maybe<Scalars['String']>;
  /** T3如果有颜色值, 则放此处 */
  uiComponents?: Maybe<LensOptionUiComponents>;
};
export declare type OrderList = PaginatedList & {
  __typename?: 'OrderList';
  items: Array<Order>;
  totalItems: Scalars['Int'];
};
export declare type OrderListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<OrderFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<OrderSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};
/** Returned when attempting to modify the contents of an Order that is not in the `AddingItems` state. */
export declare type OrderModificationError = ErrorResult & {
  __typename?: 'OrderModificationError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};
/** Returned when attempting to add a Payment to an Order that is not in the `ArrangingPayment` state. */
export declare type OrderPaymentStateError = ErrorResult & {
  __typename?: 'OrderPaymentStateError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};
export declare type OrderSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  languageCode?: InputMaybe<SortOrder>;
  orderPlacedAt?: InputMaybe<SortOrder>;
  shipping?: InputMaybe<SortOrder>;
  shippingWithTax?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  subTotal?: InputMaybe<SortOrder>;
  subTotalWithTax?: InputMaybe<SortOrder>;
  total?: InputMaybe<SortOrder>;
  totalQuantity?: InputMaybe<SortOrder>;
  totalWithTax?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};
/** Returned if there is an error in transitioning the Order state */
export declare type OrderStateTransitionError = ErrorResult & {
  __typename?: 'OrderStateTransitionError';
  errorCode: ErrorCode;
  fromState: Scalars['String'];
  message: Scalars['String'];
  toState: Scalars['String'];
  transitionError: Scalars['String'];
};
/**
 * A summary of the taxes being applied to this order, grouped
 * by taxRate.
 */
export declare type OrderTaxSummary = {
  __typename?: 'OrderTaxSummary';
  /** A description of this tax */
  description: Scalars['String'];
  /** The total net price or OrderItems to which this taxRate applies */
  taxBase: Scalars['Int'];
  /** The taxRate as a percentage */
  taxRate: Scalars['Float'];
  /** The total tax being applied to the Order at this taxRate */
  taxTotal: Scalars['Int'];
};
export declare type PaginatedList = {
  items: Array<Node>;
  totalItems: Scalars['Int'];
};
/** Returned when attempting to verify a customer account with a password, when a password has already been set. */
export declare type PasswordAlreadySetError = ErrorResult & {
  __typename?: 'PasswordAlreadySetError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};
/**
 * Returned if the token used to reset a Customer's password is valid, but has
 * expired according to the `verificationTokenDuration` setting in the AuthOptions.
 */
export declare type PasswordResetTokenExpiredError = ErrorResult & {
  __typename?: 'PasswordResetTokenExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};
/**
 * Returned if the token used to reset a Customer's password is either
 * invalid or does not match any expected tokens.
 */
export declare type PasswordResetTokenInvalidError = ErrorResult & {
  __typename?: 'PasswordResetTokenInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};
/** Returned when attempting to register or verify a customer account where the given password fails password validation. */
export declare type PasswordValidationError = ErrorResult & {
  __typename?: 'PasswordValidationError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  validationErrorMessage: Scalars['String'];
};
export declare type Payment = Node & {
  __typename?: 'Payment';
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  errorMessage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  metadata?: Maybe<Scalars['JSON']>;
  method: Scalars['String'];
  refunds: Array<Refund>;
  state: Scalars['String'];
  transactionId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};
/** Returned when a Payment is declined by the payment provider. */
export declare type PaymentDeclinedError = ErrorResult & {
  __typename?: 'PaymentDeclinedError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  paymentErrorMessage: Scalars['String'];
};
/** Returned when a Payment fails due to an error. */
export declare type PaymentFailedError = ErrorResult & {
  __typename?: 'PaymentFailedError';
  errorCode: ErrorCode;
  message: Scalars['String'];
  paymentErrorMessage: Scalars['String'];
};
/** Passed as input to the `addPaymentToOrder` mutation. */
export declare type PaymentInput = {
  /**
   * This field should contain arbitrary data passed to the specified PaymentMethodHandler's `createPayment()` method
   * as the "metadata" argument. For example, it could contain an ID for the payment and other
   * data generated by the payment provider.
   */
  metadata: Scalars['JSON'];
  /** This field should correspond to the `code` property of a PaymentMethod. */
  method: Scalars['String'];
};
export declare type PaymentMethod = Node & {
  __typename?: 'PaymentMethod';
  checker?: Maybe<ConfigurableOperation>;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<PaymentMethodCustomFields>;
  description: Scalars['String'];
  enabled: Scalars['Boolean'];
  handler: ConfigurableOperation;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};
export declare type PaymentMethodCustomFields = {
  __typename?: 'PaymentMethodCustomFields';
  paypalClientConfig?: Maybe<Scalars['String']>;
};
export declare type PaymentMethodPaypalClientConfig = {
  __typename?: 'PaymentMethodPaypalClientConfig';
  clientId: Scalars['String'];
};
export declare type PaymentMethodQuote = {
  __typename?: 'PaymentMethodQuote';
  code: Scalars['String'];
  customFields?: Maybe<PaymentMethodCustomFields>;
  description: Scalars['String'];
  eligibilityMessage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isEligible: Scalars['Boolean'];
  name: Scalars['String'];
  /** 扩展一个字段配置为paypal客户端支付SDK集成 */
  paypalClientConfig?: Maybe<PaymentMethodPaypalClientConfig>;
};
/**
 * @description
 * Permissions for administrators and customers. Used to control access to
 * GraphQL resolvers via the {@link Allow} decorator.
 *
 * ## Understanding Permission.Owner
 *
 * `Permission.Owner` is a special permission which is used in some of the Vendure resolvers to indicate that that resolver should only
 * be accessible to the "owner" of that resource.
 *
 * For example, the Shop API `activeCustomer` query resolver should only return the Customer object for the "owner" of that Customer, i.e.
 * based on the activeUserId of the current session. As a result, the resolver code looks like this:
 *
 * @example
 * ```TypeScript
 * \@Query()
 * \@Allow(Permission.Owner)
 * async activeCustomer(\@Ctx() ctx: RequestContext): Promise<Customer | undefined> {
 *   const userId = ctx.activeUserId;
 *   if (userId) {
 *     return this.customerService.findOneByUserId(ctx, userId);
 *   }
 * }
 * ```
 *
 * Here we can see that the "ownership" must be enforced by custom logic inside the resolver. Since "ownership" cannot be defined generally
 * nor statically encoded at build-time, any resolvers using `Permission.Owner` **must** include logic to enforce that only the owner
 * of the resource has access. If not, then it is the equivalent of using `Permission.Public`.
 *
 *
 * @docsCategory common
 */
export declare enum Permission {
  /** Allow this user to enable invoice generation */
  AllowInvoicesPermission = 'AllowInvoicesPermission',
  /** Allow this user to enable sitemap generation */
  AllowSitemapPermission = 'AllowSitemapPermission',
  /** Authenticated means simply that the user is logged in */
  Authenticated = 'Authenticated',
  /** Grants permission to create Administrator */
  CreateAdministrator = 'CreateAdministrator',
  /** Grants permission to create Asset */
  CreateAsset = 'CreateAsset',
  /** Grants permission to create Banner */
  CreateBanner = 'CreateBanner',
  /** Grants permission to create Campaign */
  CreateCampaign = 'CreateCampaign',
  /** Grants permission to create Products, Facets, Assets, Collections */
  CreateCatalog = 'CreateCatalog',
  /** Grants permission to create Channel */
  CreateChannel = 'CreateChannel',
  /** Grants permission to create Collection */
  CreateCollection = 'CreateCollection',
  /** Grants permission to create Country */
  CreateCountry = 'CreateCountry',
  /** Grants permission to create Customer */
  CreateCustomer = 'CreateCustomer',
  /** Grants permission to create CustomerGroup */
  CreateCustomerGroup = 'CreateCustomerGroup',
  /** Grants permission to create Facet */
  CreateFacet = 'CreateFacet',
  /** Grants permission to create HelpCenter */
  CreateHelpCenter = 'CreateHelpCenter',
  /** Grants permission to create LensProcess */
  CreateLensProcess = 'CreateLensProcess',
  /** Grants permission to create Marketing */
  CreateMarketing = 'CreateMarketing',
  /** Grants permission to create Order */
  CreateOrder = 'CreateOrder',
  /** Grants permission to create PaymentMethod */
  CreatePaymentMethod = 'CreatePaymentMethod',
  /** Grants permission to create ProdcutQA */
  CreateProdcutQA = 'CreateProdcutQA',
  /** Grants permission to create Product */
  CreateProduct = 'CreateProduct',
  /** Grants permission to create Promotion */
  CreatePromotion = 'CreatePromotion',
  /** Grants permission to create ReviewsPermission */
  CreateReviewsPermission = 'CreateReviewsPermission',
  /** Grants permission to create Setting */
  CreateSetting = 'CreateSetting',
  /** Grants permission to create PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  CreateSettings = 'CreateSettings',
  /** Grants permission to create ShippingMethod */
  CreateShippingMethod = 'CreateShippingMethod',
  /** Grants permission to create Subscription */
  CreateSubscription = 'CreateSubscription',
  /** Grants permission to create Supplier */
  CreateSupplier = 'CreateSupplier',
  /** Grants permission to create System */
  CreateSystem = 'CreateSystem',
  /** Grants permission to create Tag */
  CreateTag = 'CreateTag',
  /** Grants permission to create TaxCategory */
  CreateTaxCategory = 'CreateTaxCategory',
  /** Grants permission to create TaxRate */
  CreateTaxRate = 'CreateTaxRate',
  /** Grants permission to create Topic */
  CreateTopic = 'CreateTopic',
  /** Grants permission to create Zone */
  CreateZone = 'CreateZone',
  /** Grants permission to delete Administrator */
  DeleteAdministrator = 'DeleteAdministrator',
  /** Grants permission to delete Asset */
  DeleteAsset = 'DeleteAsset',
  /** Grants permission to delete Banner */
  DeleteBanner = 'DeleteBanner',
  /** Grants permission to delete Campaign */
  DeleteCampaign = 'DeleteCampaign',
  /** Grants permission to delete Products, Facets, Assets, Collections */
  DeleteCatalog = 'DeleteCatalog',
  /** Grants permission to delete Channel */
  DeleteChannel = 'DeleteChannel',
  /** Grants permission to delete Collection */
  DeleteCollection = 'DeleteCollection',
  /** Grants permission to delete Country */
  DeleteCountry = 'DeleteCountry',
  /** Grants permission to delete Customer */
  DeleteCustomer = 'DeleteCustomer',
  /** Grants permission to delete CustomerGroup */
  DeleteCustomerGroup = 'DeleteCustomerGroup',
  /** Grants permission to delete Facet */
  DeleteFacet = 'DeleteFacet',
  /** Grants permission to delete HelpCenter */
  DeleteHelpCenter = 'DeleteHelpCenter',
  /** Grants permission to delete LensProcess */
  DeleteLensProcess = 'DeleteLensProcess',
  /** Grants permission to delete Marketing */
  DeleteMarketing = 'DeleteMarketing',
  /** Grants permission to delete Order */
  DeleteOrder = 'DeleteOrder',
  /** Grants permission to delete PaymentMethod */
  DeletePaymentMethod = 'DeletePaymentMethod',
  /** Grants permission to delete ProdcutQA */
  DeleteProdcutQA = 'DeleteProdcutQA',
  /** Grants permission to delete Product */
  DeleteProduct = 'DeleteProduct',
  /** Grants permission to delete Promotion */
  DeletePromotion = 'DeletePromotion',
  /** Grants permission to delete ReviewsPermission */
  DeleteReviewsPermission = 'DeleteReviewsPermission',
  /** Grants permission to delete Setting */
  DeleteSetting = 'DeleteSetting',
  /** Grants permission to delete PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  DeleteSettings = 'DeleteSettings',
  /** Grants permission to delete ShippingMethod */
  DeleteShippingMethod = 'DeleteShippingMethod',
  /** Grants permission to delete Subscription */
  DeleteSubscription = 'DeleteSubscription',
  /** Grants permission to delete Supplier */
  DeleteSupplier = 'DeleteSupplier',
  /** Grants permission to delete System */
  DeleteSystem = 'DeleteSystem',
  /** Grants permission to delete Tag */
  DeleteTag = 'DeleteTag',
  /** Grants permission to delete TaxCategory */
  DeleteTaxCategory = 'DeleteTaxCategory',
  /** Grants permission to delete TaxRate */
  DeleteTaxRate = 'DeleteTaxRate',
  /** Grants permission to delete Topic */
  DeleteTopic = 'DeleteTopic',
  /** Grants permission to delete Zone */
  DeleteZone = 'DeleteZone',
  /** Owner means the user owns this entity, e.g. a Customer's own Order */
  Owner = 'Owner',
  /** Public means any unauthenticated user may perform the operation */
  Public = 'Public',
  /** Grants permission to read Administrator */
  ReadAdministrator = 'ReadAdministrator',
  /** Grants permission to read Asset */
  ReadAsset = 'ReadAsset',
  /** Grants permission to read Banner */
  ReadBanner = 'ReadBanner',
  /** Grants permission to read Campaign */
  ReadCampaign = 'ReadCampaign',
  /** Grants permission to read Products, Facets, Assets, Collections */
  ReadCatalog = 'ReadCatalog',
  /** Grants permission to read Channel */
  ReadChannel = 'ReadChannel',
  /** Grants permission to read Collection */
  ReadCollection = 'ReadCollection',
  /** Grants permission to read Country */
  ReadCountry = 'ReadCountry',
  /** Grants permission to read Customer */
  ReadCustomer = 'ReadCustomer',
  /** Grants permission to read CustomerGroup */
  ReadCustomerGroup = 'ReadCustomerGroup',
  /** Grants permission to read Facet */
  ReadFacet = 'ReadFacet',
  /** Grants permission to read HelpCenter */
  ReadHelpCenter = 'ReadHelpCenter',
  /** Grants permission to read LensProcess */
  ReadLensProcess = 'ReadLensProcess',
  /** Grants permission to read Marketing */
  ReadMarketing = 'ReadMarketing',
  /** Grants permission to read Order */
  ReadOrder = 'ReadOrder',
  /** Grants permission to read PaymentMethod */
  ReadPaymentMethod = 'ReadPaymentMethod',
  /** Grants permission to read ProdcutQA */
  ReadProdcutQA = 'ReadProdcutQA',
  /** Grants permission to read Product */
  ReadProduct = 'ReadProduct',
  /** Grants permission to read Promotion */
  ReadPromotion = 'ReadPromotion',
  /** Grants permission to read ReviewsPermission */
  ReadReviewsPermission = 'ReadReviewsPermission',
  /** Grants permission to read Setting */
  ReadSetting = 'ReadSetting',
  /** Grants permission to read PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  ReadSettings = 'ReadSettings',
  /** Grants permission to read ShippingMethod */
  ReadShippingMethod = 'ReadShippingMethod',
  /** Grants permission to read Subscription */
  ReadSubscription = 'ReadSubscription',
  /** Grants permission to read Supplier */
  ReadSupplier = 'ReadSupplier',
  /** Grants permission to read System */
  ReadSystem = 'ReadSystem',
  /** Grants permission to read Tag */
  ReadTag = 'ReadTag',
  /** Grants permission to read TaxCategory */
  ReadTaxCategory = 'ReadTaxCategory',
  /** Grants permission to read TaxRate */
  ReadTaxRate = 'ReadTaxRate',
  /** Grants permission to read Topic */
  ReadTopic = 'ReadTopic',
  /** Grants permission to read Zone */
  ReadZone = 'ReadZone',
  /** SuperAdmin has unrestricted access to all operations */
  SuperAdmin = 'SuperAdmin',
  /** Grants permission to update Administrator */
  UpdateAdministrator = 'UpdateAdministrator',
  /** Grants permission to update Asset */
  UpdateAsset = 'UpdateAsset',
  /** Grants permission to update Banner */
  UpdateBanner = 'UpdateBanner',
  /** Grants permission to update Campaign */
  UpdateCampaign = 'UpdateCampaign',
  /** Grants permission to update Products, Facets, Assets, Collections */
  UpdateCatalog = 'UpdateCatalog',
  /** Grants permission to update Channel */
  UpdateChannel = 'UpdateChannel',
  /** Grants permission to update Collection */
  UpdateCollection = 'UpdateCollection',
  /** Grants permission to update Country */
  UpdateCountry = 'UpdateCountry',
  /** Grants permission to update Customer */
  UpdateCustomer = 'UpdateCustomer',
  /** Grants permission to update CustomerGroup */
  UpdateCustomerGroup = 'UpdateCustomerGroup',
  /** Grants permission to update Facet */
  UpdateFacet = 'UpdateFacet',
  /** Grants permission to update GlobalSettings */
  UpdateGlobalSettings = 'UpdateGlobalSettings',
  /** Grants permission to update HelpCenter */
  UpdateHelpCenter = 'UpdateHelpCenter',
  /** Grants permission to update LensProcess */
  UpdateLensProcess = 'UpdateLensProcess',
  /** Grants permission to update Marketing */
  UpdateMarketing = 'UpdateMarketing',
  /** Grants permission to update Order */
  UpdateOrder = 'UpdateOrder',
  /** Grants permission to update PaymentMethod */
  UpdatePaymentMethod = 'UpdatePaymentMethod',
  /** Grants permission to update ProdcutQA */
  UpdateProdcutQA = 'UpdateProdcutQA',
  /** Grants permission to update Product */
  UpdateProduct = 'UpdateProduct',
  /** Grants permission to update Promotion */
  UpdatePromotion = 'UpdatePromotion',
  /** Grants permission to update ReviewsPermission */
  UpdateReviewsPermission = 'UpdateReviewsPermission',
  /** Grants permission to update Setting */
  UpdateSetting = 'UpdateSetting',
  /** Grants permission to update PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  UpdateSettings = 'UpdateSettings',
  /** Grants permission to update ShippingMethod */
  UpdateShippingMethod = 'UpdateShippingMethod',
  /** Grants permission to update Subscription */
  UpdateSubscription = 'UpdateSubscription',
  /** Grants permission to update Supplier */
  UpdateSupplier = 'UpdateSupplier',
  /** Grants permission to update System */
  UpdateSystem = 'UpdateSystem',
  /** Grants permission to update Tag */
  UpdateTag = 'UpdateTag',
  /** Grants permission to update TaxCategory */
  UpdateTaxCategory = 'UpdateTaxCategory',
  /** Grants permission to update TaxRate */
  UpdateTaxRate = 'UpdateTaxRate',
  /** Grants permission to update Topic */
  UpdateTopic = 'UpdateTopic',
  /** Grants permission to update Zone */
  UpdateZone = 'UpdateZone',
}
export declare type PhoneAddInput = {
  phone: Scalars['String'];
};
/** The price range where the result has more than one price */
export declare type PriceRange = {
  __typename?: 'PriceRange';
  max: Scalars['Int'];
  min: Scalars['Int'];
};
/** 棱镜, 标准处方配置 */
export declare type PrismItem = {
  __typename?: 'PrismItem';
  /** OD(Right eye) */
  odHorizontal?: Maybe<Scalars['String']>;
  /** ODHorizontal  (Δ) Base Direction */
  odHorizontalDirection?: Maybe<Scalars['String']>;
  /** OD(Right eye) */
  odVertical?: Maybe<Scalars['String']>;
  /** ODVertical (Δ) Base Direction */
  odVerticalDirection?: Maybe<Scalars['String']>;
  /** OS(Left eye) */
  osHorizontal?: Maybe<Scalars['String']>;
  /** OS Horizontal  (Δ) Base Direction */
  osHorizontalDirection?: Maybe<Scalars['String']>;
  /** OS(Left eye) */
  osVertical?: Maybe<Scalars['String']>;
  /** OS Vertical (Δ) Base Direction */
  osVerticalDirection?: Maybe<Scalars['String']>;
};
/** 棱镜, 标准处方配置 */
export declare type PrismItemInput = {
  /** OD(Right eye) */
  odHorizontal?: InputMaybe<Scalars['String']>;
  /** ODHorizontal  (Δ) Base Direction */
  odHorizontalDirection?: InputMaybe<Scalars['String']>;
  /** OD(Right eye) */
  odVertical?: InputMaybe<Scalars['String']>;
  /** ODVertical (Δ) Base Direction */
  odVerticalDirection?: InputMaybe<Scalars['String']>;
  /** OS(Left eye) */
  osHorizontal?: InputMaybe<Scalars['String']>;
  /** OS Horizontal  (Δ) Base Direction */
  osHorizontalDirection?: InputMaybe<Scalars['String']>;
  /** OS(Left eye) */
  osVertical?: InputMaybe<Scalars['String']>;
  /** OS Vertical (Δ) Base Direction */
  osVerticalDirection?: InputMaybe<Scalars['String']>;
};
export declare type ProcessConfigsOfStepInput = {
  /** 当前用户的(T0...T4)流程输入数据 */
  lensProcessStepInputs: LensProcessStepInputs;
  /** 当前查询的流程步骤, 只返回当前步骤下的流程配置选项 */
  step: LensStepGroups;
};
export declare type Product = Node & {
  __typename?: 'Product';
  assets: Array<Asset>;
  collections: Array<Collection>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<ProductCustomFields>;
  description: Scalars['String'];
  facetValues: Array<FacetValue>;
  featuredAsset?: Maybe<Asset>;
  /** 扩展的镜架商品信息, 可能为null */
  frameFields?: Maybe<ProductFrame>;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  optionGroups: Array<ProductOptionGroup>;
  /** 扩展的商品类型, frame | accessory */
  productType: Scalars['String'];
  /** Query questionAnsers property field questionAnsers */
  questionAnswers: ProductQaList;
  recommendations: Array<ProductRecommendation>;
  reviewAvg: Scalars['Float'];
  reviews: ProductReviewList;
  reviewsHistogram: Array<ProductReviewHistogramItem>;
  slug: Scalars['String'];
  translations: Array<ProductTranslation>;
  updatedAt: Scalars['DateTime'];
  /** Returns a paginated, sortable, filterable list of ProductVariants */
  variantList: ProductVariantList;
  /** Returns all ProductVariants */
  variants: Array<ProductVariant>;
};
export declare type ProductQuestionAnswersArgs = {
  options?: InputMaybe<ProductQaListOptions>;
};
export declare type ProductReviewsArgs = {
  options?: InputMaybe<ProductReviewListOptions>;
};
export declare type ProductVariantListArgs = {
  options?: InputMaybe<ProductVariantListOptions>;
};
export declare type ProductCustomFields = {
  __typename?: 'ProductCustomFields';
  bridge?: Maybe<Scalars['Int']>;
  dimensionModelConfig?: Maybe<Scalars['String']>;
  isFinishProduct?: Maybe<Scalars['Boolean']>;
  lensDiagonalSize?: Maybe<Scalars['Int']>;
  lensHeight?: Maybe<Scalars['Int']>;
  lensProcessTemplate?: Maybe<LensProcessTemplate>;
  lensWidth?: Maybe<Scalars['Int']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  minLensDiam?: Maybe<Scalars['Int']>;
  reviewCount?: Maybe<Scalars['Int']>;
  reviewRating?: Maybe<Scalars['Float']>;
  templeLength?: Maybe<Scalars['Int']>;
  totalWidth?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
};
export declare type ProductFilterParameter = {
  bridge?: InputMaybe<NumberOperators>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  dimensionModelConfig?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  isFinishProduct?: InputMaybe<BooleanOperators>;
  languageCode?: InputMaybe<StringOperators>;
  lensDiagonalSize?: InputMaybe<NumberOperators>;
  lensHeight?: InputMaybe<NumberOperators>;
  lensWidth?: InputMaybe<NumberOperators>;
  metaDescription?: InputMaybe<StringOperators>;
  metaTitle?: InputMaybe<StringOperators>;
  minLensDiam?: InputMaybe<NumberOperators>;
  name?: InputMaybe<StringOperators>;
  productType?: InputMaybe<StringOperators>;
  reviewAvg?: InputMaybe<NumberOperators>;
  reviewCount?: InputMaybe<NumberOperators>;
  reviewRating?: InputMaybe<NumberOperators>;
  slug?: InputMaybe<StringOperators>;
  templeLength?: InputMaybe<NumberOperators>;
  totalWidth?: InputMaybe<NumberOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  weight?: InputMaybe<NumberOperators>;
};
/** 产品基础信息中扩展的镜架信息 */
export declare type ProductFrame = {
  __typename?: 'ProductFrame';
  /** 中梁 */
  bridge: Scalars['Int'];
  /** 镜架/镜腿显示的可视化尺寸画线配置数据, 所有的variant都是公用一个模型 */
  dimensionModelConfig?: Maybe<DimensionModelConfig>;
  /** 镜架/镜腿显示的尺寸mm/in */
  dimensionModelData?: Maybe<DimensionModelData>;
  /** 镜架PD */
  framePd: Scalars['Int'];
  /** 是否是成品眼镜, 如成品太阳镜可能自带镜片, 无须镜片流程 */
  isFinishProduct: Scalars['Boolean'];
  /** 对角线 */
  lensDiagonalSize: Scalars['Int'];
  /** 框高 */
  lensHeight: Scalars['Int'];
  /** 当前的镜片流程模版配置 */
  lensProcessTemplate?: Maybe<LensProcessTemplate>;
  /** 框宽 */
  lensWidth: Scalars['Int'];
  /** 最小镜片直径 */
  minLensDiam: Scalars['Int'];
  /** 腿长 */
  templeLength: Scalars['Int'];
  /** 整宽 */
  totalWidth: Scalars['Int'];
  /** 重量 */
  weight: Scalars['Int'];
};
export declare type ProductList = PaginatedList & {
  __typename?: 'ProductList';
  items: Array<Product>;
  totalItems: Scalars['Int'];
};
export declare type ProductListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ProductFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ProductSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};
export declare type ProductOption = Node & {
  __typename?: 'ProductOption';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<ProductOptionCustomFields>;
  group: ProductOptionGroup;
  groupId: Scalars['ID'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  translations: Array<ProductOptionTranslation>;
  updatedAt: Scalars['DateTime'];
};
export declare type ProductOptionCustomFields = {
  __typename?: 'ProductOptionCustomFields';
  value?: Maybe<Scalars['String']>;
};
export declare type ProductOptionGroup = Node & {
  __typename?: 'ProductOptionGroup';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  options: Array<ProductOption>;
  translations: Array<ProductOptionGroupTranslation>;
  updatedAt: Scalars['DateTime'];
};
export declare type ProductOptionGroupTranslation = {
  __typename?: 'ProductOptionGroupTranslation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};
export declare type ProductOptionTranslation = {
  __typename?: 'ProductOptionTranslation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};
export declare type ProductQa = Node & {
  __typename?: 'ProductQa';
  createdAt: Scalars['DateTime'];
  customer?: Maybe<Customer>;
  helpful: Scalars['Int'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  product: Product;
  productId: Scalars['ID'];
  question: Scalars['String'];
  reply?: Maybe<Scalars['String']>;
  replyCreatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};
export declare type ProductQaFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  helpful?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  productId?: InputMaybe<IdOperators>;
  question?: InputMaybe<StringOperators>;
  reply?: InputMaybe<StringOperators>;
  replyCreatedAt?: InputMaybe<DateOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};
export declare type ProductQaList = PaginatedList & {
  __typename?: 'ProductQaList';
  items: Array<ProductQa>;
  totalItems: Scalars['Int'];
};
export declare type ProductQaListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ProductQaFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ProductQaSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};
export declare type ProductQaSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  helpful?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  question?: InputMaybe<SortOrder>;
  reply?: InputMaybe<SortOrder>;
  replyCreatedAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};
export declare type ProductRecommendation = {
  __typename?: 'ProductRecommendation';
  productId: Scalars['ID'];
  recommendation: Product;
  type: RecommendationType;
};
export declare type ProductReview = Node & {
  __typename?: 'ProductReview';
  adminCreatedCustomerName?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customerName?: Maybe<Scalars['String']>;
  customerNameIsPublic: Scalars['Boolean'];
  downVotes: Scalars['Int'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  /** mata title 180 characters */
  metaDescription?: Maybe<Scalars['String']>;
  /** mata title 90 characters */
  metaTitle?: Maybe<Scalars['String']>;
  product?: Maybe<Product>;
  productId: Scalars['ID'];
  productVariant?: Maybe<ProductVariant>;
  productVariantId: Scalars['ID'];
  rating: Scalars['Int'];
  /** extends new property relatedReviews */
  relatedReviews: Array<ProductReview>;
  reply?: Maybe<Scalars['String']>;
  replyCreatedAt?: Maybe<Scalars['DateTime']>;
  reviewAsset?: Maybe<Asset>;
  showAsTestimonial?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  state: Scalars['String'];
  suggestions?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  upVotes: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};
export declare type ProductReviewFilterParameter = {
  adminCreatedCustomerName?: InputMaybe<StringOperators>;
  content?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  customerName?: InputMaybe<StringOperators>;
  customerNameIsPublic?: InputMaybe<BooleanOperators>;
  downVotes?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  metaDescription?: InputMaybe<StringOperators>;
  metaTitle?: InputMaybe<StringOperators>;
  productId?: InputMaybe<IdOperators>;
  productVariantId?: InputMaybe<IdOperators>;
  rating?: InputMaybe<NumberOperators>;
  reply?: InputMaybe<StringOperators>;
  replyCreatedAt?: InputMaybe<DateOperators>;
  showAsTestimonial?: InputMaybe<BooleanOperators>;
  slug?: InputMaybe<StringOperators>;
  state?: InputMaybe<StringOperators>;
  suggestions?: InputMaybe<StringOperators>;
  title?: InputMaybe<StringOperators>;
  upVotes?: InputMaybe<NumberOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};
export declare type ProductReviewHistogramItem = {
  __typename?: 'ProductReviewHistogramItem';
  bin: Scalars['Int'];
  frequency: Scalars['Int'];
};
export declare type ProductReviewList = PaginatedList & {
  __typename?: 'ProductReviewList';
  items: Array<ProductReview>;
  totalItems: Scalars['Int'];
};
export declare type ProductReviewListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ProductReviewFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ProductReviewSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};
export declare type ProductReviewSortParameter = {
  adminCreatedCustomerName?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  customerName?: InputMaybe<SortOrder>;
  downVotes?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metaDescription?: InputMaybe<SortOrder>;
  metaTitle?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  productVariantId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  reply?: InputMaybe<SortOrder>;
  replyCreatedAt?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  suggestions?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  upVotes?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};
export declare type ProductSortParameter = {
  bridge?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  dimensionModelConfig?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isFinishProduct?: InputMaybe<SortOrder>;
  lensDiagonalSize?: InputMaybe<SortOrder>;
  lensHeight?: InputMaybe<SortOrder>;
  lensProcessTemplate?: InputMaybe<SortOrder>;
  lensWidth?: InputMaybe<SortOrder>;
  metaDescription?: InputMaybe<SortOrder>;
  metaTitle?: InputMaybe<SortOrder>;
  minLensDiam?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  productType?: InputMaybe<SortOrder>;
  reviewAvg?: InputMaybe<SortOrder>;
  reviewCount?: InputMaybe<SortOrder>;
  reviewRating?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  templeLength?: InputMaybe<SortOrder>;
  totalWidth?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
};
export declare type ProductTranslation = {
  __typename?: 'ProductTranslation';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<ProductTranslationCustomFields>;
  description: Scalars['String'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};
export declare type ProductTranslationCustomFields = {
  __typename?: 'ProductTranslationCustomFields';
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
};
export declare type ProductVariant = Node & {
  __typename?: 'ProductVariant';
  assets: Array<Asset>;
  /** 当前配置了直降活动扩展字段, 展示显示辅助, 并不参与实际价格折扣, 实际价格通过优惠券实现进行直降 */
  campaignView?: Maybe<ProductVariantCampaignView>;
  /** Use this in your Storefront to show in product page if user can create a review */
  canReview?: Maybe<Scalars['Boolean']>;
  createdAt: Scalars['DateTime'];
  currencyCode: CurrencyCode;
  customFields?: Maybe<ProductVariantCustomFields>;
  facetValues: Array<FacetValue>;
  /** Use this in your Storefront to show in product page if user favorite */
  favorite?: Maybe<Favorite>;
  featuredAsset?: Maybe<Asset>;
  /** 扩展的镜架商品信息, 可能为null */
  frameFields?: Maybe<ProductVariantFrame>;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  options: Array<ProductOption>;
  price: Scalars['Int'];
  priceWithTax: Scalars['Int'];
  product: Product;
  productId: Scalars['ID'];
  sku: Scalars['String'];
  stockLevel: Scalars['String'];
  taxCategory: TaxCategory;
  taxRateApplied: TaxRate;
  translations: Array<ProductVariantTranslation>;
  updatedAt: Scalars['DateTime'];
};
export declare type ProductVariantCampaignView = {
  __typename?: 'ProductVariantCampaignView';
  endsAt?: Maybe<Scalars['DateTime']>;
  framePrice?: Maybe<Scalars['String']>;
  framePromotionText?: Maybe<Scalars['String']>;
  lensPromotionText?: Maybe<Scalars['String']>;
};
export declare type ProductVariantCustomFields = {
  __typename?: 'ProductVariantCustomFields';
  dimensionFrameAsset?: Maybe<Asset>;
  dimensionTempleAsset?: Maybe<Asset>;
  tryonFrameAsset?: Maybe<Asset>;
  tryonFrameModelConfig?: Maybe<Scalars['String']>;
  tryonTempleAsset?: Maybe<Asset>;
  visualFrameAsset?: Maybe<Asset>;
};
export declare type ProductVariantFilterParameter = {
  canReview?: InputMaybe<BooleanOperators>;
  createdAt?: InputMaybe<DateOperators>;
  currencyCode?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  price?: InputMaybe<NumberOperators>;
  priceWithTax?: InputMaybe<NumberOperators>;
  productId?: InputMaybe<IdOperators>;
  sku?: InputMaybe<StringOperators>;
  stockLevel?: InputMaybe<StringOperators>;
  tryonFrameModelConfig?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};
/** 产品Variant(SKU)扩展的镜架信息 */
export declare type ProductVariantFrame = {
  __typename?: 'ProductVariantFrame';
  /** 单SKU镜架尺寸frame资源图片 */
  dimensionFrameAsset?: Maybe<Asset>;
  /** 单SKU镜架尺寸temple资源图片 */
  dimensionTempleAsset?: Maybe<Asset>;
  /** 单SKU镜架试戴frame资源图片 */
  tryonFrameAsset?: Maybe<Asset>;
  /** 试戴模型的资源配置数据, 每个色号的variant都是一个独立的模型 */
  tryonFrameModelConfig?: Maybe<TryonModelConfig>;
  /** 单SKU镜架试戴temple资源图片 */
  tryonTempleAsset?: Maybe<Asset>;
  /** 镜片流程中的可视化展示的透明镜框正面图 */
  visualFrameAsset?: Maybe<Asset>;
};
export declare type ProductVariantList = PaginatedList & {
  __typename?: 'ProductVariantList';
  items: Array<ProductVariant>;
  totalItems: Scalars['Int'];
};
export declare type ProductVariantListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ProductVariantFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ProductVariantSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};
export declare type ProductVariantSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  dimensionFrameAsset?: InputMaybe<SortOrder>;
  dimensionTempleAsset?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  priceWithTax?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  sku?: InputMaybe<SortOrder>;
  stockLevel?: InputMaybe<SortOrder>;
  tryonFrameAsset?: InputMaybe<SortOrder>;
  tryonFrameModelConfig?: InputMaybe<SortOrder>;
  tryonTempleAsset?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  visualFrameAsset?: InputMaybe<SortOrder>;
};
export declare type ProductVariantTranslation = {
  __typename?: 'ProductVariantTranslation';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};
export declare type Promotion = Node & {
  __typename?: 'Promotion';
  actions: Array<ConfigurableOperation>;
  conditions: Array<ConfigurableOperation>;
  couponCode?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  enabled: Scalars['Boolean'];
  endsAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  perCustomerUsageLimit?: Maybe<Scalars['Int']>;
  startsAt?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};
export declare type PromotionList = PaginatedList & {
  __typename?: 'PromotionList';
  items: Array<Promotion>;
  totalItems: Scalars['Int'];
};
export declare type Query = {
  __typename?: 'Query';
  /** The active Channel */
  activeChannel: Channel;
  /** The active Customer */
  activeCustomer?: Maybe<Customer>;
  /**
   * The active Order. Will be `null` until an Order is created via `addItemToOrder`. Once an Order reaches the
   * state of `PaymentAuthorized` or `PaymentSettled`, then that Order is no longer considered "active" and this
   * query will once again return `null`.
   */
  activeOrder?: Maybe<Order>;
  /** An array of supported Countries */
  availableCountries: Array<Country>;
  /** A list of available product variants to user review */
  availableProductVariantsToReview: ProductVariantList;
  /** Query detail of banner entity */
  banner?: Maybe<Banner>;
  /** Query all banner list */
  banners: BannerList;
  /** customer can review this product variant */
  canReviewProductVariant: Scalars['Boolean'];
  /** Returns a Collection either by its id or slug. If neither 'id' nor 'slug' is specified, an error will result. */
  collection?: Maybe<Collection>;
  /** A list of Collections available to the shop */
  collections: CollectionList;
  /** Query all tryon face models list of customer (builtin, self owns) */
  customerTryonFaceModels: Array<TryonFaceModel>;
  /** Returns a list of payment methods and their eligibility based on the current active Order */
  eligiblePaymentMethods: Array<PaymentMethodQuote>;
  /** Returns a list of eligible shipping methods based on the current active Order */
  eligibleShippingMethods: Array<ShippingMethodQuote>;
  /** Returns a Facet by its id */
  facet?: Maybe<Facet>;
  /** A list of Facets available to the shop */
  facets: FacetList;
  favorite?: Maybe<Favorite>;
  favorites: FavoriteList;
  /** 根据活动标识获取特定的优惠信息 */
  getCampaignInfo?: Maybe<Campaign>;
  /** Query detail of help center entity */
  helpCenter?: Maybe<HelpCenter>;
  /** Query detail of help center collection entity */
  helpCenterCollection?: Maybe<HelpCenterCollection>;
  /** Query all help center collections */
  helpCenterCollections: HelpCenterCollectionList;
  /** Query all help center hot searches */
  helpCenterHotSearches: HelpCenterHotSearchList;
  /** Query detail of help center tag entity */
  helpCenterTag?: Maybe<HelpCenterTag>;
  /** Query all help center tags */
  helpCenterTags: HelpCenterTagList;
  /** Query all help centers */
  helpCenters: HelpCenterList;
  /** Help summarize */
  helpSummarize?: Maybe<HelpSummarize>;
  /** Query all lens process template config item list */
  lensProcessConfigItems: LensProcessConfigItemList;
  /** Query all lens process options list */
  lensProcessOptions: LensProcessOptionList;
  /** 查询当前处方的每一个处方配置的选项列表, 并根据用户的输入给出错误/警告等提示信息. */
  listAndValidateRxConfigs: Array<RxValidatedConfigItem>;
  /** Returns information about the current authenticated User */
  me?: Maybe<CurrentUser>;
  /** query customer product review */
  myProductReview?: Maybe<ProductReview>;
  /** query customer all commented product review records */
  myProductReviews: ProductReviewList;
  /** Returns the possible next states that the activeOrder can transition to */
  nextOrderStates: Array<Scalars['String']>;
  /**
   * Returns an Order based on the id. Note that in the Shop API, only orders belonging to the
   * currently-authenticated User may be queried.
   */
  order?: Maybe<Order>;
  /**
   * Returns an Order based on the order `code`. For guest Orders (i.e. Orders placed by non-authenticated Customers)
   * this query will only return the Order within 2 hours of the Order being placed. This allows an Order confirmation
   * screen to be shown immediately after completion of a guest checkout, yet prevents security risks of allowing
   * general anonymous access to Order data.
   */
  orderByCode?: Maybe<Order>;
  /** 查询指定流程步骤下的可用流程选项配置列表 */
  processConfigsOfStep: LensProcessStepQueryResult;
  /** Get a Product either by id or slug. If neither 'id' nor 'slug' is specified, an error will result. */
  product?: Maybe<Product>;
  /** 查询当前产品配置的模版可用的steps步骤 */
  productConfiguredProcessSteps: Array<LensStepGroups>;
  /** Query detail of product qa entity */
  productQa?: Maybe<ProductQa>;
  /** Query all product qas */
  productQas: ProductQaList;
  productRecommendations: Array<ProductRecommendation>;
  /** Get a ProductReview either by id or slug. If neither 'id' nor 'slug' is specified, an error will result. */
  productReview?: Maybe<ProductReview>;
  /** query all reviews of this product */
  productReviews: ProductReviewList;
  /** query product reviews witch contains images */
  productWithImageReviews: ProductReviewList;
  /** Get a list of Products */
  products: ProductList;
  /** Get related reviews of specificed product review */
  relatedReviews: Array<ProductReview>;
  /** Query all lens user rx list */
  rxList: RxList;
  /** Search Products based on the criteria set by the `SearchInput` */
  search: SearchResponse;
  /** Query detail of setting entity */
  setting?: Maybe<Setting>;
  /** Query all setting list */
  settings: SettingList;
  /** Get testimonials from reviews */
  testimonialReviews: Array<ProductReview>;
  ticket?: Maybe<Ticket>;
  tickets: TicketList;
  /** Query detail of topic entity */
  topic?: Maybe<Topic>;
  /** Query all topiclinks */
  topicLinks: TopicLinkList;
  /** Query all topics */
  topics: TopicList;
  unionMain: UnionMain;
};
export declare type QueryAvailableProductVariantsToReviewArgs = {
  options?: InputMaybe<ProductVariantListOptions>;
};
export declare type QueryBannerArgs = {
  id?: InputMaybe<Scalars['ID']>;
  key?: InputMaybe<Scalars['String']>;
};
export declare type QueryBannersArgs = {
  options?: InputMaybe<BannerListOptions>;
};
export declare type QueryCanReviewProductVariantArgs = {
  productVariantId: Scalars['ID'];
};
export declare type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};
export declare type QueryCollectionsArgs = {
  options?: InputMaybe<CollectionListOptions>;
};
export declare type QueryCustomerTryonFaceModelsArgs = {
  count?: InputMaybe<Scalars['Int']>;
};
export declare type QueryFacetArgs = {
  id: Scalars['ID'];
};
export declare type QueryFacetsArgs = {
  options?: InputMaybe<FacetListOptions>;
};
export declare type QueryFavoriteArgs = {
  productVariantId: Scalars['ID'];
};
export declare type QueryFavoritesArgs = {
  options?: InputMaybe<FavoriteListOptions>;
  productVariantNameFilter?: InputMaybe<Scalars['String']>;
};
export declare type QueryGetCampaignInfoArgs = {
  code: Scalars['String'];
};
export declare type QueryHelpCenterArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};
export declare type QueryHelpCenterCollectionArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};
export declare type QueryHelpCenterCollectionsArgs = {
  options?: InputMaybe<HelpCenterCollectionListOptions>;
};
export declare type QueryHelpCenterHotSearchesArgs = {
  options?: InputMaybe<HelpCenterHotSearchListOptions>;
};
export declare type QueryHelpCenterTagArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};
export declare type QueryHelpCenterTagsArgs = {
  options?: InputMaybe<HelpCenterTagListOptions>;
};
export declare type QueryHelpCentersArgs = {
  collectionIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  options?: InputMaybe<HelpCenterListOptions>;
  tagIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};
export declare type QueryHelpSummarizeArgs = {
  options?: InputMaybe<HelpSummarizeOptions>;
};
export declare type QueryLensProcessConfigItemsArgs = {
  options?: InputMaybe<LensProcessConfigItemListOptions>;
};
export declare type QueryLensProcessOptionsArgs = {
  options?: InputMaybe<LensProcessOptionListOptions>;
};
export declare type QueryListAndValidateRxConfigsArgs = {
  input: ListAndValidateRxConfigsInput;
};
export declare type QueryMyProductReviewArgs = {
  id: Scalars['ID'];
};
export declare type QueryMyProductReviewsArgs = {
  options?: InputMaybe<ProductReviewListOptions>;
};
export declare type QueryOrderArgs = {
  id: Scalars['ID'];
};
export declare type QueryOrderByCodeArgs = {
  code: Scalars['String'];
};
export declare type QueryProcessConfigsOfStepArgs = {
  input: ProcessConfigsOfStepInput;
};
export declare type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};
export declare type QueryProductConfiguredProcessStepsArgs = {
  productId: Scalars['ID'];
};
export declare type QueryProductQaArgs = {
  id: Scalars['ID'];
};
export declare type QueryProductQasArgs = {
  options?: InputMaybe<ProductQaListOptions>;
  productId: Scalars['ID'];
};
export declare type QueryProductRecommendationsArgs = {
  productId: Scalars['ID'];
};
export declare type QueryProductReviewArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};
export declare type QueryProductReviewsArgs = {
  options?: InputMaybe<ProductReviewListOptions>;
  productId: Scalars['ID'];
};
export declare type QueryProductWithImageReviewsArgs = {
  options?: InputMaybe<ProductReviewListOptions>;
  productId: Scalars['ID'];
};
export declare type QueryProductsArgs = {
  options?: InputMaybe<ProductListOptions>;
};
export declare type QueryRelatedReviewsArgs = {
  id: Scalars['ID'];
  productId: Scalars['ID'];
};
export declare type QueryRxListArgs = {
  options?: InputMaybe<RxListOptions>;
};
export declare type QuerySearchArgs = {
  input: SearchInput;
};
export declare type QuerySettingArgs = {
  id?: InputMaybe<Scalars['ID']>;
  key?: InputMaybe<Scalars['String']>;
};
export declare type QuerySettingsArgs = {
  options?: InputMaybe<SettingListOptions>;
};
export declare type QueryTestimonialReviewsArgs = {
  count?: InputMaybe<Scalars['Int']>;
};
export declare type QueryTicketArgs = {
  ticketId: Scalars['ID'];
};
export declare type QueryTicketsArgs = {
  options?: InputMaybe<TicketListOptions>;
};
export declare type QueryTopicArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};
export declare type QueryTopicLinksArgs = {
  options?: InputMaybe<TopicLinkListOptions>;
};
export declare type QueryTopicsArgs = {
  options?: InputMaybe<TopicListOptions>;
};
export declare enum RecommendationType {
  CROSSSELL = 'CROSSSELL',
  UPSELL = 'UPSELL',
}
export declare type RefreshCustomerVerificationResult = NativeAuthStrategyError | Success;
export declare type Refund = Node & {
  __typename?: 'Refund';
  adjustment: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  items: Scalars['Int'];
  metadata?: Maybe<Scalars['JSON']>;
  method?: Maybe<Scalars['String']>;
  orderItems: Array<OrderItem>;
  paymentId: Scalars['ID'];
  reason?: Maybe<Scalars['String']>;
  shipping: Scalars['Int'];
  state: Scalars['String'];
  total: Scalars['Int'];
  transactionId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};
export declare type RegisterCustomerAccountResult =
  | MissingPasswordError
  | NativeAuthStrategyError
  | PasswordValidationError
  | Success;
export declare type RegisterCustomerCustomFieldsInput = {
  birthday?: InputMaybe<Scalars['String']>;
  faceshape?: InputMaybe<Scalars['String']>;
  languageCode?: InputMaybe<Scalars['String']>;
};
export declare type RegisterCustomerInput = {
  customFields?: InputMaybe<RegisterCustomerCustomFieldsInput>;
  emailAddress: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};
export declare type RelationCustomFieldConfig = CustomField & {
  __typename?: 'RelationCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  entity: Scalars['String'];
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  scalarFields: Array<Scalars['String']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};
export declare type RemoveOrderItemsResult = Order | OrderModificationError;
export declare type RequestPasswordResetResult = NativeAuthStrategyError | Success;
export declare type RequestUpdateCustomerEmailAddressResult =
  | EmailAddressConflictError
  | InvalidCredentialsError
  | NativeAuthStrategyError
  | Success;
export declare type ResetPasswordResult =
  | CurrentUser
  | NativeAuthStrategyError
  | NotVerifiedError
  | PasswordResetTokenExpiredError
  | PasswordResetTokenInvalidError
  | PasswordValidationError;
export declare type Role = Node & {
  __typename?: 'Role';
  channels: Array<Channel>;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  permissions: Array<Permission>;
  updatedAt: Scalars['DateTime'];
};
export declare type RoleList = PaginatedList & {
  __typename?: 'RoleList';
  items: Array<Role>;
  totalItems: Scalars['Int'];
};
export declare type Rx = Node & {
  __typename?: 'Rx';
  /** 左右眼视力: 老花, Distance 不展示 */
  add?: Maybe<Scalars['String']>;
  /** 用户年龄 */
  age?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  /** 处方单对应的客户信息 */
  customer?: Maybe<Customer>;
  /** 针对游泳镜, 项链镜, 用户可以只输入度数即可加入购物车. */
  directDegrees?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** 是否标记为默认处方 */
  isDefault: Scalars['Boolean'];
  /** 处方单名称 */
  name?: Maybe<Scalars['String']>;
  /** 处方一般情况下需要将用户处方转换成标准处方数据, 此处用来存储标准转换之后的处方数据 */
  normalizedRx?: Maybe<NormalizedRx>;
  /** 右眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  odAxis?: Maybe<Scalars['String']>;
  /** 右眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  odCyl?: Maybe<Scalars['String']>;
  /** 右眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  odSph?: Maybe<Scalars['String']>;
  /** 左眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  osAxis?: Maybe<Scalars['String']>;
  /** 左眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  osCyl?: Maybe<Scalars['String']>;
  /** 左眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  osSph?: Maybe<Scalars['String']>;
  /** 双眼PD,单位为1 */
  pd?: Maybe<Scalars['String']>;
  /** 左眼瞳距, 单眼PD, 单位为0.5 */
  pdLeft?: Maybe<Scalars['String']>;
  /** 右眼瞳距, 单眼PD, 单位为0.5 */
  pdRight?: Maybe<Scalars['String']>;
  /** 棱镜, 标准处方可选值 */
  prism?: Maybe<PrismItem>;
  /** 当针对老花的时候,可以允许用户直接选择一个度数 */
  reading?: Maybe<Scalars['String']>;
  /** 处方的备注信息 */
  rxComments?: Maybe<Scalars['String']>;
  /** 处方类型, 老花处方/标准处方 */
  rxType: RxType;
  updatedAt: Scalars['DateTime'];
};
export declare type RxFilterParameter = {
  add?: InputMaybe<StringOperators>;
  age?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  directDegrees?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  isDefault?: InputMaybe<BooleanOperators>;
  name?: InputMaybe<StringOperators>;
  odAxis?: InputMaybe<StringOperators>;
  odCyl?: InputMaybe<StringOperators>;
  odSph?: InputMaybe<StringOperators>;
  osAxis?: InputMaybe<StringOperators>;
  osCyl?: InputMaybe<StringOperators>;
  osSph?: InputMaybe<StringOperators>;
  pd?: InputMaybe<StringOperators>;
  pdLeft?: InputMaybe<StringOperators>;
  pdRight?: InputMaybe<StringOperators>;
  reading?: InputMaybe<StringOperators>;
  rxComments?: InputMaybe<StringOperators>;
  rxType?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};
export declare type RxItemConfig = Node & {
  __typename?: 'RxItemConfig';
  /** 配置项的加价 */
  adjustPrice: Scalars['Int'];
  id: Scalars['ID'];
  /** 当前选项的详细注解, 详细标注当前选项包含的内容 */
  introduction?: Maybe<Array<Scalars['String']>>;
  languageCode: LanguageCode;
  /** 处方配置项展示名 */
  name: Scalars['String'];
  /** 处方匹配数据源默认的选中值, 可被规则引擎执行结果动态覆盖. */
  rxDefaultValue: Scalars['String'];
  /** 当前数据源匹配的输入规则, 标识当前选项在在获取其数据源的时候产生的数据规则校验. */
  rxInputRules?: Maybe<Array<Scalars['JSON']>>;
  /** 处方数据配置项名称 */
  rxItemName: RxItemName;
  /** 用来存放消息当前配置想所有用到的消息体 */
  rxMessages?: Maybe<Scalars['JSON']>;
  /** 当前rxItemName的选择项数据源配置, 处方里面每一项的数据都是下拉框数据源展示模式. */
  rxOptions?: Maybe<Scalars['JSON']>;
  /** 处方类型, 标准处方/老花处方 */
  rxType?: Maybe<RxType>;
  translations: Array<RxItemConfigTranslation>;
};
export declare type RxItemConfigList = PaginatedList & {
  __typename?: 'RxItemConfigList';
  items: Array<RxItemConfig>;
  totalItems: Scalars['Int'];
};
export declare type RxItemConfigTranslation = {
  __typename?: 'RxItemConfigTranslation';
  id: Scalars['ID'];
  /** 当前选项的详细注解, 详细标注当前选项包含的内容 */
  introduction?: Maybe<Array<Scalars['String']>>;
  languageCode: LanguageCode;
  /** 处方配置项展示名 */
  name: Scalars['String'];
  /** 用来存放消息当前配置想所有用到的消息体 */
  rxMessages?: Maybe<Scalars['JSON']>;
};
export declare enum RxItemMessageType {
  /** 错误信息, 用户必须要解决掉重新验证, 才能进入下一步 */
  error = 'error',
  /** 其他提示文本信息 */
  info = 'info',
  /** 其他标签文本信息 */
  label = 'label',
  /** 警告错误, 用户可以选择同意忽略在前端 */
  warn = 'warn',
}
/** 处方单项指标数据类型名称标识 */
export declare enum RxItemName {
  /** 特殊:此特殊的配置规则仅仅用来当保存按钮的时候校验, 不做其他用途 */
  ACTION_SAVE_VERIFICATION = 'ACTION_SAVE_VERIFICATION',
  /** 当用户选择镜片类型为: 渐进(multifocal), 老花(reading)才展示给用户选择 */
  ADD = 'ADD',
  /** 用户年龄, 7-79, 80+ */
  AGE = 'AGE',
  /** 针对游泳镜, 项链镜, 用户可以只输入度数即可加入购物车. */
  DIRECT_DEGREES = 'DIRECT_DEGREES',
  /** 右眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  OD_AXIS = 'OD_AXIS',
  /** 右眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  OD_CYL = 'OD_CYL',
  /** 右眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  OD_SPH = 'OD_SPH',
  /** 左眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  OS_AXIS = 'OS_AXIS',
  /** 左眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  OS_CYL = 'OS_CYL',
  /** 左眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  OS_SPH = 'OS_SPH',
  /** 双眼PD, 单位为1 */
  PD = 'PD',
  /** 左眼瞳距, 单眼PD，单位为0.5 */
  PD_LEFT = 'PD_LEFT',
  /** 右眼瞳距, 单眼PD，单位为0.5 */
  PD_RIGHT = 'PD_RIGHT',
  /** 棱镜, 标准处方可选配置 */
  PRISM = 'PRISM',
  /** 当针对老花的时候,可以允许用户直接选择一个度数, 用户也可以切换到标准处方自定义. */
  READING = 'READING',
}
export declare type RxList = PaginatedList & {
  __typename?: 'RxList';
  items: Array<Rx>;
  totalItems: Scalars['Int'];
};
export declare type RxListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<RxFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<RxSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};
export declare type RxRuleDefineValidateAction = {
  __typename?: 'RxRuleDefineValidateAction';
  /** 规则验证信息的i18n多国语言消息KEY */
  actionMessageKey?: Maybe<Scalars['String']>;
  /** 规则验证的结果类型, 此处类型如果为error,则需要强制选择 */
  actionMessageType?: Maybe<RxItemMessageType>;
  /** 当前的action对应的action可选数据对象items对象结构 */
  actionOptionItems?: Maybe<Array<RxValidatedResultActionOptionItem>>;
  /** 可选值, 当前如果进行全局验证触发特殊的action规则, 比如popup/流程切换, 切换平光流程等. */
  actionType?: Maybe<RxValidatedResultActionType>;
  /** 当前action的显示顺序, 越大越优先显示, 最终显示给用户时, 如果同时存在多action, 需要排序. */
  displayOrder: Scalars['Int'];
};
export declare type RxSortParameter = {
  add?: InputMaybe<SortOrder>;
  age?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  directDegrees?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  odAxis?: InputMaybe<SortOrder>;
  odCyl?: InputMaybe<SortOrder>;
  odSph?: InputMaybe<SortOrder>;
  osAxis?: InputMaybe<SortOrder>;
  osCyl?: InputMaybe<SortOrder>;
  osSph?: InputMaybe<SortOrder>;
  pd?: InputMaybe<SortOrder>;
  pdLeft?: InputMaybe<SortOrder>;
  pdRight?: InputMaybe<SortOrder>;
  reading?: InputMaybe<SortOrder>;
  rxComments?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};
/** 处方类型, 老花处方/标准处方 */
export declare enum RxType {
  /** 针对游泳镜, 项链镜, 用户可以只输入度数即可加入购物车. */
  DIRECT_DEGREES = 'DIRECT_DEGREES',
  /** 标准处方: 老花处方 */
  READING = 'READING',
  /** 标准处方: 自定义选项 */
  STANDARD = 'STANDARD',
}
/** 每一项规则验证处理之后的配置项数据 */
export declare type RxValidatedConfigItem = {
  __typename?: 'RxValidatedConfigItem';
  /** 选择当前action行为的价格调整 */
  adjustPrice: Scalars['Int'];
  /** 当前选项是否处于disabled状态 */
  disabled: Scalars['Boolean'];
  /** 当前选项的详细注解, 详细标注当前选项包含的内容 */
  introduction: Array<Scalars['String']>;
  /** 处方配置项展示名 */
  name: Scalars['String'];
  /** 当前处方配置项的默认选中的值 */
  rxDefaultValue: Scalars['String'];
  /** 处方数据配置项名称 */
  rxItemName: RxItemName;
  /** 当前rxItemName的选择项数据源配置, 处方里面每一项的数据都是下拉框数据源展示模式. */
  rxOptions: Array<Scalars['String']>;
  /** 处方类型, 老花处方/标准处方/直接选度数(游泳镜,项链镜)的处方 */
  rxType: RxType;
  /** 当前规则验证结果之后, 可能会携带的数据. */
  rxValidateAction: Array<RxValidatedResultAction>;
  /** 当前配置项目规则校验结果 */
  rxValidateResult: Array<RxValidatedResult>;
};
/** 规则验证结果 */
export declare type RxValidatedResult = {
  __typename?: 'RxValidatedResult';
  /** 规则验证结果国际化消息提示 */
  messageText?: Maybe<Scalars['String']>;
  /** 规则验证的结果类型 */
  messageType?: Maybe<RxItemMessageType>;
  /** 处方数据配置项名称 */
  rxItemName: RxItemName;
  /** 当前的校验的规则名 */
  rxRuleName: Scalars['String'];
};
export declare type RxValidatedResultAction = {
  __typename?: 'RxValidatedResultAction';
  /** 规则验证信息的i18n多国语言消息 */
  actionMessageText?: Maybe<Scalars['String']>;
  /** 规则验证的结果类型 */
  actionMessageType?: Maybe<RxItemMessageType>;
  /** 当前的action对应的action可选数据对象items对象结构 */
  actionOptionItems?: Maybe<Array<RxValidatedResultActionOptionItem>>;
  /** 可选值, 当前如果进行全局验证触发特殊的action规则, 比如popup/流程切换, 切换平光流程等. */
  actionType?: Maybe<RxValidatedResultActionType>;
  /** 当前action的显示顺序, 越大越优先显示, 最终显示给用户时, 如果同时存在多action, 需要排序. */
  displayOrder: Scalars['Int'];
};
export declare type RxValidatedResultActionOptionItem = {
  __typename?: 'RxValidatedResultActionOptionItem';
  /** 当前action项的名称, 如加钱, 当成唯一KEY来使用 */
  actionItemKey: Scalars['String'];
  /** 选择当前action行为的价格调整 */
  adjustPrice: Scalars['Int'];
  /** 当前action项的名称, 如加钱项, 多国语言的翻译名称, 会显示到加价理由上. 有的选项不需要消息提示. */
  i18nName?: Maybe<Scalars['String']>;
  /** 当前action 配置项目配置变量, 比如专题页面URL */
  variables: RxValidatedResultActionOptionItemVariables;
};
export declare type RxValidatedResultActionOptionItemVariables = {
  __typename?: 'RxValidatedResultActionOptionItemVariables';
  /** 搜索选项facet的特征列表.可根据产品查询出来, 动态匹配. */
  facets?: Maybe<Array<RxValidatedResultActionOptionItemVariablesFacet>>;
  /** 搜索选项minLensDiam必须<=如下值+PD */
  maxMinLensDiam?: Maybe<Scalars['Int']>;
};
export declare type RxValidatedResultActionOptionItemVariablesFacet = {
  __typename?: 'RxValidatedResultActionOptionItemVariablesFacet';
  name: Scalars['String'];
  values: Array<Scalars['String']>;
};
/** 当前处方save进行联合校验, 返回特殊actionType */
export declare enum RxValidatedResultActionType {
  /** 弹窗提示用户进行流程切换到平光 */
  POPUP_CONFIRM_PROCESS_CHANGE_TO_NON_PRESCRIPTION = 'POPUP_CONFIRM_PROCESS_CHANGE_TO_NON_PRESCRIPTION',
  /** 跳转到高处方的对应分类过滤页面: 'High prescription frames' */
  POPUP_FILTER_FRAME_WITH_HIGHT_PRESCRIPTION = 'POPUP_FILTER_FRAME_WITH_HIGHT_PRESCRIPTION',
  /** 双眼PD偏心或换镜架弹窗(新处方), 加偏心费10$或者按照规则重新筛选产品 */
  POPUP_FILTER_FRAME_WITH_MIN_LENS_DIAM = 'POPUP_FILTER_FRAME_WITH_MIN_LENS_DIAM',
}
export declare type SaveUserProcessConfigStepInput = {
  /** 当前STEP选项下的选中的ID列表 */
  lensOptionInputs: Array<UserProcessConfigStepLensOptionInput>;
  orderLineId: Scalars['ID'];
  quantity: Scalars['Int'];
  /** 当前步骤 */
  step: LensStepGroups;
  /** T0进入镜片流程用户上下文, 来源某一个分类等上下文信息 */
  t0LensCtxInput?: InputMaybe<LensProcessT0Inputs>;
  /** T2处方用户输入的数据 */
  t2LensRxInput?: InputMaybe<LensProcessT2Inputs>;
  /** T2用户特殊的ACTION自定义选项, 如加偏心等行为的集合 */
  t2UserActionInputs?: InputMaybe<Array<LensProcessT2UserActionInput>>;
};
export declare type SearchInput = {
  collectionId?: InputMaybe<Scalars['ID']>;
  collectionSlug?: InputMaybe<Scalars['String']>;
  facetValueFilters?: InputMaybe<Array<FacetValueFilterInput>>;
  facetValueIds?: InputMaybe<Array<Scalars['ID']>>;
  facetValueOperator?: InputMaybe<LogicalOperator>;
  groupByProduct?: InputMaybe<Scalars['Boolean']>;
  inStock?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SearchResultSortParameter>;
  take?: InputMaybe<Scalars['Int']>;
  term?: InputMaybe<Scalars['String']>;
};
export declare type SearchReindexResponse = {
  __typename?: 'SearchReindexResponse';
  success: Scalars['Boolean'];
};
export declare type SearchResponse = {
  __typename?: 'SearchResponse';
  collections: Array<CollectionResult>;
  facetValues: Array<FacetValueResult>;
  items: Array<SearchResult>;
  totalItems: Scalars['Int'];
};
export declare type SearchResult = {
  __typename?: 'SearchResult';
  /** An array of ids of the Collections in which this result appears */
  collectionIds: Array<Scalars['ID']>;
  currencyCode: CurrencyCode;
  description: Scalars['String'];
  facetIds: Array<Scalars['ID']>;
  facetValueIds: Array<Scalars['ID']>;
  inStock: Scalars['Boolean'];
  price: SearchResultPrice;
  priceWithTax: SearchResultPrice;
  productAsset?: Maybe<SearchResultAsset>;
  productId: Scalars['ID'];
  productName: Scalars['String'];
  productVariantAsset?: Maybe<SearchResultAsset>;
  productVariantId: Scalars['ID'];
  productVariantName: Scalars['String'];
  /** A relevance score for the result. Differs between database implementations */
  score: Scalars['Float'];
  sku: Scalars['String'];
  slug: Scalars['String'];
};
export declare type SearchResultAsset = {
  __typename?: 'SearchResultAsset';
  focalPoint?: Maybe<Coordinate>;
  id: Scalars['ID'];
  preview: Scalars['String'];
};
/** The price of a search result product, either as a range or as a single price */
export declare type SearchResultPrice = PriceRange | SinglePrice;
export declare type SearchResultSortParameter = {
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
};
export declare type SetCustomerForOrderResult =
  | AlreadyLoggedInError
  | EmailAddressConflictError
  | NoActiveOrderError
  | Order;
export declare type SetOrderShippingMethodResult =
  | IneligibleShippingMethodError
  | NoActiveOrderError
  | Order
  | OrderModificationError;
export declare type Setting = Node & {
  __typename?: 'Setting';
  createdAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  key: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['JSON'];
};
export declare type SettingFilterParameter = {
  createdAt?: InputMaybe<DateOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  key?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};
export declare type SettingList = PaginatedList & {
  __typename?: 'SettingList';
  items: Array<Setting>;
  totalItems: Scalars['Int'];
};
export declare type SettingListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<SettingFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<SettingSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};
export declare type SettingSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};
export declare type SettlePaymentInput = {
  orderId: Scalars['ID'];
  transactionId: Scalars['String'];
};
export declare type ShippingLine = {
  __typename?: 'ShippingLine';
  discountedPrice: Scalars['Int'];
  discountedPriceWithTax: Scalars['Int'];
  discounts: Array<Discount>;
  price: Scalars['Int'];
  priceWithTax: Scalars['Int'];
  shippingMethod: ShippingMethod;
};
export declare type ShippingMethod = Node & {
  __typename?: 'ShippingMethod';
  calculator: ConfigurableOperation;
  checker: ConfigurableOperation;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  description: Scalars['String'];
  fulfillmentHandlerCode: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  translations: Array<ShippingMethodTranslation>;
  updatedAt: Scalars['DateTime'];
};
export declare type ShippingMethodList = PaginatedList & {
  __typename?: 'ShippingMethodList';
  items: Array<ShippingMethod>;
  totalItems: Scalars['Int'];
};
export declare type ShippingMethodQuote = {
  __typename?: 'ShippingMethodQuote';
  code: Scalars['String'];
  customFields?: Maybe<Scalars['JSON']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  /** Any optional metadata returned by the ShippingCalculator in the ShippingCalculationResult */
  metadata?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  price: Scalars['Int'];
  priceWithTax: Scalars['Int'];
};
export declare type ShippingMethodTranslation = {
  __typename?: 'ShippingMethodTranslation';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};
/** The price value where the result has a single price */
export declare type SinglePrice = {
  __typename?: 'SinglePrice';
  value: Scalars['Int'];
};
export declare enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}
export declare type StringCustomFieldConfig = CustomField & {
  __typename?: 'StringCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  length?: Maybe<Scalars['Int']>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  options?: Maybe<Array<StringFieldOption>>;
  pattern?: Maybe<Scalars['String']>;
  readonly?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};
export declare type StringFieldOption = {
  __typename?: 'StringFieldOption';
  label?: Maybe<Array<LocalizedString>>;
  value: Scalars['String'];
};
/** Operators for filtering on a list of String fields */
export declare type StringListOperators = {
  inList: Scalars['String'];
};
/** Operators for filtering on a String field */
export declare type StringOperators = {
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  notContains?: InputMaybe<Scalars['String']>;
  notEq?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  regex?: InputMaybe<Scalars['String']>;
};
export declare type Subscription = Node & {
  __typename?: 'Subscription';
  createdAt: Scalars['DateTime'];
  enabled: Scalars['Boolean'];
  facetValues: Array<SubscriptionFacetValue>;
  id: Scalars['ID'];
  languageCode: LanguageCode;
  subscribeFrom: Scalars['String'];
  type: SubscriptionType;
  updatedAt: Scalars['DateTime'];
  value: Scalars['String'];
};
export declare type SubscriptionFacet = Node & {
  __typename?: 'SubscriptionFacet';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  values: Array<SubscriptionFacetValue>;
};
export declare type SubscriptionFacetList = PaginatedList & {
  __typename?: 'SubscriptionFacetList';
  items: Array<SubscriptionFacet>;
  totalItems: Scalars['Int'];
};
export declare type SubscriptionFacetValue = Node & {
  __typename?: 'SubscriptionFacetValue';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  facet: Facet;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};
export declare type SubscriptionFacetValueList = PaginatedList & {
  __typename?: 'SubscriptionFacetValueList';
  items: Array<SubscriptionFacetValue>;
  totalItems: Scalars['Int'];
};
export declare type SubscriptionList = PaginatedList & {
  __typename?: 'SubscriptionList';
  items: Array<Subscription>;
  totalItems: Scalars['Int'];
};
export declare enum SubscriptionType {
  email = 'email',
  phone = 'phone',
}
/** Indicates that an operation succeeded, where we do not want to return any more specific information. */
export declare type Success = {
  __typename?: 'Success';
  success: Scalars['Boolean'];
};
export declare type Surcharge = Node & {
  __typename?: 'Surcharge';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  price: Scalars['Int'];
  priceWithTax: Scalars['Int'];
  sku?: Maybe<Scalars['String']>;
  taxLines: Array<TaxLine>;
  taxRate: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};
export declare type Tag = Node & {
  __typename?: 'Tag';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['String'];
};
export declare type TagList = PaginatedList & {
  __typename?: 'TagList';
  items: Array<Tag>;
  totalItems: Scalars['Int'];
};
export declare type TaxCategory = Node & {
  __typename?: 'TaxCategory';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  isDefault: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};
export declare type TaxLine = {
  __typename?: 'TaxLine';
  description: Scalars['String'];
  taxRate: Scalars['Float'];
};
export declare type TaxRate = Node & {
  __typename?: 'TaxRate';
  category: TaxCategory;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  customerGroup?: Maybe<CustomerGroup>;
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['Float'];
  zone: Zone;
};
export declare type TaxRateList = PaginatedList & {
  __typename?: 'TaxRateList';
  items: Array<TaxRate>;
  totalItems: Scalars['Int'];
};
export declare type TextCustomFieldConfig = CustomField & {
  __typename?: 'TextCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  nullable?: Maybe<Scalars['Boolean']>;
  readonly?: Maybe<Scalars['Boolean']>;
  type: Scalars['String'];
  ui?: Maybe<Scalars['JSON']>;
};
export declare type Ticket = Node & {
  __typename?: 'Ticket';
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  issue: Scalars['String'];
  languageCode: LanguageCode;
  owner: Customer;
  subject: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};
export declare type TicketCollection = Node & {
  __typename?: 'TicketCollection';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  languageCode: LanguageCode;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  translations: Array<TicketCollectionTranslation>;
  updatedAt: Scalars['DateTime'];
};
export declare type TicketCollectionList = PaginatedList & {
  __typename?: 'TicketCollectionList';
  items: Array<TicketCollection>;
  totalItems: Scalars['Int'];
};
export declare type TicketCollectionTranslation = Node & {
  __typename?: 'TicketCollectionTranslation';
  id: Scalars['ID'];
  /** 当前语言 */
  languageCode: LanguageCode;
  metaDescription?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  /** 当前选项的名称 */
  name: Scalars['String'];
  slug: Scalars['String'];
};
export declare type TicketComment = Node & {
  __typename?: 'TicketComment';
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  owner: Customer;
  ticket: Ticket;
  updatedAt: Scalars['DateTime'];
};
export declare type TicketFilterParameter = {
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  issue?: InputMaybe<StringOperators>;
  languageCode?: InputMaybe<StringOperators>;
  subject?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};
export declare type TicketGroup = Node & {
  __typename?: 'TicketGroup';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  members: Array<Customer>;
  name: Scalars['String'];
  public: Scalars['Boolean'];
  sendMailTo: Array<Customer>;
  updatedAt: Scalars['DateTime'];
};
export declare type TicketHistory = Node & {
  __typename?: 'TicketHistory';
  action: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  owner: Customer;
  ticket: Ticket;
  updatedAt: Scalars['DateTime'];
};
export declare type TicketList = PaginatedList & {
  __typename?: 'TicketList';
  items: Array<Ticket>;
  totalItems: Scalars['Int'];
};
export declare type TicketListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<TicketFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<TicketSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};
export declare type TicketNote = Node & {
  __typename?: 'TicketNote';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  note: Scalars['String'];
  owner: Customer;
  ticket: Ticket;
  updatedAt: Scalars['DateTime'];
};
export declare type TicketPriority = Node & {
  __typename?: 'TicketPriority';
  createdAt: Scalars['DateTime'];
  htmlColor: Scalars['String'];
  id: Scalars['ID'];
  overdueIn: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};
export declare type TicketSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  issue?: InputMaybe<SortOrder>;
  subject?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};
export declare type TicketTag = Node & {
  __typename?: 'TicketTag';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};
export declare type TicketType = Node & {
  __typename?: 'TicketType';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  priorities: Array<TicketPriority>;
  updatedAt: Scalars['DateTime'];
};
export declare type Topic = Node & {
  __typename?: 'Topic';
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  helpfulNo: Scalars['Int'];
  helpfulYes: Scalars['Int'];
  id: Scalars['ID'];
  metaDescription: Scalars['String'];
  metaTitle: Scalars['String'];
  name: Scalars['String'];
  published: Scalars['Boolean'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};
export declare type TopicFilterParameter = {
  body?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  helpfulNo?: InputMaybe<NumberOperators>;
  helpfulYes?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  metaDescription?: InputMaybe<StringOperators>;
  metaTitle?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  published?: InputMaybe<BooleanOperators>;
  slug?: InputMaybe<StringOperators>;
  title?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};
export declare type TopicLink = Node & {
  __typename?: 'TopicLink';
  coverImage?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  displayOrder: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
  parentId?: Maybe<Scalars['Int']>;
  position: Scalars['String'];
  published: Scalars['Boolean'];
  redirectTo: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};
export declare type TopicLinkFilterParameter = {
  coverImage?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  displayOrder?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  parentId?: InputMaybe<NumberOperators>;
  position?: InputMaybe<StringOperators>;
  published?: InputMaybe<BooleanOperators>;
  redirectTo?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};
export declare type TopicLinkList = PaginatedList & {
  __typename?: 'TopicLinkList';
  items: Array<TopicLink>;
  totalItems: Scalars['Int'];
};
export declare type TopicLinkListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<TopicLinkFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<TopicLinkSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};
export declare enum TopicLinkPosition {
  SiteFooter = 'SiteFooter',
  SiteHelperCenter = 'SiteHelperCenter',
  SiteTopNav = 'SiteTopNav',
  SiteVideoGuide = 'SiteVideoGuide',
}
export declare type TopicLinkSortParameter = {
  coverImage?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayOrder?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  redirectTo?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};
export declare type TopicList = PaginatedList & {
  __typename?: 'TopicList';
  items: Array<Topic>;
  totalItems: Scalars['Int'];
};
export declare type TopicListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<TopicFilterParameter>;
  /** Specifies whether multiple "filter" arguments should be combines with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<TopicSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']>;
};
export declare type TopicSortParameter = {
  body?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  helpfulNo?: InputMaybe<SortOrder>;
  helpfulYes?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metaDescription?: InputMaybe<SortOrder>;
  metaTitle?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};
export declare type TransitionOrderToStateResult = Order | OrderStateTransitionError;
/** 轮廓第一个点位置百分比信息 */
export declare type TryonFaceContourEarPoints = {
  __typename?: 'TryonFaceContourEarPoints';
  /** 左轮廓第一个点(轮廓到左耳朵)占据人脸图片的位置百分比信息 */
  left: TryonFacePoint;
  /** 右轮廓第一个点(轮廓到右耳朵)占据人脸图片的位置百分比信息 */
  right: TryonFacePoint;
};
/** 双眼中心点位置百分比信息 */
export declare type TryonFaceEyeCenterPoints = {
  __typename?: 'TryonFaceEyeCenterPoints';
  /** 左眼中心点占据人脸图片的位置百分比信息 */
  left: TryonFacePoint;
  /** 右眼中心点占据人脸图片的位置百分比信息 */
  right: TryonFacePoint;
};
/** 缩放之后最终进行人脸识别的真实模特照片大小尺寸 */
export declare type TryonFaceImageRealSize = {
  __typename?: 'TryonFaceImageRealSize';
  /** 模特照片高 */
  height: Scalars['Int'];
  /** 模特照片宽 */
  width: Scalars['Int'];
};
/** 模特照片人脸模型 */
export declare type TryonFaceModel = Node & {
  __typename?: 'TryonFaceModel';
  /** 用户信息 */
  customerId?: Maybe<Scalars['ID']>;
  /** 人脸特征识别关键点位置 */
  facePoints: TryonFacePoints;
  /** 人脸框的宽度占据整个真实图片的百分比 */
  faceRectWidthRatio: Scalars['Float'];
  /** 人脸姿势分析结果。返回值包含以下属性，每个属性的值为一个 [-180, 180] 的浮点数，小数点后 6 位有效数字。单位为角度。 */
  headPose: TryonHeadPosePoints;
  id: Scalars['ID'];
  /** 上传的进行人脸识别的图片ID */
  imageId: Scalars['String'];
  /** 缩放之后的真实模特真实图片大小 */
  imageRealSize: TryonFaceImageRealSize;
  /** 模特图片信息 */
  modelAsset?: Maybe<Asset>;
  /** 模特PD, 男性: 66, 女性60, 可根据实际情况调整模特的效果. */
  userPd?: Maybe<Scalars['Int']>;
};
export declare type TryonFaceModelList = PaginatedList & {
  __typename?: 'TryonFaceModelList';
  items: Array<TryonFaceModel>;
  totalItems: Scalars['Int'];
};
/** 相对左上角为原点, 人脸特征点Point(x,y) */
export declare type TryonFacePoint = {
  __typename?: 'TryonFacePoint';
  /** 点的x位置占据的百分比 */
  x: Scalars['Float'];
  /** 点的y位置占据的百分比 */
  y: Scalars['Float'];
};
/** 人脸特征识别关键点位置 */
export declare type TryonFacePoints = {
  __typename?: 'TryonFacePoints';
  /** 轮廓第一个点位置百分比信息 */
  contourEar: TryonFaceContourEarPoints;
  /** 双眼中心点位置百分比信息 */
  eyeCenter: TryonFaceEyeCenterPoints;
};
/** 人脸姿势分析结果。返回值包含以下属性，每个属性的值为一个 [-180, 180] 的浮点数，小数点后 6 位有效数字。单位为角度。 */
export declare type TryonHeadPosePoints = {
  __typename?: 'TryonHeadPosePoints';
  /** 人头”真实“ 抬头 下正上负 */
  pitch: Scalars['Float'];
  /** 摆头（歪头）人头”真实“ 左偏头为正, 右偏头为负 */
  roll: Scalars['Float'];
  /** 人头”真实“ 摇头, 左正右负 */
  yaw: Scalars['Float'];
};
/** 图片真实尺寸 */
export declare type TryonImageRealSize = {
  __typename?: 'TryonImageRealSize';
  height: Scalars['Int'];
  width: Scalars['Int'];
};
/** 链接点数据 */
export declare type TryonJoint = {
  __typename?: 'TryonJoint';
  /** 左链接点 */
  left: TryonPoint;
  /** 右链接点 */
  right: TryonPoint;
};
/** 试戴模型图片百分比位置配置数据 */
export declare type TryonModelConfig = {
  __typename?: 'TryonModelConfig';
  /** 试戴模型frame配置数据 */
  frame: TryonModelConfigFrame;
  /** 试戴模型temple配置数据 */
  temple: TryonModelConfigTemple;
};
export declare type TryonModelConfigFrame = {
  __typename?: 'TryonModelConfigFrame';
  /** frame图片连接点位置百分比 */
  frameJoint: TryonJoint;
  framePd: Scalars['Int'];
  /** frame图片真实的尺寸大小 */
  imageRealSize: TryonImageRealSize;
};
export declare type TryonModelConfigTemple = {
  __typename?: 'TryonModelConfigTemple';
  /** temple图片真实的尺寸大小 */
  imageRealSize: TryonImageRealSize;
  /** temple图片链接点位置百分比 */
  templeJoint: TryonJoint;
};
export declare type TryonPoint = {
  __typename?: 'TryonPoint';
  x: Scalars['Float'];
  y: Scalars['Float'];
};
export declare type UnionMain = {
  __typename?: 'UnionMain';
  /** All settings from plugin-banner */
  banners: Array<Banner>;
  /** Best seller products of home page */
  bestSellerProducts: Array<SearchResult>;
  /** All collections */
  collections: Array<Collection>;
  /** All footer topic links */
  footerTopicLinks: Array<TopicLink>;
  /** New Arrivals products of home page */
  newArrivalsProducts: Array<SearchResult>;
  /** All settings from plugin-setting */
  settings: Array<Setting>;
  /** testimonial reviews of aboutus page */
  testimonialReviews: Array<ProductReview>;
  /** All video guide topic links */
  videoGuideTopicLinks: Array<TopicLink>;
};
export declare type UpdateAddressInput = {
  city?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<Scalars['JSON']>;
  defaultBillingAddress?: InputMaybe<Scalars['Boolean']>;
  defaultShippingAddress?: InputMaybe<Scalars['Boolean']>;
  fullName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  province?: InputMaybe<Scalars['String']>;
  streetLine1?: InputMaybe<Scalars['String']>;
  streetLine2?: InputMaybe<Scalars['String']>;
};
export declare type UpdateCustomerCustomFieldsInput = {
  birthday?: InputMaybe<Scalars['String']>;
  faceshape?: InputMaybe<Scalars['String']>;
  languageCode?: InputMaybe<Scalars['String']>;
};
export declare type UpdateCustomerEmailAddressResult =
  | IdentifierChangeTokenExpiredError
  | IdentifierChangeTokenInvalidError
  | NativeAuthStrategyError
  | Success;
export declare type UpdateCustomerInput = {
  customFields?: InputMaybe<UpdateCustomerCustomFieldsInput>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};
export declare type UpdateCustomerPasswordResult =
  | InvalidCredentialsError
  | NativeAuthStrategyError
  | PasswordValidationError
  | Success;
export declare type UpdateHelpCenterHelpfulInput = {
  helpfulNo?: InputMaybe<Scalars['Boolean']>;
  helpfulYes?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};
export declare type UpdateOrderCustomFieldsInput = {
  languageCode?: InputMaybe<Scalars['String']>;
};
export declare type UpdateOrderInput = {
  customFields?: InputMaybe<UpdateOrderCustomFieldsInput>;
};
export declare type UpdateOrderItemsResult =
  | InsufficientStockError
  | NegativeQuantityError
  | Order
  | OrderLimitError
  | OrderModificationError;
export declare type UpdateProductQaHelpfulInput = {
  helpfulYes?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};
export declare type UpdateProductReviewInput = {
  content?: InputMaybe<Scalars['String']>;
  customerNameIsPublic?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  rating?: InputMaybe<Scalars['Int']>;
  suggestions?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};
export declare type UpdateRxInput = {
  /** 左右眼视力: 老花, Distance 不展示 */
  add?: InputMaybe<Scalars['String']>;
  /** 用户年龄 */
  age?: InputMaybe<Scalars['String']>;
  /** 针对游泳镜, 项链镜, 用户可以只输入度数即可加入购物车. */
  directDegrees?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  /** 是否标记为默认处方 */
  isDefault?: InputMaybe<Scalars['Boolean']>;
  /** 处方单名称 */
  name?: InputMaybe<Scalars['String']>;
  /** 右眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  odAxis?: InputMaybe<Scalars['String']>;
  /** 右眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  odCyl?: InputMaybe<Scalars['String']>;
  /** 右眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  odSph?: InputMaybe<Scalars['String']>;
  /** 左眼视力: 散光轴度。散光度数在眼球发生的角度，0-180度之间 */
  osAxis?: InputMaybe<Scalars['String']>;
  /** 左眼视力: 柱镜度数（即散光）+正的指的是远视散光, -负指的是近视散光 */
  osCyl?: InputMaybe<Scalars['String']>;
  /** 左眼视力: 球镜（近视、远视度数) +表示远视， —表示近视 */
  osSph?: InputMaybe<Scalars['String']>;
  /** 双眼PD,单位为1 */
  pd?: InputMaybe<Scalars['String']>;
  /** 左眼瞳距, 单眼PD, 单位为0.5 */
  pdLeft?: InputMaybe<Scalars['String']>;
  /** 右眼瞳距, 单眼PD, 单位为0.5 */
  pdRight?: InputMaybe<Scalars['String']>;
  /** 棱镜, 标准处方可选值 */
  prism?: InputMaybe<PrismItemInput>;
  /** 当针对老花的时候,可以允许用户直接选择一个度数, 用户也可以切换到标准处方自定义. */
  reading?: InputMaybe<Scalars['String']>;
  /** 处方的备注信息 */
  rxComments?: InputMaybe<Scalars['String']>;
  /** 处方类型, 老花处方/标准处方 */
  rxType: RxType;
};
export declare type UpdateTopicHelpfulInput = {
  helpfulNo?: InputMaybe<Scalars['Boolean']>;
  helpfulYes?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};
export declare type User = Node & {
  __typename?: 'User';
  authenticationMethods: Array<AuthenticationMethod>;
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  identifier: Scalars['String'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  roles: Array<Role>;
  updatedAt: Scalars['DateTime'];
  verified: Scalars['Boolean'];
};
export declare type UserActionOptionItemsVariablesData = {
  __typename?: 'UserActionOptionItemsVariablesData';
  /** 搜索选项facet的特征列表.可根据产品查询出来, 动态匹配. */
  facets?: Maybe<Array<UserActionOptionItemsVariablesInputFacetData>>;
  /** 搜索选项minLensDiam必须<=如下值+PD */
  maxMinLensDiam?: Maybe<Scalars['Int']>;
};
export declare type UserActionOptionItemsVariablesInput = {
  /** 搜索选项facet的特征列表.可根据产品查询出来, 动态匹配. */
  facets?: InputMaybe<Array<UserActionOptionItemsVariablesInputFacetInput>>;
  /** 搜索选项minLensDiam必须<=如下值+PD */
  maxMinLensDiam?: InputMaybe<Scalars['Int']>;
};
export declare type UserActionOptionItemsVariablesInputFacetData = {
  __typename?: 'UserActionOptionItemsVariablesInputFacetData';
  name: Scalars['String'];
  values: Array<Scalars['String']>;
};
export declare type UserActionOptionItemsVariablesInputFacetInput = {
  name: Scalars['String'];
  values: Array<Scalars['String']>;
};
export declare type UserProcessConfigStepLensOptionInput = {
  /** 用户选择的用途选项模块对应的ID */
  lensProcessOptionId: Scalars['ID'];
  /** 用户选择的用户选项模块对应的选项Key */
  lensProcessOptionKey?: InputMaybe<LensProcessOptionKeys>;
};
export declare type UserProcessConfigStepLensOptionItem = {
  __typename?: 'UserProcessConfigStepLensOptionItem';
  /** 用户选择的用途选项模块对应的ID */
  lensProcessOptionId: Scalars['ID'];
  /** 用户选择的用户选项模块对应的选项Key */
  lensProcessOptionKey?: Maybe<LensProcessOptionKeys>;
};
/**
 * Returned if the verification token (used to verify a Customer's email address) is valid, but has
 * expired according to the `verificationTokenDuration` setting in the AuthOptions.
 */
export declare type VerificationTokenExpiredError = ErrorResult & {
  __typename?: 'VerificationTokenExpiredError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};
/**
 * Returned if the verification token (used to verify a Customer's email address) is either
 * invalid or does not match any expected tokens.
 */
export declare type VerificationTokenInvalidError = ErrorResult & {
  __typename?: 'VerificationTokenInvalidError';
  errorCode: ErrorCode;
  message: Scalars['String'];
};
export declare type VerifyCustomerAccountResult =
  | CurrentUser
  | MissingPasswordError
  | NativeAuthStrategyError
  | PasswordAlreadySetError
  | PasswordValidationError
  | VerificationTokenExpiredError
  | VerificationTokenInvalidError;
export declare type Zone = Node & {
  __typename?: 'Zone';
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  members: Array<Country>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};
export declare type AddressFragment = {
  __typename?: 'Address';
  id: string | number;
  createdAt: any;
  updatedAt: any;
  fullName?: string;
  company?: string;
  streetLine1: string;
  streetLine2?: string;
  province?: string;
  city?: string;
  phoneNumber?: string;
  customFields?: any;
  postalCode?: string;
  defaultBillingAddress?: boolean;
  defaultShippingAddress?: boolean;
  country: {
    __typename?: 'Country';
    id: string | number;
    code: string;
    name: string;
  };
};
export declare type AssetFragment = {
  __typename?: 'Asset';
  id: string | number;
  name: string;
  source: string;
  preview: string;
  width: number;
  height: number;
};
export declare type BannerFragment = {
  __typename?: 'Banner';
  id: string | number;
  key: string;
  link: string;
  name: string;
  lgImage: string;
  xsImage: string;
  shortDesc: any;
};
export declare type CampaignFragment = {
  __typename?: 'Campaign';
  id: string | number;
  name?: string;
  shortDesc?: string;
  code: string;
  lgImage?: string;
  xsImage?: string;
  campaignType: CampaignType;
  needClaimCoupon?: boolean;
  applyForBeforeData: {
    __typename?: 'CampaignApplyForBeforeData';
    title: string;
    subTitle: Array<string>;
    textBoxPlaceholder?: string;
    buttonText?: string;
    policyText: string;
    ruleText: Array<string>;
  };
  applyForResultData?: {
    __typename?: 'CampaignApplyForResultData';
    expiryLabel: string;
    termsCondition: string;
    ruleText: Array<string>;
  };
  promotion?: {
    __typename?: 'Promotion';
    id: string | number;
    couponCode?: string;
  };
};
export declare type CampaignCouponFragment = {
  __typename?: 'CampaignCoupon';
  id: string | number;
  emailAddress: string;
  couponCode: string;
  endsAt?: any;
  campaign: {
    __typename?: 'Campaign';
  } & CampaignFragment;
};
export declare type PaymentMethodQuoteFragment = {
  __typename?: 'PaymentMethodQuote';
  id: string | number;
  code: string;
  name: string;
  description: string;
  isEligible: boolean;
  eligibilityMessage?: string;
  paypalClientConfig?: {
    __typename?: 'PaymentMethodPaypalClientConfig';
    clientId: string;
  };
};
export declare type ShippingMethodQuoteFragment = {
  __typename?: 'ShippingMethodQuote';
  id: string | number;
  price: number;
  priceWithTax: number;
  code: string;
  name: string;
  description: string;
  metadata?: any;
};
export declare type CustomerFragment = {
  __typename?: 'Customer';
  id: string | number;
  title?: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber?: string;
  customFields?: {
    __typename?: 'CustomerCustomFields';
    birthday?: string;
    faceshape?: string;
  };
  addresses?: Array<
    {
      __typename?: 'Address';
    } & AddressFragment
  >;
};
export declare type ProductFacetFragment = {
  __typename?: 'Facet';
  id: string | number;
  name: string;
  code: string;
  customFields?: {
    __typename?: 'FacetCustomFields';
    displayOrder?: number;
    invisible?: boolean;
  };
};
export declare type ProductFacetValueFragment = {
  __typename?: 'FacetValue';
  id: string | number;
  name: string;
  code: string;
  customFields?: {
    __typename?: 'FacetValueCustomFields';
    icon?: string;
  };
  facet: {
    __typename?: 'Facet';
  } & ProductFacetFragment;
};
export declare type FavoriteFragment = {
  __typename?: 'Favorite';
  id: string | number;
  createdAt: any;
  productVariant?: {
    __typename?: 'ProductVariant';
    id: string | number;
    name: string;
    featuredAsset?: {
      __typename?: 'Asset';
    } & AssetFragment;
    product: {
      __typename?: 'Product';
      id: string | number;
      name: string;
      slug: string;
    };
  };
};
export declare type HelpCenterSummaryFragment = {
  __typename?: 'HelpCenter';
  id: string | number;
  title: string;
  shortDesc?: string;
  slug: string;
};
export declare type HelpCenterSummaryWithCollectionFragment = {
  __typename?: 'HelpCenter';
  id: string | number;
  title: string;
  shortDesc?: string;
  slug: string;
  collections: Array<{
    __typename?: 'HelpCenterCollection';
    id: string | number;
    name: string;
    slug: string;
  }>;
};
export declare type HelpCenterCollectionSummaryFragment = {
  __typename?: 'HelpCenterCollection';
  id: string | number;
  name: string;
  shortDesc?: string;
  coverImage?: string;
  slug: string;
};
export declare type HelpCenterTagSummaryFragment = {
  __typename?: 'HelpCenterTag';
  id: string | number;
  name: string;
  slug: string;
};
export declare type HelpCenterHotSearchFragment = {
  __typename?: 'HelpCenterHotSearch';
  id: string | number;
  keyword: string;
  published: boolean;
};
export declare type HelpCenterFragment = {
  __typename?: 'HelpCenter';
  id: string | number;
  createdAt: any;
  updatedAt: any;
  title: string;
  shortDesc?: string;
  body: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  showOnTop: boolean;
  helpfulYes: number;
  helpfulNo: number;
  published: boolean;
  displayOrder: number;
  tags: Array<
    {
      __typename?: 'HelpCenterTag';
    } & HelpCenterTagSummaryFragment
  >;
  collections: Array<
    {
      __typename?: 'HelpCenterCollection';
    } & HelpCenterCollectionSummaryFragment
  >;
  relatedArticles: Array<
    {
      __typename?: 'HelpCenter';
    } & HelpCenterSummaryFragment
  >;
};
export declare type HelpCenterTagFragment = {
  __typename?: 'HelpCenterTag';
  id: string | number;
  name: string;
  published: boolean;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  helpArticles: {
    __typename?: 'HelpCenterList';
    totalItems: number;
    items: Array<{
      __typename?: 'HelpCenter';
      id: string | number;
      title: string;
      shortDesc?: string;
      showOnTop: boolean;
      slug: string;
      tags: Array<
        {
          __typename?: 'HelpCenterTag';
        } & HelpCenterTagSummaryFragment
      >;
      collections: Array<
        {
          __typename?: 'HelpCenterCollection';
        } & HelpCenterCollectionSummaryFragment
      >;
    }>;
  };
};
export declare type HelpCenterCollectionFragment = {
  __typename?: 'HelpCenterCollection';
  id: string | number;
  name: string;
  shortDesc?: string;
  coverImage?: string;
  showOnTop: boolean;
  published: boolean;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumbs: Array<{
    __typename?: 'HelpCenterCollectionBreadcrumb';
    id: string | number;
    name: string;
    slug: string;
  }>;
  children?: Array<
    {
      __typename?: 'HelpCenterCollection';
    } & HelpCenterCollectionSummaryFragment
  >;
  helpArticles: {
    __typename?: 'HelpCenterList';
    totalItems: number;
    items: Array<{
      __typename?: 'HelpCenter';
      id: string | number;
      title: string;
      shortDesc?: string;
      showOnTop: boolean;
      slug: string;
      tags: Array<
        {
          __typename?: 'HelpCenterTag';
        } & HelpCenterTagSummaryFragment
      >;
      collections: Array<
        {
          __typename?: 'HelpCenterCollection';
        } & HelpCenterCollectionSummaryFragment
      >;
    }>;
  };
};
export declare type LensProcessOptionFragment = {
  __typename?: 'LensProcessOption';
  id: string | number;
  createdAt: any;
  updatedAt: any;
  name: string;
  shortDesc: string;
  introduction?: Array<string>;
  feature?: string;
  upgradeText?: string;
  icon?: string;
  key?: LensProcessOptionKeys;
  requiredPreSelectedKeys?: Array<LensProcessOptionKeys>;
  dependentFromT3Key?: LensProcessOptionKeys;
  upgradeToKeys?: Array<LensProcessOptionKeys>;
  stepGroupName: LensStepGroups;
  adjustPrice: number;
  recommend: boolean;
  parentId?: string | number;
  preview?: {
    __typename?: 'LensProcessOptionPreview';
    opacity?: number;
    visualMask?: string;
    isPhotochromic?: boolean;
  };
  uiComponents?: {
    __typename?: 'LensOptionUiComponents';
    uiType?: LensOptionUiComponentsType;
    uiValue?: string;
    childComponentType?: LensOptionUiComponentsType;
  };
  parent?: {
    __typename?: 'LensProcessOptionParent';
    id: string | number;
  };
};
export declare type DiscountFragment = {
  __typename?: 'Discount';
  type: AdjustmentType;
  amount: number;
  amountWithTax: number;
  description: string;
  adjustmentSource: string;
};
export declare type OrderLineLensConfigStepFragment = {
  __typename?: 'OrderLineLensConfigStep';
  step?: LensStepGroups;
  lensOptionInputs: Array<{
    __typename?: 'UserProcessConfigStepLensOptionItem';
    lensProcessOptionId: string | number;
    lensProcessOptionKey?: LensProcessOptionKeys;
  }>;
  lensUserConfigItems: Array<{
    __typename?: 'OrderLineLensUserConfigItem';
    i18nName: string;
    shortDesc?: string;
    adjustPrice: number;
    introduction?: Array<string>;
    preview?: {
      __typename?: 'LensProcessOptionPreview';
      opacity?: number;
      visualMask?: string;
      isPhotochromic?: boolean;
    };
    uiComponents?: {
      __typename?: 'LensOptionUiComponents';
      uiType?: LensOptionUiComponentsType;
      uiValue?: string;
    };
  }>;
};
export declare type OrderLineLensConfigRxStepFragment = {
  __typename?: 'OrderLineLensConfigRxStep';
  step?: LensStepGroups;
  lensOptionInputs: Array<{
    __typename?: 'UserProcessConfigStepLensOptionItem';
    lensProcessOptionId: string | number;
    lensProcessOptionKey?: LensProcessOptionKeys;
  }>;
  lensUserConfigItems: Array<{
    __typename?: 'OrderLineLensUserConfigItem';
    i18nName: string;
    adjustPrice: number;
    shortDesc?: string;
    introduction?: Array<string>;
    uiComponents?: {
      __typename?: 'LensOptionUiComponents';
      uiType?: LensOptionUiComponentsType;
      uiValue?: string;
    };
  }>;
  t2LensRxInput?: {
    __typename?: 'LensProcessT2UserInputtedRxData';
    odSph?: string;
    osSph?: string;
    odCyl?: string;
    osCyl?: string;
    odAxis?: string;
    osAxis?: string;
    add?: string;
    pd?: string;
    pdLeft?: string;
    pdRight?: string;
    age?: string;
    reading?: string;
    directDegrees?: string;
    rxType: RxType;
    rxComments?: string;
    prism?: {
      __typename?: 'PrismItem';
    } & PrismItemFragment;
  };
  t2UserActionInputs?: Array<{
    __typename?: 'LensProcessT2UserActionData';
    i18nName?: string;
    actionItemKey: string;
    adjustPrice: number;
    variables: {
      __typename?: 'UserActionOptionItemsVariablesData';
      maxMinLensDiam?: number;
      facets?: Array<{
        __typename?: 'UserActionOptionItemsVariablesInputFacetData';
        name: string;
        values: Array<string>;
      }>;
    };
  }>;
};
export declare type OrderLineItemFulfillmentFragment = {
  __typename?: 'Fulfillment';
  id: string | number;
  state: string;
  method: string;
  trackingCode?: string;
};
export declare type OrderLineItemFragment = {
  __typename?: 'OrderItem';
  id: string | number;
  fulfillment?: {
    __typename?: 'Fulfillment';
  } & OrderLineItemFulfillmentFragment;
};
export declare type OrderLineLensConfigsFragment = {
  __typename?: 'OrderLineLensConfigs';
  lensUnitPrice?: number;
  lensStepsDone?: boolean;
  T0?: {
    __typename?: 'OrderLineLensConfigT0Context';
    step?: LensStepGroups;
    productId: string | number;
    productVariantId: string | number;
    collectionId?: string | number;
  };
  T1?: {
    __typename?: 'OrderLineLensConfigStep';
  } & OrderLineLensConfigStepFragment;
  T2?: {
    __typename?: 'OrderLineLensConfigRxStep';
  } & OrderLineLensConfigRxStepFragment;
  T3?: {
    __typename?: 'OrderLineLensConfigStep';
  } & OrderLineLensConfigStepFragment;
  T4?: {
    __typename?: 'OrderLineLensConfigStep';
  } & OrderLineLensConfigStepFragment;
  campaignView?: {
    __typename?: 'OrderLineLensCampaignView';
    endsAt?: any;
    lensPrice?: string;
    lensPromotionText?: string;
    framePromotionText?: string;
  };
};
export declare type OrderAddressFragment = {
  __typename?: 'OrderAddress';
  fullName?: string;
  company?: string;
  phoneNumber?: string;
  streetLine1?: string;
  streetLine2?: string;
  countryCode?: string;
  country?: string;
  city?: string;
  province?: string;
  postalCode?: string;
  customFields?: any;
};
export declare type ShippingLineFragment = {
  __typename?: 'ShippingLine';
  price: number;
  priceWithTax: number;
  shippingMethod: {
    __typename?: 'ShippingMethod';
    id: string | number;
    code: string;
    name: string;
    description: string;
  };
};
export declare type OrderLineFragment = {
  __typename?: 'OrderLine';
  id: string | number;
  quantity: number;
  unitPrice: number;
  unitPriceWithTax: number;
  linePrice: number;
  linePriceWithTax: number;
  discountedUnitPrice: number;
  discountedUnitPriceWithTax: number;
  discountedLinePrice: number;
  discountedLinePriceWithTax: number;
  lensConfigs?: {
    __typename?: 'OrderLineLensConfigs';
  } & OrderLineLensConfigsFragment;
  items: Array<
    {
      __typename?: 'OrderItem';
    } & OrderLineItemFragment
  >;
  productVariant: {
    __typename?: 'ProductVariant';
  } & ProductOrderLineVariantFragment;
};
export declare type RefundFragment = {
  __typename?: 'Refund';
  id: string | number;
  reason?: string;
  paymentId: string | number;
  transactionId?: string;
  method?: string;
  state: string;
  adjustment: number;
  metadata?: any;
  total: number;
  createdAt: any;
};
export declare type PaymentFragment = {
  __typename?: 'Payment';
  id: string | number;
  amount: number;
  updatedAt: any;
  method: string;
  state: string;
  transactionId?: string;
  errorMessage?: string;
  metadata?: any;
  refunds: Array<
    {
      __typename?: 'Refund';
    } & RefundFragment
  >;
};
export declare type OrderTaxSummaryFragment = {
  __typename?: 'OrderTaxSummary';
  taxBase: number;
  taxRate: number;
  taxTotal: number;
  description: string;
};
export declare type PromotionFragment = {
  __typename?: 'Promotion';
  id: string | number;
  name: string;
  enabled: boolean;
  startsAt?: any;
  endsAt?: any;
  couponCode?: string;
  perCustomerUsageLimit?: number;
};
export declare type OrderHistoryEntryFragment = {
  __typename?: 'HistoryEntry';
  id: string | number;
  data: any;
  type: HistoryEntryType;
  updatedAt: any;
};
export declare type OrderFragment = {
  __typename?: 'Order';
  id: string | number;
  code: string;
  state: string;
  active: boolean;
  createdAt: any;
  orderPlacedAt?: any;
  currencyCode: CurrencyCode;
  totalQuantity: number;
  subTotal: number;
  subTotalWithTax: number;
  total: number;
  totalWithTax: number;
  shipping: number;
  shippingWithTax: number;
  couponCodes: Array<string>;
  invoice?: {
    __typename?: 'Invoice';
    id: string | number;
    downloadUrl: string;
    invoiceNumber: number;
  };
  discounts: Array<
    {
      __typename?: 'Discount';
    } & DiscountFragment
  >;
  taxSummary: Array<
    {
      __typename?: 'OrderTaxSummary';
    } & OrderTaxSummaryFragment
  >;
  availableCoupons: Array<
    {
      __typename?: 'CampaignCoupon';
    } & CampaignCouponFragment
  >;
  payments?: Array<
    {
      __typename?: 'Payment';
    } & PaymentFragment
  >;
  history: {
    __typename?: 'HistoryEntryList';
    items: Array<
      {
        __typename?: 'HistoryEntry';
      } & OrderHistoryEntryFragment
    >;
  };
  shippingLines: Array<
    {
      __typename?: 'ShippingLine';
    } & ShippingLineFragment
  >;
  shippingAddress?: {
    __typename?: 'OrderAddress';
  } & OrderAddressFragment;
  billingAddress?: {
    __typename?: 'OrderAddress';
  } & OrderAddressFragment;
  lines: Array<
    {
      __typename?: 'OrderLine';
    } & OrderLineFragment
  >;
  customer?: {
    __typename?: 'Customer';
  } & CustomerFragment;
};
export declare type ProductOptionFragment = {
  __typename?: 'ProductOption';
  id: string | number;
  name: string;
  code: string;
  groupId: string | number;
  customFields?: {
    __typename?: 'ProductOptionCustomFields';
    value?: string;
  };
  group: {
    __typename?: 'ProductOptionGroup';
    name: string;
  };
};
export declare type ProductOptionGroupFragment = {
  __typename?: 'ProductOptionGroup';
  id: string | number;
  code: string;
  name: string;
  options: Array<
    {
      __typename?: 'ProductOption';
    } & ProductOptionFragment
  >;
};
export declare type ProductQaFragment = {
  __typename?: 'ProductQa';
  id: string | number;
  createdAt: any;
  question: string;
  replyCreatedAt?: any;
  reply?: string;
  helpful: number;
  productId: string | number;
};
export declare type ProductReviewFragment = {
  __typename?: 'ProductReview';
  id: string | number;
  createdAt: any;
  updatedAt: any;
  languageCode: LanguageCode;
  metaTitle?: string;
  metaDescription?: string;
  title?: string;
  content: string;
  slug?: string;
  suggestions?: string;
  rating: number;
  upVotes: number;
  downVotes: number;
  state: string;
  reply?: string;
  replyCreatedAt?: any;
  customerName?: string;
  customerNameIsPublic: boolean;
  reviewAsset?: {
    __typename?: 'Asset';
  } & AssetFragment;
  relatedReviews: Array<{
    __typename?: 'ProductReview';
    id: string | number;
    slug?: string;
    title?: string;
    metaTitle?: string;
  }>;
  product?: {
    __typename?: 'Product';
    id: string | number;
    name: string;
    slug: string;
    reviewAvg: number;
    reviewsHistogram: Array<{
      __typename?: 'ProductReviewHistogramItem';
      bin: number;
      frequency: number;
    }>;
    customFields?: {
      __typename?: 'ProductCustomFields';
      metaTitle?: string;
      reviewRating?: number;
      reviewCount?: number;
    };
  };
  productVariant?: {
    __typename?: 'ProductVariant';
    id: string | number;
    name: string;
    sku: string;
    featuredAsset?: {
      __typename?: 'Asset';
    } & AssetFragment;
  };
};
export declare type ProductVariantFrameFieldsFragment = {
  __typename?: 'ProductVariantFrame';
  tryonFrameAsset?: {
    __typename?: 'Asset';
  } & AssetFragment;
  tryonTempleAsset?: {
    __typename?: 'Asset';
  } & AssetFragment;
  tryonFrameModelConfig?: {
    __typename?: 'TryonModelConfig';
    frame: {
      __typename?: 'TryonModelConfigFrame';
      framePd: number;
      frameJoint: {
        __typename?: 'TryonJoint';
        left: {
          __typename?: 'TryonPoint';
          x: number;
          y: number;
        };
        right: {
          __typename?: 'TryonPoint';
          x: number;
          y: number;
        };
      };
      imageRealSize: {
        __typename?: 'TryonImageRealSize';
        height: number;
        width: number;
      };
    };
    temple: {
      __typename?: 'TryonModelConfigTemple';
      imageRealSize: {
        __typename?: 'TryonImageRealSize';
        height: number;
        width: number;
      };
      templeJoint: {
        __typename?: 'TryonJoint';
        left: {
          __typename?: 'TryonPoint';
          x: number;
          y: number;
        };
        right: {
          __typename?: 'TryonPoint';
          x: number;
          y: number;
        };
      };
    };
  };
  visualFrameAsset?: {
    __typename?: 'Asset';
  } & AssetFragment;
  dimensionFrameAsset?: {
    __typename?: 'Asset';
  } & AssetFragment;
  dimensionTempleAsset?: {
    __typename?: 'Asset';
  } & AssetFragment;
};
export declare type ProductVariantFragment = {
  __typename?: 'ProductVariant';
  id: string | number;
  sku: string;
  price: number;
  name: string;
  priceWithTax: number;
  currencyCode: CurrencyCode;
  stockLevel: string;
  favorite?: {
    __typename?: 'Favorite';
    id: string | number;
  };
  campaignView?: {
    __typename?: 'ProductVariantCampaignView';
    framePrice?: string;
    framePromotionText?: string;
    lensPromotionText?: string;
    endsAt?: any;
  };
  featuredAsset?: {
    __typename?: 'Asset';
  } & AssetFragment;
  assets: Array<
    {
      __typename?: 'Asset';
    } & AssetFragment
  >;
  frameFields?: {
    __typename?: 'ProductVariantFrame';
  } & ProductVariantFrameFieldsFragment;
  options: Array<
    {
      __typename?: 'ProductOption';
    } & ProductOptionFragment
  >;
};
export declare type ProductVariantSimpleFragment = {
  __typename?: 'ProductVariant';
  id: string | number;
  sku: string;
  name: string;
  price: number;
  priceWithTax: number;
  currencyCode: CurrencyCode;
  campaignView?: {
    __typename?: 'ProductVariantCampaignView';
    framePrice?: string;
    framePromotionText?: string;
    lensPromotionText?: string;
    endsAt?: any;
  };
  favorite?: {
    __typename?: 'Favorite';
    id: string | number;
  };
  featuredAsset?: {
    __typename?: 'Asset';
  } & AssetFragment;
  options: Array<
    {
      __typename?: 'ProductOption';
    } & ProductOptionFragment
  >;
};
export declare type ProductOrderLineVariantFragment = {
  __typename?: 'ProductVariant';
  id: string | number;
  name: string;
  sku: string;
  product: {
    __typename?: 'Product';
    id: string | number;
    slug: string;
    frameFields?: {
      __typename?: 'ProductFrame';
      isFinishProduct: boolean;
    };
  };
  campaignView?: {
    __typename?: 'ProductVariantCampaignView';
    framePrice?: string;
    framePromotionText?: string;
    lensPromotionText?: string;
    endsAt?: any;
  };
  featuredAsset?: {
    __typename?: 'Asset';
  } & AssetFragment;
  frameFields?: {
    __typename?: 'ProductVariantFrame';
  } & ProductVariantFrameFieldsFragment;
  options: Array<
    {
      __typename?: 'ProductOption';
    } & ProductOptionFragment
  >;
};
export declare type ProductFrameFieldsFragment = {
  __typename?: 'ProductFrame';
  bridge: number;
  framePd: number;
  isFinishProduct: boolean;
  lensDiagonalSize: number;
  lensHeight: number;
  lensWidth: number;
  minLensDiam: number;
  templeLength: number;
  weight: number;
  totalWidth: number;
  lensProcessTemplate?: {
    __typename?: 'LensProcessTemplate';
    id: string | number;
    name: string;
    description: string;
  };
  dimensionModelData?: {
    __typename?: 'DimensionModelData';
    bridge: {
      __typename?: 'DimensionModelDataItem';
      in: string;
      mm: string;
    };
    lensHeight: {
      __typename?: 'DimensionModelDataItem';
      in: string;
      mm: string;
    };
    totalWidth: {
      __typename?: 'DimensionModelDataItem';
      in: string;
      mm: string;
    };
    lensWidth: {
      __typename?: 'DimensionModelDataItem';
      in: string;
      mm: string;
    };
    templeLength: {
      __typename?: 'DimensionModelDataItem';
      in: string;
      mm: string;
    };
  };
  dimensionModelConfig?: {
    __typename?: 'DimensionModelConfig';
    bridge: Array<Array<string>>;
    lensWidth: Array<Array<string>>;
    totalWidth: Array<Array<string>>;
    lensHeight: Array<Array<string>>;
    templeLength: Array<Array<string>>;
  };
};
export declare type PrismItemFragment = {
  __typename?: 'PrismItem';
  odHorizontal?: string;
  odHorizontalDirection?: string;
  odVertical?: string;
  odVerticalDirection?: string;
  osHorizontal?: string;
  osHorizontalDirection?: string;
  osVertical?: string;
  osVerticalDirection?: string;
};
export declare type NormalizedRxFragment = {
  __typename?: 'NormalizedRx';
  add?: string;
  age?: string;
  directDegrees?: string;
  isDefault?: boolean;
  odAxis?: string;
  odCyl?: string;
  odSph?: string;
  osAxis?: string;
  osCyl?: string;
  osSph?: string;
  pd?: string;
  pdLeft?: string;
  pdRight?: string;
  reading?: string;
  rxComments?: string;
  rxType: RxType;
  prism?: {
    __typename?: 'PrismItem';
  } & PrismItemFragment;
};
export declare type RxFragment = {
  __typename?: 'Rx';
  id: string | number;
  name?: string;
  add?: string;
  age?: string;
  directDegrees?: string;
  isDefault: boolean;
  odAxis?: string;
  odCyl?: string;
  odSph?: string;
  osAxis?: string;
  osCyl?: string;
  osSph?: string;
  pd?: string;
  pdLeft?: string;
  pdRight?: string;
  createdAt: any;
  updatedAt: any;
  reading?: string;
  rxComments?: string;
  rxType: RxType;
  prism?: {
    __typename?: 'PrismItem';
  } & PrismItemFragment;
  normalizedRx?: {
    __typename?: 'NormalizedRx';
  } & NormalizedRxFragment;
};
export declare type RxValidatedResultFragment = {
  __typename?: 'RxValidatedResult';
  rxItemName: RxItemName;
  rxRuleName: string;
  messageType?: RxItemMessageType;
  messageText?: string;
};
export declare type RxValidatedResultActionOptionItemVariablesFacetFragment = {
  __typename?: 'RxValidatedResultActionOptionItemVariablesFacet';
  name: string;
  values: Array<string>;
};
export declare type RxValidatedResultActionOptionItemVariablesFragment = {
  __typename?: 'RxValidatedResultActionOptionItemVariables';
  maxMinLensDiam?: number;
  facets?: Array<
    {
      __typename?: 'RxValidatedResultActionOptionItemVariablesFacet';
    } & RxValidatedResultActionOptionItemVariablesFacetFragment
  >;
};
export declare type RxValidatedResultActionOptionItemFragment = {
  __typename?: 'RxValidatedResultActionOptionItem';
  actionItemKey: string;
  i18nName?: string;
  adjustPrice: number;
  variables: {
    __typename?: 'RxValidatedResultActionOptionItemVariables';
  } & RxValidatedResultActionOptionItemVariablesFragment;
};
export declare type RxValidatedResultActionFragment = {
  __typename?: 'RxValidatedResultAction';
  displayOrder: number;
  actionType?: RxValidatedResultActionType;
  actionMessageType?: RxItemMessageType;
  actionMessageText?: string;
  actionOptionItems?: Array<
    {
      __typename?: 'RxValidatedResultActionOptionItem';
    } & RxValidatedResultActionOptionItemFragment
  >;
};
export declare type RxValidatedConfigItemFragment = {
  __typename?: 'RxValidatedConfigItem';
  name: string;
  adjustPrice: number;
  introduction: Array<string>;
  rxType: RxType;
  disabled: boolean;
  rxItemName: RxItemName;
  rxOptions: Array<string>;
  rxDefaultValue: string;
  rxValidateResult: Array<
    {
      __typename?: 'RxValidatedResult';
    } & RxValidatedResultFragment
  >;
  rxValidateAction: Array<
    {
      __typename?: 'RxValidatedResultAction';
    } & RxValidatedResultActionFragment
  >;
};
export declare type SearchResultFragment = {
  __typename?: 'SearchResult';
  sku: string;
  slug: string;
  description: string;
  currencyCode: CurrencyCode;
  productId: string | number;
  productName: string;
  productVariantId: string | number;
  productVariantName: string;
  facetIds: Array<string | number>;
  facetValueIds: Array<string | number>;
  collectionIds: Array<string | number>;
  score: number;
  productVariantAsset?: {
    __typename?: 'SearchResultAsset';
    id: string | number;
    preview: string;
  };
  productAsset?: {
    __typename?: 'SearchResultAsset';
    id: string | number;
    preview: string;
  };
  price:
    | {
        __typename: 'PriceRange';
        min: number;
        max: number;
      }
    | {
        __typename: 'SinglePrice';
        value: number;
      };
  priceWithTax:
    | {
        __typename: 'PriceRange';
        min: number;
        max: number;
      }
    | {
        __typename: 'SinglePrice';
        value: number;
      };
};
export declare type SettingFragment = {
  __typename?: 'Setting';
  id: string | number;
  key: string;
  value: any;
  enabled: boolean;
};
export declare type DeletionResponseFragment = {
  __typename?: 'DeletionResponse';
  message?: string;
  result: DeletionResult;
};
export declare type ErrorResult_AlreadyLoggedInError_Fragment = {
  __typename?: 'AlreadyLoggedInError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResult_CouponCodeExpiredError_Fragment = {
  __typename?: 'CouponCodeExpiredError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResult_CouponCodeInvalidError_Fragment = {
  __typename?: 'CouponCodeInvalidError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResult_CouponCodeLimitError_Fragment = {
  __typename?: 'CouponCodeLimitError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResult_EmailAddressConflictError_Fragment = {
  __typename?: 'EmailAddressConflictError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResult_IdentifierChangeTokenExpiredError_Fragment = {
  __typename?: 'IdentifierChangeTokenExpiredError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResult_IdentifierChangeTokenInvalidError_Fragment = {
  __typename?: 'IdentifierChangeTokenInvalidError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResult_IneligiblePaymentMethodError_Fragment = {
  __typename?: 'IneligiblePaymentMethodError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResult_IneligibleShippingMethodError_Fragment = {
  __typename?: 'IneligibleShippingMethodError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResult_InsufficientStockError_Fragment = {
  __typename?: 'InsufficientStockError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResult_InvalidCredentialsError_Fragment = {
  __typename?: 'InvalidCredentialsError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResult_MissingPasswordError_Fragment = {
  __typename?: 'MissingPasswordError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResult_NativeAuthStrategyError_Fragment = {
  __typename?: 'NativeAuthStrategyError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResult_NegativeQuantityError_Fragment = {
  __typename?: 'NegativeQuantityError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResult_NoActiveOrderError_Fragment = {
  __typename?: 'NoActiveOrderError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResult_NotVerifiedError_Fragment = {
  __typename?: 'NotVerifiedError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResult_OrderLimitError_Fragment = {
  __typename?: 'OrderLimitError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResult_OrderModificationError_Fragment = {
  __typename?: 'OrderModificationError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResult_OrderPaymentStateError_Fragment = {
  __typename?: 'OrderPaymentStateError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResult_OrderStateTransitionError_Fragment = {
  __typename?: 'OrderStateTransitionError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResult_PasswordAlreadySetError_Fragment = {
  __typename?: 'PasswordAlreadySetError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResult_PasswordResetTokenExpiredError_Fragment = {
  __typename?: 'PasswordResetTokenExpiredError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResult_PasswordResetTokenInvalidError_Fragment = {
  __typename?: 'PasswordResetTokenInvalidError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResult_PasswordValidationError_Fragment = {
  __typename?: 'PasswordValidationError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResult_PaymentDeclinedError_Fragment = {
  __typename?: 'PaymentDeclinedError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResult_PaymentFailedError_Fragment = {
  __typename?: 'PaymentFailedError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResult_VerificationTokenExpiredError_Fragment = {
  __typename?: 'VerificationTokenExpiredError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResult_VerificationTokenInvalidError_Fragment = {
  __typename?: 'VerificationTokenInvalidError';
  errorCode: ErrorCode;
  message: string;
};
export declare type ErrorResultFragment =
  | ErrorResult_AlreadyLoggedInError_Fragment
  | ErrorResult_CouponCodeExpiredError_Fragment
  | ErrorResult_CouponCodeInvalidError_Fragment
  | ErrorResult_CouponCodeLimitError_Fragment
  | ErrorResult_EmailAddressConflictError_Fragment
  | ErrorResult_IdentifierChangeTokenExpiredError_Fragment
  | ErrorResult_IdentifierChangeTokenInvalidError_Fragment
  | ErrorResult_IneligiblePaymentMethodError_Fragment
  | ErrorResult_IneligibleShippingMethodError_Fragment
  | ErrorResult_InsufficientStockError_Fragment
  | ErrorResult_InvalidCredentialsError_Fragment
  | ErrorResult_MissingPasswordError_Fragment
  | ErrorResult_NativeAuthStrategyError_Fragment
  | ErrorResult_NegativeQuantityError_Fragment
  | ErrorResult_NoActiveOrderError_Fragment
  | ErrorResult_NotVerifiedError_Fragment
  | ErrorResult_OrderLimitError_Fragment
  | ErrorResult_OrderModificationError_Fragment
  | ErrorResult_OrderPaymentStateError_Fragment
  | ErrorResult_OrderStateTransitionError_Fragment
  | ErrorResult_PasswordAlreadySetError_Fragment
  | ErrorResult_PasswordResetTokenExpiredError_Fragment
  | ErrorResult_PasswordResetTokenInvalidError_Fragment
  | ErrorResult_PasswordValidationError_Fragment
  | ErrorResult_PaymentDeclinedError_Fragment
  | ErrorResult_PaymentFailedError_Fragment
  | ErrorResult_VerificationTokenExpiredError_Fragment
  | ErrorResult_VerificationTokenInvalidError_Fragment;
export declare type TopicFragment = {
  __typename?: 'Topic';
  id: string | number;
  name: string;
  slug: string;
  title: string;
  body: string;
  helpfulNo: number;
  helpfulYes: number;
  metaTitle: string;
  metaDescription: string;
  createdAt: any;
  updatedAt: any;
};
export declare type TopicLinkFragment = {
  __typename?: 'TopicLink';
  id: string | number;
  name: string;
  redirectTo: string;
  coverImage?: string;
  parentId?: number;
  position: string;
};
export declare type TryonFacePointsFragment = {
  __typename?: 'TryonFacePoints';
  contourEar: {
    __typename?: 'TryonFaceContourEarPoints';
    left: {
      __typename?: 'TryonFacePoint';
      x: number;
      y: number;
    };
    right: {
      __typename?: 'TryonFacePoint';
      x: number;
      y: number;
    };
  };
  eyeCenter: {
    __typename?: 'TryonFaceEyeCenterPoints';
    left: {
      __typename?: 'TryonFacePoint';
      x: number;
      y: number;
    };
    right: {
      __typename?: 'TryonFacePoint';
      x: number;
      y: number;
    };
  };
};
export declare type TryonFaceModelFragment = {
  __typename?: 'TryonFaceModel';
  id: string | number;
  customerId?: string | number;
  faceRectWidthRatio: number;
  userPd?: number;
  imageRealSize: {
    __typename?: 'TryonFaceImageRealSize';
    width: number;
    height: number;
  };
  facePoints: {
    __typename?: 'TryonFacePoints';
  } & TryonFacePointsFragment;
  headPose: {
    __typename?: 'TryonHeadPosePoints';
    pitch: number;
    roll: number;
    yaw: number;
  };
  modelAsset?: {
    __typename?: 'Asset';
  } & AssetFragment;
};
export declare type NextVerifyCustomerAccountMutationVariables = Exact<{
  token: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
}>;
export declare type NextVerifyCustomerAccountMutation = {
  verifyCustomerAccount:
    | {
        __typename: 'CurrentUser';
        id: string | number;
      }
    | {
        __typename: 'MissingPasswordError';
        errorCode: ErrorCode;
        message: string;
      }
    | {
        __typename: 'NativeAuthStrategyError';
        errorCode: ErrorCode;
        message: string;
      }
    | {
        __typename: 'PasswordAlreadySetError';
        errorCode: ErrorCode;
        message: string;
      }
    | {
        __typename: 'PasswordValidationError';
        errorCode: ErrorCode;
        message: string;
      }
    | {
        __typename: 'VerificationTokenExpiredError';
        errorCode: ErrorCode;
        message: string;
      }
    | {
        __typename: 'VerificationTokenInvalidError';
        errorCode: ErrorCode;
        message: string;
      };
};
export declare type NextUpdateCustomerMutationVariables = Exact<{
  input: UpdateCustomerInput;
}>;
export declare type NextUpdateCustomerMutation = {
  updateCustomer: {
    __typename?: 'Customer';
  } & CustomerFragment;
};
export declare type NextUpdateCustomerPasswordMutationVariables = Exact<{
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
}>;
export declare type NextUpdateCustomerPasswordMutation = {
  updateCustomerPassword:
    | {
        __typename: 'InvalidCredentialsError';
        errorCode: ErrorCode;
        message: string;
      }
    | {
        __typename: 'NativeAuthStrategyError';
        errorCode: ErrorCode;
        message: string;
      }
    | {
        __typename: 'PasswordValidationError';
        errorCode: ErrorCode;
        message: string;
      }
    | {
        __typename: 'Success';
        success: boolean;
      };
};
export declare type NextRegisterCustomerAccountMutationVariables = Exact<{
  input: RegisterCustomerInput;
}>;
export declare type NextRegisterCustomerAccountMutation = {
  registerCustomerAccount:
    | {
        __typename: 'MissingPasswordError';
        errorCode: ErrorCode;
        message: string;
      }
    | {
        __typename: 'NativeAuthStrategyError';
        errorCode: ErrorCode;
        message: string;
      }
    | {
        __typename: 'PasswordValidationError';
        errorCode: ErrorCode;
        message: string;
      }
    | {
        __typename: 'Success';
        success: boolean;
      };
};
export declare type NextCreateCustomerAddressMutationVariables = Exact<{
  input: CreateAddressInput;
}>;
export declare type NextCreateCustomerAddressMutation = {
  createCustomerAddress: {
    __typename?: 'Address';
  } & AddressFragment;
};
export declare type NextUpdateCustomerAddressMutationVariables = Exact<{
  input: UpdateAddressInput;
}>;
export declare type NextUpdateCustomerAddressMutation = {
  updateCustomerAddress: {
    __typename?: 'Address';
  } & AddressFragment;
};
export declare type NextDeleteCustomerAddressMutationVariables = Exact<{
  id: Scalars['ID'];
}>;
export declare type NextDeleteCustomerAddressMutation = {
  deleteCustomerAddress: {
    __typename: 'Success';
    success: boolean;
  };
};
export declare type NextAddToCartMutationVariables = Exact<{
  variantId: Scalars['ID'];
  quantity: Scalars['Int'];
}>;
export declare type NextAddToCartMutation = {
  addItemToOrder:
    | ({
        __typename: 'InsufficientStockError';
        order: {
          __typename?: 'Order';
        } & OrderFragment;
      } & ErrorResult_InsufficientStockError_Fragment)
    | ({
        __typename: 'NegativeQuantityError';
      } & ErrorResult_NegativeQuantityError_Fragment)
    | ({
        __typename: 'Order';
      } & OrderFragment)
    | ({
        __typename: 'OrderLimitError';
      } & ErrorResult_OrderLimitError_Fragment)
    | ({
        __typename: 'OrderModificationError';
      } & ErrorResult_OrderModificationError_Fragment);
};
export declare type NextAdjustOrderLineMutationVariables = Exact<{
  orderLineId: Scalars['ID'];
  quantity: Scalars['Int'];
}>;
export declare type NextAdjustOrderLineMutation = {
  adjustOrderLine:
    | ({
        __typename: 'InsufficientStockError';
      } & ErrorResult_InsufficientStockError_Fragment)
    | ({
        __typename: 'NegativeQuantityError';
      } & ErrorResult_NegativeQuantityError_Fragment)
    | ({
        __typename: 'Order';
      } & OrderFragment)
    | ({
        __typename: 'OrderLimitError';
      } & ErrorResult_OrderLimitError_Fragment)
    | ({
        __typename: 'OrderModificationError';
      } & ErrorResult_OrderModificationError_Fragment);
};
export declare type NextAdjustOrderLineLensMutationVariables = Exact<{
  input: SaveUserProcessConfigStepInput;
}>;
export declare type NextAdjustOrderLineLensMutation = {
  saveUserProcessConfigStep:
    | ({
        __typename: 'InsufficientStockError';
      } & ErrorResult_InsufficientStockError_Fragment)
    | ({
        __typename: 'NegativeQuantityError';
      } & ErrorResult_NegativeQuantityError_Fragment)
    | ({
        __typename: 'Order';
      } & OrderFragment)
    | ({
        __typename: 'OrderLimitError';
      } & ErrorResult_OrderLimitError_Fragment)
    | ({
        __typename: 'OrderModificationError';
      } & ErrorResult_OrderModificationError_Fragment);
};
export declare type NextRemoveOrderLineMutationVariables = Exact<{
  orderLineId: Scalars['ID'];
}>;
export declare type NextRemoveOrderLineMutation = {
  removeOrderLine:
    | ({
        __typename: 'Order';
      } & OrderFragment)
    | {
        __typename: 'OrderModificationError';
        errorCode: ErrorCode;
        message: string;
      };
};
export declare type NextSetCustomerForOrderMutationVariables = Exact<{
  customerInput: CreateCustomerInput;
}>;
export declare type NextSetCustomerForOrderMutation = {
  setCustomerForOrder:
    | ({
        __typename: 'AlreadyLoggedInError';
      } & ErrorResult_AlreadyLoggedInError_Fragment)
    | ({
        __typename: 'EmailAddressConflictError';
      } & ErrorResult_EmailAddressConflictError_Fragment)
    | ({
        __typename: 'NoActiveOrderError';
      } & ErrorResult_NoActiveOrderError_Fragment)
    | ({
        __typename: 'Order';
      } & OrderFragment);
};
export declare type NextSetOrderBillingAddressMutationVariables = Exact<{
  createAddressInput: CreateAddressInput;
}>;
export declare type NextSetOrderBillingAddressMutation = {
  setOrderBillingAddress:
    | ({
        __typename: 'NoActiveOrderError';
      } & ErrorResult_NoActiveOrderError_Fragment)
    | ({
        __typename: 'Order';
      } & OrderFragment);
};
export declare type NextSetOrderCustomFieldsMutationVariables = Exact<{
  updateOrderInput: UpdateOrderInput;
}>;
export declare type NextSetOrderCustomFieldsMutation = {
  setOrderCustomFields:
    | ({
        __typename: 'NoActiveOrderError';
      } & ErrorResult_NoActiveOrderError_Fragment)
    | ({
        __typename: 'Order';
      } & OrderFragment);
};
export declare type NextSetOrderShippingAddressMutationVariables = Exact<{
  createAddressInput: CreateAddressInput;
}>;
export declare type NextSetOrderShippingAddressMutation = {
  setOrderShippingAddress:
    | ({
        __typename: 'NoActiveOrderError';
      } & ErrorResult_NoActiveOrderError_Fragment)
    | ({
        __typename: 'Order';
      } & OrderFragment);
};
export declare type NextSetOrderShippingMethodMutationVariables = Exact<{
  shippingMethodId: Scalars['ID'];
}>;
export declare type NextSetOrderShippingMethodMutation = {
  setOrderShippingMethod:
    | ({
        __typename: 'IneligibleShippingMethodError';
      } & ErrorResult_IneligibleShippingMethodError_Fragment)
    | ({
        __typename: 'NoActiveOrderError';
      } & ErrorResult_NoActiveOrderError_Fragment)
    | ({
        __typename: 'Order';
      } & OrderFragment)
    | ({
        __typename: 'OrderModificationError';
      } & ErrorResult_OrderModificationError_Fragment);
};
export declare type NextTransitionOrderToStateMutationVariables = Exact<{
  state: Scalars['String'];
}>;
export declare type NextTransitionOrderToStateMutation = {
  transitionOrderToState?:
    | ({
        __typename: 'Order';
      } & OrderFragment)
    | ({
        __typename: 'OrderStateTransitionError';
      } & ErrorResult_OrderStateTransitionError_Fragment);
};
export declare type NextAddPaymentToOrderMutationVariables = Exact<{
  paymentInput: PaymentInput;
}>;
export declare type NextAddPaymentToOrderMutation = {
  addPaymentToOrder:
    | ({
        __typename: 'IneligiblePaymentMethodError';
      } & ErrorResult_IneligiblePaymentMethodError_Fragment)
    | ({
        __typename: 'NoActiveOrderError';
      } & ErrorResult_NoActiveOrderError_Fragment)
    | ({
        __typename: 'Order';
      } & OrderFragment)
    | ({
        __typename: 'OrderPaymentStateError';
      } & ErrorResult_OrderPaymentStateError_Fragment)
    | ({
        __typename: 'OrderStateTransitionError';
      } & ErrorResult_OrderStateTransitionError_Fragment)
    | ({
        __typename: 'PaymentDeclinedError';
      } & ErrorResult_PaymentDeclinedError_Fragment)
    | ({
        __typename: 'PaymentFailedError';
      } & ErrorResult_PaymentFailedError_Fragment);
};
export declare type NextSettlePaymentToOrderMutationVariables = Exact<{
  input: SettlePaymentInput;
}>;
export declare type NextSettlePaymentToOrderMutation = {
  settlePayment: boolean;
};
export declare type NextApplyCouponCodeMutationVariables = Exact<{
  couponCode: Scalars['String'];
}>;
export declare type NextApplyCouponCodeMutation = {
  applyCouponCode:
    | ({
        __typename: 'CouponCodeExpiredError';
      } & ErrorResult_CouponCodeExpiredError_Fragment)
    | ({
        __typename: 'CouponCodeInvalidError';
      } & ErrorResult_CouponCodeInvalidError_Fragment)
    | ({
        __typename: 'CouponCodeLimitError';
      } & ErrorResult_CouponCodeLimitError_Fragment)
    | ({
        __typename: 'Order';
      } & OrderFragment);
};
export declare type NextRemoveCouponCodeMutationVariables = Exact<{
  couponCode: Scalars['String'];
}>;
export declare type NextRemoveCouponCodeMutation = {
  removeCouponCode?: {
    __typename?: 'Order';
  } & OrderFragment;
};
export declare type NextApplyForCampaignCouponCodeMutationVariables = Exact<{
  campaignCode: Scalars['String'];
  emailAddress: Scalars['String'];
}>;
export declare type NextApplyForCampaignCouponCodeMutation = {
  applyForCouponCode?: {
    __typename?: 'CampaignCoupon';
  } & CampaignCouponFragment;
};
export declare type NextToggleFavoriteMutationVariables = Exact<{
  productVariantId: Scalars['ID'];
}>;
export declare type NextToggleFavoriteMutation = {
  toggleFavorite?: {
    __typename?: 'Favorite';
  } & FavoriteFragment;
};
export declare type NextUpdateHelpCenterHelpfulMutationVariables = Exact<{
  input: UpdateHelpCenterHelpfulInput;
}>;
export declare type NextUpdateHelpCenterHelpfulMutation = {
  updateHelpCenterHelpful: {
    __typename?: 'HelpCenter';
    id: string | number;
    helpfulYes: number;
    helpfulNo: number;
  };
};
export declare type NextCreateInvoiceMutationVariables = Exact<{
  input: CreateInvoiceInput;
}>;
export declare type NextCreateInvoiceMutation = {
  createInvoice?: {
    __typename?: 'Invoice';
    id: string | number;
    downloadUrl: string;
    invoiceNumber: number;
  };
};
export declare type NextLoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  rememberMe?: InputMaybe<Scalars['Boolean']>;
}>;
export declare type NextLoginMutation = {
  login:
    | {
        __typename: 'CurrentUser';
        id: string | number;
      }
    | ({
        __typename: 'InvalidCredentialsError';
      } & ErrorResult_InvalidCredentialsError_Fragment)
    | ({
        __typename: 'NativeAuthStrategyError';
      } & ErrorResult_NativeAuthStrategyError_Fragment)
    | ({
        __typename: 'NotVerifiedError';
      } & ErrorResult_NotVerifiedError_Fragment);
};
export declare type NextLogoutMutationVariables = Exact<{
  [key: string]: never;
}>;
export declare type NextLogoutMutation = {
  logout: {
    __typename?: 'Success';
    success: boolean;
  };
};
export declare type NextRequestPasswordResetMutationVariables = Exact<{
  emailAddress: Scalars['String'];
}>;
export declare type NextRequestPasswordResetMutation = {
  requestPasswordReset?:
    | {
        __typename: 'NativeAuthStrategyError';
        errorCode: ErrorCode;
        message: string;
      }
    | {
        __typename: 'Success';
        success: boolean;
      };
};
export declare type NextResetPasswordMutationVariables = Exact<{
  token: Scalars['String'];
  password: Scalars['String'];
}>;
export declare type NextResetPasswordMutation = {
  resetPassword:
    | {
        __typename: 'CurrentUser';
        id: string | number;
      }
    | {
        __typename: 'NativeAuthStrategyError';
        errorCode: ErrorCode;
        message: string;
      }
    | {
        __typename: 'NotVerifiedError';
        errorCode: ErrorCode;
        message: string;
      }
    | {
        __typename: 'PasswordResetTokenExpiredError';
        errorCode: ErrorCode;
        message: string;
      }
    | {
        __typename: 'PasswordResetTokenInvalidError';
        errorCode: ErrorCode;
        message: string;
      }
    | {
        __typename: 'PasswordValidationError';
        errorCode: ErrorCode;
        message: string;
      };
};
export declare type NextRequestUpdateCustomerEmailAddressMutationVariables = Exact<{
  password: Scalars['String'];
  newEmailAddress: Scalars['String'];
}>;
export declare type NextRequestUpdateCustomerEmailAddressMutation = {
  requestUpdateCustomerEmailAddress:
    | {
        __typename: 'EmailAddressConflictError';
        errorCode: ErrorCode;
        message: string;
      }
    | {
        __typename: 'InvalidCredentialsError';
        errorCode: ErrorCode;
        message: string;
      }
    | {
        __typename: 'NativeAuthStrategyError';
        errorCode: ErrorCode;
        message: string;
      }
    | {
        __typename: 'Success';
        success: boolean;
      };
};
export declare type NextCreateProductQaMutationVariables = Exact<{
  input: CreateProductQaInput;
}>;
export declare type NextCreateProductQaMutation = {
  createProductQa: {
    __typename?: 'ProductQa';
  } & ProductQaFragment;
};
export declare type NextUpdateProductQaHelpfulMutationVariables = Exact<{
  input: UpdateProductQaHelpfulInput;
}>;
export declare type NextUpdateProductQaHelpfulMutation = {
  updateProductQaHelpful: {
    __typename?: 'ProductQa';
  } & ProductQaFragment;
};
export declare type NextCreateProductReviewMutationVariables = Exact<{
  input: CreateProductReviewInput;
}>;
export declare type NextCreateProductReviewMutation = {
  createProductReview?: {
    __typename?: 'ProductReview';
  } & ProductReviewFragment;
};
export declare type NextUpdateProductReviewMutationVariables = Exact<{
  input: UpdateProductReviewInput;
}>;
export declare type NextUpdateProductReviewMutation = {
  updateProductReview?: {
    __typename?: 'ProductReview';
  } & ProductReviewFragment;
};
export declare type NextVoteOnReviewMutationVariables = Exact<{
  id: Scalars['ID'];
  vote: Scalars['Boolean'];
}>;
export declare type NextVoteOnReviewMutation = {
  voteOnReview: {
    __typename?: 'ProductReview';
  } & ProductReviewFragment;
};
export declare type NextSaveRxMutationVariables = Exact<{
  input: CreateRxInput;
}>;
export declare type NextSaveRxMutation = {
  saveRx: {
    __typename?: 'Rx';
  } & RxFragment;
};
export declare type NextUpdateRxMutationVariables = Exact<{
  input: UpdateRxInput;
}>;
export declare type NextUpdateRxMutation = {
  updateRx: {
    __typename?: 'Rx';
  } & RxFragment;
};
export declare type NextDeleteRxMutationVariables = Exact<{
  id: Scalars['ID'];
}>;
export declare type NextDeleteRxMutation = {
  deleteRx: {
    __typename?: 'DeletionResponse';
  } & DeletionResponseFragment;
};
export declare type NextSignupMutationVariables = Exact<{
  input: RegisterCustomerInput;
}>;
export declare type NextSignupMutation = {
  registerCustomerAccount:
    | ({
        __typename: 'MissingPasswordError';
      } & ErrorResult_MissingPasswordError_Fragment)
    | ({
        __typename: 'NativeAuthStrategyError';
      } & ErrorResult_NativeAuthStrategyError_Fragment)
    | ({
        __typename: 'PasswordValidationError';
      } & ErrorResult_PasswordValidationError_Fragment)
    | {
        __typename: 'Success';
        success: boolean;
      };
};
export declare type NextSubscriptionEmailMutationVariables = Exact<{
  email: Scalars['String'];
}>;
export declare type NextSubscriptionEmailMutation = {
  addSubscriptionEmail: {
    type: SubscriptionType;
    value: string;
  };
};
export declare type NextSubscriptionPhoneMutationVariables = Exact<{
  phone: Scalars['String'];
}>;
export declare type NextSubscriptionPhoneMutation = {
  addSubscriptionPhone: {
    type: SubscriptionType;
    value: string;
  };
};
export declare type NextCreateTicketMutationVariables = Exact<{
  input: CreateTicketInput;
}>;
export declare type NextCreateTicketMutation = {
  createTicket?: {
    __typename?: 'Ticket';
    id: string | number;
    subject: string;
  };
};
export declare type NextDeleteTryonFaceModelMutationVariables = Exact<{
  id: Scalars['ID'];
}>;
export declare type NextDeleteTryonFaceModelMutation = {
  deleteTryonFaceModel: {
    __typename?: 'DeletionResponse';
  } & DeletionResponseFragment;
};
export declare type NextCreateTryonFaceModelsMutationVariables = Exact<{
  file: Array<Scalars['Upload']> | Scalars['Upload'];
  crop: Array<Scalars['String']> | Scalars['String'];
  tags?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  userPd?: InputMaybe<Scalars['Int']>;
}>;
export declare type NextCreateTryonFaceModelsMutation = {
  createTryonFaceModels: Array<
    {
      __typename?: 'TryonFaceModel';
    } & TryonFaceModelFragment
  >;
};
export declare type NextActiveCustomerQueryVariables = Exact<{
  [key: string]: never;
}>;
export declare type NextActiveCustomerQuery = {
  activeCustomer?: {
    __typename?: 'Customer';
  } & CustomerFragment;
};
export declare type NextAllSettingsQueryVariables = Exact<{
  enabled?: InputMaybe<Scalars['Boolean']>;
}>;
export declare type NextAllSettingsQuery = {
  settings: {
    __typename?: 'SettingList';
    items: Array<
      {
        __typename?: 'Setting';
      } & SettingFragment
    >;
  };
};
export declare type NextGetCampaignInfoQueryVariables = Exact<{
  code: Scalars['String'];
}>;
export declare type NextGetCampaignInfoQuery = {
  getCampaignInfo?: {
    __typename?: 'Campaign';
  } & CampaignFragment;
};
export declare type NextGetCartTotalsQueryVariables = Exact<{
  [key: string]: never;
}>;
export declare type NextGetCartTotalsQuery = {
  activeOrder?: {
    __typename?: 'Order';
    id: string | number;
    active: boolean;
    totalQuantity: number;
    totalWithTax: number;
  };
};
export declare type NextCartViewQueryVariables = Exact<{
  [key: string]: never;
}>;
export declare type NextCartViewQuery = {
  activeOrder?: {
    __typename?: 'Order';
  } & OrderFragment;
};
export declare type NextEligibleShippingMethodsQueryVariables = Exact<{
  [key: string]: never;
}>;
export declare type NextEligibleShippingMethodsQuery = {
  eligibleShippingMethods: Array<
    {
      __typename?: 'ShippingMethodQuote';
    } & ShippingMethodQuoteFragment
  >;
};
export declare type NextEligiblePaymentMethodsQueryVariables = Exact<{
  [key: string]: never;
}>;
export declare type NextEligiblePaymentMethodsQuery = {
  eligiblePaymentMethods: Array<
    {
      __typename?: 'PaymentMethodQuote';
    } & PaymentMethodQuoteFragment
  >;
};
export declare type NextAvailableCountriesQueryVariables = Exact<{
  [key: string]: never;
}>;
export declare type NextAvailableCountriesQuery = {
  availableCountries: Array<{
    __typename?: 'Country';
    code: string;
    name: string;
    languageCode: LanguageCode;
    customFields?: {
      __typename?: 'CountryCustomFields';
      displayOrder?: number;
    };
  }>;
};
export declare type NextCustomerTryonFaceModelsQueryVariables = Exact<{
  count?: InputMaybe<Scalars['Int']>;
}>;
export declare type NextCustomerTryonFaceModelsQuery = {
  customerTryonFaceModels: Array<
    {
      __typename?: 'TryonFaceModel';
    } & TryonFaceModelFragment
  >;
};
export declare type NextMyFavoritesQueryVariables = Exact<{
  options: FavoriteListOptions;
  productVariantNameFilter?: InputMaybe<Scalars['String']>;
}>;
export declare type NextMyFavoritesQuery = {
  favorites: {
    __typename?: 'FavoriteList';
    totalItems: number;
    items: Array<
      {
        __typename?: 'Favorite';
      } & FavoriteFragment
    >;
  };
};
export declare type NextProductVariantFavoriteQueryVariables = Exact<{
  productVariantId: Scalars['ID'];
}>;
export declare type NextProductVariantFavoriteQuery = {
  favorite?: {
    __typename?: 'Favorite';
    id: string | number;
  };
};
export declare type NextGetAllCatalogPathsQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']>;
}>;
export declare type NextGetAllCatalogPathsQuery = {
  collections: {
    __typename?: 'CollectionList';
    items: Array<{
      __typename?: 'Collection';
      slug: string;
    }>;
  };
};
export declare type NextGetAllCatalogsQueryVariables = Exact<{
  withFeaturedAsset?: InputMaybe<Scalars['Boolean']>;
}>;
export declare type NextGetAllCatalogsQuery = {
  collections: {
    __typename?: 'CollectionList';
    items: Array<{
      __typename?: 'Collection';
      id: string | number;
      name: string;
      description: string;
      slug: string;
      position: number;
      customFields?: {
        __typename?: 'CollectionCustomFields';
        invisible?: boolean;
        isFeatured?: boolean;
        collectionType?: string;
      };
      featuredAsset?: {
        __typename?: 'Asset';
      } & AssetFragment;
      parent?: {
        __typename?: 'Collection';
        id: string | number;
      };
    }>;
  };
};
export declare type NextGetAllProductPathsQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']>;
}>;
export declare type NextGetAllProductPathsQuery = {
  search: {
    __typename?: 'SearchResponse';
    items: Array<{
      __typename?: 'SearchResult';
      slug: string;
    }>;
  };
};
export declare type NextGetAllProductsQueryVariables = Exact<{
  input: SearchInput;
}>;
export declare type NextGetAllProductsQuery = {
  search: {
    __typename?: 'SearchResponse';
    items: Array<
      {
        __typename?: 'SearchResult';
      } & SearchResultFragment
    >;
  };
};
export declare type NextGetAllTopicLinksQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']>;
  position: Scalars['String'];
}>;
export declare type NextGetAllTopicLinksQuery = {
  topicLinks: {
    __typename?: 'TopicLinkList';
    items: Array<
      {
        __typename?: 'TopicLink';
      } & TopicLinkFragment
    >;
  };
};
export declare type NextGetAllTopicPathsQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']>;
}>;
export declare type NextGetAllTopicPathsQuery = {
  topics: {
    __typename?: 'TopicList';
    items: Array<{
      __typename?: 'Topic';
      slug: string;
    }>;
  };
};
export declare type NextGetAllTopicsQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']>;
}>;
export declare type NextGetAllTopicsQuery = {
  topics: {
    __typename?: 'TopicList';
    items: Array<
      {
        __typename?: 'Topic';
      } & TopicFragment
    >;
  };
};
export declare type NextGetBannersQueryVariables = Exact<{
  options?: InputMaybe<BannerListOptions>;
}>;
export declare type NextGetBannersQuery = {
  banners: {
    __typename?: 'BannerList';
    items: Array<
      {
        __typename?: 'Banner';
      } & BannerFragment
    >;
  };
};
export declare type NextGetCatalogQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
}>;
export declare type NextGetCatalogQuery = {
  collection?: {
    __typename?: 'Collection';
    id: string | number;
    name: string;
    slug: string;
    description: string;
    customFields?: {
      __typename?: 'CollectionCustomFields';
      isFeatured?: boolean;
      collectionType?: string;
      metaTitle?: string;
      metaDescription?: string;
    };
    campaign?: {
      __typename?: 'Campaign';
    } & CampaignFragment;
    featuredAsset?: {
      __typename?: 'Asset';
    } & AssetFragment;
    children?: Array<{
      __typename?: 'Collection';
      id: string | number;
      name: string;
      slug: string;
      customFields?: {
        __typename?: 'CollectionCustomFields';
        isFeatured?: boolean;
        invisible?: boolean;
        collectionType?: string;
      };
    }>;
    breadcrumbs: Array<{
      __typename?: 'CollectionBreadcrumb';
      id: string | number;
      name: string;
      slug: string;
    }>;
  };
};
export declare type NextGetProductQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
}>;
export declare type NextGetProductQuery = {
  product?: {
    __typename?: 'Product';
    id: string | number;
    name: string;
    slug: string;
    languageCode: LanguageCode;
    description: string;
    reviewAvg: number;
    productType: string;
    reviewsHistogram: Array<{
      __typename?: 'ProductReviewHistogramItem';
      bin: number;
      frequency: number;
    }>;
    reviews: {
      __typename?: 'ProductReviewList';
      totalItems: number;
      items: Array<
        {
          __typename?: 'ProductReview';
        } & ProductReviewFragment
      >;
    };
    questionAnswers: {
      __typename?: 'ProductQaList';
      totalItems: number;
      items: Array<
        {
          __typename?: 'ProductQa';
        } & ProductQaFragment
      >;
    };
    customFields?: {
      __typename?: 'ProductCustomFields';
      reviewRating?: number;
      reviewCount?: number;
      metaTitle?: string;
      metaDescription?: string;
    };
    featuredAsset?: {
      __typename?: 'Asset';
    } & AssetFragment;
    frameFields?: {
      __typename?: 'ProductFrame';
    } & ProductFrameFieldsFragment;
    facetValues: Array<
      {
        __typename?: 'FacetValue';
      } & ProductFacetValueFragment
    >;
    variants: Array<
      {
        __typename?: 'ProductVariant';
      } & ProductVariantFragment
    >;
  };
};
export declare type NextGetProductSimpleQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
}>;
export declare type NextGetProductSimpleQuery = {
  product?: {
    __typename?: 'Product';
    id: string | number;
    name: string;
    slug: string;
    languageCode: LanguageCode;
    description: string;
    productType: string;
    customFields?: {
      __typename?: 'ProductCustomFields';
      reviewRating?: number;
      reviewCount?: number;
    };
    variants: Array<
      {
        __typename?: 'ProductVariant';
      } & ProductVariantSimpleFragment
    >;
  };
};
export declare type NextGetRelatedReviewPathsQueryVariables = Exact<{
  productId: Scalars['ID'];
  id: Scalars['ID'];
}>;
export declare type NextGetRelatedReviewPathsQuery = {
  relatedReviews: Array<{
    __typename?: 'ProductReview';
    slug?: string;
  }>;
};
export declare type NextGetTopicQueryVariables = Exact<{
  slug: Scalars['String'];
}>;
export declare type NextGetTopicQuery = {
  topic?: {
    __typename?: 'Topic';
  } & TopicFragment;
};
export declare type NextHelpSummarizeQueryVariables = Exact<{
  options?: InputMaybe<HelpSummarizeOptions>;
}>;
export declare type NextHelpSummarizeQuery = {
  helpSummarize?: {
    __typename?: 'HelpSummarize';
    topHotSearchWords: Array<
      {
        __typename?: 'HelpCenterHotSearch';
      } & HelpCenterHotSearchFragment
    >;
    topCollections: Array<
      {
        __typename?: 'HelpCenterCollection';
      } & HelpCenterCollectionSummaryFragment
    >;
    topArticles: Array<
      {
        __typename?: 'HelpCenter';
      } & HelpCenterSummaryWithCollectionFragment
    >;
  };
};
export declare type NextGetHelpArticleQueryVariables = Exact<{
  slug: Scalars['String'];
}>;
export declare type NextGetHelpArticleQuery = {
  helpCenter?: {
    __typename?: 'HelpCenter';
  } & HelpCenterFragment;
};
export declare type NextSearchHelpArticlesQueryVariables = Exact<{
  options: HelpCenterListOptions;
  tagIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
  collectionIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
}>;
export declare type NextSearchHelpArticlesQuery = {
  helpCenters: {
    __typename?: 'HelpCenterList';
    totalItems: number;
    items: Array<{
      __typename?: 'HelpCenter';
      id: string | number;
      title: string;
      slug: string;
      shortDesc?: string;
      showOnTop: boolean;
      tags: Array<
        {
          __typename?: 'HelpCenterTag';
        } & HelpCenterTagSummaryFragment
      >;
      collections: Array<
        {
          __typename?: 'HelpCenterCollection';
        } & HelpCenterCollectionSummaryFragment
      >;
    }>;
  };
};
export declare type NextGetHelpTagQueryVariables = Exact<{
  slug: Scalars['String'];
}>;
export declare type NextGetHelpTagQuery = {
  helpCenterTag?: {
    __typename?: 'HelpCenterTag';
  } & HelpCenterTagFragment;
};
export declare type NextGetHelpCollectionQueryVariables = Exact<{
  slug: Scalars['String'];
}>;
export declare type NextGetHelpCollectionQuery = {
  helpCenterCollection?: {
    __typename?: 'HelpCenterCollection';
  } & HelpCenterCollectionFragment;
};
export declare type NextProcessConfigsOfStepQueryVariables = Exact<{
  input: ProcessConfigsOfStepInput;
}>;
export declare type NextProcessConfigsOfStepQuery = {
  processConfigsOfStep: {
    __typename?: 'LensProcessStepQueryResult';
    T1?: Array<
      {
        __typename?: 'LensProcessOption';
      } & LensProcessOptionFragment
    >;
    T2?: Array<
      {
        __typename?: 'LensProcessOption';
      } & LensProcessOptionFragment
    >;
    T3?: Array<
      {
        __typename?: 'LensProcessOption';
      } & LensProcessOptionFragment
    >;
    T4?: Array<
      {
        __typename?: 'LensProcessOption';
      } & LensProcessOptionFragment
    >;
  };
};
export declare type NextProductConfiguredProcessStepsQueryVariables = Exact<{
  productId: Scalars['ID'];
}>;
export declare type NextProductConfiguredProcessStepsQuery = {
  productConfiguredProcessSteps: Array<LensStepGroups>;
};
export declare type NextMeQueryVariables = Exact<{
  [key: string]: never;
}>;
export declare type NextMeQuery = {
  me?: {
    __typename?: 'CurrentUser';
    id: string | number;
    identifier: string;
  };
};
export declare type NextQueryOrderByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;
export declare type NextQueryOrderByIdQuery = {
  order?: {
    __typename?: 'Order';
  } & OrderFragment;
};
export declare type NextQueryOrderByCodeQueryVariables = Exact<{
  code: Scalars['String'];
}>;
export declare type NextQueryOrderByCodeQuery = {
  orderByCode?: {
    __typename?: 'Order';
  } & OrderFragment;
};
export declare type NextQueryOrderStateByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;
export declare type NextQueryOrderStateByIdQuery = {
  order?: {
    __typename?: 'Order';
    id: string | number;
    state: string;
  };
};
export declare type NextQueryMyOrdersQueryVariables = Exact<{
  options?: InputMaybe<OrderListOptions>;
}>;
export declare type NextQueryMyOrdersQuery = {
  activeCustomer?: {
    __typename?: 'Customer';
    orders: {
      __typename?: 'OrderList';
      totalItems: number;
      items: Array<
        {
          __typename?: 'Order';
        } & OrderFragment
      >;
    };
  };
};
export declare type NextProductQasQueryVariables = Exact<{
  productId: Scalars['ID'];
  options: ProductQaListOptions;
}>;
export declare type NextProductQasQuery = {
  productQas: {
    __typename?: 'ProductQaList';
    totalItems: number;
    items: Array<
      {
        __typename?: 'ProductQa';
      } & ProductQaFragment
    >;
  };
};
export declare type NextCanReviewProductVariantQueryVariables = Exact<{
  productVariantId: Scalars['ID'];
}>;
export declare type NextCanReviewProductVariantQuery = {
  canReviewProductVariant: boolean;
};
export declare type NextProductTestimonialReviewsQueryVariables = Exact<{
  count?: InputMaybe<Scalars['Int']>;
}>;
export declare type NextProductTestimonialReviewsQuery = {
  testimonialReviews: Array<
    {
      __typename?: 'ProductReview';
    } & ProductReviewFragment
  >;
};
export declare type NextProductReviewsQueryVariables = Exact<{
  productId: Scalars['ID'];
  options?: InputMaybe<ProductReviewListOptions>;
}>;
export declare type NextProductReviewsQuery = {
  productReviews: {
    __typename?: 'ProductReviewList';
    totalItems: number;
    items: Array<
      {
        __typename?: 'ProductReview';
      } & ProductReviewFragment
    >;
  };
};
export declare type NextProductWithImageReviewsQueryVariables = Exact<{
  productId: Scalars['ID'];
  options?: InputMaybe<ProductReviewListOptions>;
}>;
export declare type NextProductWithImageReviewsQuery = {
  productWithImageReviews: {
    __typename?: 'ProductReviewList';
    totalItems: number;
    items: Array<
      {
        __typename?: 'ProductReview';
      } & ProductReviewFragment
    >;
  };
};
export declare type NextQueryProductReviewQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
}>;
export declare type NextQueryProductReviewQuery = {
  productReview?: {
    __typename?: 'ProductReview';
  } & ProductReviewFragment;
};
export declare type NextMyProductReviewQueryVariables = Exact<{
  id: Scalars['ID'];
}>;
export declare type NextMyProductReviewQuery = {
  myProductReview?: {
    __typename?: 'ProductReview';
  } & ProductReviewFragment;
};
export declare type NextMyProductReviewsQueryVariables = Exact<{
  options?: InputMaybe<ProductReviewListOptions>;
}>;
export declare type NextMyProductReviewsQuery = {
  myProductReviews: {
    __typename?: 'ProductReviewList';
    totalItems: number;
    items: Array<
      {
        __typename?: 'ProductReview';
      } & ProductReviewFragment
    >;
  };
};
export declare type NextAvailableProductVariantsToReviewQueryVariables = Exact<{
  options?: InputMaybe<ProductVariantListOptions>;
}>;
export declare type NextAvailableProductVariantsToReviewQuery = {
  availableProductVariantsToReview: {
    __typename?: 'ProductVariantList';
    totalItems: number;
    items: Array<{
      __typename?: 'ProductVariant';
      id: string | number;
      name: string;
      sku: string;
      product: {
        __typename?: 'Product';
        id: string | number;
        name: string;
        slug: string;
      };
      featuredAsset?: {
        __typename?: 'Asset';
      } & AssetFragment;
    }>;
  };
};
export declare type NextQueryRxListQueryVariables = Exact<{
  options?: InputMaybe<RxListOptions>;
}>;
export declare type NextQueryRxListQuery = {
  rxList: {
    __typename?: 'RxList';
    totalItems: number;
    items: Array<
      {
        __typename?: 'Rx';
      } & RxFragment
    >;
  };
};
export declare type NextListAndValidateRxConfigsQueryVariables = Exact<{
  input: ListAndValidateRxConfigsInput;
}>;
export declare type NextListAndValidateRxConfigsQuery = {
  listAndValidateRxConfigs: Array<
    {
      __typename?: 'RxValidatedConfigItem';
    } & RxValidatedConfigItemFragment
  >;
};
export declare type NextSearchQueryVariables = Exact<{
  input: SearchInput;
  withFacetValues?: InputMaybe<Scalars['Boolean']>;
}>;
export declare type NextSearchQuery = {
  search: {
    __typename?: 'SearchResponse';
    totalItems: number;
    items: Array<
      {
        __typename?: 'SearchResult';
      } & SearchResultFragment
    >;
    facetValues?: Array<{
      __typename?: 'FacetValueResult';
      count: number;
      facetValue: {
        __typename?: 'FacetValue';
      } & ProductFacetValueFragment;
    }>;
  };
};
export declare type NextSearchFiltersQueryVariables = Exact<{
  input: SearchInput;
}>;
export declare type NextSearchFiltersQuery = {
  search: {
    __typename?: 'SearchResponse';
    facetValues: Array<{
      __typename?: 'FacetValueResult';
      count: number;
      facetValue: {
        __typename?: 'FacetValue';
      } & ProductFacetValueFragment;
    }>;
  };
};
export declare type NextUnionQueryVariables = Exact<{
  includeCollection?: InputMaybe<Scalars['Boolean']>;
  includeCollectionFeaturedAsset?: InputMaybe<Scalars['Boolean']>;
  includeBanners?: InputMaybe<Scalars['Boolean']>;
  includeFooterTopicLinks?: InputMaybe<Scalars['Boolean']>;
  includeVideoGuideTopicLinks?: InputMaybe<Scalars['Boolean']>;
  includeNewArrivals?: InputMaybe<Scalars['Boolean']>;
  includeBestSeller?: InputMaybe<Scalars['Boolean']>;
  includeTestimonialReviews?: InputMaybe<Scalars['Boolean']>;
}>;
export declare type NextUnionQuery = {
  unionMain: {
    __typename?: 'UnionMain';
    settings: Array<
      {
        __typename?: 'Setting';
      } & SettingFragment
    >;
    collections?: Array<{
      __typename?: 'Collection';
      id: string | number;
      name: string;
      description: string;
      slug: string;
      position: number;
      customFields?: {
        __typename?: 'CollectionCustomFields';
        invisible?: boolean;
        isFeatured?: boolean;
        collectionType?: string;
      };
      featuredAsset?: {
        __typename?: 'Asset';
      } & AssetFragment;
      parent?: {
        __typename?: 'Collection';
        id: string | number;
      };
    }>;
    banners?: Array<
      {
        __typename?: 'Banner';
      } & BannerFragment
    >;
    footerTopicLinks?: Array<
      {
        __typename?: 'TopicLink';
      } & TopicLinkFragment
    >;
    videoGuideTopicLinks?: Array<
      {
        __typename?: 'TopicLink';
      } & TopicLinkFragment
    >;
    newArrivalsProducts?: Array<
      {
        __typename?: 'SearchResult';
      } & SearchResultFragment
    >;
    bestSellerProducts?: Array<
      {
        __typename?: 'SearchResult';
      } & SearchResultFragment
    >;
    testimonialReviews?: Array<
      {
        __typename?: 'ProductReview';
      } & ProductReviewFragment
    >;
  };
};
/**
 * 所有支持的locales, 理论上每个域名一个独立的locale与之对应.
 * 如: en: 'en_AU', 'en_CA', 'en_US', 把en_GB独立出来
 */
export declare enum AllSupportedLocale {
  en = 'en',
  en_GB = 'en_GB',
  de = 'de',
  es = 'es',
}
/**
 * 当前系统支持的locale类型定义.
 */
export declare type AllSupportedLocaleType = keyof typeof AllSupportedLocale;
/**
 * 此处用来处理locale到vendure languageCode的映射关系
 * 如: en: 'en_AU', 'en_CA', 'en_US', 把en_GB独立出来
 */
export declare const AllSupportedLanguage: {
  en: LanguageCode;
  en_GB: LanguageCode;
  de: LanguageCode;
  es: LanguageCode;
};
/**
 * 目前考虑一个locale对应一个channel, 也就是一个域名对应一个唯一的locale
 */
export declare const allChannels: Record<AllSupportedLocaleType, string>;
export declare type VMAddress = AddressFragment;
export declare type ID = string | number;
export interface VMEntity {
  id: ID;
}
export declare type VMAssetItem = AssetFragment;
export declare type VMSearchedAssetItem = {
  id: ID;
  preview: string;
};
export declare type NextLoginMutationCurrentUser = Extract<
  NextLoginMutation['login'],
  {
    __typename: 'CurrentUser';
  }
>;
/**
 * Returns the properties in T with the properties in type K, overriding properties defined in T
 */
export declare type Override<T, K> = Omit<T, keyof K> & K;
/**
 * Returns the properties in T with the properties in type K changed from optional to required
 */
export declare type PickRequired<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
export declare type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};
export declare type RecursiveRequired<T> = {
  [P in keyof T]-?: RecursiveRequired<T[P]>;
};
export declare type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};
export declare type MaybeItem<T> = T | undefined | null;
export declare type ExchangeRateApiResult = {
  timestamp: number;
  base: 'USD';
  rates: {
    AED: number;
    AFN: number;
    ALL: number;
    AMD: number;
    ANG: number;
    AOA: number;
    ARS: number;
    AUD: number;
    AWG: number;
    AZN: number;
    BAM: number;
    BBD: number;
    BDT: number;
    BGN: number;
    BHD: number;
    BIF: number;
    BMD: number;
    BND: number;
    BOB: number;
    BRL: number;
    BSD: number;
    BTC: number;
    BTN: number;
    BWP: number;
    BYN: number;
    BZD: number;
    CAD: number;
    CDF: number;
    CHF: number;
    CLF: number;
    CLP: number;
    CNH: number;
    CNY: number;
    COP: number;
    CRC: number;
    CUC: number;
    CUP: number;
    CVE: number;
    CZK: number;
    DJF: number;
    DKK: number;
    DOP: number;
    DZD: number;
    EGP: number;
    ERN: number;
    ETB: number;
    EUR: number;
    FJD: number;
    FKP: number;
    GBP: number;
    GEL: number;
    GGP: number;
    GHS: number;
    GIP: number;
    GMD: number;
    GNF: number;
    GTQ: number;
    GYD: number;
    HKD: number;
    HNL: number;
    HRK: number;
    HTG: number;
    HUF: number;
    IDR: number;
    ILS: number;
    IMP: number;
    INR: number;
    IQD: number;
    IRR: number;
    ISK: number;
    JEP: number;
    JMD: number;
    JOD: number;
    JPY: number;
    KES: number;
    KGS: number;
    KHR: number;
    KMF: number;
    KPW: number;
    KRW: number;
    KWD: number;
    KYD: number;
    KZT: number;
    LAK: number;
    LBP: number;
    LKR: number;
    LRD: number;
    LSL: number;
    LYD: number;
    MAD: number;
    MDL: number;
    MGA: number;
    MKD: number;
    MMK: number;
    MNT: number;
    MOP: number;
    MRO: number;
    MRU: number;
    MUR: number;
    MVR: number;
    MWK: number;
    MXN: number;
    MYR: number;
    MZN: number;
    NAD: number;
    NGN: number;
    NIO: number;
    NOK: number;
    NPR: number;
    NZD: number;
    OMR: number;
    PAB: number;
    PEN: number;
    PGK: number;
    PHP: number;
    PKR: number;
    PLN: number;
    PYG: number;
    QAR: number;
    RON: number;
    RSD: number;
    RUB: number;
    RWF: number;
    SAR: number;
    SBD: number;
    SCR: number;
    SDG: number;
    SEK: number;
    SGD: number;
    SHP: number;
    SLL: number;
    SOS: number;
    SRD: number;
    SSP: number;
    STD: number;
    STN: number;
    SVC: number;
    SYP: number;
    SZL: number;
    THB: number;
    TJS: number;
    TMT: number;
    TND: number;
    TOP: number;
    TRY: number;
    TTD: number;
    TWD: number;
    TZS: number;
    UAH: number;
    UGX: number;
    USD: number;
    UYU: number;
    UZS: number;
    VES: number;
    VND: number;
    VUV: number;
    WST: number;
    XAF: number;
    XAG: number;
    XAU: number;
    XCD: number;
    XDR: number;
    XOF: number;
    XPD: number;
    XPF: number;
    XPT: number;
    YER: number;
    ZAR: number;
    ZMW: number;
    ZWL: number;
  };
};
export declare type VMCartView = MaybeItem<OrderFragment>;
export declare type VMCartTotals = MaybeItem<
  Pick<OrderFragment, 'id' | 'active' | 'totalQuantity' | 'totalWithTax'>
>;
export declare type VMCollectionType = 'category' | 'marketing';
export declare type VMCategoryNavItem = {
  id: ID;
  name: string;
  description: string;
  slug: string;
  position: number;
  invisible: boolean;
  featuredAsset: null | VMAssetItem;
  isFeatured: boolean;
  collectionType: VMCollectionType;
  parent: null | {
    id: ID;
  };
};
export declare type VMBreadcrumbItem = {
  id: ID;
  name: string;
  slug: string;
  current?: boolean;
};
export declare type VMCategoryDetailItemChild = {
  id: ID;
  name: string;
  slug: string;
  invisible: boolean;
  isFeatured: boolean;
  collectionType: VMCollectionType;
};
export declare type VMCategoryDetailItem = {
  id: ID;
  name: string;
  slug: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  isFeatured: boolean;
  campaign: CampaignFragment | null;
  collectionType: VMCollectionType;
  featuredAsset: null | VMAssetItem;
  breadcrumbs: Array<VMBreadcrumbItem>;
  children: Array<VMCategoryDetailItemChild>;
};
export declare type VMShippingMethodQuote = ShippingMethodQuoteFragment;
export declare type VMPaymentMethodQuote = PaymentMethodQuoteFragment;
export declare type VMActiveCustomer = MaybeItem<{
  id: ID;
  title: MaybeItem<string | null | undefined>;
  firstName: string;
  lastName: string;
  emailAddress: string;
  addresses: VMAddress[];
  phoneNumber: MaybeItem<string | null | undefined>;
  customFields: MaybeItem<{
    birthday?: MaybeItem<string>;
    faceshape?: MaybeItem<string>;
  }>;
}>;
export declare type VMRequestPasswordResetResult = {
  success: boolean;
};
export declare type VMRequestUpdateCustomerEmailAddressResult = {
  success: boolean;
};
export declare type VMUpdatePasswordResult = {
  success: boolean;
};
export declare type VMRegisterCustomerAccountResult = {
  success: boolean;
};
export declare type VMResetPasswordResult = {
  id: ID;
};
export declare type VMVerifyCustomerAccountResult = {
  id: ID;
};
export declare type VMDiscount = DiscountFragment;
export declare type VMFavorite = FavoriteFragment & {
  productSlug: string;
};
export declare type VMProductVariantFavorite = MaybeItem<{
  id: ID;
}>;
export declare type VMPagedFavorites = {
  items: VMFavorite[];
  totalItems: number;
};
export declare type VMOrder = MaybeItem<OrderFragment>;
export declare type VMActiveOrder = MaybeItem<OrderFragment>;
export declare type VMOrderLine = OrderLineFragment;
export declare type VMSearchOrders = {
  items: OrderFragment[];
  totalItems: number;
};
export declare type OrderState =
  | 'Created'
  | 'AddingItems'
  | 'ArrangingPayment'
  | 'PaymentAuthorized'
  | 'PaymentSettled'
  | 'PartiallyShipped'
  | 'Shipped'
  | 'PartiallyDelivered'
  | 'Delivered'
  | 'Modifying'
  | 'ArrangingAdditionalPayment'
  | 'Cancelled';
export declare type VMProductQa = ProductQaFragment;
export declare type VMPagedProductQas = {
  items: VMProductQa[];
  totalItems: number;
};
export declare type VMProductReview = ProductReviewFragment & {
  productReviewAvg: number;
  productReviewCount: number;
  productReviewRating: number;
  productReviewsHistogram: Array<{
    bin: number;
    frequency: number;
  }>;
  productId: ID;
  productMetaTitle: string;
  productSlug: string;
};
export declare type VMToReviewProductVariant =
  NextAvailableProductVariantsToReviewQuery['availableProductVariantsToReview']['items'][0];
export declare type VMPagedProductReviews<T = VMProductReview> = {
  items: T[];
  totalItems: number;
};
export declare type VMReviewSortOption = {
  name: string;
  key: keyof ProductReviewSortParameter;
  sort: SortOrder;
  current: boolean;
};
export declare type VMReviewFilterItem = {
  id: string;
  name: string;
  count: number;
  options: Array<VMReviewFilterItemOption>;
};
export declare type VMReviewFilterItemOption = {
  value: string;
  label: string;
  icon?: string | null;
  checked?: boolean;
};
export interface VMSearchedProduct {
  sku: string;
  slug: string;
  description: string;
  productId: ID;
  productName: string;
  productVariantId: ID;
  productVariantName: string;
  productVariantAsset: null | VMSearchedAssetItem;
  productAsset: null | VMSearchedAssetItem;
  currencyCode: CurrencyCode;
  facetIds: ID[];
  facetValueIds: ID[];
  collectionIds: ID[];
  score: number;
  price: VMProductPrice;
  priceWithTax: VMProductPrice;
}
/**
 * { name: 'Washed Black', bgColor: 'bg-gray-700'}
 */
export interface VMProductColor {
  name: string;
  bgStyle?: CSSProperties;
  groupId: ID;
  groupName: string;
  variantId: ID;
  active?: boolean;
}
export interface VMProductSize {
  name: string;
  displayName?: string;
  groupId: ID;
  groupName: string;
  variantId: ID;
  active?: boolean;
}
export declare type VMFacet = {
  id: ID;
  name: string;
  code: string;
  values: Omit<VMFacetValue, 'facet'>[];
};
export declare type VMFacetValue = {
  id: ID;
  name: string;
  code: string;
  icon?: string | null;
  facet: Omit<VMFacet, 'values'>;
};
export declare type VMSpecification = {
  name: string;
  value: string;
};
export interface VMProduct extends VMEntity {
  name: string;
  slug: string;
  reviewAvg: number;
  reviewsHistogram: Array<{
    bin: number;
    frequency: number;
  }>;
  reviewRating: number;
  reviewCount: number;
  reviews: VMPagedProductReviews;
  questionAnswers: VMPagedProductQas;
  metaTitle: string;
  metaDescription: string;
  description: string;
  productType: string;
  frameFields: ProductFrame;
  featuredAsset: null | VMAssetItem;
  variants: Array<VMProductVariant>;
  colors: Array<VMProductColor>;
  sizes: Array<VMProductSize>;
  specifications: Array<VMSpecification>;
  facetValues: Array<VMFacetValue>;
}
/**
 * `api/getProduct` 快速查询的查询对象.
 */
export interface VMProductSimple extends VMEntity {
  name: string;
  slug: string;
  reviewRating: number;
  reviewCount: number;
  description: string;
  productType: string;
  variants: Array<VMProductVariantSimple>;
  colors: Array<VMProductColor>;
  sizes: Array<VMProductSize>;
}
export interface VMProductOption {
  id: ID;
  name: string;
  code: string;
  /**
   * 扩展字段值, variant 比如颜色的显示背景色, 可以放在此字段
   */
  value?: string;
  groupId: ID;
}
export interface VMProductOptionGroup {
  id: string;
  code: string;
  name: string;
  options: Array<VMProductOption>;
}
export interface VMProductPrice {
  value: number | string;
  currencyCode: CurrencyCode;
}
export declare type VMProductVariantStock = 'LOW_STOCK' | 'OUT_OF_STOCK' | 'IN_STOCK';
export declare type VMProductVariantFrame = {
  dimensionFrameAsset: MaybeItem<VMAssetItem>;
  dimensionTempleAsset: MaybeItem<VMAssetItem>;
  tryonFrameModelConfig: MaybeItem<TryonModelConfig>;
  tryonFrameAsset: MaybeItem<VMAssetItem>;
  tryonTempleAsset: MaybeItem<VMAssetItem>;
  visualFrameAsset: MaybeItem<VMAssetItem>;
};
export interface VMProductVariant {
  id: ID;
  sku: string;
  name: string;
  assets: VMAssetItem[];
  isFavorited: boolean;
  featuredAsset: null | VMAssetItem;
  frameFields: VMProductVariantFrame | null;
  stockLevel: VMProductVariantStock;
  campaignView: ProductVariantCampaignView | null;
  price: VMProductPrice;
  priceWithTax: VMProductPrice;
  options: Array<VMProductOption>;
}
export interface VMProductVariantSimple {
  id: ID;
  sku: string;
  name: string;
  featuredAsset: null | VMAssetItem;
  isFavorited: boolean;
  campaignView: ProductVariantCampaignView | null;
  price: VMProductPrice;
  priceWithTax: VMProductPrice;
  options: Array<VMProductOption>;
}
export declare type VMRxItem = RxFragment;
export declare type VMPagedRxItems = {
  items: VMRxItem[];
  totalItems: number;
};
export declare type VMSearchProducts = {
  items: VMSearchedProduct[];
  totalItems: number;
};
export declare type VMSearchProductFilters = {
  facetValues: VMSearchFacetValue[];
};
export declare type VMSearchFacetValue = {
  facetValue: VMFacetValue;
  displayOrder: number;
  count: number;
};
export declare type VMSearchFilterItem = {
  id: ID;
  name: string;
  code: string;
  displayOrder: number;
  /**
   * 当前facetValue列表被选择的项个数
   */
  count: number;
  options: Array<VMSearchSidebarFilterItemOption>;
};
export declare type VMSearchSidebarFilterItemOption = {
  value: string;
  label: string;
  icon?: string | null;
  checked?: boolean;
};
export declare type VMSearchSortOption = {
  name: string;
  key: keyof SearchResultSortParameter;
  sort: SortOrder;
  current: boolean;
};
export declare type VMSettingItem = SettingFragment;
export declare type VMSettingItems = Array<VMSettingItem>;
export declare type VMTopicPageItem = TopicFragment;
export declare type VMTopicPages = Array<VMTopicPageItem>;
export declare type VMTopicLinkItem = TopicLinkFragment;
export declare type VMTopicLinks = Array<VMTopicLinkItem>;
export declare type VMTopic = MaybeItem<TopicFragment>;
export declare type VMTryonFaceModel = TryonFaceModelFragment;
/**
 * https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
 * Note :vendure missed AN, AQ, XK, UM , GS, NF, MQ, HM, GP, TF, GF, BV, BQ
 */
export declare type AllCountryCodeTypes =
  | 'AF'
  | 'AX'
  | 'AL'
  | 'DZ'
  | 'AS'
  | 'AD'
  | 'AO'
  | 'AI'
  | 'AG'
  | 'AR'
  | 'AM'
  | 'AN'
  | 'AQ'
  | 'AW'
  | 'AU'
  | 'AT'
  | 'AZ'
  | 'BS'
  | 'BH'
  | 'BD'
  | 'BB'
  | 'BY'
  | 'BE'
  | 'BZ'
  | 'BJ'
  | 'BM'
  | 'BT'
  | 'BO'
  | 'BQ'
  | 'BA'
  | 'BW'
  | 'BV'
  | 'BR'
  | 'IO'
  | 'BN'
  | 'BG'
  | 'BF'
  | 'BI'
  | 'CV'
  | 'KH'
  | 'CM'
  | 'CA'
  | 'KY'
  | 'CF'
  | 'TD'
  | 'CL'
  | 'CN'
  | 'CX'
  | 'CC'
  | 'CO'
  | 'KM'
  | 'CG'
  | 'CD'
  | 'CK'
  | 'CR'
  | 'CI'
  | 'HR'
  | 'CU'
  | 'CW'
  | 'CY'
  | 'CZ'
  | 'DK'
  | 'DJ'
  | 'DM'
  | 'DO'
  | 'EC'
  | 'EG'
  | 'SV'
  | 'GQ'
  | 'ER'
  | 'EE'
  | 'SZ'
  | 'ET'
  | 'FK'
  | 'FO'
  | 'FJ'
  | 'FI'
  | 'FR'
  | 'GF'
  | 'PF'
  | 'TF'
  | 'GA'
  | 'GM'
  | 'GE'
  | 'DE'
  | 'GH'
  | 'GI'
  | 'GR'
  | 'GL'
  | 'GD'
  | 'GP'
  | 'GU'
  | 'GT'
  | 'GG'
  | 'GN'
  | 'GW'
  | 'GY'
  | 'HT'
  | 'HM'
  | 'VA'
  | 'HN'
  | 'HK'
  | 'HU'
  | 'IS'
  | 'IN'
  | 'ID'
  | 'IR'
  | 'IQ'
  | 'IE'
  | 'IM'
  | 'IL'
  | 'IT'
  | 'JM'
  | 'JP'
  | 'JE'
  | 'JO'
  | 'KZ'
  | 'KE'
  | 'KI'
  | 'XK'
  | 'KP'
  | 'KR'
  | 'KW'
  | 'KG'
  | 'LA'
  | 'LV'
  | 'LB'
  | 'LS'
  | 'LR'
  | 'LY'
  | 'LI'
  | 'LT'
  | 'LU'
  | 'MO'
  | 'MK'
  | 'MG'
  | 'MW'
  | 'MY'
  | 'MV'
  | 'ML'
  | 'MT'
  | 'MH'
  | 'MQ'
  | 'MR'
  | 'MU'
  | 'YT'
  | 'MX'
  | 'FM'
  | 'MD'
  | 'MC'
  | 'MN'
  | 'ME'
  | 'MS'
  | 'MA'
  | 'MZ'
  | 'MM'
  | 'NA'
  | 'NR'
  | 'NP'
  | 'NL'
  | 'NC'
  | 'NZ'
  | 'NI'
  | 'NE'
  | 'NG'
  | 'NU'
  | 'NF'
  | 'MP'
  | 'NO'
  | 'OM'
  | 'PK'
  | 'PW'
  | 'PS'
  | 'PA'
  | 'PG'
  | 'PY'
  | 'PE'
  | 'PH'
  | 'PN'
  | 'PL'
  | 'PT'
  | 'PR'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RU'
  | 'RW'
  | 'BL'
  | 'SH'
  | 'KN'
  | 'LC'
  | 'MF'
  | 'PM'
  | 'VC'
  | 'WS'
  | 'SM'
  | 'ST'
  | 'SA'
  | 'SN'
  | 'RS'
  | 'SC'
  | 'SL'
  | 'SG'
  | 'SX'
  | 'SK'
  | 'SI'
  | 'SB'
  | 'SO'
  | 'ZA'
  | 'GS'
  | 'SS'
  | 'ES'
  | 'LK'
  | 'SD'
  | 'SR'
  | 'SJ'
  | 'SE'
  | 'CH'
  | 'SY'
  | 'TW'
  | 'TJ'
  | 'TZ'
  | 'TH'
  | 'TL'
  | 'TG'
  | 'TK'
  | 'TO'
  | 'TT'
  | 'TN'
  | 'TR'
  | 'TM'
  | 'TC'
  | 'TV'
  | 'UG'
  | 'UA'
  | 'AE'
  | 'GB'
  | 'US'
  | 'UM'
  | 'UY'
  | 'UZ'
  | 'VU'
  | 'VE'
  | 'VN'
  | 'VG'
  | 'VI'
  | 'WF'
  | 'EH'
  | 'YE'
  | 'ZM'
  | 'ZW';
export declare type SearchedAssetItem = {
  id: ID;
  preview: string;
};
export declare const normalizeSearchedAssetItem: (
  asset: MaybeItem<SearchedAssetItem>,
) => VMSearchedAssetItem | null;
export declare const normalizeAssetItem: (asset: MaybeItem<AssetFragment>) => VMAssetItem | null;
export declare const normalizeAssetItems: (assets: Array<AssetFragment>) => VMAssetItem[];
export declare const normalizeCatalog: (
  item: NextGetCatalogQuery['collection'],
) => VMCategoryDetailItem | null;
export declare function normalizeCategoryNavItems(
  items: NextGetAllCatalogsQuery['collections']['items'],
): VMCategoryNavItem[];
export declare const normalizeCustomer: (
  customer: MaybeItem<CustomerFragment>,
) => MaybeItem<VMActiveCustomer>;
export declare const normalizeDiscount: (discount: DiscountFragment) => DiscountFragment;
export declare const normalizeDiscounts: (discounts: DiscountFragment[]) => DiscountFragment[];
export declare const normalizeFavorite: (favorite: MaybeItem<FavoriteFragment>) => VMFavorite | null;
export declare const normalizeMyFavorites: (favorites: NextMyFavoritesQuery['favorites']) => VMPagedFavorites;
export declare const normalizeOrderLine: (line: OrderLineFragment) => OrderLineFragment;
export declare const normalizeOrderLines: (lines: OrderLineFragment[]) => OrderLineFragment[];
/**
 * 注意vendure (shippingAddress) 真实类型实际上是一个"simple-json" 这样可能会返回所有字段为null
 * 然后如果我们保存数据到数据库存在任何一个字段为null, 会报错, 因为我们在保存地址的API需要移除所有为null 的字段
 * @param orderAddress
 * @returns
 */
export declare const cleanOrderAddressNullFields: (orderAddress?: OrderAddress | null) => OrderAddress;
export declare const normalizeOrder: (order: MaybeItem<OrderFragment>) => OrderFragment | null;
export declare const normalizeOrders: (orders: OrderFragment[]) => OrderFragment[];
export declare function normalizeProductVariantOption(
  productVariantOption: ProductOptionFragment,
): VMProductOption;
export declare function normalizeProductVariantFrameFields(
  frameFields: MaybeItem<ProductVariantFrameFieldsFragment>,
): VMProductVariantFrame | null;
export declare function normalizeProductFacetValue(facetValue: ProductFacetValueFragment): VMFacetValue;
export declare function normalizeProductFacetValues(facetValues: ProductFacetValueFragment[]): VMFacetValue[];
export declare function normalizeProductSpecifications({
  facetValues,
  frameFields,
  languageCode,
}: NonNullable<NextGetProductQuery['product']>): VMSpecification[];
export declare function normalizeProductVariant(variants: ProductVariantFragment[]): VMProductVariant[];
export declare function normalizeProductVariantSimple(
  variants: ProductVariantSimpleFragment[],
): VMProductVariantSimple[];
export declare function normalizeVariantColors(variants: ProductVariantSimpleFragment[]): VMProductColor[];
export declare function normalizeVariantSizes(variants: ProductVariantSimpleFragment[]): VMProductSize[];
export declare function normalizeProduct(item: NextGetProductQuery['product']): VMProduct | null;
export declare function normalizeProductSimple(
  item: NextGetProductSimpleQuery['product'],
): VMProductSimple | null;
export declare const normalizeRxItem: (rxItem: RxFragment) => VMRxItem;
export declare const normalizeRxItems: (rxItems?: RxFragment[]) => RxFragment[];
export declare function normalizeSearchedProductFacetValues(
  searchFacetValues: NonNullable<NextSearchFiltersQuery['search']>['facetValues'],
): VMSearchFacetValue[];
export declare function normalizeSearchedProducts(
  items: Array<SearchResultFragment>,
): Array<VMSearchedProduct>;
export declare const normalizeProductSlugPath: (slug: string) => string;
export declare const normalizeCategorySlugPath: (slug: string) => string;
export declare const normalizeTopicSlugPath: (slug: string) => string;
export declare const normalizeReviewSlugPath: (slug?: string) => string | undefined;
/**
 * Core fetcher added by CommerceProvider
 */
export declare type FetcherOptions<Body = any> = {
  url: string;
  method?: string;
  body?: Body;
  locale?: string;
  domain?: string;
};
export declare const fetcher: <T = any, B = any>(options: FetcherOptions<B>) => Promise<T>;
/**
 * Used to HttpRequest service.
 */
export declare type HttpRequestOptions<B = {}> = Required<
  Pick<FetcherOptions<B>, 'locale' | 'domain' | 'body'>
>;
export declare class HttpRequest {
  /**
   * Performs a GraphQL watch query
   */
  protected request<T = any, B = any>(url: string, options: HttpRequestOptions<B>): Promise<T>;
  protected formPost<T = any, B = any>(url: string, options: HttpRequestOptions<B>): Promise<T>;
}
declare class AuthService extends HttpRequest {
  login(options: HttpRequestOptions<NextLoginMutationVariables>): Promise<NextLoginMutationCurrentUser>;
  logout(options: HttpRequestOptions<{}>): Promise<NextLogoutMutation['logout']>;
  signup(options: HttpRequestOptions<NextSignupMutationVariables>): Promise<NextLoginMutationCurrentUser>;
}
export declare const authService: AuthService;
declare class CartService extends HttpRequest {
  getCartView(options: HttpRequestOptions<NextCartViewQueryVariables>): Promise<VMCartView>;
  addToCart(options: HttpRequestOptions<NextAddToCartMutationVariables>): Promise<VMCartView>;
  adjustOrderLine(options: HttpRequestOptions<NextAdjustOrderLineMutationVariables>): Promise<VMCartView>;
  adjustOrderLineLens(
    options: HttpRequestOptions<NextAdjustOrderLineLensMutationVariables>,
  ): Promise<VMCartView>;
  removeOrderLine(options: HttpRequestOptions<NextRemoveOrderLineMutationVariables>): Promise<VMCartView>;
  getCartTotals(options: HttpRequestOptions<NextGetCartTotalsQueryVariables>): Promise<VMCartTotals>;
}
export declare const cartService: CartService;
declare class CatalogService extends HttpRequest {
  getAllCatalogs(options: HttpRequestOptions<void>): Promise<VMCategoryNavItem[]>;
  getCatalog(options: HttpRequestOptions<NextGetCatalogQueryVariables>): Promise<VMCategoryDetailItem>;
}
export declare const catalogService: CatalogService;
declare class CheckoutService extends HttpRequest {
  getEligiblePaymentMethods(
    options: HttpRequestOptions<NextEligiblePaymentMethodsQueryVariables>,
  ): Promise<VMPaymentMethodQuote[]>;
  getEligibleShippingMethods(
    options: HttpRequestOptions<NextEligibleShippingMethodsQueryVariables>,
  ): Promise<VMShippingMethodQuote[]>;
  addPaymentToOrder(options: HttpRequestOptions<NextAddPaymentToOrderMutationVariables>): Promise<VMOrder>;
  setCustomerForOrder(
    options: HttpRequestOptions<NextSetCustomerForOrderMutationVariables>,
  ): Promise<VMOrder>;
  setOrderCustomFields(
    options: HttpRequestOptions<NextSetOrderCustomFieldsMutationVariables>,
  ): Promise<VMOrder>;
  settlePaymentToOrder(
    options: HttpRequestOptions<NextSettlePaymentToOrderMutationVariables>,
  ): Promise<boolean>;
  setOrderBillingAddress(
    options: HttpRequestOptions<NextSetOrderBillingAddressMutationVariables>,
  ): Promise<VMOrder>;
  setOrderShippingMethod(
    options: HttpRequestOptions<NextSetOrderShippingMethodMutationVariables>,
  ): Promise<VMOrder>;
  setOrderShippingAddress(
    options: HttpRequestOptions<NextSetOrderShippingAddressMutationVariables>,
  ): Promise<VMOrder>;
  transitionOrderToState(
    options: HttpRequestOptions<NextTransitionOrderToStateMutationVariables>,
  ): Promise<VMOrder>;
}
export declare const checkoutService: CheckoutService;
declare class CommonService extends HttpRequest {
  availableCountries(
    options: HttpRequestOptions<void>,
  ): Promise<NextAvailableCountriesQuery['availableCountries']>;
}
export declare const commonService: CommonService;
declare class CouponService extends HttpRequest {
  applyCouponCode(options: HttpRequestOptions<NextApplyCouponCodeMutationVariables>): Promise<VMOrder>;
  removeCouponCode(options: HttpRequestOptions<NextRemoveCouponCodeMutationVariables>): Promise<VMOrder>;
  applyForCampaignCouponCode(
    options: HttpRequestOptions<NextApplyForCampaignCouponCodeMutationVariables>,
  ): Promise<CampaignCouponFragment>;
  getCampaignInfo(options: HttpRequestOptions<NextGetCampaignInfoQueryVariables>): Promise<CampaignFragment>;
}
export declare const couponService: CouponService;
declare class CustomerService extends HttpRequest {
  activeCustomer(options: HttpRequestOptions<{}>): Promise<VMActiveCustomer>;
  updateCustomer(options: HttpRequestOptions<NextUpdateCustomerMutationVariables>): Promise<VMActiveCustomer>;
  updateCustomerPassword(
    options: HttpRequestOptions<NextUpdateCustomerPasswordMutationVariables>,
  ): Promise<VMUpdatePasswordResult>;
  verifyCustomerAccount(
    options: HttpRequestOptions<NextVerifyCustomerAccountMutationVariables>,
  ): Promise<VMVerifyCustomerAccountResult>;
  resetPassword(
    options: HttpRequestOptions<NextResetPasswordMutationVariables>,
  ): Promise<VMResetPasswordResult>;
  requestPasswordReset(
    options: HttpRequestOptions<NextRequestPasswordResetMutationVariables>,
  ): Promise<VMRequestPasswordResetResult>;
  registerCustomerAccount(
    options: HttpRequestOptions<NextRegisterCustomerAccountMutationVariables>,
  ): Promise<VMRegisterCustomerAccountResult>;
  requestUpdateCustomerEmailAddress(
    options: HttpRequestOptions<NextRequestUpdateCustomerEmailAddressMutationVariables>,
  ): Promise<VMRequestUpdateCustomerEmailAddressResult>;
  createCustomerAddress(
    options: HttpRequestOptions<NextCreateCustomerAddressMutationVariables>,
  ): Promise<AddressFragment>;
  updateCustomerAddress(
    options: HttpRequestOptions<NextUpdateCustomerAddressMutationVariables>,
  ): Promise<AddressFragment>;
  deleteCustomerAddress(
    options: HttpRequestOptions<NextDeleteCustomerAddressMutationVariables>,
  ): Promise<AddressFragment>;
}
export declare const customerService: CustomerService;
export declare type ErrorData = {
  message: string;
  code?: string;
};
export declare type ErrorProps = {
  code?: string;
} & (
  | {
      message: string;
      errors?: never;
    }
  | {
      message?: never;
      errors: ErrorData[];
    }
);
export declare class CommerceError extends Error {
  code?: string;
  errors: ErrorData[];
  constructor({ message, code, errors }: ErrorProps);
}
export declare class ValidationError extends CommerceError {
  constructor(options: ErrorProps);
}
export declare class FetcherError extends CommerceError {
  status: number;
  constructor(
    options: {
      status: number;
    } & ErrorProps,
  );
}
declare class FavoriteService extends HttpRequest {
  myFavorites(options: HttpRequestOptions<NextMyFavoritesQueryVariables>): Promise<VMPagedFavorites>;
  toggleFavorite(options: HttpRequestOptions<NextToggleFavoriteMutationVariables>): Promise<VMFavorite>;
  /**
   * 查询当前产品Variant是否已经加入到favorite, 如果有返回favorite.id
   * @returns
   */
  productVariantFavorite(
    options: HttpRequestOptions<NextProductVariantFavoriteQueryVariables>,
  ): Promise<VMProductVariantFavorite>;
}
export declare const favoriteService: FavoriteService;
declare class LensProcessService extends HttpRequest {
  processConfigsOfStep(
    options: HttpRequestOptions<NextProcessConfigsOfStepQueryVariables>,
  ): Promise<NextProcessConfigsOfStepQuery['processConfigsOfStep']>;
  productConfiguredProcessSteps(
    options: HttpRequestOptions<NextProductConfiguredProcessStepsQueryVariables>,
  ): Promise<NextProductConfiguredProcessStepsQuery['productConfiguredProcessSteps']>;
}
export declare const lensProcessService: LensProcessService;
declare class OrderService extends HttpRequest {
  queryOrderById(options: HttpRequestOptions<NextQueryOrderByIdQueryVariables>): Promise<VMActiveOrder>;
  queryOrderStateById(
    options: HttpRequestOptions<NextQueryOrderStateByIdQueryVariables>,
  ): Promise<NextQueryOrderStateByIdQuery['order']>;
  queryOrderByCode(options: HttpRequestOptions<NextQueryOrderByCodeQueryVariables>): Promise<VMActiveOrder>;
  queryMyOrders(options: HttpRequestOptions<NextQueryMyOrdersQueryVariables>): Promise<VMSearchOrders>;
}
export declare const orderService: OrderService;
declare class ProductService extends HttpRequest {
  getProductSimple(
    options: HttpRequestOptions<NextGetProductSimpleQueryVariables>,
  ): Promise<VMProductSimple | null>;
}
export declare const productService: ProductService;
declare class ProductQaService extends HttpRequest {
  getProductQa(options: HttpRequestOptions<NextProductQasQueryVariables>): Promise<VMPagedProductQas>;
  createProductQa(options: HttpRequestOptions<NextCreateProductQaMutationVariables>): Promise<VMProductQa>;
  updateProductQaHelpful(
    options: HttpRequestOptions<NextUpdateProductQaHelpfulMutationVariables>,
  ): Promise<VMProductQa>;
}
export declare const productQaService: ProductQaService;
declare class ProductReviewService extends HttpRequest {
  createProductReview(
    options: HttpRequestOptions<NextCreateProductReviewMutationVariables['input']>,
  ): Promise<MaybeItem<VMProductReview>>;
  updateProductReview(
    options: HttpRequestOptions<NextUpdateProductReviewMutationVariables>,
  ): Promise<MaybeItem<VMProductReview>>;
  voteOnReview(options: HttpRequestOptions<NextVoteOnReviewMutationVariables>): Promise<VMProductReview>;
  myProductReview(
    options: HttpRequestOptions<NextMyProductReviewQueryVariables>,
  ): Promise<MaybeItem<VMProductReview>>;
  myProductReviews(
    options: HttpRequestOptions<NextMyProductReviewsQueryVariables>,
  ): Promise<VMPagedProductReviews>;
  productReviews(
    options: HttpRequestOptions<NextProductReviewsQueryVariables>,
  ): Promise<VMPagedProductReviews>;
  productWithImageReviews(
    options: HttpRequestOptions<NextProductWithImageReviewsQueryVariables>,
  ): Promise<VMPagedProductReviews>;
  canReviewProductVariant(
    options: HttpRequestOptions<NextCanReviewProductVariantQueryVariables>,
  ): Promise<boolean>;
  availableProductVariantsToReview(
    options: HttpRequestOptions<NextAvailableProductVariantsToReviewQueryVariables>,
  ): Promise<NextAvailableProductVariantsToReviewQuery['availableProductVariantsToReview']>;
}
export declare const productReviewService: ProductReviewService;
declare class RxService extends HttpRequest {
  createRx(options: HttpRequestOptions<NextSaveRxMutationVariables>): Promise<VMRxItem>;
  updateRx(options: HttpRequestOptions<NextUpdateRxMutationVariables>): Promise<VMRxItem>;
  deleteRx(options: HttpRequestOptions<NextDeleteRxMutationVariables>): Promise<DeletionResponseFragment>;
  myRxList(options: HttpRequestOptions<NextQueryRxListQueryVariables>): Promise<VMPagedRxItems>;
  listAndValidateRxConfigs(
    options: HttpRequestOptions<NextListAndValidateRxConfigsQueryVariables>,
  ): Promise<NextListAndValidateRxConfigsQuery['listAndValidateRxConfigs']>;
}
export declare const rxService: RxService;
declare class SearchService extends HttpRequest {
  searchedProducts(options: HttpRequestOptions<NextSearchQueryVariables>): Promise<VMSearchProducts>;
  searchedFilters(options: HttpRequestOptions<NextSearchQueryVariables>): Promise<VMSearchProductFilters>;
}
export declare const searchService: SearchService;
declare class SubscriptionService extends HttpRequest {
  addSubscriptionEmail(
    options: HttpRequestOptions<NextSubscriptionEmailMutationVariables>,
  ): Promise<NextSubscriptionEmailMutation['addSubscriptionEmail']>;
  addSubscriptionPhone(
    options: HttpRequestOptions<NextSubscriptionPhoneMutationVariables>,
  ): Promise<NextSubscriptionPhoneMutation['addSubscriptionPhone']>;
}
export declare const subscriptionService: SubscriptionService;
declare class TicketService extends HttpRequest {
  createTicket(
    options: HttpRequestOptions<NextCreateTicketMutationVariables>,
  ): Promise<NextCreateTicketMutation['createTicket']>;
}
export declare const ticketService: TicketService;
declare class TryonService extends HttpRequest {
  createMyTryonFaceModels(
    options: HttpRequestOptions<NextCreateTryonFaceModelsMutationVariables>,
  ): Promise<VMTryonFaceModel[]>;
  deleteMyTryonFaceModel(
    options: HttpRequestOptions<NextDeleteTryonFaceModelMutationVariables>,
  ): Promise<DeletionResponseFragment>;
  getMyTryonFaceModels(
    options: HttpRequestOptions<NextCustomerTryonFaceModelsQueryVariables>,
  ): Promise<VMTryonFaceModel[]>;
}
export declare const tryonService: TryonService;
declare class HelpCenterService extends HttpRequest {
  searchHelpArticles(
    options: HttpRequestOptions<NextSearchHelpArticlesQueryVariables>,
  ): Promise<NextSearchHelpArticlesQuery['helpCenters']>;
  updateHelpCenterHelpful(
    options: HttpRequestOptions<NextUpdateHelpCenterHelpfulMutationVariables>,
  ): Promise<NextUpdateHelpCenterHelpfulMutation['updateHelpCenterHelpful']>;
}
export declare const helpCenterService: HelpCenterService;
declare class InvoiceService extends HttpRequest {
  applyInvoice(
    options: HttpRequestOptions<NextCreateInvoiceMutationVariables>,
  ): Promise<NextCreateInvoiceMutation['createInvoice']>;
}
export declare const invoiceService: InvoiceService;

export {};
