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

import axios from "axios";
export var ContentType;
(function (ContentType) {
  ContentType["Json"] = "application/json";
  ContentType["FormData"] = "multipart/form-data";
  ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType || (ContentType = {}));
export class HttpClient {
  instance;
  securityData = null;
  securityWorker;
  secure;
  format;
  constructor({ securityWorker, secure, format, ...axiosConfig } = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }
  setSecurityData = data => {
    this.securityData = data;
  };
  mergeRequestParams(params1, params2) {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }
  createFormData(input) {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }
  request = async ({ secure, path, type, query, format, body, ...params }) => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;
    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};
      body = this.createFormData(body);
    }
    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}
/**
 * @title Ombi Api V1
 * @version v1
 * @contact Jamie Rees (https://www.ombi.io/)
 */
export class Api extends HttpClient {
  api = {
    /**
     * No description
     *
     * @tags Calendar
     * @name V2CalendarList
     * @request GET:/api/v2/Calendar
     */
    v2CalendarList: (params = {}) =>
      this.request({
        path: `/api/v2/Calendar`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags CouchPotato
     * @name V1CouchPotatoProfileCreate
     * @request POST:/api/v1/CouchPotato/profile
     */
    v1CouchPotatoProfileCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/CouchPotato/profile`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags CouchPotato
     * @name V1CouchPotatoApikeyCreate
     * @request POST:/api/v1/CouchPotato/apikey
     */
    v1CouchPotatoApikeyCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/CouchPotato/apikey`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags CustomPage
     * @name V1CustomPageList
     * @summary Gets the Custom Page Settings.
     * @request GET:/api/v1/CustomPage
     */
    v1CustomPageList: (params = {}) =>
      this.request({
        path: `/api/v1/CustomPage`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags CustomPage
     * @name V1CustomPageCreate
     * @summary Saves the Custom Page Settings.
     * @request POST:/api/v1/CustomPage
     */
    v1CustomPageCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/CustomPage`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Emby
     * @name V1EmbyCreate
     * @summary Signs into the Emby Api
     * @request POST:/api/v1/Emby
     */
    v1EmbyCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Emby`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Emby
     * @name V1EmbyInfoCreate
     * @request POST:/api/v1/Emby/info
     */
    v1EmbyInfoCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Emby/info`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Emby
     * @name V1EmbyUsersList
     * @summary Gets the emby users.
     * @request GET:/api/v1/Emby/users
     */
    v1EmbyUsersList: (params = {}) =>
      this.request({
        path: `/api/v1/Emby/users`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Emby
     * @name V1EmbyLibraryCreate
     * @request POST:/api/v1/Emby/Library
     */
    v1EmbyLibraryCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Emby/Library`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Hub
     * @name V2HubUsersList
     * @summary Returns the currently connected users in Ombi
     * @request GET:/api/v2/Hub/Users
     */
    v2HubUsersList: (params = {}) =>
      this.request({
        path: `/api/v2/Hub/Users`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityUsersList
     * @summary Gets all users.
     * @request GET:/api/v1/Identity/Users
     */
    v1IdentityUsersList: (params = {}) =>
      this.request({
        path: `/api/v1/Identity/Users`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityDropdownUsersList
     * @summary Gets all users for dropdown purposes.
     * @request GET:/api/v1/Identity/dropdown/Users
     */
    v1IdentityDropdownUsersList: (params = {}) =>
      this.request({
        path: `/api/v1/Identity/dropdown/Users`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityList
     * @summary Gets the current logged in user.
     * @request GET:/api/v1/Identity
     */
    v1IdentityList: (params = {}) =>
      this.request({
        path: `/api/v1/Identity`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityCreate
     * @summary Creates the user.
     * @request POST:/api/v1/Identity
     */
    v1IdentityCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Identity`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityUpdate
     * @summary Updates the user.
     * @request PUT:/api/v1/Identity
     */
    v1IdentityUpdate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Identity`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityLanguageCreate
     * @summary Sets the current users language
     * @request POST:/api/v1/Identity/language
     */
    v1IdentityLanguageCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Identity/language`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityStreamingcountryList
     * @summary Returns the supported country codes that we have streaming data for
     * @request GET:/api/v1/Identity/streamingcountry
     */
    v1IdentityStreamingcountryList: (params = {}) =>
      this.request({
        path: `/api/v1/Identity/streamingcountry`,
        method: "GET",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityStreamingcountryCreate
     * @summary Sets the current users country streaming preference
     * @request POST:/api/v1/Identity/streamingcountry
     */
    v1IdentityStreamingcountryCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Identity/streamingcountry`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityUserDetail
     * @summary Gets the user by the user id.
     * @request GET:/api/v1/Identity/User/{id}
     */
    v1IdentityUserDetail: (id, params = {}) =>
      this.request({
        path: `/api/v1/Identity/User/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityLocalUpdate
     * @summary This is for the local user to change their details.
     * @request PUT:/api/v1/Identity/local
     */
    v1IdentityLocalUpdate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Identity/local`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityDelete
     * @summary Deletes the user.
     * @request DELETE:/api/v1/Identity/{userId}
     */
    v1IdentityDelete: (userId, params = {}) =>
      this.request({
        path: `/api/v1/Identity/${userId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityClaimsList
     * @summary Gets all available claims in the system.
     * @request GET:/api/v1/Identity/claims
     */
    v1IdentityClaimsList: (params = {}) =>
      this.request({
        path: `/api/v1/Identity/claims`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityWelcomeEmailCreate
     * @request POST:/api/v1/Identity/welcomeEmail
     */
    v1IdentityWelcomeEmailCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Identity/welcomeEmail`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityNotificationpreferencesList
     * @request GET:/api/v1/Identity/notificationpreferences
     */
    v1IdentityNotificationpreferencesList: (params = {}) =>
      this.request({
        path: `/api/v1/Identity/notificationpreferences`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityNotificationpreferencesDetail
     * @request GET:/api/v1/Identity/notificationpreferences/{userId}
     */
    v1IdentityNotificationpreferencesDetail: (userId, params = {}) =>
      this.request({
        path: `/api/v1/Identity/notificationpreferences/${userId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityNotificationPreferencesCreate
     * @request POST:/api/v1/Identity/NotificationPreferences
     */
    v1IdentityNotificationPreferencesCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Identity/NotificationPreferences`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
    /**
     * No description
     *
     * @tags Identity
     * @name V1IdentityNewsletterUnsubscribeDetail
     * @request GET:/api/v1/Identity/newsletter/unsubscribe/{userId}
     */
    v1IdentityNewsletterUnsubscribeDetail: (userId, params = {}) =>
      this.request({
        path: `/api/v1/Identity/newsletter/unsubscribe/${userId}`,
        method: "GET",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Images
     * @name V1ImagesTvDetail
     * @request GET:/api/v1/Images/tv/{tvdbid}
     */
    v1ImagesTvDetail: (tvdbid, params = {}) =>
      this.request({
        path: `/api/v1/Images/tv/${tvdbid}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Images
     * @name V1ImagesPosterList
     * @request GET:/api/v1/Images/poster
     */
    v1ImagesPosterList: (params = {}) =>
      this.request({
        path: `/api/v1/Images/poster`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Images
     * @name V1ImagesPosterMovieDetail
     * @request GET:/api/v1/Images/poster/movie/{movieDbId}
     */
    v1ImagesPosterMovieDetail: (movieDbId, params = {}) =>
      this.request({
        path: `/api/v1/Images/poster/movie/${movieDbId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Images
     * @name V1ImagesPosterTvDetail
     * @request GET:/api/v1/Images/poster/tv/{tvdbid}
     */
    v1ImagesPosterTvDetail: (tvdbid, params = {}) =>
      this.request({
        path: `/api/v1/Images/poster/tv/${tvdbid}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Images
     * @name V1ImagesBackgroundMovieDetail
     * @request GET:/api/v1/Images/background/movie/{movieDbId}
     */
    v1ImagesBackgroundMovieDetail: (movieDbId, params = {}) =>
      this.request({
        path: `/api/v1/Images/background/movie/${movieDbId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Images
     * @name V1ImagesBannerMovieDetail
     * @request GET:/api/v1/Images/banner/movie/{movieDbId}
     */
    v1ImagesBannerMovieDetail: (movieDbId, params = {}) =>
      this.request({
        path: `/api/v1/Images/banner/movie/${movieDbId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Images
     * @name V1ImagesBackgroundTvDetail
     * @request GET:/api/v1/Images/background/tv/{tvdbid}
     */
    v1ImagesBackgroundTvDetail: (tvdbid, params = {}) =>
      this.request({
        path: `/api/v1/Images/background/tv/${tvdbid}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Images
     * @name V1ImagesBackgroundList
     * @request GET:/api/v1/Images/background
     */
    v1ImagesBackgroundList: (params = {}) =>
      this.request({
        path: `/api/v1/Images/background`,
        method: "GET",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Issues
     * @name V2IssuesDetail
     * @request GET:/api/v2/Issues/{position}/{take}/{status}
     */
    v2IssuesDetail: (position, take, status, params = {}) =>
      this.request({
        path: `/api/v2/Issues/${position}/${take}/${status}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Issues
     * @name V2IssuesDetailsDetail
     * @request GET:/api/v2/Issues/details/{providerId}
     */
    v2IssuesDetailsDetail: (providerId, params = {}) =>
      this.request({
        path: `/api/v2/Issues/details/${providerId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesCategoriesList
     * @summary Get's all categories
     * @request GET:/api/v1/Issues/categories
     */
    v1IssuesCategoriesList: (params = {}) =>
      this.request({
        path: `/api/v1/Issues/categories`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesCategoriesCreate
     * @summary Creates a new category
     * @request POST:/api/v1/Issues/categories
     */
    v1IssuesCategoriesCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Issues/categories`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesCategoriesDelete
     * @summary Deletes a Category
     * @request DELETE:/api/v1/Issues/categories/{catId}
     */
    v1IssuesCategoriesDelete: (catId, params = {}) =>
      this.request({
        path: `/api/v1/Issues/categories/${catId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesList
     * @summary Returns all the issues
     * @request GET:/api/v1/Issues
     */
    v1IssuesList: (params = {}) =>
      this.request({
        path: `/api/v1/Issues`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesCreate
     * @summary Create Movie Issue
     * @request POST:/api/v1/Issues
     */
    v1IssuesCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Issues`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesDetail
     * @summary Returns all the issues
     * @request GET:/api/v1/Issues/{take}/{skip}/{status}
     */
    v1IssuesDetail: (take, skip, status, params = {}) =>
      this.request({
        path: `/api/v1/Issues/${take}/${skip}/${status}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesCountList
     * @summary Returns all the issues count
     * @request GET:/api/v1/Issues/count
     */
    v1IssuesCountList: (params = {}) =>
      this.request({
        path: `/api/v1/Issues/count`,
        method: "GET",
        format: "json",
        ...params,
      }),
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
    v1IssuesDetail2: (id, params = {}) =>
      this.request({
        path: `/api/v1/Issues/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesDelete
     * @request DELETE:/api/v1/Issues/{id}
     */
    v1IssuesDelete: (id, params = {}) =>
      this.request({
        path: `/api/v1/Issues/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesRequestDetail
     * @request GET:/api/v1/Issues/request/{id}
     */
    v1IssuesRequestDetail: (id, params = {}) =>
      this.request({
        path: `/api/v1/Issues/request/${id}`,
        method: "GET",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesProviderDetail
     * @request GET:/api/v1/Issues/provider/{id}
     */
    v1IssuesProviderDetail: (id, params = {}) =>
      this.request({
        path: `/api/v1/Issues/provider/${id}`,
        method: "GET",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesCommentsDetail
     * @summary Get's all the issue comments by id
     * @request GET:/api/v1/Issues/{id}/comments
     */
    v1IssuesCommentsDetail: (id, params = {}) =>
      this.request({
        path: `/api/v1/Issues/${id}/comments`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesCommentsCreate
     * @summary Adds a comment on an issue
     * @request POST:/api/v1/Issues/comments
     */
    v1IssuesCommentsCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Issues/comments`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesCommentsDelete
     * @summary Deletes a comment on a issue
     * @request DELETE:/api/v1/Issues/comments/{id}
     */
    v1IssuesCommentsDelete: (id, params = {}) =>
      this.request({
        path: `/api/v1/Issues/comments/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Issues
     * @name V1IssuesStatusCreate
     * @request POST:/api/v1/Issues/status
     */
    v1IssuesStatusCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Issues/status`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Jellyfin
     * @name V1JellyfinCreate
     * @summary Signs into the Jellyfin Api
     * @request POST:/api/v1/Jellyfin
     */
    v1JellyfinCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Jellyfin`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Jellyfin
     * @name V1JellyfinInfoCreate
     * @request POST:/api/v1/Jellyfin/info
     */
    v1JellyfinInfoCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Jellyfin/info`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Jellyfin
     * @name V1JellyfinLibraryCreate
     * @request POST:/api/v1/Jellyfin/Library
     */
    v1JellyfinLibraryCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Jellyfin/Library`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Jellyfin
     * @name V1JellyfinUsersList
     * @summary Gets the jellyfin users.
     * @request GET:/api/v1/Jellyfin/users
     */
    v1JellyfinUsersList: (params = {}) =>
      this.request({
        path: `/api/v1/Jellyfin/users`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Job
     * @name V1JobUpdateCreate
     * @summary Runs the update job
     * @request POST:/api/v1/Job/update
     */
    v1JobUpdateCreate: (params = {}) =>
      this.request({
        path: `/api/v1/Job/update`,
        method: "POST",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Job
     * @name V1JobUpdateList
     * @summary Checks for an update
     * @request GET:/api/v1/Job/update
     */
    v1JobUpdateList: (params = {}) =>
      this.request({
        path: `/api/v1/Job/update`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Job
     * @name V1JobPlexuserimporterCreate
     * @summary Runs the Plex User importer
     * @request POST:/api/v1/Job/plexuserimporter
     */
    v1JobPlexuserimporterCreate: (params = {}) =>
      this.request({
        path: `/api/v1/Job/plexuserimporter`,
        method: "POST",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Job
     * @name V1JobEmbyuserimporterCreate
     * @summary Runs the Emby User importer
     * @request POST:/api/v1/Job/embyuserimporter
     */
    v1JobEmbyuserimporterCreate: (params = {}) =>
      this.request({
        path: `/api/v1/Job/embyuserimporter`,
        method: "POST",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Job
     * @name V1JobJellyfinuserimporterCreate
     * @summary Runs the Jellyfin User importer
     * @request POST:/api/v1/Job/jellyfinuserimporter
     */
    v1JobJellyfinuserimporterCreate: (params = {}) =>
      this.request({
        path: `/api/v1/Job/jellyfinuserimporter`,
        method: "POST",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Job
     * @name V1JobPlexcontentcacherCreate
     * @summary Runs the Plex Content Cacher
     * @request POST:/api/v1/Job/plexcontentcacher
     */
    v1JobPlexcontentcacherCreate: (params = {}) =>
      this.request({
        path: `/api/v1/Job/plexcontentcacher`,
        method: "POST",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Job
     * @name V1JobClearmediaserverdataCreate
     * @summary Clear out the media server and resync
     * @request POST:/api/v1/Job/clearmediaserverdata
     */
    v1JobClearmediaserverdataCreate: (params = {}) =>
      this.request({
        path: `/api/v1/Job/clearmediaserverdata`,
        method: "POST",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Job
     * @name V1JobPlexrecentlyaddedCreate
     * @summary Runs a smaller version of the content cacher
     * @request POST:/api/v1/Job/plexrecentlyadded
     */
    v1JobPlexrecentlyaddedCreate: (params = {}) =>
      this.request({
        path: `/api/v1/Job/plexrecentlyadded`,
        method: "POST",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Job
     * @name V1JobEmbycontentcacherCreate
     * @summary Runs the Emby Content Cacher
     * @request POST:/api/v1/Job/embycontentcacher
     */
    v1JobEmbycontentcacherCreate: (params = {}) =>
      this.request({
        path: `/api/v1/Job/embycontentcacher`,
        method: "POST",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Job
     * @name V1JobEmbyrecentlyaddedCreate
     * @summary Runs a smaller version of the content cacher
     * @request POST:/api/v1/Job/embyrecentlyadded
     */
    v1JobEmbyrecentlyaddedCreate: (params = {}) =>
      this.request({
        path: `/api/v1/Job/embyrecentlyadded`,
        method: "POST",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Job
     * @name V1JobJellyfincontentcacherCreate
     * @summary Runs the Jellyfin Content Cacher
     * @request POST:/api/v1/Job/jellyfincontentcacher
     */
    v1JobJellyfincontentcacherCreate: (params = {}) =>
      this.request({
        path: `/api/v1/Job/jellyfincontentcacher`,
        method: "POST",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Job
     * @name V1JobArrAvailabilityCreate
     * @summary Runs the Arr Availability Checker
     * @request POST:/api/v1/Job/arrAvailability
     */
    v1JobArrAvailabilityCreate: (params = {}) =>
      this.request({
        path: `/api/v1/Job/arrAvailability`,
        method: "POST",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Job
     * @name V1JobAutodeleterequestsCreate
     * @request POST:/api/v1/Job/autodeleterequests
     */
    v1JobAutodeleterequestsCreate: (params = {}) =>
      this.request({
        path: `/api/v1/Job/autodeleterequests`,
        method: "POST",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Job
     * @name V1JobNewsletterCreate
     * @summary Runs the newsletter
     * @request POST:/api/v1/Job/newsletter
     */
    v1JobNewsletterCreate: (params = {}) =>
      this.request({
        path: `/api/v1/Job/newsletter`,
        method: "POST",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags LandingPage
     * @name V1LandingPageList
     * @request GET:/api/v1/LandingPage
     */
    v1LandingPageList: (params = {}) =>
      this.request({
        path: `/api/v1/LandingPage`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Lidarr
     * @name V1LidarrProfilesCreate
     * @summary Gets the Lidarr profiles.
     * @request POST:/api/v1/Lidarr/Profiles
     */
    v1LidarrProfilesCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Lidarr/Profiles`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
 * No description
 *
 * @tags Lidarr
 * @name V1LidarrProfilesList
 * @summary Gets the Lidarr profiles using the saved settings
<remarks>The data is cached for an hour</remarks>
 * @request GET:/api/v1/Lidarr/Profiles
 */
    v1LidarrProfilesList: (params = {}) =>
      this.request({
        path: `/api/v1/Lidarr/Profiles`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Lidarr
     * @name V1LidarrRootFoldersCreate
     * @summary Gets the Lidarr root folders.
     * @request POST:/api/v1/Lidarr/RootFolders
     */
    v1LidarrRootFoldersCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Lidarr/RootFolders`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
 * No description
 *
 * @tags Lidarr
 * @name V1LidarrRootFoldersList
 * @summary Gets the Lidarr root folders using the saved settings.
<remarks>The data is cached for an hour</remarks>
 * @request GET:/api/v1/Lidarr/RootFolders
 */
    v1LidarrRootFoldersList: (params = {}) =>
      this.request({
        path: `/api/v1/Lidarr/RootFolders`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Lidarr
     * @name V1LidarrMetadataCreate
     * @summary Gets the Lidarr metadata profiles.
     * @request POST:/api/v1/Lidarr/Metadata
     */
    v1LidarrMetadataCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Lidarr/Metadata`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Logging
     * @name V1LoggingCreate
     * @request POST:/api/v1/Logging
     */
    v1LoggingCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Logging`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
    /**
     * No description
     *
     * @tags MusicRequest
     * @name V1RequestMusicDetail
     * @summary Gets album requests.
     * @request GET:/api/v1/request/music/{count}/{position}/{orderType}/{statusType}/{availabilityType}
     */
    v1RequestMusicDetail: (count, position, orderType, statusType, availabilityType, params = {}) =>
      this.request({
        path: `/api/v1/request/music/${count}/${position}/${orderType}/${statusType}/${availabilityType}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags MusicRequest
     * @name V1RequestMusicTotalList
     * @summary Gets the total amount of album requests.
     * @request GET:/api/v1/request/music/total
     */
    v1RequestMusicTotalList: (params = {}) =>
      this.request({
        path: `/api/v1/request/music/total`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags MusicRequest
     * @name V1RequestMusicList
     * @summary Gets all album requests.
     * @request GET:/api/v1/request/music
     */
    v1RequestMusicList: (params = {}) =>
      this.request({
        path: `/api/v1/request/music`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags MusicRequest
     * @name V1RequestMusicCreate
     * @summary Requests a album.
     * @request POST:/api/v1/request/music
     */
    v1RequestMusicCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/request/music`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags MusicRequest
     * @name V1RequestMusicSearchDetail
     * @summary Searches for a specific album request
     * @request GET:/api/v1/request/music/search/{searchTerm}
     */
    v1RequestMusicSearchDetail: (searchTerm, params = {}) =>
      this.request({
        path: `/api/v1/request/music/search/${searchTerm}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags MusicRequest
     * @name V1RequestMusicDelete
     * @summary Deletes the specified album request.
     * @request DELETE:/api/v1/request/music/{requestId}
     */
    v1RequestMusicDelete: (requestId, params = {}) =>
      this.request({
        path: `/api/v1/request/music/${requestId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags MusicRequest
     * @name V1RequestMusicApproveCreate
     * @summary Approves the specified album request.
     * @request POST:/api/v1/request/music/approve
     */
    v1RequestMusicApproveCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/request/music/approve`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags MusicRequest
     * @name V1RequestMusicAvailableCreate
     * @summary Set's the specified album as available
     * @request POST:/api/v1/request/music/available
     */
    v1RequestMusicAvailableCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/request/music/available`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags MusicRequest
     * @name V1RequestMusicUnavailableCreate
     * @summary Set's the specified album as unavailable
     * @request POST:/api/v1/request/music/unavailable
     */
    v1RequestMusicUnavailableCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/request/music/unavailable`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags MusicRequest
     * @name V1RequestMusicDenyUpdate
     * @summary Denies the specified album request.
     * @request PUT:/api/v1/request/music/deny
     */
    v1RequestMusicDenyUpdate: (data, params = {}) =>
      this.request({
        path: `/api/v1/request/music/deny`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags MusicRequest
     * @name V1RequestMusicRemainingList
     * @summary Gets model containing remaining number of music requests.
     * @request GET:/api/v1/request/music/remaining
     */
    v1RequestMusicRemainingList: (params = {}) =>
      this.request({
        path: `/api/v1/request/music/remaining`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Notifications
     * @name V1NotificationsMassemailCreate
     * @request POST:/api/v1/Notifications/massemail
     */
    v1NotificationsMassemailCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Notifications/massemail`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Plex
     * @name V1PlexCreate
     * @summary Signs into the Plex API.
     * @request POST:/api/v1/Plex
     */
    v1PlexCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Plex`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Plex
     * @name V1PlexLibrariesCreate
     * @summary Gets the plex libraries.
     * @request POST:/api/v1/Plex/Libraries
     */
    v1PlexLibrariesCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Plex/Libraries`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Plex
     * @name V1PlexLibrariesDetail
     * @request GET:/api/v1/Plex/Libraries/{machineId}
     */
    v1PlexLibrariesDetail: (machineId, params = {}) =>
      this.request({
        path: `/api/v1/Plex/Libraries/${machineId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Plex
     * @name V1PlexUserCreate
     * @request POST:/api/v1/Plex/user
     */
    v1PlexUserCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Plex/user`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
    /**
     * No description
     *
     * @tags Plex
     * @name V1PlexServersList
     * @summary Gets the plex servers.
     * @request GET:/api/v1/Plex/servers
     */
    v1PlexServersList: (params = {}) =>
      this.request({
        path: `/api/v1/Plex/servers`,
        method: "GET",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Plex
     * @name V1PlexServersCreate
     * @summary Gets the plex servers.
     * @request POST:/api/v1/Plex/servers
     */
    v1PlexServersCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Plex/servers`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Plex
     * @name V1PlexFriendsList
     * @summary Gets the plex friends.
     * @request GET:/api/v1/Plex/friends
     */
    v1PlexFriendsList: (params = {}) =>
      this.request({
        path: `/api/v1/Plex/friends`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Plex
     * @name V1PlexOauthCreate
     * @request POST:/api/v1/Plex/oauth
     */
    v1PlexOauthCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Plex/oauth`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
    /**
     * No description
     *
     * @tags Radarr
     * @name V1RadarrProfilesCreate
     * @summary Gets the Radarr profiles.
     * @request POST:/api/v1/Radarr/Profiles
     */
    v1RadarrProfilesCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Radarr/Profiles`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
    /**
 * No description
 *
 * @tags Radarr
 * @name V1RadarrProfilesList
 * @summary Gets the Radarr profiles using the saved settings
<remarks>The data is cached for an hour</remarks>
 * @request GET:/api/v1/Radarr/Profiles
 */
    v1RadarrProfilesList: (params = {}) =>
      this.request({
        path: `/api/v1/Radarr/Profiles`,
        method: "GET",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Radarr
     * @name V1RadarrEnabledList
     * @request GET:/api/v1/Radarr/enabled
     */
    v1RadarrEnabledList: (params = {}) =>
      this.request({
        path: `/api/v1/Radarr/enabled`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Radarr
     * @name V1RadarrRootFoldersCreate
     * @summary Gets the Radarr root folders.
     * @request POST:/api/v1/Radarr/RootFolders
     */
    v1RadarrRootFoldersCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Radarr/RootFolders`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
 * No description
 *
 * @tags Radarr
 * @name V1RadarrRootFoldersList
 * @summary Gets the Radarr root folders using the saved settings.
<remarks>The data is cached for an hour</remarks>
 * @request GET:/api/v1/Radarr/RootFolders
 */
    v1RadarrRootFoldersList: (params = {}) =>
      this.request({
        path: `/api/v1/Radarr/RootFolders`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Radarr
     * @name V1RadarrTagsCreate
     * @summary Gets the Radarr tags
     * @request POST:/api/v1/Radarr/tags
     */
    v1RadarrTagsCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Radarr/tags`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Radarr
     * @name V1RadarrTagsList
     * @summary Gets the Radarr tags
     * @request GET:/api/v1/Radarr/tags
     */
    v1RadarrTagsList: (params = {}) =>
      this.request({
        path: `/api/v1/Radarr/tags`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags RecentlyAdded
     * @name V1RecentlyAddedMoviesList
     * @summary Returns the recently added movies for the past 7 days
     * @request GET:/api/v1/RecentlyAdded/movies
     */
    v1RecentlyAddedMoviesList: (params = {}) =>
      this.request({
        path: `/api/v1/RecentlyAdded/movies`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags RecentlyAdded
     * @name V1RecentlyAddedTvList
     * @summary Returns the recently added tv shows for the past 7 days
     * @request GET:/api/v1/RecentlyAdded/tv
     */
    v1RecentlyAddedTvList: (params = {}) =>
      this.request({
        path: `/api/v1/RecentlyAdded/tv`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags RecentlyAdded
     * @name V1RecentlyAddedTvGroupedList
     * @summary Returns the recently added tv shows for the past 7 days and groups them by season
     * @request GET:/api/v1/RecentlyAdded/tv/grouped
     */
    v1RecentlyAddedTvGroupedList: (params = {}) =>
      this.request({
        path: `/api/v1/RecentlyAdded/tv/grouped`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieDetail
     * @summary Gets movie requests.
     * @request GET:/api/v1/Request/movie/{count}/{position}/{orderType}/{statusType}/{availabilityType}
     */
    v1RequestMovieDetail: (count, position, orderType, statusType, availabilityType, params = {}) =>
      this.request({
        path: `/api/v1/Request/movie/${count}/${position}/${orderType}/${statusType}/${availabilityType}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieInfoDetail
     * @summary Returns information about the Single Movie Request
     * @request GET:/api/v1/Request/movie/info/{requestId}
     */
    v1RequestMovieInfoDetail: (requestId, params = {}) =>
      this.request({
        path: `/api/v1/Request/movie/info/${requestId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieTotalList
     * @summary Gets the total amount of movie requests.
     * @request GET:/api/v1/Request/movie/total
     */
    v1RequestMovieTotalList: (params = {}) =>
      this.request({
        path: `/api/v1/Request/movie/total`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieList
     * @summary Gets all movie requests.
     * @request GET:/api/v1/Request/movie
     */
    v1RequestMovieList: (params = {}) =>
      this.request({
        path: `/api/v1/Request/movie`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieCreate
     * @summary Requests a movie.
     * @request POST:/api/v1/Request/movie
     */
    v1RequestMovieCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Request/movie`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieUpdate
     * @summary Updates the specified movie request.
     * @request PUT:/api/v1/Request/movie
     */
    v1RequestMovieUpdate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Request/movie`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieSearchDetail
     * @summary Searches for a specific movie request
     * @request GET:/api/v1/Request/movie/search/{searchTerm}
     */
    v1RequestMovieSearchDetail: (searchTerm, params = {}) =>
      this.request({
        path: `/api/v1/Request/movie/search/${searchTerm}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieDelete
     * @summary Deletes the specified movie request.
     * @request DELETE:/api/v1/Request/movie/{requestId}
     */
    v1RequestMovieDelete: (requestId, params = {}) =>
      this.request({
        path: `/api/v1/Request/movie/${requestId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieAllDelete
     * @summary Deletes the all movie request.
     * @request DELETE:/api/v1/Request/movie/all
     */
    v1RequestMovieAllDelete: (params = {}) =>
      this.request({
        path: `/api/v1/Request/movie/all`,
        method: "DELETE",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieApproveCreate
     * @summary Approves the specified movie request.
     * @request POST:/api/v1/Request/movie/approve
     */
    v1RequestMovieApproveCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Request/movie/approve`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieAvailableCreate
     * @summary Set's the specified Movie as available
     * @request POST:/api/v1/Request/movie/available
     */
    v1RequestMovieAvailableCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Request/movie/available`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieUnavailableCreate
     * @summary Set's the specified Movie as unavailable
     * @request POST:/api/v1/Request/movie/unavailable
     */
    v1RequestMovieUnavailableCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Request/movie/unavailable`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieDenyUpdate
     * @summary Denies the specified movie request.
     * @request PUT:/api/v1/Request/movie/deny
     */
    v1RequestMovieDenyUpdate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Request/movie/deny`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvTotalList
     * @summary Gets the total amount of TV requests.
     * @request GET:/api/v1/Request/tv/total
     */
    v1RequestTvTotalList: (params = {}) =>
      this.request({
        path: `/api/v1/Request/tv/total`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvDetail
     * @summary Gets the tv requests.
     * @request GET:/api/v1/Request/tv/{count}/{position}/{orderType}/{statusFilterType}/{availabilityFilterType}
     */
    v1RequestTvDetail: (count, position, orderType, statusFilterType, availabilityFilterType, query, params = {}) =>
      this.request({
        path: `/api/v1/Request/tv/${count}/${position}/${orderType}/${statusFilterType}/${availabilityFilterType}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvliteDetail
     * @summary Gets the tv requests lite.
     * @request GET:/api/v1/Request/tvlite/{count}/{position}/{orderType}/{statusFilterType}/{availabilityFilterType}
     */
    v1RequestTvliteDetail: (count, position, orderType, statusFilterType, availabilityFilterType, query, params = {}) =>
      this.request({
        path: `/api/v1/Request/tvlite/${count}/${position}/${orderType}/${statusFilterType}/${availabilityFilterType}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvList
     * @summary Gets the tv requests.
     * @request GET:/api/v1/Request/tv
     */
    v1RequestTvList: (params = {}) =>
      this.request({
        path: `/api/v1/Request/tv`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvCreate
     * @summary Requests a tv show/episode/season.
     * @request POST:/api/v1/Request/tv
     * @deprecated
     */
    v1RequestTvCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Request/tv`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvUpdate
     * @summary Updates the a specific tv request
     * @request PUT:/api/v1/Request/tv
     */
    v1RequestTvUpdate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Request/tv`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvliteList
     * @summary Gets the tv requests without the whole object graph (Does not include seasons/episodes).
     * @request GET:/api/v1/Request/tvlite
     */
    v1RequestTvliteList: (params = {}) =>
      this.request({
        path: `/api/v1/Request/tvlite`,
        method: "GET",
        format: "json",
        ...params,
      }),
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
    v1RequestTvDetail2: (requestId, params = {}) =>
      this.request({
        path: `/api/v1/Request/tv/${requestId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvDelete
     * @summary Deletes the a specific tv request
     * @request DELETE:/api/v1/Request/tv/{requestId}
     */
    v1RequestTvDelete: (requestId, params = {}) =>
      this.request({
        path: `/api/v1/Request/tv/${requestId}`,
        method: "DELETE",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvSearchDetail
     * @summary Searches for a specific tv request
     * @request GET:/api/v1/Request/tv/search/{searchTerm}
     */
    v1RequestTvSearchDetail: (searchTerm, params = {}) =>
      this.request({
        path: `/api/v1/Request/tv/search/${searchTerm}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvRootUpdate
     * @summary Updates the root path for this tv show
     * @request PUT:/api/v1/Request/tv/root/{requestId}/{rootFolderId}
     */
    v1RequestTvRootUpdate: (requestId, rootFolderId, params = {}) =>
      this.request({
        path: `/api/v1/Request/tv/root/${requestId}/${rootFolderId}`,
        method: "PUT",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvQualityUpdate
     * @summary Updates the quality profile for this tv show
     * @request PUT:/api/v1/Request/tv/quality/{requestId}/{qualityId}
     */
    v1RequestTvQualityUpdate: (requestId, qualityId, params = {}) =>
      this.request({
        path: `/api/v1/Request/tv/quality/${requestId}/${qualityId}`,
        method: "PUT",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvChildUpdate
     * @summary Updates the a specific child request
     * @request PUT:/api/v1/Request/tv/child
     */
    v1RequestTvChildUpdate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Request/tv/child`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvDenyUpdate
     * @summary Denies the a specific child request
     * @request PUT:/api/v1/Request/tv/deny
     */
    v1RequestTvDenyUpdate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Request/tv/deny`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvAvailableCreate
     * @summary Set's the specified tv child as available
     * @request POST:/api/v1/Request/tv/available
     */
    v1RequestTvAvailableCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Request/tv/available`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvUnavailableCreate
     * @summary Set's the specified tv child as unavailable
     * @request POST:/api/v1/Request/tv/unavailable
     */
    v1RequestTvUnavailableCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Request/tv/unavailable`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvApproveCreate
     * @summary Updates the a specific child request
     * @request POST:/api/v1/Request/tv/approve
     */
    v1RequestTvApproveCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Request/tv/approve`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvChildDelete
     * @summary Deletes the a specific tv request
     * @request DELETE:/api/v1/Request/tv/child/{requestId}
     */
    v1RequestTvChildDelete: (requestId, params = {}) =>
      this.request({
        path: `/api/v1/Request/tv/child/${requestId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvChildDetail
     * @summary Retuns all children requests for the request id
     * @request GET:/api/v1/Request/tv/{requestId}/child
     */
    v1RequestTvChildDetail: (requestId, params = {}) =>
      this.request({
        path: `/api/v1/Request/tv/${requestId}/child`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestCountList
     * @summary Gets the count of total requests
     * @request GET:/api/v1/Request/count
     */
    v1RequestCountList: (params = {}) =>
      this.request({
        path: `/api/v1/Request/count`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestUserhasrequestList
     * @summary Checks if the passed in user has a request
     * @request GET:/api/v1/Request/userhasrequest
     */
    v1RequestUserhasrequestList: (query, params = {}) =>
      this.request({
        path: `/api/v1/Request/userhasrequest`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieSubscribeCreate
     * @summary Subscribes for notifications to a movie request
     * @request POST:/api/v1/Request/movie/subscribe/{requestId}
     */
    v1RequestMovieSubscribeCreate: (requestId, params = {}) =>
      this.request({
        path: `/api/v1/Request/movie/subscribe/${requestId}`,
        method: "POST",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvSubscribeCreate
     * @summary Subscribes for notifications to a TV request
     * @request POST:/api/v1/Request/tv/subscribe/{requestId}
     */
    v1RequestTvSubscribeCreate: (requestId, params = {}) =>
      this.request({
        path: `/api/v1/Request/tv/subscribe/${requestId}`,
        method: "POST",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieUnsubscribeCreate
     * @summary UnSubscribes for notifications to a movie request
     * @request POST:/api/v1/Request/movie/unsubscribe/{requestId}
     */
    v1RequestMovieUnsubscribeCreate: (requestId, params = {}) =>
      this.request({
        path: `/api/v1/Request/movie/unsubscribe/${requestId}`,
        method: "POST",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvUnsubscribeCreate
     * @summary UnSubscribes for notifications to a TV request
     * @request POST:/api/v1/Request/tv/unsubscribe/{requestId}
     */
    v1RequestTvUnsubscribeCreate: (requestId, params = {}) =>
      this.request({
        path: `/api/v1/Request/tv/unsubscribe/${requestId}`,
        method: "POST",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestMovieRemainingList
     * @summary Gets model containing remaining number of movie requests.
     * @request GET:/api/v1/Request/movie/remaining
     */
    v1RequestMovieRemainingList: (params = {}) =>
      this.request({
        path: `/api/v1/Request/movie/remaining`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Request
     * @name V1RequestTvRemainingList
     * @summary Gets model containing remaining number of tv requests.
     * @request GET:/api/v1/Request/tv/remaining
     */
    v1RequestTvRemainingList: (params = {}) =>
      this.request({
        path: `/api/v1/Request/tv/remaining`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags RequestRetry
     * @name V1RequestRetryList
     * @summary Get's all the failed requests that are currently in the queue
     * @request GET:/api/v1/RequestRetry
     */
    v1RequestRetryList: (params = {}) =>
      this.request({
        path: `/api/v1/RequestRetry`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags RequestRetry
     * @name V1RequestRetryDelete
     * @request DELETE:/api/v1/RequestRetry/{queueId}
     */
    v1RequestRetryDelete: (queueId, params = {}) =>
      this.request({
        path: `/api/v1/RequestRetry/${queueId}`,
        method: "DELETE",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsMovieDetail
     * @summary Gets movie requests.
     * @request GET:/api/v2/Requests/movie/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsMovieDetail: (count, position, sort, sortOrder, params = {}) =>
      this.request({
        path: `/api/v2/Requests/movie/${count}/${position}/${sort}/${sortOrder}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsMovieAvailbleDetail
     * @request GET:/api/v2/Requests/movie/availble/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsMovieAvailbleDetail: (count, position, sort, sortOrder, params = {}) =>
      this.request({
        path: `/api/v2/Requests/movie/availble/${count}/${position}/${sort}/${sortOrder}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsMovieAvailableDetail
     * @request GET:/api/v2/Requests/movie/available/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsMovieAvailableDetail: (count, position, sort, sortOrder, params = {}) =>
      this.request({
        path: `/api/v2/Requests/movie/available/${count}/${position}/${sort}/${sortOrder}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsMovieProcessingDetail
     * @request GET:/api/v2/Requests/movie/processing/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsMovieProcessingDetail: (count, position, sort, sortOrder, params = {}) =>
      this.request({
        path: `/api/v2/Requests/movie/processing/${count}/${position}/${sort}/${sortOrder}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsMoviePendingDetail
     * @request GET:/api/v2/Requests/movie/pending/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsMoviePendingDetail: (count, position, sort, sortOrder, params = {}) =>
      this.request({
        path: `/api/v2/Requests/movie/pending/${count}/${position}/${sort}/${sortOrder}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsMovieDeniedDetail
     * @request GET:/api/v2/Requests/movie/denied/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsMovieDeniedDetail: (count, position, sort, sortOrder, params = {}) =>
      this.request({
        path: `/api/v2/Requests/movie/denied/${count}/${position}/${sort}/${sortOrder}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsMovieUnavailableDetail
     * @summary Gets the unavailable movie requests.
     * @request GET:/api/v2/Requests/movie/unavailable/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsMovieUnavailableDetail: (count, position, sort, sortOrder, params = {}) =>
      this.request({
        path: `/api/v2/Requests/movie/unavailable/${count}/${position}/${sort}/${sortOrder}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsTvDetail
     * @summary Gets Tv requests.
     * @request GET:/api/v2/Requests/tv/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsTvDetail: (count, position, sort, sortOrder, params = {}) =>
      this.request({
        path: `/api/v2/Requests/tv/${count}/${position}/${sort}/${sortOrder}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsTvPendingDetail
     * @request GET:/api/v2/Requests/tv/pending/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsTvPendingDetail: (count, position, sort, sortOrder, params = {}) =>
      this.request({
        path: `/api/v2/Requests/tv/pending/${count}/${position}/${sort}/${sortOrder}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsTvProcessingDetail
     * @request GET:/api/v2/Requests/tv/processing/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsTvProcessingDetail: (count, position, sort, sortOrder, params = {}) =>
      this.request({
        path: `/api/v2/Requests/tv/processing/${count}/${position}/${sort}/${sortOrder}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsTvAvailableDetail
     * @request GET:/api/v2/Requests/tv/available/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsTvAvailableDetail: (count, position, sort, sortOrder, params = {}) =>
      this.request({
        path: `/api/v2/Requests/tv/available/${count}/${position}/${sort}/${sortOrder}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsTvDeniedDetail
     * @request GET:/api/v2/Requests/tv/denied/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsTvDeniedDetail: (count, position, sort, sortOrder, params = {}) =>
      this.request({
        path: `/api/v2/Requests/tv/denied/${count}/${position}/${sort}/${sortOrder}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsTvUnavailableDetail
     * @summary Gets unavailable Tv requests.
     * @request GET:/api/v2/Requests/tv/unavailable/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsTvUnavailableDetail: (count, position, sort, sortOrder, params = {}) =>
      this.request({
        path: `/api/v2/Requests/tv/unavailable/${count}/${position}/${sort}/${sortOrder}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsMovieAdvancedoptionsCreate
     * @request POST:/api/v2/Requests/movie/advancedoptions
     */
    v2RequestsMovieAdvancedoptionsCreate: (data, params = {}) =>
      this.request({
        path: `/api/v2/Requests/movie/advancedoptions`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsTvAdvancedoptionsCreate
     * @request POST:/api/v2/Requests/tv/advancedoptions
     */
    v2RequestsTvAdvancedoptionsCreate: (data, params = {}) =>
      this.request({
        path: `/api/v2/Requests/tv/advancedoptions`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsAlbumAvailableDetail
     * @request GET:/api/v2/Requests/album/available/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsAlbumAvailableDetail: (count, position, sort, sortOrder, params = {}) =>
      this.request({
        path: `/api/v2/Requests/album/available/${count}/${position}/${sort}/${sortOrder}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsAlbumProcessingDetail
     * @request GET:/api/v2/Requests/album/processing/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsAlbumProcessingDetail: (count, position, sort, sortOrder, params = {}) =>
      this.request({
        path: `/api/v2/Requests/album/processing/${count}/${position}/${sort}/${sortOrder}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsAlbumPendingDetail
     * @request GET:/api/v2/Requests/album/pending/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsAlbumPendingDetail: (count, position, sort, sortOrder, params = {}) =>
      this.request({
        path: `/api/v2/Requests/album/pending/${count}/${position}/${sort}/${sortOrder}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsAlbumDeniedDetail
     * @request GET:/api/v2/Requests/album/denied/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsAlbumDeniedDetail: (count, position, sort, sortOrder, params = {}) =>
      this.request({
        path: `/api/v2/Requests/album/denied/${count}/${position}/${sort}/${sortOrder}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsAlbumDetail
     * @request GET:/api/v2/Requests/album/{count}/{position}/{sort}/{sortOrder}
     */
    v2RequestsAlbumDetail: (count, position, sort, sortOrder, params = {}) =>
      this.request({
        path: `/api/v2/Requests/album/${count}/${position}/${sort}/${sortOrder}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsTvCreate
     * @summary Requests a tv show/episode/season.
     * @request POST:/api/v2/Requests/tv
     */
    v2RequestsTvCreate: (data, params = {}) =>
      this.request({
        path: `/api/v2/Requests/tv`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsReprocessCreate
     * @request POST:/api/v2/Requests/reprocess/{type}/{requestId}
     */
    v2RequestsReprocessCreate: (type, requestId, params = {}) =>
      this.request({
        path: `/api/v2/Requests/reprocess/${type}/${requestId}`,
        method: "POST",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Requests
     * @name V2RequestsMovieCollectionCreate
     * @request POST:/api/v2/Requests/movie/collection/{collectionId}
     */
    v2RequestsMovieCollectionCreate: (collectionId, params = {}) =>
      this.request({
        path: `/api/v2/Requests/movie/collection/${collectionId}`,
        method: "POST",
        format: "json",
        ...params,
      }),
    /**
     * @description The ID's returned by this are all TheMovieDbID's even for the TV Shows. You can call M:Ombi.Controllers.V2.SearchController.GetTvInfoByMovieId(System.String) to get TV Show information using the MovieDbId.
     *
     * @tags Search
     * @name V2SearchMultiCreate
     * @summary Returns search results for both TV and Movies
     * @request POST:/api/v2/Search/multi/{searchTerm}
     */
    v2SearchMultiCreate: (searchTerm, data, params = {}) =>
      this.request({
        path: `/api/v2/Search/multi/${searchTerm}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchMovieDetail
     * @summary Returns details for a single movie
     * @request GET:/api/v2/Search/movie/{movieDbId}
     */
    v2SearchMovieDetail: (movieDbId, params = {}) =>
      this.request({
        path: `/api/v2/Search/movie/${movieDbId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchMovieImdbDetail
     * @request GET:/api/v2/Search/movie/imdb/{imdbid}
     */
    v2SearchMovieImdbDetail: (imdbId, imdbid, params = {}) =>
      this.request({
        path: `/api/v2/Search/movie/imdb/${imdbid}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchMovieRequestDetail
     * @summary Returns details for a single movie
     * @request GET:/api/v2/Search/movie/request/{requestId}
     */
    v2SearchMovieRequestDetail: (requestId, params = {}) =>
      this.request({
        path: `/api/v2/Search/movie/request/${requestId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchMovieCollectionDetail
     * @summary Returns basic information about the provided collection
     * @request GET:/api/v2/Search/movie/collection/{collectionId}
     */
    v2SearchMovieCollectionDetail: (collectionId, params = {}) =>
      this.request({
        path: `/api/v2/Search/movie/collection/${collectionId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description TVMaze is the TV Show Provider
     *
     * @tags Search
     * @name V2SearchTvDetail
     * @summary Returns details for a single show
     * @request GET:/api/v2/Search/tv/{tvdbId}
     */
    v2SearchTvDetail: (tvdbid, tvdbId, params = {}) =>
      this.request({
        path: `/api/v2/Search/tv/${tvdbId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description TVMaze is the TV Show Provider
     *
     * @tags Search
     * @name V2SearchTvRequestDetail
     * @summary Returns details for a single show
     * @request GET:/api/v2/Search/tv/request/{requestId}
     */
    v2SearchTvRequestDetail: (requestId, params = {}) =>
      this.request({
        path: `/api/v2/Search/tv/request/${requestId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchTvMoviedbDetail
     * @summary Returns details for a single show
     * @request GET:/api/v2/Search/tv/moviedb/{moviedbid}
     */
    v2SearchTvMoviedbDetail: (moviedbid, params = {}) =>
      this.request({
        path: `/api/v2/Search/tv/moviedb/${moviedbid}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V2SearchMovieSimilarCreate
     * @summary Returns similar movies to the movie id passed in
     * @request POST:/api/v2/Search/movie/similar
     */
    v2SearchMovieSimilarCreate: (data, params = {}) =>
      this.request({
        path: `/api/v2/Search/movie/similar`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V2SearchMoviePopularList
     * @summary Returns Popular Movies
     * @request GET:/api/v2/Search/movie/popular
     */
    v2SearchMoviePopularList: (params = {}) =>
      this.request({
        path: `/api/v2/Search/movie/popular`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V2SearchMoviePopularDetail
     * @summary Returns Popular Movies using paging
     * @request GET:/api/v2/Search/movie/popular/{currentPosition}/{amountToLoad}
     */
    v2SearchMoviePopularDetail: (currentPosition, amountToLoad, params = {}) =>
      this.request({
        path: `/api/v2/Search/movie/popular/${currentPosition}/${amountToLoad}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V2SearchAdvancedSearchMovieCreate
     * @summary Returns Advanced Searched Media using paging
     * @request POST:/api/v2/Search/advancedSearch/movie/{currentPosition}/{amountToLoad}
     */
    v2SearchAdvancedSearchMovieCreate: (currentPosition, amountToLoad, data, params = {}) =>
      this.request({
        path: `/api/v2/Search/advancedSearch/movie/${currentPosition}/${amountToLoad}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V2SearchMovieSeasonalDetail
     * @summary Returns Seasonal Movies
     * @request GET:/api/v2/Search/movie/seasonal/{currentPosition}/{amountToLoad}
     */
    v2SearchMovieSeasonalDetail: (currentPosition, amountToLoad, params = {}) =>
      this.request({
        path: `/api/v2/Search/movie/seasonal/${currentPosition}/${amountToLoad}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V2SearchMovieRequestedDetail
     * @summary Returns Recently Requested Movies using Paging
     * @request GET:/api/v2/Search/movie/requested/{currentPosition}/{amountToLoad}
     */
    v2SearchMovieRequestedDetail: (currentPosition, amountToLoad, params = {}) =>
      this.request({
        path: `/api/v2/Search/movie/requested/${currentPosition}/${amountToLoad}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V2SearchTvRequestedDetail
     * @summary Returns Recently Requested Tv using Paging
     * @request GET:/api/v2/Search/tv/requested/{currentPosition}/{amountToLoad}
     */
    v2SearchTvRequestedDetail: (currentPosition, amountToLoad, params = {}) =>
      this.request({
        path: `/api/v2/Search/tv/requested/${currentPosition}/${amountToLoad}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V2SearchMovieNowplayingList
     * @summary Returns Now Playing Movies
     * @request GET:/api/v2/Search/movie/nowplaying
     */
    v2SearchMovieNowplayingList: (params = {}) =>
      this.request({
        path: `/api/v2/Search/movie/nowplaying`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V2SearchMovieNowplayingDetail
     * @summary Returns Now Playing Movies by page
     * @request GET:/api/v2/Search/movie/nowplaying/{currentPosition}/{amountToLoad}
     */
    v2SearchMovieNowplayingDetail: (currentPosition, amountToLoad, params = {}) =>
      this.request({
        path: `/api/v2/Search/movie/nowplaying/${currentPosition}/${amountToLoad}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V2SearchMovieTopratedList
     * @summary Returns top rated movies.
     * @request GET:/api/v2/Search/movie/toprated
     */
    v2SearchMovieTopratedList: (params = {}) =>
      this.request({
        path: `/api/v2/Search/movie/toprated`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V2SearchMovieTopratedDetail
     * @summary Returns top rated movies by page.
     * @request GET:/api/v2/Search/movie/toprated/{currentPosition}/{amountToLoad}
     */
    v2SearchMovieTopratedDetail: (currentPosition, amountToLoad, params = {}) =>
      this.request({
        path: `/api/v2/Search/movie/toprated/${currentPosition}/${amountToLoad}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V2SearchMovieUpcomingList
     * @summary Returns Upcoming movies.
     * @request GET:/api/v2/Search/movie/upcoming
     */
    v2SearchMovieUpcomingList: (params = {}) =>
      this.request({
        path: `/api/v2/Search/movie/upcoming`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V2SearchMovieUpcomingDetail
     * @summary Returns Upcoming movies by page.
     * @request GET:/api/v2/Search/movie/upcoming/{currentPosition}/{amountToLoad}
     */
    v2SearchMovieUpcomingDetail: (currentPosition, amountToLoad, params = {}) =>
      this.request({
        path: `/api/v2/Search/movie/upcoming/${currentPosition}/${amountToLoad}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use Trakt.tv as the Provider
     *
     * @tags Search
     * @name V2SearchTvPopularDetail
     * @summary Returns Popular Tv Shows
     * @request GET:/api/v2/Search/tv/popular/{currentPosition}/{amountToLoad}
     */
    v2SearchTvPopularDetail: (currentPosition, amountToLoad, params = {}) =>
      this.request({
        path: `/api/v2/Search/tv/popular/${currentPosition}/${amountToLoad}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use Trakt.tv as the Provider
     *
     * @tags Search
     * @name V2SearchTvAnticipatedDetail
     * @summary Returns most Anticipated tv shows by page.
     * @request GET:/api/v2/Search/tv/anticipated/{currentPosition}/{amountToLoad}
     */
    v2SearchTvAnticipatedDetail: (currentPosition, amountToLoad, params = {}) =>
      this.request({
        path: `/api/v2/Search/tv/anticipated/${currentPosition}/${amountToLoad}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use Trakt.tv as the Provider
     *
     * @tags Search
     * @name V2SearchTvMostwatchedDetail
     * @summary Returns Most watched shows by page.
     * @request GET:/api/v2/Search/tv/mostwatched/{currentPosition}/{amountToLoad}
     * @deprecated
     */
    v2SearchTvMostwatchedDetail: (currentPosition, amountToLoad, params = {}) =>
      this.request({
        path: `/api/v2/Search/tv/mostwatched/${currentPosition}/${amountToLoad}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use Trakt.tv as the Provider
     *
     * @tags Search
     * @name V2SearchTvTrendingDetail
     * @summary Returns trending shows by page
     * @request GET:/api/v2/Search/tv/trending/{currentPosition}/{amountToLoad}
     */
    v2SearchTvTrendingDetail: (currentPosition, amountToLoad, params = {}) =>
      this.request({
        path: `/api/v2/Search/tv/trending/${currentPosition}/${amountToLoad}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchActorMovieDetail
     * @summary Returns all the movies that is by the actor id
     * @request GET:/api/v2/Search/actor/{actorId}/movie
     */
    v2SearchActorMovieDetail: (actorId, params = {}) =>
      this.request({
        path: `/api/v2/Search/actor/${actorId}/movie`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchActorTvDetail
     * @summary Returns all the tv shows that is by the actor id
     * @request GET:/api/v2/Search/actor/{actorId}/tv
     */
    v2SearchActorTvDetail: (actorId, params = {}) =>
      this.request({
        path: `/api/v2/Search/actor/${actorId}/tv`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchArtistDetail
     * @request GET:/api/v2/Search/artist/{artistId}
     */
    v2SearchArtistDetail: (artistId, params = {}) =>
      this.request({
        path: `/api/v2/Search/artist/${artistId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchArtistRequestDetail
     * @request GET:/api/v2/Search/artist/request/{requestId}
     */
    v2SearchArtistRequestDetail: (requestId, params = {}) =>
      this.request({
        path: `/api/v2/Search/artist/request/${requestId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchArtistAlbumDetail
     * @request GET:/api/v2/Search/artist/album/{albumId}
     */
    v2SearchArtistAlbumDetail: (albumId, params = {}) =>
      this.request({
        path: `/api/v2/Search/artist/album/${albumId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchReleasegroupartDetail
     * @request GET:/api/v2/Search/releasegroupart/{musicBrainzId}
     */
    v2SearchReleasegroupartDetail: (musicBrainzId, params = {}) =>
      this.request({
        path: `/api/v2/Search/releasegroupart/${musicBrainzId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchRatingsMovieDetail
     * @request GET:/api/v2/Search/ratings/movie/{name}/{year}
     */
    v2SearchRatingsMovieDetail: (name, year, params = {}) =>
      this.request({
        path: `/api/v2/Search/ratings/movie/${name}/${year}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchRatingsTvDetail
     * @request GET:/api/v2/Search/ratings/tv/{name}/{year}
     */
    v2SearchRatingsTvDetail: (name, year, params = {}) =>
      this.request({
        path: `/api/v2/Search/ratings/tv/${name}/${year}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchStreamMovieDetail
     * @request GET:/api/v2/Search/stream/movie/{movieDbId}
     */
    v2SearchStreamMovieDetail: (movieDbId, params = {}) =>
      this.request({
        path: `/api/v2/Search/stream/movie/${movieDbId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Search
     * @name V2SearchStreamTvDetail
     * @request GET:/api/v2/Search/stream/tv/{movieDbId}
     */
    v2SearchStreamTvDetail: (movieDbId, params = {}) =>
      this.request({
        path: `/api/v2/Search/stream/tv/${movieDbId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V1SearchMovieDetail
     * @summary Searches for a movie.
     * @request GET:/api/v1/Search/movie/{searchTerm}
     */
    v1SearchMovieDetail: (searchTerm, params = {}) =>
      this.request({
        path: `/api/v1/Search/movie/${searchTerm}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Search
     * @name V1SearchMovieActorCreate
     * @summary Searches for movies by a certain actor.
     * @request POST:/api/v1/Search/movie/actor
     */
    v1SearchMovieActorCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Search/movie/actor`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V1SearchMovieCreate
     * @summary Searches for a movie.
     * @request POST:/api/v1/Search/movie
     */
    v1SearchMovieCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Search/movie`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V1SearchMovieInfoDetail
     * @summary Gets extra information on the movie e.g. IMDBId
     * @request GET:/api/v1/Search/movie/info/{theMovieDbId}
     */
    v1SearchMovieInfoDetail: (theMovieDbId, params = {}) =>
      this.request({
        path: `/api/v1/Search/movie/info/${theMovieDbId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V1SearchMovieInfoCreate
     * @summary Gets extra information on the movie e.g. IMDBId
     * @request POST:/api/v1/Search/movie/info
     */
    v1SearchMovieInfoCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Search/movie/info`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V1SearchMovieSimilarCreate
     * @summary Returns similar movies to the movie id passed in
     * @request POST:/api/v1/Search/movie/similar
     */
    v1SearchMovieSimilarCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Search/movie/similar`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V1SearchMovieSimilarDetail
     * @summary Returns similar movies to the movie id passed in
     * @request GET:/api/v1/Search/movie/{theMovieDbId}/similar
     */
    v1SearchMovieSimilarDetail: (theMovieDbId, params = {}) =>
      this.request({
        path: `/api/v1/Search/movie/${theMovieDbId}/similar`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V1SearchMoviePopularList
     * @summary Returns Popular Movies
     * @request GET:/api/v1/Search/movie/popular
     */
    v1SearchMoviePopularList: (params = {}) =>
      this.request({
        path: `/api/v1/Search/movie/popular`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V1SearchMovieNowplayingList
     * @summary Retuns Now Playing Movies
     * @request GET:/api/v1/Search/movie/nowplaying
     */
    v1SearchMovieNowplayingList: (params = {}) =>
      this.request({
        path: `/api/v1/Search/movie/nowplaying`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V1SearchMovieTopratedList
     * @summary Returns top rated movies.
     * @request GET:/api/v1/Search/movie/toprated
     */
    v1SearchMovieTopratedList: (params = {}) =>
      this.request({
        path: `/api/v1/Search/movie/toprated`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use TheMovieDb as the Movie Provider
     *
     * @tags Search
     * @name V1SearchMovieUpcomingList
     * @summary Returns Upcoming movies.
     * @request GET:/api/v1/Search/movie/upcoming
     */
    v1SearchMovieUpcomingList: (params = {}) =>
      this.request({
        path: `/api/v1/Search/movie/upcoming`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use TvMaze as the Provider
     *
     * @tags Search
     * @name V1SearchTvDetail
     * @summary Searches for a Tv Show.
     * @request GET:/api/v1/Search/tv/{searchTerm}
     */
    v1SearchTvDetail: (searchTerm, params = {}) =>
      this.request({
        path: `/api/v1/Search/tv/${searchTerm}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use TvMaze as the Provider
     *
     * @tags Search
     * @name V1SearchTvInfoDetail
     * @summary Gets extra show information.
     * @request GET:/api/v1/Search/tv/info/{tvdbId}
     */
    v1SearchTvInfoDetail: (tvdbId, params = {}) =>
      this.request({
        path: `/api/v1/Search/tv/info/${tvdbId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use Trakt.tv as the Provider
     *
     * @tags Search
     * @name V1SearchTvPopularList
     * @summary Returns Popular Tv Shows
     * @request GET:/api/v1/Search/tv/popular
     */
    v1SearchTvPopularList: (params = {}) =>
      this.request({
        path: `/api/v1/Search/tv/popular`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use Trakt.tv as the Provider
     *
     * @tags Search
     * @name V1SearchTvAnticipatedList
     * @summary Returns most Anticiplateds tv shows.
     * @request GET:/api/v1/Search/tv/anticipated
     */
    v1SearchTvAnticipatedList: (params = {}) =>
      this.request({
        path: `/api/v1/Search/tv/anticipated`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use Trakt.tv as the Provider
     *
     * @tags Search
     * @name V1SearchTvMostwatchedList
     * @summary Returns Most watched shows.
     * @request GET:/api/v1/Search/tv/mostwatched
     * @deprecated
     */
    v1SearchTvMostwatchedList: (params = {}) =>
      this.request({
        path: `/api/v1/Search/tv/mostwatched`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use Trakt.tv as the Provider
     *
     * @tags Search
     * @name V1SearchTvTrendingList
     * @summary Returns trending shows
     * @request GET:/api/v1/Search/tv/trending
     */
    v1SearchTvTrendingList: (params = {}) =>
      this.request({
        path: `/api/v1/Search/tv/trending`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use Lidarr as the Provider
     *
     * @tags Search
     * @name V1SearchMusicArtistDetail
     * @summary Returns the artist information we searched for
     * @request GET:/api/v1/Search/music/artist/{searchTerm}
     */
    v1SearchMusicArtistDetail: (searchTerm, params = {}) =>
      this.request({
        path: `/api/v1/Search/music/artist/${searchTerm}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use Lidarr as the Provider
     *
     * @tags Search
     * @name V1SearchMusicAlbumDetail
     * @summary Returns the album information we searched for
     * @request GET:/api/v1/Search/music/album/{searchTerm}
     */
    v1SearchMusicAlbumDetail: (searchTerm, params = {}) =>
      this.request({
        path: `/api/v1/Search/music/album/${searchTerm}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use Lidarr as the Provider
     *
     * @tags Search
     * @name V1SearchMusicAlbumInfoDetail
     * @summary Returns the album information specified by the foreignAlbumId passed in
     * @request GET:/api/v1/Search/music/album/info/{foreignAlbumId}
     */
    v1SearchMusicAlbumInfoDetail: (foreignAlbumId, params = {}) =>
      this.request({
        path: `/api/v1/Search/music/album/info/${foreignAlbumId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * @description We use Lidarr as the Provider
     *
     * @tags Search
     * @name V1SearchMusicArtistAlbumDetail
     * @summary Returns all albums for the artist using the ForeignArtistId
     * @request GET:/api/v1/Search/music/artist/album/{foreignArtistId}
     */
    v1SearchMusicArtistAlbumDetail: (foreignArtistId, params = {}) =>
      this.request({
        path: `/api/v1/Search/music/artist/album/${foreignArtistId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsOmbiList
     * @summary Gets the Ombi settings.
     * @request GET:/api/v1/Settings/ombi
     */
    v1SettingsOmbiList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/ombi`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsOmbiCreate
     * @summary Save the Ombi settings.
     * @request POST:/api/v1/Settings/ombi
     */
    v1SettingsOmbiCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/ombi`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsBaseurlList
     * @summary Gets the base url.
     * @request GET:/api/v1/Settings/baseurl
     */
    v1SettingsBaseurlList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/baseurl`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsAboutList
     * @request GET:/api/v1/Settings/about
     */
    v1SettingsAboutList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/about`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsOmbiResetApiCreate
     * @request POST:/api/v1/Settings/ombi/resetApi
     */
    v1SettingsOmbiResetApiCreate: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/ombi/resetApi`,
        method: "POST",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsPlexList
     * @summary Gets the Plex Settings.
     * @request GET:/api/v1/Settings/plex
     */
    v1SettingsPlexList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/plex`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsPlexCreate
     * @summary Save the Plex settings.
     * @request POST:/api/v1/Settings/plex
     */
    v1SettingsPlexCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/plex`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsClientidList
     * @request GET:/api/v1/Settings/clientid
     */
    v1SettingsClientidList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/clientid`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsEmbyList
     * @summary Gets the Emby Settings.
     * @request GET:/api/v1/Settings/emby
     */
    v1SettingsEmbyList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/emby`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsEmbyCreate
     * @summary Save the Emby settings.
     * @request POST:/api/v1/Settings/emby
     */
    v1SettingsEmbyCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/emby`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsJellyfinList
     * @summary Gets the Jellyfin Settings.
     * @request GET:/api/v1/Settings/jellyfin
     */
    v1SettingsJellyfinList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/jellyfin`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsJellyfinCreate
     * @summary Save the Jellyfin settings.
     * @request POST:/api/v1/Settings/jellyfin
     */
    v1SettingsJellyfinCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/jellyfin`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsLandingpageList
     * @summary Gets the Landing Page Settings.
     * @request GET:/api/v1/Settings/landingpage
     */
    v1SettingsLandingpageList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/landingpage`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsLandingpageCreate
     * @summary Save the Landing Page settings.
     * @request POST:/api/v1/Settings/landingpage
     */
    v1SettingsLandingpageCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/landingpage`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsCustomizationList
     * @summary Gets the Customization Settings.
     * @request GET:/api/v1/Settings/customization
     */
    v1SettingsCustomizationList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/customization`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsCustomizationCreate
     * @summary Save the Customization settings.
     * @request POST:/api/v1/Settings/customization
     */
    v1SettingsCustomizationCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/customization`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsDefaultlanguageList
     * @summary Gets the default language set in Ombi
     * @request GET:/api/v1/Settings/defaultlanguage
     */
    v1SettingsDefaultlanguageList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/defaultlanguage`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsThemesList
     * @summary Get's the preset themes available
     * @request GET:/api/v1/Settings/themes
     */
    v1SettingsThemesList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/themes`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsSonarrList
     * @summary Gets the Sonarr Settings.
     * @request GET:/api/v1/Settings/sonarr
     */
    v1SettingsSonarrList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/sonarr`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsSonarrCreate
     * @summary Save the Sonarr settings.
     * @request POST:/api/v1/Settings/sonarr
     */
    v1SettingsSonarrCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/sonarr`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsRadarrList
     * @summary Gets the Radarr Settings.
     * @request GET:/api/v1/Settings/radarr
     */
    v1SettingsRadarrList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/radarr`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsRadarrCreate
     * @summary Save the Radarr settings.
     * @request POST:/api/v1/Settings/radarr
     */
    v1SettingsRadarrCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/radarr`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsLidarrList
     * @summary Gets the Lidarr Settings.
     * @request GET:/api/v1/Settings/lidarr
     */
    v1SettingsLidarrList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/lidarr`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsLidarrCreate
     * @summary Save the Lidarr settings.
     * @request POST:/api/v1/Settings/lidarr
     */
    v1SettingsLidarrCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/lidarr`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsLidarrenabledList
     * @summary Gets the Lidarr Settings.
     * @request GET:/api/v1/Settings/lidarrenabled
     */
    v1SettingsLidarrenabledList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/lidarrenabled`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsAuthenticationCreate
     * @summary Save the Authentication settings.
     * @request POST:/api/v1/Settings/authentication
     */
    v1SettingsAuthenticationCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/authentication`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsAuthenticationList
     * @summary Gets the Authentication Settings.
     * @request GET:/api/v1/Settings/authentication
     */
    v1SettingsAuthenticationList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/authentication`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsUpdateCreate
     * @summary Save the Update settings.
     * @request POST:/api/v1/Settings/Update
     */
    v1SettingsUpdateCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/Update`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsUpdateList
     * @summary Gets the Update Settings.
     * @request GET:/api/v1/Settings/Update
     */
    v1SettingsUpdateList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/Update`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsUserManagementList
     * @summary Gets the UserManagement Settings.
     * @request GET:/api/v1/Settings/UserManagement
     */
    v1SettingsUserManagementList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/UserManagement`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsUserManagementCreate
     * @summary Save the UserManagement settings.
     * @request POST:/api/v1/Settings/UserManagement
     */
    v1SettingsUserManagementCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/UserManagement`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsCouchPotatoList
     * @summary Gets the CouchPotatoSettings Settings.
     * @request GET:/api/v1/Settings/CouchPotato
     */
    v1SettingsCouchPotatoList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/CouchPotato`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsCouchPotatoCreate
     * @summary Save the CouchPotatoSettings settings.
     * @request POST:/api/v1/Settings/CouchPotato
     */
    v1SettingsCouchPotatoCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/CouchPotato`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsDogNzbList
     * @summary Gets the DogNzbSettings Settings.
     * @request GET:/api/v1/Settings/DogNzb
     */
    v1SettingsDogNzbList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/DogNzb`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsDogNzbCreate
     * @summary Save the DogNzbSettings settings.
     * @request POST:/api/v1/Settings/DogNzb
     */
    v1SettingsDogNzbCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/DogNzb`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsSickRageCreate
     * @summary Save the SickRage settings.
     * @request POST:/api/v1/Settings/SickRage
     */
    v1SettingsSickRageCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/SickRage`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsSickRageList
     * @summary Gets the SickRage Settings.
     * @request GET:/api/v1/Settings/SickRage
     */
    v1SettingsSickRageList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/SickRage`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsJobsList
     * @summary Gets the JobSettings Settings.
     * @request GET:/api/v1/Settings/jobs
     */
    v1SettingsJobsList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/jobs`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsJobsCreate
     * @summary Save the JobSettings settings.
     * @request POST:/api/v1/Settings/jobs
     */
    v1SettingsJobsCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/jobs`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsTestcronCreate
     * @request POST:/api/v1/Settings/testcron
     */
    v1SettingsTestcronCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/testcron`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsIssuesCreate
     * @summary Save the Vote settings.
     * @request POST:/api/v1/Settings/Issues
     */
    v1SettingsIssuesCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/Issues`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsIssuesList
     * @summary Gets the Issues Settings.
     * @request GET:/api/v1/Settings/Issues
     */
    v1SettingsIssuesList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/Issues`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsIssuesenabledList
     * @request GET:/api/v1/Settings/issuesenabled
     */
    v1SettingsIssuesenabledList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/issuesenabled`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsVoteCreate
     * @summary Save the Vote settings.
     * @request POST:/api/v1/Settings/vote
     */
    v1SettingsVoteCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/vote`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsVoteList
     * @summary Gets the Vote Settings.
     * @request GET:/api/v1/Settings/vote
     */
    v1SettingsVoteList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/vote`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsVoteenabledList
     * @request GET:/api/v1/Settings/voteenabled
     */
    v1SettingsVoteenabledList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/voteenabled`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsThemoviedbCreate
     * @summary Save The Movie DB settings.
     * @request POST:/api/v1/Settings/themoviedb
     */
    v1SettingsThemoviedbCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/themoviedb`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsThemoviedbList
     * @summary Get The Movie DB settings.
     * @request GET:/api/v1/Settings/themoviedb
     */
    v1SettingsThemoviedbList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/themoviedb`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsEmailCreate
     * @summary Saves the email notification settings.
     * @request POST:/api/v1/Settings/notifications/email
     */
    v1SettingsNotificationsEmailCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/notifications/email`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsEmailList
     * @summary Gets the Email Notification Settings.
     * @request GET:/api/v1/Settings/notifications/email
     */
    v1SettingsNotificationsEmailList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/notifications/email`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsEmailEnabledList
     * @summary Gets the Email Notification Settings.
     * @request GET:/api/v1/Settings/notifications/email/enabled
     */
    v1SettingsNotificationsEmailEnabledList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/notifications/email/enabled`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsDiscordCreate
     * @summary Saves the discord notification settings.
     * @request POST:/api/v1/Settings/notifications/discord
     */
    v1SettingsNotificationsDiscordCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/notifications/discord`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsDiscordList
     * @summary Gets the discord Notification Settings.
     * @request GET:/api/v1/Settings/notifications/discord
     */
    v1SettingsNotificationsDiscordList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/notifications/discord`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsTelegramCreate
     * @summary Saves the telegram notification settings.
     * @request POST:/api/v1/Settings/notifications/telegram
     */
    v1SettingsNotificationsTelegramCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/notifications/telegram`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsTelegramList
     * @summary Gets the telegram Notification Settings.
     * @request GET:/api/v1/Settings/notifications/telegram
     */
    v1SettingsNotificationsTelegramList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/notifications/telegram`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsPushbulletCreate
     * @summary Saves the pushbullet notification settings.
     * @request POST:/api/v1/Settings/notifications/pushbullet
     */
    v1SettingsNotificationsPushbulletCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/notifications/pushbullet`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsPushbulletList
     * @summary Gets the pushbullet Notification Settings.
     * @request GET:/api/v1/Settings/notifications/pushbullet
     */
    v1SettingsNotificationsPushbulletList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/notifications/pushbullet`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsPushoverCreate
     * @summary Saves the pushover notification settings.
     * @request POST:/api/v1/Settings/notifications/pushover
     */
    v1SettingsNotificationsPushoverCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/notifications/pushover`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsPushoverList
     * @summary Gets the pushover Notification Settings.
     * @request GET:/api/v1/Settings/notifications/pushover
     */
    v1SettingsNotificationsPushoverList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/notifications/pushover`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsSlackCreate
     * @summary Saves the slack notification settings.
     * @request POST:/api/v1/Settings/notifications/slack
     */
    v1SettingsNotificationsSlackCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/notifications/slack`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsSlackList
     * @summary Gets the slack Notification Settings.
     * @request GET:/api/v1/Settings/notifications/slack
     */
    v1SettingsNotificationsSlackList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/notifications/slack`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsMattermostCreate
     * @summary Saves the Mattermost notification settings.
     * @request POST:/api/v1/Settings/notifications/mattermost
     */
    v1SettingsNotificationsMattermostCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/notifications/mattermost`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsMattermostList
     * @summary Gets the Mattermost Notification Settings.
     * @request GET:/api/v1/Settings/notifications/mattermost
     */
    v1SettingsNotificationsMattermostList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/notifications/mattermost`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsTwilioList
     * @summary Gets the Twilio Notification Settings.
     * @request GET:/api/v1/Settings/notifications/twilio
     */
    v1SettingsNotificationsTwilioList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/notifications/twilio`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsTwilioCreate
     * @summary Saves the Mattermost notification settings.
     * @request POST:/api/v1/Settings/notifications/twilio
     */
    v1SettingsNotificationsTwilioCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/notifications/twilio`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsMobileCreate
     * @summary Saves the Mobile notification settings.
     * @request POST:/api/v1/Settings/notifications/mobile
     */
    v1SettingsNotificationsMobileCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/notifications/mobile`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsMobileList
     * @summary Gets the Mobile Notification Settings.
     * @request GET:/api/v1/Settings/notifications/mobile
     */
    v1SettingsNotificationsMobileList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/notifications/mobile`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsGotifyCreate
     * @summary Saves the gotify notification settings.
     * @request POST:/api/v1/Settings/notifications/gotify
     */
    v1SettingsNotificationsGotifyCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/notifications/gotify`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsGotifyList
     * @summary Gets the gotify Notification Settings.
     * @request GET:/api/v1/Settings/notifications/gotify
     */
    v1SettingsNotificationsGotifyList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/notifications/gotify`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsWebhookCreate
     * @summary Saves the webhook notification settings.
     * @request POST:/api/v1/Settings/notifications/webhook
     */
    v1SettingsNotificationsWebhookCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/notifications/webhook`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsWebhookList
     * @summary Gets the webhook notification settings.
     * @request GET:/api/v1/Settings/notifications/webhook
     */
    v1SettingsNotificationsWebhookList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/notifications/webhook`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsNewsletterCreate
     * @summary Saves the Newsletter notification settings.
     * @request POST:/api/v1/Settings/notifications/newsletter
     */
    v1SettingsNotificationsNewsletterCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Settings/notifications/newsletter`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Settings
     * @name V1SettingsNotificationsNewsletterList
     * @summary Gets the Newsletter Notification Settings.
     * @request GET:/api/v1/Settings/notifications/newsletter
     */
    v1SettingsNotificationsNewsletterList: (params = {}) =>
      this.request({
        path: `/api/v1/Settings/notifications/newsletter`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Sonarr
     * @name V1SonarrProfilesCreate
     * @summary Gets the Sonarr profiles.
     * @request POST:/api/v1/Sonarr/Profiles
     */
    v1SonarrProfilesCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Sonarr/Profiles`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Sonarr
     * @name V1SonarrProfilesList
     * @summary Gets the Sonarr profiles.
     * @request GET:/api/v1/Sonarr/Profiles
     */
    v1SonarrProfilesList: (params = {}) =>
      this.request({
        path: `/api/v1/Sonarr/Profiles`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Sonarr
     * @name V1SonarrRootFoldersCreate
     * @summary Gets the Sonarr root folders.
     * @request POST:/api/v1/Sonarr/RootFolders
     */
    v1SonarrRootFoldersCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Sonarr/RootFolders`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Sonarr
     * @name V1SonarrRootFoldersList
     * @summary Gets the Sonarr root folders.
     * @request GET:/api/v1/Sonarr/RootFolders
     */
    v1SonarrRootFoldersList: (params = {}) =>
      this.request({
        path: `/api/v1/Sonarr/RootFolders`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Sonarr
     * @name V1SonarrV3LanguageProfilesList
     * @summary Gets the Sonarr V3 language profiles
     * @request GET:/api/v1/Sonarr/v3/LanguageProfiles
     */
    v1SonarrV3LanguageProfilesList: (params = {}) =>
      this.request({
        path: `/api/v1/Sonarr/v3/LanguageProfiles`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Sonarr
     * @name V1SonarrV3LanguageProfilesCreate
     * @summary Gets the Sonarr V3 language profiles
     * @request POST:/api/v1/Sonarr/v3/LanguageProfiles
     */
    v1SonarrV3LanguageProfilesCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Sonarr/v3/LanguageProfiles`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Sonarr
     * @name V1SonarrTagsCreate
     * @summary Gets the Sonarr tags
     * @request POST:/api/v1/Sonarr/tags
     */
    v1SonarrTagsCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Sonarr/tags`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Sonarr
     * @name V1SonarrTagsList
     * @summary Gets the Sonarr tags
     * @request GET:/api/v1/Sonarr/tags
     */
    v1SonarrTagsList: (params = {}) =>
      this.request({
        path: `/api/v1/Sonarr/tags`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Sonarr
     * @name V1SonarrEnabledList
     * @request GET:/api/v1/Sonarr/enabled
     */
    v1SonarrEnabledList: (params = {}) =>
      this.request({
        path: `/api/v1/Sonarr/enabled`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Stats
     * @name V1StatsList
     * @request GET:/api/v1/Stats
     */
    v1StatsList: (data, params = {}) =>
      this.request({
        path: `/api/v1/Stats`,
        method: "GET",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Status
     * @name V1StatusList
     * @summary Gets the status of Ombi.
     * @request GET:/api/v1/Status
     */
    v1StatusList: (params = {}) =>
      this.request({
        path: `/api/v1/Status`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Status
     * @name V1StatusInfoList
     * @summary Returns information about this ombi instance
     * @request GET:/api/v1/Status/info
     */
    v1StatusInfoList: (params = {}) =>
      this.request({
        path: `/api/v1/Status/info`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags System
     * @name V2SystemNewsList
     * @request GET:/api/v2/System/news
     */
    v2SystemNewsList: (params = {}) =>
      this.request({
        path: `/api/v2/System/news`,
        method: "GET",
        ...params,
      }),
    /**
     * No description
     *
     * @tags System
     * @name V2SystemLogsList
     * @request GET:/api/v2/System/logs
     */
    v2SystemLogsList: (params = {}) =>
      this.request({
        path: `/api/v2/System/logs`,
        method: "GET",
        ...params,
      }),
    /**
     * No description
     *
     * @tags System
     * @name V2SystemLogsDetail
     * @request GET:/api/v2/System/logs/{logFileName}
     */
    v2SystemLogsDetail: (logFileName, params = {}) =>
      this.request({
        path: `/api/v2/System/logs/${logFileName}`,
        method: "GET",
        ...params,
      }),
    /**
     * No description
     *
     * @tags System
     * @name V2SystemLogsDownloadDetail
     * @request GET:/api/v2/System/logs/download/{logFileName}
     */
    v2SystemLogsDownloadDetail: (logFileName, params = {}) =>
      this.request({
        path: `/api/v2/System/logs/download/${logFileName}`,
        method: "GET",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterDiscordCreate
     * @summary Sends a test message to discord using the provided settings
     * @request POST:/api/v1/Tester/discord
     */
    v1TesterDiscordCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Tester/discord`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterPushbulletCreate
     * @summary Sends a test message to Pushbullet using the provided settings
     * @request POST:/api/v1/Tester/pushbullet
     */
    v1TesterPushbulletCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Tester/pushbullet`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterPushoverCreate
     * @summary Sends a test message to Pushover using the provided settings
     * @request POST:/api/v1/Tester/pushover
     */
    v1TesterPushoverCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Tester/pushover`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterGotifyCreate
     * @summary Sends a test message to Gotify using the provided settings
     * @request POST:/api/v1/Tester/gotify
     */
    v1TesterGotifyCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Tester/gotify`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterWebhookCreate
     * @summary Sends a test message to configured webhook using the provided settings
     * @request POST:/api/v1/Tester/webhook
     */
    v1TesterWebhookCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Tester/webhook`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterMattermostCreate
     * @summary Sends a test message to mattermost using the provided settings
     * @request POST:/api/v1/Tester/mattermost
     */
    v1TesterMattermostCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Tester/mattermost`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterSlackCreate
     * @summary Sends a test message to Slack using the provided settings
     * @request POST:/api/v1/Tester/slack
     */
    v1TesterSlackCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Tester/slack`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterEmailCreate
     * @summary Sends a test message via email to the admin email using the provided settings
     * @request POST:/api/v1/Tester/email
     */
    v1TesterEmailCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Tester/email`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterPlexCreate
     * @summary Checks if we can connect to Plex with the provided settings
     * @request POST:/api/v1/Tester/plex
     */
    v1TesterPlexCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Tester/plex`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterEmbyCreate
     * @summary Checks if we can connect to Emby with the provided settings
     * @request POST:/api/v1/Tester/emby
     */
    v1TesterEmbyCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Tester/emby`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterJellyfinCreate
     * @summary Checks if we can connect to Jellyfin with the provided settings
     * @request POST:/api/v1/Tester/jellyfin
     */
    v1TesterJellyfinCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Tester/jellyfin`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterRadarrCreate
     * @summary Checks if we can connect to Radarr with the provided settings
     * @request POST:/api/v1/Tester/radarr
     */
    v1TesterRadarrCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Tester/radarr`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterSonarrCreate
     * @summary Checks if we can connect to Sonarr with the provided settings
     * @request POST:/api/v1/Tester/sonarr
     */
    v1TesterSonarrCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Tester/sonarr`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterCouchpotatoCreate
     * @summary Checks if we can connect to CouchPotato with the provided settings
     * @request POST:/api/v1/Tester/couchpotato
     */
    v1TesterCouchpotatoCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Tester/couchpotato`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterTelegramCreate
     * @summary Sends a test message to Telegram using the provided settings
     * @request POST:/api/v1/Tester/telegram
     */
    v1TesterTelegramCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Tester/telegram`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterSickrageCreate
     * @summary Sends a test message to Slack using the provided settings
     * @request POST:/api/v1/Tester/sickrage
     */
    v1TesterSickrageCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Tester/sickrage`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterNewsletterCreate
     * @request POST:/api/v1/Tester/newsletter
     */
    v1TesterNewsletterCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Tester/newsletter`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterMobileCreate
     * @request POST:/api/v1/Tester/mobile
     */
    v1TesterMobileCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Tester/mobile`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterLidarrCreate
     * @request POST:/api/v1/Tester/lidarr
     */
    v1TesterLidarrCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Tester/lidarr`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Tester
     * @name V1TesterWhatsappCreate
     * @request POST:/api/v1/Tester/whatsapp
     */
    v1TesterWhatsappCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Tester/whatsapp`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags TheMovieDb
     * @name V1TheMovieDbKeywordsList
     * @summary Searches for keywords matching the specified term.
     * @request GET:/api/v1/TheMovieDb/Keywords
     */
    v1TheMovieDbKeywordsList: (query, params = {}) =>
      this.request({
        path: `/api/v1/TheMovieDb/Keywords`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags TheMovieDb
     * @name V1TheMovieDbKeywordsDetail
     * @summary Gets the keyword matching the specified ID.
     * @request GET:/api/v1/TheMovieDb/Keywords/{keywordId}
     */
    v1TheMovieDbKeywordsDetail: (keywordId, params = {}) =>
      this.request({
        path: `/api/v1/TheMovieDb/Keywords/${keywordId}`,
        method: "GET",
        ...params,
      }),
    /**
     * No description
     *
     * @tags TheMovieDb
     * @name V1TheMovieDbGenresDetail
     * @summary Gets the genres for either Tv or Movies depending on media type
     * @request GET:/api/v1/TheMovieDb/Genres/{media}
     */
    v1TheMovieDbGenresDetail: (media, params = {}) =>
      this.request({
        path: `/api/v1/TheMovieDb/Genres/${media}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags TheMovieDb
     * @name V1TheMovieDbWatchProvidersMovieList
     * @summary Searches for the watch providers matching the specified term.
     * @request GET:/api/v1/TheMovieDb/WatchProviders/movie
     */
    v1TheMovieDbWatchProvidersMovieList: (query, params = {}) =>
      this.request({
        path: `/api/v1/TheMovieDb/WatchProviders/movie`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags TheMovieDb
     * @name V1TheMovieDbWatchProvidersTvList
     * @summary Searches for the watch providers matching the specified term.
     * @request GET:/api/v1/TheMovieDb/WatchProviders/tv
     */
    v1TheMovieDbWatchProvidersTvList: (query, params = {}) =>
      this.request({
        path: `/api/v1/TheMovieDb/WatchProviders/tv`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Token
     * @name V1TokenCreate
     * @summary Gets the token.
     * @request POST:/api/v1/Token
     */
    v1TokenCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Token`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
    /**
     * No description
     *
     * @tags Token
     * @name V1TokenPlextokenCreate
     * @summary Returns the Token for the Ombi User if we can match the Plex user with a valid Ombi User
     * @request POST:/api/v1/Token/plextoken
     */
    v1TokenPlextokenCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Token/plextoken`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
    /**
     * No description
     *
     * @tags Token
     * @name V1TokenDetail
     * @request GET:/api/v1/Token/{pinId}
     */
    v1TokenDetail: (pinId, params = {}) =>
      this.request({
        path: `/api/v1/Token/${pinId}`,
        method: "GET",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Token
     * @name V1TokenRefreshCreate
     * @summary Refreshes the token.
     * @request POST:/api/v1/Token/refresh
     */
    v1TokenRefreshCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Token/refresh`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
    /**
     * No description
     *
     * @tags Token
     * @name V1TokenRequirePasswordCreate
     * @request POST:/api/v1/Token/requirePassword
     */
    v1TokenRequirePasswordCreate: (data, params = {}) =>
      this.request({
        path: `/api/v1/Token/requirePassword`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Update
     * @name V1UpdateList
     * @request GET:/api/v1/Update
     */
    v1UpdateList: (params = {}) =>
      this.request({
        path: `/api/v1/Update`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Vote
     * @name V1VoteList
     * @summary Returns the viewmodel to render on the UI
     * @request GET:/api/v1/Vote
     */
    v1VoteList: (params = {}) =>
      this.request({
        path: `/api/v1/Vote`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Vote
     * @name V1VoteUpMovieCreate
     * @summary Upvotes a movie
     * @request POST:/api/v1/Vote/up/movie/{requestId}
     */
    v1VoteUpMovieCreate: (requestId, params = {}) =>
      this.request({
        path: `/api/v1/Vote/up/movie/${requestId}`,
        method: "POST",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Vote
     * @name V1VoteUpTvCreate
     * @summary Upvotes a tv show
     * @request POST:/api/v1/Vote/up/tv/{requestId}
     */
    v1VoteUpTvCreate: (requestId, params = {}) =>
      this.request({
        path: `/api/v1/Vote/up/tv/${requestId}`,
        method: "POST",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Vote
     * @name V1VoteUpAlbumCreate
     * @summary Upvotes a album
     * @request POST:/api/v1/Vote/up/album/{requestId}
     */
    v1VoteUpAlbumCreate: (requestId, params = {}) =>
      this.request({
        path: `/api/v1/Vote/up/album/${requestId}`,
        method: "POST",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Vote
     * @name V1VoteDownMovieCreate
     * @summary Downvotes a movie
     * @request POST:/api/v1/Vote/down/movie/{requestId}
     */
    v1VoteDownMovieCreate: (requestId, params = {}) =>
      this.request({
        path: `/api/v1/Vote/down/movie/${requestId}`,
        method: "POST",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Vote
     * @name V1VoteDownTvCreate
     * @summary Downvotes a tv show
     * @request POST:/api/v1/Vote/down/tv/{requestId}
     */
    v1VoteDownTvCreate: (requestId, params = {}) =>
      this.request({
        path: `/api/v1/Vote/down/tv/${requestId}`,
        method: "POST",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Vote
     * @name V1VoteDownAlbumCreate
     * @summary Downvotes a album
     * @request POST:/api/v1/Vote/down/album/{requestId}
     */
    v1VoteDownAlbumCreate: (requestId, params = {}) =>
      this.request({
        path: `/api/v1/Vote/down/album/${requestId}`,
        method: "POST",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Vote
     * @name V1VoteMovieDetail
     * @summary Get's all the votes for the request id
     * @request GET:/api/v1/Vote/movie/{requestId}
     */
    v1VoteMovieDetail: (requestId, params = {}) =>
      this.request({
        path: `/api/v1/Vote/movie/${requestId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Vote
     * @name V1VoteMusicDetail
     * @summary Get's all the votes for the request id
     * @request GET:/api/v1/Vote/music/{requestId}
     */
    v1VoteMusicDetail: (requestId, params = {}) =>
      this.request({
        path: `/api/v1/Vote/music/${requestId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
    /**
     * No description
     *
     * @tags Vote
     * @name V1VoteTvDetail
     * @summary Get's all the votes for the request id
     * @request GET:/api/v1/Vote/tv/{requestId}
     */
    v1VoteTvDetail: (requestId, params = {}) =>
      this.request({
        path: `/api/v1/Vote/tv/${requestId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
