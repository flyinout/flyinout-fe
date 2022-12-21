export default function CollaborationCard({ title, description }) {
  return (
    <div
      className=" p-4 rounded-lg text-left h-full w-full self-center"
      style={{ background: "#383440", maxWidth: "20rem", height: "12rem" }}
    >
      <h3 className="text-md text-primary font-bold">{title}</h3>
      <p className="text-secondary">{description}</p>
    </div>
  );
}
