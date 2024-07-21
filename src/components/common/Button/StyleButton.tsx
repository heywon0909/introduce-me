import * as S from './styled';
import { ButtonProps } from '@mui/base/Button';


interface Props{
  text: string;
  props?: ButtonProps;
}
export const StyleButton  = ({text,props}:Props) => {
  return <S.Button {...props}  >{text}</S.Button>;
}