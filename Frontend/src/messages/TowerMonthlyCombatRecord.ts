/* eslint-disable */
import type { TowerFightRecordPair } from "./TowerFightRecordPair";

export interface TowerMonthlyCombatRecord {
  MostKillAvatarPair?: TowerFightRecordPair;
  MostCastNormalSkillAvatarPair?: TowerFightRecordPair;
  MostRevealAvatarList?: TowerFightRecordPair[];
  MostCastEnergySkillAvatarPair?: TowerFightRecordPair;
  HighestDpsAvatrPair?: TowerFightRecordPair;
  MostTakeDamageAvatarPair?: TowerFightRecordPair;
}