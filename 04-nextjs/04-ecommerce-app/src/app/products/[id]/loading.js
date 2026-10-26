import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetailsLoading() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Skeleton className="mb-8 h-5 w-36" />

        <div className="grid gap-10 rounded-2xl border border-gray-200 bg-white p-6 md:grid-cols-2 md:p-10">
          {/* Image */}
          <div className="flex min-h-80 items-center justify-center rounded-xl bg-gray-50 p-8">
            <Skeleton className="h-72 w-full max-w-sm rounded-xl" />
          </div>

          {/* Details */}
          <div className="space-y-5 py-4">
            <Skeleton className="h-6 w-32 rounded-full" />
            <Skeleton className="h-9 w-full" />
            <Skeleton className="h-9 w-4/5" />
            <Skeleton className="h-5 w-36" />
            <Skeleton className="h-9 w-28" />

            <div className="space-y-3 pt-4">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            <Skeleton className="mt-6 h-12 w-44 rounded-xl" />
          </div>
        </div>
      </div>
    </main>
  );
}
