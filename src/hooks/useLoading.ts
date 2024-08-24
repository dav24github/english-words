import { LoadingService } from "@/services/loading.service";
import { useEffect, useState } from "react";

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const popUpService$ = LoadingService.getSubject();

  useEffect(() => {
    popUpService$.subscribe((val) => {
      setIsLoading(val);
    });
  }, []);

  return isLoading;
};
