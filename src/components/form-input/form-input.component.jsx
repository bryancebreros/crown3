import {FormInputLabel, Input, Group} from "./form-input.styles"

const FormInput = ({label, ...otherProps}) => {
    return (
        <Group>
            <FormInput {...otherProps} />
            {label && (
                <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
            )}
        </Group>
    );
};

export default FormInput;