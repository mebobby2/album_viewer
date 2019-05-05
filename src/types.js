// @flow

export type Album = { id: number, userId: number, title: string };
export type User = { id: number, name: string };
export type Image = { id: number, albumId: number, title: string, url: string, thumbnailUrl: string };

export type UserAlbum = { user: User, album: Album };
