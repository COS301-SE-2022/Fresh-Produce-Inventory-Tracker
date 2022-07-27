/* eslint-disable-next-line */
export interface LogoProps {}

export function Logo(props: LogoProps) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/EPI-USE Logo.PNG" className="w-20 h-10 p-2 bg-primary" alt="epi-use logo"></img>;
}

export default Logo;
