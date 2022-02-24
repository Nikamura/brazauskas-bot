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

/**
 * @format int32
 */
export declare type OmbiStoreEntitiesRequestType = 0 | 1 | 2;
export interface OmbiCoreModelsSearchV2ExtraParams {
  /** @format int32 */
  providerId?: number;
  overview?: string | null;
  type?: OmbiStoreEntitiesRequestType;
  /** @format date-time */
  releaseDate?: string;
  requestStatus?: string | null;
}
export interface OmbiCoreModelsSearchV2CalendarViewModel {
  title?: string | null;
  /** @format date-time */
  start?: string;
  backgroundColor?: string | null;
  type?: OmbiStoreEntitiesRequestType;
  extraParams?: OmbiCoreModelsSearchV2ExtraParams[] | null;
  borderColor?: string | null;
}
export interface OmbiSettingsSettingsModelsExternalCouchPotatoSettings {
  enabled?: boolean;
  apiKey?: string | null;
  defaultProfileId?: string | null;
  username?: string | null;
  password?: string | null;
  ssl?: boolean;
  subDir?: string | null;
  ip?: string | null;
  /** @format int32 */
  port?: number;
  fullUri?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiApiCouchPotatoModelsProfileList {
  core?: boolean;
  hide?: boolean;
  _rev?: string | null;
  finish?: boolean[] | null;
  qualities?: string[] | null;
  _id?: string | null;
  _t?: string | null;
  label?: string | null;
  /** @format int32 */
  minimum_score?: number;
  stop_after?: number[] | null;
  wait_for?: object[] | null;
  /** @format int32 */
  order?: number;
  threeD?: object[] | null;
}
export interface OmbiApiCouchPotatoModelsCouchPotatoProfiles {
  list?: OmbiApiCouchPotatoModelsProfileList[] | null;
  success?: boolean;
}
export interface OmbiApiCouchPotatoModelsCouchPotatoApiKey {
  success?: boolean;
  apiKey?: string | null;
}
export interface OmbiSettingsSettingsModelsCustomPageSettings {
  title?: string | null;
  html?: string | null;
  fontAwesomeIcon?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiCoreSettingsModelsExternalEmbySelectedLibraries {
  key?: string | null;
  title?: string | null;
  collectionType?: string | null;
  enabled?: boolean;
}
export interface OmbiCoreSettingsModelsExternalEmbyServers {
  serverId?: string | null;
  name?: string | null;
  apiKey?: string | null;
  administratorId?: string | null;
  serverHostname?: string | null;
  enableEpisodeSearching?: boolean;
  embySelectedLibraries?: OmbiCoreSettingsModelsExternalEmbySelectedLibraries[] | null;
  ssl?: boolean;
  subDir?: string | null;
  ip?: string | null;
  /** @format int32 */
  port?: number;
  fullUri?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiCoreSettingsModelsExternalEmbySettings {
  enable?: boolean;
  servers?: OmbiCoreSettingsModelsExternalEmbyServers[] | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiApiEmbyModelsPublicInfo {
  localAddress?: string | null;
  serverName?: string | null;
  version?: string | null;
  operatingSystem?: string | null;
  id?: string | null;
}
export interface OmbiModelsExternalUsersViewModel {
  username?: string | null;
  id?: string | null;
}
export interface OmbiApiEmbyModelsMediaMediaFolders {
  name?: string | null;
  serverId?: string | null;
  id?: string | null;
  collectionType?: string | null;
}
export interface OmbiApiEmbyModelsEmbyItemContainer1OmbiApiEmbyModelsMediaMediaFoldersOmbiApiEmbyVersion3000CultureNeutralPublicKeyTokenNull {
  items?: OmbiApiEmbyModelsMediaMediaFolders[] | null;
  /** @format int32 */
  totalRecordCount?: number;
}
/**
 * @format int32
 */
export declare type OmbiStoreEntitiesUserType = 0 | 1 | 2 | 3 | 4 | 5;
export interface OmbiModelsConnectedUsersViewModel {
  userId?: string | null;
  displayName?: string | null;
  userType?: OmbiStoreEntitiesUserType;
}
export interface OmbiCoreModelsUIClaimCheckboxes {
  value?: string | null;
  enabled?: boolean;
}
/**
 * @format int32
 */
export declare type OmbiCoreModelsUserType = 1 | 2 | 3 | 5;
export interface OmbiCoreModelsRequestQuotaCountModel {
  hasLimit?: boolean;
  /** @format int32 */
  limit?: number;
  /** @format int32 */
  remaining?: number;
  /** @format date-time */
  nextRequest?: string;
}
/**
 * @format int32
 */
export declare type OmbiStoreEntitiesRequestLimitType = 0 | 1 | 2;
export interface OmbiStoreEntitiesNotificationUserId {
  playerId?: string | null;
  userId?: string | null;
  /** @format date-time */
  addedAt?: string;
  user?: OmbiStoreEntitiesOmbiUser | null;
  /** @format int32 */
  id?: number;
}
/**
 * @format int32
 */
export declare type OmbiHelpersNotificationAgent = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export interface OmbiStoreEntitiesUserNotificationPreferences {
  userId?: string | null;
  agent?: OmbiHelpersNotificationAgent;
  enabled?: boolean;
  value?: string | null;
  user?: OmbiStoreEntitiesOmbiUser | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiStoreEntitiesOmbiUser {
  alias?: string | null;
  userType?: OmbiStoreEntitiesUserType;
  providerUserId?: string | null;
  /** @format date-time */
  lastLoggedIn?: string | null;
  language?: string | null;
  streamingCountry: string;
  /** @format int32 */
  movieRequestLimit?: number | null;
  /** @format int32 */
  episodeRequestLimit?: number | null;
  /** @format int32 */
  musicRequestLimit?: number | null;
  movieRequestLimitType?: OmbiStoreEntitiesRequestLimitType | null;
  episodeRequestLimitType?: OmbiStoreEntitiesRequestLimitType | null;
  musicRequestLimitType?: OmbiStoreEntitiesRequestLimitType | null;
  userAccessToken?: string | null;
  notificationUserIds?: OmbiStoreEntitiesNotificationUserId[] | null;
  userNotificationPreferences?: OmbiStoreEntitiesUserNotificationPreferences[] | null;
  isEmbyConnect?: boolean;
  userAlias?: string | null;
  emailLogin?: boolean;
  isSystemUser?: boolean;
  passwordHash?: string | null;
  securityStamp?: string | null;
  concurrencyStamp?: string | null;
  id?: string | null;
  userName?: string | null;
  normalizedUserName?: string | null;
  email?: string | null;
  normalizedEmail?: string | null;
  emailConfirmed?: boolean;
  phoneNumber?: string | null;
  phoneNumberConfirmed?: boolean;
  twoFactorEnabled?: boolean;
  /** @format date-time */
  lockoutEnd?: string | null;
  lockoutEnabled?: boolean;
  /** @format int32 */
  accessFailedCount?: number;
}
export interface OmbiStoreEntitiesUserQualityProfiles {
  userId?: string | null;
  /** @format int32 */
  sonarrQualityProfileAnime?: number;
  /** @format int32 */
  sonarrRootPathAnime?: number;
  /** @format int32 */
  sonarrRootPath?: number;
  /** @format int32 */
  sonarrQualityProfile?: number;
  /** @format int32 */
  radarrRootPath?: number;
  /** @format int32 */
  radarrQualityProfile?: number;
  user?: OmbiStoreEntitiesOmbiUser | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiCoreModelsUIUserViewModel {
  id?: string | null;
  userName?: string | null;
  alias?: string | null;
  claims?: OmbiCoreModelsUIClaimCheckboxes[] | null;
  emailAddress?: string | null;
  password?: string | null;
  /** @format date-time */
  lastLoggedIn?: string | null;
  language?: string | null;
  hasLoggedIn?: boolean;
  userType?: OmbiCoreModelsUserType;
  /** @format int32 */
  movieRequestLimit?: number;
  /** @format int32 */
  episodeRequestLimit?: number;
  streamingCountry?: string | null;
  episodeRequestQuota?: OmbiCoreModelsRequestQuotaCountModel | null;
  movieRequestQuota?: OmbiCoreModelsRequestQuotaCountModel | null;
  musicRequestQuota?: OmbiCoreModelsRequestQuotaCountModel | null;
  /** @format int32 */
  musicRequestLimit?: number;
  userQualityProfiles?: OmbiStoreEntitiesUserQualityProfiles | null;
  movieRequestLimitType?: OmbiStoreEntitiesRequestLimitType;
  musicRequestLimitType?: OmbiStoreEntitiesRequestLimitType;
  episodeRequestLimitType?: OmbiStoreEntitiesRequestLimitType;
}
export interface OmbiCoreModelsUIUserViewModelDropdown {
  id?: string | null;
  username?: string | null;
  email?: string | null;
}
export interface OmbiModelsIdentityIdentityResult {
  errors?: string[] | null;
  successful?: boolean;
}
export interface OmbiModelsIdentityUserLanguage {
  lang?: string | null;
}
export interface OmbiModelsIdentityCountryStreamingPreference {
  code?: string | null;
}
export interface OmbiModelsIdentityUpdateLocalUserModel {
  currentPassword?: string | null;
  confirmNewPassword?: string | null;
  id?: string | null;
  userName?: string | null;
  alias?: string | null;
  claims?: OmbiCoreModelsUIClaimCheckboxes[] | null;
  emailAddress?: string | null;
  password?: string | null;
  /** @format date-time */
  lastLoggedIn?: string | null;
  language?: string | null;
  hasLoggedIn?: boolean;
  userType?: OmbiCoreModelsUserType;
  /** @format int32 */
  movieRequestLimit?: number;
  /** @format int32 */
  episodeRequestLimit?: number;
  streamingCountry?: string | null;
  episodeRequestQuota?: OmbiCoreModelsRequestQuotaCountModel | null;
  movieRequestQuota?: OmbiCoreModelsRequestQuotaCountModel | null;
  musicRequestQuota?: OmbiCoreModelsRequestQuotaCountModel | null;
  /** @format int32 */
  musicRequestLimit?: number;
  userQualityProfiles?: OmbiStoreEntitiesUserQualityProfiles | null;
  movieRequestLimitType?: OmbiStoreEntitiesRequestLimitType;
  musicRequestLimitType?: OmbiStoreEntitiesRequestLimitType;
  episodeRequestLimitType?: OmbiStoreEntitiesRequestLimitType;
}
export interface OmbiModelsIdentityAddNotificationPreference {
  agent?: OmbiHelpersNotificationAgent;
  userId?: string | null;
  value?: string | null;
  enabled?: boolean;
}
export interface MicrosoftAspNetCoreMvcProblemDetails {
  type?: string | null;
  title?: string | null;
  /** @format int32 */
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
}
/**
 * @format int32
 */
export declare type OmbiStoreEntitiesRequestsIssueStatus = 0 | 1 | 2 | 3;
export interface OmbiStoreEntitiesRequestsIssueCategory {
  value?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiStoreEntitiesRequestsIssueComments {
  userId?: string | null;
  comment?: string | null;
  /** @format int32 */
  issuesId?: number | null;
  /** @format date-time */
  date?: string;
  issues?: OmbiStoreEntitiesRequestsIssues | null;
  user?: OmbiStoreEntitiesOmbiUser | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiStoreEntitiesRequestsIssues {
  title?: string | null;
  requestType?: OmbiStoreEntitiesRequestType;
  providerId?: string | null;
  /** @format int32 */
  requestId?: number | null;
  subject?: string | null;
  description?: string | null;
  /** @format int32 */
  issueCategoryId?: number;
  issueCategory?: OmbiStoreEntitiesRequestsIssueCategory | null;
  status?: OmbiStoreEntitiesRequestsIssueStatus;
  /** @format date-time */
  resovledDate?: string | null;
  /** @format date-time */
  createdDate?: string;
  userReportedId?: string | null;
  userReported?: OmbiStoreEntitiesOmbiUser | null;
  comments?: OmbiStoreEntitiesRequestsIssueComments[] | null;
  posterPath?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiCoreEngineV2IssuesSummaryModel {
  title?: string | null;
  /** @format int32 */
  count?: number;
  providerId?: string | null;
  issues?: OmbiStoreEntitiesRequestsIssues[] | null;
}
export interface OmbiModelsIssueCountModel {
  /** @format int32 */
  pending?: number;
  /** @format int32 */
  inProgress?: number;
  /** @format int32 */
  resolved?: number;
}
export interface OmbiModelsIssueCommentChatViewModel {
  /** @format int32 */
  id?: number;
  comment?: string | null;
  /** @format date-time */
  date?: string;
  username?: string | null;
  adminComment?: boolean;
}
export interface OmbiModelsNewIssueCommentViewModel {
  comment?: string | null;
  /** @format int32 */
  issueId?: number | null;
}
export interface OmbiModelsIssueStateViewModel {
  /** @format int32 */
  issueId?: number;
  status?: OmbiStoreEntitiesRequestsIssueStatus;
}
export interface OmbiCoreSettingsModelsExternalJellyfinSelectedLibraries {
  key?: string | null;
  title?: string | null;
  collectionType?: string | null;
  enabled?: boolean;
}
export interface OmbiCoreSettingsModelsExternalJellyfinServers {
  serverId?: string | null;
  name?: string | null;
  apiKey?: string | null;
  administratorId?: string | null;
  serverHostname?: string | null;
  enableEpisodeSearching?: boolean;
  jellyfinSelectedLibraries?: OmbiCoreSettingsModelsExternalJellyfinSelectedLibraries[] | null;
  ssl?: boolean;
  subDir?: string | null;
  ip?: string | null;
  /** @format int32 */
  port?: number;
  fullUri?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiCoreSettingsModelsExternalJellyfinSettings {
  enable?: boolean;
  servers?: OmbiCoreSettingsModelsExternalJellyfinServers[] | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiApiJellyfinModelsPublicInfo {
  localAddress?: string | null;
  serverName?: string | null;
  version?: string | null;
  operatingSystem?: string | null;
  id?: string | null;
}
export interface OmbiApiJellyfinModelsMediaFolders {
  name?: string | null;
  serverId?: string | null;
  id?: string | null;
  collectionType?: string | null;
}
export interface OmbiApiJellyfinModelsJellyfinItemContainer1OmbiApiJellyfinModelsMediaFoldersOmbiApiJellyfinVersion3000CultureNeutralPublicKeyTokenNull {
  items?: OmbiApiJellyfinModelsMediaFolders[] | null;
  /** @format int32 */
  totalRecordCount?: number;
}
export interface OmbiModelsMediaSeverAvailibilityViewModel {
  /** @format int32 */
  serversAvailable?: number;
  /** @format int32 */
  serversUnavailable?: number;
  partiallyDown?: boolean;
  completelyDown?: boolean;
  fullyAvailable?: boolean;
  /** @format int32 */
  totalServers?: number;
}
export interface OmbiSettingsSettingsModelsExternalLidarrSettings {
  enabled?: boolean;
  apiKey?: string | null;
  defaultQualityProfile?: string | null;
  defaultRootPath?: string | null;
  albumFolder?: boolean;
  /** @format int32 */
  metadataProfileId?: number;
  addOnly?: boolean;
  ssl?: boolean;
  subDir?: string | null;
  ip?: string | null;
  /** @format int32 */
  port?: number;
  fullUri?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiApiLidarrModelsQuality {
  /** @format int32 */
  id?: number;
  name?: string | null;
}
export interface OmbiApiLidarrModelsItem {
  quality?: OmbiApiLidarrModelsQuality | null;
  allowed?: boolean;
}
export interface OmbiApiLidarrModelsLidarrProfile {
  name?: string | null;
  items?: OmbiApiLidarrModelsItem[] | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiApiLidarrModelsLidarrRootFolder {
  path?: string | null;
  /** @format int64 */
  freeSpace?: number;
  unmappedFolders?: object[] | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiApiLidarrModelsMetadataProfile {
  name?: string | null;
  /** @format int32 */
  id?: number;
}
/**
 * @format int32
 */
export declare type MicrosoftExtensionsLoggingLogLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export interface OmbiModelsUiLoggingModel {
  level?: MicrosoftExtensionsLoggingLogLevel;
  description?: string | null;
  /** @format int32 */
  id?: number;
  location?: string | null;
  stackTrace?: string | null;
  /** @format date-time */
  dateTime?: string;
}
export interface OmbiStoreEntitiesRequestsAlbumRequest {
  foreignAlbumId?: string | null;
  foreignArtistId?: string | null;
  disk?: string | null;
  cover?: string | null;
  /** @format double */
  rating?: number;
  /** @format date-time */
  releaseDate?: string;
  artistName?: string | null;
  subscribed?: boolean;
  showSubscribe?: boolean;
  requestStatus?: string | null;
  title?: string | null;
  approved?: boolean;
  /** @format date-time */
  markedAsApproved?: string;
  /** @format date-time */
  requestedDate?: string;
  available?: boolean;
  /** @format date-time */
  markedAsAvailable?: string | null;
  requestedUserId?: string | null;
  denied?: boolean | null;
  /** @format date-time */
  markedAsDenied?: string;
  deniedReason?: string | null;
  requestType?: OmbiStoreEntitiesRequestType;
  requestedByAlias?: string | null;
  requestedUser?: OmbiStoreEntitiesOmbiUser | null;
  canApprove?: boolean;
  /** @format int32 */
  id?: number;
}
export interface OmbiCoreModelsUIRequestsViewModel1OmbiStoreEntitiesRequestsAlbumRequestOmbiStoreVersion3000CultureNeutralPublicKeyTokenNull {
  collection?: OmbiStoreEntitiesRequestsAlbumRequest[] | null;
  /** @format int32 */
  total?: number;
}
export interface OmbiCoreModelsRequestsMusicAlbumRequestViewModel {
  foreignAlbumId?: string | null;
  requestedByAlias?: string | null;
}
/**
 * @format int32
 */
export declare type OmbiCoreEngineErrorCode = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export interface OmbiCoreEngineRequestEngineResult {
  result?: boolean;
  message?: string | null;
  isError?: boolean;
  errorMessage?: string | null;
  errorCode?: OmbiCoreEngineErrorCode | null;
  /** @format int32 */
  requestId?: number;
}
export interface OmbiCoreModelsRequestsAlbumUpdateModel {
  /** @format int32 */
  id?: number;
}
export interface OmbiCoreModelsRequestsDenyAlbumModel {
  reason?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiCoreModelsMassEmailModel {
  subject?: string | null;
  body?: string | null;
  bcc?: boolean;
  users?: OmbiStoreEntitiesOmbiUser[] | null;
}
export interface OmbiApiPlexModelsUserRequest {
  login?: string | null;
  password?: string | null;
}
export interface OmbiApiPlexModelsSubscription {
  active?: boolean;
  status?: string | null;
  plan?: object | null;
  features?: object | null;
}
export interface OmbiApiPlexModelsRoles {
  roles?: object[] | null;
}
export interface OmbiApiPlexModelsUser {
  id?: string | null;
  email?: string | null;
  uuid?: string | null;
  joined_at?: string | null;
  username?: string | null;
  title?: string | null;
  thumb?: string | null;
  hasPassword?: string | null;
  authentication_token?: string | null;
  subscription?: OmbiApiPlexModelsSubscription | null;
  roles?: OmbiApiPlexModelsRoles | null;
  entitlements?: string[] | null;
  confirmed_at?: object | null;
  /** @format int32 */
  forum_id?: number;
}
export interface OmbiApiPlexModelsPlexAuthentication {
  user?: OmbiApiPlexModelsUser | null;
}
export interface OmbiCoreSettingsModelsExternalPlexSelectedLibraries {
  /** @format int32 */
  key?: number;
  title?: string | null;
  enabled?: boolean;
}
export interface OmbiCoreSettingsModelsExternalPlexServers {
  name?: string | null;
  plexAuthToken?: string | null;
  machineIdentifier?: string | null;
  /** @format int32 */
  episodeBatchSize?: number;
  serverHostname?: string | null;
  plexSelectedLibraries?: OmbiCoreSettingsModelsExternalPlexSelectedLibraries[] | null;
  ssl?: boolean;
  subDir?: string | null;
  ip?: string | null;
  /** @format int32 */
  port?: number;
  fullUri?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiApiPlexModelsLocation {
  /** @format int32 */
  id?: number;
  path?: string | null;
}
export interface OmbiApiPlexModelsGenre {
  tag?: string | null;
}
export interface OmbiApiPlexModelsRole {
  tag?: string | null;
}
export interface OmbiApiPlexModelsDirectory {
  allowSync?: boolean;
  art?: string | null;
  composite?: string | null;
  filters?: boolean;
  refreshing?: boolean;
  thumb?: string | null;
  key?: string | null;
  type?: string | null;
  title?: string | null;
  agent?: string | null;
  scanner?: string | null;
  language?: string | null;
  uuid?: string | null;
  /** @format int32 */
  updatedAt?: number;
  /** @format int32 */
  createdAt?: number;
  location?: OmbiApiPlexModelsLocation[] | null;
  providerId?: string | null;
  guid?: string | null;
  genre?: OmbiApiPlexModelsGenre[] | null;
  role?: OmbiApiPlexModelsRole[] | null;
  librarySectionID?: string | null;
  librarySectionTitle?: string | null;
  librarySectionUUID?: string | null;
  personal?: string | null;
  sourceTitle?: string | null;
  ratingKey?: string | null;
  studio?: string | null;
  seasons?: OmbiApiPlexModelsDirectory[] | null;
}
export interface OmbiApiPlexModelsMedium {
  videoResolution?: string | null;
  /** @format int32 */
  id?: number;
  /** @format int32 */
  duration?: number;
  /** @format int32 */
  bitrate?: number;
  /** @format int32 */
  width?: number;
  /** @format int32 */
  height?: number;
  /** @format float */
  aspectRatio?: number;
  /** @format int32 */
  audioChannels?: number;
  audioCodec?: string | null;
  videoCodec?: string | null;
  container?: string | null;
  videoFrameRate?: string | null;
  audioProfile?: string | null;
  videoProfile?: string | null;
}
export interface OmbiApiPlexModelsPlexGuids {
  id?: string | null;
}
export interface OmbiApiPlexModelsMetadata {
  /** @format int32 */
  ratingKey?: number;
  key?: string | null;
  studio?: string | null;
  type?: string | null;
  title?: string | null;
  contentRating?: string | null;
  summary?: string | null;
  /** @format int32 */
  index?: number;
  /** @format float */
  rating?: number;
  /** @format int32 */
  year?: number;
  thumb?: string | null;
  art?: string | null;
  banner?: string | null;
  theme?: string | null;
  /** @format int32 */
  leafCount?: number;
  /** @format int32 */
  viewedLeafCount?: number;
  /** @format int32 */
  childCount?: number;
  genre?: OmbiApiPlexModelsGenre[] | null;
  primaryExtraKey?: string | null;
  /** @format int32 */
  parentRatingKey?: number;
  /** @format int32 */
  grandparentRatingKey?: number;
  guid?: OmbiApiPlexModelsPlexGuids[] | null;
  /** @format int32 */
  librarySectionID?: number;
  librarySectionKey?: string | null;
  grandparentKey?: string | null;
  parentKey?: string | null;
  grandparentTitle?: string | null;
  parentTitle?: string | null;
  /** @format int32 */
  parentIndex?: number;
  parentThumb?: string | null;
  grandparentThumb?: string | null;
  grandparentArt?: string | null;
  grandparentTheme?: string | null;
  chapterSource?: string | null;
  media?: OmbiApiPlexModelsMedium[] | null;
}
export interface OmbiApiPlexModelsMediacontainer {
  /** @format int32 */
  size?: number;
  /** @format int32 */
  totalSize?: number;
  title1?: string | null;
  directory?: OmbiApiPlexModelsDirectory[] | null;
  art?: string | null;
  /** @format int32 */
  librarySectionID?: number;
  librarySectionTitle?: string | null;
  librarySectionUUID?: string | null;
  nocache?: boolean;
  thumb?: string | null;
  title2?: string | null;
  viewGroup?: string | null;
  /** @format int32 */
  viewMode?: number;
  metadata?: OmbiApiPlexModelsMetadata[] | null;
}
export interface OmbiApiPlexModelsPlexContainer {
  mediaContainer?: OmbiApiPlexModelsMediacontainer | null;
}
export interface OmbiModelsExternalPlexLibrariesResponse {
  data?: OmbiApiPlexModelsPlexContainer | null;
  successful?: boolean;
  message?: string | null;
}
export interface OmbiApiPlexModelsSectionLite {
  id?: string | null;
  key?: string | null;
  type?: string | null;
  title?: string | null;
}
export interface OmbiModelsExternalPlexLibrariesLiteResponse {
  data?: OmbiApiPlexModelsSectionLite[] | null;
  successful?: boolean;
  message?: string | null;
}
export interface OmbiModelsExternalPlexUserViewModel {
  username?: string | null;
  machineIdentifier?: string | null;
  libsSelected?: number[] | null;
}
export interface OmbiApiPlexModelsServerServerInfo {
  accessToken?: string | null;
  name?: string | null;
  address?: string | null;
  port?: string | null;
  version?: string | null;
  scheme?: string | null;
  host?: string | null;
  localAddresses?: string | null;
  machineIdentifier?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  owned?: string | null;
  synced?: string | null;
  sourceTitle?: string | null;
  ownerId?: string | null;
  home?: string | null;
}
export interface OmbiApiPlexModelsServerPlexServer {
  server?: OmbiApiPlexModelsServerServerInfo[] | null;
  friendlyName?: string | null;
  identifier?: string | null;
  machineIdentifier?: string | null;
  size?: string | null;
}
export interface OmbiModelsExternalPlexServersViewModel {
  success?: boolean;
  message?: string | null;
  servers?: OmbiApiPlexModelsServerPlexServer | null;
}
export interface OmbiApiPlexModelsOAuthLocation {
  code?: string | null;
  country?: string | null;
  city?: string | null;
  subdivisions?: string | null;
  coordinates?: string | null;
}
export interface OmbiApiPlexModelsOAuthOAuthPin {
  /** @format int32 */
  id?: number;
  code?: string | null;
  trusted?: boolean;
  clientIdentifier?: string | null;
  location?: OmbiApiPlexModelsOAuthLocation | null;
  /** @format int32 */
  expiresIn?: number;
  /** @format date-time */
  createdAt?: string;
  /** @format date-time */
  expiresAt?: string;
  authToken?: string | null;
}
export interface OmbiModelsPlexOAuthViewModel {
  wizard?: boolean;
  pin?: OmbiApiPlexModelsOAuthOAuthPin | null;
}
export interface OmbiSettingsSettingsModelsExternalRadarrSettings {
  enabled?: boolean;
  apiKey?: string | null;
  defaultQualityProfile?: string | null;
  defaultRootPath?: string | null;
  addOnly?: boolean;
  minimumAvailability?: string | null;
  scanForAvailability?: boolean;
  ssl?: boolean;
  subDir?: string | null;
  ip?: string | null;
  /** @format int32 */
  port?: number;
  fullUri?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiApiRadarrModelsRadarrRootFolder {
  /** @format int32 */
  id?: number;
  path?: string | null;
  /** @format int64 */
  freespace?: number;
}
export interface OmbiSettingsSettingsModelsExternalSonarrSettings {
  enabled?: boolean;
  apiKey?: string | null;
  qualityProfile?: string | null;
  seasonFolders?: boolean;
  rootPath?: string | null;
  qualityProfileAnime?: string | null;
  rootPathAnime?: string | null;
  addOnly?: boolean;
  v3?: boolean;
  /** @format int32 */
  languageProfile?: number;
  /** @format int32 */
  languageProfileAnime?: number;
  scanForAvailability?: boolean;
  ssl?: boolean;
  subDir?: string | null;
  ip?: string | null;
  /** @format int32 */
  port?: number;
  fullUri?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiApiRadarrModelsTag {
  /** @format int32 */
  id?: number;
  label?: string | null;
}
export interface OmbiCoreModelsRecentlyAddedMovieModel {
  /** @format int32 */
  id?: number;
  title?: string | null;
  overview?: string | null;
  imdbId?: string | null;
  tvDbId?: string | null;
  theMovieDbId?: string | null;
  releaseYear?: string | null;
  /** @format date-time */
  addedAt?: string;
  quality?: string | null;
}
export interface OmbiStoreEntitiesRequestsMovieRequests {
  /** @format int32 */
  theMovieDbId?: number;
  /** @format int32 */
  issueId?: number | null;
  issues?: OmbiStoreEntitiesRequestsIssues[] | null;
  subscribed?: boolean;
  showSubscribe?: boolean;
  /** @format int32 */
  rootPathOverride?: number;
  /** @format int32 */
  qualityOverride?: number;
  langCode?: string | null;
  languageCode?: string | null;
  requestStatus?: string | null;
  imdbId?: string | null;
  overview?: string | null;
  posterPath?: string | null;
  /** @format date-time */
  releaseDate?: string;
  /** @format date-time */
  digitalReleaseDate?: string | null;
  status?: string | null;
  background?: string | null;
  released?: boolean;
  digitalRelease?: boolean;
  title?: string | null;
  approved?: boolean;
  /** @format date-time */
  markedAsApproved?: string;
  /** @format date-time */
  requestedDate?: string;
  available?: boolean;
  /** @format date-time */
  markedAsAvailable?: string | null;
  requestedUserId?: string | null;
  denied?: boolean | null;
  /** @format date-time */
  markedAsDenied?: string;
  deniedReason?: string | null;
  requestType?: OmbiStoreEntitiesRequestType;
  requestedByAlias?: string | null;
  requestedUser?: OmbiStoreEntitiesOmbiUser | null;
  canApprove?: boolean;
  /** @format int32 */
  id?: number;
}
export interface OmbiCoreModelsUIRequestsViewModel1OmbiStoreEntitiesRequestsMovieRequestsOmbiStoreVersion3000CultureNeutralPublicKeyTokenNull {
  collection?: OmbiStoreEntitiesRequestsMovieRequests[] | null;
  /** @format int32 */
  total?: number;
}
export interface OmbiCoreModelsRequestsMovieRequestViewModel {
  /** @format int32 */
  theMovieDbId?: number;
  languageCode?: string | null;
  requestedByAlias?: string | null;
  requestOnBehalf?: string | null;
  /** @format int32 */
  rootFolderOverride?: number | null;
  /** @format int32 */
  qualityPathOverride?: number | null;
}
export interface OmbiCoreModelsRequestsMovieUpdateModel {
  /** @format int32 */
  id?: number;
}
export interface OmbiCoreModelsRequestsDenyMovieModel {
  reason?: string | null;
  /** @format int32 */
  id?: number;
}
/**
 * @format int32
 */
export declare type OmbiStoreEntitiesRequestsSeriesType = 0 | 1;
export interface OmbiStoreRepositoryRequestsEpisodeRequests {
  /** @format int32 */
  episodeNumber?: number;
  title?: string | null;
  /** @format date-time */
  airDate?: string;
  url?: string | null;
  available?: boolean;
  approved?: boolean;
  requested?: boolean;
  denied?: boolean | null;
  /** @format int32 */
  seasonId?: number;
  season?: OmbiStoreRepositoryRequestsSeasonRequests | null;
  airDateDisplay?: string | null;
  requestStatus?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiStoreRepositoryRequestsSeasonRequests {
  /** @format int32 */
  seasonNumber?: number;
  overview?: string | null;
  episodes?: OmbiStoreRepositoryRequestsEpisodeRequests[] | null;
  /** @format int32 */
  childRequestId?: number;
  childRequest?: OmbiStoreEntitiesRequestsChildRequests | null;
  seasonAvailable?: boolean;
  /** @format int32 */
  id?: number;
}
export interface OmbiStoreEntitiesRequestsChildRequests {
  parentRequest?: OmbiStoreEntitiesRequestsTvRequests | null;
  /** @format int32 */
  parentRequestId?: number;
  /** @format int32 */
  issueId?: number | null;
  seriesType?: OmbiStoreEntitiesRequestsSeriesType;
  subscribed?: boolean;
  showSubscribe?: boolean;
  /** @format date-time */
  releaseYear?: string;
  issues?: OmbiStoreEntitiesRequestsIssues[] | null;
  seasonRequests?: OmbiStoreRepositoryRequestsSeasonRequests[] | null;
  requestStatus?: string | null;
  title?: string | null;
  approved?: boolean;
  /** @format date-time */
  markedAsApproved?: string;
  /** @format date-time */
  requestedDate?: string;
  available?: boolean;
  /** @format date-time */
  markedAsAvailable?: string | null;
  requestedUserId?: string | null;
  denied?: boolean | null;
  /** @format date-time */
  markedAsDenied?: string;
  deniedReason?: string | null;
  requestType?: OmbiStoreEntitiesRequestType;
  requestedByAlias?: string | null;
  requestedUser?: OmbiStoreEntitiesOmbiUser | null;
  canApprove?: boolean;
  /** @format int32 */
  id?: number;
}
export interface OmbiStoreEntitiesRequestsTvRequests {
  /** @format int32 */
  tvDbId?: number;
  /** @format int32 */
  externalProviderId?: number;
  imdbId?: string | null;
  /** @format int32 */
  qualityOverride?: number | null;
  /** @format int32 */
  rootFolder?: number | null;
  /** @format int32 */
  languageProfile?: number | null;
  overview?: string | null;
  title?: string | null;
  posterPath?: string | null;
  background?: string | null;
  /** @format date-time */
  releaseDate?: string;
  status?: string | null;
  /** @format int32 */
  totalSeasons?: number;
  childRequests?: OmbiStoreEntitiesRequestsChildRequests[] | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiCoreModelsUIRequestsViewModel1OmbiStoreEntitiesRequestsTvRequestsOmbiStoreVersion3000CultureNeutralPublicKeyTokenNull {
  collection?: OmbiStoreEntitiesRequestsTvRequests[] | null;
  /** @format int32 */
  total?: number;
}
export interface OmbiCoreModelsRequestsEpisodesViewModel {
  /** @format int32 */
  episodeNumber?: number;
}
export interface OmbiCoreModelsRequestsSeasonsViewModel {
  /** @format int32 */
  seasonNumber?: number;
  episodes?: OmbiCoreModelsRequestsEpisodesViewModel[] | null;
}
export interface OmbiCoreModelsRequestsTvRequestViewModel {
  /** @format int32 */
  tvDbId?: number;
  requestAll?: boolean;
  latestSeason?: boolean;
  /** @format int32 */
  languageProfile?: number | null;
  firstSeason?: boolean;
  seasons?: OmbiCoreModelsRequestsSeasonsViewModel[] | null;
  requestedByAlias?: string | null;
  requestOnBehalf?: string | null;
  /** @format int32 */
  rootFolderOverride?: number | null;
  /** @format int32 */
  qualityPathOverride?: number | null;
}
export interface OmbiModelsDenyTvModel {
  reason?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiModelsTvUpdateModel {
  /** @format int32 */
  id?: number;
}
export interface OmbiCoreModelsRequestsRequestCountModel {
  /** @format int32 */
  pending?: number;
  /** @format int32 */
  approved?: number;
  /** @format int32 */
  available?: number;
}
export interface OmbiModelsFailedRequestViewModel {
  /** @format int32 */
  failedId?: number;
  title?: string | null;
  /** @format date-time */
  releaseYear?: string;
  /** @format int32 */
  requestId?: number;
  type?: OmbiStoreEntitiesRequestType;
  /** @format date-time */
  dts?: string;
  error?: string | null;
  /** @format int32 */
  retryCount?: number;
}
export interface OmbiCoreModelsUIRequestsViewModel1OmbiStoreEntitiesRequestsChildRequestsOmbiStoreVersion3000CultureNeutralPublicKeyTokenNull {
  collection?: OmbiStoreEntitiesRequestsChildRequests[] | null;
  /** @format int32 */
  total?: number;
}
export interface OmbiCoreModelsRequestsMediaAdvancedOptions {
  /** @format int32 */
  requestId?: number;
  /** @format int32 */
  rootPathOverride?: number;
  /** @format int32 */
  qualityOverride?: number;
  /** @format int32 */
  languageProfile?: number;
}
export interface OmbiCoreModelsRequestsTvRequestViewModelV2 {
  /** @format int32 */
  theMovieDbId?: number;
  languageCode?: string | null;
  requestAll?: boolean;
  latestSeason?: boolean;
  /** @format int32 */
  languageProfile?: number | null;
  firstSeason?: boolean;
  seasons?: OmbiCoreModelsRequestsSeasonsViewModel[] | null;
  requestedByAlias?: string | null;
  requestOnBehalf?: string | null;
  /** @format int32 */
  rootFolderOverride?: number | null;
  /** @format int32 */
  qualityPathOverride?: number | null;
}
export interface OmbiCoreModelsSearchV2MultiSearchFilter {
  movies?: boolean;
  tvShows?: boolean;
  music?: boolean;
  people?: boolean;
}
export interface OmbiCoreModelsSearchV2MultiSearchResult {
  id?: string | null;
  mediaType?: string | null;
  title?: string | null;
  poster?: string | null;
  overview?: string | null;
}
export interface OmbiCoreModelsSearchV2CollectionsViewModel {
  /** @format int32 */
  id?: number;
  name?: string | null;
  posterPath?: string | null;
  backdropPath?: string | null;
}
export interface OmbiCoreModelsSearchV2GenreViewModel {
  /** @format int32 */
  id?: number;
  name?: string | null;
}
export interface OmbiCoreModelsSearchV2ProductionCompaniesViewModel {
  /** @format int32 */
  id?: number;
  logo_path?: string | null;
  name?: string | null;
  origin_country?: string | null;
}
export interface OmbiCoreModelsSearchV2VideoResultsDetails {
  id?: string | null;
  iso_639_1?: string | null;
  iso_3166_1?: string | null;
  key?: string | null;
  name?: string | null;
  site?: string | null;
  /** @format int32 */
  size?: number;
  type?: string | null;
}
export interface OmbiCoreModelsSearchV2Videos {
  results?: OmbiCoreModelsSearchV2VideoResultsDetails[] | null;
}
export interface OmbiCoreModelsSearchV2FullMovieCastViewModel {
  /** @format int32 */
  cast_id?: number;
  character?: string | null;
  credit_id?: string | null;
  /** @format int32 */
  gender?: number;
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** @format int32 */
  order?: number;
  profile_path?: string | null;
}
export interface OmbiCoreModelsSearchV2FullMovieCrewViewModel {
  credit_id?: string | null;
  department?: string | null;
  /** @format int32 */
  gender?: number;
  /** @format int32 */
  id?: number;
  job?: string | null;
  name?: string | null;
  profile_path?: string | null;
}
export interface OmbiCoreModelsSearchV2CreditsViewModel {
  cast?: OmbiCoreModelsSearchV2FullMovieCastViewModel[] | null;
  crew?: OmbiCoreModelsSearchV2FullMovieCrewViewModel[] | null;
}
/**
 * @format int32
 */
export declare type OmbiApiTheMovieDbModelsReleaseDateType = 1 | 2 | 3 | 4 | 5 | 6;
export interface OmbiApiTheMovieDbModelsReleaseDateDto {
  /** @format date-time */
  releaseDate?: string;
  type?: OmbiApiTheMovieDbModelsReleaseDateType;
}
export interface OmbiApiTheMovieDbModelsReleaseResultsDto {
  isoCode?: string | null;
  releaseDate?: OmbiApiTheMovieDbModelsReleaseDateDto[] | null;
}
export interface OmbiApiTheMovieDbModelsReleaseDatesDto {
  results?: OmbiApiTheMovieDbModelsReleaseResultsDto[] | null;
}
export interface OmbiApiTheMovieDbModelsSimilarResults {
  adult?: boolean;
  backdrop_path?: string | null;
  genre_ids?: number[] | null;
  /** @format int32 */
  id?: number;
  original_language?: string | null;
  original_title?: string | null;
  overview?: string | null;
  poster_path?: string | null;
  release_date?: string | null;
  title?: string | null;
  video?: boolean;
  /** @format float */
  vote_average?: number;
  /** @format int32 */
  vote_count?: number;
  /** @format float */
  popularity?: number;
}
export interface OmbiApiTheMovieDbModelsSimilar {
  /** @format int32 */
  page?: number;
  results?: OmbiApiTheMovieDbModelsSimilarResults[] | null;
  /** @format int32 */
  total_pages?: number;
  /** @format int32 */
  total_results?: number;
}
export interface OmbiApiTheMovieDbModelsRecommendationResults {
  adult?: boolean;
  backdrop_path?: string | null;
  genre_ids?: number[] | null;
  /** @format int32 */
  id?: number;
  original_language?: string | null;
  original_title?: string | null;
  overview?: string | null;
  poster_path?: string | null;
  release_date?: string | null;
  title?: string | null;
  video?: boolean;
  /** @format float */
  vote_average?: number;
  /** @format int32 */
  vote_count?: number;
  /** @format float */
  popularity?: number;
}
export interface OmbiApiTheMovieDbModelsRecommendations {
  /** @format int32 */
  page?: number;
  results?: OmbiApiTheMovieDbModelsRecommendationResults[] | null;
  /** @format int32 */
  total_pages?: number;
  /** @format int32 */
  total_results?: number;
}
export interface OmbiCoreModelsSearchV2ExternalIds {
  imdbId?: string | null;
  facebookId?: string | null;
  instagramId?: string | null;
  twitterId?: string | null;
}
export interface OmbiCoreModelsSearchV2KeywordsValue {
  /** @format int32 */
  id?: number;
  name?: string | null;
}
export interface OmbiCoreModelsSearchV2Keywords {
  keywordsValue?: OmbiCoreModelsSearchV2KeywordsValue[] | null;
}
export interface OmbiCoreModelsSearchV2MovieFullInfoViewModel {
  adult?: boolean;
  belongsToCollection?: OmbiCoreModelsSearchV2CollectionsViewModel | null;
  backdropPath?: string | null;
  originalLanguage?: string | null;
  /** @format int32 */
  budget?: number;
  genres?: OmbiCoreModelsSearchV2GenreViewModel[] | null;
  originalTitle?: string | null;
  overview?: string | null;
  productionCompanies?: OmbiCoreModelsSearchV2ProductionCompaniesViewModel[] | null;
  /** @format double */
  popularity?: number;
  /** @format float */
  revenue?: number;
  /** @format int64 */
  runtime?: number;
  posterPath?: string | null;
  /** @format date-time */
  releaseDate?: string | null;
  title?: string | null;
  video?: boolean;
  tagline?: string | null;
  /** @format double */
  voteAverage?: number;
  /** @format int32 */
  voteCount?: number;
  alreadyInCp?: boolean;
  trailer?: string | null;
  homepage?: string | null;
  /** @format int32 */
  rootPathOverride?: number;
  status?: string | null;
  videos?: OmbiCoreModelsSearchV2Videos | null;
  credits?: OmbiCoreModelsSearchV2CreditsViewModel | null;
  /** @format int32 */
  qualityOverride?: number;
  type?: OmbiStoreEntitiesRequestType;
  releaseDates?: OmbiApiTheMovieDbModelsReleaseDatesDto | null;
  /** @format date-time */
  digitalReleaseDate?: string | null;
  similar?: OmbiApiTheMovieDbModelsSimilar | null;
  recommendations?: OmbiApiTheMovieDbModelsRecommendations | null;
  externalIds?: OmbiCoreModelsSearchV2ExternalIds | null;
  keywords?: OmbiCoreModelsSearchV2Keywords | null;
  /** @format int32 */
  id?: number;
  approved?: boolean;
  denied?: boolean | null;
  deniedReason?: string | null;
  requested?: boolean;
  /** @format int32 */
  requestId?: number;
  available?: boolean;
  plexUrl?: string | null;
  embyUrl?: string | null;
  jellyfinUrl?: string | null;
  quality?: string | null;
  imdbId?: string | null;
  theTvDbId?: string | null;
  theMovieDbId?: string | null;
  subscribed?: boolean;
  showSubscribe?: boolean;
}
export interface OmbiCoreModelsSearchV2MovieCollection {
  overview?: string | null;
  posterPath?: string | null;
  title?: string | null;
  /** @format date-time */
  releaseDate?: string | null;
  type?: OmbiStoreEntitiesRequestType;
  /** @format int32 */
  id?: number;
  approved?: boolean;
  denied?: boolean | null;
  deniedReason?: string | null;
  requested?: boolean;
  /** @format int32 */
  requestId?: number;
  available?: boolean;
  plexUrl?: string | null;
  embyUrl?: string | null;
  jellyfinUrl?: string | null;
  quality?: string | null;
  imdbId?: string | null;
  theTvDbId?: string | null;
  theMovieDbId?: string | null;
  subscribed?: boolean;
  showSubscribe?: boolean;
}
export interface OmbiCoreModelsSearchV2MovieCollectionsViewModel {
  name?: string | null;
  overview?: string | null;
  collection?: OmbiCoreModelsSearchV2MovieCollection[] | null;
}
export interface OmbiCoreModelsSearchV2NetworkViewModel {
  /** @format int32 */
  id?: number;
  name?: string | null;
  country?: string | null;
}
export interface OmbiCoreModelsSearchV2Images {
  medium?: string | null;
  original?: string | null;
}
export interface OmbiCoreModelsSearchV2CastViewModel {
  /** @format int32 */
  id?: number;
  person?: string | null;
  character?: string | null;
  image?: string | null;
  self?: boolean;
  voice?: boolean;
}
export interface OmbiCoreModelsSearchV2PersonViewModel {
  /** @format int32 */
  id?: number;
  url?: string | null;
  name?: string | null;
  image?: string | null;
}
export interface OmbiCoreModelsSearchV2SearchFullInfoTvShowViewModel {
  title?: string | null;
  aliases?: string[] | null;
  banner?: string | null;
  /** @format int32 */
  seriesId?: number;
  status?: string | null;
  firstAired?: string | null;
  networkId?: string | null;
  runtime?: string | null;
  genres?: OmbiCoreModelsSearchV2GenreViewModel[] | null;
  overview?: string | null;
  /** @format int32 */
  lastUpdated?: number;
  airsDayOfWeek?: string | null;
  airsTime?: string | null;
  rating?: string | null;
  /** @format int32 */
  siteRating?: number;
  network?: OmbiCoreModelsSearchV2NetworkViewModel | null;
  images?: OmbiCoreModelsSearchV2Images | null;
  cast?: OmbiCoreModelsSearchV2CastViewModel[] | null;
  crew?: OmbiCoreModelsSearchV2PersonViewModel[] | null;
  certification?: string | null;
  tagline?: string | null;
  keywords?: OmbiCoreModelsSearchV2Keywords | null;
  externalIds?: OmbiCoreModelsSearchV2ExternalIds | null;
  trailer?: string | null;
  homepage?: string | null;
  seasonRequests?: OmbiStoreRepositoryRequestsSeasonRequests[] | null;
  requestAll?: boolean;
  firstSeason?: boolean;
  latestSeason?: boolean;
  fullyAvailable?: boolean;
  partlyAvailable?: boolean;
  type?: OmbiStoreEntitiesRequestType;
  /** @format int32 */
  id?: number;
  approved?: boolean;
  denied?: boolean | null;
  deniedReason?: string | null;
  requested?: boolean;
  /** @format int32 */
  requestId?: number;
  available?: boolean;
  plexUrl?: string | null;
  embyUrl?: string | null;
  jellyfinUrl?: string | null;
  quality?: string | null;
  imdbId?: string | null;
  theTvDbId?: string | null;
  theMovieDbId?: string | null;
  subscribed?: boolean;
  showSubscribe?: boolean;
}
export interface OmbiModelsSimilarMoviesRefineModel {
  /** @format int32 */
  theMovieDbId?: number;
  languageCode?: string | null;
}
export interface OmbiCoreModelsSearchSearchMovieViewModel {
  adult?: boolean;
  backdropPath?: string | null;
  genreIds?: number[] | null;
  originalLanguage?: string | null;
  originalTitle?: string | null;
  overview?: string | null;
  /** @format double */
  popularity?: number;
  posterPath?: string | null;
  /** @format date-time */
  releaseDate?: string | null;
  title?: string | null;
  video?: boolean;
  /** @format double */
  voteAverage?: number;
  /** @format int32 */
  voteCount?: number;
  alreadyInCp?: boolean;
  trailer?: string | null;
  homepage?: string | null;
  /** @format int32 */
  rootPathOverride?: number;
  /** @format int32 */
  qualityOverride?: number;
  type?: OmbiStoreEntitiesRequestType;
  releaseDates?: OmbiApiTheMovieDbModelsReleaseDatesDto | null;
  /** @format date-time */
  digitalReleaseDate?: string | null;
  /** @format int32 */
  id?: number;
  approved?: boolean;
  denied?: boolean | null;
  deniedReason?: string | null;
  requested?: boolean;
  /** @format int32 */
  requestId?: number;
  available?: boolean;
  plexUrl?: string | null;
  embyUrl?: string | null;
  jellyfinUrl?: string | null;
  quality?: string | null;
  imdbId?: string | null;
  theTvDbId?: string | null;
  theMovieDbId?: string | null;
  subscribed?: boolean;
  showSubscribe?: boolean;
}
export interface OmbiApiTheMovieDbModelsDiscoverModel {
  type?: string | null;
  /** @format int32 */
  releaseYear?: number | null;
  genreIds?: number[] | null;
  keywordIds?: number[] | null;
  watchProviders?: number[] | null;
  companies?: number[] | null;
}
export interface OmbiCoreModelsSearchSearchTvShowViewModel {
  title?: string | null;
  aliases?: string[] | null;
  banner?: string | null;
  /** @format int32 */
  seriesId?: number;
  status?: string | null;
  firstAired?: string | null;
  network?: string | null;
  networkId?: string | null;
  runtime?: string | null;
  genre?: string[] | null;
  overview?: string | null;
  /** @format int32 */
  lastUpdated?: number;
  airsDayOfWeek?: string | null;
  airsTime?: string | null;
  rating?: string | null;
  /** @format int32 */
  siteRating?: number;
  trailer?: string | null;
  homepage?: string | null;
  seasonRequests?: OmbiStoreRepositoryRequestsSeasonRequests[] | null;
  requestAll?: boolean;
  firstSeason?: boolean;
  latestSeason?: boolean;
  fullyAvailable?: boolean;
  partlyAvailable?: boolean;
  type?: OmbiStoreEntitiesRequestType;
  backdropPath?: string | null;
  /** @format int32 */
  id?: number;
  approved?: boolean;
  denied?: boolean | null;
  deniedReason?: string | null;
  requested?: boolean;
  /** @format int32 */
  requestId?: number;
  available?: boolean;
  plexUrl?: string | null;
  embyUrl?: string | null;
  jellyfinUrl?: string | null;
  quality?: string | null;
  imdbId?: string | null;
  theTvDbId?: string | null;
  theMovieDbId?: string | null;
  subscribed?: boolean;
  showSubscribe?: boolean;
}
export interface OmbiApiTheMovieDbModelsCast {
  character?: string | null;
  credit_id?: string | null;
  poster_path?: string | null;
  /** @format int32 */
  id?: number;
  video?: boolean;
  /** @format int32 */
  vote_count?: number;
  adult?: boolean;
  backdrop_path?: string | null;
  genre_ids?: number[] | null;
  original_language?: string | null;
  original_title?: string | null;
  /** @format float */
  popularity?: number;
  title?: string | null;
  /** @format float */
  vote_average?: number;
  overview?: string | null;
  release_date?: string | null;
}
export interface OmbiApiTheMovieDbModelsCrew {
  /** @format int32 */
  id?: number;
  department?: string | null;
  original_language?: string | null;
  original_title?: string | null;
  job?: string | null;
  overview?: string | null;
  /** @format int32 */
  vote_count?: number;
  video?: boolean;
  release_date?: string | null;
  /** @format float */
  vote_average?: number;
  title?: string | null;
  /** @format float */
  popularity?: number;
  genre_ids?: number[] | null;
  backdrop_path?: string | null;
  adult?: boolean;
  poster_path?: string | null;
  credit_id?: string | null;
}
export interface OmbiApiTheMovieDbModelsActorCredits {
  cast?: OmbiApiTheMovieDbModelsCast[] | null;
  crew?: OmbiApiTheMovieDbModelsCrew[] | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiCoreModelsSearchV2MusicReleaseGroup {
  /** @format int32 */
  id?: number;
  type?: OmbiStoreEntitiesRequestType;
  title?: string | null;
  releaseDate?: string | null;
  releaseType?: string | null;
  /** @format double */
  percentOfTracks?: number;
  monitored?: boolean;
  partiallyAvailable?: boolean;
  fullyAvailable?: boolean;
  approved?: boolean;
  denied?: boolean | null;
  deniedReason?: string | null;
  requested?: boolean;
  /** @format int32 */
  requestId?: number;
  available?: boolean;
  plexUrl?: string | null;
  embyUrl?: string | null;
  jellyfinUrl?: string | null;
  quality?: string | null;
  imdbId?: string | null;
  theTvDbId?: string | null;
  theMovieDbId?: string | null;
  subscribed?: boolean;
  showSubscribe?: boolean;
}
export interface OmbiCoreModelsSearchV2MusicArtistLinks {
  image?: string | null;
  imdb?: string | null;
  lastFm?: string | null;
  discogs?: string | null;
  allMusic?: string | null;
  homePage?: string | null;
  youTube?: string | null;
  facebook?: string | null;
  twitter?: string | null;
  bbcMusic?: string | null;
  mySpace?: string | null;
  onlineCommunity?: string | null;
  spotify?: string | null;
  instagram?: string | null;
  vk?: string | null;
  deezer?: string | null;
  google?: string | null;
  apple?: string | null;
}
export interface OmbiCoreModelsSearchV2MusicBandMember {
  name?: string | null;
  attributes?: string[] | null;
  isCurrentMember?: boolean;
  start?: string | null;
  end?: string | null;
}
export interface OmbiCoreModelsSearchV2MusicArtistInformation {
  name?: string | null;
  id?: string | null;
  startYear?: string | null;
  endYear?: string | null;
  isEnded?: boolean;
  type?: string | null;
  country?: string | null;
  region?: string | null;
  disambiguation?: string | null;
  banner?: string | null;
  logo?: string | null;
  poster?: string | null;
  fanArt?: string | null;
  overview?: string | null;
  releaseGroups?: OmbiCoreModelsSearchV2MusicReleaseGroup[] | null;
  links?: OmbiCoreModelsSearchV2MusicArtistLinks | null;
  members?: OmbiCoreModelsSearchV2MusicBandMember[] | null;
}
export interface OmbiCoreModelsSearchV2MusicAlbumArt {
  image?: string | null;
}
export interface OmbiApiRottenTomatoesModelsMovieRatings {
  critics_rating?: string | null;
  /** @format int32 */
  critics_score?: number;
  audience_rating?: string | null;
  /** @format int32 */
  audience_score?: number;
}
export interface OmbiApiRottenTomatoesModelsTvRatings {
  class?: string | null;
  /** @format int32 */
  score?: number;
}
export interface OmbiCoreModelsSearchV2StreamingData {
  /** @format int32 */
  order?: number;
  streamingProvider?: string | null;
  logo?: string | null;
}
export interface OmbiModelsSearchActorModel {
  searchTerm?: string | null;
  languageCode?: string | null;
}
export interface OmbiModelsSearchMovieRefineModel {
  searchTerm?: string | null;
  /** @format int32 */
  year?: number | null;
  languageCode?: string | null;
}
export interface OmbiModelsSearchMovieExtraInfoRefineModel {
  /** @format int32 */
  theMovieDbId?: number;
  languageCode?: string | null;
}
export interface OmbiApiLidarrModelsLink {
  url?: string | null;
  name?: string | null;
}
export interface OmbiCoreModelsSearchSearchArtistViewModel {
  artistName?: string | null;
  forignArtistId?: string | null;
  overview?: string | null;
  disambiguation?: string | null;
  banner?: string | null;
  poster?: string | null;
  logo?: string | null;
  monitored?: boolean;
  artistType?: string | null;
  cleanName?: string | null;
  links?: OmbiApiLidarrModelsLink[] | null;
}
export interface OmbiCoreModelsSearchSearchAlbumViewModel {
  title?: string | null;
  foreignAlbumId?: string | null;
  monitored?: boolean;
  albumType?: string | null;
  /** @format double */
  rating?: number;
  /** @format date-time */
  releaseDate?: string;
  artistName?: string | null;
  foreignArtistId?: string | null;
  cover?: string | null;
  disk?: string | null;
  /** @format double */
  percentOfTracks?: number;
  genres?: object[] | null;
  type?: OmbiStoreEntitiesRequestType;
  partiallyAvailable?: boolean;
  fullyAvailable?: boolean;
  /** @format int32 */
  id?: number;
  approved?: boolean;
  denied?: boolean | null;
  deniedReason?: string | null;
  requested?: boolean;
  /** @format int32 */
  requestId?: number;
  available?: boolean;
  plexUrl?: string | null;
  embyUrl?: string | null;
  jellyfinUrl?: string | null;
  quality?: string | null;
  imdbId?: string | null;
  theTvDbId?: string | null;
  theMovieDbId?: string | null;
  subscribed?: boolean;
  showSubscribe?: boolean;
}
/**
 * @format int32
 */
export declare type OmbiSettingsSettingsModelsBranch = 0 | 1;
export interface OmbiSettingsSettingsModelsOmbiSettings {
  baseUrl?: string | null;
  collectAnalyticData?: boolean;
  wizard?: boolean;
  apiKey?: string | null;
  doNotSendNotificationsForAutoApprove?: boolean;
  hideRequestsUsers?: boolean;
  disableHealthChecks?: boolean;
  defaultLanguageCode?: string | null;
  autoDeleteAvailableRequests?: boolean;
  /** @format int32 */
  autoDeleteAfterDays?: number;
  branch?: OmbiSettingsSettingsModelsBranch;
  hasMigratedOldTvDbData?: boolean;
  set?: boolean;
  /** @format int32 */
  id?: number;
}
export interface OmbiModelsAboutViewModel {
  version?: string | null;
  branch?: string | null;
  frameworkDescription?: string | null;
  osArchitecture?: string | null;
  osDescription?: string | null;
  processArchitecture?: string | null;
  applicationBasePath?: string | null;
  ombiDatabaseType?: string | null;
  externalDatabaseType?: string | null;
  settingsDatabaseType?: string | null;
  ombiConnectionString?: string | null;
  externalConnectionString?: string | null;
  settingsConnectionString?: string | null;
  storagePath?: string | null;
  notSupported?: boolean;
}
export interface OmbiCoreSettingsModelsExternalPlexSettings {
  enable?: boolean;
  /** @format uuid */
  installId?: string;
  servers?: OmbiCoreSettingsModelsExternalPlexServers[] | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiCoreSettingsModelsLandingPageSettings {
  enabled?: boolean;
  noticeEnabled?: boolean;
  noticeText?: string | null;
  timeLimit?: boolean;
  /** @format date-time */
  startDateTime?: string;
  /** @format date-time */
  endDateTime?: string;
  expired?: boolean;
  /** @format int32 */
  id?: number;
}
export interface OmbiSettingsSettingsModelsCustomizationSettings {
  applicationName?: string | null;
  applicationUrl?: string | null;
  customCss?: string | null;
  enableCustomDonations?: boolean;
  customDonationUrl?: string | null;
  customDonationMessage?: string | null;
  logo?: string | null;
  recentlyAddedPage?: boolean;
  useCustomPage?: boolean;
  hideAvailableFromDiscover?: boolean;
  favicon?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiModelsPresetThemeViewModel {
  fullName?: string | null;
  displayName?: string | null;
  version?: string | null;
  url?: string | null;
}
export interface OmbiSettingsSettingsModelsAuthenticationSettings {
  allowNoPassword?: boolean;
  requireDigit?: boolean;
  /** @format int32 */
  requiredLength?: number;
  requireLowercase?: boolean;
  requireNonAlphanumeric?: boolean;
  requireUppercase?: boolean;
  enableOAuth?: boolean;
  /** @format int32 */
  id?: number;
}
export interface OmbiSettingsSettingsModelsUpdateSettings {
  autoUpdateEnabled?: boolean;
  username?: string | null;
  password?: string | null;
  processName?: string | null;
  useScript?: boolean;
  scriptLocation?: string | null;
  windowsServiceName?: string | null;
  windowsService?: boolean;
  testMode?: boolean;
  /** @format int32 */
  id?: number;
}
export interface OmbiSettingsSettingsModelsUserManagementSettings {
  importPlexAdmin?: boolean;
  importPlexUsers?: boolean;
  importEmbyUsers?: boolean;
  importJellyfinUsers?: boolean;
  /** @format int32 */
  movieRequestLimit?: number;
  movieRequestLimitType?: OmbiStoreEntitiesRequestLimitType;
  /** @format int32 */
  episodeRequestLimit?: number;
  episodeRequestLimitType?: OmbiStoreEntitiesRequestLimitType;
  /** @format int32 */
  musicRequestLimit?: number;
  musicRequestLimitType?: OmbiStoreEntitiesRequestLimitType;
  defaultStreamingCountry?: string | null;
  defaultRoles?: string[] | null;
  bannedPlexUserIds?: string[] | null;
  bannedEmbyUserIds?: string[] | null;
  bannedJellyfinUserIds?: string[] | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiSettingsSettingsModelsExternalDogNzbSettings {
  enabled?: boolean;
  apiKey?: string | null;
  movies?: boolean;
  tvShows?: boolean;
  /** @format int32 */
  id?: number;
}
export interface OmbiSettingsSettingsModelsExternalDropDownModel {
  value?: string | null;
  display?: string | null;
}
export interface OmbiSettingsSettingsModelsExternalSickRageSettings {
  enabled?: boolean;
  apiKey?: string | null;
  qualityProfile?: string | null;
  qualities?: OmbiSettingsSettingsModelsExternalDropDownModel[] | null;
  ssl?: boolean;
  subDir?: string | null;
  ip?: string | null;
  /** @format int32 */
  port?: number;
  fullUri?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiSettingsSettingsModelsJobSettings {
  embyContentSync?: string | null;
  embyRecentlyAddedSync?: string | null;
  jellyfinContentSync?: string | null;
  sonarrSync?: string | null;
  radarrSync?: string | null;
  plexContentSync?: string | null;
  plexRecentlyAddedSync?: string | null;
  couchPotatoSync?: string | null;
  automaticUpdater?: string | null;
  userImporter?: string | null;
  sickRageSync?: string | null;
  newsletter?: string | null;
  lidarrArtistSync?: string | null;
  issuesPurge?: string | null;
  retryRequests?: string | null;
  mediaDatabaseRefresh?: string | null;
  autoDeleteRequests?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiModelsJobSettingsViewModel {
  result?: boolean;
  message?: string | null;
}
export interface OmbiModelsCronViewModelBody {
  expression?: string | null;
}
export interface OmbiModelsCronTestModel {
  success?: boolean;
  message?: string | null;
}
export interface OmbiSettingsSettingsModelsIssueSettings {
  enabled?: boolean;
  enableInProgress?: boolean;
  deleteIssues?: boolean;
  /** @format int32 */
  daysAfterResolvedToDelete?: number;
  /** @format int32 */
  id?: number;
}
export interface OmbiSettingsSettingsModelsVoteSettings {
  enabled?: boolean;
  /** @format int32 */
  movieVoteMax?: number;
  /** @format int32 */
  musicVoteMax?: number;
  /** @format int32 */
  tvShowVoteMax?: number;
  /** @format int32 */
  id?: number;
}
export interface OmbiCoreSettingsModelsExternalTheMovieDbSettings {
  showAdultMovies?: boolean;
  excludedKeywordIds?: number[] | null;
  excludedMovieGenreIds?: number[] | null;
  excludedTvGenreIds?: number[] | null;
  /** @format int32 */
  id?: number;
}
/**
 * @format int32
 */
export declare type OmbiHelpersNotificationType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export interface OmbiStoreEntitiesNotificationTemplates {
  notificationType?: OmbiHelpersNotificationType;
  agent?: OmbiHelpersNotificationAgent;
  subject?: string | null;
  message?: string | null;
  enabled?: boolean;
  /** @format int32 */
  id?: number;
}
export interface OmbiCoreModelsUIEmailNotificationsViewModel {
  notificationTemplates?: OmbiStoreEntitiesNotificationTemplates[] | null;
  enabled?: boolean;
  host?: string | null;
  password?: string | null;
  /** @format int32 */
  port?: number;
  senderName?: string | null;
  senderAddress?: string | null;
  username?: string | null;
  authentication?: boolean;
  adminEmail?: string | null;
  disableTLS?: boolean;
  disableCertificateChecking?: boolean;
  /** @format int32 */
  id?: number;
}
export interface OmbiCoreModelsUIDiscordNotificationsViewModel {
  notificationTemplates?: OmbiStoreEntitiesNotificationTemplates[] | null;
  enabled?: boolean;
  webhookUrl?: string | null;
  username?: string | null;
  icon?: string | null;
  hideUser?: boolean;
  webHookId?: string | null;
  token?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiCoreModelsUITelegramNotificationsViewModel {
  notificationTemplates?: OmbiStoreEntitiesNotificationTemplates[] | null;
  enabled?: boolean;
  botApi?: string | null;
  chatId?: string | null;
  parseMode?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiCoreModelsUIPushbulletNotificationViewModel {
  notificationTemplates?: OmbiStoreEntitiesNotificationTemplates[] | null;
  enabled?: boolean;
  accessToken?: string | null;
  channelTag?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiCoreModelsUIPushoverNotificationViewModel {
  notificationTemplates?: OmbiStoreEntitiesNotificationTemplates[] | null;
  enabled?: boolean;
  accessToken?: string | null;
  userToken?: string | null;
  /** @format int32 */
  priority?: number;
  sound?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiCoreModelsUISlackNotificationsViewModel {
  notificationTemplates?: OmbiStoreEntitiesNotificationTemplates[] | null;
  enabled?: boolean;
  webhookUrl?: string | null;
  channel?: string | null;
  username?: string | null;
  iconEmoji?: string | null;
  iconUrl?: string | null;
  team?: string | null;
  service?: string | null;
  token?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiCoreModelsUIMattermostNotificationsViewModel {
  notificationTemplates?: OmbiStoreEntitiesNotificationTemplates[] | null;
  webhookUrl?: string | null;
  channel?: string | null;
  username?: string | null;
  iconUrl?: string | null;
  enabled?: boolean;
  /** @format int32 */
  id?: number;
}
export interface OmbiCoreModelsUIWhatsAppSettingsViewModel {
  notificationTemplates?: OmbiStoreEntitiesNotificationTemplates[] | null;
  enabled?: boolean;
  from?: string | null;
  accountSid?: string | null;
  authToken?: string | null;
}
export interface OmbiCoreModelsUITwilioSettingsViewModel {
  /** @format int32 */
  id?: number;
  whatsAppSettings?: OmbiCoreModelsUIWhatsAppSettingsViewModel | null;
}
export interface OmbiCoreModelsUIMobileNotificationsViewModel {
  notificationTemplates?: OmbiStoreEntitiesNotificationTemplates[] | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiCoreModelsUIGotifyNotificationViewModel {
  notificationTemplates?: OmbiStoreEntitiesNotificationTemplates[] | null;
  enabled?: boolean;
  baseUrl?: string | null;
  applicationToken?: string | null;
  /** @format int32 */
  priority?: number;
  /** @format int32 */
  id?: number;
}
export interface OmbiCoreModelsUIWebhookNotificationViewModel {
  enabled?: boolean;
  webhookUrl?: string | null;
  applicationToken?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiCoreModelsUINewsletterNotificationViewModel {
  notificationTemplate?: OmbiStoreEntitiesNotificationTemplates | null;
  disableTv?: boolean;
  disableMovies?: boolean;
  disableMusic?: boolean;
  enabled?: boolean;
  externalEmails?: string[] | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiApiSonarrModelsCutoff {
  /** @format int32 */
  id?: number;
  name?: string | null;
}
export interface OmbiApiSonarrModelsQuality {
  /** @format int32 */
  id?: number;
  name?: string | null;
}
export interface OmbiApiSonarrModelsItem {
  quality?: OmbiApiSonarrModelsQuality | null;
  allowed?: boolean;
}
export interface OmbiApiSonarrModelsSonarrProfile {
  name?: string | null;
  cutoff?: OmbiApiSonarrModelsCutoff | null;
  items?: OmbiApiSonarrModelsItem[] | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiApiSonarrModelsSonarrRootFolder {
  /** @format int32 */
  id?: number;
  path?: string | null;
  /** @format int64 */
  freespace?: number;
}
export interface OmbiApiSonarrModelsV3Cutoff {
  /** @format int32 */
  id?: number;
  name?: string | null;
}
export interface OmbiApiSonarrModelsV3Language {
  /** @format int32 */
  id?: number;
  name?: string | null;
}
export interface OmbiApiSonarrModelsV3Languages {
  languages?: OmbiApiSonarrModelsV3Language | null;
  allowed?: boolean;
}
export interface OmbiApiSonarrModelsV3LanguageProfiles {
  name?: string | null;
  upgradeAllowed?: boolean;
  cutoff?: OmbiApiSonarrModelsV3Cutoff | null;
  languages?: OmbiApiSonarrModelsV3Languages[] | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiApiSonarrModelsTag {
  /** @format int32 */
  id?: number;
  label?: string | null;
}
export interface OmbiCoreEngineSummaryRequest {
  /** @format date-time */
  from?: string;
  /** @format date-time */
  to?: string;
}
export interface OmbiCoreEngineUserStatsSummary {
  /** @format int32 */
  totalRequests?: number;
  /** @format int32 */
  totalMovieRequests?: number;
  /** @format int32 */
  totalTvRequests?: number;
  /** @format int32 */
  totalIssues?: number;
  /** @format int32 */
  completedRequestsMovies?: number;
  /** @format int32 */
  completedRequestsTv?: number;
  /** @format int32 */
  completedRequests?: number;
  mostRequestedUserMovie?: OmbiStoreEntitiesOmbiUser | null;
  mostRequestedUserTv?: OmbiStoreEntitiesOmbiUser | null;
}
/**
 * @format int32
 */
export declare type SystemNetHttpStatusCode =
  | 100
  | 101
  | 102
  | 103
  | 200
  | 201
  | 202
  | 203
  | 204
  | 205
  | 206
  | 207
  | 208
  | 226
  | 300
  | 300
  | 301
  | 301
  | 302
  | 302
  | 303
  | 303
  | 304
  | 305
  | 306
  | 307
  | 307
  | 308
  | 400
  | 401
  | 402
  | 403
  | 404
  | 405
  | 406
  | 407
  | 408
  | 409
  | 410
  | 411
  | 412
  | 413
  | 414
  | 415
  | 416
  | 417
  | 421
  | 422
  | 423
  | 424
  | 426
  | 428
  | 429
  | 431
  | 451
  | 500
  | 501
  | 502
  | 503
  | 504
  | 505
  | 506
  | 507
  | 508
  | 510
  | 511;
export interface OmbiSettingsSettingsModelsNotificationsDiscordNotificationSettings {
  enabled?: boolean;
  webhookUrl?: string | null;
  username?: string | null;
  icon?: string | null;
  hideUser?: boolean;
  webHookId?: string | null;
  token?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiSettingsSettingsModelsNotificationsPushbulletSettings {
  enabled?: boolean;
  accessToken?: string | null;
  channelTag?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiSettingsSettingsModelsNotificationsPushoverSettings {
  enabled?: boolean;
  accessToken?: string | null;
  userToken?: string | null;
  /** @format int32 */
  priority?: number;
  sound?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiSettingsSettingsModelsNotificationsGotifySettings {
  enabled?: boolean;
  baseUrl?: string | null;
  applicationToken?: string | null;
  /** @format int32 */
  priority?: number;
  /** @format int32 */
  id?: number;
}
export interface OmbiSettingsSettingsModelsNotificationsWebhookSettings {
  enabled?: boolean;
  webhookUrl?: string | null;
  applicationToken?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiSettingsSettingsModelsNotificationsMattermostNotificationSettings {
  webhookUrl?: string | null;
  channel?: string | null;
  username?: string | null;
  iconUrl?: string | null;
  enabled?: boolean;
  /** @format int32 */
  id?: number;
}
export interface OmbiSettingsSettingsModelsNotificationsSlackNotificationSettings {
  enabled?: boolean;
  webhookUrl?: string | null;
  channel?: string | null;
  username?: string | null;
  iconEmoji?: string | null;
  iconUrl?: string | null;
  team?: string | null;
  service?: string | null;
  token?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiSettingsSettingsModelsNotificationsEmailNotificationSettings {
  enabled?: boolean;
  host?: string | null;
  password?: string | null;
  /** @format int32 */
  port?: number;
  senderName?: string | null;
  senderAddress?: string | null;
  username?: string | null;
  authentication?: boolean;
  adminEmail?: string | null;
  disableTLS?: boolean;
  disableCertificateChecking?: boolean;
  /** @format int32 */
  id?: number;
}
export interface OmbiCoreModelsTesterResultModel {
  isValid?: boolean;
  expectedSubDir?: string | null;
}
export interface OmbiSettingsSettingsModelsNotificationsTelegramSettings {
  enabled?: boolean;
  botApi?: string | null;
  chatId?: string | null;
  parseMode?: string | null;
  /** @format int32 */
  id?: number;
}
export interface OmbiSettingsSettingsModelsNotificationsMobileNotificationSettings {
  /** @format int32 */
  id?: number;
}
export interface OmbiModelsMobileNotificationTestViewModel {
  userId?: string | null;
  settings?: OmbiSettingsSettingsModelsNotificationsMobileNotificationSettings | null;
}
export interface OmbiApiTheMovieDbModelsTheMovidDbKeyValue {
  /** @format int32 */
  id?: number;
  name?: string | null;
}
export interface OmbiTheMovieDbApiModelsGenre {
  /** @format int32 */
  id?: number;
  name?: string | null;
}
export interface OmbiApiTheMovieDbModelsWatchProvidersResults {
  /** @format int32 */
  provider_id?: number;
  logo_path?: string | null;
  provider_name?: string | null;
  origin_country?: string | null;
}
export interface OmbiModelsUserAuthModel {
  username?: string | null;
  password?: string | null;
  rememberMe?: boolean;
  usePlexAdminAccount?: boolean;
  usePlexOAuth?: boolean;
  plexTvPin?: OmbiApiPlexModelsOAuthOAuthPin | null;
}
export interface OmbiModelsExternalPlexTokenAuthentication {
  plexToken?: string | null;
}
export interface OmbiControllersV1TokenControllerTokenRefresh {
  token?: string | null;
  userename?: string | null;
}
export interface OmbiScheduleProcessorDownloads {
  name?: string | null;
  url?: string | null;
}
export interface OmbiCoreProcessorUpdateModel {
  updateVersionString?: string | null;
  /** @format int32 */
  updateVersion?: number;
  /** @format date-time */
  updateDate?: string;
  updateAvailable?: boolean;
  changeLogs?: string | null;
  downloads?: OmbiScheduleProcessorDownloads[] | null;
}
/**
 * @format int32
 */
export declare type OmbiStoreEntitiesVoteType = 0 | 1;
export interface OmbiCoreModelsUIVoteViewModel {
  /** @format int32 */
  requestId?: number;
  requestType?: OmbiStoreEntitiesRequestType;
  image?: string | null;
  background?: string | null;
  /** @format int32 */
  upvotes?: number;
  /** @format int32 */
  downvotes?: number;
  title?: string | null;
  description?: string | null;
  alreadyVoted?: boolean;
  myVote?: OmbiStoreEntitiesVoteType;
}
export interface OmbiCoreModelsVoteEngineResult {
  result?: boolean;
  message?: string | null;
  isError?: boolean;
  errorMessage?: string | null;
}
export interface OmbiStoreEntitiesVotes {
  /** @format int32 */
  requestId?: number;
  voteType?: OmbiStoreEntitiesVoteType;
  requestType?: OmbiStoreEntitiesRequestType;
  userId?: string | null;
  /** @format date-time */
  date?: string;
  deleted?: boolean;
  user?: OmbiStoreEntitiesOmbiUser | null;
  /** @format int32 */
  id?: number;
}
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";
export declare type QueryParamsType = Record<string | number, any>;
export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}
export declare enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}
export declare class HttpClient<SecurityDataType = unknown> {
  instance: AxiosInstance;
  private securityData;
  private securityWorker?;
  private secure?;
  private format?;
  constructor({ securityWorker, secure, format, ...axiosConfig }?: ApiConfig<SecurityDataType>);
  setSecurityData: (data: SecurityDataType | null) => void;
  private mergeRequestParams;
  private createFormData;
  request: <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams) => Promise<AxiosResponse<T>>;
}
/**
 * @title Ombi Api V1
 * @version v1
 * @contact Jamie Rees (https://www.ombi.io/)
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api: {
    /**
     * No description
     *
     * @tags Calendar
     * @name V2CalendarList
     * @request GET:/api/v2/Calendar
     */
    v2CalendarList: (params?: RequestParams) => Promise<AxiosResponse<OmbiCoreModelsSearchV2CalendarViewModel[]>>;
    /**
     * No description
     *
     * @tags CouchPotato
     * @name V1CouchPotatoProfileCreate
     * @request POST:/api/v1/CouchPotato/profile
     */
    v1CouchPotatoProfileCreate: (
      data: OmbiSettingsSettingsModelsExternalCouchPotatoSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiApiCouchPotatoModelsCouchPotatoProfiles>>;
    /**
     * No description
     *
     * @tags CouchPotato
     * @name V1CouchPotatoApikeyCreate
     * @request POST:/api/v1/CouchPotato/apikey
     */
    v1CouchPotatoApikeyCreate: (
      data: OmbiSettingsSettingsModelsExternalCouchPotatoSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiApiCouchPotatoModelsCouchPotatoApiKey>>;
    /**
     * No description
     *
     * @tags CustomPage
     * @name V1CustomPageList
     * @summary Gets the Custom Page Settings.
     * @request GET:/api/v1/CustomPage
     */
    v1CustomPageList: (params?: RequestParams) => Promise<AxiosResponse<OmbiSettingsSettingsModelsCustomPageSettings>>;
    /**
     * No description
     *
     * @tags CustomPage
     * @name V1CustomPageCreate
     * @summary Saves the Custom Page Settings.
     * @request POST:/api/v1/CustomPage
     */
    v1CustomPageCreate: (
      data: OmbiSettingsSettingsModelsCustomPageSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Emby
     * @name V1EmbyCreate
     * @summary Signs into the Emby Api
     * @request POST:/api/v1/Emby
     */
    v1EmbyCreate: (
      data: OmbiCoreSettingsModelsExternalEmbySettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreSettingsModelsExternalEmbySettings>>;
    /**
     * No description
     *
     * @tags Emby
     * @name V1EmbyInfoCreate
     * @request POST:/api/v1/Emby/info
     */
    v1EmbyInfoCreate: (
      data: OmbiCoreSettingsModelsExternalEmbyServers,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiApiEmbyModelsPublicInfo>>;
    /**
     * No description
     *
     * @tags Emby
     * @name V1EmbyUsersList
     * @summary Gets the emby users.
     * @request GET:/api/v1/Emby/users
     */
    v1EmbyUsersList: (params?: RequestParams) => Promise<AxiosResponse<OmbiModelsExternalUsersViewModel[]>>;
    /**
     * No description
     *
     * @tags Emby
     * @name V1EmbyLibraryCreate
     * @request POST:/api/v1/Emby/Library
     */
    v1EmbyLibraryCreate: (
      data: OmbiCoreSettingsModelsExternalEmbyServers,
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<OmbiApiEmbyModelsEmbyItemContainer1OmbiApiEmbyModelsMediaMediaFoldersOmbiApiEmbyVersion3000CultureNeutralPublicKeyTokenNull>
    >;
    /**
     * No description
     *
     * @tags Hub
     * @name V2HubUsersList
     * @summary Returns the currently connected users in Ombi
     * @request GET:/api/v2/Hub/Users
     */
    v2HubUsersList: (params?: RequestParams) => Promise<AxiosResponse<OmbiModelsConnectedUsersViewModel[]>>;
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityUsersList
     * @summary Gets all users.
     * @request GET:/api/v1/Identity/Users
     */
    v1IdentityUsersList: (params?: RequestParams) => Promise<AxiosResponse<OmbiCoreModelsUIUserViewModel[]>>;
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityDropdownUsersList
     * @summary Gets all users for dropdown purposes.
     * @request GET:/api/v1/Identity/dropdown/Users
     */
    v1IdentityDropdownUsersList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsUIUserViewModelDropdown[]>>;
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityList
     * @summary Gets the current logged in user.
     * @request GET:/api/v1/Identity
     */
    v1IdentityList: (params?: RequestParams) => Promise<AxiosResponse<OmbiCoreModelsUIUserViewModel>>;
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityCreate
     * @summary Creates the user.
     * @request POST:/api/v1/Identity
     */
    v1IdentityCreate: (
      data: OmbiCoreModelsUIUserViewModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiModelsIdentityIdentityResult>>;
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityUpdate
     * @summary Updates the user.
     * @request PUT:/api/v1/Identity
     */
    v1IdentityUpdate: (
      data: OmbiCoreModelsUIUserViewModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiModelsIdentityIdentityResult>>;
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityLanguageCreate
     * @summary Sets the current users language
     * @request POST:/api/v1/Identity/language
     */
    v1IdentityLanguageCreate: (
      data: OmbiModelsIdentityUserLanguage,
      params?: RequestParams,
    ) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityStreamingcountryList
     * @summary Returns the supported country codes that we have streaming data for
     * @request GET:/api/v1/Identity/streamingcountry
     */
    v1IdentityStreamingcountryList: (params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityStreamingcountryCreate
     * @summary Sets the current users country streaming preference
     * @request POST:/api/v1/Identity/streamingcountry
     */
    v1IdentityStreamingcountryCreate: (
      data: OmbiModelsIdentityCountryStreamingPreference,
      params?: RequestParams,
    ) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityUserDetail
     * @summary Gets the user by the user id.
     * @request GET:/api/v1/Identity/User/{id}
     */
    v1IdentityUserDetail: (id: string, params?: RequestParams) => Promise<AxiosResponse<OmbiCoreModelsUIUserViewModel>>;
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityLocalUpdate
     * @summary This is for the local user to change their details.
     * @request PUT:/api/v1/Identity/local
     */
    v1IdentityLocalUpdate: (
      data: OmbiModelsIdentityUpdateLocalUserModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiModelsIdentityIdentityResult>>;
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityDelete
     * @summary Deletes the user.
     * @request DELETE:/api/v1/Identity/{userId}
     */
    v1IdentityDelete: (
      userId: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiModelsIdentityIdentityResult>>;
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityClaimsList
     * @summary Gets all available claims in the system.
     * @request GET:/api/v1/Identity/claims
     */
    v1IdentityClaimsList: (params?: RequestParams) => Promise<AxiosResponse<OmbiCoreModelsUIClaimCheckboxes[]>>;
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityWelcomeEmailCreate
     * @request POST:/api/v1/Identity/welcomeEmail
     */
    v1IdentityWelcomeEmailCreate: (
      data: OmbiCoreModelsUIUserViewModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityNotificationpreferencesList
     * @request GET:/api/v1/Identity/notificationpreferences
     */
    v1IdentityNotificationpreferencesList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiStoreEntitiesUserNotificationPreferences[]>>;
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityNotificationpreferencesDetail
     * @request GET:/api/v1/Identity/notificationpreferences/{userId}
     */
    v1IdentityNotificationpreferencesDetail: (
      userId: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiStoreEntitiesUserNotificationPreferences[]>>;
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityNotificationPreferencesCreate
     * @request POST:/api/v1/Identity/NotificationPreferences
     */
    v1IdentityNotificationPreferencesCreate: (
      data: OmbiModelsIdentityAddNotificationPreference[],
      params?: RequestParams,
    ) => Promise<AxiosResponse<any>>;
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityNewsletterUnsubscribeDetail
     * @request GET:/api/v1/Identity/newsletter/unsubscribe/{userId}
     */
    v1IdentityNewsletterUnsubscribeDetail: (userId: string, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Images
     * @name V1ImagesTvDetail
     * @request GET:/api/v1/Images/tv/{tvdbid}
     */
    v1ImagesTvDetail: (tvdbid: number, params?: RequestParams) => Promise<AxiosResponse<string>>;
    /**
     * No description
     *
     * @tags Images
     * @name V1ImagesPosterList
     * @request GET:/api/v1/Images/poster
     */
    v1ImagesPosterList: (params?: RequestParams) => Promise<AxiosResponse<string>>;
    /**
     * No description
     *
     * @tags Images
     * @name V1ImagesPosterMovieDetail
     * @request GET:/api/v1/Images/poster/movie/{movieDbId}
     */
    v1ImagesPosterMovieDetail: (movieDbId: string, params?: RequestParams) => Promise<AxiosResponse<string>>;
    /**
     * No description
     *
     * @tags Images
     * @name V1ImagesPosterTvDetail
     * @request GET:/api/v1/Images/poster/tv/{tvdbid}
     */
    v1ImagesPosterTvDetail: (tvdbid: number, params?: RequestParams) => Promise<AxiosResponse<string>>;
    /**
     * No description
     *
     * @tags Images
     * @name V1ImagesBackgroundMovieDetail
     * @request GET:/api/v1/Images/background/movie/{movieDbId}
     */
    v1ImagesBackgroundMovieDetail: (movieDbId: string, params?: RequestParams) => Promise<AxiosResponse<string>>;
    /**
     * No description
     *
     * @tags Images
     * @name V1ImagesBannerMovieDetail
     * @request GET:/api/v1/Images/banner/movie/{movieDbId}
     */
    v1ImagesBannerMovieDetail: (movieDbId: string, params?: RequestParams) => Promise<AxiosResponse<string>>;
    /**
     * No description
     *
     * @tags Images
     * @name V1ImagesBackgroundTvDetail
     * @request GET:/api/v1/Images/background/tv/{tvdbid}
     */
    v1ImagesBackgroundTvDetail: (tvdbid: number, params?: RequestParams) => Promise<AxiosResponse<string>>;
    /**
     * No description
     *
     * @tags Images
     * @name V1ImagesBackgroundList
     * @request GET:/api/v1/Images/background
     */
    v1ImagesBackgroundList: (params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Issues
     * @name V2IssuesDetail
     * @request GET:/api/v2/Issues/{position}/{take}/{status}
     */
    v2IssuesDetail: (
      position: number,
      take: number,
      status: OmbiStoreEntitiesRequestsIssueStatus,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreEngineV2IssuesSummaryModel[]>>;
    /**
     * No description
     *
     * @tags Issues
     * @name V2IssuesDetailsDetail
     * @request GET:/api/v2/Issues/details/{providerId}
     */
    v2IssuesDetailsDetail: (
      providerId: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreEngineV2IssuesSummaryModel>>;
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesCategoriesList
     * @summary Get's all categories
     * @request GET:/api/v1/Issues/categories
     */
    v1IssuesCategoriesList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiStoreEntitiesRequestsIssueCategory[]>>;
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesCategoriesCreate
     * @summary Creates a new category
     * @request POST:/api/v1/Issues/categories
     */
    v1IssuesCategoriesCreate: (
      data: OmbiStoreEntitiesRequestsIssueCategory,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesCategoriesDelete
     * @summary Deletes a Category
     * @request DELETE:/api/v1/Issues/categories/{catId}
     */
    v1IssuesCategoriesDelete: (catId: number, params?: RequestParams) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesList
     * @summary Returns all the issues
     * @request GET:/api/v1/Issues
     */
    v1IssuesList: (params?: RequestParams) => Promise<AxiosResponse<OmbiStoreEntitiesRequestsIssues[]>>;
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesCreate
     * @summary Create Movie Issue
     * @request POST:/api/v1/Issues
     */
    v1IssuesCreate: (data: OmbiStoreEntitiesRequestsIssues, params?: RequestParams) => Promise<AxiosResponse<number>>;
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesDetail
     * @summary Returns all the issues
     * @request GET:/api/v1/Issues/{take}/{skip}/{status}
     */
    v1IssuesDetail: (
      take: number,
      skip: number,
      status: OmbiStoreEntitiesRequestsIssueStatus,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiStoreEntitiesRequestsIssues[]>>;
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesCountList
     * @summary Returns all the issues count
     * @request GET:/api/v1/Issues/count
     */
    v1IssuesCountList: (params?: RequestParams) => Promise<AxiosResponse<OmbiModelsIssueCountModel>>;
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesDetail2
     * @summary Returns the issue by Id
     * @request GET:/api/v1/Issues/{id}
     * @originalName v1IssuesDetail
     * @duplicate
     */
    v1IssuesDetail2: (id: number, params?: RequestParams) => Promise<AxiosResponse<OmbiStoreEntitiesRequestsIssues>>;
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesDelete
     * @request DELETE:/api/v1/Issues/{id}
     */
    v1IssuesDelete: (id: number, params?: RequestParams) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesRequestDetail
     * @request GET:/api/v1/Issues/request/{id}
     */
    v1IssuesRequestDetail: (id: number, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesProviderDetail
     * @request GET:/api/v1/Issues/provider/{id}
     */
    v1IssuesProviderDetail: (id: string, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesCommentsDetail
     * @summary Get's all the issue comments by id
     * @request GET:/api/v1/Issues/{id}/comments
     */
    v1IssuesCommentsDetail: (
      id: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiModelsIssueCommentChatViewModel[]>>;
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesCommentsCreate
     * @summary Adds a comment on an issue
     * @request POST:/api/v1/Issues/comments
     */
    v1IssuesCommentsCreate: (
      data: OmbiModelsNewIssueCommentViewModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiStoreEntitiesRequestsIssueComments>>;
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesCommentsDelete
     * @summary Deletes a comment on a issue
     * @request DELETE:/api/v1/Issues/comments/{id}
     */
    v1IssuesCommentsDelete: (id: number, params?: RequestParams) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesStatusCreate
     * @request POST:/api/v1/Issues/status
     */
    v1IssuesStatusCreate: (
      data: OmbiModelsIssueStateViewModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Jellyfin
     * @name V1JellyfinCreate
     * @summary Signs into the Jellyfin Api
     * @request POST:/api/v1/Jellyfin
     */
    v1JellyfinCreate: (
      data: OmbiCoreSettingsModelsExternalJellyfinSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreSettingsModelsExternalJellyfinSettings>>;
    /**
     * No description
     *
     * @tags Jellyfin
     * @name V1JellyfinInfoCreate
     * @request POST:/api/v1/Jellyfin/info
     */
    v1JellyfinInfoCreate: (
      data: OmbiCoreSettingsModelsExternalJellyfinServers,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiApiJellyfinModelsPublicInfo>>;
    /**
     * No description
     *
     * @tags Jellyfin
     * @name V1JellyfinLibraryCreate
     * @request POST:/api/v1/Jellyfin/Library
     */
    v1JellyfinLibraryCreate: (
      data: OmbiCoreSettingsModelsExternalJellyfinServers,
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<OmbiApiJellyfinModelsJellyfinItemContainer1OmbiApiJellyfinModelsMediaFoldersOmbiApiJellyfinVersion3000CultureNeutralPublicKeyTokenNull>
    >;
    /**
     * No description
     *
     * @tags Jellyfin
     * @name V1JellyfinUsersList
     * @summary Gets the jellyfin users.
     * @request GET:/api/v1/Jellyfin/users
     */
    v1JellyfinUsersList: (params?: RequestParams) => Promise<AxiosResponse<OmbiModelsExternalUsersViewModel[]>>;
    /**
     * No description
     *
     * @tags Job
     * @name V1JobUpdateCreate
     * @summary Runs the update job
     * @request POST:/api/v1/Job/update
     */
    v1JobUpdateCreate: (params?: RequestParams) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Job
     * @name V1JobUpdateList
     * @summary Checks for an update
     * @request GET:/api/v1/Job/update
     */
    v1JobUpdateList: (params?: RequestParams) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Job
     * @name V1JobPlexuserimporterCreate
     * @summary Runs the Plex User importer
     * @request POST:/api/v1/Job/plexuserimporter
     */
    v1JobPlexuserimporterCreate: (params?: RequestParams) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Job
     * @name V1JobEmbyuserimporterCreate
     * @summary Runs the Emby User importer
     * @request POST:/api/v1/Job/embyuserimporter
     */
    v1JobEmbyuserimporterCreate: (params?: RequestParams) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Job
     * @name V1JobJellyfinuserimporterCreate
     * @summary Runs the Jellyfin User importer
     * @request POST:/api/v1/Job/jellyfinuserimporter
     */
    v1JobJellyfinuserimporterCreate: (params?: RequestParams) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Job
     * @name V1JobPlexcontentcacherCreate
     * @summary Runs the Plex Content Cacher
     * @request POST:/api/v1/Job/plexcontentcacher
     */
    v1JobPlexcontentcacherCreate: (params?: RequestParams) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Job
     * @name V1JobClearmediaserverdataCreate
     * @summary Clear out the media server and resync
     * @request POST:/api/v1/Job/clearmediaserverdata
     */
    v1JobClearmediaserverdataCreate: (params?: RequestParams) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Job
     * @name V1JobPlexrecentlyaddedCreate
     * @summary Runs a smaller version of the content cacher
     * @request POST:/api/v1/Job/plexrecentlyadded
     */
    v1JobPlexrecentlyaddedCreate: (params?: RequestParams) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Job
     * @name V1JobEmbycontentcacherCreate
     * @summary Runs the Emby Content Cacher
     * @request POST:/api/v1/Job/embycontentcacher
     */
    v1JobEmbycontentcacherCreate: (params?: RequestParams) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Job
     * @name V1JobEmbyrecentlyaddedCreate
     * @summary Runs a smaller version of the content cacher
     * @request POST:/api/v1/Job/embyrecentlyadded
     */
    v1JobEmbyrecentlyaddedCreate: (params?: RequestParams) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Job
     * @name V1JobJellyfincontentcacherCreate
     * @summary Runs the Jellyfin Content Cacher
     * @request POST:/api/v1/Job/jellyfincontentcacher
     */
    v1JobJellyfincontentcacherCreate: (params?: RequestParams) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Job
     * @name V1JobArrAvailabilityCreate
     * @summary Runs the Arr Availability Checker
     * @request POST:/api/v1/Job/arrAvailability
     */
    v1JobArrAvailabilityCreate: (params?: RequestParams) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Job
     * @name V1JobAutodeleterequestsCreate
     * @request POST:/api/v1/Job/autodeleterequests
     */
    v1JobAutodeleterequestsCreate: (params?: RequestParams) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Job
     * @name V1JobNewsletterCreate
     * @summary Runs the newsletter
     * @request POST:/api/v1/Job/newsletter
     */
    v1JobNewsletterCreate: (params?: RequestParams) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags LandingPage
     * @name V1LandingPageList
     * @request GET:/api/v1/LandingPage
     */
    v1LandingPageList: (params?: RequestParams) => Promise<AxiosResponse<OmbiModelsMediaSeverAvailibilityViewModel>>;
    /**
     * No description
     *
     * @tags Lidarr
     * @name V1LidarrProfilesCreate
     * @summary Gets the Lidarr profiles.
     * @request POST:/api/v1/Lidarr/Profiles
     */
    v1LidarrProfilesCreate: (
      data: OmbiSettingsSettingsModelsExternalLidarrSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiApiLidarrModelsLidarrProfile[]>>;
    /**
 * No description
 *
 * @tags Lidarr
 * @name V1LidarrProfilesList
 * @summary Gets the Lidarr profiles using the saved settings
<remarks>The data is cached for an hour</remarks>
 * @request GET:/api/v1/Lidarr/Profiles
 */
    v1LidarrProfilesList: (params?: RequestParams) => Promise<AxiosResponse<OmbiApiLidarrModelsLidarrProfile[]>>;
    /**
     * No description
     *
     * @tags Lidarr
     * @name V1LidarrRootFoldersCreate
     * @summary Gets the Lidarr root folders.
     * @request POST:/api/v1/Lidarr/RootFolders
     */
    v1LidarrRootFoldersCreate: (
      data: OmbiSettingsSettingsModelsExternalLidarrSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiApiLidarrModelsLidarrRootFolder[]>>;
    /**
 * No description
 *
 * @tags Lidarr
 * @name V1LidarrRootFoldersList
 * @summary Gets the Lidarr root folders using the saved settings.
<remarks>The data is cached for an hour</remarks>
 * @request GET:/api/v1/Lidarr/RootFolders
 */
    v1LidarrRootFoldersList: (params?: RequestParams) => Promise<AxiosResponse<OmbiApiLidarrModelsLidarrRootFolder[]>>;
    /**
     * No description
     *
     * @tags Lidarr
     * @name V1LidarrMetadataCreate
     * @summary Gets the Lidarr metadata profiles.
     * @request POST:/api/v1/Lidarr/Metadata
     */
    v1LidarrMetadataCreate: (
      data: OmbiSettingsSettingsModelsExternalLidarrSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiApiLidarrModelsMetadataProfile[]>>;
    /**
     * No description
     *
     * @tags Logging
     * @name V1LoggingCreate
     * @request POST:/api/v1/Logging
     */
    v1LoggingCreate: (data: OmbiModelsUiLoggingModel, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags MusicRequest
     * @name V1RequestMusicDetail
     * @summary Gets album requests.
     * @request GET:/api/v1/request/music/{count}/{position}/{orderType}/{statusType}/{availabilityType}
     */
    v1RequestMusicDetail: (
      count: number,
      position: number,
      orderType: number,
      statusType: number,
      availabilityType: number,
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<OmbiCoreModelsUIRequestsViewModel1OmbiStoreEntitiesRequestsAlbumRequestOmbiStoreVersion3000CultureNeutralPublicKeyTokenNull>
    >;
    /**
     * No description
     *
     * @tags MusicRequest
     * @name V1RequestMusicTotalList
     * @summary Gets the total amount of album requests.
     * @request GET:/api/v1/request/music/total
     */
    v1RequestMusicTotalList: (params?: RequestParams) => Promise<AxiosResponse<number>>;
    /**
     * No description
     *
     * @tags MusicRequest
     * @name V1RequestMusicList
     * @summary Gets all album requests.
     * @request GET:/api/v1/request/music
     */
    v1RequestMusicList: (params?: RequestParams) => Promise<AxiosResponse<OmbiStoreEntitiesRequestsAlbumRequest[]>>;
    /**
     * No description
     *
     * @tags MusicRequest
     * @name V1RequestMusicCreate
     * @summary Requests a album.
     * @request POST:/api/v1/request/music
     */
    v1RequestMusicCreate: (
      data: OmbiCoreModelsRequestsMusicAlbumRequestViewModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreEngineRequestEngineResult>>;
    /**
     * No description
     *
     * @tags MusicRequest
     * @name V1RequestMusicSearchDetail
     * @summary Searches for a specific album request
     * @request GET:/api/v1/request/music/search/{searchTerm}
     */
    v1RequestMusicSearchDetail: (
      searchTerm: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiStoreEntitiesRequestsAlbumRequest[]>>;
    /**
     * No description
     *
     * @tags MusicRequest
     * @name V1RequestMusicDelete
     * @summary Deletes the specified album request.
     * @request DELETE:/api/v1/request/music/{requestId}
     */
    v1RequestMusicDelete: (
      requestId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreEngineRequestEngineResult>>;
    /**
     * No description
     *
     * @tags MusicRequest
     * @name V1RequestMusicApproveCreate
     * @summary Approves the specified album request.
     * @request POST:/api/v1/request/music/approve
     */
    v1RequestMusicApproveCreate: (
      data: OmbiCoreModelsRequestsAlbumUpdateModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreEngineRequestEngineResult>>;
    /**
     * No description
     *
     * @tags MusicRequest
     * @name V1RequestMusicAvailableCreate
     * @summary Set's the specified album as available
     * @request POST:/api/v1/request/music/available
     */
    v1RequestMusicAvailableCreate: (
      data: OmbiCoreModelsRequestsAlbumUpdateModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreEngineRequestEngineResult>>;
    /**
     * No description
     *
     * @tags MusicRequest
     * @name V1RequestMusicUnavailableCreate
     * @summary Set's the specified album as unavailable
     * @request POST:/api/v1/request/music/unavailable
     */
    v1RequestMusicUnavailableCreate: (
      data: OmbiCoreModelsRequestsAlbumUpdateModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreEngineRequestEngineResult>>;
    /**
     * No description
     *
     * @tags MusicRequest
     * @name V1RequestMusicDenyUpdate
     * @summary Denies the specified album request.
     * @request PUT:/api/v1/request/music/deny
     */
    v1RequestMusicDenyUpdate: (
      data: OmbiCoreModelsRequestsDenyAlbumModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreEngineRequestEngineResult>>;
    /**
     * No description
     *
     * @tags MusicRequest
     * @name V1RequestMusicRemainingList
     * @summary Gets model containing remaining number of music requests.
     * @request GET:/api/v1/request/music/remaining
     */
    v1RequestMusicRemainingList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsRequestQuotaCountModel>>;
    /**
     * No description
     *
     * @tags Notifications
     * @name V1NotificationsMassemailCreate
     * @request POST:/api/v1/Notifications/massemail
     */
    v1NotificationsMassemailCreate: (
      data: OmbiCoreModelsMassEmailModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Plex
     * @name V1PlexCreate
     * @summary Signs into the Plex API.
     * @request POST:/api/v1/Plex
     */
    v1PlexCreate: (
      data: OmbiApiPlexModelsUserRequest,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiApiPlexModelsPlexAuthentication>>;
    /**
     * No description
     *
     * @tags Plex
     * @name V1PlexLibrariesCreate
     * @summary Gets the plex libraries.
     * @request POST:/api/v1/Plex/Libraries
     */
    v1PlexLibrariesCreate: (
      data: OmbiCoreSettingsModelsExternalPlexServers,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiModelsExternalPlexLibrariesResponse>>;
    /**
     * No description
     *
     * @tags Plex
     * @name V1PlexLibrariesDetail
     * @request GET:/api/v1/Plex/Libraries/{machineId}
     */
    v1PlexLibrariesDetail: (
      machineId: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiModelsExternalPlexLibrariesLiteResponse>>;
    /**
     * No description
     *
     * @tags Plex
     * @name V1PlexUserCreate
     * @request POST:/api/v1/Plex/user
     */
    v1PlexUserCreate: (
      data: OmbiModelsExternalPlexUserViewModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Plex
     * @name V1PlexServersList
     * @summary Gets the plex servers.
     * @request GET:/api/v1/Plex/servers
     */
    v1PlexServersList: (params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Plex
     * @name V1PlexServersCreate
     * @summary Gets the plex servers.
     * @request POST:/api/v1/Plex/servers
     */
    v1PlexServersCreate: (
      data: OmbiApiPlexModelsUserRequest,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiModelsExternalPlexServersViewModel>>;
    /**
     * No description
     *
     * @tags Plex
     * @name V1PlexFriendsList
     * @summary Gets the plex friends.
     * @request GET:/api/v1/Plex/friends
     */
    v1PlexFriendsList: (params?: RequestParams) => Promise<AxiosResponse<OmbiModelsExternalUsersViewModel[]>>;
    /**
     * No description
     *
     * @tags Plex
     * @name V1PlexOauthCreate
     * @request POST:/api/v1/Plex/oauth
     */
    v1PlexOauthCreate: (data: OmbiModelsPlexOAuthViewModel, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Radarr
     * @name V1RadarrProfilesCreate
     * @summary Gets the Radarr profiles.
     * @request POST:/api/v1/Radarr/Profiles
     */
    v1RadarrProfilesCreate: (
      data: OmbiSettingsSettingsModelsExternalRadarrSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<void>>;
    /**
 * No description
 *
 * @tags Radarr
 * @name V1RadarrProfilesList
 * @summary Gets the Radarr profiles using the saved settings
<remarks>The data is cached for an hour</remarks>
 * @request GET:/api/v1/Radarr/Profiles
 */
    v1RadarrProfilesList: (params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Radarr
     * @name V1RadarrEnabledList
     * @request GET:/api/v1/Radarr/enabled
     */
    v1RadarrEnabledList: (params?: RequestParams) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Radarr
     * @name V1RadarrRootFoldersCreate
     * @summary Gets the Radarr root folders.
     * @request POST:/api/v1/Radarr/RootFolders
     */
    v1RadarrRootFoldersCreate: (
      data: OmbiSettingsSettingsModelsExternalRadarrSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiApiRadarrModelsRadarrRootFolder[]>>;
    /**
 * No description
 *
 * @tags Radarr
 * @name V1RadarrRootFoldersList
 * @summary Gets the Radarr root folders using the saved settings.
<remarks>The data is cached for an hour</remarks>
 * @request GET:/api/v1/Radarr/RootFolders
 */
    v1RadarrRootFoldersList: (params?: RequestParams) => Promise<AxiosResponse<OmbiApiRadarrModelsRadarrRootFolder[]>>;
    /**
     * No description
     *
     * @tags Radarr
     * @name V1RadarrTagsCreate
     * @summary Gets the Radarr tags
     * @request POST:/api/v1/Radarr/tags
     */
    v1RadarrTagsCreate: (
      data: OmbiSettingsSettingsModelsExternalSonarrSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiApiRadarrModelsTag[]>>;
    /**
     * No description
     *
     * @tags Radarr
     * @name V1RadarrTagsList
     * @summary Gets the Radarr tags
     * @request GET:/api/v1/Radarr/tags
     */
    v1RadarrTagsList: (params?: RequestParams) => Promise<AxiosResponse<OmbiApiRadarrModelsTag[]>>;
    /**
     * No description
     *
     * @tags RecentlyAdded
     * @name V1RecentlyAddedMoviesList
     * @summary Returns the recently added movies for the past 7 days
     * @request GET:/api/v1/RecentlyAdded/movies
     */
    v1RecentlyAddedMoviesList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsRecentlyAddedMovieModel[]>>;
    /**
     * No description
     *
     * @tags RecentlyAdded
     * @name V1RecentlyAddedTvList
     * @summary Returns the recently added tv shows for the past 7 days
     * @request GET:/api/v1/RecentlyAdded/tv
     */
    v1RecentlyAddedTvList: (params?: RequestParams) => Promise<AxiosResponse<OmbiCoreModelsRecentlyAddedMovieModel[]>>;
    /**
     * No description
     *
     * @tags RecentlyAdded
     * @name V1RecentlyAddedTvGroupedList
     * @summary Returns the recently added tv shows for the past 7 days and groups them by season
     * @request GET:/api/v1/RecentlyAdded/tv/grouped
     */
    v1RecentlyAddedTvGroupedList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsRecentlyAddedMovieModel[]>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieDetail
     * @summary Gets movie requests.
     * @request GET:/api/v1/Request/movie/{count}/{position}/{orderType}/{statusType}/{availabilityType}
     */
    v1RequestMovieDetail: (
      count: number,
      position: number,
      orderType: number,
      statusType: number,
      availabilityType: number,
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<OmbiCoreModelsUIRequestsViewModel1OmbiStoreEntitiesRequestsMovieRequestsOmbiStoreVersion3000CultureNeutralPublicKeyTokenNull>
    >;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieInfoDetail
     * @summary Returns information about the Single Movie Request
     * @request GET:/api/v1/Request/movie/info/{requestId}
     */
    v1RequestMovieInfoDetail: (
      requestId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiStoreEntitiesRequestsMovieRequests>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieTotalList
     * @summary Gets the total amount of movie requests.
     * @request GET:/api/v1/Request/movie/total
     */
    v1RequestMovieTotalList: (params?: RequestParams) => Promise<AxiosResponse<number>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieList
     * @summary Gets all movie requests.
     * @request GET:/api/v1/Request/movie
     */
    v1RequestMovieList: (params?: RequestParams) => Promise<AxiosResponse<OmbiStoreEntitiesRequestsMovieRequests[]>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieCreate
     * @summary Requests a movie.
     * @request POST:/api/v1/Request/movie
     */
    v1RequestMovieCreate: (
      data: OmbiCoreModelsRequestsMovieRequestViewModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreEngineRequestEngineResult>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieUpdate
     * @summary Updates the specified movie request.
     * @request PUT:/api/v1/Request/movie
     */
    v1RequestMovieUpdate: (
      data: OmbiStoreEntitiesRequestsMovieRequests,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiStoreEntitiesRequestsMovieRequests>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieSearchDetail
     * @summary Searches for a specific movie request
     * @request GET:/api/v1/Request/movie/search/{searchTerm}
     */
    v1RequestMovieSearchDetail: (
      searchTerm: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiStoreEntitiesRequestsMovieRequests[]>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieDelete
     * @summary Deletes the specified movie request.
     * @request DELETE:/api/v1/Request/movie/{requestId}
     */
    v1RequestMovieDelete: (
      requestId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreEngineRequestEngineResult>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieAllDelete
     * @summary Deletes the all movie request.
     * @request DELETE:/api/v1/Request/movie/all
     */
    v1RequestMovieAllDelete: (params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieApproveCreate
     * @summary Approves the specified movie request.
     * @request POST:/api/v1/Request/movie/approve
     */
    v1RequestMovieApproveCreate: (
      data: OmbiCoreModelsRequestsMovieUpdateModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreEngineRequestEngineResult>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieAvailableCreate
     * @summary Set's the specified Movie as available
     * @request POST:/api/v1/Request/movie/available
     */
    v1RequestMovieAvailableCreate: (
      data: OmbiCoreModelsRequestsMovieUpdateModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreEngineRequestEngineResult>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieUnavailableCreate
     * @summary Set's the specified Movie as unavailable
     * @request POST:/api/v1/Request/movie/unavailable
     */
    v1RequestMovieUnavailableCreate: (
      data: OmbiCoreModelsRequestsMovieUpdateModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreEngineRequestEngineResult>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieDenyUpdate
     * @summary Denies the specified movie request.
     * @request PUT:/api/v1/Request/movie/deny
     */
    v1RequestMovieDenyUpdate: (
      data: OmbiCoreModelsRequestsDenyMovieModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreEngineRequestEngineResult>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvTotalList
     * @summary Gets the total amount of TV requests.
     * @request GET:/api/v1/Request/tv/total
     */
    v1RequestTvTotalList: (params?: RequestParams) => Promise<AxiosResponse<number>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvDetail
     * @summary Gets the tv requests.
     * @request GET:/api/v1/Request/tv/{count}/{position}/{orderType}/{statusFilterType}/{availabilityFilterType}
     */
    v1RequestTvDetail: (
      count: number,
      position: number,
      orderType: number,
      statusFilterType: string,
      availabilityFilterType: string,
      query?: {
        statusType?: number;
        availabilityType?: number;
      },
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<OmbiCoreModelsUIRequestsViewModel1OmbiStoreEntitiesRequestsTvRequestsOmbiStoreVersion3000CultureNeutralPublicKeyTokenNull>
    >;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvliteDetail
     * @summary Gets the tv requests lite.
     * @request GET:/api/v1/Request/tvlite/{count}/{position}/{orderType}/{statusFilterType}/{availabilityFilterType}
     */
    v1RequestTvliteDetail: (
      count: number,
      position: number,
      orderType: number,
      statusFilterType: string,
      availabilityFilterType: string,
      query?: {
        statusType?: number;
        availabilityType?: number;
      },
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<OmbiCoreModelsUIRequestsViewModel1OmbiStoreEntitiesRequestsTvRequestsOmbiStoreVersion3000CultureNeutralPublicKeyTokenNull>
    >;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvList
     * @summary Gets the tv requests.
     * @request GET:/api/v1/Request/tv
     */
    v1RequestTvList: (params?: RequestParams) => Promise<AxiosResponse<OmbiStoreEntitiesRequestsTvRequests[]>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvCreate
     * @summary Requests a tv show/episode/season.
     * @request POST:/api/v1/Request/tv
     * @deprecated
     */
    v1RequestTvCreate: (
      data: OmbiCoreModelsRequestsTvRequestViewModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreEngineRequestEngineResult>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvUpdate
     * @summary Updates the a specific tv request
     * @request PUT:/api/v1/Request/tv
     */
    v1RequestTvUpdate: (
      data: OmbiStoreEntitiesRequestsTvRequests,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiStoreEntitiesRequestsTvRequests>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvliteList
     * @summary Gets the tv requests without the whole object graph (Does not include seasons/episodes).
     * @request GET:/api/v1/Request/tvlite
     */
    v1RequestTvliteList: (params?: RequestParams) => Promise<AxiosResponse<OmbiStoreEntitiesRequestsTvRequests[]>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvDetail2
     * @summary Returns the full request object for the specified requestId
     * @request GET:/api/v1/Request/tv/{requestId}
     * @originalName v1RequestTvDetail
     * @duplicate
     */
    v1RequestTvDetail2: (
      requestId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiStoreEntitiesRequestsTvRequests>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvDelete
     * @summary Deletes the a specific tv request
     * @request DELETE:/api/v1/Request/tv/{requestId}
     */
    v1RequestTvDelete: (requestId: number, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvSearchDetail
     * @summary Searches for a specific tv request
     * @request GET:/api/v1/Request/tv/search/{searchTerm}
     */
    v1RequestTvSearchDetail: (
      searchTerm: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiStoreEntitiesRequestsTvRequests[]>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvRootUpdate
     * @summary Updates the root path for this tv show
     * @request PUT:/api/v1/Request/tv/root/{requestId}/{rootFolderId}
     */
    v1RequestTvRootUpdate: (
      requestId: number,
      rootFolderId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvQualityUpdate
     * @summary Updates the quality profile for this tv show
     * @request PUT:/api/v1/Request/tv/quality/{requestId}/{qualityId}
     */
    v1RequestTvQualityUpdate: (
      requestId: number,
      qualityId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvChildUpdate
     * @summary Updates the a specific child request
     * @request PUT:/api/v1/Request/tv/child
     */
    v1RequestTvChildUpdate: (
      data: OmbiStoreEntitiesRequestsChildRequests,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiStoreEntitiesRequestsChildRequests>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvDenyUpdate
     * @summary Denies the a specific child request
     * @request PUT:/api/v1/Request/tv/deny
     */
    v1RequestTvDenyUpdate: (
      data: OmbiModelsDenyTvModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreEngineRequestEngineResult>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvAvailableCreate
     * @summary Set's the specified tv child as available
     * @request POST:/api/v1/Request/tv/available
     */
    v1RequestTvAvailableCreate: (
      data: OmbiModelsTvUpdateModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreEngineRequestEngineResult>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvUnavailableCreate
     * @summary Set's the specified tv child as unavailable
     * @request POST:/api/v1/Request/tv/unavailable
     */
    v1RequestTvUnavailableCreate: (
      data: OmbiModelsTvUpdateModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreEngineRequestEngineResult>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvApproveCreate
     * @summary Updates the a specific child request
     * @request POST:/api/v1/Request/tv/approve
     */
    v1RequestTvApproveCreate: (
      data: OmbiModelsTvUpdateModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreEngineRequestEngineResult>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvChildDelete
     * @summary Deletes the a specific tv request
     * @request DELETE:/api/v1/Request/tv/child/{requestId}
     */
    v1RequestTvChildDelete: (
      requestId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreEngineRequestEngineResult>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvChildDetail
     * @summary Retuns all children requests for the request id
     * @request GET:/api/v1/Request/tv/{requestId}/child
     */
    v1RequestTvChildDetail: (
      requestId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiStoreEntitiesRequestsChildRequests[]>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestCountList
     * @summary Gets the count of total requests
     * @request GET:/api/v1/Request/count
     */
    v1RequestCountList: (params?: RequestParams) => Promise<AxiosResponse<OmbiCoreModelsRequestsRequestCountModel>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestUserhasrequestList
     * @summary Checks if the passed in user has a request
     * @request GET:/api/v1/Request/userhasrequest
     */
    v1RequestUserhasrequestList: (
      query?: {
        userId?: string;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieSubscribeCreate
     * @summary Subscribes for notifications to a movie request
     * @request POST:/api/v1/Request/movie/subscribe/{requestId}
     */
    v1RequestMovieSubscribeCreate: (requestId: number, params?: RequestParams) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvSubscribeCreate
     * @summary Subscribes for notifications to a TV request
     * @request POST:/api/v1/Request/tv/subscribe/{requestId}
     */
    v1RequestTvSubscribeCreate: (requestId: number, params?: RequestParams) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieUnsubscribeCreate
     * @summary UnSubscribes for notifications to a movie request
     * @request POST:/api/v1/Request/movie/unsubscribe/{requestId}
     */
    v1RequestMovieUnsubscribeCreate: (requestId: number, params?: RequestParams) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvUnsubscribeCreate
     * @summary UnSubscribes for notifications to a TV request
     * @request POST:/api/v1/Request/tv/unsubscribe/{requestId}
     */
    v1RequestTvUnsubscribeCreate: (requestId: number, params?: RequestParams) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieRemainingList
     * @summary Gets model containing remaining number of movie requests.
     * @request GET:/api/v1/Request/movie/remaining
     */
    v1RequestMovieRemainingList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsRequestQuotaCountModel>>;
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvRemainingList
     * @summary Gets model containing remaining number of tv requests.
     * @request GET:/api/v1/Request/tv/remaining
     */
    v1RequestTvRemainingList: (params?: RequestParams) => Promise<AxiosResponse<OmbiCoreModelsRequestQuotaCountModel>>;
    /**
     * No description
     *
     * @tags RequestRetry
     * @name V1RequestRetryList
     * @summary Get's all the failed requests that are currently in the queue
     * @request GET:/api/v1/RequestRetry
     */
    v1RequestRetryList: (params?: RequestParams) => Promise<AxiosResponse<OmbiModelsFailedRequestViewModel[]>>;
    /**
     * No description
     *
     * @tags RequestRetry
     * @name V1RequestRetryDelete
     * @request DELETE:/api/v1/RequestRetry/{queueId}
     */
    v1RequestRetryDelete: (queueId: number, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsMovieDetail
     * @summary Gets movie requests.
     * @request GET:/api/v2/Requests/movie/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsMovieDetail: (
      count: number,
      position: number,
      sort: string,
      sortOrder: string,
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<OmbiCoreModelsUIRequestsViewModel1OmbiStoreEntitiesRequestsMovieRequestsOmbiStoreVersion3000CultureNeutralPublicKeyTokenNull>
    >;
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsMovieAvailbleDetail
     * @request GET:/api/v2/Requests/movie/availble/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsMovieAvailbleDetail: (
      count: number,
      position: number,
      sort: string,
      sortOrder: string,
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<OmbiCoreModelsUIRequestsViewModel1OmbiStoreEntitiesRequestsMovieRequestsOmbiStoreVersion3000CultureNeutralPublicKeyTokenNull>
    >;
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsMovieAvailableDetail
     * @request GET:/api/v2/Requests/movie/available/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsMovieAvailableDetail: (
      count: number,
      position: number,
      sort: string,
      sortOrder: string,
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<OmbiCoreModelsUIRequestsViewModel1OmbiStoreEntitiesRequestsMovieRequestsOmbiStoreVersion3000CultureNeutralPublicKeyTokenNull>
    >;
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsMovieProcessingDetail
     * @request GET:/api/v2/Requests/movie/processing/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsMovieProcessingDetail: (
      count: number,
      position: number,
      sort: string,
      sortOrder: string,
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<OmbiCoreModelsUIRequestsViewModel1OmbiStoreEntitiesRequestsMovieRequestsOmbiStoreVersion3000CultureNeutralPublicKeyTokenNull>
    >;
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsMoviePendingDetail
     * @request GET:/api/v2/Requests/movie/pending/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsMoviePendingDetail: (
      count: number,
      position: number,
      sort: string,
      sortOrder: string,
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<OmbiCoreModelsUIRequestsViewModel1OmbiStoreEntitiesRequestsMovieRequestsOmbiStoreVersion3000CultureNeutralPublicKeyTokenNull>
    >;
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsMovieDeniedDetail
     * @request GET:/api/v2/Requests/movie/denied/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsMovieDeniedDetail: (
      count: number,
      position: number,
      sort: string,
      sortOrder: string,
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<OmbiCoreModelsUIRequestsViewModel1OmbiStoreEntitiesRequestsMovieRequestsOmbiStoreVersion3000CultureNeutralPublicKeyTokenNull>
    >;
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsMovieUnavailableDetail
     * @summary Gets the unavailable movie requests.
     * @request GET:/api/v2/Requests/movie/unavailable/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsMovieUnavailableDetail: (
      count: number,
      position: number,
      sort: string,
      sortOrder: string,
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<OmbiCoreModelsUIRequestsViewModel1OmbiStoreEntitiesRequestsMovieRequestsOmbiStoreVersion3000CultureNeutralPublicKeyTokenNull>
    >;
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsTvDetail
     * @summary Gets Tv requests.
     * @request GET:/api/v2/Requests/tv/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsTvDetail: (
      count: number,
      position: number,
      sort: string,
      sortOrder: string,
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<OmbiCoreModelsUIRequestsViewModel1OmbiStoreEntitiesRequestsChildRequestsOmbiStoreVersion3000CultureNeutralPublicKeyTokenNull>
    >;
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsTvPendingDetail
     * @request GET:/api/v2/Requests/tv/pending/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsTvPendingDetail: (
      count: number,
      position: number,
      sort: string,
      sortOrder: string,
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<OmbiCoreModelsUIRequestsViewModel1OmbiStoreEntitiesRequestsChildRequestsOmbiStoreVersion3000CultureNeutralPublicKeyTokenNull>
    >;
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsTvProcessingDetail
     * @request GET:/api/v2/Requests/tv/processing/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsTvProcessingDetail: (
      count: number,
      position: number,
      sort: string,
      sortOrder: string,
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<OmbiCoreModelsUIRequestsViewModel1OmbiStoreEntitiesRequestsChildRequestsOmbiStoreVersion3000CultureNeutralPublicKeyTokenNull>
    >;
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsTvAvailableDetail
     * @request GET:/api/v2/Requests/tv/available/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsTvAvailableDetail: (
      count: number,
      position: number,
      sort: string,
      sortOrder: string,
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<OmbiCoreModelsUIRequestsViewModel1OmbiStoreEntitiesRequestsChildRequestsOmbiStoreVersion3000CultureNeutralPublicKeyTokenNull>
    >;
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsTvDeniedDetail
     * @request GET:/api/v2/Requests/tv/denied/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsTvDeniedDetail: (
      count: number,
      position: number,
      sort: string,
      sortOrder: string,
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<OmbiCoreModelsUIRequestsViewModel1OmbiStoreEntitiesRequestsChildRequestsOmbiStoreVersion3000CultureNeutralPublicKeyTokenNull>
    >;
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsTvUnavailableDetail
     * @summary Gets unavailable Tv requests.
     * @request GET:/api/v2/Requests/tv/unavailable/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsTvUnavailableDetail: (
      count: number,
      position: number,
      sort: string,
      sortOrder: string,
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<OmbiCoreModelsUIRequestsViewModel1OmbiStoreEntitiesRequestsChildRequestsOmbiStoreVersion3000CultureNeutralPublicKeyTokenNull>
    >;
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsMovieAdvancedoptionsCreate
     * @request POST:/api/v2/Requests/movie/advancedoptions
     */
    v2RequestsMovieAdvancedoptionsCreate: (
      data: OmbiCoreModelsRequestsMediaAdvancedOptions,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreEngineRequestEngineResult>>;
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsTvAdvancedoptionsCreate
     * @request POST:/api/v2/Requests/tv/advancedoptions
     */
    v2RequestsTvAdvancedoptionsCreate: (
      data: OmbiCoreModelsRequestsMediaAdvancedOptions,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreEngineRequestEngineResult>>;
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsAlbumAvailableDetail
     * @request GET:/api/v2/Requests/album/available/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsAlbumAvailableDetail: (
      count: number,
      position: number,
      sort: string,
      sortOrder: string,
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<OmbiCoreModelsUIRequestsViewModel1OmbiStoreEntitiesRequestsAlbumRequestOmbiStoreVersion3000CultureNeutralPublicKeyTokenNull>
    >;
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsAlbumProcessingDetail
     * @request GET:/api/v2/Requests/album/processing/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsAlbumProcessingDetail: (
      count: number,
      position: number,
      sort: string,
      sortOrder: string,
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<OmbiCoreModelsUIRequestsViewModel1OmbiStoreEntitiesRequestsAlbumRequestOmbiStoreVersion3000CultureNeutralPublicKeyTokenNull>
    >;
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsAlbumPendingDetail
     * @request GET:/api/v2/Requests/album/pending/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsAlbumPendingDetail: (
      count: number,
      position: number,
      sort: string,
      sortOrder: string,
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<OmbiCoreModelsUIRequestsViewModel1OmbiStoreEntitiesRequestsAlbumRequestOmbiStoreVersion3000CultureNeutralPublicKeyTokenNull>
    >;
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsAlbumDeniedDetail
     * @request GET:/api/v2/Requests/album/denied/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsAlbumDeniedDetail: (
      count: number,
      position: number,
      sort: string,
      sortOrder: string,
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<OmbiCoreModelsUIRequestsViewModel1OmbiStoreEntitiesRequestsAlbumRequestOmbiStoreVersion3000CultureNeutralPublicKeyTokenNull>
    >;
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsAlbumDetail
     * @request GET:/api/v2/Requests/album/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsAlbumDetail: (
      count: number,
      position: number,
      sort: string,
      sortOrder: string,
      params?: RequestParams,
    ) => Promise<
      AxiosResponse<OmbiCoreModelsUIRequestsViewModel1OmbiStoreEntitiesRequestsAlbumRequestOmbiStoreVersion3000CultureNeutralPublicKeyTokenNull>
    >;
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsTvCreate
     * @summary Requests a tv show/episode/season.
     * @request POST:/api/v2/Requests/tv
     */
    v2RequestsTvCreate: (
      data: OmbiCoreModelsRequestsTvRequestViewModelV2,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreEngineRequestEngineResult>>;
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsReprocessCreate
     * @request POST:/api/v2/Requests/reprocess/{type}/{requestId}
     */
    v2RequestsReprocessCreate: (
      type: OmbiStoreEntitiesRequestType,
      requestId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsMovieCollectionCreate
     * @request POST:/api/v2/Requests/movie/collection/{collectionId}
     */
    v2RequestsMovieCollectionCreate: (
      collectionId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreEngineRequestEngineResult>>;
    /**
     * @description The ID's returned by this are all TheMovieDbID's even for the TV Shows. You can call M:Ombi.Controllers.V2.SearchController.GetTvInfoByMovieId(System.String) to get TV Show information using the MovieDbId.
     *
     * @tags Search
     * @name V2SearchMultiCreate
     * @summary Returns search results for both TV and Movies
     * @request POST:/api/v2/Search/multi/{searchTerm}
     */
    v2SearchMultiCreate: (
      searchTerm: string,
      data: OmbiCoreModelsSearchV2MultiSearchFilter,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchV2MultiSearchResult[]>>;
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchMovieDetail
     * @summary Returns details for a single movie
     * @request GET:/api/v2/Search/movie/{movieDbId}
     */
    v2SearchMovieDetail: (
      movieDbId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchV2MovieFullInfoViewModel>>;
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchMovieImdbDetail
     * @request GET:/api/v2/Search/movie/imdb/{imdbid}
     */
    v2SearchMovieImdbDetail: (
      imdbId: string,
      imdbid: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchV2MovieFullInfoViewModel>>;
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchMovieRequestDetail
     * @summary Returns details for a single movie
     * @request GET:/api/v2/Search/movie/request/{requestId}
     */
    v2SearchMovieRequestDetail: (
      requestId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchV2MovieFullInfoViewModel>>;
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchMovieCollectionDetail
     * @summary Returns basic information about the provided collection
     * @request GET:/api/v2/Search/movie/collection/{collectionId}
     */
    v2SearchMovieCollectionDetail: (
      collectionId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchV2MovieCollectionsViewModel>>;
    /**
     * @description TVMaze is the TV Show Provider
     *
     * @tags Search
     * @name V2SearchTvDetail
     * @summary Returns details for a single show
     * @request GET:/api/v2/Search/tv/{tvdbId}
     */
    v2SearchTvDetail: (
      tvdbid: string,
      tvdbId: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchV2SearchFullInfoTvShowViewModel>>;
    /**
     * @description TVMaze is the TV Show Provider
     *
     * @tags Search
     * @name V2SearchTvRequestDetail
     * @summary Returns details for a single show
     * @request GET:/api/v2/Search/tv/request/{requestId}
     */
    v2SearchTvRequestDetail: (
      requestId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchV2SearchFullInfoTvShowViewModel>>;
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchTvMoviedbDetail
     * @summary Returns details for a single show
     * @request GET:/api/v2/Search/tv/moviedb/{moviedbid}
     */
    v2SearchTvMoviedbDetail: (
      moviedbid: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchV2SearchFullInfoTvShowViewModel>>;
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V2SearchMovieSimilarCreate
     * @summary Returns similar movies to the movie id passed in
     * @request POST:/api/v2/Search/movie/similar
     */
    v2SearchMovieSimilarCreate: (
      data: OmbiModelsSimilarMoviesRefineModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchMovieViewModel[]>>;
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V2SearchMoviePopularList
     * @summary Returns Popular Movies
     * @request GET:/api/v2/Search/movie/popular
     */
    v2SearchMoviePopularList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchMovieViewModel[]>>;
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V2SearchMoviePopularDetail
     * @summary Returns Popular Movies using paging
     * @request GET:/api/v2/Search/movie/popular/{currentPosition}/{amountToLoad}
     */
    v2SearchMoviePopularDetail: (
      currentPosition: number,
      amountToLoad: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchMovieViewModel[]>>;
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V2SearchAdvancedSearchMovieCreate
     * @summary Returns Advanced Searched Media using paging
     * @request POST:/api/v2/Search/advancedSearch/movie/{currentPosition}/{amountToLoad}
     */
    v2SearchAdvancedSearchMovieCreate: (
      currentPosition: number,
      amountToLoad: number,
      data: OmbiApiTheMovieDbModelsDiscoverModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchMovieViewModel[]>>;
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V2SearchMovieSeasonalDetail
     * @summary Returns Seasonal Movies
     * @request GET:/api/v2/Search/movie/seasonal/{currentPosition}/{amountToLoad}
     */
    v2SearchMovieSeasonalDetail: (
      currentPosition: number,
      amountToLoad: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchMovieViewModel[]>>;
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V2SearchMovieRequestedDetail
     * @summary Returns Recently Requested Movies using Paging
     * @request GET:/api/v2/Search/movie/requested/{currentPosition}/{amountToLoad}
     */
    v2SearchMovieRequestedDetail: (
      currentPosition: number,
      amountToLoad: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchMovieViewModel[]>>;
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V2SearchTvRequestedDetail
     * @summary Returns Recently Requested Tv using Paging
     * @request GET:/api/v2/Search/tv/requested/{currentPosition}/{amountToLoad}
     */
    v2SearchTvRequestedDetail: (
      currentPosition: number,
      amountToLoad: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchV2SearchFullInfoTvShowViewModel[]>>;
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V2SearchMovieNowplayingList
     * @summary Returns Now Playing Movies
     * @request GET:/api/v2/Search/movie/nowplaying
     */
    v2SearchMovieNowplayingList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchMovieViewModel[]>>;
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V2SearchMovieNowplayingDetail
     * @summary Returns Now Playing Movies by page
     * @request GET:/api/v2/Search/movie/nowplaying/{currentPosition}/{amountToLoad}
     */
    v2SearchMovieNowplayingDetail: (
      currentPosition: number,
      amountToLoad: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchMovieViewModel[]>>;
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V2SearchMovieTopratedList
     * @summary Returns top rated movies.
     * @request GET:/api/v2/Search/movie/toprated
     */
    v2SearchMovieTopratedList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchMovieViewModel[]>>;
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V2SearchMovieTopratedDetail
     * @summary Returns top rated movies by page.
     * @request GET:/api/v2/Search/movie/toprated/{currentPosition}/{amountToLoad}
     */
    v2SearchMovieTopratedDetail: (
      currentPosition: number,
      amountToLoad: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchMovieViewModel[]>>;
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V2SearchMovieUpcomingList
     * @summary Returns Upcoming movies.
     * @request GET:/api/v2/Search/movie/upcoming
     */
    v2SearchMovieUpcomingList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchMovieViewModel[]>>;
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V2SearchMovieUpcomingDetail
     * @summary Returns Upcoming movies by page.
     * @request GET:/api/v2/Search/movie/upcoming/{currentPosition}/{amountToLoad}
     */
    v2SearchMovieUpcomingDetail: (
      currentPosition: number,
      amountToLoad: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchMovieViewModel[]>>;
    /**
     * @description We use Trakt.tv as the Provider
     *
     * @tags Search
     * @name V2SearchTvPopularDetail
     * @summary Returns Popular Tv Shows
     * @request GET:/api/v2/Search/tv/popular/{currentPosition}/{amountToLoad}
     */
    v2SearchTvPopularDetail: (
      currentPosition: number,
      amountToLoad: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchTvShowViewModel[]>>;
    /**
     * @description We use Trakt.tv as the Provider
     *
     * @tags Search
     * @name V2SearchTvAnticipatedDetail
     * @summary Returns most Anticipated tv shows by page.
     * @request GET:/api/v2/Search/tv/anticipated/{currentPosition}/{amountToLoad}
     */
    v2SearchTvAnticipatedDetail: (
      currentPosition: number,
      amountToLoad: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchTvShowViewModel[]>>;
    /**
     * @description We use Trakt.tv as the Provider
     *
     * @tags Search
     * @name V2SearchTvMostwatchedDetail
     * @summary Returns Most watched shows by page.
     * @request GET:/api/v2/Search/tv/mostwatched/{currentPosition}/{amountToLoad}
     * @deprecated
     */
    v2SearchTvMostwatchedDetail: (
      currentPosition: number,
      amountToLoad: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchTvShowViewModel[]>>;
    /**
     * @description We use Trakt.tv as the Provider
     *
     * @tags Search
     * @name V2SearchTvTrendingDetail
     * @summary Returns trending shows by page
     * @request GET:/api/v2/Search/tv/trending/{currentPosition}/{amountToLoad}
     */
    v2SearchTvTrendingDetail: (
      currentPosition: number,
      amountToLoad: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchTvShowViewModel[]>>;
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchActorMovieDetail
     * @summary Returns all the movies that is by the actor id
     * @request GET:/api/v2/Search/actor/{actorId}/movie
     */
    v2SearchActorMovieDetail: (
      actorId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiApiTheMovieDbModelsActorCredits>>;
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchActorTvDetail
     * @summary Returns all the tv shows that is by the actor id
     * @request GET:/api/v2/Search/actor/{actorId}/tv
     */
    v2SearchActorTvDetail: (
      actorId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiApiTheMovieDbModelsActorCredits>>;
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchArtistDetail
     * @request GET:/api/v2/Search/artist/{artistId}
     */
    v2SearchArtistDetail: (
      artistId: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchV2MusicArtistInformation>>;
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchArtistRequestDetail
     * @request GET:/api/v2/Search/artist/request/{requestId}
     */
    v2SearchArtistRequestDetail: (
      requestId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchV2MusicArtistInformation>>;
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchArtistAlbumDetail
     * @request GET:/api/v2/Search/artist/album/{albumId}
     */
    v2SearchArtistAlbumDetail: (
      albumId: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchV2MusicReleaseGroup>>;
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchReleasegroupartDetail
     * @request GET:/api/v2/Search/releasegroupart/{musicBrainzId}
     */
    v2SearchReleasegroupartDetail: (
      musicBrainzId: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchV2MusicAlbumArt>>;
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchRatingsMovieDetail
     * @request GET:/api/v2/Search/ratings/movie/{name}/{year}
     */
    v2SearchRatingsMovieDetail: (
      name: string,
      year: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiApiRottenTomatoesModelsMovieRatings>>;
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchRatingsTvDetail
     * @request GET:/api/v2/Search/ratings/tv/{name}/{year}
     */
    v2SearchRatingsTvDetail: (
      name: string,
      year: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiApiRottenTomatoesModelsTvRatings>>;
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchStreamMovieDetail
     * @request GET:/api/v2/Search/stream/movie/{movieDbId}
     */
    v2SearchStreamMovieDetail: (
      movieDbId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchV2StreamingData[]>>;
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchStreamTvDetail
     * @request GET:/api/v2/Search/stream/tv/{movieDbId}
     */
    v2SearchStreamTvDetail: (
      movieDbId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchV2StreamingData[]>>;
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V1SearchMovieDetail
     * @summary Searches for a movie.
     * @request GET:/api/v1/Search/movie/{searchTerm}
     */
    v1SearchMovieDetail: (
      searchTerm: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchMovieViewModel[]>>;
    /**
     * No description
     *
     * @tags Search
     * @name V1SearchMovieActorCreate
     * @summary Searches for movies by a certain actor.
     * @request POST:/api/v1/Search/movie/actor
     */
    v1SearchMovieActorCreate: (
      data: OmbiModelsSearchActorModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<void>>;
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V1SearchMovieCreate
     * @summary Searches for a movie.
     * @request POST:/api/v1/Search/movie
     */
    v1SearchMovieCreate: (
      data: OmbiModelsSearchMovieRefineModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<void>>;
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V1SearchMovieInfoDetail
     * @summary Gets extra information on the movie e.g. IMDBId
     * @request GET:/api/v1/Search/movie/info/{theMovieDbId}
     */
    v1SearchMovieInfoDetail: (
      theMovieDbId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchMovieViewModel>>;
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V1SearchMovieInfoCreate
     * @summary Gets extra information on the movie e.g. IMDBId
     * @request POST:/api/v1/Search/movie/info
     */
    v1SearchMovieInfoCreate: (
      data: OmbiModelsSearchMovieExtraInfoRefineModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<void>>;
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V1SearchMovieSimilarCreate
     * @summary Returns similar movies to the movie id passed in
     * @request POST:/api/v1/Search/movie/similar
     */
    v1SearchMovieSimilarCreate: (
      data: OmbiModelsSimilarMoviesRefineModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchMovieViewModel[]>>;
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V1SearchMovieSimilarDetail
     * @summary Returns similar movies to the movie id passed in
     * @request GET:/api/v1/Search/movie/{theMovieDbId}/similar
     */
    v1SearchMovieSimilarDetail: (
      theMovieDbId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchMovieViewModel[]>>;
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V1SearchMoviePopularList
     * @summary Returns Popular Movies
     * @request GET:/api/v1/Search/movie/popular
     */
    v1SearchMoviePopularList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchMovieViewModel[]>>;
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V1SearchMovieNowplayingList
     * @summary Retuns Now Playing Movies
     * @request GET:/api/v1/Search/movie/nowplaying
     */
    v1SearchMovieNowplayingList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchMovieViewModel[]>>;
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V1SearchMovieTopratedList
     * @summary Returns top rated movies.
     * @request GET:/api/v1/Search/movie/toprated
     */
    v1SearchMovieTopratedList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchMovieViewModel[]>>;
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V1SearchMovieUpcomingList
     * @summary Returns Upcoming movies.
     * @request GET:/api/v1/Search/movie/upcoming
     */
    v1SearchMovieUpcomingList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchMovieViewModel[]>>;
    /**
     * @description We use TvMaze as the Provider
     *
     * @tags Search
     * @name V1SearchTvDetail
     * @summary Searches for a Tv Show.
     * @request GET:/api/v1/Search/tv/{searchTerm}
     */
    v1SearchTvDetail: (
      searchTerm: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchTvShowViewModel[]>>;
    /**
     * @description We use TvMaze as the Provider
     *
     * @tags Search
     * @name V1SearchTvInfoDetail
     * @summary Gets extra show information.
     * @request GET:/api/v1/Search/tv/info/{tvdbId}
     */
    v1SearchTvInfoDetail: (
      tvdbId: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchTvShowViewModel>>;
    /**
     * @description We use Trakt.tv as the Provider
     *
     * @tags Search
     * @name V1SearchTvPopularList
     * @summary Returns Popular Tv Shows
     * @request GET:/api/v1/Search/tv/popular
     */
    v1SearchTvPopularList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchTvShowViewModel[]>>;
    /**
     * @description We use Trakt.tv as the Provider
     *
     * @tags Search
     * @name V1SearchTvAnticipatedList
     * @summary Returns most Anticiplateds tv shows.
     * @request GET:/api/v1/Search/tv/anticipated
     */
    v1SearchTvAnticipatedList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchTvShowViewModel[]>>;
    /**
     * @description We use Trakt.tv as the Provider
     *
     * @tags Search
     * @name V1SearchTvMostwatchedList
     * @summary Returns Most watched shows.
     * @request GET:/api/v1/Search/tv/mostwatched
     * @deprecated
     */
    v1SearchTvMostwatchedList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchTvShowViewModel[]>>;
    /**
     * @description We use Trakt.tv as the Provider
     *
     * @tags Search
     * @name V1SearchTvTrendingList
     * @summary Returns trending shows
     * @request GET:/api/v1/Search/tv/trending
     */
    v1SearchTvTrendingList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchTvShowViewModel[]>>;
    /**
     * @description We use Lidarr as the Provider
     *
     * @tags Search
     * @name V1SearchMusicArtistDetail
     * @summary Returns the artist information we searched for
     * @request GET:/api/v1/Search/music/artist/{searchTerm}
     */
    v1SearchMusicArtistDetail: (
      searchTerm: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchArtistViewModel[]>>;
    /**
     * @description We use Lidarr as the Provider
     *
     * @tags Search
     * @name V1SearchMusicAlbumDetail
     * @summary Returns the album information we searched for
     * @request GET:/api/v1/Search/music/album/{searchTerm}
     */
    v1SearchMusicAlbumDetail: (
      searchTerm: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchAlbumViewModel[]>>;
    /**
     * @description We use Lidarr as the Provider
     *
     * @tags Search
     * @name V1SearchMusicAlbumInfoDetail
     * @summary Returns the album information specified by the foreignAlbumId passed in
     * @request GET:/api/v1/Search/music/album/info/{foreignAlbumId}
     */
    v1SearchMusicAlbumInfoDetail: (
      foreignAlbumId: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchAlbumViewModel>>;
    /**
     * @description We use Lidarr as the Provider
     *
     * @tags Search
     * @name V1SearchMusicArtistAlbumDetail
     * @summary Returns all albums for the artist using the ForeignArtistId
     * @request GET:/api/v1/Search/music/artist/album/{foreignArtistId}
     */
    v1SearchMusicArtistAlbumDetail: (
      foreignArtistId: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsSearchSearchAlbumViewModel[]>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsOmbiList
     * @summary Gets the Ombi settings.
     * @request GET:/api/v1/Settings/ombi
     */
    v1SettingsOmbiList: (params?: RequestParams) => Promise<AxiosResponse<OmbiSettingsSettingsModelsOmbiSettings>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsOmbiCreate
     * @summary Save the Ombi settings.
     * @request POST:/api/v1/Settings/ombi
     */
    v1SettingsOmbiCreate: (
      data: OmbiSettingsSettingsModelsOmbiSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsBaseurlList
     * @summary Gets the base url.
     * @request GET:/api/v1/Settings/baseurl
     */
    v1SettingsBaseurlList: (params?: RequestParams) => Promise<AxiosResponse<string>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsAboutList
     * @request GET:/api/v1/Settings/about
     */
    v1SettingsAboutList: (params?: RequestParams) => Promise<AxiosResponse<OmbiModelsAboutViewModel>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsOmbiResetApiCreate
     * @request POST:/api/v1/Settings/ombi/resetApi
     */
    v1SettingsOmbiResetApiCreate: (params?: RequestParams) => Promise<AxiosResponse<string>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsPlexList
     * @summary Gets the Plex Settings.
     * @request GET:/api/v1/Settings/plex
     */
    v1SettingsPlexList: (params?: RequestParams) => Promise<AxiosResponse<OmbiCoreSettingsModelsExternalPlexSettings>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsPlexCreate
     * @summary Save the Plex settings.
     * @request POST:/api/v1/Settings/plex
     */
    v1SettingsPlexCreate: (
      data: OmbiCoreSettingsModelsExternalPlexSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsClientidList
     * @request GET:/api/v1/Settings/clientid
     */
    v1SettingsClientidList: (params?: RequestParams) => Promise<AxiosResponse<string>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsEmbyList
     * @summary Gets the Emby Settings.
     * @request GET:/api/v1/Settings/emby
     */
    v1SettingsEmbyList: (params?: RequestParams) => Promise<AxiosResponse<OmbiCoreSettingsModelsExternalEmbySettings>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsEmbyCreate
     * @summary Save the Emby settings.
     * @request POST:/api/v1/Settings/emby
     */
    v1SettingsEmbyCreate: (
      data: OmbiCoreSettingsModelsExternalEmbySettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsJellyfinList
     * @summary Gets the Jellyfin Settings.
     * @request GET:/api/v1/Settings/jellyfin
     */
    v1SettingsJellyfinList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreSettingsModelsExternalJellyfinSettings>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsJellyfinCreate
     * @summary Save the Jellyfin settings.
     * @request POST:/api/v1/Settings/jellyfin
     */
    v1SettingsJellyfinCreate: (
      data: OmbiCoreSettingsModelsExternalJellyfinSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsLandingpageList
     * @summary Gets the Landing Page Settings.
     * @request GET:/api/v1/Settings/landingpage
     */
    v1SettingsLandingpageList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreSettingsModelsLandingPageSettings>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsLandingpageCreate
     * @summary Save the Landing Page settings.
     * @request POST:/api/v1/Settings/landingpage
     */
    v1SettingsLandingpageCreate: (
      data: OmbiCoreSettingsModelsLandingPageSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsCustomizationList
     * @summary Gets the Customization Settings.
     * @request GET:/api/v1/Settings/customization
     */
    v1SettingsCustomizationList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiSettingsSettingsModelsCustomizationSettings>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsCustomizationCreate
     * @summary Save the Customization settings.
     * @request POST:/api/v1/Settings/customization
     */
    v1SettingsCustomizationCreate: (
      data: OmbiSettingsSettingsModelsCustomizationSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsDefaultlanguageList
     * @summary Gets the default language set in Ombi
     * @request GET:/api/v1/Settings/defaultlanguage
     */
    v1SettingsDefaultlanguageList: (params?: RequestParams) => Promise<AxiosResponse<string>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsThemesList
     * @summary Get's the preset themes available
     * @request GET:/api/v1/Settings/themes
     */
    v1SettingsThemesList: (params?: RequestParams) => Promise<AxiosResponse<OmbiModelsPresetThemeViewModel[]>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsSonarrList
     * @summary Gets the Sonarr Settings.
     * @request GET:/api/v1/Settings/sonarr
     */
    v1SettingsSonarrList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiSettingsSettingsModelsExternalSonarrSettings>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsSonarrCreate
     * @summary Save the Sonarr settings.
     * @request POST:/api/v1/Settings/sonarr
     */
    v1SettingsSonarrCreate: (
      data: OmbiSettingsSettingsModelsExternalSonarrSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsRadarrList
     * @summary Gets the Radarr Settings.
     * @request GET:/api/v1/Settings/radarr
     */
    v1SettingsRadarrList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiSettingsSettingsModelsExternalRadarrSettings>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsRadarrCreate
     * @summary Save the Radarr settings.
     * @request POST:/api/v1/Settings/radarr
     */
    v1SettingsRadarrCreate: (
      data: OmbiSettingsSettingsModelsExternalRadarrSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsLidarrList
     * @summary Gets the Lidarr Settings.
     * @request GET:/api/v1/Settings/lidarr
     */
    v1SettingsLidarrList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiSettingsSettingsModelsExternalLidarrSettings>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsLidarrCreate
     * @summary Save the Lidarr settings.
     * @request POST:/api/v1/Settings/lidarr
     */
    v1SettingsLidarrCreate: (
      data: OmbiSettingsSettingsModelsExternalLidarrSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsLidarrenabledList
     * @summary Gets the Lidarr Settings.
     * @request GET:/api/v1/Settings/lidarrenabled
     */
    v1SettingsLidarrenabledList: (params?: RequestParams) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsAuthenticationCreate
     * @summary Save the Authentication settings.
     * @request POST:/api/v1/Settings/authentication
     */
    v1SettingsAuthenticationCreate: (
      data: OmbiSettingsSettingsModelsAuthenticationSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsAuthenticationList
     * @summary Gets the Authentication Settings.
     * @request GET:/api/v1/Settings/authentication
     */
    v1SettingsAuthenticationList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiSettingsSettingsModelsAuthenticationSettings>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsUpdateCreate
     * @summary Save the Update settings.
     * @request POST:/api/v1/Settings/Update
     */
    v1SettingsUpdateCreate: (
      data: OmbiSettingsSettingsModelsUpdateSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsUpdateList
     * @summary Gets the Update Settings.
     * @request GET:/api/v1/Settings/Update
     */
    v1SettingsUpdateList: (params?: RequestParams) => Promise<AxiosResponse<OmbiSettingsSettingsModelsUpdateSettings>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsUserManagementList
     * @summary Gets the UserManagement Settings.
     * @request GET:/api/v1/Settings/UserManagement
     */
    v1SettingsUserManagementList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiSettingsSettingsModelsUserManagementSettings>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsUserManagementCreate
     * @summary Save the UserManagement settings.
     * @request POST:/api/v1/Settings/UserManagement
     */
    v1SettingsUserManagementCreate: (
      data: OmbiSettingsSettingsModelsUserManagementSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsCouchPotatoList
     * @summary Gets the CouchPotatoSettings Settings.
     * @request GET:/api/v1/Settings/CouchPotato
     */
    v1SettingsCouchPotatoList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiSettingsSettingsModelsExternalCouchPotatoSettings>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsCouchPotatoCreate
     * @summary Save the CouchPotatoSettings settings.
     * @request POST:/api/v1/Settings/CouchPotato
     */
    v1SettingsCouchPotatoCreate: (
      data: OmbiSettingsSettingsModelsExternalCouchPotatoSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsDogNzbList
     * @summary Gets the DogNzbSettings Settings.
     * @request GET:/api/v1/Settings/DogNzb
     */
    v1SettingsDogNzbList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiSettingsSettingsModelsExternalDogNzbSettings>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsDogNzbCreate
     * @summary Save the DogNzbSettings settings.
     * @request POST:/api/v1/Settings/DogNzb
     */
    v1SettingsDogNzbCreate: (
      data: OmbiSettingsSettingsModelsExternalDogNzbSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsSickRageCreate
     * @summary Save the SickRage settings.
     * @request POST:/api/v1/Settings/SickRage
     */
    v1SettingsSickRageCreate: (
      data: OmbiSettingsSettingsModelsExternalSickRageSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsSickRageList
     * @summary Gets the SickRage Settings.
     * @request GET:/api/v1/Settings/SickRage
     */
    v1SettingsSickRageList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiSettingsSettingsModelsExternalSickRageSettings>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsJobsList
     * @summary Gets the JobSettings Settings.
     * @request GET:/api/v1/Settings/jobs
     */
    v1SettingsJobsList: (params?: RequestParams) => Promise<AxiosResponse<OmbiSettingsSettingsModelsJobSettings>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsJobsCreate
     * @summary Save the JobSettings settings.
     * @request POST:/api/v1/Settings/jobs
     */
    v1SettingsJobsCreate: (
      data: OmbiSettingsSettingsModelsJobSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiModelsJobSettingsViewModel>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsTestcronCreate
     * @request POST:/api/v1/Settings/testcron
     */
    v1SettingsTestcronCreate: (
      data: OmbiModelsCronViewModelBody,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiModelsCronTestModel>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsIssuesCreate
     * @summary Save the Vote settings.
     * @request POST:/api/v1/Settings/Issues
     */
    v1SettingsIssuesCreate: (
      data: OmbiSettingsSettingsModelsIssueSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsIssuesList
     * @summary Gets the Issues Settings.
     * @request GET:/api/v1/Settings/Issues
     */
    v1SettingsIssuesList: (params?: RequestParams) => Promise<AxiosResponse<OmbiSettingsSettingsModelsIssueSettings>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsIssuesenabledList
     * @request GET:/api/v1/Settings/issuesenabled
     */
    v1SettingsIssuesenabledList: (params?: RequestParams) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsVoteCreate
     * @summary Save the Vote settings.
     * @request POST:/api/v1/Settings/vote
     */
    v1SettingsVoteCreate: (
      data: OmbiSettingsSettingsModelsVoteSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsVoteList
     * @summary Gets the Vote Settings.
     * @request GET:/api/v1/Settings/vote
     */
    v1SettingsVoteList: (params?: RequestParams) => Promise<AxiosResponse<OmbiSettingsSettingsModelsVoteSettings>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsVoteenabledList
     * @request GET:/api/v1/Settings/voteenabled
     */
    v1SettingsVoteenabledList: (params?: RequestParams) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsThemoviedbCreate
     * @summary Save The Movie DB settings.
     * @request POST:/api/v1/Settings/themoviedb
     */
    v1SettingsThemoviedbCreate: (
      data: OmbiCoreSettingsModelsExternalTheMovieDbSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsThemoviedbList
     * @summary Get The Movie DB settings.
     * @request GET:/api/v1/Settings/themoviedb
     */
    v1SettingsThemoviedbList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreSettingsModelsExternalTheMovieDbSettings>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsEmailCreate
     * @summary Saves the email notification settings.
     * @request POST:/api/v1/Settings/notifications/email
     */
    v1SettingsNotificationsEmailCreate: (
      data: OmbiCoreModelsUIEmailNotificationsViewModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsEmailList
     * @summary Gets the Email Notification Settings.
     * @request GET:/api/v1/Settings/notifications/email
     */
    v1SettingsNotificationsEmailList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsUIEmailNotificationsViewModel>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsEmailEnabledList
     * @summary Gets the Email Notification Settings.
     * @request GET:/api/v1/Settings/notifications/email/enabled
     */
    v1SettingsNotificationsEmailEnabledList: (params?: RequestParams) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsDiscordCreate
     * @summary Saves the discord notification settings.
     * @request POST:/api/v1/Settings/notifications/discord
     */
    v1SettingsNotificationsDiscordCreate: (
      data: OmbiCoreModelsUIDiscordNotificationsViewModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsDiscordList
     * @summary Gets the discord Notification Settings.
     * @request GET:/api/v1/Settings/notifications/discord
     */
    v1SettingsNotificationsDiscordList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsUIDiscordNotificationsViewModel>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsTelegramCreate
     * @summary Saves the telegram notification settings.
     * @request POST:/api/v1/Settings/notifications/telegram
     */
    v1SettingsNotificationsTelegramCreate: (
      data: OmbiCoreModelsUITelegramNotificationsViewModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsTelegramList
     * @summary Gets the telegram Notification Settings.
     * @request GET:/api/v1/Settings/notifications/telegram
     */
    v1SettingsNotificationsTelegramList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsUITelegramNotificationsViewModel>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsPushbulletCreate
     * @summary Saves the pushbullet notification settings.
     * @request POST:/api/v1/Settings/notifications/pushbullet
     */
    v1SettingsNotificationsPushbulletCreate: (
      data: OmbiCoreModelsUIPushbulletNotificationViewModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsPushbulletList
     * @summary Gets the pushbullet Notification Settings.
     * @request GET:/api/v1/Settings/notifications/pushbullet
     */
    v1SettingsNotificationsPushbulletList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsUIPushbulletNotificationViewModel>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsPushoverCreate
     * @summary Saves the pushover notification settings.
     * @request POST:/api/v1/Settings/notifications/pushover
     */
    v1SettingsNotificationsPushoverCreate: (
      data: OmbiCoreModelsUIPushoverNotificationViewModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsPushoverList
     * @summary Gets the pushover Notification Settings.
     * @request GET:/api/v1/Settings/notifications/pushover
     */
    v1SettingsNotificationsPushoverList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsUIPushoverNotificationViewModel>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsSlackCreate
     * @summary Saves the slack notification settings.
     * @request POST:/api/v1/Settings/notifications/slack
     */
    v1SettingsNotificationsSlackCreate: (
      data: OmbiCoreModelsUISlackNotificationsViewModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsSlackList
     * @summary Gets the slack Notification Settings.
     * @request GET:/api/v1/Settings/notifications/slack
     */
    v1SettingsNotificationsSlackList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsUISlackNotificationsViewModel>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsMattermostCreate
     * @summary Saves the Mattermost notification settings.
     * @request POST:/api/v1/Settings/notifications/mattermost
     */
    v1SettingsNotificationsMattermostCreate: (
      data: OmbiCoreModelsUIMattermostNotificationsViewModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsMattermostList
     * @summary Gets the Mattermost Notification Settings.
     * @request GET:/api/v1/Settings/notifications/mattermost
     */
    v1SettingsNotificationsMattermostList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsUIMattermostNotificationsViewModel>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsTwilioList
     * @summary Gets the Twilio Notification Settings.
     * @request GET:/api/v1/Settings/notifications/twilio
     */
    v1SettingsNotificationsTwilioList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsUITwilioSettingsViewModel>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsTwilioCreate
     * @summary Saves the Mattermost notification settings.
     * @request POST:/api/v1/Settings/notifications/twilio
     */
    v1SettingsNotificationsTwilioCreate: (
      data: OmbiCoreModelsUITwilioSettingsViewModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsMobileCreate
     * @summary Saves the Mobile notification settings.
     * @request POST:/api/v1/Settings/notifications/mobile
     */
    v1SettingsNotificationsMobileCreate: (
      data: OmbiCoreModelsUIMobileNotificationsViewModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsMobileList
     * @summary Gets the Mobile Notification Settings.
     * @request GET:/api/v1/Settings/notifications/mobile
     */
    v1SettingsNotificationsMobileList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsUIMobileNotificationsViewModel>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsGotifyCreate
     * @summary Saves the gotify notification settings.
     * @request POST:/api/v1/Settings/notifications/gotify
     */
    v1SettingsNotificationsGotifyCreate: (
      data: OmbiCoreModelsUIGotifyNotificationViewModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsGotifyList
     * @summary Gets the gotify Notification Settings.
     * @request GET:/api/v1/Settings/notifications/gotify
     */
    v1SettingsNotificationsGotifyList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsUIGotifyNotificationViewModel>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsWebhookCreate
     * @summary Saves the webhook notification settings.
     * @request POST:/api/v1/Settings/notifications/webhook
     */
    v1SettingsNotificationsWebhookCreate: (
      data: OmbiCoreModelsUIWebhookNotificationViewModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsWebhookList
     * @summary Gets the webhook notification settings.
     * @request GET:/api/v1/Settings/notifications/webhook
     */
    v1SettingsNotificationsWebhookList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsUIWebhookNotificationViewModel>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsNewsletterCreate
     * @summary Saves the Newsletter notification settings.
     * @request POST:/api/v1/Settings/notifications/newsletter
     */
    v1SettingsNotificationsNewsletterCreate: (
      data: OmbiCoreModelsUINewsletterNotificationViewModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsNewsletterList
     * @summary Gets the Newsletter Notification Settings.
     * @request GET:/api/v1/Settings/notifications/newsletter
     */
    v1SettingsNotificationsNewsletterList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsUINewsletterNotificationViewModel>>;
    /**
     * No description
     *
     * @tags Sonarr
     * @name V1SonarrProfilesCreate
     * @summary Gets the Sonarr profiles.
     * @request POST:/api/v1/Sonarr/Profiles
     */
    v1SonarrProfilesCreate: (
      data: OmbiSettingsSettingsModelsExternalSonarrSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiApiSonarrModelsSonarrProfile[]>>;
    /**
     * No description
     *
     * @tags Sonarr
     * @name V1SonarrProfilesList
     * @summary Gets the Sonarr profiles.
     * @request GET:/api/v1/Sonarr/Profiles
     */
    v1SonarrProfilesList: (params?: RequestParams) => Promise<AxiosResponse<OmbiApiSonarrModelsSonarrProfile[]>>;
    /**
     * No description
     *
     * @tags Sonarr
     * @name V1SonarrRootFoldersCreate
     * @summary Gets the Sonarr root folders.
     * @request POST:/api/v1/Sonarr/RootFolders
     */
    v1SonarrRootFoldersCreate: (
      data: OmbiSettingsSettingsModelsExternalSonarrSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiApiSonarrModelsSonarrRootFolder[]>>;
    /**
     * No description
     *
     * @tags Sonarr
     * @name V1SonarrRootFoldersList
     * @summary Gets the Sonarr root folders.
     * @request GET:/api/v1/Sonarr/RootFolders
     */
    v1SonarrRootFoldersList: (params?: RequestParams) => Promise<AxiosResponse<OmbiApiSonarrModelsSonarrRootFolder[]>>;
    /**
     * No description
     *
     * @tags Sonarr
     * @name V1SonarrV3LanguageProfilesList
     * @summary Gets the Sonarr V3 language profiles
     * @request GET:/api/v1/Sonarr/v3/LanguageProfiles
     */
    v1SonarrV3LanguageProfilesList: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiApiSonarrModelsV3LanguageProfiles[]>>;
    /**
     * No description
     *
     * @tags Sonarr
     * @name V1SonarrV3LanguageProfilesCreate
     * @summary Gets the Sonarr V3 language profiles
     * @request POST:/api/v1/Sonarr/v3/LanguageProfiles
     */
    v1SonarrV3LanguageProfilesCreate: (
      data: OmbiSettingsSettingsModelsExternalSonarrSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiApiSonarrModelsV3LanguageProfiles[]>>;
    /**
     * No description
     *
     * @tags Sonarr
     * @name V1SonarrTagsCreate
     * @summary Gets the Sonarr tags
     * @request POST:/api/v1/Sonarr/tags
     */
    v1SonarrTagsCreate: (
      data: OmbiSettingsSettingsModelsExternalSonarrSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiApiSonarrModelsTag[]>>;
    /**
     * No description
     *
     * @tags Sonarr
     * @name V1SonarrTagsList
     * @summary Gets the Sonarr tags
     * @request GET:/api/v1/Sonarr/tags
     */
    v1SonarrTagsList: (params?: RequestParams) => Promise<AxiosResponse<OmbiApiSonarrModelsTag[]>>;
    /**
     * No description
     *
     * @tags Sonarr
     * @name V1SonarrEnabledList
     * @request GET:/api/v1/Sonarr/enabled
     */
    v1SonarrEnabledList: (params?: RequestParams) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Stats
     * @name V1StatsList
     * @request GET:/api/v1/Stats
     */
    v1StatsList: (
      data: OmbiCoreEngineSummaryRequest,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreEngineUserStatsSummary>>;
    /**
     * No description
     *
     * @tags Status
     * @name V1StatusList
     * @summary Gets the status of Ombi.
     * @request GET:/api/v1/Status
     */
    v1StatusList: (params?: RequestParams) => Promise<AxiosResponse<SystemNetHttpStatusCode>>;
    /**
     * No description
     *
     * @tags Status
     * @name V1StatusInfoList
     * @summary Returns information about this ombi instance
     * @request GET:/api/v1/Status/info
     */
    v1StatusInfoList: (params?: RequestParams) => Promise<AxiosResponse<string>>;
    /**
     * No description
     *
     * @tags System
     * @name V2SystemNewsList
     * @request GET:/api/v2/System/news
     */
    v2SystemNewsList: (params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags System
     * @name V2SystemLogsList
     * @request GET:/api/v2/System/logs
     */
    v2SystemLogsList: (params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags System
     * @name V2SystemLogsDetail
     * @request GET:/api/v2/System/logs/{logFileName}
     */
    v2SystemLogsDetail: (logFileName: string, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags System
     * @name V2SystemLogsDownloadDetail
     * @request GET:/api/v2/System/logs/download/{logFileName}
     */
    v2SystemLogsDownloadDetail: (logFileName: string, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterDiscordCreate
     * @summary Sends a test message to discord using the provided settings
     * @request POST:/api/v1/Tester/discord
     */
    v1TesterDiscordCreate: (
      data: OmbiSettingsSettingsModelsNotificationsDiscordNotificationSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterPushbulletCreate
     * @summary Sends a test message to Pushbullet using the provided settings
     * @request POST:/api/v1/Tester/pushbullet
     */
    v1TesterPushbulletCreate: (
      data: OmbiSettingsSettingsModelsNotificationsPushbulletSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterPushoverCreate
     * @summary Sends a test message to Pushover using the provided settings
     * @request POST:/api/v1/Tester/pushover
     */
    v1TesterPushoverCreate: (
      data: OmbiSettingsSettingsModelsNotificationsPushoverSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterGotifyCreate
     * @summary Sends a test message to Gotify using the provided settings
     * @request POST:/api/v1/Tester/gotify
     */
    v1TesterGotifyCreate: (
      data: OmbiSettingsSettingsModelsNotificationsGotifySettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterWebhookCreate
     * @summary Sends a test message to configured webhook using the provided settings
     * @request POST:/api/v1/Tester/webhook
     */
    v1TesterWebhookCreate: (
      data: OmbiSettingsSettingsModelsNotificationsWebhookSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterMattermostCreate
     * @summary Sends a test message to mattermost using the provided settings
     * @request POST:/api/v1/Tester/mattermost
     */
    v1TesterMattermostCreate: (
      data: OmbiSettingsSettingsModelsNotificationsMattermostNotificationSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterSlackCreate
     * @summary Sends a test message to Slack using the provided settings
     * @request POST:/api/v1/Tester/slack
     */
    v1TesterSlackCreate: (
      data: OmbiSettingsSettingsModelsNotificationsSlackNotificationSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterEmailCreate
     * @summary Sends a test message via email to the admin email using the provided settings
     * @request POST:/api/v1/Tester/email
     */
    v1TesterEmailCreate: (
      data: OmbiSettingsSettingsModelsNotificationsEmailNotificationSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterPlexCreate
     * @summary Checks if we can connect to Plex with the provided settings
     * @request POST:/api/v1/Tester/plex
     */
    v1TesterPlexCreate: (
      data: OmbiCoreSettingsModelsExternalPlexServers,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterEmbyCreate
     * @summary Checks if we can connect to Emby with the provided settings
     * @request POST:/api/v1/Tester/emby
     */
    v1TesterEmbyCreate: (
      data: OmbiCoreSettingsModelsExternalEmbyServers,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterJellyfinCreate
     * @summary Checks if we can connect to Jellyfin with the provided settings
     * @request POST:/api/v1/Tester/jellyfin
     */
    v1TesterJellyfinCreate: (
      data: OmbiCoreSettingsModelsExternalJellyfinServers,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterRadarrCreate
     * @summary Checks if we can connect to Radarr with the provided settings
     * @request POST:/api/v1/Tester/radarr
     */
    v1TesterRadarrCreate: (
      data: OmbiSettingsSettingsModelsExternalRadarrSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsTesterResultModel>>;
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterSonarrCreate
     * @summary Checks if we can connect to Sonarr with the provided settings
     * @request POST:/api/v1/Tester/sonarr
     */
    v1TesterSonarrCreate: (
      data: OmbiSettingsSettingsModelsExternalSonarrSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsTesterResultModel>>;
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterCouchpotatoCreate
     * @summary Checks if we can connect to CouchPotato with the provided settings
     * @request POST:/api/v1/Tester/couchpotato
     */
    v1TesterCouchpotatoCreate: (
      data: OmbiSettingsSettingsModelsExternalCouchPotatoSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterTelegramCreate
     * @summary Sends a test message to Telegram using the provided settings
     * @request POST:/api/v1/Tester/telegram
     */
    v1TesterTelegramCreate: (
      data: OmbiSettingsSettingsModelsNotificationsTelegramSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterSickrageCreate
     * @summary Sends a test message to Slack using the provided settings
     * @request POST:/api/v1/Tester/sickrage
     */
    v1TesterSickrageCreate: (
      data: OmbiSettingsSettingsModelsExternalSickRageSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterNewsletterCreate
     * @request POST:/api/v1/Tester/newsletter
     */
    v1TesterNewsletterCreate: (
      data: OmbiCoreModelsUINewsletterNotificationViewModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterMobileCreate
     * @request POST:/api/v1/Tester/mobile
     */
    v1TesterMobileCreate: (
      data: OmbiModelsMobileNotificationTestViewModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterLidarrCreate
     * @request POST:/api/v1/Tester/lidarr
     */
    v1TesterLidarrCreate: (
      data: OmbiSettingsSettingsModelsExternalLidarrSettings,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsTesterResultModel>>;
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterWhatsappCreate
     * @request POST:/api/v1/Tester/whatsapp
     */
    v1TesterWhatsappCreate: (
      data: OmbiCoreModelsUIWhatsAppSettingsViewModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags TheMovieDb
     * @name V1TheMovieDbKeywordsList
     * @summary Searches for keywords matching the specified term.
     * @request GET:/api/v1/TheMovieDb/Keywords
     */
    v1TheMovieDbKeywordsList: (
      query?: {
        searchTerm?: string;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiApiTheMovieDbModelsTheMovidDbKeyValue[]>>;
    /**
     * No description
     *
     * @tags TheMovieDb
     * @name V1TheMovieDbKeywordsDetail
     * @summary Gets the keyword matching the specified ID.
     * @request GET:/api/v1/TheMovieDb/Keywords/{keywordId}
     */
    v1TheMovieDbKeywordsDetail: (keywordId: number, params?: RequestParams) => Promise<AxiosResponse<void>>;
    /**
     * No description
     *
     * @tags TheMovieDb
     * @name V1TheMovieDbGenresDetail
     * @summary Gets the genres for either Tv or Movies depending on media type
     * @request GET:/api/v1/TheMovieDb/Genres/{media}
     */
    v1TheMovieDbGenresDetail: (
      media: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiTheMovieDbApiModelsGenre[]>>;
    /**
     * No description
     *
     * @tags TheMovieDb
     * @name V1TheMovieDbWatchProvidersMovieList
     * @summary Searches for the watch providers matching the specified term.
     * @request GET:/api/v1/TheMovieDb/WatchProviders/movie
     */
    v1TheMovieDbWatchProvidersMovieList: (
      query?: {
        searchTerm?: string;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiApiTheMovieDbModelsWatchProvidersResults[]>>;
    /**
     * No description
     *
     * @tags TheMovieDb
     * @name V1TheMovieDbWatchProvidersTvList
     * @summary Searches for the watch providers matching the specified term.
     * @request GET:/api/v1/TheMovieDb/WatchProviders/tv
     */
    v1TheMovieDbWatchProvidersTvList: (
      query?: {
        searchTerm?: string;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiApiTheMovieDbModelsWatchProvidersResults[]>>;
    /**
     * No description
     *
     * @tags Token
     * @name V1TokenCreate
     * @summary Gets the token.
     * @request POST:/api/v1/Token
     */
    v1TokenCreate: (data: OmbiModelsUserAuthModel, params?: RequestParams) => Promise<AxiosResponse<any>>;
    /**
     * No description
     *
     * @tags Token
     * @name V1TokenPlextokenCreate
     * @summary Returns the Token for the Ombi User if we can match the Plex user with a valid Ombi User
     * @request POST:/api/v1/Token/plextoken
     */
    v1TokenPlextokenCreate: (
      data: OmbiModelsExternalPlexTokenAuthentication,
      params?: RequestParams,
    ) => Promise<AxiosResponse<any>>;
    /**
     * No description
     *
     * @tags Token
     * @name V1TokenDetail
     * @request GET:/api/v1/Token/{pinId}
     */
    v1TokenDetail: (pinId: number, params?: RequestParams) => Promise<AxiosResponse<any>>;
    /**
     * No description
     *
     * @tags Token
     * @name V1TokenRefreshCreate
     * @summary Refreshes the token.
     * @request POST:/api/v1/Token/refresh
     */
    v1TokenRefreshCreate: (
      data: OmbiControllersV1TokenControllerTokenRefresh,
      params?: RequestParams,
    ) => Promise<AxiosResponse<any>>;
    /**
     * No description
     *
     * @tags Token
     * @name V1TokenRequirePasswordCreate
     * @request POST:/api/v1/Token/requirePassword
     */
    v1TokenRequirePasswordCreate: (
      data: OmbiModelsUserAuthModel,
      params?: RequestParams,
    ) => Promise<AxiosResponse<boolean>>;
    /**
     * No description
     *
     * @tags Update
     * @name V1UpdateList
     * @request GET:/api/v1/Update
     */
    v1UpdateList: (params?: RequestParams) => Promise<AxiosResponse<OmbiCoreProcessorUpdateModel>>;
    /**
     * No description
     *
     * @tags Vote
     * @name V1VoteList
     * @summary Returns the viewmodel to render on the UI
     * @request GET:/api/v1/Vote
     */
    v1VoteList: (params?: RequestParams) => Promise<AxiosResponse<OmbiCoreModelsUIVoteViewModel[]>>;
    /**
     * No description
     *
     * @tags Vote
     * @name V1VoteUpMovieCreate
     * @summary Upvotes a movie
     * @request POST:/api/v1/Vote/up/movie/{requestId}
     */
    v1VoteUpMovieCreate: (
      requestId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsVoteEngineResult>>;
    /**
     * No description
     *
     * @tags Vote
     * @name V1VoteUpTvCreate
     * @summary Upvotes a tv show
     * @request POST:/api/v1/Vote/up/tv/{requestId}
     */
    v1VoteUpTvCreate: (
      requestId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsVoteEngineResult>>;
    /**
     * No description
     *
     * @tags Vote
     * @name V1VoteUpAlbumCreate
     * @summary Upvotes a album
     * @request POST:/api/v1/Vote/up/album/{requestId}
     */
    v1VoteUpAlbumCreate: (
      requestId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsVoteEngineResult>>;
    /**
     * No description
     *
     * @tags Vote
     * @name V1VoteDownMovieCreate
     * @summary Downvotes a movie
     * @request POST:/api/v1/Vote/down/movie/{requestId}
     */
    v1VoteDownMovieCreate: (
      requestId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsVoteEngineResult>>;
    /**
     * No description
     *
     * @tags Vote
     * @name V1VoteDownTvCreate
     * @summary Downvotes a tv show
     * @request POST:/api/v1/Vote/down/tv/{requestId}
     */
    v1VoteDownTvCreate: (
      requestId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsVoteEngineResult>>;
    /**
     * No description
     *
     * @tags Vote
     * @name V1VoteDownAlbumCreate
     * @summary Downvotes a album
     * @request POST:/api/v1/Vote/down/album/{requestId}
     */
    v1VoteDownAlbumCreate: (
      requestId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<OmbiCoreModelsVoteEngineResult>>;
    /**
     * No description
     *
     * @tags Vote
     * @name V1VoteMovieDetail
     * @summary Get's all the votes for the request id
     * @request GET:/api/v1/Vote/movie/{requestId}
     */
    v1VoteMovieDetail: (requestId: number, params?: RequestParams) => Promise<AxiosResponse<OmbiStoreEntitiesVotes[]>>;
    /**
     * No description
     *
     * @tags Vote
     * @name V1VoteMusicDetail
     * @summary Get's all the votes for the request id
     * @request GET:/api/v1/Vote/music/{requestId}
     */
    v1VoteMusicDetail: (requestId: number, params?: RequestParams) => Promise<AxiosResponse<OmbiStoreEntitiesVotes[]>>;
    /**
     * No description
     *
     * @tags Vote
     * @name V1VoteTvDetail
     * @summary Get's all the votes for the request id
     * @request GET:/api/v1/Vote/tv/{requestId}
     */
    v1VoteTvDetail: (requestId: number, params?: RequestParams) => Promise<AxiosResponse<OmbiStoreEntitiesVotes[]>>;
  };
}
