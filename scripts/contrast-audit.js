#!/usr/bin/env node
/**
 * Quick Design Token Contrast Auditor for Wasteland Front
 * Checks key color combinations against WCAG 2.2 standards.
 *
 * Run with: node scripts/contrast-audit.js
 */

const colors = {
  // From :root in global.css
  bg: '#0b1220',
  surface: '#111a2e',
  surface2: '#1a253f',
  text: '#e5e9f2',
  textMuted: '#8a96b0',
  accent: '#f59e0b',
  btnPrimaryBg: '#7c2d12',
  btnPrimaryText: '#ffffff',
  btnSecondaryText: '#e5e9f2',
};

// Simple relative luminance + contrast calculation (WCAG formula)
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function luminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function contrastRatio(color1, color2) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  if (!rgb1 || !rgb2) return 0;

  const l1 = luminance(rgb1.r, rgb1.g, rgb1.b);
  const l2 = luminance(rgb2.r, rgb2.g, rgb2.b);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function getLevel(ratio) {
  if (ratio >= 7) return 'AAA';
  if (ratio >= 4.5) return 'AA';
  if (ratio >= 3) return 'AA Large';
  return 'FAIL';
}

console.log('\n=== Wasteland Front Contrast Audit ===\n');

const checks = [
  { name: 'Body text on bg', fg: colors.text, bg: colors.bg },
  { name: 'Muted text on bg', fg: colors.textMuted, bg: colors.bg },
  { name: 'Accent on surface', fg: colors.accent, bg: colors.surface },
  { name: 'Primary button (white on deep amber)', fg: colors.btnPrimaryText, bg: colors.btnPrimaryBg },
  { name: 'Secondary button text on surface', fg: colors.btnSecondaryText, bg: colors.surface },
  { name: 'Table header (accent on surface-2)', fg: colors.accent, bg: colors.surface2 },
  { name: 'Quick Summary accent on surface', fg: colors.accent, bg: colors.surface },
];

let passed = 0;
let failed = 0;

checks.forEach(check => {
  const ratio = contrastRatio(check.fg, check.bg);
  const level = getLevel(ratio);
  const status = level === 'FAIL' ? '❌' : '✅';
  
  console.log(`${status} ${check.name}`);
  console.log(`   Ratio: ${ratio.toFixed(2)}:1  →  ${level}`);
  console.log(`   ${check.fg} on ${check.bg}\n`);

  if (level === 'FAIL') failed++;
  else passed++;
});

console.log(`Summary: ${passed} passed, ${failed} failed\n`);

if (failed > 0) {
  console.log('⚠️  Some combinations failed WCAG AA. Review the tokens above.\n');
  process.exit(1);
} else {
  console.log('✅ All checked combinations meet at least AA standards.\n');
}