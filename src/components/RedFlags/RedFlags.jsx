import { useState } from "react";
import './RedFlags.css';

const questions = [
 {
  id: 1,
  dimension: "behavioral_consistency",
  question: "Your partner’s behavior over time feels:",
  options: [
    { id: "a", text: "Consistent and predictable", tags: ["consistency", "emotional_stability"] },
    { id: "b", text: "Mostly consistent with small shifts", tags: ["normal_variation"] },
    { id: "c", text: "Noticeably inconsistent", tags: ["unreliability"] },
    { id: "d", text: "Very different depending on mood or situation", tags: ["emotional_instability"] }
  ]
}


,
 {
  id: 2,
  dimension: "accountability",
  question: "When your partner hurts you emotionally, they usually:",
  options: [
    { id: "a", text: "Acknowledge and try to repair", tags: ["accountability"] },
    { id: "b", text: "Apologize but repeat the behavior", tags: ["empty_apologies"] },
    { id: "c", text: "Deflect or minimize", tags: ["gaslighting_tendencies"] },
    { id: "d", text: "Blame you for feeling hurt", tags: ["emotional_manipulation"] }
  ]
}


,
{
  id: 3,
  dimension: "boundaries",
  question: "When you set boundaries, your partner:",
  options: [
    { id: "a", text: "Respects them", tags: ["healthy_boundaries"] },
    { id: "b", text: "Needs reminders but adjusts", tags: ["learning_curve"] },
    { id: "c", text: "Pushes or questions them", tags: ["boundary_violation"] },
    { id: "d", text: "Mocks or dismisses them", tags: ["disrespect"] }
  ]
}


,
 {
  id: 4,
  dimension: "communication_pattern",
  question: "During serious conversations, your partner usually:",
  options: [
    { id: "a", text: "Listens and engages", tags: ["healthy_communication"] },
    { id: "b", text: "Gets defensive", tags: ["defensiveness"] },
    { id: "c", text: "Shuts down or stonewalls", tags: ["emotional_withdrawal"] },
    { id: "d", text: "Turns it back on you", tags: ["manipulation"] }
  ]
}

,

{
  id: 5,
  dimension: "emotional_availability",
  question: "Your partner’s emotional availability feels:",
  options: [
    { id: "a", text: "Consistent and present", tags: ["emotional_presence"] },
    { id: "b", text: "Present but limited", tags: ["emotional_constraints"] },
    { id: "c", text: "Unpredictable", tags: ["emotional_inconsistency"] },
    { id: "d", text: "Mostly absent", tags: ["emotional_unavailability"] }
  ]
}

,

{
  id: 6,
  dimension: "control_dynamics",
  question: "Your independence in this relationship feels:",
  options: [
    { id: "a", text: "Fully respected", tags: ["autonomy"] },
    { id: "b", text: "Occasionally questioned", tags: ["mild_control"] },
    { id: "c", text: "Frequently challenged", tags: ["controlling_behavior"] },
    { id: "d", text: "Restricted or monitored", tags: ["control_red_flag"] }
  ]
}

,

{
  id: 7,
  dimension: "needs_response",
  question: "When you express your needs, your partner:",
  options: [
    { id: "a", text: "Tries to meet them", tags: ["care"] },
    { id: "b", text: "Acknowledges but rarely changes", tags: ["performative_effort"] },
    { id: "c", text: "Dismisses them", tags: ["emotional_neglect"] },
    { id: "d", text: "Uses them against you later", tags: ["emotional_weaponization"] }
  ]
}

,

{
  id: 8,
  dimension: "trust_vs_anxiety",
  question: "When you notice concerning behavior, your reaction is:",
  options: [
    { id: "a", text: "Observe patterns over time", tags: ["grounded_assessment"] },
    { id: "b", text: "Seek clarity through conversation", tags: ["healthy_inquiry"] },
    { id: "c", text: "Assume the worst quickly", tags: ["anxiety_projection"] },
    { id: "d", text: "Analyze every detail repeatedly", tags: ["overanalysis"] }
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

const RedFlags = () => {
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
      <div className="redflags-questionnaire-container">
        <h2>{insight.title}</h2>
        <p>{insight.message}</p>
        <button className="primary-btn">{insight.action}</button>
      </div>
    );
  }

  return (
    <div className="redflags-questionnaire-container">
      <div className="relationship-confusion-progress">
        {currentIndex + 1} / {questions.length}
      </div>

      <h2 className="redflags-question-text">{currentQuestion.question}</h2>

      <div className="redflags-options">
        {currentQuestion.options.map(option => (
          <button
            key={option.id}
            className={`redflags-option-btn ${
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
        className="redflags-next-btn"
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

export default RedFlags;