/* eslint-disable */
import type { MailData } from "./MailData.d.ts";

/**
 * CmdId: 1498
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface MailChangeNotify {
  MailList?: MailData[];
  DelMailIdList?: number[];
}