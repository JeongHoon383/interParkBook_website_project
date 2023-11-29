import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const detailState = atom({
  key: "detailState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
