declare module '@consumet/extensions' {
  export const ANIME: any;
  export const MANGA: any;
  export const BOOKS: any;
  export const MOVIES: any;
  export const META: any;
  export const LIGHT_NOVELS: any;
  export const NEWS: any;
  export const PROVIDERS_LIST: any;
  export const Topics: any;
  export type Topics = any;
  export const StreamingServers: any;
  export type StreamingServers = any;
  export const SubOrSub: any;
  export type SubOrSub = any;
  export const Genres: any;
  export type Genres = any;
}

declare module '@consumet/extensions/dist/models' {
  export const StreamingServers: any;
  export type StreamingServers = any;
  export const SubOrSub: any;
  export type SubOrSub = any;
  export const Genres: any;
  export type Genres = any;
}

declare module '@consumet/extensions/dist/providers/meta/anilist' {
  const Anilist: any;
  export default Anilist;
  export type Anilist = any;
  type Anilist = any;
}

declare module '@consumet/extensions/dist/providers/anime/9anime' {
  const NineAnime: any;
  export default NineAnime;
}

declare module '@consumet/extensions/dist/providers/anime/zoro' {
  const Zoro: any;
  export default Zoro;
}

declare module '@consumet/extensions/dist/utils' {
  export const BilibiliExtractor: any;
}
