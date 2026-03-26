import { DefaultTheme } from "styled-components";

enum ThemeMode {
    Light = "light",
    Dark = "dark"
}

enum Size {
    Md = "md",
    Lg = "lg",
}

declare module "styled-components"{
    interface DefaultTheme{
        colors: {[color: string]: string};
        fonts:{
            family: string;
            size: {[key in Size]: string};
        }
    }
}

const defaultTheme = {
    fonts: {
            family: "sans-serif",
            size: {
                [Size.Md]: "16px",
                [Size.Lg]: "24px",
              
            }
        }
};

const lightTheme: DefaultTheme = {
    colors: {
        primary: "#ffff00",
        secondary: "#00ff00",
        background: "#ffffff",
    },
    ...defaultTheme
    
};

const darkTheme: DefaultTheme = {
    colors: {
        primary: "#ffa000",
        secondary: "#00af00",
        background: "#000000",
    },
    ...defaultTheme
    
};

export {ThemeMode, lightTheme, darkTheme};