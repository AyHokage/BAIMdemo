import styles from "./NoInfo.module.css";

interface Props {
  title?: string;
}
const NoInfo = ({ title }: Props) => {
  return (
    <div className={styles.containerNone}>
      <p className={styles.noProductsText}>{`${title}  ƪ(˘⌣˘)ʃ`}</p>
    </div>
  );
}; 

export default NoInfo;
