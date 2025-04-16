import { ServiceRecord, ServiceStatus } from "../../../generated/prisma";
import prisma from "../../../shared/prisma";
import { subDays } from "date-fns";

const createService = async (data: any) => {
  const { status = "pending", ...restData } = data;
  const result = await prisma.serviceRecord.create({
    data: {
      ...restData,
      status: status as ServiceStatus,
    },
  });

  return result;
};

const getAllService = async () => {
  const result = await prisma.serviceRecord.findMany({});
  return result;
};

const getServiceById = async (id: string) => {
  await prisma.serviceRecord.findUniqueOrThrow({
    where: {
      serviceId: id,
    },
  });

  const result = await prisma.serviceRecord.findUnique({
    where: {
      serviceId: id,
    },
  });
  return result;
};

const updateServiceById = async (id: string, data: Partial<ServiceRecord>) => {
  await prisma.serviceRecord.findUniqueOrThrow({
    where: {
      serviceId: id,
    },
  });

  if (data.completionDate) {
    data.status = ServiceStatus.done;
  }

  const result = await prisma.serviceRecord.update({
    where: {
      serviceId: id,
    },
    data,
  });

  return result;
};

export const getPendingOrOverdueServices = async () => {
  const sevenDaysAgo = subDays(new Date(), 7);

  const result = await prisma.serviceRecord.findMany({
    where: {
      AND: [
        {
          status: {
            in: [ServiceStatus.pending, ServiceStatus.in_progress],
          },
        },
        {
          serviceDate: {
            lt: sevenDaysAgo,
          },
        },
      ],
    },
  });

  return result;
};

export const ServiceRecordService = {
  createService,
  getAllService,
  getServiceById,
  updateServiceById,
  getPendingOrOverdueServices,
};
