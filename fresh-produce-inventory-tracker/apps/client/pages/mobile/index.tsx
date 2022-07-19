import styles from './index.module.css';

/* eslint-disable-next-line */
export interface MobileProps {}

export function Mobile(props: MobileProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Mobile!</h1>
    </div>
  );
}

export default Mobile;
