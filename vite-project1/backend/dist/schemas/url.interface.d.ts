/// <reference types="mongoose/types/pipelinestage" />
import { Document } from 'mongoose';
export declare class Url extends Document {
    urlId: string;
    origUrl: string;
    shortUrl: string;
    clicks: number;
    createdDate: Date;
}
export declare const UrlSchema: import("mongoose").Schema<Url, import("mongoose").Model<Url, any, any, any>, any, any>;
