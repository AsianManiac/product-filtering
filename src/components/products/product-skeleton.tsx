import { Skeleton } from "@/components/ui/skeleton";

const ProductSkeleton = () => {
  return (
    <div className="relative animate-pulse">
      <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
        <Skeleton className="h-full w-full bg-gray-200" />
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <Skeleton className="bg-gray-200 h-4 w-full" />
        <Skeleton className="bg-gray-200 h-4 w-full" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
