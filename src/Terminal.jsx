import { useState, useEffect, useRef, useCallback } from 'react';
import './terminal-page.css';

// ─── Virtual Filesystem ───────────────────────────────────────────────────────

const FS = {
  '/': { type: 'dir', children: ['about.txt', 'contact.txt', 'experience', 'projects', 'skills', 'awards.txt'] },

  '/about.txt': {
    type: 'file',
    content: `Name:    Roshni Guha
School:  University of Wisconsin-Madison (Sophomore)
Degrees: B.S. Computer Science (Honors) + B.S. Mathematics
GPA:     3.878 / 4.0

Coursework: Mathematical Machine Learning · Artificial Intelligence
            Linear Algebra · Programming I & II · Discrete Math

About:   I'm passionate about software engineering, quantitative finance,
         and machine learning. I love building scalable systems, developing
         algorithmic trading strategies, and applying ML to real-world problems.

Seeking: Summer 2026 internships in SWE · Quant Dev · Machine Learning`,
  },

  '/contact.txt': {
    type: 'file',
    content: `Email:    rguha@wisc.edu
GitHub:   github.com/roshni-guha
LinkedIn: linkedin.com/in/roshni-guha`,
  },

  '/awards.txt': {
    type: 'file',
    content: `Dean's List  —  UW-Madison, 2024-2025
             Awarded for academic excellence (top GPA threshold)

CheeseHacks 2024  —  Google / UW-Madison
             Participated in hackathon; built S&P 500 ARIMA predictor

Hilldale Undergraduate Research Fellowship  —  UW-Madison
             Competitive research funding for undergraduate projects`,
  },

  '/experience': { type: 'dir', children: ['rbc.txt', 'quant-research.txt', 'peer-mentor.txt', 'data-analyst.txt'] },

  '/experience/rbc.txt': {
    type: 'file',
    content: `Role:    Project Intern
Company: RBC (Royal Bank of Canada)
Period:  Jun 2025 – Aug 2025  [Active]

Overview:
  Working on an AI-assisted research analyst tool that integrates
  financial APIs (Yahoo Finance, SEC Edgar), sentiment feeds (Reddit, X),
  and financial news aggregators to automate equity research workflows
  for portfolio managers.

Stack:   Python · Node.js · Express.js · Yahoo Finance API · NewsAPI · pandas

Highlights:
  • Built functional MVP in Python/Streamlit in a 3-person team
  • Reduced manual research time by 50%+ for portfolio managers
  • Aggregated multi-source insights: fundamentals, earnings surprises,
    sentiment, and technical indicators within seconds`,
  },

  '/experience/quant-research.txt': {
    type: 'file',
    content: `Role:    Quantitative Researcher
Company: UW-Madison (Department of Finance)
Period:  Sep 2024 – Present  [Active]

Overview:
  Conducting quantitative research at the intersection of machine learning
  and computational finance. Developing and backtesting algorithmic trading
  strategies using historical market data.

Stack:   Python · ARIMA · scikit-learn · pandas · NumPy · Matplotlib

Highlights:
  • Researching ML-driven signal generation for equity strategies
  • Backtesting systematic strategies on multi-year historical datasets
  • Collaborating with faculty on quantitative finance research projects`,
  },

  '/experience/peer-mentor.txt': {
    type: 'file',
    content: `Role:    Peer Mentor
Company: UW-Madison (CS Department)
Period:  Jan 2025 – Present  [Active]

Overview:
  Mentoring undergraduate students in introductory CS courses,
  providing guidance on programming fundamentals and academic success.

Highlights:
  • Hosted weekly office hours and review sessions
  • Helped students with debugging, problem-solving, and study strategies`,
  },

  '/experience/data-analyst.txt': {
    type: 'file',
    content: `Role:    Data Analyst (Research)
Company: UW-Madison
Period:  2024 – 2025

Overview:
  Performed data analysis and visualization for academic research projects.
  Preprocessed and cleaned datasets, applied statistical methods, and
  communicated findings through clear visualizations.

Stack:   Python · pandas · NumPy · Matplotlib · scikit-learn`,
  },

  '/projects': { type: 'dir', children: ['rbc-ai-assistant.txt', 'uw-match.txt', 'smoking-predictor.txt', 'sp500-predictor.txt', 'stock-visualizer.txt', 'job-chatbot.txt'] },

  '/projects/rbc-ai-assistant.txt': {
    type: 'file',
    content: `Project: RBC AI Research Assistant
Category: Machine Learning & Financial Technology

Description:
  AI-assisted research analyst tool integrating financial APIs (Yahoo Finance),
  sentiment feeds (Reddit, X), and news aggregators to automate equity research
  workflows for portfolio managers. Built an MVP in Python/Streamlit that
  retrieved, summarized, and visualized multi-source insights within seconds,
  reducing manual research time by 50%+.

Stack:   Python · Node.js · Express.js · Yahoo Finance API · SEC Edgar API
         NewsAPI · yfinance · pandas

Highlights:
  • Collaborated with portfolio managers at RBC
  • 50% reduction in manual research time
  • Real-time multi-source data aggregation

GitHub:  github.com/roshni-guha/trading-bot`,
  },

  '/projects/uw-match.txt': {
    type: 'file',
    content: `Project: UW Match
Category: Full-Stack Development

Description:
  Course search platform with 350+ users featuring a 4-year planner,
  grade distribution charts, demographic breakdowns, RateMyProfessor links,
  AI-generated discussion summaries, prerequisite tracking, and similar course
  suggestions. Led ML integration on a 5-person team.

Stack:   Python · AI APIs · Svelte · FastAPI · MongoDB · Node.js

Highlights:
  • 350+ active users
  • ML-powered course recommendations
  • AI discussion summaries

Live:    uwmatch.com`,
  },

  '/projects/smoking-predictor.txt': {
    type: 'file',
    content: `Project: Smoking Habit Predictor
Category: Machine Learning Research

Description:
  Preprocessed CSV health dataset (demographics, oral health, habits) and
  applied multiple ML algorithms to classify smoking status. Compared model
  accuracy with and without feature scaling.

Models:  Decision Tree · KNN · Naïve Bayes · SVM (best: ~76% accuracy)
Stack:   Python · scikit-learn · Pandas · NumPy · Matplotlib

Highlights:
  • 87% model accuracy (best configuration)
  • 2000+ training samples
  • 5 algorithms evaluated
  • 10-fold cross validation

GitHub:  github.com/roshni-guha/smoking-or-not`,
  },

  '/projects/sp500-predictor.txt': {
    type: 'file',
    content: `Project: S&P 500 Predictor
Category: Computational Finance

Description:
  Built at Google CheeseHacks 2024. Used historical S&P 500 data spanning
  a decade to build an ARIMA model that forecasts future stock prices with
  visualization output.

Stack:   Python · ARIMA · Yahoo Finance API · Matplotlib

Highlights:
  • 10 years of historical market data
  • ARIMA time-series forecasting
  • Backtested predictions
  • Built at CheeseHacks 2024 hackathon

GitHub:  github.com/roshni-guha/CheeseHack-2024`,
  },

  '/projects/stock-visualizer.txt': {
    type: 'file',
    content: `Project: Stock Visualizer for AAPL & MSFT
Category: Data Visualization & Analysis

Description:
  Displays 20-day Simple Moving Average prices for Apple and Microsoft
  with interactive click pointers showing SMA-20 data. Shows Open, Close,
  High, Low prices and volume on a Tkinter GUI.

Stack:   Python · yFinance · Pandas · Matplotlib · Tkinter

Highlights:
  • Interactive SMA-20 visualization
  • Live market data updates
  • AAPL and MSFT tracked

GitHub:  github.com/roshni-guha/stock-price-visualizer`,
  },

  '/projects/job-chatbot.txt': {
    type: 'file',
    content: `Project: AI Job Assistant Chatbot
Category: Machine Learning / NLP

Description:
  Python-based AI Job Assistant using OpenAI GPT-4o to extract job
  preferences from natural language, validate missing details via interactive
  questioning, and recommend top job matches.

Stack:   Python · Pandas · OpenAI API (GPT-4o)

Highlights:
  • NLP-powered preference extraction
  • Contextual follow-up questioning
  • Automated job matching logic

GitHub:  github.com/roshni-guha/RBC-ai-assistant`,
  },

  '/skills': { type: 'dir', children: ['languages.txt', 'frameworks.txt', 'tools.txt', 'concepts.txt'] },

  '/skills/languages.txt': {
    type: 'file',
    content: `Languages:
  ████████░░  Python       (Expert)
  ███████░░░  Java         (Proficient)
  ██████░░░░  JavaScript   (Proficient)
  █████░░░░░  C            (Intermediate)
  █████░░░░░  SQL          (Intermediate)
  ████░░░░░░  R            (Intermediate)`,
  },

  '/skills/frameworks.txt': {
    type: 'file',
    content: `Frameworks & Libraries:
  React · Svelte · FastAPI · Express.js · Node.js
  scikit-learn · pandas · NumPy · Matplotlib
  TensorFlow · PyTorch (learning)`,
  },

  '/skills/tools.txt': {
    type: 'file',
    content: `Tools & Platforms:
  Git · GitHub · VS Code · Jupyter Notebook
  MongoDB · PostgreSQL · Docker (learning)
  Yahoo Finance API · OpenAI API · SEC Edgar API`,
  },

  '/skills/concepts.txt': {
    type: 'file',
    content: `Concepts:
  Machine Learning · Deep Learning · NLP
  Algorithmic Trading · Quantitative Finance
  Data Structures & Algorithms
  RESTful APIs · Full-Stack Development
  Statistical Analysis · Time Series Forecasting`,
  },
};

