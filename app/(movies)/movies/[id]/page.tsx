export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return <h1>Moive {id}</h1>;
}
