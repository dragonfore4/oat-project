import type { GroupId, PersonalityResult, TopicId } from "./types";

export function calculateResult(
  topicId: TopicId,
  totalScore: number
): PersonalityResult {
  let groupId: GroupId;

  if (totalScore >= 19) {
    groupId = "internal";
  } else if (totalScore >= 14) {
    groupId = "external";
  } else {
    groupId = "chance";
  }

  // random 0, 1, 2, 3
  const randomIndex = Math.floor(Math.random() * 4);
  return {
    topicId,
    groupId,
    variantId: randomIndex + 1,
  };
}
