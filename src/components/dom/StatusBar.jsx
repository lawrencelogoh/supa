// import styles from "@/styles/dom/StatusBar.module.scss";
// import useNotificationsStore from "@/stores/useNotificationsStore";
import styles from "../../styles/dom/StatusBar.module.scss";
import useNotificationsStore from "../../stores/useNotificationsStore";
const StatusBar = () => {
  const message = useNotificationsStore((state) => state.message);
  return (
    <div className={styles.container}>
      <div className={styles.message}>{message}</div>
    </div>
  );
};

export default StatusBar;
