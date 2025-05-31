export async function httpRequest(url, options = {}) {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'x-api-key': API_KEY
  };

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...(options.headers || {})
    }
  };

  const response = await fetch(url, config);

  let data = null;

  if (response.status !== 204) {
    try {
      data = await response.json();
    } catch (e) {
      throw new Error('Failed to parse response JSON');
    }
  }

  // Error Handling
  if (!response.ok) {
    const errorMessage = data?.error || `API Error: ${response.status}`;
    throw new Error(errorMessage);
  }

  return data || {};
}
