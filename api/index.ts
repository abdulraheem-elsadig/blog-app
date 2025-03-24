export async function getPostsData(): Promise<
  {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[]
> {
  const response = await fetch(`${process.env.BASE_URL}/posts`);
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
}
