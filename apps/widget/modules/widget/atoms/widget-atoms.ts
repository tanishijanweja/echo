import { atom } from "jotai";
import { WidgetScreen } from "@/modules/widget/types";
import { atomFamily, atomWithStorage } from "jotai/utils";
import { CONTACT_SESSION_KEY } from "../constants";
import { Id } from "@workspace/backend/_generated/dataModel";

//Basic widget screen atoms

export const screenAtom = atom<WidgetScreen>("loading");
export const organizationIdAtom = atom<string | null>(null);

// Organization-scoped contact session atom
export const contactSessionIdAtomFamily = atomFamily((organizationId: string) =>
  atomWithStorage<Id<"contactSessions"> | null>(
    `${CONTACT_SESSION_KEY}_${organizationId}`,
    null
  )
);

export const errorMessageAtom = atom<string | null>(null);
export const loadingMessageAtom = atom<string | null>(null);
