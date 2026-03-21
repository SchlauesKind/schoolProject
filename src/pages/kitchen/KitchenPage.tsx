import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../supabaseClient";

interface KitchenData {
  title: string;
  folder_name: string;
}

function KitchenPage() {
  const [kitchens, setKitchens] = useState<KitchenData[]>([]);
  const [loading, setLoading] = useState(true); // Initialization of the loading
  const { kitchen_url } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchKitchens = async () => {
      setLoading(true);
      const { data } = await supabase
        .from("kitchen_cards")
        .select("title, folder_name");

      if (data) setKitchens(data);
      setLoading(false); // End the loading
    };

    fetchKitchens();
  }, []);

  const currentKitchen = kitchens.find(
    (kitchen) => kitchen.folder_name === kitchen_url,
  );

  if (loading) {
    return <div>Laden: "{kitchen_url}"</div>;
  }

  if (!currentKitchen) {
    return (
      <div>Küche: "{kitchen_url}" existiert nicht, oder fehlt im Database.</div>
    );
  }

  // URL: /kitchen/russian/index.html
  const iframeSrc = `kitchen/${currentKitchen?.folder_name}/index.html`;

  return (
    <iframe
      src={iframeSrc}
      title={currentKitchen?.title}
      width="100%"
      height="100%"
      style={{ border: "none", height: "calc(100vh - 67px)" }}
    />
  );
}

export default KitchenPage;
