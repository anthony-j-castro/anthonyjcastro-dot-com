// @flow
export type Position = {|
  title: string,
  dateStart: string,
  dateEnd: string,
|};

export type ResumeEntry = {|
  id: string,
  employer: string,
  dateStart: string,
  dateEnd: string,
  positions: Position[],
  description: string[],
  technologies: string[],
  hasWorkSamples: boolean,
|};

export type BaseMedia = {|
  label: string,
  name?: string,
  file: string,
  width: number,
  height: number,
|};

export type Image = {|
  type: 'image',
  ...BaseMedia,
|};

export type Video = {|
  type: 'video',
  poster: string,
  ...BaseMedia,
|};

export type MediaGroup = {|
  name: string,
  media: [Image | Video]
|};

export type WorkSample = {|
  id: string,
  employer: string,
  date: string,
  name: string,
  description: [string | string[]],
  mediaGroups: MediaGroup[]
|};
