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
  
  
    return { get};
  }
  