import {Arg, Args, Ctx, Mutation, Query, Resolver} from "type-graphql";
import {FamilyItem} from "../model/FamilyItem";
import {Context} from "../context";
import {CreateFamilyItemDTO} from "../dto/CreateFamilyItemDTO";
import {Pagination} from "../dto/Pagination";

@Resolver(FamilyItem)
export class FamilyItemResolver {


    @Query((returns) => FamilyItem, { nullable: true })
    async findById(@Arg('id') id: number, @Ctx() ctx: Context) {
        return ctx.prisma.family_item.findUnique({
            where: { id },
        })
    }
    @Query(returns => [FamilyItem])
    async findAll(@Args() { skip, take }: Pagination, @Ctx() ctx: Context) {
        return ctx.prisma.family_item.findMany({ skip, take });
    }

    @Mutation((returns) => FamilyItem)
    async createFamilyItem(
        @Arg('data') data: CreateFamilyItemDTO,
        @Ctx() ctx: Context) {
        return ctx.prisma.family_item.create({
            data: {
                name: data.name,
                position: data.position
            }
        })
    }

}