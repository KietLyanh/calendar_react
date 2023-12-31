import { useQuery } from "@tanstack/react-query";
import { getCalendarDataApi } from "../utils/api/calendar";
import { IParamsGetCalendarDataPrisma } from "../prisma/calendar";
import { QUERY_KEYS } from "../utils/keys";

const useCalendarData = ({
  page,
  limit,
  keyword,
  accessToken,
}: IParamsGetCalendarDataPrisma) => {
  return useQuery({
    queryKey: [QUERY_KEYS.CALENDAR_LIST, page, limit, keyword],
    queryFn: () => getCalendarDataApi({ page, limit, keyword, accessToken }),
    enabled: !!accessToken,
  });
};

export default useCalendarData;
