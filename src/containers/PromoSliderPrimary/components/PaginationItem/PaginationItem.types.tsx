export interface IPaginationItemProps {
    isActive: boolean;
    order: number;
    handleClick: (order: number) => void;
}
