interface Props {
    bg: string
    fill: string
}

export const Wave = ({ bg, fill }: Props) => {
    return (
        <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            style={{ background: bg }}
        >
            <path
                d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,0 L0,0 Z"
                fill={fill}
            ></path>
        </svg>
    )
}
