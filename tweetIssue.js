import issueParser from '@zentered/issue-forms-body-parser/pkg/parse.js'

const ISSUE_EVENTS = {
  TALK_PROPOSAL_FEATURE: 'talk-proposal-feature',
  TALK_PROPOSAL_LIGHTNING: 'talk-proposal-lightning',
  TALK_REQUEST: 'talk-request',
  SUGGESTION: 'suggestion',
  EVENT: 'event',
  SPONSOR_REQUEST: 'sponsor-request',
}

const getIssueType = issue => {
  const [label] = issue.labels
  switch (true) {
    case /Talk: Feature/.test(label.name):
      return ISSUE_EVENTS.TALK_PROPOSAL_FEATURE
    case /Talk: Lightning/.test(label.name):
      return ISSUE_EVENTS.TALK_PROPOSAL_LIGHTNING
    case /Talk Request/.test(label.name):
      return ISSUE_EVENTS.TALK_REQUEST
    // case /New Idea/.test(label.name):
    //   return ISSUE_EVENTS.SUGGESTION
    // case /Event/.test(label.name):
    //   return ISSUE_EVENTS.EVENT
    // case /Sponsor Request/.test(label.name):
    //   return ISSUE_EVENTS.SPONSOR_REQUEST
    default:
      return undefined
  }
}

const ErrIssueTypeNotFound = new Error('error: Issue type is not available yet')

const getAuthor = issue => issue?.user?.login
const getIssueLink = issue => issue?.html_url
const getTitle = issue => issue?.title

const getTweet = (title, author, link) =>
  `${title} by ${author}. Learn more here: ${link}`

const tweetIssue = async issue => {
  const issueLink = getIssueLink(issue)
  const author = getAuthor(issue)
  const title = getTitle(issue)
  const tweet = getTweet(title, author, issueLink)
  return tweet
}

export default tweetIssue
