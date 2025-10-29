type ImgProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> & {
    src: string
}

const BASE_PATH = ""

export function Img({ src, alt, ...props }: ImgProps) {
    const fixedSrc = src.startsWith("/")
        ? `${BASE_PATH}${src}`
        : `${BASE_PATH}/${src}`
    return <img src={fixedSrc} alt={alt} {...props} />
}
