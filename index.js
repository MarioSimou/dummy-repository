import { readFileSync } from 'node:fs'
import { cwd } from 'node:process'
import path from 'path'
import bodyParser from '@zentered/issue-forms-body-parser/pkg/parse.js'
import github from './.github/events/talk-proposal-short.json' assert { type: 'json' }
import tweetIssue from './tweetIssue.js'
const getPath = (...args) => path.join(cwd(), ...args)

// const templatePath = getPath('.github', 'ISSUE_TEMPLATE', 'talk-request.md')
// const template = readFileSync(templatePath, 'utf-8')

;(async () => {
  // console.log(event.event.issue.title)
  await tweetIssue(github.event.issue)
  // const result = await bodyParser(event.event.issue.body)
  // console.log('result: ', result)
})()
