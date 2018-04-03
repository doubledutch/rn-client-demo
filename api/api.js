const router = Router()

router.use((req, res, next) => {
  req.authAttendee().then(attendee => {
    req.attendee = attendee
    next()
  })
  .catch(e => {
    res.status(401).end()
  })
})

const ensureAdam = (req, res, next) => req.attendee.username === 'adam@doubledutch.me' ? next() : res.status(403).end()

router.get('/', (req, res) => {
  res.send({path: req.path, root_path: true})
})
router.get('/:sub', ensureAdam, (req, res) => {
  res.send({attendee: req.attendee, sub: req.params.sub, query: req.query, path: req.path, app: Object.keys(req.app).join(', '), req: Object.keys(req).join(', '), res: Object.keys(res).join(', ')})
})

module.exports = (req, res) => {
  router(req, res, err => err ? res.status(500).end() : res.status(404).end())
}