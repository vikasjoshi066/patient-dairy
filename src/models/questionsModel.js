// questionsModel.js
import { Question, Answer } from "./model";
import jsonData from "./scratch_1.json"; // Replace with actual data import

// Function to map JSON data into Question and Answer model objects
function mapJsonToQuestions(jsonData) {
  const questionsArray = [];

  jsonData.bladder.forEach((item) => {
    const answersArray = item.answers.map(
      (answerItem) =>
        new Answer(
          answerItem.answer,
          answerItem.order,
          answerItem.answer_identifier,
          answerItem.value || null,
          answerItem.clear_other_answers || false,
          answerItem.answerDescription || ""
        )
    );

    const question = new Question(
      item.question_identifier,
      item.question,
      item.answer_type,
      answersArray,
      item.order,
      item.question_description || ""
    );

    questionsArray.push(question);
  });

  return questionsArray;
}

// Singleton instance
const BLADDER_QUESTIONS = mapJsonToQuestions(jsonData);

// Export the singleton instance
export default BLADDER_QUESTIONS;