// ─── Path Utilities ───────────────────────────────────────────────────────────

function resolvePath(cwd, target) {
  if (!target || target === '.') return cwd;
  if (target === '..') {
    const parts = cwd.split('/').filter(Boolean);
    if (parts.length === 0) return '/';
    parts.pop();
    return '/' + parts.join('/') || '/';
  }
  if (target.startsWith('/')) return target.replace(/\/+$/, '') || '/';
  const base = cwd === '/' ? '' : cwd;
  return base + '/' + target;
}

function getNode(path) {
  return FS[path] || null;
}

function cwdDisplay(cwd) {
  return cwd === '/' ? '~' : '~' + cwd;
}

// ─── Command Processor ────────────────────────────────────────────────────────

function processCommand(raw, cwd) {
  const trimmed = raw.trim();
  if (!trimmed) return { lines: [], newCwd: cwd };

  const [cmd, ...args] = trimmed.split(/\s+/);
  const arg = args[0] || '';

  switch (cmd) {
    case 'help':
      return {
        lines: [
          { text: 'Available commands:', cls: 'tc-cyan' },
          { text: '' },
          { text: '  ls              list directory contents', cls: '' },
          { text: '  ls <dir>        list contents of a directory', cls: '' },
          { text: '  cd <dir>        change directory (cd .. to go up)', cls: '' },
          { text: '  cat <file>      read a file', cls: '' },
          { text: '  pwd             print working directory', cls: '' },
          { text: '  whoami          about me in one line', cls: '' },
          { text: '  echo <text>     print text', cls: '' },
          { text: '  clear           clear the terminal', cls: '' },
          { text: '  help            show this message', cls: '' },
          { text: '' },
          { text: 'Try: ls  →  cd experience  →  cat rbc.txt', cls: 'tc-dim' },
        ],
        newCwd: cwd,
      };

    case 'pwd':
      return { lines: [{ text: cwd, cls: 'tc-cyan' }], newCwd: cwd };

    case 'whoami':
      return {
        lines: [{ text: 'Roshni Guha — CS + Math @ UW-Madison | SWE · Quant · ML', cls: 'tc-green' }],
        newCwd: cwd,
      };

    case 'echo':
      return { lines: [{ text: args.join(' '), cls: '' }], newCwd: cwd };

    case 'clear':
      return { lines: [], newCwd: cwd, clear: true };

    case 'ls': {
      const targetPath = arg ? resolvePath(cwd, arg) : cwd;
      const node = getNode(targetPath);
      if (!node) return { lines: [{ text: `ls: ${arg || '.'}: No such file or directory`, cls: 'tc-red' }], newCwd: cwd };
      if (node.type === 'file') return { lines: [{ text: arg, cls: '' }], newCwd: cwd };
      const items = node.children.map(name => {
        const childPath = targetPath === '/' ? '/' + name : targetPath + '/' + name;
        const childNode = getNode(childPath);
        return childNode?.type === 'dir'
          ? { text: name + '/', cls: 'tc-cyan' }
          : { text: name, cls: '' };
      });
      return { lines: items, newCwd: cwd };
    }

    case 'cd': {
      if (!arg || arg === '~') return { lines: [], newCwd: '/' };
      const targetPath = resolvePath(cwd, arg);
      const node = getNode(targetPath);
      if (!node) return { lines: [{ text: `cd: ${arg}: No such file or directory`, cls: 'tc-red' }], newCwd: cwd };
      if (node.type === 'file') return { lines: [{ text: `cd: ${arg}: Not a directory`, cls: 'tc-red' }], newCwd: cwd };
      return { lines: [], newCwd: targetPath };
    }

    case 'cat': {
      if (!arg) return { lines: [{ text: 'cat: missing operand', cls: 'tc-red' }], newCwd: cwd };
      const targetPath = resolvePath(cwd, arg);
      const node = getNode(targetPath);
      if (!node) return { lines: [{ text: `cat: ${arg}: No such file or directory`, cls: 'tc-red' }], newCwd: cwd };
      if (node.type === 'dir') return { lines: [{ text: `cat: ${arg}: Is a directory`, cls: 'tc-red' }], newCwd: cwd };
      const contentLines = node.content.split('\n').map(l => ({ text: l, cls: '' }));
      return { lines: contentLines, newCwd: cwd };
    }

    default:
      return {
        lines: [
          { text: `${cmd}: command not found. Type 'help' for available commands.`, cls: 'tc-red' },
        ],
        newCwd: cwd,
      };
  }
}

