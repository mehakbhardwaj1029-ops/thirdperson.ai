import { useState } from "react";
import './WorkOnYourself.css';

const questions = [
 {
  id: 1,
  dimension: "accountability",
  question: "When something goes wrong in your life, what do you usually do first?",
  options: [
    { id: "a", text: "Reflect on my own role", tag: ["accountability", "self_awareness"] },
    { id: "b", text: "Feel bad but take no action", tag: ["avoidance", "passivity"] },
    { id: "c", text: "Blame people or circumstances", tag: ["external_blame"] },
    { id: "d", text: "Distract myself", tag: ["escapism", "avoidance"] }
  ]
}
,
 {
  id: 2,
  dimension: "self_discipline",
  question: "How often do you break promises you make to yourself?",
  options: [
    { id: "a", text: "Rarely", tag: ["discipline", "self_trust"] },
    { id: "b", text: "Sometimes", tag: ["inconsistency"] },
    { id: "c", text: "Often", tag: ["low_self_trust"] },
    { id: "d", text: "Almost always", tag: ["self_sabotage"] }
  ]
}
,
 {
  id: 3,
  dimension: "emotional_response",
  question: "How do you react when someone criticizes you?",
  options: [
    { id: "a", text: "Listen and reflect", tag: ["emotional_maturity"] },
    { id: "b", text: "Defend myself immediately", tag: ["ego_defensive"] },
    { id: "c", text: "Shut down", tag: ["emotional_avoidance"] },
    { id: "d", text: "Pretend I don’t care", tag: ["emotional_suppression"] }
  ]
}
,
  {
  id: 4,
  dimension: "attachment_expression",
  question: "How do you usually express love?",
  options: [
    { id: "a", text: "Words & messages", tag: ["verbal", "reassurance", "validation"] },
    { id: "b", text: "Spending time together", tag: ["quality_time", "presence"] },
    { id: "c", text: "Small gestures", tag: ["acts_of_service", "consistency"] },
    { id: "d", text: "Physical closeness", tag: ["physical_touch", "attachment"] }
  ]
},

{
  id: 5,
  dimension: "coping_mechanism",
  question: "When you feel emotionally low, you usually:",
  options: [
    { id: "a", text: "Sit with the feeling and understand it", tag: ["emotional_processing"] },
    { id: "b", text: "Distract myself", tag: ["numbing"] },
    { id: "c", text: "Vent repeatedly", tag: ["external_validation"] },
    { id: "d", text: "Withdraw from everyone", tag: ["isolation"] }
  ]
},

{
  id: 6,
  dimension: "consistency",
  question: "When motivation fades, what happens?",
  options: [
    { id: "a", text: "I continue anyway", tag: ["discipline"] },
    { id: "b", text: "I pause and restart later", tag: ["inconsistency"] },
    { id: "c", text: "I quit silently", tag: ["avoidance"] },
    { id: "d", text: "I look for something new", tag: ["novelty_seeking"] }
  ]
},

{
  id: 7,
  dimension: "conflict_handling",
  question: "When conflict shows up in your life, you usually:",
  options: [
    { id: "a", text: "Address it directly", tags: ["confrontation", "emotional_courage"] },
    { id: "b", text: "Overthink it but delay action", tags: ["avoidance", "anxiety"] },
    { id: "c", text: "Hope it resolves on its own", tags: ["passivity"] },
    { id: "d", text: "Cut off or withdraw", tags: ["emotional_shutdown"] }
  ]
},

{
  id: 8,
  dimension: "external_validation",
  question: "Your mood improves the most when:",
  options: [
    { id: "a", text: "I make progress toward my goals", tags: ["internal_validation"] },
    { id: "b", text: "Someone appreciates or praises me", tags: ["external_validation"] },
    { id: "c", text: "I feel needed by someone", tags: ["people_pleasing"] },
    { id: "d", text: "I escape my responsibilities", tags: ["avoidance"] }
  ]
},

{
  id: 9,
  dimension: "self_honesty",
  question: "Which statement feels most true?",
  options: [
    { id: "a", text: "I act even when I’m scared", tags: ["courage", "ownership"] },
    { id: "b", text: "I overthink instead of acting", tags: ["analysis_paralysis"] },
    { id: "c", text: "I wait for the right moment", tags: ["procrastination"] },
    { id: "d", text: "I avoid facing uncomfortable truths", tags: ["self_deception"] }
  ]
},

{
  id: 10,
  dimension: "growth_readiness",
  question: "If you receive a brutally honest assessment about yourself, you will:",
  options: [
    { id: "a", text: "Use it to improve", tags: ["growth_mindset"] },
    { id: "b", text: "Feel uncomfortable but reflect", tags: ["self_awareness"] },
    { id: "c", text: "Feel attacked or defensive", tags: ["ego_defensive"] },
    { id: "d", text: "Ignore it and move on", tags: ["resistance_to_change"] }
  ]
},

];

const WorkOnYourself = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleSelect = (questionId, optionId) => {
    setAnswers({
      ...answers,
      [questionId]: optionId
    });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setFinished(true);
    }
  };

  const getInsight = () => {
    const selectedTags = questions.map(q => {
      const selectedOption = q.options.find(
        opt => opt.id === answers[q.id]
      );
      return selectedOption?.tag;
    });

    if (selectedTags.includes("emotionsl_maturity")) {
      return {
        title: "You might be feeling emotionally overwhelmed",
        message:
          "This could be a good time for reassurance and a calm, pressure-free moment together.",
        action: "Start a gentle virtual date"
      };
    }

    if (selectedTags.includes("numbing")) {
      return {
        title: "You tend to process emotions internally",
        message:
          "Sharing even a small thought might help your partner understand you better.",
        action: "Send a thoughtful card"
      };
    }

    if (selectedTags.includes("verbal")) {
      return {
        title: "Quality time seems important to you",
        message:
          "A simple, intentional date could make a big difference right now.",
        action: "Plan a short date"
      };
    }

    return {
      title: "You value emotional connection",
      message:
        "Staying consistent with small moments can help strengthen your bond.",
      action: "Explore connection ideas"
    };
  };

  if (finished) {
    const insight = getInsight();

    return (
      <div className="questionnaire-container">
        <h2>{insight.title}</h2>
        <p>{insight.message}</p>
        <button className="primary-btn">{insight.action}</button>
      </div>
    );
  }

  return (
    <div className="questionnaire-container">
      <div className="progress">
        {currentIndex + 1} / {questions.length}
      </div>

      <h2 className="question-text">{currentQuestion.question}</h2>

      <div className="options">
        {currentQuestion.options.map(option => (
          <button
            key={option.id}
            className={`option-btn ${
              answers[currentQuestion.id] === option.id ? "selected" : ""
            }`}
            onClick={() =>
              handleSelect(currentQuestion.id, option.id)
            }
          >
            {option.text}
          </button>
        ))}
      </div>

      <button
        className="next-btn"
        disabled={!answers[currentQuestion.id]}
        onClick={handleNext}
      >
        {currentIndex === questions.length - 1
          ? "See insights"
          : "Next"}
      </button>
    </div>
  );
}

export default WorkOnYourself;