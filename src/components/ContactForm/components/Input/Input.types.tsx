export interface IInputProps {
    type: 'text' | 'email';
    label: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    hasError?: boolean;
    isTextarea?: boolean;
}
