/* eslint-disable */
import type { ShowAvatarInfo } from "./ShowAvatarInfo.d.ts";

/**
 * CmdId: 4017
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetFriendShowAvatarInfoRsp {
  Uid?: number;
  Retcode?: number;
  ShowAvatarInfoList?: ShowAvatarInfo[];
}