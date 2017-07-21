import { graphql, gql } from 'react-apollo'
import Account from './Account'

const query = gql`
  query($userId: String!) {
    user(id: $userId) {
      id
    }
  }
`
const options = {
  options: {
    variables: {
      id: '',
    },
  },
}

// export default graphql(query, options)(Account)
export default Account
