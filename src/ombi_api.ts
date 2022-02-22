import fetch from "node-fetch";

export class OmbiClient {
  public get headers() {
    return {
      ApiKey: process.env.OMBI_TOKEN!,
      "Content-Type": "application/json",
    };
  }

  private async post(url: string, body: string) {
    const results = await fetch(`https://ombi.karolis.host${url}`, {
      headers: this.headers,
      method: "POST",
      body,
    });

    const responseJson = await results.json();
    return responseJson;
  }

  private async get(url: string) {
    const results = await fetch(`https://ombi.karolis.host${url}`, {
      headers: this.headers,
    });

    const responseJson = await results.json();
    return responseJson;
  }

  public async request(mediaType?: string, theMovieDbId?: string) {
    if (!mediaType || !theMovieDbId || !mediaType.includes("movie")) {
      return JSON.stringify({ message: "Invalid params", error: true, mediaType, theMovieDbId });
    }
    return this.post(
      `/api/v1/Request/${mediaType}`,
      JSON.stringify({
        theMovieDbId: parseInt(theMovieDbId, 10),
      }),
    );
  }

  public movie(theMovieDbId: string) {
    return this.get(`/api/v2/Search/movie/${theMovieDbId}`);
  }

  public tv(tvDbId: string) {
    return this.get(`/api/v2/Search/tv/${tvDbId}`);
  }

  public async search(title: string, { movies = true, tvShows = true } = {}) {
    const searchTerm = encodeURIComponent(title);

    return this.post(
      `/api/v2/Search/multi/${searchTerm}`,
      JSON.stringify({
        movies,
        tvShows,
        music: false,
        people: false,
      }),
    );
  }
}
