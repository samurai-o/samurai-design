import { CSSProperties } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { IThemeContext } from '../theme';
import { defaultTheme } from '../theme/defaultTheme';

export function makeStyles<ClassKey extends string = string>(styles: Record<ClassKey, CSSProperties | any>, options?: any): (props?: any) => Record<ClassKey, string> {
    return function useStyles(props?: any) {
        const theme = useTheme<IThemeContext>();
        const themeConfig = theme || defaultTheme
        const useClassname = createUseStyles<IThemeContext, ClassKey>(styles as any, {
            name: themeConfig.namespace,
        });
        return useClassname(props);
    }
}