import React from 'react';
import { storiesOf } from '@storybook/react';
import { Slider } from '../../src/components/slider';
import { ThemeConfigProvider } from '../../src/components/theme';

storiesOf("轮播图", module)
    .addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
    .add('默认轮播图', () => (
        <ThemeConfigProvider>
            <Slider>
                <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1819216937,2118754409&fm=26&gp=0.jpg" />
                <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1819216937,2118754409&fm=26&gp=0.jpg" />
                <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1819216937,2118754409&fm=26&gp=0.jpg" />
                <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1819216937,2118754409&fm=26&gp=0.jpg" />
            </Slider>
        </ThemeConfigProvider>
    ));