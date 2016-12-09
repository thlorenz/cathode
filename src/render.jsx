//
// Modeled after : http://redux.js.org/docs/recipes/ServerRendering.html
// with help from: http://crypt.codemancers.com/posts/2016-09-16-react-server-side-rendering/
//

const configureStore = require('./store/configure-store')
const React = require('react')
const { renderToString } = require('react-dom/server')
const { Provider } = require('react-redux')
const { RouterContext, match } = require('react-router')
const routes = require('./routes')

const store = configureStore({ faucets: [ { title: 'chrome' }, { title: 'silver' } ] })

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Simple Electrode App (server side rendered)</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script type="text/javascript" src="/static/vendor.js"></script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

module.exports = function render(req, res) {
  function onmatch(
    err,
    redirectLocation,
    { router, location, routes, params, components }) {
    if (err) return console.error(err)

    const html = renderToString(
      <Provider store={store}>
        <RouterContext
          router={router}
          location={location}
          routes={routes}
          params={params}
          components={components} />
      </Provider>
    )
    const preloadedState = store.getState()
    res.send(renderFullPage(html, preloadedState))
  }

  // match explained here:
  // https://github.com/ReactTraining/react-router/blob/master/docs/API.md#match-routes-location-history-options--cb
  match({ routes, location: req.url }, onmatch)
}
