/**
 * Checks the status of the request.
 * @param  {Object} res The response object.
 *
 * @return {Error}     Returns a error object if there's an error.
 */
const checkStatus = (res) => {
  if (res.status >= 200 && res.status < 300) {
    return res;
  }

  const error = new Error(res.statusText);
  error.response = res;

  throw error;
};

/**
 * Parses the response.
 * @param  {Object} res The response object.
 *
 * @return {Object}     The JSON object.
 */
const parseResponse = (res) => {
  if (res.status !== 200) {
    return null;
  }

  return res.json();
};

/**
 * Gets the request.
 * @param  {String} url     The url for the API.
 * @param  {Object} options Any options to apply to the fetch request.
 *
 * @return {Promise}         The fetch response.
 */
const request = (url, options) => (
  fetch(url, options)
    .then(checkStatus)
    .then(parseResponse)
);

export default request;
