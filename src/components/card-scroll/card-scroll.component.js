/**
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

import { h } from 'preact';

import { Card } from 'src/components';

import { ScrollContainerDiv, ContainerDiv } from './card-scroll.style';

export const CardScroll = ({ tools, horizontalScroll }) => {
  const ContainerComponent = horizontalScroll
    ? ScrollContainerDiv
    : ContainerDiv;

  return (
    <ContainerComponent numCards={tools.length}>
      {tools.map(({ title, description, link }) => (
        <Card
          fullCard={!horizontalScroll}
          title={title}
          description={description}
          link={link}
        />
      ))}
    </ContainerComponent>
  );
};
