import { useParams } from "react-router-dom";
import kitchen_data from "../assets/kitchen_data.json";

function NoKitchenFound() {
  return (
    <div style={{ padding: "20px", textAlign: "center", color: "white" }}>
      Küche nicht gefunden!
    </div>
  );
}

function KitchenPage() {
  const { kitchenType } = useParams();

  const currentKitchen = kitchen_data.find(
    (kitchen) => kitchen.path === kitchenType,
  );

  if (!currentKitchen) {
    return NoKitchenFound();
  }

  return (
    <iframe
      src={`/src/pages/public/${currentKitchen?.path}/index.html`}
      title={currentKitchen?.title}
      width="100%"
      height="100%"
      style={{ border: "none", minHeight: "75vh" }}
    />
  );
}

export default KitchenPage;
