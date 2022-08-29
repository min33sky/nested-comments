import { makeRequest } from './makeRequest';

export async function getPosts() {
  return await makeRequest('/api/posts');
}

export async function getPost(id: string) {
  return await makeRequest(`/api/posts/${id}`);
}
