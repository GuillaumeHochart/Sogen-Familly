import {Field, ID, InputType} from "type-graphql";
import {ChildItem} from "../model/ChildItem";

@InputType()
export class CreateFamilyItemDTO {


    @Field()
    name: string;

    @Field()
    position: number;
}