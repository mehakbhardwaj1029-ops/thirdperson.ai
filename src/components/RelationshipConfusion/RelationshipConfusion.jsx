import { useState } from "react";
import './RelationshipConfusion.css';

const questions = [
 {
  id: 1,
  dimension: "emotional_safety",
  question: "When you’re emotionally vulnerable with your partner, you usually feel:",
  options: [
    { id: "a", text: "Heard and understood", tags: ["emotional_safety", "secure_attachment"] },
    { id: "b", text: "Partially understood", tags: ["inconsistency"] },
    { id: "c", text: "Judged or minimized", tags: ["emotional_invalidation"] },
    { id: "d", text: "I avoid being vulnerable", tags: ["emotional_avoidance"] }
  ]
}

,
 {
  id: 2,
  dimension: "effort_balance",
  question: "In your relationship, effort usually feels:",
  options: [
    { id: "a", text: "Mutual and balanced", tags: ["reciprocity"] },
    { id: "b", text: "Uneven but manageable", tags: ["overcompensation"] },
    { id: "c", text: "Mostly from my side", tags: ["one_sided_effort"] },
    { id: "d", text: "Unclear or inconsistent", tags: ["emotional_uncertainty"] }
  ]
}

,
 {
  id: 3,
  dimension: "conflict_resolution",
  question: "When you disagree, conflicts usually:",
  options: [
    { id: "a", text: "Get discussed and resolved", tags: ["healthy_conflict"] },
    { id: "b", text: "Get delayed but resurface", tags: ["unresolved_patterns"] },
    { id: "c", text: "Turn into emotional distance", tags: ["avoidant_dynamics"] },
    { id: "d", text: "Escalate or repeat endlessly", tags: ["toxic_cycle"] }
  ]
}

,
  {
  id: 4,
  dimension: "future_alignment",
  question: "When you think about the future with your partner, you feel:",
  options: [
    { id: "a", text: "Clear and excited", tags: ["future_clarity"] },
    { id: "b", text: "Hopeful but unsure", tags: ["ambivalence"] },
    { id: "c", text: "Anxious or pressured", tags: ["future_anxiety"] },
    { id: "d", text: "I avoid thinking about it", tags: ["future_avoidance"] }
  ]
}
,

{
  id: 5,
  dimension: "communication_quality",
  question: "Important conversations with your partner usually:",
  options: [
    { id: "a", text: "Feel safe and honest", tags: ["open_communication"] },
    { id: "b", text: "Stay surface-level", tags: ["emotional_shallowness"] },
    { id: "c", text: "Turn tense or defensive", tags: ["communication_breakdown"] },
    { id: "d", text: "Get postponed repeatedly", tags: ["avoidance"] }
  ]
}
,

{
  id: 6,
  dimension: "priority_alignment",
  question: "You feel like a priority in your partner’s life:",
  options: [
    { id: "a", text: "Consistently", tags: ["secure_bond"] },
    { id: "b", text: "Sometimes", tags: ["inconsistent_investment"] },
    { id: "c", text: "Rarely", tags: ["emotional_neglect"] },
    { id: "d", text: "I honestly don’t know", tags: ["uncertainty"] }
  ]
}
,

{
  id: 7,
  dimension: "mutual_growth",
  question: "This relationship helps you grow by:",
  options: [
    { id: "a", text: "Making me emotionally stronger", tags: ["mutual_growth"] },
    { id: "b", text: "Teaching me patience", tags: ["emotional_labor"] },
    { id: "c", text: "Exhausting me emotionally", tags: ["emotional_burnout"] },
    { id: "d", text: "Keeping me stuck", tags: ["stagnation"] }
  ]
}
,

{
  id: 8,
  dimension: "trust_reliability",
  question: "When your partner makes a promise, you:",
  options: [
    { id: "a", text: "Trust it fully", tags: ["reliability"] },
    { id: "b", text: "Trust but verify", tags: ["conditional_trust"] },
    { id: "c", text: "Expect disappointment", tags: ["broken_trust"] },
    { id: "d", text: "Don’t rely on promises anymore", tags: ["detachment"] }
  ]
}
,

{
  id: 9,
  dimension: "internal_conflict",
  question: "Your confusion mostly comes from:",
  options: [
    { id: "a", text: "Mixed signals from my partner", tags: ["inconsistency"] },
    { id: "b", text: "Fear of commitment", tags: ["commitment_anxiety"] },
    { id: "c", text: "Ignoring red flags", tags: ["denial"] },
    { id: "d", text: "Not knowing what I truly want", tags: ["lack_of_clarity"] }
  ]
}
,

{
  id: 10,
  dimension: "decision_readiness",
  question: "If nothing changes in this relationship, you will:",
  options: [
    { id: "a", text: "Move forward with clarity", tags: ["acceptance"] },
    { id: "b", text: "Stay and keep hoping", tags: ["false_hope"] },
    { id: "c", text: "Feel resentful over time", tags: ["emotional_decay"] },
    { id: "d", text: "Eventually walk away", tags: ["delayed_exit"] }
  ]
}
,

];

const RelationshipConfusion = () => {
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
      <div className="relationship-confusion-questionnaire-container">
        <h2>{insight.title}</h2>
        <p>{insight.message}</p>
        <button className="primary-btn">{insight.action}</button>
      </div>
    );
  }

  return (
    <div className="relationship-confusion-questionnaire-container">
      <div className="relationship-confusion-progress">
        {currentIndex + 1} / {questions.length}
      </div>

      <h2 className="relationship-confusion-question-text">{currentQuestion.question}</h2>

      <div className="relationship-confusion-options">
        {currentQuestion.options.map(option => (
          <button
            key={option.id}
            className={`relationship-confusion-option-btn ${
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
        className="relationship-confusion-next-btn"
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

export default RelationshipConfusion;