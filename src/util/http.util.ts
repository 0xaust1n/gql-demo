import { request, gql } from 'graphql-request';

export const callListOrder = async () => {
  const query = gql`
    query listOrderApk($data: ListOrderInput!) {
      listOrderApk(data: $data) {
        status
        message
        body {
        }
      }
    }
  `;

  console.log(query);
  console.log(typeof query);
  const data = { memberId: '0d186f95-0f0e-11ed-b16b-0242ac130002' };
  const obj = {
    data,
  };

  const url = 'http://localhost:3006/graphql';

  const res = await gqlReuqest(url, query, obj);
};

const gqlReuqest = async (url: string, body: string, query: any) => {
  try {
    const res = await request(url, body, query);
    console.log(res.listOrderApk);
    return res.listOrderApk;
  } catch (error) {
    console.log(error.message);
  }
};
