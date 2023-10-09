import React from 'react'

interface FormattedStringProps {
  sentence: string
}

export const FormattedString: React.FC<FormattedStringProps> = ({
  sentence,
}) => {
  const wordToFormat = 'qazdev'
  const regex = new RegExp(`\\b${wordToFormat}\\b`, 'gi')

  const parts: (string | JSX.Element)[] = []

  let lastIndex = 0
  let match: RegExpExecArray | null
  while ((match = regex.exec(sentence)) !== null) {
    const { index } = match
    parts.push(sentence.slice(lastIndex, index))
    parts.push(
      <b key={index}>
        <span style={{ textTransform: 'lowercase', color: 'inherit' }}>
          <i>{match[0]}</i>
        </span>
      </b>,
    )
    lastIndex = index + match[0].length
  }
  parts.push(sentence.slice(lastIndex))

  return <>{parts}</>
}
