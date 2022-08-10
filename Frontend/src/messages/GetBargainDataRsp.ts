/* eslint-disable */
import type { BargainSnapshot } from "./BargainSnapshot";

/**
 * CmdId: 426
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetBargainDataRsp {
  Retcode?: number;
  BargainId?: number;
  Snapshot?: BargainSnapshot;
}