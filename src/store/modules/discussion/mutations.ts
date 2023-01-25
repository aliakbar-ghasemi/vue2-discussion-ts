import { Discussion } from "@/types/IDiscussion";
import { DiscussionState } from "@/types/state/IDiscussionState";
import { MutationTree } from "vuex";

export const mutations: MutationTree<DiscussionState> = {
  addDiscussion: (state, discussion: Discussion) => {
    state.discussions?.push(discussion);
  },

  likeDiscussion: (state, discussion) => {
    state.discussions?.every((d) => {
      if (d.id == discussion.id) {
        discussion.iLikedIt = !discussion.iLikedIt;
        if (discussion.iLikedIt) {
          //like
          discussion.likes += 1;
        } else {
          //dislike
          discussion.likes -= 1;
        }
        return false;
      }
      return true;
    });
  },
};
