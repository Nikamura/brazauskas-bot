import { Api as OmbiApi } from "./ombiApi";

export const ombiClient = new OmbiApi({
  baseURL: process.env.OMBI_BASE_URL!,
  headers: {
    ApiKey: process.env.OMBI_TOKEN!,
  },
});
