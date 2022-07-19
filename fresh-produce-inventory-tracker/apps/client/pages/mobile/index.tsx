/* eslint-disable-next-line */
export interface MobileProps {}

export function Mobile(props: MobileProps) {
  return (
    <div>
      <input type="file" accept="image/*" capture="environment"></input>
    </div>
  );
}

export default Mobile;
