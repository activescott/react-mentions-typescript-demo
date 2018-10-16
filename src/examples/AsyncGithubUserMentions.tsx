import * as React from 'react'
import { Mention, MentionsInput, SuggestionDataItem } from 'react-mentions'

import defaultMentionStyle from './defaultMentionStyle'
import defaultStyle from './defaultStyle'

import provideExampleValue from './higher-order'

function fetchUsers(query: string, callback: (users: Array<{display: string, id: string}>) => void) {
  if (!query) {
    return
  }
  fetch(`https://api.github.com/search/users?q=${query}`)
    .then(res => res.json())
    // Transform the users to what react-mentions expects
    .then(res =>
      (res.items as Array<{ login: string }>).map(user => ({ display: user.login, id: user.login }))
    )
    .then(callback)
}

interface AsyncGithubUserMentionsProps {
  value?: string
  data: SuggestionDataItem[]
  onChange?: () => void
}

const AsyncGithubUserMentions: React.StatelessComponent<AsyncGithubUserMentionsProps> = (props) => {
  return (
    <div className="async">
      <h3>Async Github user mentions</h3>
      <MentionsInput
        value={props.value}
        onChange={props.onChange}
        style={defaultStyle}
        placeholder="Mention any Github user by typing `@` followed by at least one char"
        displayTransform={login => `@${login}`}
      >
        <Mention trigger="@" data={fetchUsers} style={defaultMentionStyle} />
      </MentionsInput>
    </div>
  )
}

const asExample = provideExampleValue<AsyncGithubUserMentionsProps>('')
export default asExample(AsyncGithubUserMentions)
