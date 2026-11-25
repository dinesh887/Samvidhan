import { buildLlmsFull, getSiteUrl } from './llmsUtils.js'

export default function handler(request, response) {
  response.setHeader('Content-Type', 'text/plain; charset=utf-8')
  response.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400')
  response.status(200).send(buildLlmsFull(getSiteUrl(request)))
}