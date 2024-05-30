import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class City extends Document {
  @Prop({ type: Object })
  name: {
    en: string;
    fr: string;
    arSA: string;
  };

  @Prop({ type: Object })
  state: {
    en: string;
    fr: string;
    arSA: string;
  };

  @Prop({ type: Object })
  country: {
    en: string;
    fr: string;
    arSA: string;
  };

  @Prop({ type: String })
  postalCode: string;

  @Prop({ type: [{ type: Object }] })
  media: {
    id: string;
    about: string;
    type: 'IMAGE' | 'VIDEO';
    url: string;
  }[];

  @Prop({ type: Object })
  location: {
    lat: string;
    long: string;
  };

  @Prop({ type: Object })
  details: {
    about: {
      en: string;
      fr: string;
      ar: string;
    };
  };

  @Prop({ type: [String] })
  searchkey: string[];

  @Prop({ type: Object })
  translations: {
    fr: {
      city: string;
      country: string;
    };
    ar: {
      city: string;
      country: string;
    };
    // Add translations for other languages if needed
  };
  @Prop({ type: String, enum: ['ACTIVE', 'INACTIVE', 'UNDER_REVIEW', 'DEPRECATED'], default: 'ACTIVE' })
status: 'ACTIVE' | 'INACTIVE' | 'UNDER_REVIEW' | 'DEPRECATED';

}

export const CitySchema = SchemaFactory.createForClass(City);
