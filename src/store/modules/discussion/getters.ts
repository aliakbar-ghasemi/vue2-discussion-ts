import { Discussion } from './../../../types/IDiscussion';
import { RootState } from "./../../../types/state/IRootState";
import { DiscussionState } from "./../../../types/state/IDiscussionState";
import { GetterTree } from "vuex";

export const getters: GetterTree<DiscussionState, RootState> = {

    discussions: (state) : Discussion[] | undefined => {
        const discussions = state.discussions?.filter((d) => !d.discussionForeignKey);
        discussions?.forEach((discussion) => {
          const replies = state.discussions?.filter(
            (d) => d.discussionForeignKey == discussion.id
          );
          discussion.replies = replies;
        });
    
        return discussions?.sort(
          (firstItem, secondItem) => secondItem.date - firstItem.date
        );
      },
};
