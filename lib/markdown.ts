// Professioneller Markdown zu HTML Parser
export function parseMarkdown(markdown: string): string {
  let html = markdown

  // Escape HTML
  const escapeHtml = (text: string) => {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
  }

  // Split in Zeilen für präziseres Parsing
  const lines = html.split('\n')
  const parsedLines: string[] = []
  let inCodeBlock = false
  let inList = false
  let listType: 'ul' | 'ol' | null = null

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i]

    // Code Blocks
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        parsedLines.push('</code></pre>')
        inCodeBlock = false
      } else {
        parsedLines.push('<pre class="code-block"><code>')
        inCodeBlock = true
      }
      continue
    }

    if (inCodeBlock) {
      parsedLines.push(escapeHtml(line))
      continue
    }

    // Headers (müssen VOR Bold kommen)
    if (line.match(/^### /)) {
      if (inList) {
        parsedLines.push(listType === 'ol' ? '</ol>' : '</ul>')
        inList = false
        listType = null
      }
      const text = line.substring(4).trim()
      const id = text.toLowerCase().replace(/[^a-z0-9äöüß]+/g, '-').replace(/^-|-$/g, '')
      parsedLines.push(`<h3 id="${id}">${text}</h3>`)
      continue
    }

    if (line.match(/^## /)) {
      if (inList) {
        parsedLines.push(listType === 'ol' ? '</ol>' : '</ul>')
        inList = false
        listType = null
      }
      const text = line.substring(3).trim()
      const id = text.toLowerCase().replace(/[^a-z0-9äöüß]+/g, '-').replace(/^-|-$/g, '')
      parsedLines.push(`<h2 id="${id}">${text}</h2>`)
      continue
    }

    if (line.match(/^# /)) {
      if (inList) {
        parsedLines.push(listType === 'ol' ? '</ol>' : '</ul>')
        inList = false
        listType = null
      }
      const text = line.substring(2).trim()
      parsedLines.push(`<h1>${text}</h1>`)
      continue
    }

    // Unordered Lists
    if (line.match(/^- /)) {
      if (!inList || listType !== 'ul') {
        if (inList) {
          parsedLines.push('</ol>')
        }
        parsedLines.push('<ul>')
        inList = true
        listType = 'ul'
      }
      let listContent = line.substring(2).trim()
      // Bold in Listen
      listContent = listContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Links in Listen
      listContent = listContent.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      parsedLines.push(`<li>${listContent}</li>`)
      continue
    }

    // Ordered Lists
    if (line.match(/^\d+\. /)) {
      if (!inList || listType !== 'ol') {
        if (inList) {
          parsedLines.push('</ul>')
        }
        parsedLines.push('<ol>')
        inList = true
        listType = 'ol'
      }
      let listContent = line.replace(/^\d+\. /, '').trim()
      // Bold in Listen
      listContent = listContent.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Links in Listen
      listContent = listContent.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      parsedLines.push(`<li>${listContent}</li>`)
      continue
    }

    // Close lists if next line is not a list item
    if (inList && !line.match(/^(-|\d+\.)\s/)) {
      parsedLines.push(listType === 'ol' ? '</ol>' : '</ul>')
      inList = false
      listType = null
    }

    // Empty lines
    if (line.trim() === '') {
      parsedLines.push('')
      continue
    }

    // Regular paragraphs
    let paragraph = line

    // Bold (** text **)
    paragraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')

    // Italic (* text *)
    paragraph = paragraph.replace(/\*(.*?)\*/g, '<em>$1</em>')

    // Links
    paragraph = paragraph.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')

    // Inline Code
    paragraph = paragraph.replace(/`(.*?)`/g, '<code>$1</code>')

    // Checkmarks
    paragraph = paragraph.replace(/✓/g, '<span class="text-green-600 font-bold">✓</span>')

    parsedLines.push(`<p>${paragraph}</p>`)
  }

  // Close any open lists
  if (inList) {
    parsedLines.push(listType === 'ol' ? '</ol>' : '</ul>')
  }

  return parsedLines.join('\n')
}

// Extrahiere H2 Headings für Inhaltsverzeichnis
export function extractHeadings(content: string): { id: string; text: string }[] {
  const headings: { id: string; text: string }[] = []
  const regex = /^## (.+)$/gm
  let match

  while ((match = regex.exec(content)) !== null) {
    const text = match[1].trim()
    const id = text.toLowerCase().replace(/[^a-z0-9äöüß]+/g, '-').replace(/^-|-$/g, '')
    headings.push({ id, text })
  }

  return headings
}
