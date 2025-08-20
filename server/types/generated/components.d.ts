import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHomePage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_home_pages';
  info: {
    displayName: 'home-page';
    icon: 'apps';
  };
  attributes: {
    cta: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    person: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksOurTeam extends Struct.ComponentSchema {
  collectionName: 'components_blocks_our_teams';
  info: {
    displayName: 'our-team';
    icon: 'book';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    members: Schema.Attribute.Component<'components.team-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_blocks_testimonials';
  info: {
    displayName: 'testimonials';
  };
  attributes: {
    clients: Schema.Attribute.Component<'components.client-card', true>;
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsClientCard extends Struct.ComponentSchema {
  collectionName: 'components_components_client_cards';
  info: {
    displayName: 'client-card';
    icon: 'book';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
  };
}

export interface ComponentsTeamCard extends Struct.ComponentSchema {
  collectionName: 'components_components_team_cards';
  info: {
    displayName: 'team-card';
  };
  attributes: {
    email: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    position: Schema.Attribute.RichText;
    whatsapp: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.home-page': BlocksHomePage;
      'blocks.our-team': BlocksOurTeam;
      'blocks.testimonials': BlocksTestimonials;
      'components.client-card': ComponentsClientCard;
      'components.team-card': ComponentsTeamCard;
    }
  }
}
