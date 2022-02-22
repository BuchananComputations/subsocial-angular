import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';

import { ImageLoaderComponent } from './image-loader.component';
import {
  IconRegistryProviders,
  imageUrl,
} from '../../../core/constants/storybook.const';
import { HttpClientModule } from '@angular/common/http';
import { InputModule } from '../input.module';
import { I18NextModule } from 'angular-i18next';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { I18N_PROVIDERS } from '../../../locale/i18next.config';

export default {
  title: 'Inputs/Image Loader',
  component: ImageLoaderComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        InputModule,
        I18NextModule.forRoot(),
        MatSnackBarModule,
      ],
      declarations: [],
      providers: [...IconRegistryProviders, ...I18N_PROVIDERS],
    }),
    componentWrapperDecorator((story) => {
      return `
      <div class="sb-container">
            ${story}
        </div>`;
    }),
  ],
} as Meta;

const Template: Story<ImageLoaderComponent> = (args: ImageLoaderComponent) => ({
  component: ImageLoaderComponent,
  props: args,
});

const params = {
  controls: {
    include: ['imageUrl', 'type', 'fileSizeLimit'],
  },
};

export const Round: Story<ImageLoaderComponent> = Template.bind({});
Round.args = {
  type: 'round',
  fileSizeLimit: 2,
};
Round.parameters = params;

export const RoundWithImage: Story<ImageLoaderComponent> = Template.bind({});
RoundWithImage.args = {
  type: 'round',
  imageUrl: imageUrl,
  fileSizeLimit: 2,
};
RoundWithImage.parameters = params;

export const Square: Story<ImageLoaderComponent> = Template.bind({});
Square.args = {
  type: 'square',
  fileSizeLimit: 2,
};
Square.parameters = params;

export const SquareWithImage: Story<ImageLoaderComponent> = Template.bind({});
SquareWithImage.args = {
  type: 'square',
  imageUrl: imageUrl,
  fileSizeLimit: 2,
};
SquareWithImage.parameters = params;