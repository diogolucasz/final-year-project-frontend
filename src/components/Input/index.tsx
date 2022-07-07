import { ComponentType, forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { IconBaseProps } from 'react-icons'
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: ComponentType<IconBaseProps>;
}

const InputDefault: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ icon: Icon, name, ...rest }, ref) => {
    return (
        <Container>
            {Icon && <Icon size={20} />}
            <input name={name} ref={ref} {...rest} />
        </Container>
    );
};

export const Input = forwardRef(InputDefault);