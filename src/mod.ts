import { ISCFeature, upgradeMod } from "isaacscript-common";

const MOD_NAME = "isaacscript-mod-example";
const modVanilla = RegisterMod(MOD_NAME, 1);
const features = [
  ISCFeature.CUSTOM_STAGES,
  ISCFeature.CUSTOM_TRAPDOORS,
] as const;
export const mod = upgradeMod(modVanilla, features);
