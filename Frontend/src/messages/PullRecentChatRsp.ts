/* eslint-disable */
import type { ChatInfo } from "./ChatInfo";

/**
 * CmdId: 5023
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PullRecentChatRsp {
  ChatInfo?: ChatInfo[];
  Retcode?: number;
}