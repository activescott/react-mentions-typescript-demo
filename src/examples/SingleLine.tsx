import * as React from 'react'
import { Mention, MentionsInput, SuggestionDataItem } from 'react-mentions'

import defaultMentionStyle from './defaultMentionStyle'
import defaultStyle from './defaultStyle'

import provideExampleValue from './higher-order'

interface SingleLineProps {
  data: SuggestionDataItem[]
  value?: string
  onChange?: () => void
  onAdd?: () => void
}

const SingleLine: React.StatelessComponent<SingleLineProps> = (props) => {
  return (
    <div className="single-line">
      <h3>Single line input</h3>
      <MentionsInput
        singleLine
        placeholder={"Mention people using '@'"}
        value={props.value}
        onChange={props.onChange}
        style={defaultStyle}
      >
        <Mention 
          trigger="@"
          data={props.data} 
          onAdd={props.onAdd}
          style={defaultMentionStyle}
          />
      </MentionsInput>
    </div>
  )
}

const asExample = provideExampleValue<SingleLineProps>('')
export default asExample(SingleLine)
