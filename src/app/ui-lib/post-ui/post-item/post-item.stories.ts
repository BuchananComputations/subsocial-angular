import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';

import {
  IconRegistryProviders,
  PostTemplate,
  SbDeviceRegistry,
  SbRouterModule,
  SbStoreModules,
} from '../../../core/constants/storybook.const';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from '../../../transloco-root.module';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostUiModule } from '../post-ui.module';
import { PostItemComponent } from './post-item.component';
import { AppModule } from '../../../app.module';
import { DeviceService } from '../../../shared/services/device.service';
import { APP_INITIALIZER } from '@angular/core';
import { IconRegistryService } from '../../../shared/services/icon-registry.service';

export default {
  title: 'Post/Post Item',
  component: PostItemComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HttpClientModule,
        PostUiModule,
        TranslocoRootModule,
        MatIconModule,
        BrowserAnimationsModule,
        SbRouterModule,
        SbStoreModules,
      ],
      declarations: [],
      providers: [...IconRegistryProviders, ...SbDeviceRegistry],
    }),
    componentWrapperDecorator((story) => {
      return `
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
      <div class="sb-container">
            ${story}
        </div>`;
    }),
  ],
} as Meta;

const params = {
  controls: {
    include: ['postItemData', 'tagCtrl'],
  },
};

const Template: Story<PostItemComponent> = (args: PostItemComponent) => ({
  component: PostItemComponent,
  props: args,
});

export const PostItem: Story<PostItemComponent> = Template.bind({});
PostItem.args = {
  postItemData: PostTemplate,
};

PostItem.parameters = params;