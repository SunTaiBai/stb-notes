import type { Plugin } from 'vite'
import { getReadingTime } from '../theme/components/PageInfo/util'

export function replacer(code: string, value: string, key: string, insert: 'head' | 'tail' | 'none' = 'none') {
  const START = `<!--${key}_STARTS-->`
  const END = `<!--${key}_ENDS-->`
  const regex = new RegExp(`${START}[\\s\\S]*?${END}`, 'im')

  const target = value ? `${START}\n${value}\n${END}` : `${START}${END}`

  if (!code.match(regex)) {
    if (insert === 'none')
      return code
    else if (insert === 'head')
      return `${target}\n\n${code}`
    else
      return `${code}\n\n${target}`
  }
  else {
    return ''
  }
}

export function MarkdownTransform(): Plugin {
  return {
    name: 'suntaibai-md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.match(/\.md\b/))
        return null
      code = code.replace(/https?:\/\/notes\.sunguojia\.cn\//g, '/')
      const [_name] = id.split('/').slice(-2)
      if (_name === 'docs')
        return code

      if (_name === 'nav')
        return code
      const { footer } = await getDocsMarkdown()
      code = replacer(code, footer, 'FOOTER', 'tail')
      const { readTime, words } = getReadingTime(code)
      code = code
        .replace(/(#\s.+?\n)/, `$1\n\n<PageInfo readTime="${readTime}" words="${words}"/>\n`)

      return code
    },
  }
}

export async function getDocsMarkdown() {
  const ContributorsSection = `## Contributors
  <Contributors/>`

  const CopyRightSection = `
  <CopyRight/>`

  const GitTalk = '<GitTalk/>'

  const footer = `${ContributorsSection}\n${CopyRightSection}\n${GitTalk}\n`

  return {
    footer,
  }
}
