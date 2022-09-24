import styles from './index.module.css';

/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to About!</h1>
    </div>
  );
}

export default About;
