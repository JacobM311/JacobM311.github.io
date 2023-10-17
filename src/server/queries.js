import HttpError from '@wasp/core/HttpError.js'

export const getUser = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.User.findUnique({
    where: { id: args.userId }
  });
}

export const getProjects = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  return context.entities.Project.findMany({
    where: {
      user: { id: context.user.id }
    }
  });
}
