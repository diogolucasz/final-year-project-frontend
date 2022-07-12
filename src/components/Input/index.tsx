import { ComponentType, forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { IconBaseProps } from 'react-icons'
import { Container, Error } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: ComponentType<IconBaseProps>;
    error?: FieldError
}

const InputDefault: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ icon: Icon, name, error, ...rest }, ref) => {
    return (
        <>
            <Container>
                {Icon && <Icon size={20} />}
                <input name={name} ref={ref} {...rest} />
            </Container>
            {
                error && <Error>{error.message}</Error>
            }
        </>
    );
};

export const Input = forwardRef(InputDefault);