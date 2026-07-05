@AGENTS.md

## Claude Code specifics

- **Delegate, don't do.** Project subagents live in `.claude/agents/`; the routing table is in `Docs/engineering/workflow.md` § "Delegation & model routing". Standard story flow: `game-researcher` → `page-writer` / `calculator-engineer` → `acceptance-reviewer` → open PR → `review-responder`. Use `build-verifier` for mechanical checks instead of running them in the main context. You (the main session) keep planning, synthesis, RESEARCH.md updates, and merges.
- Only `game-researcher` may spawn nested child agents, and only for wide fan-out tasks; children must not spawn further.
- The three rules that matter most: (1) research before writing, verify before publishing; (2) RESEARCH.md is the only backlog; (3) branch per story → PR → Copilot review → reply & resolve every comment → merge when clean.
