/* eslint-disable */
import type { ReunionBriefInfo } from "./ReunionBriefInfo.d.ts";

/**
 * CmdId: 5068
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ReunionBriefInfoRsp {
  IsActivate?: boolean;
  Retcode?: number;
  ReunionBriefInfo?: ReunionBriefInfo;
}