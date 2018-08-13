import { createServer } from 'http'

import app from './server'

const server = createServer(app)
let currentApp = app

const PORT = 3000

server.listen(PORT, () => {
    console.log('API is on http://localhost:' + PORT);
})

// set up hot module replacement using Webpack HotModuleReplacementPlugin
if (module.hot) {
	module.hot.accept(['./server'], () => {
		server.removeListener('request', currentApp)
		server.on('request', app)
		currentApp = app
	})
}
