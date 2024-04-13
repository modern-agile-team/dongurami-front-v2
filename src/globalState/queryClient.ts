/*
 * Created on Sat Apr 13 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

export default queryClient;
