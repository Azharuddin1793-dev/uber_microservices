const autocannon = require('autocannon');

// Run the test
const runTest = () => {
  const instance = autocannon({
    url: 'http://localhost:3005',
    duration: 30, // Test duration in seconds
    connections: 10, // Number of concurrent connections
    pipelining: 1, // Number of pipelined requests
    timeout: 10, // Timeout for each request in seconds
  });

  autocannon.track(instance, { renderProgressBar: true });

  instance.on('done', (result) => {
    console.log('Test finished!');
    console.log(`Requests per second: ${result.requests.average}`);
    console.log(`No of Requests: ${result.requests.sent}`);

    console.log(`Latency (ms): ${result.latency.average}`);
    console.log(`Errors: ${result.errors}`);
  });
};

runTest();
