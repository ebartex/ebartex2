// fetch.ts
export default function FetchClient() {
    const get = async <T>(endpoint: string): Promise<T> => {
      const response = await fetch(`${endpoint}`, {

      });
  
      if (!response.ok) {
        throw new Error(`GET request failed with status ${response.status}`);
      }
  
      return response.json();
    };
  
    const post = async <T>(endpoint: string, body: any): Promise<T> => {
      const response = await fetch(`${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        throw new Error(`POST request failed with status ${response.status}`);
      }
  
      return response.json();
    };
  
    return { get, post };
  }
  