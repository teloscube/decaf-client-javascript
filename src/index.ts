type Props = {
  name: string;
};

export function sayHi(props: Props) {
  return `Hi, ${props.name}`;
}
