import { useState } from 'react';

const questions = [
  {
    q: "What's your vibe?",
    options: [
      { text: "Loud and unstoppable", char: 'naruto' },
      { text: "Cold and calculated", char: 'levi' },
      { text: "Chill and spontaneous", char: 'luffy' },
      { text: "Brilliant and visionary", char: 'light' },
    ],
  },
  {
    q: "Your work/study style?",
    options: [
      { text: "All-nighters on pure will", char: 'naruto' },
      { text: "Organized, zero distractions", char: 'levi' },
      { text: "Figure it out on the fly", char: 'luffy' },
      { text: "Already 5 steps ahead", char: 'light' },
    ],
  },
  {
    q: "How do you handle setbacks?",
    options: [
      { text: "Get back up and try harder", char: 'naruto' },
      { text: "Analyze, adapt, execute", char: 'levi' },
      { text: "Shrug it off, keep moving", char: 'luffy' },
      { text: "Failure is not an option", char: 'light' },
    ],
  },
  {
    q: "Your social style?",
    options: [
      { text: "Energetic, pulls everyone in", char: 'naruto' },
      { text: "Small, fiercely loyal circle", char: 'levi' },
      { text: "Everyone's a potential friend", char: 'luffy' },
      { text: "Charming but calculating", char: 'light' },
    ],
  },
  {
    q: "Pick a superpower:",
    options: [
      { text: "Infinite energy + determination", char: 'naruto' },
      { text: "Peak human speed + twin blades", char: 'levi' },
      { text: "Stretchy rubber body + freedom", char: 'luffy' },
      { text: "A notebook that controls fate", char: 'light' },
    ],
  },
];

const characters: Record<string, { name: string; anime: string; desc: string; emoji: string }> = {
  naruto: {
    name: 'Naruto Uzumaki',
    anime: 'Naruto',
    desc: 'Loud, determined, and fiercely loyal. You never give up — ever.',
    emoji: '🍜',
  },
  levi: {
    name: 'Levi Ackerman',
    anime: 'Attack on Titan',
    desc: "Disciplined, stoic, and deadly efficient. Humanity's strongest.",
    emoji: '⚔️',
  },
  luffy: {
    name: 'Monkey D. Luffy',
    anime: 'One Piece',
    desc: "Free-spirited, adventure-hungry, and fiercely protective of your crew.",
    emoji: '🏴‍☠️',
  },
  light: {
    name: 'Light Yagami',
    anime: 'Death Note',
    desc: 'Brilliant, ambitious, always five steps ahead. You see the bigger picture.',
    emoji: '📓',
  },
};

type Scores = Record<string, number>;

const AnimeQuizCard = () => {
  const [phase, setPhase] = useState<'idle' | 'quiz' | 'result'>('idle');
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<Scores>({ naruto: 0, levi: 0, luffy: 0, light: 0 });
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (char: string) => {
    const newScores = { ...scores, [char]: scores[char] + 1 };
    setScores(newScores);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      const winner = Object.entries(newScores).reduce((a, b) => (a[1] >= b[1] ? a : b))[0];
      setResult(winner);
      setPhase('result');
    }
  };

  const reset = () => {
    setPhase('idle');
    setCurrentQ(0);
    setScores({ naruto: 0, levi: 0, luffy: 0, light: 0 });
    setResult(null);
  };

  if (phase === 'idle') {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-3 text-center px-1">
        <div className="text-4xl">⚔️</div>
        <h3 className="font-bold text-sm leading-snug">What Anime Character Are You?</h3>
        <p className="text-xs opacity-60">5 questions · instant result</p>
        <button
          onClick={() => setPhase('quiz')}
          className="mt-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity"
        >
          Find Out →
        </button>
      </div>
    );
  }

  if (phase === 'result' && result) {
    const char = characters[result];
    return (
      <div className="flex flex-col items-center justify-center h-full gap-2 text-center px-1">
        <div className="text-4xl">{char.emoji}</div>
        <div className="font-bold text-sm">{char.name}</div>
        <div className="text-xs opacity-50 font-medium">{char.anime}</div>
        <p className="text-xs opacity-75 leading-relaxed">{char.desc}</p>
        <button onClick={reset} className="text-xs underline opacity-50 hover:opacity-80 mt-1">
          Try again
        </button>
      </div>
    );
  }

  const q = questions[currentQ];
  return (
    <div className="flex flex-col h-full gap-2">
      <div className="flex justify-between items-center">
        <span className="text-xs font-bold opacity-40">
          {currentQ + 1} / {questions.length}
        </span>
        <span className="text-xs opacity-40">anime quiz</span>
      </div>
      {/* progress bar */}
      <div className="w-full h-1 rounded-full bg-white/10">
        <div
          className="h-1 rounded-full bg-primary transition-all duration-300"
          style={{ width: `${((currentQ) / questions.length) * 100}%` }}
        />
      </div>
      <p className="font-semibold text-sm mt-1">{q.q}</p>
      <div className="flex flex-col gap-1.5 flex-1 justify-center">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(opt.char)}
            className="text-left px-3 py-2 rounded-lg text-xs border border-white/15 hover:bg-white/10 hover:border-white/30 transition-all duration-150 active:scale-[0.98]"
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AnimeQuizCard;
