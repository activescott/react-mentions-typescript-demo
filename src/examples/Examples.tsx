import * as React from 'react'

import AsyncGithubUserMentions from './AsyncGithubUserMentions'
import SingleLine from './SingleLine'


const users = [
  {
    id: 'walter',
    display: 'Walter White',
  },
  {
    id: 'jesse',
    display: 'Jesse Pinkman',
  },
  {
    id: 'gus',
    display: 'Gustavo "Gus" Fring',
  },
  {
    id: 'saul',
    display: 'Saul Goodman',
  },
  {
    id: 'hank',
    display: 'Hank Schrader',
  },
  {
    id: 'skyler',
    display: 'Skyler White',
  },
  {
    id: 'mike',
    display: 'Mike Ehrmantraut',
  },
]

interface Props {
}

export const Examples: React.SFC<Props> = (props) => {
  return (
    <div style={ {width: '80%'} }>
      <SingleLine
        data={users} 
      />
      <AsyncGithubUserMentions
        data={users}
      />
    </div>
  )
}
