import type { Schema, Struct } from '@strapi/strapi';

export interface JobGeoLocation extends Struct.ComponentSchema {
  collectionName: 'components_job_geo_locations';
  info: {
    displayName: 'geo.location';
    icon: 'pinMap';
  };
  attributes: {
    address: Schema.Attribute.String & Schema.Attribute.Required;
    lat: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
    lng: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'job.geo-location': JobGeoLocation;
    }
  }
}
