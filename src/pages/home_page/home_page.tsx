import { Link } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import { useEffect, useState } from "react";
import styles from "./home.module.css";

interface KitchenData {
  id: number;
  flag_file_name: string;
  folder_name: string;
  title: string;
  description: string;
}

function HomePage() {
  const [kitchens, setKitchens] = useState<KitchenData[]>([]);
  const [loading, setLoading] = useState(true); // Initialization of the loading

  useEffect(() => {
    setLoading(true);
    const fetchKitchens = async () => {
      setLoading(true);
      const { data } = await supabase
        .from("kitchen_cards")
        .select("title, flag_file_name, folder_name, description, id");

      if (data) setKitchens(data);
      setLoading(false); // End the loading
    };

    fetchKitchens();
  }, []);

  if (loading) {
    return <div>Laden</div>;
  }

  return (
    <div className={styles.homePageBody}>
      <h2 className={styles.statement}>
        Entdecken Sie unsere verschiedenen Küchen:
      </h2>
      <div className={styles.gridContainer}>
        {kitchens.map((kitchen) => (
          <div key={kitchen.id} className={styles.gridCard}>
            <img
              src={`${import.meta.env.BASE_URL}flags/${kitchen["flag_file_name"]}`}
              alt={kitchen.title}
              className={styles.flagImg}
            />
            <div className={styles.cardText}>
              <Link
                to={`/kitchen/${kitchen.folder_name}/index.html`}
                className={styles.link}
              >
                {kitchen.title}
              </Link>
              <p>{kitchen.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
