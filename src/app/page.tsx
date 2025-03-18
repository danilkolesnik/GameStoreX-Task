import styles from "./page.module.css";
import { LoaderCircle } from "lucide-react";
import { redirect } from "next/navigation";

export default function Home() {

  redirect('/auth');
  
  return (
    <div className={styles.page}>
      <div className={styles.loaderWrapper}>
        <LoaderCircle className={styles.loader} size={32} strokeWidth={2} />
      </div>
    </div>
  );
}
