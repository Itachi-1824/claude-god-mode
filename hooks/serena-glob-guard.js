#!/usr/bin/env node
'use strict';

// Blocks Glob on code symbol patterns, suggests serena instead

const chunks = [];
process.stdin.on('data', d => chunks.push(d));
process.stdin.on('end', () => {
  try {
    const input = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    if (input.tool_name !== 'Glob') return process.exit(0);

    const pattern = (input.tool_input && input.tool_input.pattern) || '';

    // Pure extension globs are fine
    if (/^\*\*\/\*\.[a-z]+$/.test(pattern)) return process.exit(0);
    if (/^\*\.[a-z]+$/.test(pattern)) return process.exit(0);

    // Extract tokens from glob
    const cleaned = pattern.replace(/[*?{}[\]/]/g, ' ').trim();
    const tokens = cleaned.split(/\s+/).filter(t => t.length >= 3);

    // Skip directory/framework names
    const dirs = /^(src|lib|dist|build|test|tests|docs|node_modules|components|pages|api|utils|hooks|stores|types|models|config|assets|public|scripts)$/;
    const frameworks = /^(next|react|vue|svelte|angular|webpack|vite|jest|vitest|eslint|prettier|typescript|tailwind|prisma)$/;
    const filtered = tokens.filter(t => !dirs.test(t) && !frameworks.test(t) && !/^\.[a-z]+$/.test(t) && !/^[a-z]{1,6}$/.test(t));

    const symbols = filtered.filter(t => {
      if (/^[A-Z_]{3,}$/.test(t)) return false; // constants
      if (/^[a-z][a-z0-9]*(-[a-z0-9]+)+$/.test(t)) return false; // kebab-case filenames
      const isCamelCase = /^[a-z][a-zA-Z0-9]{3,}$/.test(t) && /[A-Z]/.test(t);
      const isPascalCase = /^[A-Z][a-zA-Z][a-zA-Z0-9]{1,}$/.test(t);
      return isCamelCase || isPascalCase;
    });

    if (symbols.length === 0) return process.exit(0);

    const output = {
      hookSpecificOutput: {
        hookEventName: 'PreToolUse',
        permissionDecision: 'deny',
        permissionDecisionReason: `Glob blocked: '${symbols.join(', ')}' looks like code symbol(s). Use mcp__serena__find_symbol with name_path_pattern='${symbols[0]}' instead. Glob is for file discovery by extension or directory, not symbol search.`,
        additionalContext: `Use serena find_symbol for symbol-based file discovery. For broad file patterns, use '**/*.ts' instead of symbol names in globs.`
      }
    };

    process.stdout.write(JSON.stringify(output) + '\n');
    process.exit(0);
  } catch (e) {
    process.exit(0);
  }
});
