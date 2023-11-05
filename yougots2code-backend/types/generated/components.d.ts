import type { Schema, Attribute } from '@strapi/strapi';

export interface CoursesTextTopic extends Schema.Component {
  collectionName: 'components_courses_text_topics';
  info: {
    displayName: 'TextTopic';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    content: Attribute.Text;
    rank: Attribute.Integer;
  };
}

export interface CoursesVideoTopic extends Schema.Component {
  collectionName: 'components_courses_video_topics';
  info: {
    displayName: 'videoTopic';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    url: Attribute.String;
    rank: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'courses.text-topic': CoursesTextTopic;
      'courses.video-topic': CoursesVideoTopic;
    }
  }
}
