import { Vendor } from '../schemas/vendor.schema';

export type PaginatedVendor = {
  count: number;
  totalPages: number;
  vendors: Vendor[];
};