// ─── Copilot Suggestions ─────────────────────────────────────────────────────

function getCopilotData(cwd) {
  if (cwd === '/') {
    return {
      tip: 'You\'re at the root. Use ls to see what\'s available, then cd into a folder to explore.',
      suggestions: ['ls', 'cat about.txt', 'cd experience', 'cd projects', 'cd skills', 'cat contact.txt'],
    };
  }
  if (cwd === '/experience') {
    return {
      tip: 'You\'re in the experience folder. Each .txt file is a job or research role.',
      suggestions: ['ls', 'cat rbc.txt', 'cat quant-research.txt', 'cat peer-mentor.txt', 'cd ..'],
    };
  }
  if (cwd === '/projects') {
    return {
      tip: 'You\'re in the projects folder. Each file describes one of Roshni\'s projects.',
      suggestions: ['ls', 'cat rbc-ai-assistant.txt', 'cat uw-match.txt', 'cat smoking-predictor.txt', 'cat sp500-predictor.txt', 'cd ..'],
    };
  }
  if (cwd === '/skills') {
    return {
      tip: 'You\'re in the skills folder. Check out languages, frameworks, tools, and concepts.',
      suggestions: ['ls', 'cat languages.txt', 'cat frameworks.txt', 'cat tools.txt', 'cat concepts.txt', 'cd ..'],
    };
  }
  return {
    tip: `You're in ${cwd}. Try ls to see files, cat <file> to read one, or cd .. to go back.`,
    suggestions: ['ls', 'cd ..', 'pwd'],
  };
}

