import { Discussion } from '@/types/IDiscussion';
import { RootState } from "./../../../types/state/IRootState";
import { DiscussionState } from "@/types/state/IDiscussionState";
import { ActionTree } from "vuex";

export const actions: ActionTree<DiscussionState, RootState> = {
    startDiscussion(context, { discussionText }) {        
        const discussion: Discussion = {
          id: new Date().getTime(),
          date: new Date().getTime(),
          user: context.rootGetters['user/user'],
          text: discussionText,
          likes: 0,
          iLikedIt: false,
          replies: [],
        };
    
        context.commit("addDiscussion", discussion);
      },

      replyDiscussion(context, { discussionText, discussionId }) {
        const discussion = {
          id: new Date().getTime(),
          date: new Date().getTime(),
          user: context.rootGetters['user/user'],
          text: discussionText,
          likes: 0,
          iLikedIt: false,
          discussionForeignKey: discussionId,
        };
    
        context.commit("addDiscussion", discussion);
      },
};
