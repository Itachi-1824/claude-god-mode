<p align="center">
  <h1 align="center">&#x1F451; Claude God Mode</h1>
  <p align="center">
    <strong>The ultimate Claude Code optimization toolkit.</strong><br/>
    13 AI agents &#x2022; Autonomous token pipeline &#x2022; 60-99% token savings &#x2022; Opus-level reasoning &#x2022; Elite UI design
  </p>
  <p align="center">
    <a href="#-quick-start"><img src="https://img.shields.io/badge/setup-2%20minutes-brightgreen?style=flat-square" alt="Setup Time"></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="License"></a>
    <a href="#-token-savings"><img src="https://img.shields.io/badge/token%20savings-60--99%25-orange?style=flat-square" alt="Token Savings"></a>
    <a href="#-agents"><img src="https://img.shields.io/badge/agents-13-purple?style=flat-square" alt="Agents"></a>
    <img src="https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey?style=flat-square" alt="Platform">
  </p>
</p>

---

Stop burning tokens. Start shipping code.

Claude God Mode is a drop-in optimization toolkit for [Claude Code](https://claude.ai/code) that combines **autonomous token reduction** with **Opus-level reasoning patterns** — giving you 2-10x more usage from your plan while producing higher quality code.

## &#x26A1; What You Get

### Token Pipeline (Autonomous)
Every layer runs automatically — no manual intervention after setup.

```
Your Prompt
    |
    +-  [RTK]               Bash output compressed 60-90%
    |
    +-  [codebase-memory]   Code graph queries replace file reads (99%)
    |
    +-  [Context Mode]      Tool outputs sandboxed in SQLite (98%)
    |
    +-  [MCP Compressor]    JSON/data auto-compressed (25-66%)
    |
    +-  [Cozempic]          Context auto-pruned at 4 thresholds
    |
    +-  [Headroom]          AST-aware prompt compression (~50%)
    |
    v
Claude sees ONLY what it needs
```

### Quality Agents (On-Demand)
13 specialized agents that push Claude's reasoning to its ceiling.

| Agent | What It Does |
|-------|-------------|
| &#x1F534; `adversarial-coach` | Tries to **break** your code — finds concrete exploits |
| &#x1F534; `red-team` | Attacks your **stated security assumptions** |
| &#x1F7E3; `architect` | System design + ADRs, **never writes code** |
| &#x1F535; `tree-of-thought` | Explores **3+ approaches** before committing |
| &#x1F7E0; `rise-refiner` | Generate &#x2192; Critique &#x2192; Fix &#x2192; Compare loop |
| &#x1F535; `constitutional-reviewer` | 4-pass: write &#x2192; critique &#x2192; rewrite &#x2192; verify |
| &#x1F7E1; `ensemble-judge` | Picks the **best** from competing solutions |
| &#x1F7E2; `socratic-questioner` | 6 mandatory questions **before** any code |
| &#x1F7E2; `hypothesis-tester` | Property-based tests with 1000+ random inputs |
| &#x1F535; `multi-perspective-reviewer` | 3 isolated passes: security, perf, coverage |
| &#x1F7E6; `researcher` | Multi-depth research: `surface` to `overkill` |
| &#x1F7E3; `ui-architect` | **Auto-triggers on frontend tasks.** Fetches from component libraries, adds animations |
| &#x1F7E3; `design-critic` | **Auto-critiques UI** after implementation. Scores visual quality 1-10 |

## &#x1F680; Quick Start

### One-Line Install (Recommended)

**macOS / Linux:**
```bash
curl -fsSL https://raw.githubusercontent.com/Itachi-1824/claude-god-mode/main/install.sh | bash
```

**Windows (PowerShell):**
```powershell
irm https://raw.githubusercontent.com/Itachi-1824/claude-god-mode/main/install.ps1 | iex
```

### Manual Install

```bash
git clone https://github.com/Itachi-1824/claude-god-mode.git
cd claude-god-mode
# Copy agents
cp agents/*.md ~/.claude/agents/
# Copy CLAUDE.md template (review and customize first!)
cp config/CLAUDE.md.template ~/.claude/CLAUDE.md
# Copy .claudeignore template to your projects
cp config/.claudeignore.template /path/to/your/project/.claudeignore
```

## &#x1F4CA; Token Savings

Measured savings from real-world usage:

| Layer | Tool | Savings | What It Targets |
|-------|------|---------|-----------------|
| CLI Output | [RTK](https://github.com/rtk-ai/rtk) | 60-90% | Bash command output noise |
| Code Navigation | [codebase-memory](https://github.com/DeusData/codebase-memory-mcp) | 99% | File reads replaced by graph queries |
| Tool Output | [Context Mode](https://github.com/mksglu/context-mode) | 98% | Tool output sandboxed, not dumped |
| Data Compression | [MCP Compressor](https://github.com/atlassian-labs/mcp-compressor) | 70-95% | MCP responses compressed + TOON |
| Context Pruning | [Cozempic](https://github.com/Ruya-AI/cozempic) | 30-70% | Stale context auto-cleaned |
| Input Compression | [Headroom](https://github.com/chopratejas/headroom) | ~50% | AST-aware prompt compression |
| Output Verbosity | [Caveman](https://github.com/JuliusBrussee/caveman) | 60-75% | Terse, code-focused responses |
| Code Navigation | [Serena](https://github.com/oraios/serena) | Significant | LSP-powered symbol navigation |
| Library Docs | [Docfork](https://github.com/docfork/docfork) | Moderate | 9000+ library docs on demand |
| Session Memory | [claude-mem](https://github.com/thedotmack/claude-mem) | Significant | Persistent cross-session memory + code exploration |
| Security Analysis | [Semgrep](https://semgrep.dev/) | N/A (quality) | 5000+ rules, catches security bugs at write-time |

**Combined effect:** 2-10x more usage from the same plan.

## &#x1F916; Agents Deep Dive

All agents live in `~/.claude/agents/` and are available globally. Claude auto-delegates to them based on the task, or you can invoke them explicitly.

### Adversarial Coach &#x1F534;
```
Model: Opus | Effort: High | Tools: Read-only
```
Tries to **break** your code. Never praises, never approves. Every issue comes with a concrete exploit scenario. Use after any significant implementation.

### Red Team &#x1F534;
```
Model: Opus | Effort: Max | Tools: Read-only
```
You tell it what security measures you added. It specifically attacks those stated assumptions. Finds blind spots that generic security review misses.

### Architect &#x1F7E3;
```
Model: Opus | Effort: Max | Tools: Read-only
```
System design only. Produces ADRs (Architecture Decision Records). Compares 3+ approaches before recommending. **Never writes implementation code.**

### Tree of Thought &#x1F535;
```
Model: Opus | Effort: Max
```
Mandatory 4-phase process: Decompose &#x2192; Branch (min 3 approaches) &#x2192; Evaluate &#x2192; Select. **Will not start implementing until all branches are compared.**

### RISE Refiner &#x1F7E0;
```
Model: Opus | Effort: High
```
Recursive self-improvement: Generate &#x2192; Critique (exactly 3 weaknesses) &#x2192; Fix only those 3 &#x2192; Compare before/after. 17-24% measured improvement.

### Constitutional Reviewer &#x1F535;
```
Model: Opus | Effort: High
```
4-pass review: Write &#x2192; Critique against 6 principles &#x2192; Rewrite fixes &#x2192; Verify all violations resolved. Must find at least 1 issue (if zero found, review wasn't thorough enough).

### Researcher &#x1F7E6;
```
Model: Sonnet | No turn limit
```
Multi-depth research with 7 levels: `surface`, `basic`, `deep`, `in-depth`, `ultra`, `nuclear`, `overkill`. Each level maps to specific search strategies and agent patterns. Supports pluggable web search.

### [See all agents &#x2192;](docs/AGENTS.md)

## &#x2699;&#xFE0F; What Gets Installed

| Component | Location | Purpose |
|-----------|----------|---------|
| 13 agents | `~/.claude/agents/` | Quality + reasoning + UI design patterns |
| CLAUDE.md | `~/.claude/CLAUDE.md` | Lean config (~60 lines) |
| Hooks | `~/.claude/settings.json` | Auto-index, auto-prune, graph-first nudge |
| MCP servers | `~/.claude.json` | Code graph, context sandbox, UI libraries |
| .claudeignore | Per-project | Prevent reading junk files |

### Optional Components

The installer asks before installing each of these:

| Tool | What | Install |
|------|------|---------|
| RTK | CLI output compression | `cargo install --git https://github.com/rtk-ai/rtk` |
| codebase-memory | Code knowledge graph | Binary download |
| Context Mode | Tool output sandboxing | `npm install -g context-mode` |
| MCP Compressor | MCP response compression | `pip install mcp-compressor` |
| Cozempic | Context auto-pruning | `pip install cozempic` |
| Headroom | Prompt compression | `pip install "headroom-ai[all]"` |
| Caveman | Terse output plugin | Via Claude Code plugin marketplace |
| Serena | LSP code navigation | `uv tool install serena-agent@latest` |
| Docfork | Library documentation | `npm install -g docfork` |
| Graphify | Multi-modal code graph | `pip install graphifyy` |
| Semgrep | Security analysis | Via Claude Code plugin marketplace |
| claude-mem | Cross-session memory | Via Claude Code plugin marketplace |

## &#x1F3A8; UI/Design Stack

God Mode turns Claude into an elite frontend designer with autonomous visual feedback loops.

### Component Libraries (MCP Servers)
| Server | What You Get |
|--------|-------------|
| [21st.dev Magic](https://github.com/21st-dev/magic-mcp) | `/ui <description>` &#x2192; production-ready components |
| [shadcn/ui](https://ui.shadcn.com/docs/registry/mcp) | Official component registry, zero hallucinations |
| [Magic UI](https://magicui.design/docs/mcp) | 60+ animated components (beams, particles, meteors) |
| [Animotion](https://animotion-mcp.github.io/) | 745 CSS animations + 9,000 SVG icons |
| [Dembrandt](https://github.com/dembrandt/dembrandt) | Extract design tokens from any website |
| [Aceternity UI](https://github.com/rudra016/aceternityui-mcp) | 200+ cinematic, 3D, parallax components |
| [Glance](https://github.com/DebugBase/glance) | Browser screenshots — Claude **sees** what it built |

### Design Agents
| Agent | What It Does |
|-------|-------------|
| `ui-architect` | **Auto-triggers on any frontend task.** Fetches components from libraries, adds animations, ensures responsive + dark mode |
| `design-critic` | **Auto-triggers after UI implementation.** Scores visual quality, catches inconsistencies, suggests polish |

### How It Works Autonomously
1. You say "build a landing page for X"
2. `ui-architect` agent auto-activates (description-based routing)
3. It fetches components from 21st.dev/shadcn/magicui instead of writing from scratch
4. Adds animations from animotion + magicui
5. `design-critic` auto-runs after implementation
6. Visual score + specific fix suggestions returned

> **Note:** 21st.dev requires a free API key from [21st.dev](https://21st.dev). Replace `REPLACE_WITH_YOUR_21STDEV_API_KEY` in `~/.claude.json` after install.

## &#x1F4E6; Per-Project Setup

After installing God Mode globally, each new project needs:

### 1. Code Graph (one-time per repo)
```bash
# In your project directory, tell Claude:
"index this project"
# Or manually:
codebase-memory-mcp index
```
The graph auto-updates via PostToolUse hooks after every file edit.

### 2. Graphify (one-time per repo)
```bash
# In your project directory:
graphify .
# Or via Claude:
/graphify .
```
Auto-updates via PostToolUse hooks.

### 3. .claudeignore (recommended)
```bash
# Copy the template to your project root:
cp ~/.claude-god-mode/.claudeignore.template /path/to/project/.claudeignore
```
Prevents Claude from reading `node_modules/`, `dist/`, build artifacts, etc.

## &#x1F3D7;&#xFE0F; Architecture

```
~/.claude/
  +-  CLAUDE.md              59 lines, ~1.2k tokens (was 252 lines / 3.6k)
  +-  settings.json          Hooks: PreToolUse, PostToolUse, SessionStart,
  |                          PreCompact, PostCompact, Stop
  +-  agents/                13 specialized agents (on-demand, not always loaded)
  +-  skills/                Plugin skills (graphify, caveman, etc.)
  +-  plugins/               Enabled: pyright-lsp, rust-analyzer-lsp, semgrep,
  |                          context7, claude-mem, superpowers, ECC, caveman
  +-  projects/              Per-project memory and config

~/.claude.json               User MCP: codebase-memory, context-mode, headroom,
                             serena, docfork, 21st-dev-magic, shadcn, magicui,
                             animotion, dembrandt, aceternity, glance
```

## &#x1F4AC; Philosophy

1. **Autonomous over manual** — tools that intercept and optimize automatically beat instructions that Claude might ignore
2. **Agents over CLAUDE.md** — specialized agents load on-demand (~0 tokens when unused) vs. CLAUDE.md rules (loaded every turn)
3. **Hooks over suggestions** — PreToolUse hooks that nudge behavior are stronger than polite instructions
4. **Evidence over assertions** — every verification requires proof (test output, type checker results), not "this should work"
5. **Lean base, rich extensions** — CLAUDE.md stays under 60 lines; complexity lives in agents and hooks

## &#x1F91D; Contributing

PRs welcome! Areas we're looking for help:

- [ ] New agents for specific domains (ML, mobile, embedded, etc.)
- [ ] Search provider integrations
- [ ] Benchmarks comparing with/without God Mode
- [ ] Platform-specific install improvements
- [ ] Documentation translations

## &#x1F4DD; License

[MIT](LICENSE) &#x2014; do whatever you want with it.

---

<p align="center">
  <sub>Built by <a href="https://github.com/Itachi-1824">@Itachi-1824</a> after hitting Claude Code limits one too many times.</sub>
</p>
