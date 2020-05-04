import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import axios from 'axios'

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  console.log(axios)
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'もがもが',
      input: event,
    }, null, 2),
  };
}
