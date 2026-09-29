// 门禁脚本自测共享工具：临时夹具目录 + 黑盒子进程执行。
// 三个 check-*.cjs 均支持可选位置参数指定扫描目录（默认 docs），
// 测试把好/坏样例写进夹具目录后以子进程跑脚本、断言 exit code 与输出关键词。
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

/** 建临时夹具（files: { 相对路径: 内容 }），fn 结束后整体清理 */
export const withFixture = async (files, fn) => {
  const dir = mkdtempSync(path.join(tmpdir(), 'gate-'))
  try {
    for (const [rel, content] of Object.entries(files)) {
      const p = path.join(dir, rel)
      mkdirSync(path.dirname(p), { recursive: true })
      writeFileSync(p, content)
    }
    return await fn(dir)
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
}

/** 黑盒跑门禁：node scripts/<name>.cjs <夹具目录> [args...] */
export const runGate = (name, dir, args = []) => {
  const r = spawnSync('node', [path.join(ROOT, 'scripts', `${name}.cjs`), dir, ...args], {
    encoding: 'utf8',
  })
  return { status: r.status, out: `${r.stdout}\n${r.stderr}` }
}
