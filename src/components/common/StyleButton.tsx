import { ButtonProps,Button as BaseButton } from '@mui/base/Button';

interface Props{
  text: string;
  props?: ButtonProps;
}
export const StyleButton  = ({text,props}:Props) => {
  return <BaseButton {...props}  >{text}</BaseButton>;
}