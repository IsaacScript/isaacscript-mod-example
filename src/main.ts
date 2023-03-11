import { LevelStage } from "isaac-typescript-definitions";
import { ModCallbackCustom } from "isaacscript-common";
import { mod } from "./mod";

const TOP_LEFT_CORNER_GRID_INDEX = 32;

mod.AddCallbackCustom(
  ModCallbackCustom.POST_GAME_STARTED_REORDERED,
  postGameStartedReorderedFalse,
  false,
);

function postGameStartedReorderedFalse() {
  mod.spawnCustomTrapdoor(
    TOP_LEFT_CORNER_GRID_INDEX,
    "Slaughterhouse",
    LevelStage.BASEMENT_1,
  );
}

Isaac.DebugString("Initiated mod: isaacscript-mod-example");
