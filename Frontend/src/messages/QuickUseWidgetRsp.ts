/* eslint-disable */
import type { OneofGatherPointDetectorData } from "./OneofGatherPointDetectorData";
import type { ClientCollectorData } from "./ClientCollectorData";
import type { SkyCrystalDetectorQuickUseResult } from "./SkyCrystalDetectorQuickUseResult";

/**
 * CmdId: 4270
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface QuickUseWidgetRsp {
  MaterialId?: number;
  Retcode?: number;
  DetectorData?: OneofGatherPointDetectorData | undefined;
  ClientCollectorData?: ClientCollectorData | undefined;
  SkyCrystalDetectorQuickUseResult?:
    | SkyCrystalDetectorQuickUseResult
    | undefined;
}