/* eslint-disable */
import type { ReunionMissionInfo } from "./ReunionMissionInfo";

/**
 * CmdId: 5099
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetReunionMissionInfoRsp {
  Retcode?: number;
  MissionInfo?: ReunionMissionInfo;
}