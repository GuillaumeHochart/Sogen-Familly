import {Field, ID, ObjectType} from "type-graphql";
import {ChildItem} from "./ChildItem";
import 'reflect-metadata'

@ObjectType()
export class FamilyItem {

    @Field((type) => ID)
    id: number;

    @Field()
    createdAt: Date;

    @Field()
    name: string;

    @Field()
    updatedAt: Date;

    @Field()
    position: number;

    @Field(type => [ChildItem])
    child_item: ChildItem[]
}