import {Arg, Ctx, Query, Resolver} from "type-graphql";
import {ChildItem} from "../model/ChildItem";
import {Context} from "../context";

@Resolver(ChildItem)
export class ChildItemResolver {


    @Query((returns) => ChildItem, { nullable: true })
    async postById(@Arg('id') id: number, @Ctx() ctx: Context) {
        return ctx.prisma.child_item.findUnique({
            where: { id },
        })
    }
}