import { useState } from "react";
import './MBTI.css';
import { useNavigate } from "react-router-dom";

const questions = [
 {
  id: 1,
  dimension: "energy_orientation",
  question: "After a long, stressful week, you feel better when you:",
  options: [
    { id: "a", text: "Spend time talking with people", tags: ["extraversion"] },
    { id: "b", text: "Do something social but low-key", tags: ["ambivert"] },
    { id: "c", text: "Spend time alone recharging", tags: ["introversion"] },
    { id: "d", text: "Avoid everyone completely", tags: ["deep_introversion"] }
  ]
}



,
 {
  id: 2,
  dimension: "processing_style",
  question: "When something is bothering you, you usually:",
  options: [
    { id: "a", text: "Talk it out to understand it", tags: ["extraversion"] },
    { id: "b", text: "Think alone, then talk", tags: ["introversion"] },
    { id: "c", text: "Journal or reflect silently", tags: ["introversion"] },
    { id: "d", text: "Avoid processing it", tags: ["avoidant"] }
  ]
}



,
{
  id: 3,
  dimension: "information_processing",
  question: "When learning something new, you prefer:",
  options: [
    { id: "a", text: "Clear facts and practical examples", tags: ["sensing"] },
    { id: "b", text: "A mix of facts and big-picture ideas", tags: ["balanced"] },
    { id: "c", text: "Patterns, meaning, and possibilities", tags: ["intuition"] },
    { id: "d", text: "Exploring ideas freely", tags: ["intuition"] }
  ]
}



,
 {
  id: 4,
  dimension: "focus_orientation",
  question: "You are more drawn to:",
  options: [
    { id: "a", text: "What is happening right now", tags: ["sensing"] },
    { id: "b", text: "What usually works", tags: ["sensing"] },
    { id: "c", text: "What could happen in the future", tags: ["intuition"] },
    { id: "d", text: "Imagining possibilities", tags: ["intuition"] }
  ]
}


,

{
  id: 5,
  dimension: "decision_making",
  question: "When making an important decision, you rely more on:",
  options: [
    { id: "a", text: "Logic and objective reasoning", tags: ["thinking"] },
    { id: "b", text: "Pros and cons, then feelings", tags: ["thinking"] },
    { id: "c", text: "How it affects people involved", tags: ["feeling"] },
    { id: "d", text: "Personal values and emotions", tags: ["feeling"] }
  ]
}


,

{
  id: 6,
  dimension: "conflict_response",
  question: "In conflict, you usually prioritize:",
  options: [
    { id: "a", text: "Being honest, even if it hurts", tags: ["thinking"] },
    { id: "b", text: "Resolving things efficiently", tags: ["thinking"] },
    { id: "c", text: "Maintaining emotional harmony", tags: ["feeling"] },
    { id: "d", text: "Avoiding hurt feelings", tags: ["feeling"] }
  ]
}


,

{
  id: 7,
  dimension: "structure_preference",
  question: "Your approach to plans is usually:",
  options: [
    { id: "a", text: "Planned and structured", tags: ["judging"] },
    { id: "b", text: "Planned but flexible", tags: ["judging"] },
    { id: "c", text: "Go-with-the-flow", tags: ["perceiving"] },
    { id: "d", text: "Spontaneous and open-ended", tags: ["perceiving"] }
  ]
}


,

{
  id: 8,
  dimension: "closure_style",
  question: "You feel more comfortable when:",
  options: [
    { id: "a", text: "Things are decided and settled", tags: ["judging"] },
    { id: "b", text: "There’s a loose plan", tags: ["judging"] },
    { id: "c", text: "Options stay open", tags: ["perceiving"] },
    { id: "d", text: "Nothing is fixed yet", tags: ["perceiving"] }
  ]
}


,

{
  id: 9,
  dimension: "pattern_detection",
  question: "The behaviors that worry you are:",
  options: [
    { id: "a", text: "Rare one-time incidents", tags: ["isolated_incident"] },
    { id: "b", text: "Occasional but explainable", tags: ["contextual_behavior"] },
    { id: "c", text: "Repeating patterns", tags: ["behavioral_pattern"] },
    { id: "d", text: "Escalating over time", tags: ["escalation_red_flag"] }
  ]
}

,

{
  id: 10,
  dimension: "internal_state",
  question: "Your concern about red flags feels driven more by:",
  options: [
    { id: "a", text: "Clear evidence and patterns", tags: ["rational_concern"] },
    { id: "b", text: "Gut discomfort I can’t ignore", tags: ["intuition"] },
    { id: "c", text: "Fear of being hurt again", tags: ["past_wounds"] },
    { id: "d", text: "Constant mental replay", tags: ["rumination"] }
  ]
}

,

];

const MBTI = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);
  const navigate = useNavigate();

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
        action: "Detailed Analysis"
      };
    }

    if (selectedTags.includes("numbing")) {
      
      return {
        title: "You tend to process emotions internally",
        message:
          "Sharing even a small thought might help your partner understand you better.",
        action: "Detailed Analysis"
      };
    }

    if (selectedTags.includes("verbal")) {
      return {
        title: "Quality time seems important to you",
        message:
          "A simple, intentional date could make a big difference right now.",
        action: "Detailed Analysis"
      };
    }

    return {
      title: "You value emotional connection",
      message:
        "Staying consistent with small moments can help strengthen your bond.",
      action: "Detailed Analysis"
    };
  };

  if (finished) {
    const insight = getInsight();

    return (
      <div className="mbti-page">
      <div className="mbti-questionnaire-container">
        <h2>{insight.title}</h2>
        <p>{insight.message}</p>
        <button className="mbti-primary-btn" onClick={()=>navigate("/detailed-analysis")}>{insight.action}</button>
      </div>
      </div>
    );
  }

  return (
    
    <div className="mbti-page">
    <div className="mbti-questionnaire-container">
      <div className="relationship-confusion-progress">
        {currentIndex + 1} / {questions.length}
      </div>

      <h2 className="mbti-question-text">{currentQuestion.question}</h2>

      <div className="mbti-options">
        {currentQuestion.options.map(option => (
          <button
            key={option.id}
            className={`mbti-option-btn ${
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
        className="mbti-next-btn"
        disabled={!answers[currentQuestion.id]}
        onClick={handleNext}
      >
        {currentIndex === questions.length - 1
          ? "See insights"
          : "Next"}
      </button>
    </div>
    </div>
  );
}

export default MBTI;