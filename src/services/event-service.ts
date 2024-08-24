import { WordEntity } from "@/types/types";
import { SubjectManager } from "@/utils/subject-manager";

type TSidePanel = {
  show: boolean;
  payload: WordEntity;
};

export const SidePanelService = new SubjectManager<TSidePanel | boolean>();
