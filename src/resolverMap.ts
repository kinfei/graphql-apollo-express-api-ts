import { IResolvers } from "@graphql-tools/utils";

const resolverMap: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
      return `👋 Hello world! 👋`;
    },
  },
};

export default resolverMap;
