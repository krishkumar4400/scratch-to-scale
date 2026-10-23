import type { PropsWithChildren, ReactNode } from "react"

interface CardProps extends PropsWithChildren {
    title: string;
    footer?: ReactNode;
}

const Card2 = ({ title, children, footer }: CardProps) => {
    return (
        <div>
            <h2>
                {title}
            </h2>
            <div>
                {children}
            </div>
            <div>
                {
                    footer && <footer>
                        {footer}
                    </footer>
                }
            </div>
        </div>
    )
}

export default Card2
