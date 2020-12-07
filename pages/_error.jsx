import Error from 'next/error';
import Router from 'next/router';

export default Error;

Error.getInitialProps = ({ res, err, asPath }) => {
  let statusCode = 404;
  if (res) {
    statusCode = res.statusCode;
  }
  if (err) {
    statusCode = err.statusCode;
  }

  if (statusCode && statusCode === 404) {
    if (asPath.match(/\/$/)) {
      const withoutTrailingSlash = asPath.substr(0, asPath.length - 1);
      if (res) {
        res.writeHead(302, {
          Location: withoutTrailingSlash,
        });
        res.end();
      } else {
        Router.push(withoutTrailingSlash);
      }
    }
  }

  return { statusCode };
};
