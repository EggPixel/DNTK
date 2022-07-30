/* eslint-disable */
import type { CityInfo } from "./CityInfo.d.ts";

/**
 * CmdId: 287
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface LevelupCityRsp {
  AreaId?: number;
  Retcode?: number;
  SceneId?: number;
  CityInfo?: CityInfo;
}