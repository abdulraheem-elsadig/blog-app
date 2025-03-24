export default function Button({
  type,
  title,
}: {
  type: string;
  title: string;
}) {
  return <button className={type}>{title}</button>;
}
