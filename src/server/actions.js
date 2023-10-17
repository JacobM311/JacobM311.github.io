import HttpError from '@wasp/core/HttpError.js'

export const createProject = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const { image, description, link, githubLink } = args;

  return context.entities.Project.create({
    data: {
      image,
      description,
      link,
      githubLink,
      userId: context.user.id
    }
  });
}

export const updateProject = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const project = await context.entities.Project.findUnique({
    where: { id: args.id }
  });
  if (project.userId !== context.user.id) { throw new HttpError(403) };

  return context.entities.Project.update({
    where: { id: args.id },
    data: { image: args.image, description: args.description, link: args.link, githubLink: args.githubLink }
  });
}

export const deleteProject = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const project = await context.entities.Project.findUnique({
    where: { id: args.id }
  });
  if (project.userId !== context.user.id) { throw new HttpError(403) };

  await context.entities.Project.delete({
    where: { id: args.id }
  });
}