// ─── Component ────────────────────────────────────────────────────────────────

function PromptLabel({ cwd }) {
  return (
    <span className="terminal-prompt-display">
      <span className="prompt-user">roshni</span>
      <span className="prompt-sep">@</span>
      <span className="prompt-host">uw-madison</span>
      <span className="prompt-sep">:</span>
      <span className="prompt-path">{cwdDisplay(cwd)}</span>
      <span className="prompt-dollar"> $ </span>
    </span>
  );
}

const WELCOME = [
  { text: 'Welcome to Roshni\'s interactive portfolio terminal.', cls: 'tc-green' },
  { text: 'Type \'help\' to see available commands, or just start exploring!', cls: 'tc-dim' },
  { text: '' },
  { text: 'Quick start: ls → cd experience → cat rbc.txt', cls: 'tc-cyan' },
  { text: '' },
];

export default function Terminal() {
  const [history, setHistory] = useState(WELCOME);
  const [input, setInput] = useState('');
  const [cwd, setCwd] = useState('/');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);

  const outputRef = useRef(null);
  const inputRef = useRef(null);

  const copilot = getCopilotData(cwd);

  // Auto-scroll
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input on mount and click
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const submit = useCallback(() => {
    const raw = input.trim();

    // Add prompt line to history
    const promptEntry = {
      text: `${cwdDisplay(cwd)} $ ${raw}`,
      cls: 't-prompt',
      isPrompt: true,
      cwd,
    };

    if (!raw) {
      setHistory(prev => [...prev, promptEntry, { text: '' }]);
      setInput('');
      return;
    }

    const result = processCommand(raw, cwd);

    if (result.clear) {
      setHistory(WELCOME);
    } else {
      setHistory(prev => [...prev, promptEntry, ...result.lines, { text: '' }]);
    }

    setCwd(result.newCwd);
    setCmdHistory(prev => [raw, ...prev.slice(0, 49)]);
    setHistoryIdx(-1);
    setInput('');
  }, [input, cwd]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      submit();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(historyIdx + 1, cmdHistory.length - 1);
      setHistoryIdx(next);
      if (cmdHistory[next] !== undefined) setInput(cmdHistory[next]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = historyIdx - 1;
      if (next < 0) {
        setHistoryIdx(-1);
        setInput('');
      } else {
        setHistoryIdx(next);
        setInput(cmdHistory[next] || '');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Simple tab autocomplete: match filenames in cwd
      const parts = input.split(' ');
      const partial = parts[parts.length - 1];
      if (!partial) return;

      const node = getNode(cwd);
      if (!node || node.type !== 'dir') return;

      const matches = node.children.filter(c => c.startsWith(partial));
      if (matches.length === 1) {
        parts[parts.length - 1] = matches[0];
        setInput(parts.join(' '));
      }
    }
  };

  const fillSuggestion = (cmd) => {
    setInput(cmd);
    inputRef.current?.focus();
  };

  return (
    <div className="terminal-page">
      {/* Main Terminal */}
      <div className="terminal-window" onClick={() => inputRef.current?.focus()}>
        {/* Title Bar */}
        <div className="terminal-titlebar">
          <div className="terminal-dots">
            <span className="dot-red" />
            <span className="dot-yellow" />
            <span className="dot-green" />
          </div>
          <span className="terminal-title-text">bash — roshni@uw-madison: {cwdDisplay(cwd)}</span>
        </div>

        {/* Output */}
        <div className="terminal-output" ref={outputRef}>
          {history.map((line, i) => {
            if (line.isPrompt) {
              return (
                <div key={i} className="t-line t-prompt">
                  <span className="prompt-user">roshni</span>
                  <span className="prompt-sep">@</span>
                  <span className="prompt-host">uw-madison</span>
                  <span className="prompt-sep">:</span>
                  <span className="prompt-path">{cwdDisplay(line.cwd)}</span>
                  <span className="prompt-dollar"> $ </span>
                  <span>{line.text.replace(`${cwdDisplay(line.cwd)} $ `, '')}</span>
                </div>
              );
            }
            return (
              <div key={i} className={`t-line ${line.cls || ''}`}>
                {line.text || '\u00A0'}
              </div>
            );
          })}
        </div>

        {/* Input Row */}
        <div className="terminal-input-row">
          <PromptLabel cwd={cwd} />
          <input
            ref={inputRef}
            className="terminal-input"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            placeholder="type a command..."
          />
        </div>
      </div>

      {/* Copilot Panel */}
      <aside className="copilot-panel">
        <div className="copilot-header">copilot</div>

        {/* Context tip */}
        <div className="copilot-card">
          <div className="copilot-card-title">context</div>
          <p className="copilot-tip">{copilot.tip}</p>
        </div>

        {/* Suggestions */}
        <div className="copilot-card">
          <div className="copilot-card-title">try these</div>
          <div className="copilot-suggestions">
            {copilot.suggestions.map((s, i) => (
              <button key={i} className="copilot-suggestion" onClick={() => fillSuggestion(s)}>
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Command reference */}
        <div className="copilot-card">
          <div className="copilot-card-title">commands</div>
          <div className="cmd-ref-list">
            {[
              ['ls', 'list files'],
              ['cd', 'change dir'],
              ['cat', 'read file'],
              ['pwd', 'where am I?'],
              ['whoami', 'about Roshni'],
              ['clear', 'clear screen'],
              ['help', 'all commands'],
            ].map(([name, desc]) => (
              <div key={name} className="cmd-ref-item">
                <span className="cmd-ref-name">{name}</span>
                <span className="cmd-ref-desc">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
