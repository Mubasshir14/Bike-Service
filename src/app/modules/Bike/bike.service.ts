import prisma from "../../../shared/prisma";

const createBike = async (data: any) => {
  const result = await prisma.bike.create({
    data,
  });
  return result;
};

const getAllBikes = async () => {
  const result = await prisma.bike.findMany({});
  return result;
};

const getSingleBike = async (id: string) => {
  await prisma.bike.findUniqueOrThrow({
    where: {
      bikeId: id,
    },
  });

  const result = await prisma.bike.findUnique({
    where: {
      bikeId: id,
    },
  });
  return result;
};

export const BikeService = {
  createBike,
  getAllBikes,
  getSingleBike,
};
