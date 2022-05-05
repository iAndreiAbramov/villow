export interface IInputProps {
    type: 'text' | 'email';
    label: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    error?: string;
}
