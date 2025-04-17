import prisma from "../../../shared/prisma";
import { AppError } from "../../error/AppError";

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
  const result = await prisma.bike.findUnique({
    where: {
      bikeId: id,
    },
  });

  if (!result) {
    throw new AppError(404, "Bike Not Found");
  }

  return result;
};

export const BikeService = {
  createBike,
  getAllBikes,
  getSingleBike,
};
