import * as S from './styled';
import { ButtonProps } from '@mui/base/Button';


interface Props{
  text?: string;
  props?: ButtonProps;
  children?: React.ReactNode;
}
export const StyleButton  = ({text,props,children}:Props) => {
  return <S.Button {...props}  >{children}{text}</S.Button>;
}