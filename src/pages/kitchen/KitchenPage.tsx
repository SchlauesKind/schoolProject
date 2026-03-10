import { useParams } from "react-router-dom";
import kitchen_data from "./kitchen_data.json";

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

  // URL будет: /kitchen/russian/index.html
  const iframeSrc = `kitchen/${kitchenType}/index.html`;

  return (
    <iframe
      src={iframeSrc}
      title={currentKitchen?.title}
      width="100%"
      height="100%"
      style={{ border: "none", height: "200vh" }}
    />
  );
}

export default KitchenPage;
