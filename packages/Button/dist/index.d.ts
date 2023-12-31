import * as React from 'react';

interface IUpdaptButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    size: string;
    variant: string;
    disabled?: boolean;
    src?: string;
}
declare function UpdaptButton(props: IUpdaptButtonProps): React.JSX.Element;

export { UpdaptButton };
