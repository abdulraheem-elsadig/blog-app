export default function MainCard({
  data,
}: {
  data: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
}) {
  return (
    <div className="main-card">
      <img
        src="/images/blog-1.png
      "
        className="main-card_image"
      />
      <h4 className="date-text">Sunday , 1 Jan 2023</h4>
      <h2 className="main-card_title">{data.title}</h2>
      <p>{data.body}</p>
      <ul className="tag-list">
        <li className="tag-item-1">Design</li>
        <li className="tag-item-2">Research</li>
        <li className="tag-item-3">Presentation</li>
      </ul>
    </div>
  );
}
