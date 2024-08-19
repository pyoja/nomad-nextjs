import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  // const response = await fetch(`${API_URL}/${id}/videos`);
  // return response.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  throw new Error("error..server..");
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
