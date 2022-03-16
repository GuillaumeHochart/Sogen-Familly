import {Field, ID, ObjectType} from "type-graphql";
import 'reflect-metadata'

@ObjectType()
export class ChildItem {

    @Field((type) => ID)
    id: number;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field({ nullable: true })
    firstName?:string;

    @Field({ nullable: true })
    lastName?:string;

    @Field()
    familly_itemId:number;
}