import { Customer } from "../../../../generated/prisma";
import prisma from "../../../shared/prisma";
import { AppError } from "../../error/AppError";
import { CustomerData } from "./customer.constant";

const createCustomer = async (data: any) => {
  const result = await prisma.customer.create({
    data,
  });
  return result;
};

const getAllCustomers = async () => {
  const result = await prisma.customer.findMany({});
  return result;
};

const getCustomerById = async (id: string) => {
  const result = await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });

  if (!result) {
    throw new AppError(404, "Customer Not Found");
  }
  
  return result;
};

const updateCustomerById = async (id: string, data: Partial<Customer>) => {
  if (data.email) {
    throw new Error("Email cannot be updated");
  }

  await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: id,
    },
  });

  const result = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data,
  });
  return result;
};

const deleteCustomerFromDb = async (id: string) => {
  await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: id,
    },
  });

  const result = await prisma.customer.delete({
    where: {
      customerId: id,
    },
  });
  //   return result;
};

export const CustomerService = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomerById,
  deleteCustomerFromDb,
};
