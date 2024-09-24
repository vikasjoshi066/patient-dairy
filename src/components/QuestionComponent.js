import DualChoiceQuestion from "./DualChoiceQuestion";
import VerticalMultipleChoiceQuestion from "./VerticalMultipleChoiceQuestion";
import CarousalChoiceQuestion from "./CarousalChoiceQuestion";
import CollectionTiles from "./CollectionTiles";
import React from "react";

const QuestionComponent = ({ row, handleAnswerChange }) => {
    switch (row.order) {
        case 1:
        case 3:
            return (
                <DualChoiceQuestion
                    questionText={row.question}
                    answer1Text={row.answers[0].answer}
                    answer2Text={row.answers[1].answer}
                    questionOrder={row.order}
                    handleAnswerChange={handleAnswerChange}
                />
            );
        case 2:
            return (
                <VerticalMultipleChoiceQuestion
                    questionText={row.question}
                    answers={row.answers}
                    questionOrder={row.order}
                    handleAnswerChange={handleAnswerChange}
                />
            );
        case 4:
        case 5:
            return (
                <CarousalChoiceQuestion
                    questionText={row.question}
                    questionInstructionText={ row.questionDescription}
                    answers={row.answers}
                    questionOrder={row.order}
                    handleAnswerChange={handleAnswerChange}
                />
            );
        case 6:
            return (
                <CollectionTiles
                    questionText={row.question}
                    questionInstructionText={row.questionDescription}
                    answers={row.answers}
                    questionOrder={row.order}
                    handleAnswerChange={handleAnswerChange}
                />
            );
        default:
            return null;
    }
};

export default QuestionComponent;
