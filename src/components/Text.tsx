import {Slot} from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: string;
}

export function Text({ size = 'md', children }: TextProps) {
    return(
        <span className={clsx(
            'text-grey-100 font-sans',
            {
                'text-xs' : size === 'sm',
                'text-sm' : size === 'md',
                'text-md' : size === 'lg',
            }

        )}
        >
            {children}
            </span>
    )
}