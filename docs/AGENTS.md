# Agent Reference

All agents live in `~/.claude/agents/` and are available globally across all projects.

## How Agents Work

- Claude **auto-delegates** to agents based on the `description` field
- You can also invoke explicitly: "use the adversarial-coach agent on this code"
- Agents run in **isolated context** — they don't see your conversation history
- Agents **cannot spawn other agents** (one level only)
- Results return as a summary to your main conversation

## Agent Catalog

### adversarial-coach
| | |
|---|---|
| **Model** | Opus |
| **Effort** | High |
| **Tools** | Read, Grep, Glob, Bash (read-only) |
| **Max Turns** | 15 |
| **Use when** | After any significant code change |

Tries to BREAK your code. Never praises or validates. Every issue includes a concrete exploit scenario with exact inputs that trigger it. The adversarial mindset catches bugs that collaborative review misses because it doesn't share the implementer's blind spots.

### red-team
| | |
|---|---|
| **Model** | Opus |
| **Effort** | Max |
| **Tools** | Read, Grep, Glob, Bash (read-only) |
| **Max Turns** | 20 |
| **Use when** | Auth, billing, API, infra, or security-sensitive code |

You provide: the code + what security measures you added + what you assume is handled upstream. The red team specifically attacks YOUR STATED ASSUMPTIONS. This is far more effective than generic "find security issues" because it targets overconfidence — the most dangerous blind spot.

### architect
| | |
|---|---|
| **Model** | Opus |
| **Effort** | Max |
| **Tools** | Read, Grep, Glob (read-only, no code writing) |
| **Max Turns** | 20 |
| **Use when** | Design decisions, new features, system refactoring |

Produces Architecture Decision Records (ADRs). Always compares 3+ approaches before recommending. Identifies one-way doors (hard to reverse) vs two-way doors (easy to change). Never writes implementation code.

### tree-of-thought
| | |
|---|---|
| **Model** | Opus |
| **Effort** | Max |
| **Max Turns** | 25 |
| **Use when** | Complex problems with multiple valid solutions |

Mandatory 4-phase process: Decompose, Branch (min 3 approaches), Evaluate, Select. The critical constraint: "Do not start implementing until you have explicitly compared all branches." Prevents satisficing (committing to the first viable path).

### constitutional-reviewer
| | |
|---|---|
| **Model** | Opus |
| **Effort** | High |
| **Max Turns** | 30 |
| **Use when** | Critical code paths — auth, billing, data pipelines, core business logic |

Multi-pass self-review with two modes. **Surgical mode** (default): find exactly 3 weaknesses, fix only those, compare before/after (17-24% improvement). **Systematic mode**: review against 6 constitutional principles (correctness, security, performance, error handling, concurrency, testability). Merges the former rise-refiner into one agent.

### ensemble-judge
| | |
|---|---|
| **Model** | Opus |
| **Effort** | High |
| **Tools** | Read, Grep, Glob, Bash |
| **Max Turns** | 15 |
| **Use when** | Multiple competing solutions exist |

Evaluates N solutions through binary gates (build? tests? security?) then weighted scoring (correctness 3x, simplicity 2x, testability 2x, maintainability 1x, performance 1x, defensiveness 1x). Never declares a tie.

### socratic-questioner
| | |
|---|---|
| **Model** | Sonnet |
| **Effort** | Medium |
| **Tools** | Read, Grep, Glob (read-only) |
| **Max Turns** | 10 |
| **Use when** | Before any non-trivial implementation |

6 mandatory questions before code: minimal change surface, hidden assumptions, what breaks if wrong, existing reusable code, what caller actually needs, simplest possible thing. Then 3 self-verification questions. Prevents over-engineering.

### hypothesis-tester
| | |
|---|---|
| **Model** | Sonnet |
| **Effort** | High |
| **Max Turns** | 15 |
| **Use when** | Pure functions, parsers, serializers, data transformations |

Property-based testing: instead of `assert f(2,3) == 5`, tests properties like `f(a,b) == f(b,a)` across 1000+ random inputs. Supports Hypothesis (Python), fast-check (JS/TS), proptest (Rust), jqwik (Java). Has found real bugs in NumPy and Pandas.

### multi-perspective-reviewer
| | |
|---|---|
| **Model** | Sonnet |
| **Effort** | High |
| **Max Turns** | 20 |
| **Use when** | Important PRs, thorough multi-angle review needed |

3 isolated review passes with BLINDERS: Security Auditor (only security), Performance Engineer (only perf), Test Coverage Analyst (only missing tests). Single-domain focus produces deeper analysis than multi-domain review. Synthesis step deduplicates and prioritizes.

### researcher
| | |
|---|---|
| **Model** | Sonnet |
| **Effort** | High |
| **Max Turns** | Unlimited |
| **Use when** | Any research task |

7 depth levels: `surface` (30s, 1-2 searches), `basic` (1-2min), `deep` (3-5min), `in-depth` (5-10min), `ultra` (10-20min, parallel sub-agents), `nuclear` (20-40min, exhaustive), `overkill` (unlimited). Supports pluggable web search.

## Usage Patterns

### After implementing a feature
```
Use the adversarial-coach to review this implementation
```

### Before a security-sensitive commit
```
Use the red-team agent. Here's what I did for security:
- Added JWT auth on all endpoints
- Input validation via zod schemas
- Rate limiting at 100 req/min
Attack my assumptions.
```

### For a complex design decision
```
Use the architect agent to evaluate approaches for [problem].
We need to decide between [A], [B], and [C].
```

### For maximum code quality
```
Use the constitutional-reviewer on src/auth/ — this is critical code.
```

### For frontend/UI work
```
Build a landing page for [product] with animated hero, feature grid, and testimonials
```
The `ui-architect` auto-triggers. It fetches components from 21st.dev/shadcn/magicui, adds animations, ensures responsive + dark mode. `design-critic` auto-runs after to score visual quality.

---

## UI/Design Agents

### ui-architect
| | |
|---|---|
| **Model** | Opus |
| **Effort** | High |
| **Max Turns** | 30 |
| **Use when** | Any frontend task — auto-triggers on UI/component/layout work |

Elite UI/UX architect. Fetches real components from 21st.dev, shadcn, magicui, animotion, and aceternity MCP servers instead of writing from scratch. Adds micro-interactions to every interactive element. Ensures responsive breakpoints, dark mode, and WCAG AA accessibility. Never produces "AI slop" — bold, distinctive visual choices only.

### design-critic
| | |
|---|---|
| **Model** | Sonnet |
| **Effort** | High |
| **Max Turns** | 15 |
| **Use when** | After any frontend implementation — auto-triggers |

Visual design reviewer that scores UI output 1-10 across layout, color, interactivity, animation, responsiveness, and polish. Every issue includes specific file:element references and fix suggestions. If score < 6, suggests component library alternatives.

### spec-interviewer
| | |
|---|---|
| **Model** | Opus |
| **Effort** | High |
| **Max Turns** | 60 |
| **Use when** | Before any non-trivial feature implementation |

Interviews you using AskUserQuestion before writing any code. Runs silent recon first (reads package.json, scans directory structure, reads 3-5 relevant files), then asks 5 rounds of probing questions about requirements, edge cases, constraints, UX, and error handling. Produces a structured SPEC.md with acceptance criteria, files to modify, wiring checklist, and API contracts — executable by a fresh session without re-reading the codebase.
