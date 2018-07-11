# NextJS Worker Example

This is an example of getting web workers running in a NextJS project.

To get web workers loaded on a NextJS site with worker-loader, which allows allows for webpack loaders such as babel to be run on your workers, you must override the build output path.

Thanks to [@timneutkens](https://github.com/timneutkens) for [the help](https://github.com/zeit/next.js/issues/4768).

```javascript
// next.config.js
module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.worker\.js$/,
      loader: 'worker-loader',
      // options: { inline: true }, // also works
      options: {
        name: 'static/[hash].worker.js',
        publicPath: '/_next/',
      },
    });
    return config
  }
}
```

## Setup

    yarn install

## Run

For development mode, which works:

    yarn dev

For production mode, which doesn't work without setting the worker-loader output path:

    yarn build && yarn start