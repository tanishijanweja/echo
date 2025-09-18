import { atom } from "jotai";
import { WidgetScreen } from "@/modules/widget/types";

//Basic widget screen atoms

export const screenAtom = atom<WidgetScreen>("auth");
