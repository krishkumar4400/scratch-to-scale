import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';

const mockMessages = [
  {
    problem: "Write a function to check if a string is a palindrome in Python.",
    solution_1: "```python\ndef is_palindrome(s):\n    return s == s[::-1]\n```",
    solution_2: "```python\ndef is_palindrome(s):\n    for i in range(len(s) // 2):\n        if s[i] != s[len(s) - 1 - i]:\n            return False\n    return True\n```",
    judge: {
      winner: 1,
      solution_1_score: 95,
      solution_2_score: 80,
      verdict_summary: "Solution 1 is preferred for its simplicity and idiomatic Python usage.",
      solution_1_reasoning: "This solution elegantly utilizes Python's slice notation to reverse the string and compare it in a single, highly optimized C-level operation. It is robust, easy to read, and represents the idiomatic way to solve this problem in Python.",
      solution_2_reasoning: "While correct and demonstrating a good understanding of algorithmic logic, this iterative approach is more verbose and generally slower in Python compared to the slice method. It's a good academic exercise but less practical for everyday Python programming."
    }
  },
  {
    problem: "Explain the concept of closures in JavaScript.",
    solution_1: "A closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope. It's essentially a function bundled together with its surrounding state (the lexical environment).",
    solution_2: "A closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time. It allows data hiding and encapsulation.",
    judge: {
      winner: 0,
      solution_1_score: 90,
      solution_2_score: 90,
      verdict_summary: "Both solutions provide accurate and clear explanations of closures.",
      solution_1_reasoning: "This explanation uses standard terminology ('lexical scope') effectively and provides a very formal and precise definition.",
      solution_2_reasoning: "This explanation is highly accessible and immediately highlights a key use case ('data hiding and encapsulation'), making it very practical."
    }
  }
];

const MessageBlock = ({ msg }) => {
  const [isReasoningExpanded, setIsReasoningExpanded] = useState(false);
  
  const win1 = msg.judge.winner === 1;
  const win2 = msg.judge.winner === 2;

  return (
    <div className="bg-white shadow-sm border border-neutral-200 rounded-2xl p-6 space-y-6">
      <div className="space-y-2">
        <h2 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">Problem</h2>
        <p className="text-lg font-medium text-neutral-800">{msg.problem}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Solution 1 */}
        <div className={`p-5 border rounded-xl bg-blue-50/50 ${win1 ? 'border-emerald-500 ring-1 ring-emerald-500 shadow-sm' : 'border-blue-100'}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-blue-900">Solution 1</h3>
            {win1 && <span className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-full"><CheckCircle size={14} /> Winner</span>}
          </div>
          <div className="prose prose-sm max-w-none text-neutral-700 overflow-x-auto">
            <ReactMarkdown>{msg.solution_1}</ReactMarkdown>
          </div>
        </div>
        
        {/* Solution 2 */}
        <div className={`p-5 border rounded-xl bg-purple-50/50 ${win2 ? 'border-emerald-500 ring-1 ring-emerald-500 shadow-sm' : 'border-purple-100'}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-purple-900">Solution 2</h3>
            {win2 && <span className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-full"><CheckCircle size={14} /> Winner</span>}
          </div>
          <div className="prose prose-sm max-w-none text-neutral-700 overflow-x-auto">
            <ReactMarkdown>{msg.solution_2}</ReactMarkdown>
          </div>
        </div>
      </div>

      {/* Judge Verdict */}
      <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-100">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
          <h3 className="font-semibold text-neutral-800 flex items-center gap-2">
            Judge Verdict
          </h3>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-neutral-500">Sol 1:</span>
              <div className="w-16 h-2 bg-neutral-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: `${msg.judge.solution_1_score}%` }}></div>
              </div>
              <span className="text-sm font-medium text-neutral-700">{msg.judge.solution_1_score}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-neutral-500">Sol 2:</span>
              <div className="w-16 h-2 bg-neutral-200 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500" style={{ width: `${msg.judge.solution_2_score}%` }}></div>
              </div>
              <span className="text-sm font-medium text-neutral-700">{msg.judge.solution_2_score}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <p className="text-neutral-700 font-medium">{msg.judge.verdict_summary}</p>
          
          <button 
            onClick={() => setIsReasoningExpanded(!isReasoningExpanded)}
            className="flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-800 transition-colors"
          >
            {isReasoningExpanded ? 'Hide' : 'Show'} full reasoning
            {isReasoningExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {isReasoningExpanded && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-neutral-200">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-blue-800 uppercase tracking-wider">Solution 1 Reasoning</span>
                <p className="text-sm text-neutral-600 leading-relaxed">{msg.judge.solution_1_reasoning}</p>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-semibold text-purple-800 uppercase tracking-wider">Solution 2 Reasoning</span>
                <p className="text-sm text-neutral-600 leading-relaxed">{msg.judge.solution_2_reasoning}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900">AI Arena Chat</h1>
          <p className="text-neutral-500 mt-2">Compare and judge multiple AI solutions seamlessly.</p>
        </header>
        
        <div className="space-y-8">
          {mockMessages.map((msg, idx) => (
            <MessageBlock key={idx} msg={msg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
