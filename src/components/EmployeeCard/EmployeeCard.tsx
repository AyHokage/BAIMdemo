import styles from "./EmployeeCard.module.css";

interface Props {
  name: string;
  position: string;
}

const EmployeeCard = ({ name, position }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles["card-photo"]}></div>
      <div className={styles["card-title"]}>
        {name}
        <br />
        <span>{position}</span>
      </div>
      <div>
        {/* <button className={` ${styles["custom-btn"]} ${styles["btn-10"]}`}>
          Подробнее
        </button> */}
      </div>
    </div>
  );
};

export default EmployeeCard;
