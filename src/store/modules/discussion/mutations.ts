import { Discussion } from "@/types/IDiscussion";
import { DiscussionState } from "@/types/state/IDiscussionState";
import { MutationTree } from "vuex";

export const mutations: MutationTree<DiscussionState> = {
  addDiscussion: (state, discussion: Discussion) => {
    state.discussions?.push(discussion);
  },
};
