import styles from './logo.module.css';

/* eslint-disable-next-line */
export interface LogoProps {}

export function Logo(props: LogoProps) {
  return (
    <img src="EPI-USE Logo.png" className="w-full"></img>
  );
}

export default Logo;
