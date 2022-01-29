const roundedCorners = {
    medium: '4px',
}

export enum Color {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    WHITE = 'white',
    BLUE = 'blue',
    GRAYLIGHT = 'gray-light'
}

const colors = {
    [Color.SECONDARY]: '#6C8EDB',
    [Color.PRIMARY]: '#FF8800',
    [Color.WHITE]: '#FFF',
    [Color.GRAYLIGHT]: '#FAFAFA',
    [Color.BLUE]: '#4d649b',
}

/*
rems @16px
huge      35px  
giant     30px  
jumbo     25px  
biggest   22px  
bigger    19px  
big       17px  
base      15px  
small     13px  
smaller   11px  
smallest  10px  
*/

export enum FontSize {
    HUGE = 'huge',
    GIANT = 'giant',
    JUMBO = 'jumbo',
    BIGGEST = 'biggest',
    BIGGER = 'bigger',
    BIG = 'big',
    BASE = 'base',
    SMALL = 'small',
    SMALLER = 'smaller',
    SMALLEST = 'smallest',
}
const fontSize = {
    [FontSize.HUGE]: '2.168rem',
    [FontSize.GIANT]: '1.905rem',
    [FontSize.JUMBO]: '1.568rem',
    [FontSize.BIGGEST]: '1.377rem',
    [FontSize.BIGGER]: '1.21rem',
    [FontSize.BIG]: '1.063rem',
    [FontSize.BASE]: '0.933rem',
    [FontSize.SMALL]: '0.82rem',
    [FontSize.SMALLER]: '0.675rem',
    [FontSize.SMALLEST]: '0.632rem',
}

export enum FontWeight {
    LIGHT = 'light',
    NORMAL = 'normal',
    SEMIBOLD = 'semibold',
    BOLD = 'bold',
    EXTRABOLD = 'extrabold',
}
const fontWeight = {
    [FontWeight.LIGHT]: 300,
    [FontWeight.NORMAL]: 400,
    [FontWeight.SEMIBOLD]: 600,
    [FontWeight.BOLD]: 700,
    [FontWeight.EXTRABOLD]: 800,
}

export const device = {
    xs: {
        min: `(min-width: 0px)`,
        max: `(max-width: 600px)`
    },
    sm: {
        min: `(min-width: 600px)`,
        max: `(max-width: 768px)`
    },
    md: {
        min: `(min-width: 768)`,
        max: `(max-width: 992px)`
    },
    lg: {
        min: `(min-width: 992px)`,
        max: `(max-width: 1440px)`
    },

    xl: {
        min: `(min-width: 1440px)`,
        max: `(max-width: 2000px)`
    },
};

const theme = {
    roundedCorners,
    colors,
    fontSize,
    fontWeight,
    device
}

export default theme